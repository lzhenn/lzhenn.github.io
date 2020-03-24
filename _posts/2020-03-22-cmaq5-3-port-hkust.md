---
layout: post
title:  "Compile CMAQ5 on HKUST Cluster"
categories: technology
tags: linux hdf5 netcdf cmaq
author: LZN
---

* content
{:toc}

YQ need to use new version of CMAQ on HKUST cluster. Here we archive the procedure to refresh the CMAQ version.

We first check the `pgi` and `mpi` version, which are already loaded in the environment.

``` bash
which pgfortran
/usr/local/pgi-16cos7/linux86-64/2016/

which mpifort
/usr/local/pgi-16cos7/linux86-64/2016/mpi/mpich/bin/mpifort
```

Nice, next we compile `HDF5` and `NETCDF`.

First download the `zlib` source from official site.`configure`, `make`, `make install` as usual.

Next, download HDF5 source code from offical site. We chose version 1.10 instead of 1.12 as v1.12 seems to have changed quite a lot.

Installation commands:
``` bash
 ./configure --with-zlib=/home/yhuangci/soft/zlib-1.2.11-gcc --prefix=/home/yhuangci/soft/hdf5-1.10.6-pgi-16cos7 --enable-hl
 make check
```

The check process meets problem:

```
VDS SWMR tests failed with 1 errors.
```

I searched a while but seldom useful results returned. After `make clean`, I used `make` only and there is no error report. Here I just hope to have a quick check if this outcome supports the NetCDF compiling.

Set `bashrc`:
```bash
# set hdf5
HDF5=/home/yhuangci/soft/hdf5-1.10.6-pgi-16cos7
export PATH=$HDF5/bin:$PATH
export LD_LIBRARY_PATH=$HDF5/lib:$LD_LIBRARY_PATH 
export INCLUDE=$HDF5/include:$INCLUDE
```

source the `bashrc`, install the `NetCDF`, pay attention to assign the compiler and disable the remote application (We do not need it now):
``` bash
CPPFLAGS='-I${H5DIR}/include -I${ZDIR}/include' LDFLAGS='-L${H5DIR}/lib -L${ZDIR}/lib' ./configure --prefix=${NCDIR} --disable-dap CC=pgcc
make 
make check
make install
```
Successful!

Then bind the Fortran libs.

``` bash
CPPFLAGS='-I${H5DIR}/include -I${ZDIR}/include -I/home/yhuangci/soft/netcdf-473-pgi-16cos7/include' LDFLAGS='-L${H5DIR}/lib -L${ZDIR}/lib -L/home/yhuangci/soft/netcdf-473-pgi-16cos7/lib' ./configure --prefix=${NCDIR} FC=pgfortran
make 
make check
make install
```

Great! All done! It seems that the specific item in HDF5 `make check` does not influence the ensuing compiling process of the NetCDF. The CMAQ can be compiled using the above configurations in NetCDF.

**Updated 2020-03-23**

