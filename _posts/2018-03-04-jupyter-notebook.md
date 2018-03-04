---
layout: post
title:  "Jupyter notebook学习记录"
categories: python notebook
tags:  jupyter&nbspnotebook
author: LZN
---

* content
{:toc}

Jupyter Notebook极端强大，可以直接执行Markdown，执行之后即成为document html。

感叹号(exclamation point)可以用于嵌入bash command:
``` python
!pip install xxx
```

Notebook built-in command叫做Magics，单百分号：Line Magics，双百分号：Cell Magics。
``` python
%lsmagic
```
常用的magic func
``` python
%%HTML  #其后的text会被render为html，可以放入iframe等拖视频过来。
%matplotlib inlin #将matplotlib绘图放到notebook的输出中。

%%javascript
%%bash

% %timeit   #可以测试function的速度
```

甚至可以酷炫地render pandas dataframe，看图，效果真是酷炫到爆炸
![](https://ws1.sinaimg.cn/large/73ebdc71gy1fp0wdaobj5j20s50zzgx8.jpg)

更牛逼的是，居然可以通过file->download as存储为html pdf markdown等各种形式，简直牛逼到爆炸。
我们测试一下，发现html直接把图片存成了一串散列值，markdown的话会把图片和md文件放在一个zip包里。

notebook的存储本质是个json file。


**Updated 2018-03-04**
