---
layout: post
title:  "First Move on COAWST"
categories: technology
tags: linux fortran hpc debug compiler COAWST
author: LZN
---

* content
{:toc}

### Two issues in compiling `JOE_TC`
----------

* **ISSUE01: WRF MCT lib path problem**

**Solution:** In `configure.wrf`, manually change the `MCT_LIBDIR` to the right path.

* **ISSUE02: mct_coupler - Number assigned processors: 096 not equal to spawned MPI nodes: 032**

**Solution:** Note the `NnodesXXX` settings in `coupling.in` represents the settings for individual components. The sum must be equal to the total number of processors applying in the run script.

### Repeat `Sandy (2012)` and Build Up Framework for `Mangkhut (2018)`
-----------

The `Sandy (2012)` case can be smoothly repeated by following the instructions on the manual. While buiding up the coupling framework over the SCS need more efforts.

The biggest challenge is smoothing the bathemetry to satisfy the rx threshold, using the LP method. 
There is a toolkit from IRB in Croatia [LP Bathymetry](https://www2.irb.hr/korisnici/mdsikir/Bathymetry/), providing several ways to deal with the problem. Note the `lp_solve` [command line tool](https://sourceforge.net/projects/lpsolve/files/lpsolve/5.5.2.5/lp_solve_5.5.2.5_exe_ux64.tar.gz/download) need to be setup at frist. For other version, remember to download the file named as **lp_solve_x.x.x.x_exe_ux64.tar.gz**.

Please check the next post for details about building the framework.

**Updated 2020-02-19**

