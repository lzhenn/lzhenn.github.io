---
layout: post
title:  "Start to Build SCREAM onto CUHK Cluster"
categories: technology science
tags: e3sm scream kokkos cuda
author: LZN
---

* content
{:toc}

### Old version test

Newly updated SCREAM repo removed the readme file about how to port the code, but the older version of readme can be fetched by tracing back the code histroy.

The first problem comes from buiding kokkos:

``` bash
CMake Error at cmake/kokkos_functions.cmake:64 (MESSAGE):
  Matching option found for Kokkos_ENABLE_SERIAL with the wrong case
  KOKKOS_ENABLE_SERIAL.  Please delete your CMakeCache.txt and change option
  to -DKokkos_ENABLE_SERIAL=ON.  This is now enforced to avoid hard-to-debug
  CMake cache inconsistencies.
```

This error is basically hoping you use camel-like cases in the command line to set the configuring flags. Just follow it suggests.

The command changes to:

``` bash
cmake \
    -D CMAKE_INSTALL_PREFIX=${RUN_ROOT_DIR}/kokkos/install \
    -D CMAKE_BUILD_TYPE=Debug \
    -DKokkos_ENABLE_DEBUG=ON \
    -DKokkos_ENABLE_AGGRESSIVE_VECTORIZATION=OFF \
    -DKokkos_ENABLE_SERIAL=ON \
    -DKokkos_ENABLE_OPENMP=ON \
    -DKokkos_ENABLE_PROFILING=OFF \
    -DKokkos_ENABLE_DEPRECATED_CODE=OFF \
    -DKokkos_ENABLE_EXPLICIT_INSTANTIATION:BOOL=OFF \
    ${KOKKOS_SRC_LOC}
```

Here we can successfully install the Kokkos. In building the SCREAM, several errors appear:

``` bash
CMake Error: File /users/b145872/project-dir/app/scream/components/scream/../cam/src/physics/rrtmgp/external/rrtmgp/data/rrtmgp-data-lw-g224-2018-12-04.nc does not exist.
CMake Error: File /users/b145872/project-dir/app/scream/components/scream/../cam/src/physics/rrtmgp/external/rrtmgp/data/rrtmgp-data-sw-g224-2018-12-04.nc does not exist.
```

This file can be easily download by a simple search. Here I just found something not right. It seems some modules are missing in the scream folder. I found they locate in the `external` folder, and we can see the folder structure on github, but has not been cloned to local path.

That is interesting! I then found these folders on github actually point to other repos. It is `[git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)`!

The right way to clone the repo with submodules:

``` bash
git clone --recurse-submodules
```

Now it comes to the MPI issue (cannot find `mpi.h`). Add INCLUDE path to `.bashrc`.

``` bash
export CPLUS_INCLUDE_PATH=$INCLUDE
export C_INCLUDE_PATH=$INCLUDE
```

New error:
``` bash
/users/b145872/project-dir/app/scream/components/scream/ekat/src/ekat/util/scream_arch.cpp(34): error: class "Kokkos::Serial" has no member "impl_is_initialized"
    ss << "ExecSpace initialized: " << (DefaultDevice::execution_space::impl_is_initialized() ? "yes" : "no") << "\n";
```
We then found the Kokkos default settings are not what we want, Seriel is not acceptable.
``` bash
-- Final kokkos settings variable:
--   env;KOKKOS_CMAKE=yes;KOKKOS_SRC_PATH=/users/b145872/project-dir/app/scream/externals/kokkos;KOKKOS_PATH=/users/b145872/project-dir/app/scream/externals/kokkos;KOKKOS_INSTALL_PATH=/users/b145872/project-dir/app/scream_run/scream_test01/kokkos/install;KOKKOS_ARCH=None;KOKKOS_DEVICES=Serial;KOKKOS_DEBUG=no;KOKKOS_OPTIONS=disable_dualview_modify_check;KOKKOS_USE_TPLS=librt
```

We then re-source the `~/.bashrc`. It seems the configure grep the MPI settings now, with OpenMP as the Parallel settings. New error in configuring SCREAM:
``` bash
CMake Error at /users/b145872/project-dir/app/scream/externals/kokkos/cmake/kokkos_functions.cmake:49 (MESSAGE):
  Matching option found for Kokkos_ENABLE_DEBUG with the wrong case
  Kokkos_ENABLE_Debug.  Please delete your CMakeCache.txt and change option
  to -DKokkos_ENABLE_DEBUG=FALSE.  This is now enforced to avoid
  hard-to-debug CMake cache inconsistencies.
```
This is weird. In configuring Kokkos, we give excatly "-DKokkos_ENABLE_DEBUG=ON \", and in configuring SCREAM, there is no such option. Using grep, we found several "Debug" in `components/scream/ekat/cmake/Kokkos.cmake`, after changing to "DEBUG", we pass this point...

New error [26%]:

``` bash
/users/b145872/project-dir/app/scream/components/scream/ekat/src/ekat/scream_kokkos_meta.hpp(18): error: class "Kokkos::MemoryTraits<0U>" has no member "RandomAccess"
      value = ((View::traits::memory_traits::RandomAccess ? Kokkos::RandomAccess : 0) | 

```

According to [kokkos programming guide](https://fossies.org/linux/Trilinos/packages/kokkos/doc/Kokkos_PG.pdf), the `RandomAccess` is a trait from CUDA. It seems we also have to build cuda for SCREAM? If this is true, the SCREAM is required to run on GPU nodes. Okay, just a simple test, let us first see what would happen if we build kokkos in seriel mode.

The seriel mode shows similar errors. Besides, I noticed it seems all memory access operation including "Atomic Access" traits are missing, thus it may not be simply "need cuda" issues. Interesting.

When I used the latest kokkos from github, different errors occur when try "Seriel" and "OPENMP". When only "Seriel" is turned on, MPI errors will occur in compiling SCREAM.

### New Version Passed!

On Jul 20, I found a new version of master branch and following the new instructions in [build.md](https://github.com/E3SM-Project/scream/blob/master/components/scream/docs/build.md), the test can be finished successfully.

When I turn on CUDA with cuda version 10.1, there are still problems.



**Updated 2020-07-23**
