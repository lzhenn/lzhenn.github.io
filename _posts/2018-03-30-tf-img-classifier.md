---
layout: post
title:  "测试基于tensorflow的图片分类器"
categories: python notebook
tags: tensorflow 
author: LZN
---

* content
{:toc}

开始测试tensorflow的图片分类器！
按[这个视频](https://www.youtube.com/watch?v=gIhUePPFmpY)来，发现train的一步出现问题
```
ERROR:tensorflow:Couldn't understand architecture name ''
```
发现是指定的环境变量读不到，于是将给ARCH赋值的语句和python执行语句一起放到shell脚本里，问题解决。
train的过程大概用了不到五分钟，估计30-60min的经验是CPU-based，tf应该自动选用cuda解决了。

之后做测试，效果很好。

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fpwweqdx63j20fz0790t7.jpg)

**Updated 2018-03-30**
