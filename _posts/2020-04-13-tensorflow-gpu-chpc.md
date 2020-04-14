---
layout: post
title:  "Configuring Tensorflow-GPU (v2.1 & v1.14) on CUHK Central Cluster"
categories: technology
tags: linux cuda cudnn tensorflow tensorflow-gpu 
author: LZN
---

* content
{:toc}

Central Cluster System in the CUHK has 3 GPU nodes with Nvidia 1080Ti, we hope to use the resources for our deep learning research. Here we archive the process to setup the Tensorflow environment.

### Check GPU Node Environment

First, we create a slurm script to apply the login authority to GPU node.

```bash
#!/bin/bash
#SBATCH -J gpu_test 
#SBATCH -N 1
#SBATCH --gres=gpu:GTX1080Ti:2
sleep 99999
```

Now we can `ssh` to the assigned GPU node. Login, and type `nvidia-smi`, with return:

```
Tue Apr 14 16:49:54 2020       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 108...  Off  | 00000000:04:00.0 Off |                  N/A |
|  0%   32C    P5    17W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   1  GeForce GTX 108...  Off  | 00000000:05:00.0 Off |                  N/A |
|  0%   41C    P0    62W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   2  GeForce GTX 108...  Off  | 00000000:08:00.0 Off |                  N/A |
|  0%   37C    P5    17W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   3  GeForce GTX 108...  Off  | 00000000:09:00.0 Off |                  N/A |
|  0%   40C    P5    16W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   4  GeForce GTX 108...  Off  | 00000000:85:00.0 Off |                  N/A |
|  0%   35C    P0    61W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   5  GeForce GTX 108...  Off  | 00000000:86:00.0 Off |                  N/A |
|  0%   39C    P0    61W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   6  GeForce GTX 108...  Off  | 00000000:89:00.0 Off |                  N/A |
|  0%   32C    P0    61W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   7  GeForce GTX 108...  Off  | 00000000:8A:00.0 Off |                  N/A |
|  0%   35C    P0    61W / 260W |      0MiB / 11178MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+

```
Here we see that there are 8 GTX 1080Ti Cards on the GPU node, with Nvidia driver version 418.67 and CUDA version 10.1. Note that the CUDA you see here is the "Driver API", which is not what we need in deep learning.
We need the so called `runtime` CUDA libs, which contains `ncvv` compiler. 

![](https://i.stack.imgur.com/TD51p.jpg)

### Install CUDA

Please check [this link](https://www.tensorflow.org/install/source#common_installation_problems) for match table, be sure to install the corresponding match in case of problems.

Note the CUDA10.1 pack may have some trouble in configuring all default paths:
[This post](https://forums.developer.nvidia.com/t/cuda-10-1-install-path/70907/4)

Use

```bash
sh cuda_10.1.105_418.39_linux.run --toolkit --toolkitpath=$HOME/tkit --defaultroot=$HOME/tkit --samples --samplespath=$HOME/tkit/samples
```

If you see the following summary, Bingo!

```
===========
= Summary =
===========

Driver:   Not Selected
Toolkit:  Installed in /users/b145872/soft/cuda_10_1/
Samples:  Not Selected

Please make sure that
 -   PATH includes /users/b145872/soft/cuda_10_1/bin
  -   LD_LIBRARY_PATH includes /users/b145872/soft/cuda_10_1/lib64, or, add /users/b145872/soft/cuda_10_1/lib64 to /etc/ld.so.conf and run ldconfig as root

  To uninstall the CUDA Toolkit, run cuda-uninstaller in /users/b145872/soft/cuda_10_1/bin

  Please see CUDA_Installation_Guide_Linux.pdf in /users/b145872/soft/cuda_10_1/doc/pdf for detailed information on setting up CUDA.
  ***WARNING: Incomplete installation! This installation did not install the CUDA Driver. A driver of version at least 418.00 is required for CUDA 10.1 functionality to work.
  To install the driver using this installer, run the following command, replacing <CudaInstaller> with the name of this run file:
      sudo <CudaInstaller>.run --silent --driver

```

Check the `nvcc` compiler:
```
(base) [b145872@chpc-login01 cuda_10_1]$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2019 NVIDIA Corporation
Built on Wed_Apr_24_19:10:27_PDT_2019
Cuda compilation tools, release 10.1, V10.1.168
```

### Install CUDNN 

Follow the instructions, just download the tar pack and unzip to cuda installed path. Note you need to finish a survey at first.

Error occurs:

```
tensorflow.python.framework.errors_impl.InvalidArgumentError: Cannot assign a device for operation Variable/IsInitialized/VarIsInitializedOp: node Variable/IsInitialized/VarIsInitializedOp (defined at neural_style.py:243)  was explicitly assigned to /device:GPU:0 but available devices are [ /job:localhost/replica:0/task:0/device:CPU:0, /job:localhost/replica:0/task:0/device:XLA_CPU:0, /job:localhost/replica:0/task:0/device:XLA_GPU:0 ]. Make sure the device specification refers to a valid device.
```

Using the baseline test on [Tensorflow official site](https://www.tensorflow.org/guide/gpu):

```
import tensorflow as tf
print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))
```

With the result:
```
Num GPUs Available: 0
```

This is strenge. I then traced the error msg and found tf could not find the cudnn lib. It is because the unpacked cudnn is not set into the right `cuda/lib64` & `cuda/include` dir. Just `mv`.

The environment settings done, just `pip install tensorflow-gpu` will install the newest (2.1) version, and works.

### Legacy Tensorflow1.14 environment Installation

I recommend to use new conda environment and `conda install` to avoid dependency issues. Also, 2.1 can use similar procedure. 1.14 need py3.6 environment.

``` bash
conda create -n tensorflow1.14 python=3.6

source activate tensorflow1.14

conda install tensorflow-gpu==1.14
```

Conda will automatically install corresponding cuda and cudnn.

**Updated 2020-04-14**

