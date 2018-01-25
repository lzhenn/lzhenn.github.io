---
layout: post
title:  "利用pandas处理csv文件注意"
categories: python
tags:  pandas
author: LZN
---

* content
{:toc}

写交易系统时为了让credentials在代码里不可见，用pandas读取csv获取，使用中发现一坑，把index_col设置后，竟然无法用`pd['$IND_NAME']`去引用对应idx的行，估计又是各种坑爹对象类型不匹配。
解决方法也很简单，用pandas的loc方法：

``` python
print(pd_cre.loc['quandl','cred'])
```


**Updated 2018-01-25**
