---
layout: post
title:  "SP-CAM AMIP run" 
categories: science
tags: cesm spcam amip
author: LZN
---

* content
{:toc}

1. 注意下载完整restart文件以及rpointer

2. AMIP run默认输出中fincl1文件变量cb_sulf_c在SP下不存在，因此运行前删掉atm_in中fincl1这一行即可。

3. 不要用xxx.run提交，用yhbatch直接提交包含yhrun的脚本
