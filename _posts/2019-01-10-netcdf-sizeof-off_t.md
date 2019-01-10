---
layout: post
title:  "NetCDF ERROR: configure: error: cannot compute sizeof (off_t)"
categories: NetCDF Linux
tags: NetCDF Linux
author: LZN
---

* content
{:toc}

When porting CESM onto Prof. YTQ's account on SAS (School of Atmospheric Sciences) Computing Platform, we met a bunch of problems on dependency. We highly suspect the administrator did not use the identical compiler to build all libs. Thus we tried to build our own dependencies using exactly the same compiler.

While building the NetCDF fortran lib to bundle into the C lib, in configuring, we met the problem:

``` bash
 configure: error: cannot compute sizeof (off_t)
```

We are using the configuring command:
``` bash
./configure --prefix=/wind1/home/qiaoyt/soft/netcdf-4331-intel15/ LDFLAGS="-L/wind1/home/qiaoyt/soft/netcdf-4331-intel15/lib" CPPFLAGS="-I/wind1/home/qiaoyt/soft/netcdf-4331-intel15/include" FC=ifort
```

It's quite strenge because the sizeof any type of variable is 0 in the configuring output. I suspect the configure utility cannot locate the C lib correctly, so I added the environmental variable for `LD_LIBRARY_PATH` in `~/.bashrc`:
``` bash
export LD_LIBRARY_PATH=$LIB_NETCDF:$LD_LIBRARY_PATH
```

The configure utility passed after source the bashrc. It seems to be a bug of the configure utility in NetCDF-fortran lib to locate the C lib.

The model was successfully ported after we re-built every lib with the identical compiler.

**Updated 2019-01-10**

