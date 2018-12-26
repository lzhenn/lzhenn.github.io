---
layout: post
title:  "CESM RESTFORMAT: NUMBER OF RECORDS ON RESTART FILE NOT SUPPORTED"
categories: CESM
tags: CESM
author: LZN
---

* content
{:toc}

FS in OUC is trying to setup CESM fully coupled Pre-industrial (B1850 compset) cases while faced with some problem.

In the run log, we found:

>ERROR: restformat: number of records on restart file not supported

By searching, [the error seems to come from the ice restart file](https://bb.cgd.ucar.edu/port-validation-runtime-failure-error-restformat-number-records-restart-file-not-supported).

We then checked the default restart file, which can be located in `ice_in`, in `${CESM_INPUT}/ice/cice/iced.0001-01-01.gx1v6_20080212`. The file is zero in size. Thus, it must be created by the model, and the model cannot read anything from it. We re-download the corresponding file and the problem solved.

**Updated 2018-12-26**

