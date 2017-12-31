---
layout: post
title:  "东校实验室服务器阵列rebuild"
categories: hardware
tags:  raid server
author: LZN
---

* content
{:toc}

东校实验室服务器坏掉了一块RAID I的磁盘，购置新硬盘后测试rebuild发现几个配置页面都没有相关选项。

原RAID没出问题的磁盘被降级为foreign状态，

后查到官方文档

https://www.dell.com/support/article/cn/zh/cndhs1/sln129828/%E8%A7%A3%E5%86%B3poweredge-raid%E6%8E%A7%E5%88%B6%E5%99%A8%E9%94%99%E8%AF%AF-perc%E6%95%85%E9%9A%9C-?lang=zh

Foreign configuration(s) found on adapter. Press any key to continue, or ’C’ to load the configuration utility or ’F’ to import foreign configuration(s) and continue.

按F按键后导入foreign配置，开始进入系统。
