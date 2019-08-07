---
layout: post
title:  "WRF SST Update problem solved"
categories: science
tags: server wrf sst
author: LZN
---

* content
{:toc}

When I tried to use the realtime SST update in WRF runtime, I met the problem:

```
 None of the following are allowed to be TRUE :
  ( internal_time_loop .EQ. 1 )                F   
  ( config_flags%grid_fdda .NE. 0 )            F   
  ( config_flags%sst_update .EQ. 1 )           T   
  ( config_flags%all_ic_times )                F   
  ( config_flags%smooth_cg_topo )              F   
  ( config_flags%polar )                       F   
-------------- FATAL CALLED ---------------
FATAL CALLED FROM FILE:  <stdin>  LINE:     431 
 Problems, we cannot have excluded middle data from WPS 

```

delete namelist variable in `namelist.wps`
``` fortran
 process_only_bdy = 5
```

and rebuild the `met_em*` files.

**Updated 2018-07-18**

