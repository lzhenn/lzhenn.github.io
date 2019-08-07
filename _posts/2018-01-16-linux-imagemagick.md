---
layout: post
title:  "利用imagemagick去除png白边"
categories: technology
tags:  imagemagic linux
author: LZN
---

* content
{:toc}

给生成的wrf预报图去除白边，搜索发现imagemagick大神级命令直接搞定，当然算法本身不复杂，毕竟plot出的图边框都是255，但是有这个命令实在太方便了。
``` bash
# Add border
convert aaa.png -bordercolor white -border 10%x10% bbb.png 
# Delete border
convert bbb.png -bordercolor white -trim ccc.png
```


**Updated 2018-01-16**
