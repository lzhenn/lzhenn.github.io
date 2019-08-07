---
layout: post
title:  "【CESM】slab ocean coupling" 
categories: science
tags: cesm slab_ocean coupling
author: LZN
---

* content
{:toc}

Here is a <a href="https://www.quora.com/What-are-slab-ocean-models-in-climate-science">quora answer </a>about the slab ocean
<blockquote><span class="rendered_qtext">Slab ocean models consider this whole upper layer as one single body of water, or a 'slab' with one single velocity vector (u,v), and density. The Navier-Stokes equation is modified accordingly to compute the resultant velocity of that slab based on wind forcing and coriolis force. The mixed-layer depth in such models is usually kept fixed. </span></blockquote>
Here is a <a href="https://bb.cgd.ucar.edu/faq-data-ocean-slab-mode-docn-som">FAQ </a>about the slab ocean model. Two things to note:

1. SOM is a kind of data model, can be switched in a namelist variable F compset, env_run.xml.

2. Some standard SOM forcing is available in the inputdata repository.

Now we may start to test the slab ocean. compset choose: E_1850_CAM5

ERROR comes:
<blockquote>svn: URL 'https://svn-ccsm-inputdata.cgd.ucar.edu/trunk/inputdata/ocn/docn7/SOM/UNSET' non-existent in that revision</blockquote>
There should be something wrong with the set of the ocean forcing files. So come to <a href="https://svn-ccsm-inputdata.cgd.ucar.edu/trunk/inputdata/ocn/docn7/SOM/">this dir</a>, no problem.

We need to set the specific foring files in the env_run.xml file. (check FAQ)

We choose <strong>pop_frc.b.c40.B1850CN.f19_g16.100105.nc for </strong>test.

In env_run.xml, only give the name of the file is okay to continue.

After downloading the file, you can build and submit the case. Yet there is no problem even after altering the physics into cam5 -chem none.

Perfect!

&nbsp;

&nbsp;
