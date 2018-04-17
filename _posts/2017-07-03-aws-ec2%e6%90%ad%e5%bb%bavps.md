---
layout: post
title:  "AWS EC2搭建VPS" 
categories: Blog&amp;CMS
tags: Blog&amp;CMS
author: LZN
---

* content
{:toc}

起名为Razortail，剃刀之尾，继续纪念我的D2青春。

私钥需要好好保存。

按这里的来：http://celerysoft.github.io/2016-01-15.html

configure ss出问题，asciidoc找不到，挂--disable-documentation参数。

之后又出现

configure: error: Couldn't find libudns. Try installing libudns-dev or udns-devel

错误，看起来还是缺库，尝试yum安装，发现找不到这个lib。尝试添加remi的yum源：

https://rpms.remirepo.net/wizard/

重新尝试了centos7情景下先安装的yum库

https://www.ifshow.com/centos-7-installation-and-configuration-shadowsocks/

成功configure！

安装后，运行ss-server出现libsodium.so.18 库找不到，从lib下ln到lib64解决，运行出现问题

2017-07-03 14:34:01 ERROR: bind: Cannot assign requested address

经查，居然要把config文件的ip设置为0.0.0.0，无语。

之后可用，启动服务即可。
<pre>systemctl start ss.service
systemctl enable ss.service</pre>
停止服务：
<pre>systemctl stop ss.service</pre>
取消shadowsocks开机自启
<pre>systemctl disable ss.service</pre>
查看日志文件
<pre>less /var/log/shadowsocks.log</pre>