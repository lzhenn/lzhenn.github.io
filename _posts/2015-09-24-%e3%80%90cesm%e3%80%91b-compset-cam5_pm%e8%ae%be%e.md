---
layout: post
title:  "【CESM】B compset CAM5_PM设置" 
categories: science
tags: cesm cam5 compset
author: LZN
---

* content
{:toc}

Since we don't care about the chemical process when investigate the physical climate system, we hope to close the prognostic chemistry model in CAM5. For F compset, it is easy because a specific PM compset without active chemistry model has been provided by CESM. For B compset, there is no option like this.

Therefore, we try to capture the differences in FC5PM and FC5. We first see the differences in output flow after create_newcase command.
<pre>6c6
&lt;   2000_CAM5_CLM40%SP_CICE%PRES_DOCN%DOM_RTM_SGLC_SWAV (F_2000_CAM5) (FC5)
---
&gt;   2000_CAM5%PM_CLM40%SP_CICE%PRES_DOCN%DOM_RTM_SGLC_SWAV (F_2000_CAM5_PM) (FC5PM)
8c8
&lt;   CAM: CLM: RTM: CICE: DOCN: SGLC: SWAV: present day: cam5 physics: clm4.0 physics: clm4.0 Satellite phenology: prescribed cice: docn data mode:
---
&gt;   CAM: CLM: RTM: CICE: DOCN: SGLC: SWAV: present day: cam5 physics: CAM prescribed modal aerosols: clm4.0 physics: clm4.0 Satellite phenology: prescribed cice: docn data mode:
23c23
&lt;   CAM_CONFIG_OPTS: -phys cam5
---
&gt;   CAM_CONFIG_OPTS: -phys cam5 -chem none
58,63c58,63
&lt; Creating /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM
&lt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM/env_case.xml
&lt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM/env_mach_pes.xml
&lt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM/env_build.xml
&lt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM/env_run.xml
&lt; Locking file /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_CHEM/env_case.xml
---
&gt; Creating /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM
&gt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM/env_case.xml
&gt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM/env_mach_pes.xml
&gt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM/env_build.xml
&gt; Created /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM/env_run.xml
&gt; Locking file /WORK/sysu_hjkx_ys/L_Zealot/cesm/F/CAM5_NO_CHEM/env_case.xml</pre>
Clearly, a PM option has been added to the CAM5 component. We try put this full name to B compset.

Things never get so smooth~
<pre>set_compset: no match for compset 2000_CAM5%PM_CLM40%SP_CICE_POP2_RTM_SGLC_SWAV
            to see supported compsets issue</pre>
It seems that we have to change it in the specific configuration file.

We then try to seek the differences in xml files. In <strong>env_build.xml,  </strong>we found an interesting differences:
<pre>40c40
&lt; &lt;entry id="EXEROOT" value="/HOME/sysu_hjkx_ys/WORKSPACE/L_Zealot/cesm/F/F2000_F09_CAM5_CTRL/bld" /&gt;
---
&gt; &lt;entry id="EXEROOT" value="/HOME/sysu_hjkx_ys/WORKSPACE/L_Zealot/cesm/F/F2000_F09_CAM5PM_CTRL/bld" /&gt;
72c72
&lt; &lt;entry id="CAM_CONFIG_OPTS" value="-phys cam5" /&gt;
---
&gt; &lt;entry id="CAM_CONFIG_OPTS" value="-phys cam5 -chem none" /&gt;</pre>
That is fine. We then add argument "<strong><span style="color: #ff0000;"><em>-chem none</em></span></strong>" to the env_build.xml in B2000CAM5 case, setup and build, smoothly!

Now we come to the atm_in differences between FC5 and FC5PM
<pre>1,3c1,8
&lt; &amp;aerosol_nl
&lt; dust_emis_fact = 0.35D0
&lt; soil_erod = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/dst/dst_0.9x1.25_c100121.nc'
---
&gt; &amp;aerodep_flx_nl
&gt; aerodep_flx_cycle_yr = 2000
&gt; aerodep_flx_datapath = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mam/aero'
&gt; aerodep_flx_file = 'mam3_1.9x2.5_L30_2000clim_c130319.nc'
&gt; aerodep_flx_specifier = 'bc_a1DDF', 'bc_c1DDF', 'pom_a1DDF', 'pom_c1DDF', 'soa_a1DDF', 'soa_c1DDF', 'soa_a2DDF', 'soa_c2DDF',
&gt; 'dst_a1DDF', 'dst_c1DDF', 'dst_a3DDF', 'dst_c3DDF', 'bc_a1SFWET', 'bc_c1SFWET', 'pom_a1SFWET', 'pom_c1SFWET',
&gt; 'soa_a1SFWET', 'soa_c1SFWET', 'dst_a1SFWET', 'dst_c1SFWET', 'dst_a3SFWET', 'dst_c3SFWET'
&gt; aerodep_flx_type = 'CYCLICAL'
10d14
&lt; print_energy_errors = .false.
16,34d19
&lt; aer_drydep_list = 'bc_a1', 'dst_a1', 'dst_a3', 'ncl_a1', 'ncl_a2', 'ncl_a3', 'num_a1', 'num_a2', 'num_a3', 'pom_a1', 'so4_a1',
&lt; 'so4_a2', 'so4_a3', 'soa_a1', 'soa_a2'
&lt; aer_wetdep_list = 'bc_a1', 'dst_a1', 'dst_a3', 'ncl_a1', 'ncl_a2', 'ncl_a3', 'num_a1', 'num_a2', 'num_a3', 'pom_a1', 'so4_a1',
&lt; 'so4_a2', 'so4_a3', 'soa_a1', 'soa_a2'
&lt; clim_soilw_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart/dvel/clim_soilw.nc'
&lt; depvel_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart/dvel/depvel_monthly.nc'
&lt; depvel_lnd_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart/dvel/regrid_vegetation.nc'
&lt; exo_coldens_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart/phot/exo_coldens.nc'
&lt; ext_frc_specifier = 'SO2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so2_elev_2000_c090726.nc',
&lt; 'bc_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_bc_elev_2000_c090726.nc',
&lt; 'num_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_num_a1_elev_2000_c090726.nc',
&lt; 'num_a2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_num_a2_elev_2000_c090726.nc',
&lt; 'pom_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_oc_elev_2000_c090726.nc',
&lt; 'so4_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so4_a1_elev_2000_c090726.nc',
&lt; 'so4_a2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so4_a2_elev_2000_c090726.nc'
&lt; ext_frc_type = 'CYCLICAL'
&lt; fstrat_list = ' '
&lt; rsf_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/waccm/phot/RSF_GT200nm_v3.0_c080416.nc'
&lt; season_wes_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart/dvel/season_wes.nc'
36,54d20
&lt; srf_emis_specifier = 'DMS -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/aerocom_mam3_dms_surf_2000_c090129.nc',
&lt; 'SO2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so2_surf_2000_c090726.nc',
&lt; 'SOAG -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_soag_1.5_surf_2000_c100217.nc',
&lt; 'bc_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_bc_surf_2000_c090726.nc',
&lt; 'num_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_num_a1_surf_2000_c090726.nc',
&lt; 'num_a2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_num_a2_surf_2000_c090726.nc',
&lt; 'pom_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_oc_surf_2000_c090726.nc',
&lt; 'so4_a1 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so4_a1_surf_2000_c090726.nc',
&lt; 'so4_a2 -&gt; /HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/emis/ar5_mam3_so4_a2_surf_2000_c090726.nc'
&lt; srf_emis_type = 'CYCLICAL'
&lt; tracer_cnst_cycle_yr = 2000
&lt; tracer_cnst_datapath = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mozart_aero/oxid'
&lt; tracer_cnst_file = 'oxid_1.9x2.5_L26_1850-2005_c091123.nc'
&lt; tracer_cnst_filelist = 'oxid_1.9x2.5_L26_clim_list.c090805.txt'
&lt; tracer_cnst_specifier = 'O3','OH','NO3','HO2'
&lt; tracer_cnst_type = 'CYCLICAL'
&lt; use_cam_sulfchem = .false.
&lt; xactive_prates = .false.
&lt; xs_long_file = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/waccm/phot/temp_prs_GT200nm_jpl06_c080930.nc'
61d26
&lt; flbc_list = ' '
114c79
&lt; cam_chempkg = 'trop_mam3'
---
&gt; cam_chempkg = 'none'
137a103,114
&gt; &amp;prescribed_aero_nl
&gt; prescribed_aero_cycle_yr = 2000
&gt; prescribed_aero_datapath = '/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/chem/trop_mam/aero'
&gt; prescribed_aero_file = 'mam3_1.9x2.5_L30_2000clim_c130319.nc'
&gt; prescribed_aero_specifier = 'num_c1', 'bc_c1', 'dst_c1', 'ncl_c1', 'pom_c1', 'so4_c1', 'soa_c1', 'num_c2',
&gt; 'ncl_c2', 'so4_c2', 'soa_c2', 'num_c3', 'dst_c3', 'ncl_c3', 'so4_c3', 'num_a1_logm',
&gt; 'bc_a1_logm', 'dst_a1_logm', 'ncl_a1_logm', 'pom_a1_logm', 'so4_a1_logm', 'soa_a1_logm', 'num_a2_logm', 'ncl_a2_logm',
&gt; 'so4_a2_logm', 'soa_a2_logm', 'num_a3_logm', 'dst_a3_logm', 'ncl_a3_logm', 'so4_a3_logm', 'num_a1_logv', 'bc_a1_logv',
&gt; 'dst_a1_logv', 'ncl_a1_logv', 'pom_a1_logv', 'so4_a1_logv', 'soa_a1_logv', 'num_a2_logv', 'ncl_a2_logv', 'so4_a2_logv',
&gt; 'soa_a2_logv', 'num_a3_logv', 'dst_a3_logv', 'ncl_a3_logv', 'so4_a3_logv'
&gt; prescribed_aero_type = 'CYCLICAL'
&gt; /
150,158c127,135
&lt; mode_defs = 'mam3_mode1:accum:=', 'A:num_a1:N:num_c1:num_mr:+',
&lt; 'A:so4_a1:N:so4_c1:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc:+', 'A:pom_a1:N:pom_c1:p-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocpho_rrtmg_c101112.nc:+',
&lt; 'A:soa_a1:N:soa_c1:s-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocphi_rrtmg_c100508.nc:+', 'A:bc_a1:N:bc_c1:black-c:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/bcpho_rrtmg_c100508.nc:+',
&lt; 'A:dst_a1:N:dst_c1:dust:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/dust4_rrtmg_c090521.nc:+', 'A:ncl_a1:N:ncl_c1:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc',
&lt; 'mam3_mode2:aitken:=', 'A:num_a2:N:num_c2:num_mr:+',
&lt; 'A:so4_a2:N:so4_c2:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc:+', 'A:soa_a2:N:soa_c2:s-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocphi_rrtmg_c100508.nc:+',
&lt; 'A:ncl_a2:N:ncl_c2:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc', 'mam3_mode3:coarse:=',
&lt; 'A:num_a3:N:num_c3:num_mr:+', 'A:dst_a3:N:dst_c3:dust:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/dust4_rrtmg_c090521.nc:+',
&lt; 'A:ncl_a3:N:ncl_c3:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc:+', 'A:so4_a3:N:so4_c3:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc'
---
&gt; mode_defs = 'mam3_mode1:accum:=', 'N:num_a1:N:num_c1:num_mr:+',
&gt; 'N:so4_a1:N:so4_c1:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc:+', 'N:pom_a1:N:pom_c1:p-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocpho_rrtmg_c101112.nc:+',
&gt; 'N:soa_a1:N:soa_c1:s-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocphi_rrtmg_c100508.nc:+', 'N:bc_a1:N:bc_c1:black-c:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/bcpho_rrtmg_c100508.nc:+',
&gt; 'N:dst_a1:N:dst_c1:dust:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/dust4_rrtmg_c090521.nc:+', 'N:ncl_a1:N:ncl_c1:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc',
&gt; 'mam3_mode2:aitken:=', 'N:num_a2:N:num_c2:num_mr:+',
&gt; 'N:so4_a2:N:so4_c2:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc:+', 'N:soa_a2:N:soa_c2:s-organic:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ocphi_rrtmg_c100508.nc:+',
&gt; 'N:ncl_a2:N:ncl_c2:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc', 'mam3_mode3:coarse:=',
&gt; 'N:num_a3:N:num_c3:num_mr:+', 'N:dst_a3:N:dst_c3:dust:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/dust4_rrtmg_c090521.nc:+',
&gt; 'N:ncl_a3:N:ncl_c3:seasalt:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/ssam_rrtmg_c100508.nc:+', 'N:so4_a3:N:so4_c3:sulfate:/HOME/sysu_hjkx_ys/WORKSPACE/cesm/input/atm/cam/physprops/sulfate_rrtmg_c080918.nc'
191,193d167
&lt; &amp;wetdep_inparm
&lt; gas_wetdep_list = 'H2O2','SO2'
&lt; /</pre>
Such a lot differences in input files as we expected.

We test the <strong>atm_in</strong> differences between B with / without "-chem none" argument, everything goes fine!

Now we run the model for several months to test the final results.

Configuration:

B2000_CAM5

0.9x1.25

Tianhe-2: 192PEs

&nbsp;

output with" phys cam5 -chem none":
<pre> -rw-r--r-- 1 sysu_hjkx_ys sysu_hjkx 299965072 <strong>Sep 24 15:10</strong> B_NO_CHEM_CAM5_TEST.cam.h0.0001-01.nc
-rw-r--r-- 1 sysu_hjkx_ys sysu_hjkx 299965072 <strong>Sep 24 15:30</strong> B_NO_CHEM_CAM5_TEST.cam.h0.0001-02.nc

</pre>
output without "phys cam5":
<pre>-rw-r--r-- 1 sysu_hjkx_ys sysu_hjkx 305056100 <strong>Sep 24 15:23</strong> B_CHEM_CAM5_TEST.cam.h0.0001-01.nc
-rw-r--r-- 1 sysu_hjkx_ys sysu_hjkx 305056100 <strong>Sep 24 15:49</strong> B_CHEM_CAM5_TEST.cam.h0.0001-02.nc</pre>
So without the aerosol active, it saves (49-23)-(30-10) = 6 min in each month. About 6/26*100% = 23% time saved.
