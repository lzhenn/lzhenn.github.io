---
layout: post
title:  "UST METCTM1"
categories: technology
tags: linux 
author: LZN
---

* content
{:toc}

Check version for the environment:

```bash
which pgcc
/usr/local/pgi-20cos7/linux86-64/2020/bin/pgcc
```

### MPICH3

No MPI available. Try to compile by myself. [Official Site](https://www.mpich.org/downloads/)

```bash
./configure --prefix=/home/metctm1/soft/mpich3-pgi20 FC=pgfortran F77=pgfortran CC=pgcc CXX=pgc++ rsh=ssh # no error, 10 minutes
make            # works! more than 1 hour
make install   
```

Environmental variables:
``` bash
export MPICH=/home/metctm1/soft/mpich3-pgi20
export PATH=$MPICH/bin:$PATH
export LD_LIBRARY_PATH=$MPICH/lib:$LD_LIBRARY_PATH 
export INCLUDE=$MPICH/include:$INCLUDE
```

### HDF5

Install [zlib](https://zlib.net/) from source first, defualt configurations.

Choose [HDF5 1.10](https://portal.hdfgroup.org/display/support/HDF5%201.10.7) to avoid compatibility issues.

Try the following command to compile the HDF5 with PGI compilers.

```bash
$ CPP=cpp CFLAGS="-fPIC -m64 -tp=px" CXXFLAGS="-fPIC -m64 -tp=px" FCFLAGS="-fPIC -m64 -tp=px" CC=pgcc CXX=pgc++ FC=pgfortran ./configure --with-zlib=/home/yhuangci/soft/zlib-1.2.11-gcc --prefix=/home/yhuangci/soft/hdf5-1.10.6-pgi-16cos7 --enable-hl  --enable-threadsafe --enable-cxx --enable-fortran --enable-unsupported
make            # Successful! about 1 hour
make install    
```

A good reference from [Fluid Numerics](https://www.fluidnumerics.com/resources/building-hdf5-with-pgi)
```
HDF5 has long been a standard for sharing scientific data across High Performance Computing (HPC) platforms. From the HDF website "HDF5 is a data model, library, and file format for storing and managing data. It supports an unlimited variety of datatypes, and is designed for flexible and efficient I/O and for high volume and complex data. HDF5 is portable and is extensible, allowing applications to evolve in their use of HDF5." Other data models, like NetCDF from UCAR, are built on top of HDF5 and are heavily used in oceanography, meteorology, and other earth science domains. Given this, many applications rely on having a usable working version of HDF5 that they can link into their applications.

The Portland Group Compilers are gaining popularity with the growing interest in accelerating HPC applications with Graphics Processing Units (GPUs). PGI compilers ship completely with the CUDA toolkit and a Fortran compiler (pgfortran) that support OpenACC and CUDA-Fortran, languages for writing code that operates on GPUs. This is a plus for Fortran programmers, who have a large presence in Department of Energy labs and in earth science departments around the world. Other options for GPU acceleration include FortranCL, CUDA (C/C++), OpenCL, and HIP. It is fair to say that the lack of activity on the main FortranCL repository for the last 6 years suggests the project has long been forgotten; this makes it unattractive for developers to latch on to this as a solution. The other languages are supported in C/C++ syntax and require Fortran programmers to develop C/C++ in addition to an ISO_C_BINDING layer to call their C-kernels from Fortran.

Building HDF5 with parallel and Fortran support with PGI compilers is not as straight-forward as building with other compilers, like GCC. I came across this issue while setting up clusters for hackathons, and defining build instructions for SELF-Fluids ( personal software project ). Through this experience, I have discovered that there are hints at the solution on the HDF Forums; in fact, this is where I found that a GNU C-preprocessor needs to be used in place of PGI's. This did enable a build of HDF5 with serial support, but the OpenMPI build that ships with PGI compilers cannot be used for parallel support, and instead OpenMPI was built from scratch.

This document provides details necessary for compiling HDF5 from source with the PGI compilers. HDF5 is built using an autotools build system. Template configure incantations are provided with the install notes along with expected output at the configure stage of the build.  Ultimately, this was a roughly 16 hour exploration into this build issue that ultimately led to its resolution. 
```

Environmental variables:
``` bash
HDF5=/home/metctm1/soft/hdf5-1107-pgi
export PATH=$HDF5/bin:$PATH
export LD_LIBRARY_PATH=$HDF5/lib:$LD_LIBRARY_PATH 
export INCLUDE=$HDF5/include:$INCLUDE
```
###NetCDF

Get the latest release for [C](https://github.com/Unidata/netcdf-c/releases) and [Fortran](https://github.com/Unidata/netcdf-fortran/releases).
```bash
ZDIR=/home/metctm1/soft/zlib-1211-gcc
H5DIR=/home/metctm1/soft/hdf5-1107-pgi
CPPFLAGS='-I${H5DIR}/include -I${ZDIR}/include' LDFLAGS='-L${H5DIR}/lib -L${ZDIR}/lib' ./configure --prefix=${NCDIR} --disable-dap CC=pgcc
```

Error:
```
configure: error: HDF5 was not built with zlib, which is required. Rebuild HDF5 with zlib.
```
 
Interesting. It seems the NETCDF does not recognize the PGI-built HDF5 embeded with GNU-built ZLIB. Go Trial II.

TRY:
```bash
CPP=cpp CPPFLAGS='-I${H5DIR}/include -I${ZDIR}/include' LDFLAGS='-L${H5DIR}/lib -L${ZDIR}/lib' ./configure --prefix=${NCDIR} --disable-dap CC=pgcc
```
got error:
```
configure: error: C preprocessor "cpp" fails sanity check
```

The NETCDF seems to ignore the $CPP variable shift to .

Here I went back to recompile HDF5 with gcc compiler, still not work. I noticed it could be a version issue in NetCDF. Change NetCDF-C-474 back to NetCDF-C-473, both HDF5 compiled by GCC or PGI works!
The question is in the $make check, the NetCDF still fails all HDF5 test with PGI compiled HDF5...

Bad situation, we need to permutate all possible combinations to get the best practice...

need to refer the [official guide](https://www.unidata.ucar.edu/software/netcdf/docs/getting_and_building_netcdf.html).

...After long-time multiple tests, we finally give up and copy the pre-compiled libs from YQ directory. Still cannot understand why the same compiler/environment does not work.

### MCT

```
./configure --prefix=/.... FC=pgfortran CC=pgcc
```

Modify the `Makefile.conf` to specify the MPI lib and include. Done.

### COAWST
pgi-16cos7 Error in SWAN:
PGF90-S-0285-Source line too long (mod_strings.f90: 228)

This is [a legacy problem of PGI compiler](https://github.com/ORAC-CC/orac/issues/12):
>Interestingly, the latest version of the PGI compilers (18.10, release last Friday) now support line lengths up to 1000 characters. That means that the problem in this bugreport is 'solved', or at least no longer a problem, compilation is successful out-of-the-box on the 18.10 build.






### Refrence
https://www.fluidnumerics.com/resources/building-hdf5-with-pgi

Updated 2020-12-05**

