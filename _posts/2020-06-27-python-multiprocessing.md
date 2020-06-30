---
layout: post
title:  "Using Multiprocessing to Increase Multiple Files IO Speed in Python"
categories: technology
tags: python multiprocessing 
author: LZN
---

* content
{:toc}

In the **[Spellcaster!](https://novarizark.github.io/Side%20Projects/#spellcaster)** project, we combined observational analysis data and s2s forecast data to form the forecast inputs. 
By the default scratch code I wrote, the process is very slow. For 2000 stations, it took nearly 30 minutes to complete the combination.
I speculated the bottleneck is in the IO, so here I try to use `multiprocessing` in python to inrease the IO speed.

The orginal hotspot code:
```python
for idx, row in sta_df.iterrows():
    sta_num=str(int(row['区站号']))
   # print(sta_num+' '+row['省份']+' '+row['站名'])
    lat_sta=conv_deg(row['纬度(度分)'][0:-1])
    lon_sta=conv_deg(row['经度(度分)'][0:-1])
    var=var1.sel(lat=lat_sta,lon=lon_sta,method='nearest')
    clim_var = var.loc['1981-01-01':'2010-12-31'].groupby("time.month").mean()
    ano_var = (var.groupby("time.month") - clim_var)
    ano_series=np.concatenate((ano_var.values,np.array((0.0,)),(fcst_var1.sel(LAT=lat_sta, LON=lon_sta, method='nearest').values,)))
    np_time=np.append(hist_time.values, np.datetime64('now'))
    np_time=np.append(np_time, fcst_time.values)
    df =pd.DataFrame(ano_series, index=np_time, columns=['prec_ano'])
    df=df.fillna(0)
    df.to_csv(blend_outdir+sta_num+'.prec.csv') 

```

Using `multiprocessing` and rewite this part, the `main` function:
```python
def main():
    # number of processes in use
    ntasks=4

    # PREC/L data
    ds = xr.open_dataset(prec_arch_fn)
    var1 = ds['precip'].loc['1979-01-01':,:,:]
    hist_time= ds['time'].loc['1979-01-01':]
    #print(var1.loc['1981-01-01':'2010-12-31',:,:])

    clim_var1 = var1.loc['1981-01-01':'2010-12-31'].groupby("time.month").mean()
    ano_var1 = (var1.groupby("time.month") - clim_var1)

    #S2S data
    ds_s2s = xr.open_dataset(s2s_fcst_file)
    fcst_var1=ds_s2s['anom'][0,0,0,:,:]
    fcst_time=ds_s2s['TIME']
    
    np_time=np.append(hist_time.values, np.datetime64('now'))
    np_time=np.append(np_time, fcst_time.values)
    

    # Get in Station meta
    sta_df=get_station_df(sta_meta_file)
        
    print('Parent process %s.' % os.getpid())
    
    # start process pool
    process_pool = Pool(ntasks)
    
    len_df=sta_df.shape[0]
    len_per_task=len_df//ntasks

    # open tasks ID 0 to ntasks-2
    for itsk in range(ntasks-1):   
        process_pool.apply_async(combine_data, args=(itsk, sta_df[itsk*len_per_task:(itsk+1)*len_per_task], ano_var1, fcst_var1, np_time, blend_outdir,))

    # open ID ntasks-1 in case of residual
    process_pool.apply_async(combine_data, args=(ntasks-1, sta_df[(ntasks-1)*len_per_task:], ano_var1, fcst_var1, np_time, blend_outdir,))
    print('Waiting for all subprocesses done...')
   
    process_pool.close()
    process_pool.join()
    print('All subprocesses done.')

```

The parallelized function:
```python
def combine_data(itsk, sta_df, ano_var1, fcst_var1, np_time, npblend_outdir):
    print('Run task %s (%s)...' % (itsk, os.getpid()))
    start = time.time()
    
    for idx, row in sta_df.iterrows():
        sta_num=str(int(row['区站号']))
        # print(sta_num+' '+row['省份']+' '+row['站名'])
        lat_sta=conv_deg(row['纬度(度分)'][0:-1])
        lon_sta=conv_deg(row['经度(度分)'][0:-1])
        ano_var=ano_var1.sel(lat=lat_sta,lon=lon_sta,method='nearest')
        ano_series=np.concatenate((ano_var.values,np.array((0.0,)),(fcst_var1.sel(LAT=lat_sta, LON=lon_sta, method='nearest').values,)))
        df =pd.DataFrame(ano_series, index=np_time, columns=['prec_ano'])
        df=df.fillna(0)
        df.to_csv(blend_outdir+sta_num+'.prec.csv') 
    
    end = time.time()
    print('Task %s runs %0.2f seconds.' % (itsk, (end - start)))

```

Note:
* Some xarray operations cannot be parallelized, as the `NetCDF` operation is "lazy", combining xarray operation like `group` and multiprocessing will cause HDF5 IO errors. These confilicted operation should be extracted from the parallelized function.
* The orginal code is not efficient, as the xarray operations will be repeatly called over a large array. This is the true hot spot. As a comparation: orginal code ~ 30 min; optimizing anomaly calculation before repeatly `sel`: ~ 1 min; 4 tasks parallel: 10s.

The principle for optimization:
1. Hot spot may comes from highly encapsulated operations 
2. Make the parallel section as simple, as elemental as possible


**Updated 2020-06-30**

