---
layout: post
title:  "山东半岛预报系统搭建"
categories: modeling linux
tags:  WRF forecast&nbsp;system
author: LZN
---

* content
{:toc}

打算做一个山东半岛的预报系统，以后也算投名状。

### 编译WRF

configure尝试选择20. INTEL (ifort/icc): Xeon (SNB with AVX mods)

之后直接执行编译

```bash
./compile -j 8 em_real
```
执行编译过程卡住。更换15. 不包括avx指令集后成功。

### 编译WPS

编译wps发现无法编译出ungrib，经过多次测试，分别

```bash
yum install libpng-devel
yum install jasper-devel
```
将devel包安装完整后成功。

### 下载geog包并解压。


**Updated 2017-12-31**

### 调整wps设置

完整namelist.wps

``` fortran 
&share
 wrf_core = 'ARW',
 max_dom = 4,
 start_date = '2018-01-05_12:00:00','2018-01-05_12:00:00','2018-01-05_12:00:00','2018-01-05_12:00:00',
 end_date   = '2018-01-10_12:00:00','2018-01-10_12:00:00','2018-01-10_12:00:00','2018-01-10_12:00:00',
 interval_seconds = 21600
 active_grid = .true., .true.,.true.,.true.,
 subgrid_ratio_x = 1
 subgrid_ratio_y = 1
 io_form_geogrid = 2,
 opt_output_from_geogrid_path = './',
 debug_level = 0
/

&geogrid
 parent_id         =   1,   1,   2,   3,
 parent_grid_ratio =   1,   3,   3,   3,
 i_parent_start    =   1, 140,  80, 140,
 j_parent_start    =   1,  80,  50, 110,
 s_we              =   1,   1,   1,   1,
 e_we              = 300, 241, 301, 301,
 s_sn              =   1,   1,   1,   1,
 e_sn              = 220, 202, 283, 301,
 !
 !!!!!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT NOTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
 ! The default datasets used to produce the HGT_M, GREENFRAC,
 ! and LU_INDEX/LANDUSEF fields have changed in WPS v3.8. The HGT_M field
 ! is now interpolated from 30-arc-second USGS GMTED2010, the GREENFRAC
 ! field is interpolated from MODIS FPAR, and the LU_INDEX/LANDUSEF fields
 ! are interpolated from 21-class MODIS.
 !
 ! To match the output given by the default namelist.wps.all_options 
 ! in WPS v3.7.1, the following setting for geog_data_res may be used:
 !
 ! geog_data_res = 'gtopo_10m+usgs_10m+nesdis_greenfrac+10m','gtopo_2m+usgs_2m+nesdis_greenfrac+2m',
 !
 !!!!!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT NOTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
 !
 geog_data_res = 'default','default','default','default',
 dx        = 27000,
 dy        = 27000,
 map_proj  = 'lambert',
 ref_lat   =  37.00,
 ref_lon   =  110.00,
 ref_x     =  55.0,
 ref_y     =  35.0,
 truelat1  =  30.0,
 truelat2  =  60.0,
 stand_lon =  110.0,
 geog_data_path = '/home/lzhenn/wrf-surface-data/geog'
 opt_geogrid_tbl_path = 'geogrid/'
/
 geog_data_res     = 'modis_lakes+10m','modis_lakes+2m',
 geog_data_res     = 'usgs_lakes+10m','usgs_lakes+2m',

&ungrib
 out_format = 'WPS',
 prefix     = 'GFS',
/

&metgrid
 fg_name         = 'GFS', 'SST'
 constants_name  = './TAVGSFC'
 io_form_metgrid = 2, 
 opt_output_from_metgrid_path = './',
 opt_metgrid_tbl_path         = 'metgrid/',
 process_only_bdy = 5,
/

&mod_levs
 press_pa = 201300 , 200100 , 100000 , 
             95000 ,  90000 , 
             85000 ,  80000 , 
             75000 ,  70000 , 
             65000 ,  60000 , 
             55000 ,  50000 , 
             45000 ,  40000 , 
             35000 ,  30000 , 
             25000 ,  20000 , 
             15000 ,  10000 , 
              5000 ,   1000
/

&plotfmt
 ix = 100
 jx = 100
 ioff = 30
 joff = 30
/

```

domain设置如下：
![](http://ww1.sinaimg.cn/large/73ebdc71gy1fn6ptmsx25j20ug0o9dk8.jpg)


### 执行wps
设置从HKUST ENVR下载GFS输入文件[GFS data archive](http://envf.ust.hk/dataop/data/model_input/gfs_1.00deg_realtime/)

测试加入gfs的SST数据，参考

[http://www2.mmm.ucar.edu/wrf/OnLineTutorial/DATA/SST/index.html](http://www2.mmm.ucar.edu/wrf/OnLineTutorial/DATA/SST/index.html)

后发现并不能用，出现segfault，之后更改namelist和，对应GFS数据为SST变量Vtable，以及SST前缀，sst问题解决。

met data生成过程一切顺利。

**Updated 2018-01-06**

### 调整WRF设置

根据俊文和海洋局的配置调整namelist.input设置，过程中发现V3.9提供了经过测试的参数化suite，果断采用。CONUS代表北美大陆配置。
### 执行real
调整后real过程出错

```
 5   --- ERROR: If sst_update /= 0, one of the auxinput4_interval settings must be /= 0
 6   --- Set auxinput4_interval_s to the same value as interval_seconds (usually a pretty good guess).
```
修改后，执行过程出现段错误。

测试修改环境变量。
``` bash
# set WRF
export WRFIO_NCD_LARGE_FILE_SUPPORT=1
export WRF_EM_CORE=1
export NETCDF4=0

ulimit -s unlimited
ulimit -c unlimited
```
通过第一断点。新错误：

``` bash
-------------- FATAL CALLED ---------------
FATAL CALLED FROM FILE:  <stdin>  LINE:     431 
 Problems, we cannot have excluded middle data from WPS 
 -------------------------------------------
 application called MPI_Abort(MPI_COMM_WORLD, 1) - process 0
 [unset]: write_line error; fd=-1 buf=:cmd=abort exitcode=1
 :
 system msg for write_line failure : Bad file descriptor

```
将SST Update设置为0后可以顺利执行完real。

### 执行wrf
执行过程直接出错,有一个gwd_opt设置为1后可行。

顺利执行，但是积分速度奇慢无比，决定采用180s步长，三层嵌套，速度快了很多。

**Updated 2018-01-07**
