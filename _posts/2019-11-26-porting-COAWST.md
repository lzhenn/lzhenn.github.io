---
layout: post
title:  "First Move on COAWST"
categories: technology
tags: linux fortran hpc debug compiler COAWST
author: LZN
---

* content
{:toc}

###Two issues in compiling `JOE_TC`
----------

* ISSUE01: WRF MCT lib path problem

**Solution:** In `configure.wrf`, manually change the `MCT_LIBDIR` to the right path.

* ISSUE02: mct_coupler - Number assigned processors: 096 not equal to spawned MPI nodes: 032

**Solution:** Note the `NnodesXXX` settings in `coupling.in` represents the settings for individual components. The sum must be equal to the total number of processors applying in the run script.

###Repeat `Sandy (2012)`
-----------



**Updated 2019-12-30**

