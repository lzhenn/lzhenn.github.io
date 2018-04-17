---
layout: post
title:  "【CESM】couple the SP-CAM with POP" 
categories: CESM
tags: CESM
author: LZN
---

* content
{:toc}

试图将SP-CAM和POP耦合起来，依然采用修改env_build atm physics的方式进行，build到链接一步出错，居然是CRM下有module名和POP下重名。（moudule grid）

找到相应module改名，sed查找所有use module的地方改名，修改module定义的源文件名，build，done！