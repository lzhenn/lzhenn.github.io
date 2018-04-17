---
layout: post
title:  "porting DART on CORI" 
categories: Linux CESM HPC
tags: Linux CESM HPC
author: LZN
---

* content
{:toc}

When porting DART on CORI, the compiling process of CESM got error:

cannot find -lmemkind
<pre>I checked my error log and found that the compiler cannot find some libraries. After loading memkind, the CESM component can be compiled successfully. It's strange because I cannot find command line like "<strong>module load memkind</strong>" in your related config files. I am working forward and will inform you later.</pre>
<div>After building, when trying to run the model, got segment fault.</div>
&nbsp;