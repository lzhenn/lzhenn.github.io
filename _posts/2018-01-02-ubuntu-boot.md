---
layout: post
title:  "Ubuntu开机启动"
categories: linux
tags:  ubuntu server
author: LZN
---

* content
{:toc}

想要让本地的个人博客服务开机后即启动，测试了下，路径敏感。
修改rc.local
```bash
$sudo vi rc.local
```
其中加入
```bash
cd $YOUR_REPO
sudo jekyll s
```
