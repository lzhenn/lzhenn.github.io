---
layout: post
title:  "【已解决】NCL "input in flex scanner failed"错误" 
categories: NCL
tags: NCL
author: LZN
---

* content
{:toc}

最近使用ncl总是在最后成图的时候出现input in flex scanner failed这种错误。可以肯定是GUI的问题，<a href="http://www-01.ibm.com/support/docview.wss?uid=swg21254823">查了下资料感觉也无从下手</a>，错误触发原因看起来比高级图形接口更加底层，动弹不得。

这个错误最初是由于把字号改大而出现的，于是我将字号改小，果然没问题……不太懂什么原因