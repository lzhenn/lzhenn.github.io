---
layout: post
title:  "Install cfgrib for xarray"
categories: technology
tags: python cfgrib eccodes
author: LZN
---

* content
{:toc}

Here we archive the process of building cfgrib engine for xarray in python3.7 (Anaconda). Although there still seems to be some problems, the `eccodes` and `cfgrib` have been installed sucessfully.

First, we found using `conda install` cannot install `eccodes` due to dependency problems (might comes from python version issue, we did not check then).

Then we [install the `eccodes` from source](https://confluence.ecmwf.int//display/ECC/ecCodes+installation). The process was smooth, just install `cmake` prior to the eccodes installation.

When install python interface, try both `--install-option` and `export ECCODES_DIR=/path/to/where/you/install/eccodes`.

After that:
``` bash
pip install --force-reinstall cfgrib
```
Note conda does not work in my case.

Set all possible environmental varibales:

```bash
export ECCODES_DIR=/home/yhuangci/lee/soft/eccodes-2.17.0
export PATH=$ECCODES_DIR:$PATH
export LIBECCODES=$ECCODES_DIR/lib
export LD_LIBRARY_PATH=$ECCODES_DIR/lib:$LD_LIBRARY_PATH
```

`xr.open_dataset('example.grib', engine='cfgrib')` works with some data-caused errors.

**Updated 2020-05-19**

