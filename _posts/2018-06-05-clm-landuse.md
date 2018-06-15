---
layout: post
title:  "Change CESM/CLM Surface to Pure Bare Ground"
categories: cesm
tags: cesm clm pft
author: LZN
---

* content
{:toc}

In our hierarchy experiments, we hope to make the [NO_TOPO series experiments](https://novarizark.github.io/2018/06/06/cesm-fully-coupled-aquap/) as simple as possible. Thus, it would be great if there is no vegetation on the ground. 
In the CLM, we expect there is an external forcing data to control the surface type of ground/vegetation. Then I found this in `lnd_in` file

``` python
fsurdat = '/users/yangsong3/CESM/input/lnd/clm2/surfdata/surfdata_1.9x2.5_simyr2000_c091005.nc'
```

If you `ncdump` that file, you will see this variable:

``` python
	double PCT_PFT(lsmpft, lsmlat, lsmlon) ;
		PCT_PFT:long_name = "percent plant functional type of gridcell" ;
		PCT_PFT:units = "unitless" ;
```

The first dimension show the corresponding PFT (Plant Functional Types), which define the types and fraction of different landcovers a certain grid (Mosaic method). There is the code table:

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs0m9y9g3oj20kb0ie0ve.jpg)

Thus, the only thing we need to do is to create a new file with change only in PCT_PFT(0,:,:)=100.0.

**Updated 2018-06-05**

When we tried to run the model, we got several errors.

``` bash
surfrd_wtxy_veg_all ERROR: sum(pct) over numpft+1 is not = 100.
490    100.106661159475       0.106661159474527             4473
```

According to the error, it seems that the sum of pft is not 100. After checking the data, we found several variables:

``` fortran
pct_list=(/"PCT_LAKE", "PCT_WETLAND", "PCT_GLACIER", "PCT_URBAN"/)
```
So I remain all the pct about water, urban, and glacier, and make the bare ground equal to `100-sum(pct_list)`.

Note that after changing all the landuse pct, the default CLM initial condition cannot satisfy the model, so we need to "cold" start the model. Use `env_run.xml` to set it.

``` xml
<entry id="CLM_FORCE_COLDSTART"   value="on"  />
```

**Updated 2018-06-06**

Some issues happened after 10+ years integration. In no_topo experiment, the model exit with error in 0013-03, with Error message:

```
(shr_sys_abort) ERROR: remap transport: bad departure points 
  
(shr_sys_abort) WARNING: calling shr_mpi_abort() and stopping
 Warning: Departure points out of bounds in remap
 my_task, i, j =          31          20          13     
application called MPI_Abort(MPI_COMM_WORLD, 1001) - process 0
 dpx, dpy =  -28367.4880120091        54137.9986747345     
 HTN(i,j), HTN(i+1,j) =   30148.1831506031        30030.4921250813     
 HTE(i,j), HTE(i,j+1) =   46470.5086842257        46750.9484318852     
 istep1, my_task, iblk =     1310809          31           2      
 Global block:         241    
 Global i and j:          19         372    
```

After searching, it seems that the CICE model encountered a CFL violation problem:

>This is essentially a CFL violation in the CICE model. You would need to reduce the timestep. In the CESM, the CICE timestep is tied to the coupling interval with the atmosphere. Have a look at ATM_NCPL and ICE_NCPL. Try doubling ATM_NCPL and this should help. For high resolution (0.1-degree) you can use xndt_dyn or ndtd depending on the version of the code. This allows you to take multiple dynamic timesteps per thermodynamic timestep.

I found ATM_NCPL in env_run.xml:

```xml
<!--"base period associated with NCPL coupling frequency, valid values: hour,day,year,decade (char) " -->
<entry id="NCPL_BASE_PERIOD"   value="day"  />    

<!--"number of atm coupling intervals per NCPL_BASE_PERIOD (integer) (char) " -->
<entry id="ATM_NCPL"   value="48"  />
```
Since the atm run in `dtime=1800s`, double the `ATM_NCPL` is meaningless. 

[Another strategy](http://www.cesm.ucar.edu/models/cesm1.0/cice/doc/node35.html) is to double the CICE dynamic timesteps per thermodynamic timestep.

>The dynamics timestep should be reduced to integrate past this problem. Set
>`xndt_dyn = 2`
>in the namelist and restart the model. When the job completes set the value back to 1.

That is quite interesting, set it back when pass the unstable point? How could there be this operation?!

Still confused, then I turned to `NO_TOPO_SCON` and found another similar error happened in the ocean model:

``` 
POP Exiting...
POP_SolversChronGear: solver not converged
POP_SolverRun: error in ChronGear
POP_BarotropicDriver: error in solver 
Step: error in barotropic
```

And I searched and found the POP FAQ:

>If your case has been running successfully for a period of time, but then the ocean model suddenly fails to converge, you might have encountered a time-stepping instability. If so, you will need to decrease the ocean timestep and restart your case. We recommend you back up at least one month prior to the time of nonconvergence, **decrease the ocean-model timestep by about 15-20%**, and then restart your case.

And the method to change the timestep:
>To change the size of the POP2 timestep, you simply change the value of dt_count in your $CASE/user_nl_pop2 file.

>To decrease the POP2 timestep, you must increase the POP2 time_manager_nml namelist variable dt_count.

>For example, if the ocean grid in your case is gx1v6, then the default value for dt_count is 23. In order decrease the timestep by roughly 15%, you would increase dt_count to 26. To do this, put the following line in your `$CASE/user_nl_pop2` file:

>`dt_count = 26`
You do not need to rebuild the executable in order to change dt_count.

Considering doubling the CICE dynamic timesteps will significantly increase the integration time. I tried the following method:

* In `user_nl_pop2`:

``` fortran
dt_count=26
```

* Turn off cold start of the CLM and use 5-day clm2.r file to remap a new file with bare ground.

According to the [paleo FAQ](http://www.cesm.ucar.edu/models/paleo/faq/#lnd):

>However, if you have changed your land cover in your new simulation (for example, if you have changed your land ice distribution), you will first need to create a new clm2.r file that conforms to the new land cover assignments in your modified surface datafile.  Creating a new clm2.r file is a two step process.  Step 1:  Run a short (e.g., 5 day) startup simulation with arbitrary initial conditions and your new surface dataset. The 5 day simulation will produce a restart file that is consistent with the ice distribution in your new surface dataset, which is different from the original experiment that you wish to branch from.  Use the tool, interpinic, to re-map the restart data from the original simulation to the new restart file created by the 5-day run.

I used to cold start the model, it seems this can be a big problem:
>CLM4 does not require an initial condition file and can be initialized with arbitrary initialization (finidat=" "). However, arbitrary initialization starts the model from essentially bare ground, with vegetation, soil carbon, soil nitrogen, and soil moisture set to zero. The land model will spin up all variables at once, but will therefore require many hundreds of years to come into equilibrium.

Following the instruction, we first startup a `NO_TOPO` experiment with 5 day integration and our own bare ground surface data. Then, use `interpinic` to remap a `REAL_WORLD` restart file to our 5-day restart file:
Path: `/users/yangsong3/CESM/cesm1_2_2/models/lnd/clm/tools/clm4_0/interpinic`
``` bash
./interpinic -i  /users/yangsong3/L_Zealot/B/B20f19-realworld/exe/B20f19-realworld.clm2.r.0021-01-01-00000.nc -o /users/yangsong3/L_Zealot/B/B20f19-topo/clm.r/B20f19-topo.clm2.r.interpinic.nc 
```

After that, I thought for a while and tried to comment out the pop timestep change, turn off CLM cold start, and use frequent restart file output (10 year). 

### References

* [https://bb.cgd.ucar.edu/error-remap-transport-bad-departure-points](https://bb.cgd.ucar.edu/error-remap-transport-bad-departure-points)
* [http://www.cesm.ucar.edu/models/cesm1.0/cice/doc/node35.html](http://www.cesm.ucar.edu/models/cesm1.0/cice/doc/node35.html)
* [http://www.cesm.ucar.edu/models/paleo/faq/#lnd](http://www.cesm.ucar.edu/models/paleo/faq/#lnd)


**Updated 2018-06-11**
