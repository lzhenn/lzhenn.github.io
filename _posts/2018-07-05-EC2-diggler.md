---
layout: post
title:  "EC2迁移：从Razortail到Diggler"
categories:  Linux Hardware Notebook
tags: EC2 Notebook
author: LZN
---

* content
{:toc}

Razortail的免费期马上要过了，用菇菇的信息注册了新的AWS账户，开了新的节点，叫做Diggler吧.主机位置也从韩国首尔搬到了新加坡，希望坡县的丢包率能低一点，可悲。

![](http://ww1.sinaimg.cn/large/73ebdc71gy1fsyws2e8q9j20mb05bt94.jpg)

![](http://ww1.sinaimg.cn/large/73ebdc71gy1fsywu80c5tj20g5054mxe.jpg)

记录下配置过程。参考之前[Razortail的记录](https://novarizark.github.io/2017/07/03/aws-ec2-e6-90-ad-e5-bb-bavps/)。

#### 预安装

git安装
```bash
$sudo yum install git
```

配置ssh
```bash
$ssh-keygen
```

安装SS依赖(参考最[新版本依赖](https://github.com/shadowsocks/shadowsocks-libev))
```bash
sudo yum install -y gcc gettext-devel unzip autoconf automake make zlib-devel libtool xmlto asciidoc udns-devel libev-devel
sudo yum install -y pcre pcre-devel perl perl-devel cpio expat-devel openssl-devel mbedtls-devel
sudo yum install gcc gettext autoconf libtool automake make pcre-devel asciidoc xmlto c-ares-devel libev-devel libsodium-devel mbedtls-devel -y
```

安装libsodium到系统默认搜索路径
```bash
wget https://download.libsodium.org/libsodium/releases/LATEST.tar.gz
./configure
make && make check
sudo make install
```
Follow the instructions in [SS Severlibv Version](https://github.com/shadowsocks/shadowsocks-libev).

注意用sudo ldconfig来更新lib配置。

安装ss后的配置：
```json
{
"server": "0.0.0.0",
"server_port": xxxxx,
"local_port": 1080,
"password": "yourpwd",
"timeout": 600,
"method": "aes-256-cfb",
"fast_open": false,
}
```
注意去掉旧版本中的local_address字段。


**Updated 2018-07-05**

