---
layout: post
title:  "python requirements.txt"
categories: technology
tags: linux python requriments.txt
author: LZN
---

* content
{:toc}

To transfer a python project from one platform to another, we need to consider the dependencies. 
Using `requirements.txt` can solve this problem.

Start a new conda enviroment:

```bash
conda create -n test_aeolus python=3.6
conda env list
conda activate test_aeolus
```

Install required packages in the brand-new environment by `pip`, until our package runs smooth.

```bash
pip freeze > requirements.txt
cat requirements.txt

certifi==2020.12.5
cftime==1.4.1
netCDF4==1.5.6
numpy==1.19.5
pandas==1.1.5
python-dateutil==2.8.1
pytz==2021.1
scipy==1.5.4
six==1.15.0
wrapt==1.12.1
wrf-python==1.3.1
xarray==0.16.2
```

Test `requirements.txt`:

```bash
conda deactivate
conda create -n test_install python=3.6
conda activate test_install
pip install -r requirements.txt
python run.py
```



### Refrence
https://blog.usejournal.com/why-and-how-to-make-a-requirements-txt-f329c685181e


Updated 2021-02-20**

