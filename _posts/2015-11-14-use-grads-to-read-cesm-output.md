---
layout: post
title:  "【ongoing】use grads to read cesm output" 
categories: science
tags: cesm ncl grads
author: LZN
---

* content
{:toc}

Some points to be aware:

2D fields, not same by binary output and netcdf (high efficiency) output, one point value missing, might be the polar point. Therefore, *.bin control and *.nc sensitive is not under the same structure.

2D fields work fine under <strong>v1.9</strong> of grads. However, 3D fields might meet some trouble. Try to use the "standard" attribution, dimention to tackle this problem. An example from NCEP-DOE dataset:

float level(level) ;
level:units = "millibar" ;
level:long_name = "Level" ;
level:positive = "down" ;
level:GRIB_id = 100s ;
level:GRIB_name = "hPa" ;
level:actual_range = 1000.f, 10.f ;
level:axis = "Z" ;
&nbsp;
