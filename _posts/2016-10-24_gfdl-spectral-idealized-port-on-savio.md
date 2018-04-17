---
layout: post
title:  "GFDL Spectral Idealized port on SAVIO" 
categories: Linux HPC GFDL_FMS
tags: Linux HPC GFDL_FMS
author: LZN
---

* content
{:toc}

copy and paste to create

<strong>mkmf.template.savio.without_mpi</strong> in ./bin/

change:

FC CC MPI and NetCDF pathes.

in ./full_dynamics, change:

<strong>compile_full_dynamics_on_savio.csh </strong> to fit savio (usually, just change platform name is okay).

when compile, error:
<h5><span style="color: #ff0000;">ifort: error #10031 error: could not write to argument file</span></h5>
google it:

https://software.intel.com/en-us/forums/intel-math-kernel-library/topic/281453
<blockquote>The MKL libraries are in different directories than the compiler runtime and other libraries. By default, the compiler will not search for libraries in the MKL <b>lib</b> directory. Use the <b>-mkl</b> compiler option for simple jobs, and use the MKL Link Line Advisor for more intricate jobs.</blockquote>
When I tried <strong>-mkl</strong> it doesn't work and appeared another error.

Fortunately, when I tried to module load ant TAB it, a module called

<strong>mkl/2013_sp1.4.211</strong>

just came into my eye.

of course, use it! The problem really solved.

&nbsp;

So what is mkl?

<a href="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/Snap1.jpg"><img class="alignnone size-full wp-image-889" src="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/Snap1.jpg" alt="snap1" width="672" height="324" /></a><span id="transmark" style="display: none; width: 0px; height: 0px;"></span>

&nbsp;

&nbsp;