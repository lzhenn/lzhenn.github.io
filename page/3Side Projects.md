---
layout: page
title: Side Projects 
permalink: /Side Projects/
icon: bar-chart 
type: page
---

* content
{:toc}
## SDPWFE  
Shandong Peninsula Weather Forecasting Experiment, to be posted.

### Weather Map
Please select the variable for GIF animation.
<select style="margin-bottom: 15px" id="select01" onchange="change_gif">
  <option value="snow_cover">Snow Cover</option>
  <option value="precip">Precipitation</option>
<!--  <option value="t2m">2m Temp & Relative Humidity</option>
  <option value="wind">10m Wind</option> -->
</select>
<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/snow-cover.gif?xx" />
### Station Timeseries

#### Home
![](https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/T2m-home.png)

### Hysplit Trajectory Analysis

## DLPE
A test on 500 hPa geopotential high prediction by deep learning, to be posted.


<script type="text/javascript">
　　　　function change_gif() {
　　　　　　var selId = document.getElementById("selecteId");
　　　　　　var hidId = document.getElementById("hiddenId");

　　　　　　hidId.value = selId.options[selId.options.selectedIndex].value;
　　　　}
</script>
