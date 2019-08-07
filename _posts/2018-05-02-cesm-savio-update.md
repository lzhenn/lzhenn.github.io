---
layout: post
title:  "Savio update: CESM changes"
categories: technology
tags: server cesm
author: LZN
---

* content
{:toc}

John发邮件说Berkeley SAVIO机器上的CESM不能用了，因为Savio升级了整个系统到Sci Linux7，出错信息：

>perl: symbol lookup error: /global/home/groups/co_aiolos/soft/perl5/lib/perl5/x86_64-linux-thread-multi/auto/XML/LibXML/LibXML.so: undefined symbol: Perl_Gthr_key_ptr

很明显是perl XMLlib编译运行库不匹配才会造成这个问题，差了下Sci Linux7 gcc库为485，6好像还是44x。但没有root权限不能直接yum update，按[论坛贴子](https://bb.cgd.ucar.edu/cesm-runtime-error-cant-locate-loadable-object-module-xmllibxml-inc)，到CPAN[下载源代码编译](http://search.cpan.org/dist/XML-LibXML/LibXML.pod)后，重新制定环境变量依然不行，后采用偷天换日的办法，把.so和几个库文件放到源gcc44x版本的编译目录下，居然就可以了。


**Updated 2018-05-02**

