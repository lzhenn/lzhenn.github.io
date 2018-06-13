---
layout: post
title:  "CESM Fully Coupled Aqua-Planet Experiments"
categories: cesm
tags: cesm aqua-planet
author: LZN
---

* content
{:toc}

The following sketch displays our hierarchical experiments to reveal the origin of large-scale circulations.

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs9t8wpto1j213t0t4ws8.jpg)

A series of articles have been archived to record the process:
1. [Change CESM/CLM Surface to Pure Bare Ground](https://novarizark.github.io/2018/06/05/clm-landuse/)
2. [CESM F Compset Aqua-Planet Test (in Chinese)](https://novarizark.github.io/2018/05/24/cesm-aquap/)

Now, finally, we chose the red pill, try to go deep in the model configuration to change the land/sea cover and implement our pure-aqua and surf-aqua experiment. See the following sketch:


The implementation of fully coupled aqua-planet experiment is not so straightforward since there is only official support for the prescribed SST aqua-planet. Therefore, as deep-time paleo simulation need to change the land/sea distribution, we seek to use the paleo toolkit to achieve our goal. See [reference](http://www.cesm.ucar.edu/models/paleo/faq/).

### I. Ocean Model Modification
------------

We first begin with the ocean model, POP2. In the guide for deep-time simulation:
> The deep time paleo modeler is responsible for creating the **binary ocean bottom topography file, the horizontal and vertical ocean grid files, a region mask file, and the ocean initial conditions**. In addition, several input template files may need to be changed. For example, if the land/ocean mask is changed, the input template file containing new indices for diagnostic transport calculations will need to be changed. The namelist input file (pop2_in and user_nl_pop2) will need to be changed as well. This section will describe methods that can be used to generate these new files.

Okay, there are four files need to be created.

1. Binary ocean bottom topography file
2. Horizontal and vertical ocean grid files
3. Region mask file
4. Ocean initial condition


#### 1.1 Binary ocean bottom topography file

In `pop2_in`, we see the namelist variable define oceanic bottom topography:

``` python
topography_file = '/users/yangsong3/CESM/input/ocn/pop/gx1v6/grid/topography_20090204.ieeei4'
```

This is an IEEE4 integer binary file. Since the [paleo toolkit](https://github.com/Novarizark/paleoToolkit/blob/master/cesm1/ocn/mk_ocn_grid/paleotopo.f90) for changing the bathymetry is quite complex, we tried to use basic ncl script to change the value.

Results from the file:

``` python
(0) min=0   max=60
```

60 means the deepest ocean bottom lies on the 60th model layer.
Here we set all to Layer 25 in `PURE_AQUA` (2.6848km depth), and all land (0) to 1 (10m) in `SURF_AQUA` model.

However, the NCL had problem when writing the new file (See **[Appendix01](./#61-ncl-binary-file)** for details and solution). We change to F90 to realize our goal. For example, below is the code to generate `SURF_AQUA` bathymetry data:

``` fortran
program change_bathymetry 
    implicit none
    integer, parameter :: fin = 100, fout= 101
    integer, parameter :: nlen = 122880
    integer :: ii
    integer :: status = 0
    integer :: bath(nlen)=0
    character(len=256) :: filename="/users/yangsong3/CESM/input/ocn/pop/gx1v6/grid/topography_20090204.ieeei4"
    character(len=256) :: outname="/users/yangsong3/CESM/input/ocn/pop/gx1v6/grid/topography_surf_aqua_20180607.ieeei4"
    
    open(unit=fin, file=filename, form="unformatted", access="direct", recl=nlen, convert="big_endian")
    read(fin, rec=1) bath 
    close(fin)
    do ii = 1, nlen
        if (bath(ii)<1) then
            bath(ii)=1
        end if
    end do
    open(unit=fout, file=outname, form="unformatted", access="direct", action="write", recl=nlen, convert="big_endian")
    write(fout, rec=1) bath
    close(fout)

end program
```

Using the above program, we rewrote two files with `SURF_AQUA` and `PURE_AQUA` settings.

#### 1.2 Horizontal and vertical ocean grid files

We first check the horizontal grid system.

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs86oih7d2j20iy0lon87.jpg)
![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs86ua17h6j20i30ln4a2.jpg)

It can be seen that over the Northern Polar region, the grid system shifts the north pole onto the Greenland Island, and both NH and SH grid poles are located over the landmass.

According to the Paleo FAQ:
>The ocean model requires that grid poles be placed over land. Numerically no computation can be done at the convergence point of all longitudes at the grid pole. The ocean model solves this problem by shifting the grid pole away from the geographic pole and placing it over a land mass. (Atmospheric models solve this problem by using numerical filters). Therefore if there is no land at the geographic pole, the numerical pole must be shifted over land elsewhere.

To make it simple, we first tried to maintain the default Greenland replaced grid pole/ SH pole with no land mass. If that does not work, we will try to maintain the Greenland and Antarctica landmass, which will not influence our main results.


#### 1.3 Region mask file

We check the POP default basin mask file, with the min=-14 and max=11, the masking figure can be found on the [NCL popmask page](https://www.ncl.ucar.edu/Applications/popmask.shtml).

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs8ekx208mj20jw0da0wp.jpg)

And the `gx1v6_region_idx` is avaliable in the run folder:

|  IDX| OCEAN NAME           |
|-----|----------------------|
|   1 | 'Southern Ocean    ' |
|   2 | 'Pacific Ocean     ' |
|   3 | 'Indian Ocean      ' |
|   4 | 'Persian Gulf      ' |
| -5  |'Red Sea           '  |
|  6  |'Atlantic Ocean    '  |
|  7  |'Mediterranean Sea '  |
|  8  |'Labrador Sea      '  |
|  9  |'GIN Sea           '  |
| 10  |'Arctic Ocean      '  |
| 11  |'Hudson Bay        '  |
|-12  |'Baltic Sea        '  |
|-13  |'Black Sea         '  |
|-14  |'Caspian Sea       '  |

Minus-zero Seas are for marginal seas.

We then follow the guide for Deep Time simulation to change the idx:
>**Deep Time:** Since deep time simulations have ocean configurations that differ profoundly from current day, deep time modelers will need to define their own ocean regions. Typically we recommend that they define two simple regions, Northern and Southern Hemisphere.

We change `gx1v6_region_idx` to:

|  IDX| OCEAN NAME           |
|-----|----------------------|
|   1 | 'Southern Ocean    ' |
|   2 | 'Northern Ocean    ' |

`region_mask_gx1v6` is modified accordingly.

#### 1.4. Ocean initial condition

The final work is to change the ocean initial condition. For `PURE_AQUA` and `SURF_AQUA`, the zonal-mean type should fit well.

>**ZONAL-MEAN**    
>**Initialize with a global, zonally averaged temperature/salinity distribution.** POP allows a zonally averaged temperature/salinity file to be used for initialization. This file is binary and the format can be found in the CCSM3/POP source code, subroutine initial.F

Simply change the `pop2_in`:

``` fortran
init_ts_option = "zonal-mean"
```

However, it seems that this is a legacy configuration in CCSM3/POP. In POP2, I cannot find the zonal-mean option in the source code, so I conducted a simple test to prove this. Unfortunately, the model does not recognize the settings. Therefore, I have to change the default initial condition to fit the aqua-planet run.

The default initial file for temperature and salinity is `ts_PHC2_jan_ic_gx1v6_20090205.ieeer8`. Thus, in the `SURF_AQUA` experiment, we use the poisson grid fill to fill the grid on the ground, and in the `PURE_AQUA` experiment, we fill all grid with zonal mean and mask out layer deeper than L26.

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs9tisw2n4j20om0ft41v.jpg)
![](https://ws1.sinaimg.cn/large/73ebdc71gy1fs9tf8s9gcj20ox0fzgoe.jpg)

We should also use the recommended namelist settings for Deep Time Simulations to turn off the processes not so related to the climate physics:

``` fortran
overflows_on = .false.
overflows_interactive = .false.
lhoriz_varying_bckgrnd = .false.
ldiag_velocity = .false.
ltidal_mixing = .false.
bckgrnd_vdc1 = 0.524
bckgrnd_vdc2 = 0.313
sw_absorption_type = 'jerlov'
jerlov_water_type = 3
chl_option = 'file'
chl_filename = 'unknown-chl'
chl_file_fmt = 'bin'
```

### II. Land Model Modification
------------

### III. Atmospheric Model Modification
------------

### IV. Sea Ice Model Modification
------------

### V. Coupler Mapping Modification
------------

All CESM Land/Sea mask info comes from the ocean data.




### VI. Appendix

#### 6.1 NCL Binary File

We first found that when we use the NCL to write a direct binary file, the file records very large values near the top of the variable type (e.g. 21474836xx for int, and 3e317 for double). Therefore, we tried to use fortran to deal with the problem. Finally, we found this is actually we set the file option as Big_Endian in NCL only for read process. Solution is simple, also set for write process:

``` fortran
setfileoption("bin","WriteByteOrder","BigEndian")
```

Note to use `WriteByteOrder`.

**Updated 2018-06-13**

