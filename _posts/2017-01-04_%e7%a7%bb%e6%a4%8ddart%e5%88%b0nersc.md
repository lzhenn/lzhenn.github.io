---
layout: post
title:  "移植DART到NERSC" 
categories: Linux CESM
tags: Linux CESM
author: LZN
---

* content
{:toc}

拖了好多天，Inez开始催了……

好吧，先登录，发现集群居然叫Edison，也是醉了。不用说，先把环境配置好。

vim配置好后发现目录没有高亮显示。

DART官网

http://www.image.ucar.edu/DAReS/DART/DART_Starting.php#requirements_simple

download link

https://www2.cisl.ucar.edu/software/dart/download

官网手册，写的还是挺详细的：

http://www.image.ucar.edu/DAReS/DART/DART_Starting.php#fortran90

照着来，改mkmf，和gfdl的那些鬼东西差不多，nersc上fortran编译器连接器对应都是ftn，改好后继续按要求，去work目录下修改mkmf指定脚本，make编译，貌似没问题。

Okay，下一步采用quickbuild编译所有可执行程序，出现错误提示f77找不到。

尝试1：修改template，加入

F77=ftn行，失败，错误没有变化。

尝试2：链接

链接ftn到f77，并加入环境变量，失败：

lzhenn@edison11:~/soft/dart/lanai/models/lorenz_63/work&gt; make
f77 -c ../../../common/types_mod.f90
<strong>Use either: 'cc', 'CC', or 'ftn'.</strong>

ftn这个傻逼wrapper不认f77

ifort也不行，找不到netcdf库

gfortran也是。

坑了，不过就是一个f77链接的问题，一定有办法解决！

回到mkmf目录，蓦然发现一个mkmf.template.nersc文件，什么鬼，应该有个intel中缀才对，突然意识到是不是修改template指向的时候出了问题，检查了一下，果然是……修改后居然编译通过了……

卧槽那为什么出这种奇奇怪怪告诉我找不到f77的问题啊……

都是泪 = =

下一步，验证：

tutorial：

http://www.image.ucar.edu/DAReS/DART/trunk/tutorial/

Lanai版本的instructions

http://www.image.ucar.edu/DAReS/DART/Lanai_release.html

Jan 6, 2017:

上午与Inez和Stephanie讨论了trunk版本的dart，估计回来得搞个移植上，web上有couple CESM的guide，后面还有的搞。停不下来。