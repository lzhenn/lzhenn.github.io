---
layout: post
title:  "Javascript响应option OnChange事件"
categories: technology
tags:  javascript html jekyll
author: LZN
---

* content
{:toc}

Side Project中希望能够通过列表选项调整显示的2D map animation，发现JS不去响应OnChange事件，最早以为是单纯改动src不可行，需要ajax方式做请求，检查后发现调用函数时没有给参数括号，不过为啥chrome不报错，奇怪。具体代码：

```javascript
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
        }
    }
 
```
``` html
<select style="margin-bottom: 15px" id="select01" onchange="change_gif(this)">
  <option value="precip">Precipitation</option>
  <option value="snow_cover">Snow Cover</option>
</select>
<div id="mapimg"><img src="https://raw.githubusercontent.com/Novarizark/wrf-sdpwfe/master/fig/precip.gif" /></div>
```
**Updated 2018-01-25**
