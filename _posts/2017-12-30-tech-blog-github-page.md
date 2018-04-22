---
layout: post
title:  "github技术博客搭建"
categories: internet
tags:  github blog jekyll
author: LZN
---

* content
{:toc}

还是要搬家啦～

经历了东校实验室RAID1阵列双盘全坏，我的wordpress站点从2014到前几个月数百篇文章香消玉殒，遑论全校关端口更是让在外访问变得不可能。几个重要的系统搭建流程，目前看来只能靠并不靠谱的直觉和印象了。痛定思痛，为下一处站点做好相对周全的考虑，避免再次出现这类问题。

需求端：
1. 类wordpress，框架成熟，索引方便、样式美观，不需要个人太多调整

2. 足够灵活，有单独页面，比如需要有scp/ftp push实时更新、daily refresh的预报图，以及支持脚本控制

3. 安全，两个方面的，一是数据安全……我就没见过RAID一次坏俩的情况！！！二是防范政策风险，这也是为啥放弃在EC2上开443搭wordpress的原因，目前……22口都已经不稳定了，诶

考虑供给端：
1. EC2+wordpress，足够灵活，10G也够用，但是政策风险太大，目前22访问都不稳定了，放弃

2. 简书，不灵活，放弃

3. csdn，已经被边缘化了，放弃

4. github，嘿嘿，就是你了

思想准备结束，开始搭建
follow[这个](http://www.pchou.info/ssgithubPage/2013-01-03-build-github-blog-page-01.htm)来
```bash
$ git checkout --orphan gh-pages
```
语句出错，果然又是git版本问题……坑爹centos

突然发现很多资料都是13-14年的，这段时间应该官方更新了不少，索性还是查官方库吧。

https://pages.github.com/

相当有效。

然后costumize

https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/

模板找到了几个，Jekll安装似乎有点麻烦。

1. 安装ruby，rubygems，安装gems过程中出错，运行中有这么一个提示

> YAML safe loading is not available. Please upgrade psych to a version that supports safe loading (>= 2.0).

> There are no versions of psych (>= 0) compatible with your Ruby & RubyGems. psych requires Ruby version >= 2.2.2. The current ruby version is 1.8.


真是操蛋的centos，不折腾了还是装在ubuntu下好了。

ubuntu下一条apt-get install ruby直接搞定。

安装jekyll的问题是找不到头文件，apt-get install ruby-dev，注意ubuntu下是dev后缀对应头文件。

can't find header files for ruby at /usr/lib/ruby/include/ruby.h

之后
```bash
$jekyll new myblog
```
发现第一次执行非常慢，不过问题不大

然后就是漫长的端口问题。最初以为4000口没有向外开放，折腾了一晚上ufw iptables这些防火墙设置都无效。最后看应用doc，发现应该是在jekyll里设置相应的内容，默认是localhost 127.0.0.1

_config.yml文件下修改host为内网（公网）IP即可。

找到一些不错的介绍防火墙的内容

https://www.rosehosting.com/blog/how-to-set-up-a-firewall-with-iptables-on-ubuntu-and-centos/

搞定内网调试，开始看官方文档调戏github

https://help.github.com/articles/about-jekyll-themes-on-github/

花了一下午时间找了个好模板

https://github.com/Gaohaoyang/gaohaoyang.github.io

直接开服务，出错

> Could not locate Gemfile or .bundle/ directory

不管三七二十一，把示例里面的文件丢过来

之后新的错误

> Deprecation: The 'gems' configuration option has been renamed to 'plugins'. Please update your config file accordingly.

>  Dependency Error: Yikes! It looks like you don't have jekyll-paginate or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- jekyll-paginate' If you run into trouble, you can find helpful resources at https://jekyllrb.com/help/!`

按要求安装之后也不成功。google发现如下stackoverflow帖子

https://stackoverflow.com/questions/35401566/dont-have-jekyll-paginate-or-one-of-its-dependencies-installed

居然有github-pages这种东西……

装完之后，拿掉gemfile即可。

摸索修改之后，发现这个评论解决方案

https://imsun.net/posts/gitment-introduction/

问题是评论页面在我这里会混淆，所以单独设计了一个page给评论，就当留言板吧。

参考

http://www.cnfeat.com/blog/2014/05/11/how-to-build-a-blog/

http://www.pchou.info/ssgithubPage/2013-01-03-build-github-blog-page-01.html（重要）
