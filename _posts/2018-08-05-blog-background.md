---
layout: post
title:  "给博客加了个Matrix字幕雨的动态背景"
categories: internet
tags:  github blog jekyll html5 css 
author: LZN
---

* content
{:toc}

之前就想要给博客加个黑客帝国字幕雨做背景，奈何没搞定元素定位的问题，这次花一个多小时折腾了一下算是基本搞定了。

google一下发现大部分实现都是基于html5的canvas绘图，[一个例子](https://codepen.io/P3R0/pen/MwgoKv).

关键就是调整定位的问题，canvas用relative，header和content部分的div元素要用absolute方式定位，top按像素，content的left按5%窗口，效果还不错，如果有不希望发生的覆盖，可以通过z-index调整。

**Updated 2018-08-05**
