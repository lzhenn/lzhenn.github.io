---
layout: post
title:  "Porting CAM3 on SAVIO" 
categories: CESM Fortran Software
tags: CESM Fortran Software
author: LZN
---

* content
{:toc}

When porting cam3, in configure process we meet the error like cannot find "ncdf_xxxx"

In fact, this is not a very serious error because we are using brand new netcdf (after 2012 in fact) that it requires <strong>-lnetcdff </strong>to link to fortran lib instead of only <strong>-lnetcdf</strong>

Change the makefile template, search -lnetcdf and append -lnetcdff to it when using FC

http://www.unidata.ucar.edu/support/help/MailArchives/netcdf/msg11396.html

When finishing compiling, use <a href="http://research-it.berkeley.edu/services/high-performance-computing/running-your-jobs">SLURM method</a> to submit the task with openMP configure, get the error
<pre> 18  READ_NAMELIST: Namelist read returns           -1
 19  ENDRUN: called without a message string</pre>
It seems that the model cannot lock the namelist position.

So I've found that the script moved the cam.exe out of the bld dir after compiling. So it maybe the cam exe cannot find the inside namelist file. Actually it is true!

After moving the exe in, another problem occurs
<pre> 18  READ_NAMELIST: Namelist read returns           19
 19  ENDRUN: called without a message string</pre>
What the hell with 19 code??? Google and got this

http://www.ladon.iqfr.csic.es/intel/doc/main_for/mergedProjects/bldaps_for/ug1l_rt_errors.htm
<table>
<tbody>
<tr>
<td></td>
<td><tt><span style="font-size: medium;">severe (19): Invalid reference to variable in NAMELIST input</span></tt>

FOR$IOS_INVREFVAR. One of the following conditions occurred:
<ul>
	<li class="kadov-p">The variable was not a member of the namelist group.</li>
	<li class="kadov-p">An attempt was made to subscript a scalar variable.</li>
	<li class="kadov-p">A subscript of the array variable was out-of-bounds.</li>
	<li class="kadov-p">An array variable was specified with too many or too few subscripts for the variable.</li>
	<li class="kadov-p">An attempt was made to specify a substring of a noncharacter variable or array name.</li>
	<li class="kadov-p">A substring specifier of the character variable was out-of-bounds.</li>
	<li class="kadov-p">A subscript or substring specifier of the variable was not an integer constant.</li>
	<li class="kadov-p">An attempt was made to specify a substring by using an unsubscripted array variable.</li>
</ul>
</td>
</tr>
</tbody>
</table>
It's possibly that some variables cannot be recognized by the exe.

Find it one by one, stop_option and stop_n!!!!

OMG, CAM3 even doesn't have these two namelist variables!

After deleting that and configuring the running period by NELAPSE, the world back to normal.<span id="transmark" style="display: none; width: 0px; height: 0px;"></span>

&nbsp;

&nbsp;