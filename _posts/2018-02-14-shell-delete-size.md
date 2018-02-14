---
layout: post
title:  "Shell删除一定大小文件"
categories: javascript
tags:  javascript html jekyll
author: LZN
---

* content
{:toc}

拖了几次Yahoo的美股daily数据，发现有很多Symbol对应的标的没有数据，对应的文件大小为3Byte。打算做一下清理，查了下删除语句：

```bash
find . -size -4 -exec rm {} \;
```
减号代表小于，不带单位默认为byte。exec是find的参数，具体描述

>-exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' { } \;，注意{   }和\；之间的空格。

至于为啥后面要有个大括号 空格 反斜线 然后再分号？如此冗余设计实在让人不爽。查了一下[这个帖子](https://www.crifan.com/linux_shell_empty_curly_bracket_meaning/)刨根问底了一番。具体来说，大括号代表占位符，表示对find出的列表元素，每次展开遍历其中一个，反斜线代表参数范围结束符，分号后面是其他参数了。

**Updated 2018-02-14**
