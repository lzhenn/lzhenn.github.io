---
layout: post
title:  "CMAQ output files" 
categories: science
tags: cmaq
author: LZN
---

* content
{:toc}

CMAQ以ACONC为中缀的输出文件中每天有25个时次，非常诡异，经查UG，

CONC为瞬时文件，最常用；

ACONC通常为小时平均文件；

CGRID为restart文件。

经查ncdump，CONC文件TSTEP在第25步<span id="transmark" style="display: none; width: 0px; height: 0px;"></span>输出了第24时次（下一个输出文件起始时刻）的数据，因此读取的时候丢掉最后一个时次即可。

&nbsp;
