---
layout: post
title:  "【solved, R】problems during installing devtools" 
categories: Windows Software R
tags: Windows Software R
author: LZN
---

* content
{:toc}

Finished installing R and Rstudio, we come to the installation of Rtools. (Please check the <a href="https://class.coursera.org/datascitoolbox-031/lecture/55">tutorial vedio</a> in coursera) It seems all went fine before installing devtools. However, typing
<pre>&gt;install.packages("devtools")</pre>
really took a long time to download a series of packages. When finished, a pop-up info indicated an error: <strong>"https://class.coursera.org/datascitoolbox-031/lecture/55"</strong>

google it, and we found this would work:
<pre>Sys.setlocale('LC_ALL','C')</pre>

Reasons are complex, here post the reference:
http://cos.name/cn/topic/157794/