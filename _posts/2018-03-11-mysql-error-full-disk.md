---
layout: post
title:  "mysql创建数据库出错、根目录额满、与数据库存放位置迁移"
categories: technology
tags:  server database centos mysql
author: LZN
---

* content
{:toc}

今天打算创建Mercurius的数据库，神奇的是，输入create database后报错

>ERROR 1006 (HY000): Can't create database 'mercurius' (errno: 28)

换了root账户也不行，查到的信息都是说mysql的数据库权限问题，检查后的确木有问题呀。
注意到google出的关键词errno号不同，很多13号，而我是28号，深度搜索了一番，找到了答案：
>This error means that your mysql server does not have enough free space. You need to check the file system size and please remove unwanted software(s) or installers or files. 

我去，坑我？磁盘满额？df查看一下，果然/根目录满额。奇怪～

利用find找大文件：
``` shell
find / -size +800M
```

发现除了最早丢过来的安装包，就是gdm的log最大，cd过去一看，可了不得，13G的log，应该是图形界面出错后一直在写error，写到了3月5日，果断删掉～并且把安装包移走。目前解决，后面看是否还继续写log。

慎重起见，将mysql的数据库路径进行迁移，然后发现进了个大坑。无论怎样按照[网上的步骤](http://blog.csdn.net/liuchunming033/article/details/51851667)调整，都会遇到mysqld服务无法打开的结果。甚至rsync数据库然后做链接都不行。
折腾了一下午，突然想到，不就是把mercurius数据库拿出来么，不动mysql本身的账户库还不行。好吧，最后给mercurius做了链接搞定，要注意所在的上层目录必须有root用户和用户组的读写权限。


**Updated 2018-03-11**
