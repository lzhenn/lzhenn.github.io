---
layout: post
title:  "Mask region in the grid system according to shapefile"
categories: wrf
tags: wrf shapefile
author: LZN
---

* content
{:toc}

Here is a demand from YQ that the area of Shanghai need to be marked out from the WRF/CMAQ grid system. Previously, we have tried to mask out the whole region, e.g. the PRD. Now, we need to read the shapefile, and mask the region (closed polyline) by the given name.

A [NCL Page](http://www.ncl.ucar.edu/Applications/shapefiles.shtml) talking about the shapefile in NCL. However, we do not need to know deep in the GIS architecture. The only thing we need to know is how to mask the region by named polylines.

Still, the `shapefile_mask_data` works for this. Just an optional attribute is enough.

```fortran
  opt             = True
  opt@debug       = True
  opt@shape_var   = "NAME_1"
  opt@shape_names = "Shanghai"
```
`ncl_filedump -v` can be used to iterate all possible values for `shape_var`. Original script is available on the [github](https://github.com/Novarizark/project/blob/master/HKUST-yeq-2016/ncl/181112-test-shanghai-shape-final.ncl).

**Updated 2018-11-13**

