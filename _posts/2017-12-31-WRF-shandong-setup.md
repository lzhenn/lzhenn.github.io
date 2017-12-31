---
layout: post
title:  "山东半岛预报系统搭建"
categories: modeling linux
tags:  WRF forecast&nbsp;system
author: LZN
---

* content
{:toc}

打算做一个山东半岛的预报系统，以后也算投名状。

### configure尝试选择20. INTEL (ifort/icc): Xeon (SNB with AVX mods)

之后直接执行编译
```bash
./compile -j 8 em_real
```
执行编译过程卡住。更换15. 不包括avx指令集后成功。

### 编译wps发现无法编译出ungrib，经过多次测试，分别
```bash
yum install libpng-devel
yum install jasper-devel
```
将devel包安装完整后成功。

### 下载geog包并解压。

### 调整wps设置



