---
layout: post
title:  "The tee command combination in interactive runtime to redirect stdout/stderr stream"
categories: technology
tags: linux tee shell stderr stdout 
author: LZN
---

* content
{:toc}

In an interactive application runtime, you may both hope the standard output (1) or error output (2) can shown both on the screen, and redirected to a file. 
The traditional way, `./xxx >& xxx.log` does not work as you need to interact with the program.
Here we need the `tee` comannd. Simply type:

``` bash
./xxx 2>&1 | tee xxx.log
```

Will work for you. Here we decompose the command.

* `tee` using standard streams which reads standard input and writes it to both standard output and one or more files, effectively duplicating its input.
* `2>&1`  redirect stderr to stdout (2>&1):
* `|` pipeline, a mechanism for inter-process communication using message passing. A pipeline is a set of processes chained together by their standard streams, so that the output text of each process (stdout) is passed directly as input (stdin) to the next one. 
* `tee xxx.log` In this case, the stdout from `./xxx` will be redirected by the pipeline to tee, as stderr (2) has been already redirected to stdout (1), the tee command will take in both stdout and stderr.

That is how this command works!

**Updated 2020-04-25**

