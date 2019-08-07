---
layout: post
title:  "【未解决】python安装pandas等数据处理类库" 
categories: technology
tags: python pandas linux
author: LZN
---

* content
{:toc}

首先按照<a href="http://youerning.blog.51cto.com/10513771/1711008">这个网站</a>yum这些东西，然后pip安装，

出现错误：Command "python setup.py egg_info" failed with error code 1 in /tmp/pip-build-Cblre2/pandas/

之后的剧情就是个坑了，查了个资料，说把python用yum给remove了，然后编译安装新版本的就行，我居然TMD信以为真，remove过程中突然出现一个提示说cannot remove yum，纳尼……啥时候要remove yum。

不管了，编译安装python2.7，发现yum还是不能安装pandas，这个时候我做了个最错误的决定，将系统原有的/usr/下所有python的lib include全删了，用2.7去替换……天真如我啊啊啊 = =

之后yum就不正常了，出现：

No module named yum这种错误

查了下，正确安装新版本python的姿势：

http://ruiaylin.github.io/2014/12/12/python%20update/#%E4%BF%AE%E5%A4%8D_yum_%E5%B7%A5%E5%85%B7

原来系统安装的python 与许多组件有依赖关系，随意搞掉是不可以的，吐血。于是找办法去解决，下载了python，yum等几个关联包，重新rpm安装，再运行yum出现新错误：No module named rpm，纳尼……

想到之前自己删除了所有原本的python相关库，估计是这个问题。

折腾半天，去workstation上yum update了，然后scp所有/usr下与python相关的文件夹过来……

yum可以用了，update过程中出现许多不匹配的错误，这应该是workstation上rpm管理的软件信息与team server不同造成……

yum update后，似乎没什么问题了。

附带官方所有软件包地址：http://mirror.centos.org/centos/6/os/x86_64/Packages/

重新编译安装python2.7，按照<a href="http://ruiaylin.github.io/2014/12/12/python%20update/#%E4%BF%AE%E5%A4%8D_yum_%E5%B7%A5%E5%85%B7">这个帖子</a>，需要安装setuptools和PIP，之后用PIP安装pandas等库，成功！
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter"></td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="bash plain">pip </code><code class="bash functions">install</code> <code class="bash plain">matplotlib -i http:</code><code class="bash plain">//pypi</code><code class="bash plain">.douban.com</code><code class="bash plain">/simple</code> <code class="bash plain">--trusted-host pypi.douban.com</code></div>
<div class="line number2 index1 alt1"><code class="bash plain">pip </code><code class="bash functions">install</code> <code class="bash plain">numpy -i http:</code><code class="bash plain">//pypi</code><code class="bash plain">.douban.com</code><code class="bash plain">/simple</code> <code class="bash plain">--trusted-host pypi.douban.com</code></div>
<div class="line number3 index2 alt2"><code class="bash plain">pip </code><code class="bash functions">install</code> <code class="bash plain">pandas -i http:</code><code class="bash plain">//pypi</code><code class="bash plain">.douban.com</code><code class="bash plain">/simple</code> <code class="bash plain">--trusted-host pypi.douban.com</code></div>
<div class="line number4 index3 alt1"><code class="bash plain">pip </code><code class="bash functions">install</code> <code class="bash plain">seaborn scipy</code></div>
</div></td>
</tr>
</tbody>
</table>

**请直接安装anaconda，并采用python3版本 2019/08/07**
