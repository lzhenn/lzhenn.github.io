---
layout: post
title:  "Shell采用wait和后台执行实现多进程"
categories: linux 
tags:  server shell
author: LZN
---

* content
{:toc}

[山东半岛预报系统](https://novarizark.github.io/2017/12/31/WRF-shandong-setup/)中后处理部分的NCL串行效率很低，大概要二十分钟到半个小时才能完成绘图。既然任务之间都是独立的，很自然的想法就是能否在shell的环境下实现进程级别的并行化。
差了下其实很简单，只需要在语句后面加入 & 符号放到后台执行即可实现异步，但是后台执行无法捕捉结束位置，wait语句可以解决这个问题，其作用就是等待该语句之前的所有后台任务结束之后，再执行此语句后的任务。例子如下：
```bash
ncl -nQ  180205-plot-precip.ncl &
ncl -nQ  180207-plot-T2m.ncl &
ncl -nQ  180207-plot-RH2m.ncl &
ncl -nQ  180207-plot-UV10m.ncl &
wait
echo("Hello world!")
```
前面四个NCL语句会并行执行（&符号将该命令放入后台执行后立刻执行下一个语句），之后碰到wait，会等待前面四个后台任务中最慢的那个结束，再输出Hello world!

原始脚本处理后，大概只需要三四分钟（不算坑爹慢的git push过程）即可完成所有的绘图操作。惊不惊喜？

**Updated 2018-02-17**
