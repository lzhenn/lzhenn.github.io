---
layout: post
title:  "Porting WRF v3.8.1 on Tianhe2"
categories: science 
tags: server wrf hpc
author: LZN
---

* content
{:toc}

帮JL移植wrf3.8.1到天河2号。首先调整环境变量。
```bash
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
# edited on Apr 1, 2018 for WRF
# User specific aliases and functions
#bug fix
source /WORK/app/osenv/ln1/set2.sh
export MODULEPATH=/WORK/app/modulefiles

#set COMMON input data path for CESM
#export COMMON_CESM_INPUT=/WORK/app/CESM_inputdata

#set Intel compiler and MPI
module load intel-compilers/13.0.0
module load MPI/Intel/MPICH/3.1-icc13
module load cmake/3.0.2

#set hdf5 and netcdf4 for WRF
module load hdf5/1.8.13/03-CF-13
module load netcdf/4.3.2/02-CF-13

#set jasper
export JASPER=/HOME/sio_goc017/WORKSPACE/jjl/soft/jasper-1.900.1
export JASPERLIB=$JASPER/lib
export JASPERINC=$JASPER/include

#set WRF
export WRFIO_NCD_LARGE_FILE_SUPPORT=1
export WRF_EM_CORE=1
export NETCDF4=0
export BUFR=1
export CRTM=1
export J="-j 12"
export MP_STACK_SIZE=4000000000
export OMP_STACKSIZE=4000000000
export KMP_STACKSIZE=4000000000
ulimit -s unlimited
ulimit -c unlimited

MPI_BUFFER_SIZE=128
```
注意在编译cumulus模块的地方大概要等待20分钟之久。采用上述环境变量出错：

```bash
wrf.o: In function `MAIN__':
wrf.f90:(.text+0x1f): undefined reference to `__intel_new_feature_proc_init'
libwrflib.a(module_check_a_mundo.o): In function `module_check_a_mundo_mp_check_nml_consistency_':
module_check_a_mundo.f90:(.text+0x31fa): undefined reference to `__intel_ssse3_rep_memmove'
module_check_a_mundo.f90:(.text+0x35ea): undefined reference to `__intel_ssse3_rep_memmove'
libwrflib.a(module_mp_etanew.o): In function `module_mp_etanew_mp_etanewinit_':
module_mp_etanew.f90:(.text+0xacb0): undefined reference to `__intel_ssse3_rep_memmove'
libwrflib.a(module_mp_thompson.o): In function `module_mp_thompson_mp_table_ccnact_':
module_mp_thompson.f90:(.text+0x2ed74): undefined reference to `__intel_ssse3_rep_memmove'
libwrflib.a(module_ra_rrtm.o): In function `module_ra_rrtm_mp_rrtm_lookuptable_':
module_ra_rrtm.f90:(.text+0x256ea): undefined reference to `__intel_ssse3_rep_memmove'
libwrflib.a(module_ra_rrtmg_lw.o):module_ra_rrtmg_lw.f90:(.text+0x769bf): more undefined references to `__intel_ssse3_rep_memmove' follow
/WORK/sio_goc017/jjl/wrfdata/WRFV3/external/io_grib_share/libio_grib_share.a(io_grib_share.o): In function `transpose_grib_':
io_grib_share.f90:(.text+0x1ee4): undefined reference to `_intel_fast_memmove'
/WORK/sio_goc017/jjl/wrfdata/WRFV3/external/io_grib_share/libio_grib_share.a(io_grib_share.o): In function `transpose1d_grib_':
io_grib_share.f90:(.text+0x26f5): undefined reference to `_intel_fast_memmove'
io_grib_share.f90:(.text+0x29e3): undefined reference to `_intel_fast_memmove'
0.57user 4.84system 0:08.12elapsed 66%CPU (0avgtext+0avgdata 487696maxresident)k
12392inputs+102200outputs (47major+183178minor)pagefaults 0swaps
make[1]: [em_wrf] Error 1 (ignored)
```
Google以下，发现intel官网的[trouble shooting page](https://software.intel.com/en-us/forums/intel-fortran-compiler-for-linux-and-mac-os-x/topic/494782)
以下内容：
```
I believe the message may be caused by mixing objects built with different compiler versions. The __intel_new_feature_proc_init entry point is only in recent compiler libraries; if you have code built with a recent compiler, but are linking to older run-time libraries, you might encounter such a problem.
```

有道理，可能是之前编译的模块没有删掉。执行
```
$./clean -a
```
再次测试一下.出现难以理解的错误：
```
nup_em.f90(68): error #7002: Error in opening the compiled module file.  Check INCLUDE paths.   [MODULE_INITIALIZE_REAL]
   USE module_initialize_real, only : wrfu_initialize
   -------^
   real_em.f90(12): error #7002: Error in opening the compiled module file.  Check INCLUDE paths.   [MODULE_INITIALIZE_REAL]

```
表示找不到include文件。到相关目录下检查发现文件确实存在，奇葩……重新执行compile语句后编译成功。怀疑是天河的文件系统不稳定造成。

测试WPS编译出错。
```
make[1]: pathf90: Command not found
```
检查了下发现自己选错了architecture，并不是与前面相同的#15，而是#19.

**Updated 2018-04-01**

据CM大哥表示，天河不开NC4编译是不行的。果然，JL运行出错，测试NC4打开后是否能解决。

**Updated 2018-04-03**

