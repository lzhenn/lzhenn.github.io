---
layout: post
title:  "Mercurius事件监听系统终于Online啦"
categories: economy investment python modeling 
tags: thinking investment career quandl blog event-listening
author: LZN
---

* content 
{:toc}

最近几天集中编码了一番，终于把差不多九个月前立下的flag雏形写好了，Mercurius的Demo version完成，从spider拉取数据，入库，调库回测，标准化输出json数据包，上传github，github page前端调用显示，虽然策略只有简单的up in down out，但框架还是完整啦。后面打算做个Risk Parity的portfolio回测下放上来。

项目并不麻烦，也还没上酷炫的ML算法，但串了一下从python spider/mysql到frontend这一条的工程实现，也算是不错的锻炼吧，希望未来能给我带来一些机遇。God Bless~

上图：

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fv7ztpkl0sj210k0u0b29.jpg){:height="50%" width="50%" align="center"}


未来完整版本的工程实现流程图：

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fv80eil7suj213j0td7ct.jpg)

Sandbox页面策略的实时回测，偷懒还没有把event summary写好：

![](https://ws1.sinaimg.cn/large/73ebdc71ly1fv80g5yuzxj20sq0gp77d.jpg)

以后每天又多了个客观参考啦～距离程序化决策又近了一步。

**Updated 2018-09-13**
