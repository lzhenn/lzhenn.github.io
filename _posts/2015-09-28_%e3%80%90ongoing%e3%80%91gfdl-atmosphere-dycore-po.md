---
layout: post
title:  "【NOT solved】GFDL atmosphere dycore porting" 
categories: Linux GFDL_FMS
tags: Linux GFDL_FMS
author: LZN
---

* content
{:toc}

Now we try to setup GFDL dycore model on our Neptune platform. Following steps has been used:

1. We exec the ./exp/fv/fms_runscript, then got the netcdf and mpi error. It seems that the model does not recognize the environmental variables associated with these lib. We add the flags directly to the compile sentence.
<pre>L35: $mkmf -p fms.x -t $template -c "-Duse_libMPI -Duse_netCDF -DUSE_LIMA -DSPMD -DLAND_BND_TRACERS" -a $sourcedir $pathnames /usr/local/include $sourcedir/shared/mpp/include $sourcedir/shared/include /home/yangsong3/soft/mpich314-intel/include /usr/netcdf-4331/include</pre>
And mkmf.template.ia64 file
<pre>LDFLAGS = -L/usr/local/lib -L/usr/netcdf-4331/lib -L/home/yangsong3/soft/mpich314-intel/lib #-lsma</pre>
We comment the "-lsma" flag because it is a flag specific to Cray machine.

Next, we compile again, frequently got this
<pre>ifort:  '-i_dynamic' not supported</pre>
google it, got this

https://software.intel.com/en-us/forums/intel-fortran-compiler-for-linux-and-mac-os-x/topic/486830
<blockquote>Regarding 1:<strong> -i_dynamic</strong> (the underscore form) was a option spelling used many many releases ago that was later mapped to <strong>-i-dynamic</strong> (the hyphen form) and then that form was depreciated in more current releases and it now maps to<strong> -shared-intel</strong></blockquote>
So, we change it to <strong>-shared-intel</strong>, no more warning.

However, when it compiles for a long time (5min), we got error again, lots of:
<pre>/home/yangsong3/soft/GFDL_atm_dycores/exp/fv/../../src/shared/mpp/include/mpp_transmit_mpi.h:79: undefined reference to `mpi_recv_'</pre>
Then we change the ifort compile flag into mpif90, we got this
<pre>/home/yangsong3/soft/GFDL_atm_dycores/exp/fv/../../src/shared/mpp/include/mpp_io_misc.inc:116: undefined reference to `nf_inq_libvers_'</pre>
It really sucks<strong><span style="color: #339966;">.</span></strong>

#Last Edited on 20151004#

<strong><span style="color: #339966;">We finally stop trying and turn to CAM dynamical core simulation and it works really smooth over the CESM construction.</span></strong>

#Last Edited on 20151114#

&nbsp;