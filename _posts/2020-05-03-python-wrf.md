---
layout: post
title:  "Start to use Python for Most Work"
categories: technology
tags: python xarray salem  
author: LZN
---

* content
{:toc}

Start to use python to deal with the WRF output. [xarray](http://xarray.pydata.org/en/stable/index.html) is a very important package to deal with `NetCDF` and `HDF5` data.
As WRF files are not exactly CF compliant: you’ll need a special parser for the timestamp, the coordinate names are a bit exotic and do not correspond to the dimension names, they contain so-called staggered variables (and their correponding coordinates), etc.

[salem](https://salem.readthedocs.io/en/latest/wrf.html) is needed to parser wrf data. This is useful to slice wrf data in xarray.

```python
ds=ds.sel(time=slice('2018-09-15','2018-09-17'))
```






**Updated 2020-05-03**

