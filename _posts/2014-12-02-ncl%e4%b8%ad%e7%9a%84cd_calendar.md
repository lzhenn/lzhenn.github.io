---
layout: post
title:  "【已解决】ncl中的cd_calendar" 
categories: science
tags: ncl cd_calendar
author: LZN
---

* content
{:toc}

处理CFSR的数据，已经是团队其他成员处理过的了，由于她用的是GrADS，清一色的二进制bin+描述文件ctl，不是自描述的nc文件，ncl处理起来没有任何的metadata，所以都要自己指定。数据文件名是YYYYMM的，循环不是很好写，查了一下，<a href="http://www.ncl.ucar.edu/Document/Functions/Built-in/cd_calendar.shtml#Examples">cd_calendar</a>这个函数很好用，官网上给的例子是hours since和days since的，实际上用months也是可以的。
<pre> <strong>16    </strong> time = ispan(0,383,1)
 <strong>17    </strong> time@units  =   "months since 1979-01-01"
 <strong>18</strong>
 <strong>19    </strong> date = cd_calendar(time,-1)</pre>
得到的date变量返回integer形式的YYYYMM，从79年1月到10年12月，perfect！
而且使用cd_calendar函数，发现之前做起来很麻烦（要算位置）的合成和截取，都可以很方便实现了。还是教程看得不够细致呀 = =

<span style="color: #808080;"><strong>#Up to 20151216#</strong></span>

用cd_calendar可以很好地转换days since之类的时间格式，用于长序列数据的切片读取非常有效。例如下面的例子就可以截取197901-201312的SST片。
<pre> 29 ymstrt = 197901
 30 ymlast = 201312 ; 
 31
 32 data_path = "../../data/sst/monthly"
 33 ctrl_file1 = data_path+"sst_HadOIBl_bc_1.9x2.5_1850_2011_c130301.nc"
 34 ctrl_in1 = addfile (ctrl_file1, "r") 
 35
 36 time = ctrl_in1-&gt;time
 37 yyyymm = cd_calendar(time,-1)
 38 istrt = ind(yyyymm .eq. ymstrt)
 39 ilast = ind(yyyymm .eq. ymlast)
 40 var1 = ctrl_in2-&gt;SST_cpl(istrt:ilast,:,:)</pre>
<span style="color: #808080;"><strong>#Up to 20150107#</strong></span>
