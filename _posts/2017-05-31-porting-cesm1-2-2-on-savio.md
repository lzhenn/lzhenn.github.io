---
layout: post
title:  "Porting CESM1.2.2 on SAVIO" 
categories: science
tags: cesm linux hpc
author: LZN
---

* content
{:toc}

When move all the code from HPC4 to savio, and config all machine related environmental variables, the create_newcase got the error:
<p class="p1"><strong><span class="s1">The perl module XML::LibXML is needed for XML parsing in the CESM script system</span></strong></p>
<p class="p1">search</p>
https://bb.cgd.ucar.edu/warning-cesm122

cesm_setup后出现新错误

<strong>gmake: c: Command not found</strong>

https://bb.cgd.ucar.edu/porting-cesm-120-local-cluster-linux-intel-or-pgi125表示增加几个flag即可，后对比Macro文件发现少很多东西。

原来 config_machine.xml中

&lt;COMPILERS&gt;intel14&lt;/COMPILERS&gt;

我写成intel13在config_compiler的时候找不到标的。换成intel后即可。

后到最后连接过程出现错误

ld: cannot find -lrefblas

找不到库文件，经查为lapack的一个lib flag。需要重命名之。
