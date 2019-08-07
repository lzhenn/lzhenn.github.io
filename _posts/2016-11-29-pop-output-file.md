---
layout: post
title:  "POP output file" 
categories: science
tags: cesm pop
author: LZN
---

* content
{:toc}

pop output files are named as pop.h.xxxx, tavg= averaged over certain time period.
<div align="CENTER">
<table border="1" cellpadding="3"><caption><strong>Table:</strong> Current available tavg fields</caption>
<tbody>
<tr>
<td align="LEFT" valign="TOP"><b>Name</b></td>
<td align="LEFT" valign="TOP"><b>Units</b></td>
<td align="LEFT" valign="TOP"><b>Description</b></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SHF</td>
<td align="LEFT" valign="TOP"><i>W/m<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Surface Heat Flux</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SFWF</td>
<td align="LEFT" valign="TOP"><i>mm/day</i></td>
<td align="LEFT" valign="TOP">Surface Freshwater Flux (p-e)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SSH</td>
<td align="LEFT" valign="TOP"><i>cm</i></td>
<td align="LEFT" valign="TOP">Sea Surface Height</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">H2
(SSH2 in CESM1)</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">SSH<sup>2</sup></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">H3</td>
<td align="LEFT" valign="TOP">unitless</td>
<td align="LEFT" valign="TOP"><i>(Δ<sub>x</sub>(SSH))<sup>2</sup> + (Δ<sub>y</sub>(SSH))<sup>2</sup></i></td>
</tr>
<tr>
<td align="LEFT" valign="TOP"><strong>TAUX</strong></td>
<td align="LEFT" valign="TOP"><strong><i>dyne/cm<sup>2</sup></i></strong></td>
<td align="LEFT" valign="TOP"><strong>Zonal windstress</strong></td>
</tr>
<tr>
<td align="LEFT" valign="TOP"><strong>TAUY</strong></td>
<td align="LEFT" valign="TOP"><strong><i>dyne/cm<sup>2</sup></i></strong></td>
<td align="LEFT" valign="TOP"><strong>Meridional windstress</strong></td>
</tr>
<tr>
<td align="LEFT" valign="TOP"><strong>UVEL</strong></td>
<td align="LEFT" valign="TOP"><strong><i>cm/s</i></strong></td>
<td align="LEFT" valign="TOP"><strong>Zonal Velocity</strong></td>
</tr>
<tr>
<td align="LEFT" valign="TOP"><strong>VVEL</strong></td>
<td align="LEFT" valign="TOP"><strong><i>cm/s</i></strong></td>
<td align="LEFT" valign="TOP"><strong>Meridional Velocity</strong></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">KE</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Horizontal Kinetic Energy (U<sup>2</sup> + V<sup>2</sup>)/2</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TEMP</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C</i></td>
<td align="LEFT" valign="TOP">Potential Temperature</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SALT</td>
<td align="LEFT" valign="TOP"><i>g/g</i></td>
<td align="LEFT" valign="TOP">Salinity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TEMP2</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Temperature<sup>2</sup></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SALT2</td>
<td align="LEFT" valign="TOP"><i>(g/g)<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Salt<sup>2</sup></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UET</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C/s</i></td>
<td align="LEFT" valign="TOP">East Flux of Heat</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNT</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C/s</i></td>
<td align="LEFT" valign="TOP">North Flux of Heat</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WTT</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C/s</i></td>
<td align="LEFT" valign="TOP">Top Flux of Heat</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UES</td>
<td align="LEFT" valign="TOP"><i>g/g/s</i></td>
<td align="LEFT" valign="TOP">East Flux of Salt</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNS</td>
<td align="LEFT" valign="TOP"><i>g/g/s</i></td>
<td align="LEFT" valign="TOP">North Flux of Salt</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WTS</td>
<td align="LEFT" valign="TOP"><i>g/g/s</i></td>
<td align="LEFT" valign="TOP">Top Flux of Salt</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UEU</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">East Flux of Zonal Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNU</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">North Flux of Zonal Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UEV</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">East Flux of Meridional Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNV</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">North Flux of Meridional Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">PV</td>
<td align="LEFT" valign="TOP"><i>1/s</i></td>
<td align="LEFT" valign="TOP">Potential Vorticity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">Q</td>
<td align="LEFT" valign="TOP"><i>g/cm<sup>4</sup></i></td>
<td align="LEFT" valign="TOP">z-derivative of potential density</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">PD</td>
<td align="LEFT" valign="TOP"><i>g/cm<sup>3</sup></i></td>
<td align="LEFT" valign="TOP">Potential density referenced to surface</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UDP</td>
<td align="LEFT" valign="TOP"><i>erg</i></td>
<td align="LEFT" valign="TOP">Pressure work</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">PEC</td>
<td align="LEFT" valign="TOP"><i>g/cm<sup>3</sup></i></td>
<td align="LEFT" valign="TOP">Potential energy release due to convection</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">NCNV</td>
<td align="LEFT" valign="TOP"><i>adjustments/s</i></td>
<td align="LEFT" valign="TOP">Convective adjustments per second</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WTU</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Top flux of Zonal Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WTV</td>
<td align="LEFT" valign="TOP"><i>cm/s<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Top flux of Meridional Momentum</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ST</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>Cg/g</i></td>
<td align="LEFT" valign="TOP">Temperature*Salinity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">RHO</td>
<td align="LEFT" valign="TOP"><i>g/cm<sup>3</sup></i></td>
<td align="LEFT" valign="TOP">In-situ density</td>
</tr>
</tbody>
</table>
</div>
&nbsp;
<div align="CENTER">
<table style="height: 6452px;" border="1" width="584" cellpadding="3"><caption><strong>Table:</strong> Additional available <b>CESM1</b> tavg fields</caption>
<tbody>
<tr>
<td align="LEFT" valign="TOP"><b>Name</b></td>
<td align="LEFT" valign="TOP"><b>Units</b></td>
<td align="LEFT" valign="TOP"><b>Description</b></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">QFLUX</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">Internal Ocean Heat Flux Due to Ice Formation;
heat of fusion &gt; 0 or ice-melting potential &lt; 0</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">BSF</td>
<td align="LEFT" valign="TOP"><i>Sv</i></td>
<td align="LEFT" valign="TOP">Barotropic Stream Function</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TFW_T</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">T flux due to freshwater flux</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TFW_S</td>
<td align="LEFT" valign="TOP"><i>kg/m<sup>2</sup>/s</i></td>
<td align="LEFT" valign="TOP">S flux due to freshwater flux (kg of salt/m^2/s)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">RESID_T</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Free-Surface Residual Flux (T)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">RESID_S</td>
<td align="LEFT" valign="TOP"><i>kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Free-Surface Residual Flux (S)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">QSW_HTP</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Solar Short-Wave Heat Flux in top layer</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">QSW_HBL</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Solar Short-Wave Heat Flux in boundary layer</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SHF_QSW</td>
<td align="LEFT" valign="TOP"><i>Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Solar Short-Wave Heat Flux</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">PREC_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Precipitation Flux from Coupler (rain+snow)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SNOW_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Snow Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">EVAP_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Evaporation Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">MELT_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Melt Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ROFF_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Runoff Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">IOFF_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Ice Flux from Coupler due to Land-Model Snow Capping</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SALT_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Salt Flux from Coupler (kg of salt/m^2/s)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SENH_F</td>
<td align="LEFT" valign="TOP"><i> kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Sensible Heat Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">LWUP_F</td>
<td align="LEFT" valign="TOP"><i> Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Longwave Heat Flux (up) from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">LWDN_F</td>
<td align="LEFT" valign="TOP"><i> Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Longwave Heat Flux (down) from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">MELTH_F</td>
<td align="LEFT" valign="TOP"><i> Watts/m<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Melt Heat Flux from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">IFRAC</td>
<td align="LEFT" valign="TOP"><i> unitless fraction </i></td>
<td align="LEFT" valign="TOP">Ice Fraction from Coupler</td>
</tr>
<tr>
<td align="LEFT" valign="TOP"><strong>HMXL and</strong>
<strong> HMXL_2</strong></td>
<td align="LEFT" valign="TOP"><strong><i> cm </i></strong></td>
<td align="LEFT" valign="TOP"><strong>Mixed-Layer Depth<span id="transmark" style="display: none; width: 0px; height: 0px;"></span></strong></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">XMXL and
XMXL_2</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Maximum Mixed-Layer Depth</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TMXL</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Minimum Mixed-Layer Depth</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">HBLT</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Boundary-Layer Depth</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">XBLT</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Maximum Boundary-Layer Depth</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TBLT</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Minimum Boundary-Layer Depth</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">FW</td>
<td align="LEFT" valign="TOP"><i> cm/s </i></td>
<td align="LEFT" valign="TOP">Freshwater Flux</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVT</td>
<td align="LEFT" valign="TOP"><i> cm/<sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated T Advection Tendency</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVS</td>
<td align="LEFT" valign="TOP"><i>cm g/km/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated S Advection Tendency</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">dTEMP_POS_2D</td>
<td align="LEFT" valign="TOP"><i> <sup>o</sup>C </i></td>
<td align="LEFT" valign="TOP">max positive column temperature timestep diff</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">dTEMP_NEG_2D</td>
<td align="LEFT" valign="TOP"><i> <sup>o</sup>C </i></td>
<td align="LEFT" valign="TOP">max negative column temperature timestep diff</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">KAPPA_ISOP</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Isopycnal diffusion coefficient</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">KAPPA_THIC</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Thickness diffusion coefficient</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">HOR_DIFF</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Horizontal diffusion coefficient</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">DIA_DEPTH</td>
<td align="LEFT" valign="TOP"><i>cm </i></td>
<td align="LEFT" valign="TOP">Depth of the Diabatic Region at the Surface</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TLT</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Transition Layer Thickness</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">INT_DEPTH</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Depth at which the Interior Region Starts</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UISOP</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Bolus Velocity in grid-x direction (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VISOP</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Bolus Velocity in grid-y direction (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WISOP</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Vertical Bolus Velocity (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVT_ISOP</td>
<td align="LEFT" valign="TOP"><i> cm/<sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated T Eddy-Induced Advection Tendency (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVS_ISOP</td>
<td align="LEFT" valign="TOP"><i>cm g/km/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated S Eddy-Induced Advection Tendency (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNT_ISOP</td>
<td align="LEFT" valign="TOP"><i><sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Heat Flux Tendency in grid-y Dir due to Eddy-Induced Vel (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNS_ISOP</td>
<td align="LEFT" valign="TOP"><i>g/km/s </i></td>
<td align="LEFT" valign="TOP">Salt Flux Tendency in grid-y Dir due to Eddy-Induced Vel (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">KVMIX</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Vertical diabatic diffusivity due to background
or Tidal Mixing + background</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">KVMIX_M</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Vertical viscosity due to background
or Tidal Mixing + background</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TPOWER</td>
<td align="LEFT" valign="TOP"><i>erg/s </i></td>
<td align="LEFT" valign="TOP">Energy Used by Vertical Mixing</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VVC_BCK</td>
<td align="LEFT" valign="TOP"><i> cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Vertical viscosity due to background</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">USUBM</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Submeso velocity in grid-x direction (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VSUBM</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Submeso velocity in grid-y direction (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WSUBM</td>
<td align="LEFT" valign="TOP"><i>cm/s </i></td>
<td align="LEFT" valign="TOP">Vertical submeso velocity (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVT_SUBM</td>
<td align="LEFT" valign="TOP"><i> cm/<sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated T submeso Advection Tendency (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">ADVS_SUBM</td>
<td align="LEFT" valign="TOP"><i>cm g/km/s </i></td>
<td align="LEFT" valign="TOP">Vertically-Integrated S submeso Advection Tendency (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNT_SUBM</td>
<td align="LEFT" valign="TOP"><i> <sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Heat Flux Tendency in grid-y Dir due to submeso Vel (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VNS_SUBM</td>
<td align="LEFT" valign="TOP"><i> <sup>o</sup>C/s </i></td>
<td align="LEFT" valign="TOP">Salt Flux Tendency in grid-y Dir due to submeso Vel (diagnostic)</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">HLS_SUBM</td>
<td align="LEFT" valign="TOP"><i> cm </i></td>
<td align="LEFT" valign="TOP">Horizontal length scale used in submeso</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VDC_T</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">total diabatic vertical TEMP diffusivity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VDC_S</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">total diabatic vertical SALT diffusivity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">UVEL2</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Velocity in grid-x direction</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VVEL2</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Velocity in grid-y direction</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">WVEL2</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Vertical Velocity<sup>2</sup></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">RHO_VINT</td>
<td align="LEFT" valign="TOP"><i>g/cm<sup>2</sup> </i></td>
<td align="LEFT" valign="TOP">Vertical Integral of In-Situ Density</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SFWF_WRST</td>
<td align="LEFT" valign="TOP"><i>kg/m<sup>2</sup>/s </i></td>
<td align="LEFT" valign="TOP">Virtual Salt Flux due to weak restoring</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TAUX2</td>
<td align="LEFT" valign="TOP"><i>dyne<sup>2</sup>/cm<sup>4</sup> </i></td>
<td align="LEFT" valign="TOP">Windstress<sup>2</sup> in grid-x direction</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">TAUY2</td>
<td align="LEFT" valign="TOP"><i>dyne<sup>2</sup>/cm<sup>4</sup> </i></td>
<td align="LEFT" valign="TOP">Windstress<sup>2</sup> in grid-y direction</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">SSH2
(H2 in LANL POP)</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup></i></td>
<td align="LEFT" valign="TOP">SSH<sup>2</sup></td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VVC</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s</i></td>
<td align="LEFT" valign="TOP">total vertical momentum viscosity</td>
</tr>
<tr>
<td align="LEFT" valign="TOP">VDC_BCK</td>
<td align="LEFT" valign="TOP"><i>cm<sup>2</sup>/s</i></td>
<td align="LEFT" valign="TOP">Vertical diabatic diffusivity due to background</td>
</tr>
</tbody>
</table>
</div>
