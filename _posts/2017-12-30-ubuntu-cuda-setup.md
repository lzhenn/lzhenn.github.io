---
layout: post
title:  "Ubuntu/K4200机器学习系统搭建"
categories: technology 
tags:  ubuntu machine_learning cuda deep_learning python tensorflow
author: LZN
---

* content
{:toc}

### 记得装desktop版本的ubuntu，否则没有xserver，比较蛋疼
### 安装英伟达显卡驱动，要关掉x server……
默认进入命令行启动

http://blog.topspeedsnail.com/archives/4922

注意16.04用这句：

$sudo systemctl set-default multi-user.target

这是每次开机默认进入命令行模式的方法。单词关闭用

sudo /etc/init.d/lightdm stop

然后遇到了坑爹的linux预装驱动……需要关掉。（谁说ubuntu少折腾来着……）

驱动安装过程这个链接内容比较详细（卸载系统驱动后机器无法完全启动，但是ssh没问题）

http://blog.csdn.net/u012759136/article/details/53355781  

照着来没问题了吧，错了……build driver的时候直接说unable……我去

差了下说我下的版本不对，赶紧去重新找（为啥查到的帖子都是那个340.32版本）

http://www.nvidia.com/content/DriverDownload-March2009/confirmation.php?url=/XFree86/Linux-x86_64/384.98/NVIDIA-Linux-x86_64-384.98.run&lang=us&type=GeForce

这里下载17.11的版本

### 安装cuda toolkit，这次吸取教训，直接英伟达官网下载最新cuda9.1版本。
直接运行安装，居然自带了驱动……去死吧……

后面说我有几个库没装好，记录如下

Missing recommended library: libGLU.so

Missing recommended library: libX11.so

Missing recommended library: libXi.so

Missing recommended library: libXmu.so

搜索下直接apt-get搞定

$ sudo apt-getinstall freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libgl1-mesa-glx libglu1-mesa libglu1-mesa-dev

官方参考

https://devtalk.nvidia.com/default/topic/827410/cuda-setup-and-installation/new-installation-of-cuda-7-toolkit-in-ubuntu-12-04-question-about-missing-recommended-libraries-/

重装一遍cuda测试，一并安装了连同cuda的显卡驱动。没有问题。

http://blog.csdn.net/shiorioxy/article/details/52652831

http://blog.csdn.net/jhszh418762259/article/details/52958287

之后写几个配置

环境变量设置

sudo vim ~/.bashrc

在末尾添加

export CUDA_HOME=/usr/local/cuda-8.0

export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64:$LD_LIBRARY_PATH

export PATH=/usr/local/cuda-8.0/bin:$PATH

保存退出。

然后刷新。

source ~/.bashrc

动态链接库设置

创建文件：

sudo vim /etc/ld.so.conf.d/cuda.conf

写入：/usr/local/cuda/lib64

保存之后使其立即生效：

sudo ldconfig -v

之后是测试sample，网上教程都是进utility编译，表示直接在根目录下编译了，很长时间……但是似乎没有报错退出。

许久之后，安全完成。



### 安装cuDNN (以下是坑)
直接搜索，英伟达官网注册，下载三个相关deb包，然后

$sudo dpkg -i xxxx.deb

应该就把库给安装好了。

安装anaconda，没啥好说的。

### 安装cuda-based TensorFlow
https://tensorflow.google.cn/install/install_linux

follow来，突然发现我的cuda版本和cuDNN版本都高了……先试试吧

pip install tensorflow-gpu

安全完成

但是使用的时候出现库缺失。然后conda安装我发现了这些……




你妹啊！直接集成了cuda8，我去！
但是用conda安装的tensorflow-gpu版本并不能正确执行，怀疑与环境已安装的有关。

https://devtalk.nvidia.com/default/topic/1026198/cuda-9-0-importerror-libcublas-so-8-0/

所以要重装cuda8...

注意apt-get会拿到一个cuda9.1，我们可以用9.1的驱动，但8还是要装一遍，依然选择用runfile安装。

重装cuda8之后，采用gist一脚本安装cuDNN v6，注意删掉apt-get安装cuda9的段落

https://gist.githubusercontent.com/mjdietzx/0ff77af5ae60622ce6ed8c4d9b419f45/raw/ebcb37e45ba14317330ffc1269159ed076242b9a/waya-dl-setup.sh
```bash
# install cuDNN v6.0
CUDNN_TAR_FILE="cudnn-8.0-linux-x64-v6.0.tgz"
wget http://developer.download.nvidia.com/compute/redist/cudnn/v6.0/${CUDNN_TAR_FILE}
tar -xzvf ${CUDNN_TAR_FILE}
sudo cp -P cuda/include/cudnn.h /usr/local/cuda-8.0/include
sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda-8.0/lib64/
sudo chmod a+r /usr/local/cuda-8.0/lib64/libcudnn*
# set environment variables
export PATH=/usr/local/cuda-8.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64\${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```
pip安装的预编译TensorFlow可以运行，但是有python版本不匹配，没有最适应CPU编译的提示。

因此TF还是自行编译得好……回来再折腾吧

6.安装opencv-python
pip install opencv-python

安全完成！

可以了，测试一下GTX760水平的cuda能否吊打E5-2643.

neural style风格迁移测试。

https://github.com/cysmith/neural-style-tf

测试成绩赛高，E5-2643 v4 @ 3.40GHz约1500秒，GTX760水平只用500s，约1/3时间。


