---
layout: post
title:  "我的技术博客有救了！"
categories: hardware linux mysql
tags:  server blog jekyll
author: LZN
---

* content
{:toc}
周三助教回到东校，决定去处理一下实验室服务器，看下我的wordpress博客内容到底还有没有救。因为[上次](https://novarizark.github.io/2017/12/30/raid-rebuild/)做了1号盘位的rebuild，这次测试将0号盘位degraded的旧硬盘换下。
可是将0号盘位换下后，1号盘位显示为non-raid磁盘，而0号新盘直接不认，what the fuck。怀疑是上次rebuild没有完成，所以将旧硬盘再次换到0号位置让raid卡自己玩去。
换上旧硬盘后可以正常识别到raid信息并进入系统。测试mysql数据库居然发现wp_posts数据都存在，太幸运了，我的技术博客有救了！果断导出。

``` shell
mysqldump -h localhost -u root -p --database wordpress | gzip > backupfile.sql.gz
gunzip -c backupfile.sql.gz > bck.sql 
```

之后在mysql下导入
``` sql
source ~/bck.sql;
```

查看中文时注意utf8编码
```sql
set names utf8;
```

后面考虑写个python脚本将过去的日志转成markdown放到jekyll博客下。

**Updated 2018-03-28**
