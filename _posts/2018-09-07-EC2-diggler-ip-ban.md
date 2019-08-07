---
layout: post
title:  "EC2迁移：从Razortail到Diggler"
categories: technology 
tags: ec2 aws diggler razortail
author: LZN
---

* content
{:toc}

Diggler用了一段时间后发现丢包率严重，终于有一天彻底挂掉了。ssh通。查了下应该是被ban掉了端口，发现aws设置了非常方便的动态ip绑定，胆战心惊换了ip后正常。所以W的策略应该是行为检测，pattern connector确认后开始数据包投毒，随后ban端口ban ip。

惹不起惹不起。无非是看些技术文档教学视频paper什么的，诶。换了ip/crypto算法。

**Updated 2018-09-07**

