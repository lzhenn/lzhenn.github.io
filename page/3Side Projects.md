---
layout: page
title: Side Projects 
permalink: /Side Projects/
icon: bar-chart 
type: page
---

<script type="text/javascript">
    function change_gif(selectObj) {
        var img_obj = document.getElementById("mapimg");
        var slc_obj = document.getElementById("select01");
        var opt_value = selectObj.value;
        
        switch (opt_value){
            case "precip":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/precip.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "snow_cover":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/snow-cover.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "t2m":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/T2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "rh2m":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/RH2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "wind":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/Wind10m.gif?'+ (new Date().getTime())+'"/>';
                break;
        }
    }
        
</script>




* content
{:toc}
## SDPWFE  
Shandong Peninsula Weather Forecasting Experiment, to be posted.

### Station Timeseries

#### Home
![](https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/T2m-home.png)


### Weather Map
Please select the variable for GIF animation.
<select style="margin-bottom: 15px" id="select01" onchange="change_gif(this)">
  <option value="precip">Precipitation</option>
  <option value="snow_cover">Snow Cover</option>
  <option value="t2m">2m Temperature</option>
  <option value="rh2m">2m Relative Humidity</option>
  <option value="wind">10m Wind</option> 
</select>
<div id="mapimg"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/precip.gif" /></div>
### Hysplit Trajectory Analysis

## DLPE
A test on 500 hPa geopotential high prediction by deep learning, to be posted.



