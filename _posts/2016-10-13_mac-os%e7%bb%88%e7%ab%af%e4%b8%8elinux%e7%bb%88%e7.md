---
layout: post
title:  "Mac OS终端与Linux终端的使用区别" 
categories: Linux
tags: Linux
author: LZN
---

* content
{:toc}

John给了组里Mac Mini的账号，后面确实要开始用Mac工作了，先把NCL配置好，使用过程中发现了一些和Linux终端不同的地方，配置过程记录在这里：

1.登录终端后默认载入环境变量的位置不同：Mac为.bash_profile，Linux为.bashrc

2.配置终端显示颜色：

alias ls='ls -G'

http://www.2cto.com/os/201205/133944.html

3.配置vim

git clone https://github.com/Novarizark/config_files

4. git clone project

5. 按NCL官网 http://ncl.ucar.edu/Download/macosx.shtml 步骤安装NCL

5.1  注意登录时看到remote server禁止x11访问，

WARNING! The remote SSH server rejected X11 forwarding request

调整xhost发现似乎有错误，应该是有东西没装，先不管。

5.2 安装XQuartz，

Mac下用curl命令下载，格式

<strong>curl -o 文件名 ‘url’</strong>

<strong>curl -O 'url'</strong>

https://cnbin.github.io/blog/2015/06/14/mac-os-zhong-duan-xia-shi-yong-curl-ming-ling-xia-zai-wen-jian/<span id="transmark" style="display: none; width: 0px; height: 0px;"></span>

gcc与gfortran出现错误用brew doctor解决。

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;