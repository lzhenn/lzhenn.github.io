---
layout: post
title:  "Setup SAVIO@Berkeley" 
categories: blog
tags: blog
author: LZN
---

* content
{:toc}

SAVIO is Berkeley's high performance clusters.

http://research-it.berkeley.edu/services/high-performance-computing/user-guide

1. set up vim/project

2.set up existing module

#--------- Load specific modules --------------
module load intel/2013_sp1.4.211
module load openmpi/1.6.5-intel

#module load netcdf/4.3.2-intel-p System admin only provide C++ lib

module load nco/4.4.6-intel-p
module load ncview/2.1.2

3. set up NetCDF

$nf-config --all

$nc-config --all

can be used to check the installation status.

&nbsp;