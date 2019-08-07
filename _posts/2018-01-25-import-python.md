---
layout: post
title:  "python import其他文件"
categories: technology
tags: python
author: LZN
---

* content
{:toc}

交易系统下希望将策略(strategy)和评估(evaluator)分离，这样就需要评估系统调用相应的策略，其实可以用简单的import解决，只是注意python仅仅把当前路径加入搜索目录，如果策略不在当前路径的话，则采用sys模块加入策略路径即可：

``` python
import sys
sys.path.append(path_to_strategy)
from buy_and_hold import buy_and_hold as strategy

strategy()
```
就是这么简单。

**Updated 2018-01-25**
