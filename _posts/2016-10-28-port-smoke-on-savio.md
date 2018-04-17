---
layout: post
title:  "port smoke on SAVIO" 
categories: Linux AirQualityModeling
tags: Linux AirQualityModeling
author: LZN
---

* content
{:toc}

https://www.cmascenter.org/smoke/documentation/4.0/html/ch12s02.html

1. download

先找到release timeline

https://www.cmascenter.org/download/release_calendar.cfm

找到最新版本，比如我们看到4.0，进入后可以发现下载链接

https://www.cmascenter.org/download/forms/step_1.cfm

https://www.cmascenter.org/help/model_docs/porting_guide.cfm

<a href="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/Snap2.jpg"><img class="alignnone size-full wp-image-906" src="http://222.200.180.66:1234/L_Zealot/blog/wordpress/wp-content/uploads/2016/10/Snap2.jpg" alt="snap2" width="856" height="257" /></a>

选择好后，进入下载页，下载安装脚本（Installation script）、源码包以及测试例子数据三个内容。（其实他们用github托管哦）

之后follow <strong>12.3（非常重要一章）</strong>进行安装

https://www.cmascenter.org/smoke/documentation/4.0/html/ch12s03.html

设置<code class="filename"><code class="envar">SMK_HOME</code></code>环境变量指向安装路径，可以将安装脚本和压缩包放入同一路径下，将这个路径设置为安装路径。

在smoke_install.csh最前面加入
<pre>setenv SMK_HOME `pwd`</pre>
不需要source，直接csh运行即可。如果顺利编译，会显示
<pre>NOTE: AUTO_DELETE script setting is not set.
      Default is N to not delete I/O API intermediate and output files
Creating inventory list files...
Installation completed successfully.
 
Please follow the instructions in Section 4.3 of the SMOKE User's Manual
to run the nctox test case.
https://www.cmascenter.org/smoke/documentation/4.0/html/</pre>
再后follow 4.3去run测试用例

https://www.cmascenter.org/smoke/documentation/4.0/html/ch04s03.html

出现错误
<pre>mrggrid.abmp.nctox.20050710.us12-nc.log:     *** ERROR ABORT in subroutine MRGGRID</pre>
后来发现执行语句4.0ug里居然少一个！<strong class="userinput"><code><code class="filename">smk_rateperhour_nctox.csh</code></code></strong>

<span id="transmark" style="display: none; width: 0px; height: 0px;"></span>更改后正常。