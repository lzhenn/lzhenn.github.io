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

I skipped the WRF procedure. Now we form the roms grid system using WPS generated `geo_em` data.

1. Note to remove small island. [refer](https://github.com/Novarizark/project/blob/master/1911-COAWST/script/gba-roms-grid/c200130_gba_roms_grid_mask.m)

2. Use ETOPO bathemetry data to fill the h. [refer](https://github.com/Novarizark/project/blob/master/1911-COAWST/script/gba-roms-grid/190203-from-ETOPO1-to-roms-bath.ncl)

3. Primary process using 9-point smooth, let min(bath)=5. [refer](https://github.com/Novarizark/project/blob/master/1911-COAWST/script/gba-roms-grid/200204-roms-bath-smooth.ncl)

4. Smooth the bathemetry to satisfy the rx threshold, using the LP method. There is a toolkit from IRB in Croatia [LP Bathymetry](https://www2.irb.hr/korisnici/mdsikir/Bathymetry/), providing several ways to deal with the problem. Note the `lp_solve` [command line tool](https://sourceforge.net/projects/lpsolve/files/lpsolve/5.5.2.5/lp_solve_5.5.2.5_exe_ux64.tar.gz/download) need to be setup at frist. For other version, remember to download the file named as **lp_solve_x.x.x.x_exe_ux64.tar.gz**.
    [refer]()
    Some very useful topic on ROMS forum:
    * [rx0 and rx1, a very useful method is provided to make long-term simulation] (https://www.myroms.org/forum/viewtopic.php?t=2841)
    >1) compute vertically stable :!: profile of temp and salt for the domain you are running, horizontally homogeneous :!: , hence not producing any density gradients. In other words, create ana vertical profile for temp and salt in a similar way as is done for many examples in ana_initial.h . In that way if you start your simulation WITHOUT any forcing :!: the ocean should stay (not exactly, diffusion etc, but lets pretend it does, with big confidence) in stable state, you have only vertically stable stratified density, not producing any velocity (because there are no density gradients). However we are not on z grid and there is a sigma slope so you will have effects of *HPGE*, which are direct consequence of "bad" rx1.
    In that way you can see what is the effect of "bad bathymetry and big rx1" and where it is introducing artificial currents because of HPGE.
    Usually look at the bottom, where pressure builds up.

    >2) I identify those regions (i.e. using magnitude of velocity) and create weight factor for smoothing, big magnitude big weight. You want to smooth only there where you have big errors from HPGE, and keep as close as possible to real bathy. After smoothing you get new bathy, run the same case again and compute magnitude again, do that in a iterative way until you are happy. In my case I have to run model for a week to get to steady state with "HPGE" currents that are not changing any more.  
    * https://www.myroms.org/forum/viewtopic.php?t=2330
    * https://www.myroms.org/forum/viewtopic.php?t=612

5. 
     

**Updated 2020-02-19**

