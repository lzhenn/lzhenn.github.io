---
layout: post
title:  "山东半岛预报系统搭建"
categories: project
tags:  project wrf-sdpwfe
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
最终采用的wrf namelist.input
``` fortran
 &time_control
 run_days                            = 5,
 run_hours                           = 0,
 run_minutes                         = 0,
 run_seconds                         = 0,
 start_year                          = 2018, 2018, 2018, 2018,
 start_month                         = 01,   01,   01,   01,
 start_day                           = 05,   05,   05,   05,
 start_hour                          = 12,   12,   12,   12,
 start_minute                        = 00,   00,   00,   00,
 start_second                        = 00,   00,   00,   00,
 end_year                            = 2018, 2018, 2018, 2018,
 end_month                           = 01,   01,   01,   01,
 end_day                             = 10,   10,   10,   10,
 end_hour                            = 12,   12,   12,   12,
 end_minute                          = 00,   00,   00,   00,
 end_second                          = 00,   00,   00,   00,
 interval_seconds                    = 21600
 input_from_file                     = .true.,.true.,.true.,.true.,
 history_interval                    = 60,  60,   60,   60,
 frames_per_outfile                  = 1000, 1000, 1000, 1000,
 restart                             = .false.,
 restart_interval                    = 5000,
 io_form_history                     = 2
 io_form_restart                     = 2
 io_form_input                       = 2
 io_form_auxinput4                   = 0 
 io_form_boundary                    = 2
 auxinput4_interval                  = 0
 debug_level                         = 0
 /

 &domains
 time_step                           = 180,
 time_step_fract_num                 = 0,
 time_step_fract_den                 = 1,
 max_dom                             = 3,
 e_we                                = 300, 241, 301, 301,
 e_sn                                = 220, 202, 283, 301,
 e_vert                              = 39,   39,  39,  39, 
 p_top_requested                     = 5000,
 num_metgrid_levels                  = 32,
 num_metgrid_soil_levels             = 4,
 eta_levels			     = 1.0000, 0.9979, 0.9956, 0.9931,
				       0.9904, 0.9875, 0.9844, 0.9807,
				       0.9763, 0.9711, 0.9649, 0.9575,
				       0.9488, 0.9385, 0.9263, 0.9120,
				       0.8951, 0.8753, 0.8521, 0.8251,
				       0.7937, 0.7597, 0.7229, 0.6833,
				       0.6410, 0.5960, 0.5484, 0.4985,
				       0.4467, 0.3934, 0.3393, 0.2850,
				       0.2316, 0.1801, 0.1324, 0.0903,
                                       0.0542, 0.0241, 0.0000
 dx                                  = 27000,   9000,   3000,	1000,
 dy                                  = 27000, 	9000,   3000,	1000,
 
 grid_id                             = 1,     2,     3,	   4,
 parent_id                           = 1,     1,     2,	   3,
 i_parent_start                      = 1,   140,    80,  140,
 j_parent_start                      = 1,    80,    50,  110,
 parent_grid_ratio                   = 1,     3,     3,    3,
 parent_time_step_ratio              = 1,     3,     3,    3,
 feedback                            = 0,
 smooth_option                       = 2
 /

 &physics
 physics_suite                       = 'CONUS'
 
 cu_physics                          = 6,     6,     0,    0,

 radt                                = 30,    30,    30,  30,
 bldt                                = 0,     0,     0,    0,
 cudt                                = 5,     5,     5,    5,
 icloud                              = 1,
 num_soil_layers                     = 4,
 num_land_cat                        = 21,
 sf_urban_physics                    = 0,     0,     0,    0,
 sst_update	            		     = 0,
 /

 &fdda
 /

 &dynamics
 w_damping                           = 0,
 diff_opt                            = 1,      1,      1,    1,
 km_opt                              = 4,      4,      4,    4,
 diff_6th_opt                        = 0,      0,      0,    0,
 diff_6th_factor                     = 0.12,   0.12,   0.12, 0.12,
 base_temp                           = 290.                          
 damp_opt                            = 0,                            
 zdamp                               = 5000.,  5000.,  5000.,5000.,
 dampcoef                            = 0.2,    0.2,    0.2   0.2
 khdif                               = 0,      0,      0,    0,
 kvdif                               = 0,      0,      0,    0,
 non_hydrostatic                     = .true., .true., .true..true., ,
 moist_adv_opt                       = 1,      1,      1,    1,       
 scalar_adv_opt                      = 1,      1,      1,    1,       
 gwd_opt                             = 0,
 /

 &bdy_control
 spec_bdy_width                      = 5,
 spec_zone                           = 1,
 relax_zone                          = 4,
 specified                           = .true., .false.,.false.,.false.,
 nested                              = .false., .true., .true., .true.,
 /

 &grib2
 /

 &namelist_quilt
 nio_tasks_per_group = 0,
 nio_groups = 1,
 /
```
### 计划任务
之后crontab配合自动运行脚本，每晚0:45开始执行，利用12Z数据，积分步长120s，尝试做未来5天预报。
自动运行脚本：
``` bash
#!/bin/sh

LID=`date -d '1 days ago' +%Y%m%d`
LID_NLS=`date -d '1 days ago' +%Y-%m-%d`
LID_NLE=`date -d '-4 days ago' +%Y-%m-%d` # 5 days later, for forecast

WPSDIR=/home/lzhenn/package/WPS
WRFDIR=/home/lzhenn/array/lzhenn/WRFV3/run
LOGFILE=/home/lzhenn/workspace/wrf-sdpwfe/sys-log/${LID}.log
GFSDIR=/home/lzhenn/array/lzhenn/gfs_fcst/$LID



############ Fetch GFS ##############

echo "Forecast ${LID_NLS} to ${LID_NLE}"
echo "Fetching GFS data..."
python fetch_gfs.py

############## WPS ##################
cd $WPSDIR 
# Clean WPS data

echo "Clean WPS..."
rm -f met_em.*
rm -f GFS:*
rm -f SST:*

# Process GFS

## Modify date and GFS
echo "Working on WPS..."
sed -i "/prefix/s/^.*/ prefix = 'GFS',/g" namelist.wps
sed -i "/start_date/s/^.*$/ start_date = '${LID_NLS}_12:00:00','${LID_NLS}_12:00:00','${LID_NLS}_12:00:00','${LID_NLS}_12:00:00',/g" namelist.wps
sed -i "/end_date/s/^.*$/ end_date = '${LID_NLE}_12:00:00','${LID_NLE}_12:00:00','${LID_NLE}_12:00:00','${LID_NLE}_12:00:00',/g" namelist.wps

echo "Working on WPS->Ungrib GFS..."
ln -sf ungrib/Variable_Tables/Vtable.GFS Vtable
./link_grib.csh $GFSDIR/gfs* 
./ungrib.exe >& $LOGFILE

## Modify  GFS SST
echo "Working on WPS->Ungrib SST..."
sed -i "/prefix/s/^.*/ prefix = 'SST',/g" namelist.wps

ln -sf ungrib/Variable_Tables/Vtable.SST Vtable
./ungrib.exe >& $LOGFILE

echo "Working on WPS->Metgrid..."
./metgrid.exe >& $LOGFILE

############## WRF ##################
echo "Working on WRF->REAL..."
cd $WRFDIR

YYYY_NLS=`date -d '1 days ago' +%Y`
YYYY_NLE=`date -d '-4 days ago' +%Y`

MM_NLS=`date -d '1 days ago' +%m`
MM_NLE=`date -d '-4 days ago' +%m`

DD_NLS=`date -d '1 days ago' +%d`
DD_NLE=`date -d '-4 days ago' +%d`

sed -i "/start_year/s/^.*$/ start_year                          = ${YYYY_NLS}, ${YYYY_NLS}, ${YYYY_NLS}, ${YYYY_NLS},/g" namelist.input
sed -i "/end_year/s/^.*$/ end_year                            = ${YYYY_NLE}, ${YYYY_NLE}, ${YYYY_NLE}, ${YYYY_NLE},/g" namelist.input
sed -i "/start_month/s/^.*$/ start_month                          = ${MM_NLS}, ${MM_NLS}, ${MM_NLS}, ${MM_NLS},/g" namelist.input
sed -i "/end_month/s/^.*$/ end_month                          = ${MM_NLE}, ${MM_NLE}, ${MM_NLE}, ${MM_NLE},/g" namelist.input
sed -i "/start_day/s/^.*$/ start_day                          = ${DD_NLS}, ${DD_NLS}, ${DD_NLS}, ${DD_NLS},/g" namelist.input
sed -i "/end_day/s/^.*$/ end_day                          = ${DD_NLE}, ${DD_NLE}, ${DD_NLE}, ${DD_NLE},/g" namelist.input

rm -f met_em.d0*
rm -f wrfout_d0*
rm -f wrfinput_d0*
rm -f wrflowinp_d0*
rm -f wrfbdy_d0*
ln -sf $WPSDIR/met_em.d0* ./
./real.exe >& $LOGFILE

echo "Working on WRF->WRF..."
mpirun -np 16 ./wrf.exe

```
**Updated 2018-01-07**

### 执行测试

测试预报，发现如下问题：
1. domain区域有问题，竟然d03居然框在勘察加半岛附近，经检查为WPS的ref_x和ref_y的问题，调整为d01中点后，
2. 五天预报利用现有机器完全无法完成，3天大概需要9小时，发现问题1后怀疑为区域设置错误，高纬度地图因子问题，重新调整积分步长为180s进行测试。
``` fortran
ref_x     =  150.0,
ref_y     =  110.0, 
```

**Updated 2018-01-16**

### 运行时间问题

系统按计划任务运行了一天，发现会在运行结束附近提示无法找到更新的边界条件，然后不停写log无法退出。非常不理解，毕竟到这个时候应该终止才对呀。经查发现是wrf的namelist run days依然写的五天。调整后正常。

目前的问题是依然不能在上午九点之前运行完，后面需要考虑调整domain大小。

**Updated 2018-01-16**
