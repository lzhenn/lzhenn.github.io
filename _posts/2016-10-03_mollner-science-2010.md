---
layout: post
title:  "Mollner-Science-2010" 
categories: PaperReading 2016
tags: PaperReading 2016
author: LZN
---

* content
{:toc}

<h4><span style="color: #339966;"><strong>2016/10/02</strong></span></h4>
<pre><strong>题目：Rate of Gas Phase Association of Hydroxyl Radical and Nitrogen Dioxide</strong>
<strong>原文：<a href="http://202.116.70.21/L_Zealot/workspace/paperhub/warehouse/Mollner-Science-2010-330_6004_646-649.pdf">Mollner-Science-2010-330_6004_646-649.pdf</a></strong></pre>
<strong>内容概述：</strong>氢氧自由基（Hydroxyl Radical）和NO2（Nitrogen Dioxide）反应生成气态硝酸这一过程是大气化学中最具影响的反应。但是目前关于这一反应在对流层内条件下速率的测量依然研究不足，主要原因是 1. 实验室测量760torr（毫米汞柱）气压下反应速率的困难 2. 该反应存在的二次反应通道，产物：过氧亚硝酸（peroxynitrous）量。更加加剧了测量的不确定性。研究者结合了两种激光光谱学（Spectroscopy）技术来测量两个反应通道的总速率以及在25摄氏度，760毫米汞柱下的反应分配比例。结果相比于（之前的）反应常数，当然是更准确啦，所以我们将测量的东西拿到model里去试了一下对洛杉矶地区Ozone的预报模拟，结果我猜肯定是更好啦。

<strong>笔记：</strong>文章思路很简单，就是把之前没测准的东西想个办法测准了，然后用model测试了下，挺好。所以他们主要想装逼的是：用了牛逼方法搞定了之前大家搞不定的技术难题。反正就是测量反应速率里的系数k，说了一堆看似高端的原理机制，也就是这么一回事。Fig S1里他们设计的高端实验机器系统那张图可以说下，反正不懂，可以留给老师解释下那些仪器是搞什么鬼的……大概意思是用个泵抽气，然后对着气放了两道（浅蓝和深蓝）激光，之后分析这两道激光散射光谱确定物质的量，进一步确定反应速率常数。

图1示意了这两个channel反应，图1上面的文字介绍了分支反应的特殊特点：在较低的压力下，过氧亚硝酸的生成是个小分支，但是随着气压增大，分支率增大。随后一段引出目前矛盾：实验室测定这一反应速率系数的时候，只是测定NO2存在下OH的减小，因此只是测定的分支1+分支2反应的总系数。（k1=k1a+k1b）

之后的段落阐述了困难的两个方面。

&nbsp;

图2对比了作者的牛逼方法测量的结果和之前几个组织（有个JPL，喷气动力实验室，加州理工的实验室，曾经很牛逼，钱学森在的时候）的结果，这张图很容易看啦。反正就是他们测得k1小，误差小；阿尔法系数他们独一无二的给出来了，k1a测量情况有点像JPL 2000.

之后他们用自己测量的系数去模拟南加州的正午ozone污染，A是JPL2006推荐的，B是他们测得，C是被吐槽的IUPAC推荐的高k1a模拟结果，（注意他们没有观测图呢）。总之他们强调k1a小10%，ozone浓度提高10%（这就说明他们准么？难道模拟O3从来就是偏低的？）。我觉得这篇文章最大不足就是没有观测对比呀，宝宝要提出来！

&nbsp;

背景知识：化学反应速率

发现高中的东西全忘了 = =

维基百科复习下：https://zh.wikipedia.org/wiki/%E9%80%9F%E7%8E%87%E6%96%B9%E7%A8%8B

<a href="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/139718010280082228.jpg"><img class="alignnone wp-image-866 size-full" src="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/139718010280082228-e1476131794502.jpg" alt="139718010280082228" width="1280" height="948" /><span id="transmark" style="display: none; width: 0px; height: 0px;"></span></a>

&nbsp;