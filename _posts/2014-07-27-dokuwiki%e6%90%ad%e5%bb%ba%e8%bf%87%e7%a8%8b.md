---
layout: post
title:  "【已解决】Dokuwiki搭建过程" 
categories: Blog&amp;CMS
tags: Blog&amp;CMS
author: LZN
---

* content
{:toc}

dokuwiki的搭建还是比较简单的，反正比wordpress轻松多了。

1. doku官方页面下载最新版本的压缩包并解压。

https://www.dokuwiki.org/dokuwiki

2. 按照install guide里面的要求，主要是secuity配置比较麻烦。修改位置在/etc/httpd/httpd.conf，也就是apache的配置文件，加入要求的标签，位置按照要求就可以，不过具体应该没大关系。需要读一读官网Deny Directory Access in Apache模块。这样才可以使用data目录下的权限文件，防止data目录被匿名访问遍历。

security：https://www.dokuwiki.org/security

3. 修改./data等权限到755，允许dokuwiki读写。
<blockquote>
data/ and data/tmp/ directory: All files in and below these directories must be writable by the web process for DokuWiki to work.
lib/plugins/ directory: This directory must be writable by the web process for the plugin-Manager to work
lib/ directory: This directory must be readable by the public for style sheets to display. 755 works fine.</blockquote>
https://www.dokuwiki.org/install:permissions