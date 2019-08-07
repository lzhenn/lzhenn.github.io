---
layout: post
title:  "Maintaining: skipping incompatible /usr/lib64/libncurses.so when searching for -lncurses"
categories: technology 
tags: linux
author: LZN
---

* content
{:toc}

Now I start my internship! Totally new vision into regional modeling and data assimilation. When deal with the radar data, I need to compile a software [SOLO2](https://www.eol.ucar.edu/software/solo-ii).

As mentioned in the github page:
>Soloii can be built and run on a 64-bit Linux or OS X machine, although it will explicitly build a 32-bit binary.  

It is quite a job to install every lib in the ia32 mode. Note that CentOS 6/7 uses [i686 as the suffix to mark the ia32 version](https://stackoverflow.com/questions/7412548/error-gnu-stubs-32-h-no-such-file-or-directory-while-compiling-nachos-source), and both the lib itself and lib-devel need to be installed.

When $make, we still got some warnings like 
`skipping incompatible /usr/lib64/libncurses.so when searching for -lncurses`

[That is not actually a problem unless an error happens.](https://stackoverflow.com/questions/3119714/skipping-incompatible-libraries-at-compile)

**Updated 2019-07-15**

