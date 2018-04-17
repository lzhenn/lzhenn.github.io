---
layout: post
title:  "关于shell循环wget与tar" 
categories: Linux
tags: Linux
author: LZN
---

* content
{:toc}

又到了批量下数据的时候，linux批量wget真是顺畅无比，脚本直接用C/C++语法即可。
<pre>#!/bin/bash
for ((i=1979;i&lt;2014;i++))
{
  wget xxxxx.$i.xxxx
}</pre>
批量解压文件，依然用循环解决
<pre>for tar in *.tar.gz; do tar -xvf $tar; done</pre>