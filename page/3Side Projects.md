---
layout: page
title: Side Projects 
permalink: /Side Projects/
icon: bar-chart 
type: page
---

<script type="text/javascript">
    function change_gif03(selectObj) {
        var img_obj = document.getElementById("mapimg03");
        var slc_obj = document.getElementById("select03");
        var opt_value = selectObj.value;
        
        switch (opt_value){
            case "precip03":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/precip.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "snow_cover03":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/snow-cover.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "t2m03":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/T2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "rh2m03":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/RH2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "wind03":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/Wind10m.gif?'+ (new Date().getTime())+'"/>';
                break;
        }
    }
    function change_gif02(selectObj) {
        var img_obj = document.getElementById("mapimg02");
        var slc_obj = document.getElementById("select02");
        var opt_value = selectObj.value;
        
        switch (opt_value){
            case "precip02":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_precip.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "snow_cover02":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_snow-cover.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "t2m02":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_T2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "rh2m02":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_RH2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "wind02":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_Wind10m.gif?'+ (new Date().getTime())+'"/>';
                break;
        }
    }
    function change_gif01(selectObj) {
        var img_obj = document.getElementById("mapimg01");
        var slc_obj = document.getElementById("select01");
        var opt_value = selectObj.value;
        
        switch (opt_value){
            case "precip01":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_precip.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "snow_cover01":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_snow-cover.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "t2m01":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_T2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "rh2m01":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_RH2m.gif?'+ (new Date().getTime())+'"/>';
                break;
            case "wind01":
                img_obj.innerHTML='<img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_Wind10m.gif?'+ (new Date().getTime())+'"/>';
                break;
        }
    }
       
</script>




* content
{:toc}
## SDPWFE  
Shandong Peninsula Weather Forecasting Experiment **(For Research Use ONLY)**. 

Prediction initials @ 8pm (UTC+8, Day0) and will be updated around 9am (UTC+8, Day+1) on the next day.

### Station Timeseries
<!--Please select the station for its timeseries.
<select style="margin-bottom: 15px" id="select_ts" onchange="change_png(this)">
  <option value="home">Home</option>
  <option value="seaside">Seaside</option>
  <option value="yt_air">Yantai Airport</option>
  <option value="yt_railway">Yantai Railway Station</option>
  <option value="qd_air">Qingdao Airport</option> 
  <option value="qd_railway">Qingdao Railway Station</option> 
</select>-->
<div id="cloud_img"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/cloud-profile-home.png?{{ site.time }}" /></div>
<div id="profile_img"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/profile-home.png?{{ site.time }}" /></div>
<div id="t2m_img"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/T2m-home.png?{{ site.time }}" /></div>
<div id="wind_img"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/Wind10m-home.png?{{ site.time }}" /></div>

### Weather Map
#### Domain03 (Shandong Peninsula)
Please select the variable for GIF animation.
<select style="margin-bottom: 15px" id="select03" onchange="change_gif03(this)">
  <option value="precip03">Precipitation</option>
  <option value="snow_cover03">Snow Cover</option>
  <option value="t2m03">2m Temperature</option>
  <option value="rh2m03">2m Relative Humidity</option>
  <option value="wind03">10m Wind</option> 
</select>
<div id="mapimg03"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/precip.gif" /></div>

#### Domain02 (Eastern China)
Please select the variable for GIF animation.
<select style="margin-bottom: 15px" id="select02" onchange="change_gif02(this)">
  <option value="precip02">Precipitation</option>
  <option value="snow_cover02">Snow Cover</option>
  <option value="t2m02">2m Temperature</option>
  <option value="rh2m02">2m Relative Humidity</option>
  <option value="wind02">10m Wind</option> 
</select>
<div id="mapimg02"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d02_precip.gif" /></div>

#### Domain01 (East Asia)
Please select the variable for GIF animation.
<select style="margin-bottom: 15px" id="select01" onchange="change_gif01(this)">
  <option value="precip01">Precipitation</option>
  <option value="snow_cover01">Snow Cover</option>
  <option value="t2m01">2m Temperature</option>
  <option value="rh2m01">2m Relative Humidity</option>
  <option value="wind01">10m Wind</option> 
</select>
<div id="mapimg01"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/d01_precip.gif" /></div>

### Hysplit Trajectory Analysis

## DLPE
A test on 500 hPa geopotential high prediction by deep learning, to be posted.



