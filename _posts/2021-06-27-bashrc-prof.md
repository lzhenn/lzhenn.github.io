---
layout: post
title:  "echo in bashrc? No! bash_profile please."
categories: technology
tags: linux python requriments.txt
author: LZN
---

* content
{:toc}

I tried to echo some message in the `~/.bashrc` file, and then found scp does not work.
In short, this is basically `scp` command try to parse these chars.

The `scp` command builds ssh connection first between the source and sink host, and ssh will execute `source ~/.bashrc` before full setup shell.

Therefore, put messages in `~/.bash_profile`.

### Reference
* https://chuacw.ath.cx/development/b/chuacw/archive/2019/02/04/how-the-scp-protocol-works.aspx
* https://huster.top/htmls/319.html (Chinese)


Updated 2021-06-27**

