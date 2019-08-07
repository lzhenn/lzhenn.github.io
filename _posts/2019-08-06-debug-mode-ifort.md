---
layout: post
title:  "Using Debug Mode in compiler to locate Segfault"
categories: technology
tags: linux fortran hpc debug compiler
author: LZN
---

* content
{:toc}

A segmentation fault in GRAPES-3DVAR has been tortured me for several weeks. Tracing the error layers by layers, I actually getting familiar with the code flow.

Compared with the `print`, `write`, or other breakpoint debug tricks, the final hit was done by the debug mode of the compiler. The used debug flags are as follows:

``` bash
FCDEBUG =  -O0 -check bounds -g -traceback
```

* `-O0`   The optimization option level with O0 will turn off every optimizations.
* `-check bounds`   This is a quite important flag, which will check if the query beyond an array's boundary. If true, using this flag will throw an segfault with exactly which array crashes. Our problem solved with the assistance of `-check bounds` option (**This option will severally influence the efficiency**).
* `-g -traceback`   This option will throw a stack traceback of the error, helping to locate which line crashes the program.

[**Neat Reference**](https://software.intel.com/en-us/articles/determining-root-cause-of-sigsegv-or-sigbus-errors)

**Updated 2019-08-06**

