---
layout: post
title:  "Using Highlight Text and Show Line Number in grep command"
categories: Linux
tags: Linux
author: LZN
---

* content
{:toc}

The following environmental variable controll the grep highlight color.

``` bash
export GREP_OPTIONS='--color=auto' GREP_COLOR='31'
```

Argument `-n` will show line number in grep results. Thus alias for the command is useful.
``` bash
alias grep='grep -n'
```
Write them into your `.bashrc`, source and then enjoy it!

**Updated 2019-07-19**

