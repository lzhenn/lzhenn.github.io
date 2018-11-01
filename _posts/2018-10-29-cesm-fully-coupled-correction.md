---
layout: post
title:  "CESM Fully-coupled Model State Correction"
categories: cesm
tags: cesm fully-coupled
author: LZN
---

* content
{:toc}


### Introduction

[A new NCC paper](https://www.nature.com/articles/s41558-018-0248-0) provided a technology to rectify the fully-coupled model systematic bias.

The procedures are following:

1. A free run (`FREE`) after spin-up, of course, full of systematic biases.
2. A SST restoring run (`SSTR`) toward observational SST.
    * The tech support to restore SST may refer to [my previous notes (in Chinese)](https://novarizark.github.io/2018/01/28/decoupling-cesm/)
    * [Relevant scripts](https://github.com/Novarizark/project/blob/master/1810-ENSO-BIAS/ncl/popregrid2.ncl) for preprocessing.
3. Get downward heat flux differences (SW+LW+LH+SH) from `SSTR-FREE`, make it as a constant forcing and add the forcing to free run, namely `HEATR_CTRL`.
4. Following 3, Do what you need (`HEATR_SEN`).

### Heat Flux Correction

I will then show the procedures to conduct the `HEATR_CTRL` run.

First we lock the definition part for the cam variables to hold data input to & output from the coupler. In `$CESMROOT/models/atm/cam/src/control`:

``` fortran
!
! Public data types
!
  public cam_out_t                  ! Data from atmosphere
  public cam_in_t                   ! Merged surface data

!---------------------------------------------------------------------------
! This is the data that is sent from the atmosphere to the surface models
!---------------------------------------------------------------------------

  type cam_out_t
     integer  :: lchnk               ! chunk index
     integer  :: ncol                ! number of columns in chunk
     real(r8) :: tbot(pcols)         ! bot level temperature
     real(r8) :: zbot(pcols)         ! bot level height above surface
     real(r8) :: ubot(pcols)         ! bot level u wind
     real(r8) :: vbot(pcols)         ! bot level v wind
     real(r8) :: qbot(pcols,pcnst)   ! bot level specific humidity
     real(r8) :: pbot(pcols)         ! bot level pressure
     real(r8) :: rho(pcols)          ! bot level density    
     real(r8) :: netsw(pcols)        !  
     real(r8) :: flwds(pcols)        ! 
     real(r8) :: precsc(pcols)       !
     real(r8) :: precsl(pcols)       !
     real(r8) :: precc(pcols)        ! 
     real(r8) :: precl(pcols)        ! 
     real(r8) :: soll(pcols)         ! 
     real(r8) :: sols(pcols)         ! 
     real(r8) :: solld(pcols)        !
     real(r8) :: solsd(pcols)        !
     real(r8) :: thbot(pcols)        ! 
     real(r8) :: co2prog(pcols)      ! prognostic co2
     real(r8) :: co2diag(pcols)      ! diagnostic co2
     real(r8) :: psl(pcols)
     real(r8) :: bcphiwet(pcols)     ! wet deposition of hydrophilic black carbon
     real(r8) :: bcphidry(pcols)     ! dry deposition of hydrophilic black carbon
     real(r8) :: bcphodry(pcols)     ! dry deposition of hydrophobic black carbon
     real(r8) :: ocphiwet(pcols)     ! wet deposition of hydrophilic organic carbon
     real(r8) :: ocphidry(pcols)     ! dry deposition of hydrophilic organic carbon
     real(r8) :: ocphodry(pcols)     ! dry deposition of hydrophobic organic carbon
     real(r8) :: dstwet1(pcols)      ! wet deposition of dust (bin1)
     real(r8) :: dstdry1(pcols)      ! dry deposition of dust (bin1)
     real(r8) :: dstwet2(pcols)      ! wet deposition of dust (bin2)
     real(r8) :: dstdry2(pcols)      ! dry deposition of dust (bin2)
     real(r8) :: dstwet3(pcols)      ! wet deposition of dust (bin3)
     real(r8) :: dstdry3(pcols)      ! dry deposition of dust (bin3)
     real(r8) :: dstwet4(pcols)      ! wet deposition of dust (bin4)
     real(r8) :: dstdry4(pcols)      ! dry deposition of dust (bin4)
  end type cam_out_t

!---------------------------------------------------------------------------
! This is the merged state of sea-ice, land and ocean surface parameterizations
!---------------------------------------------------------------------------

  type cam_in_t
     integer  :: lchnk                   ! chunk index
     integer  :: ncol                    ! number of active columns
     real(r8) :: asdir(pcols)            ! albedo: shortwave, direct
     real(r8) :: asdif(pcols)            ! albedo: shortwave, diffuse
     real(r8) :: aldir(pcols)            ! albedo: longwave, direct
     real(r8) :: aldif(pcols)            ! albedo: longwave, diffuse
     real(r8) :: lwup(pcols)             ! longwave up radiative flux
     real(r8) :: lhf(pcols)              ! latent heat flux
     real(r8) :: shf(pcols)              ! sensible heat flux
     real(r8) :: wsx(pcols)              ! surface u-stress (N)
     real(r8) :: wsy(pcols)              ! surface v-stress (N)
     real(r8) :: tref(pcols)             ! ref height surface air temp
     real(r8) :: qref(pcols)             ! ref height specific humidity 
     real(r8) :: u10(pcols)              ! 10m wind speed
     real(r8) :: ts(pcols)               ! merged surface temp 
     real(r8) :: sst(pcols)              ! sea surface temp
     real(r8) :: snowhland(pcols)        ! snow depth (liquid water equivalent) over land 
     real(r8) :: snowhice(pcols)         ! snow depth over ice
     real(r8) :: fco2_lnd(pcols)         ! co2 flux from lnd
     real(r8) :: fco2_ocn(pcols)         ! co2 flux from ocn
     real(r8) :: fdms(pcols)             ! dms flux
     real(r8) :: landfrac(pcols)         ! land area fraction
     real(r8) :: icefrac(pcols)          ! sea-ice areal fraction
     real(r8) :: ocnfrac(pcols)          ! ocean areal fraction
     real(r8), pointer, dimension(:) :: ram1  !aerodynamical resistance (s/m) (pcols)
     real(r8), pointer, dimension(:) :: fv    !friction velocity (m/s) (pcols)
     real(r8), pointer, dimension(:) :: soilw !volumetric soil water (m3/m3)
     real(r8) :: cflx(pcols,pcnst)      ! constituent flux (evap)
     real(r8) :: ustar(pcols)            ! atm/ocn saved version of ustar
     real(r8) :: re(pcols)               ! atm/ocn saved version of re
     real(r8) :: ssq(pcols)              ! atm/ocn saved version of ssq
     real(r8), pointer, dimension(:,:) :: depvel ! deposition velocities
  end type cam_in_t

```

Here we note that SW and LW are from coupler, and LH and SH are from coupler. Then we will grep the relationship between these things and the variables in the output file of CAM model.

| Name in code | Name in output |
|----|----|
|cam_out%netsw|FSNS|
|cam_out%flwds|FLDS|
|cam_in%lhf|LHFLX|
|cam_in%shf|SHFLX|

Next, in `physpkg.F90` (still this guy!), we found that lhf is calculated by cam_in%cflx (moisture flux from the surface). As the moisture flux is a constituent flux, I decide to remain the latent heat at first.

Therefore, the question is to add a constant forcing to netsw, flwds, and shflx.

Luckily, we have tried to change the shflx in [previous trial](https://github.com/Novarizark/project/tree/master/SRC_MOD_LIB-2017/SourceMods-shf/src.cam).

For netsw and flwds, `physpkg.F90` call the radiation, and in radiation_tend module, the netsw is set. Note that in `radiation.F90`: 

``` fortran
real(r8), parameter :: cgs2mks = 1.e-3_r8
flds(i)  = cam_out%flwds(i)*cgs2mks
cam_out%flwds(i) = cam_out%flwds(i)*cgs2mks
```

I don't know why they organize the data structure like this. But netsw and flwds both can be handled similarly after physpkg call the radiation module.

The modified code files have been uploaded to [github](https://github.com/Novarizark/project/tree/master/SRC_MOD_LIB-2017/SourceMods-heatflux-correction/src.cam).


**Updated 2018-11-01**

