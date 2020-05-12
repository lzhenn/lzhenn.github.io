---
layout: post
title:  "Install metpy in a new conda environment"
categories: technology
tags: python metpy anaconda
author: LZN
---

* content
{:toc}

I used the default environment to install `metpy` with:

```bash
conda install metpy
```

got errors.

```

```

Following [this post](https://github.com/Unidata/MetPy/issues/1305). The issue seems to be a specific version dependency issue. In conda, the metpy is version 0.11, while version 0.12 solves the problem.

Here we just create a new conda environment for `metpy`.
```bash
conda create -n metpy python=3.7
```

Use `pip install` to install the metpy. After that, we found the `cartopy` need to be installed. Then, everything goes fine.

Example figure:

![YYpWrV.jpg](https://s1.ax1x.com/2020/05/11/YYpWrV.jpg)

CartoPy figure:

![Yt1kKP.jpg](https://s1.ax1x.com/2020/05/12/Yt1kKP.jpg)

**Updated 2020-05-11**

