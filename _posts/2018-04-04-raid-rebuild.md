---
layout: post
title:  "东校实验室服务器阵列rebuild"
categories: hardware
tags:  raid server
author: LZN
---

* content
{:toc}

东校实验室服务器坏掉了一块RAID 1的磁盘，购置新硬盘后测试rebuild发现几个配置页面都没有相关选项。

原RAID没出问题的磁盘被降级为foreign状态，

后查到[官方文档](https://www.dell.com/support/article/cn/zh/cndhs1/sln129828/%E8%A7%A3%E5%86%B3poweredge-raid%E6%8E%A7%E5%88%B6%E5%99%A8%E9%94%99%E8%AF%AF-perc%E6%95%85%E9%9A%9C-?lang=zh)

>Foreign configuration(s) found on adapter. Press any key to continue, or ’C’ to load the configuration utility or ’F’ to import foreign configuration(s) and continue.

按F按键后导入foreign配置，开始进入系统。

进入系统后发现0号盘位闪橙色等，也处于降级状态，妈蛋，这下有的玩了。于是联系L老师再次采购硬盘。
**Updated 2017-12-30**

3月硬盘到货，测试直接将0盘位换成新硬盘，发现无法自动rebuild，无法识别1盘位的系统盘。

重新装回旧有硬盘后能够进入系统，但是只放置1盘位新硬盘，启动后出现无法找到superblock的错误。

怀疑能进入系统的好机会不多，迅速备份了技术博客后，关掉所有的crontab减少读写，希冀RAID卡能够将所有的数据rebuild到1盘位。等下周来看。

**Updated 2018-03-28**

所以希冀是自欺欺人的。满心以为自动rebuild后，可以更换下0盘位，发现还是老样子。

想到新招数偷天换日，将2号盘位的non-RAID disk取下，更换上新硬盘后，把新硬盘做全局热备。[参考资料](https://wenku.baidu.com/view/993960dfbb4cf7ec4afed023.html)

没想到改全局热备后并没有rebuild，而且再次出现找不到superblock无法进入系统的情况。没招了，只有试图解决这个问题。测试[这个解决方案](https://linuxexpresso.wordpress.com/2010/03/31/repair-a-broken-ext4-superblock-in-ubuntu/)

发现牛逼的是所有的备份superblock都挂了。这是没救了？

尝试检查了一下fstab，发现奇怪的地方，fstab中将sda1挂载到/用户/data下，由于data存储较大，怀疑是2号位硬盘找不到，然后把系统盘sdb误认为是sda才出现superblock不匹配的地方。（上次更换0盘位也出现相同错误，有些矛盾）

尝试给回2盘位，可以进入系统；随后尝试删除fstab中对应语句，拔出2盘位，也可以进入系统，有戏！

接下来把2盘位更换为新硬盘，由于之前做了热备，现在显示为foreign状态，import foreign configure后，可以进入系统。进入系统后没有看到2盘位在闪烁，说明没有自动rebuild。

关机，将处于2盘位的新硬盘拿下并替换0盘位就硬盘，开机发现提示进入配置页面，进入后发现0盘位开始rebuild，Yeah！成功！

下午助教，去课室发现竟然没人，问了一下才知道换课了，磨叽了一会儿回去差不多两小时，发现rebuild居然卡在37%，奇怪。不管了，今天没时间耗着了，必须搞完。于是重启，突然想到为何不尝试一下之前的1号盘是否能读出。如果1号盘可用的话，那么直接rebuild到更新的时间点岂不是更好。

于是将0盘位换成之前的1号盘，果然可以！慎重起见，迅速备份技术博客，17年2月之后一直到8月底最后一篇博客，一点都不少，太好了！之后设置rebuild到这个盘就去吃饭了，当晚SH说0盘位掉线了，好吧，好在技术博客救回来了。下次去恢复到2月份的系统。

**Updated 2018-04-04**

