---
layout: post
title:  "贝叶斯模型, MC, MC, 与MCMC"
categories: technology
tags: machine_learning cuda deep_learning mcmc bayes
author: LZN
---

* content
{:toc}

帮老板审稿，这稿子用了个非常牛逼的Bayesian Model+MCMC做降水的突变检验，很明显是个ML的方法，这么好的机会，肯定要抓着搞明白。

整理一些资料如下：

1. **[贝叶斯方法介绍](https://blog.csdn.net/pongba/article/details/2958094)**: 这是篇非常好的科普，从贝叶斯老爷的逆概问题讨论形式化的贝叶斯概型。
2. **[MC, MC, MCMC](https://site.douban.com/182577/widget/notes/10567181/note/292072927/)**: 蒙特卡洛、马尔可夫链，到马尔可夫链蒙特卡洛方法。
3. **[似然函数](https://zh.wikipedia.org/wiki/%E4%BC%BC%E7%84%B6%E5%87%BD%E6%95%B0)**:终于明白了似然函数是什么意思，表征观测结果对应预期分布的似然性。定性的说，一个硬币投了一百次有90次正面，那么这个硬币正常的似然性很低很低。
4. **[最大似然估计]()**:对同一个似然函数，如果存在一个参数值，使得它的函数值达到最大的话，那么这个值就是最为“合理”的参数值。
5. **[MCMC方法小记](http://sunyi514.github.io/2016/03/05/mcmc%E6%96%B9%E6%B3%95%E5%B0%8F%E8%AE%B0/)**：好例子!
6. **[理解MCMC](http://xccds1977.blogspot.kr/2014/07/mcmc.html)**:好例子！


**Updated 2018-04-14**

