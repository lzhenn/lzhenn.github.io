---
layout: post
title:  "CESM Expanded Australia Experiments"
categories: science 
tags: cesm climate
author: LZN
---

* content
{:toc}

In this fully coupled experiment, we expand the Australian landmass to connect the African continent to mimic the similar land-sea distribution in the Northern Hemisphere. The following is a demonstration of the modification.

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/larger_AUS.png)

**Fig.1 Modified Land/Sea Mask Runtime Demo (Surf Temp in 0001-07)**

We expand the land westward based on the natural eastern coastline of Australia (northeast corner: Cape York, and southeast corner: Tasmania), and naturally merged the African continent.
For the **newly emerged landmass**, Plant Functional Types (PFT) are entirely set to bare soil, with the model default clay/sand/silt ratio. 
Soil color is set to code 20, which is in accordance with the western Australia.
The terrain height is zero.
We compiled the CAM3.5 physics package to accelerate the model spin-up. With 10 nodes (240 processors) layout on TH-2, CAM3.5 physics gains ~20% speed-up than CAM4 physics (27 sim.y/day vs 22 sim.y/day).

You may check the following links about the land surface properties:
[GLDAS Soil Land Surface](https://ldas.gsfc.nasa.gov/gldas/soils)

Also, Please see [the previous post about modifications of PFTs and soils in the CLM](https://novarizark.github.io/2018/06/05/clm-landuse/).

Below we archive the procedures to achieve the goal.

### I. Modify Land Sea Mask

We first decide how much we expand the landmass. After that, it would be convenient to use the modified land/sea mask file as a reference to generate other files.
All CESM land/sea mask info comes from ocean data. Here we start from the `gx1v6_090205.nc`.
If you are not familiar with this, please refer [the previous post](https://novarizark.github.io/2018/11/08/cesm-fully-coupled-aquap/#ii-coupler-mapping-modification).

1. Use [python tool](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210127-pop2-imask2bmap.py) to convert land/sea mask to binary map (0-1 bmp) file.

2. Use your GUI tool (even paint app on windows) to edit the land/sea mask to fit your need.

3. Use [python tool](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210127-pop2-bmp2imask.py) to convert bmp back to imask ncfile.

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/bitmap_large_aus.png)

**Fig.2 Modified Land/Sea Mask Bitmap (note the ocean grid system gives some deformation look)**

### II. Ocean

Using the [python script]() to change bathymetry.

Check the bathymetry is correctly modified.

Change Oceanic Region Mask.

Change Initial condition.

Verify the initial condition change.


### III. Atmosphere


### IV. Land
