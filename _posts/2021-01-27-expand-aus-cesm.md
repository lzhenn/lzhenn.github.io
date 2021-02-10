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
The terrain height is 10 m to avoid sea level change issues.
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

Based on the modified land/sea mask file, we then adjust the corresponding ocean files.

1. Use [this script](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210128-pop2-chg-bathy-accord-imask.py) to change bathymetry. Note the "big-enddian/little endian" shift is much easier in python.

2. [Check the bathymetry](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/180620-draw-ocean-bath.ncl) is correctly modified. Here we maintained the original bathymetry to minimize the change in the real ocean (hop the integration is smooth).

3. [Change Oceanic Region Mask](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210128-pop2-chg-maskid-accord-imask.py).

4. [Change Initial condition](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210128-pop2-chg-init-accord-imask.py).

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/210203-changed-bathymetry.png)

**Fig.3 Modified Ocean Bathymetry (shadings denote active grids in one ocean column)**

### III. Coupler

Follow [the previous post](https://novarizark.github.io/2018/11/08/cesm-fully-coupled-aquap/#ii-coupler-mapping-modification) to generate SCRIP mapping files and domain files for other components.

### IV. Atmosphere

Using the generated domain files, here we modify the topography file for the atmosphere.

1. Use [this script](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210202-cam-chg-topo-accord-ifrac.py) to change the `LANDFRAC` and `PHIS` (terrain height) in topography file according to the `domain.lnd` file generated in III. (LANDFRAC is ignored by CAM4 and CAM5; fractional land is defined by the coupler mapping files.)

### IV. Land

Use [this script](https://github.com/Novarizark/tracacode/blob/master/2101-LandSea-Polar-XMHu/script/210202-clm-chg-surfdata.py) to modify the land surface data sets, including PFT, soil color, etc.

### V. Namelist

Follow [the previous post](https://novarizark.github.io/2018/11/08/cesm-fully-coupled-aquap/#62-namelist-changes-surf_aqua-final) to setup your namelist files.

### VI. Troubleshooting

We can successfully integrate the model after above settings. The question is, we found runtime error from atm model 
```
COLDSST: encountered in cldfrc:         241           6  0.161392688007392
```
This error comes from `cloud_fraction.F90`, and it complains about low SSTs. We then found there is a strenge error from cpl to the atm that the grid cell with certain fraction of ocean surface, feels SST=0K.
This should not have happened as scrip mapping should have handle it well. We recheced all files with proper configurations and finally used some tricks to get SST from adjacent cell and rewrite the wrongly set SST in the fractional cell.

### VII. Combined script

### VIII. Gallery

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/Z500_2d.png)

**500 hPa HGT**

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/toa_balance_2d.png)

**TOA Radiative Budget**

![](https://github.com/Novarizark/Novarizark.github.io/blob/master/uploads/2021/ts_FSNT_FLNT.png)

**TOA Radiative Budget Time series**

![](https://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2021/ts_2d.result.gif)

**Surface Temperature**



