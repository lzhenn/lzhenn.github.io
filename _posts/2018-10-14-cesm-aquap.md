---
layout: post
title:  "CESM测试Aqua Planet试验"
categories: science
tags: cesm aqua-planet
author: LZN
---

* content
{:toc}

开始测试Aqua-Planet试验，直接按照aqua的设置run没有任何问题，但是发现SST没有annual cycle，询问师姐：
>你是用的cesm的default的 aqua compset吗 如果是的话，那么好像是不需要额外读入sst文件的，而是直接在code里指定需要哪种sst profile就可以，具体是通过修改ocn_comp.F90 中 sst_option，这里不同的sst_option代表不同的profile；关于topo，好像你是需要在user_nl_cam里指定一个新的topo文件的(把高度啥的设为0)

这么说还需要自己写一个topo为0的文件。

[一些资料](http://www.cesm.ucar.edu/models/simpler-models/fixed_sst_aqua.html)

修改轨道参数，固定黄赤交角为0度：
``` python

rb_mode='fixed_parameters'
orb_obliq=0.0
orb_eccen=0.0167239
orb_mvelp=102.035

```

**Updated 2018-05-14**

