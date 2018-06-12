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

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fs1suhdwwwj213s0tggpm.jpg)

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
Here we set all to Layer 25 in pure-aqua (2.6848km depth), and all land (0) to 1 (10m) in surf-aqua model.

However, the NCL had problem when writing the new file. We change to F90 to realize our goal. For example, below is the code to generate surf_aqua bathymetry data:

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


### II. Land Model Modification
------------

### III. Atmospheric Model Modification
------------

### IV. Sea Ice Model Modification
------------

### V. River Model Modification
------------


**Updated 2018-06-07**

