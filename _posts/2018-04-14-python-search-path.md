---
layout: post
title:  "为python增加默认的库搜索路径"
categories: python linux
tags: python_import 
author: LZN
---

* content
{:toc}

明文密码丢到程序里当然是很傻逼的事情（参见斯导新片《头号玩家》），所以访问数据库用了AES加密（[参见](https://novarizark.github.io/2018/03/12/cryptography-python-mysql/)）。

数据库可是个好东西，慢慢很多程序都要开始访问数据库了，那么我们自己的加密模块能否不通过动态方式添加搜索路径，像import其他模块那样引用呢？答案当然是可以的，在bashrc中修改PYTHONPATH环境变量就可以啦。

当然这不是推荐方法，因为具有外部依赖性。推荐方法是在site-packages目录下增加一个扩展名为.pth的文件，在里面写入增加的搜索路径。这里有[很好的介绍](https://blog.csdn.net/liang19890820/article/details/76219560)。

**Updated 2018-04-14**

