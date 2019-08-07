---
layout: post
title:  "NCL ERROR: PopLatLon function cannot access map_* create_rmpPopFileName: file not recognized/found"
categories: science
tags: ncl
author: LZN
---

* content
{:toc}

Wenxiu Zhong met PopLatLon error:

>ls: cannot access map_*: No such file or directory
(0) create_rmpPopFileName: file not recognized/found: map_gx1v6_to_1x1d_bilin_da_100716.nc
(0) create_rmpPopFileName: dir searched: ./

This is actually the system cannot find the pop remap weight file. The file info can be found from the [NCL official site](https://www.ncl.ucar.edu/Applications/popwgtfiles.shtml), which is actually downloaded from the CESM official svn site.

After downloaded the files, export related environmental variable in `~/.bashrc`:

``` bash
 export NCL_POP_REMAP=$DIR_TO_POP_REMAP_FILE
```

`source ~/.bashrc` and re-run the script.

**Updated 2018-12-31**

