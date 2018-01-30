---
layout: post
title:  "追涨杀跌还是买跌卖涨？几个简单策略的实现与横评"
categories: economy investment 
tags:   thinking investment career
author: LZN
---

* content
{:toc}
Left or right? This is a problem.


刷华尔街见闻的时候发现一个简单的[右侧交易策略](https://wallstreetcn.com/articles/3059211)

>当目前的价格 ＞ 过去12个月的平均价格，那么保持投资（如果没有投资，那么就买入）；
当目前的价格 ＜ 过去12个月的平均价格，那么就全部卖出，持有现金（或债券）。

很有意思，回测也很不错。感觉原则就是，趋势来了我贪心，趋势走了我就离场，而且坚决不回来。
不过对于我这种左侧交易者来说，在上升时期宁可hold也不愿意加仓。这个策略很简单，应可以作为一个出发点，后面按自己的理解来进行一些修正。尤其对于我这种喜欢左侧交易和网格策略的～

**Updated 2018-01-23**
