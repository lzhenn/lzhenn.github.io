---
layout: post
title:  "Change CESM/CLM Surface to Pure Bare Ground"
categories: cesm
tags: cesm clm pft
author: LZN
---

* content
{:toc}

In our hierarchy experiments, we hope to make the no_topo series experiments as simple as possible. Thus, it would be great if there is no vegetation on the ground. 
In the CLM, we can be expected that there is an external forcing data to control the surface type of ground/vegetation. Then I found this in `lnd_in` file

``` python
fsurdat = '/users/yangsong3/CESM/input/lnd/clm2/surfdata/surfdata_1.9x2.5_simyr2000_c091005.nc'
```

If you `ncdump` that file, you will see this variable:

``` python
	double PCT_PFT(lsmpft, lsmlat, lsmlon) ;
		PCT_PFT:long_name = "percent plant functional type of gridcell" ;
		PCT_PFT:units = "unitless" ;
```

The first dimension show the corresponding PFT (Plant Functional Types), which define the types and fraction of different landcovers a certain grid (Mosaic method). There is the code table:

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs0m9y9g3oj20kb0ie0ve.jpg)

Thus, the only thing we need to do is to create a new file with change only in PCT_PFT(0,:,:)=100.0

**Updated 2018-06-05**

