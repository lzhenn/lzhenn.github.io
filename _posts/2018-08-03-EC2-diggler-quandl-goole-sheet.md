---
layout: post
title:  "EC2迁移II：财务系统"
categories:  Linux Hardware Notebook
tags: EC2 Notebook
author: LZN
---

* content
{:toc}

这段时间忙忙乱乱，一直没有将财务系统迁移过来，已经一个多月没有更新资产负债表了，趁着得闲，尽快处理下，记录下迁移过程。话说突然觉得有钱还是好啊，如果不在乎每月十几二十刀，也用不着每年迁移一次AWS吧，重新调配环境确实还是很蛋疼的事情。

首先尝试直接运行`routine_balance_sheet.py`，按提示安装所需库

```bash
sudo pip install httplib2
sudo pip install quandl
```

安装quandl出错，提示requests不能够卸载：
```
Cannot uninstall 'requests'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.
```

解决办法，保留原有安全装包的情况下安装：
```bash
sudo -H pip install --ignore-installed -U ipython
```
随后[安装google sheets python api](https://developers.google.com/sheets/api/quickstart/python)
```bash
pip install --upgrade google-api-python-client oauth2client
```

可以执行，但是执行中存在numpy警告。随后发现quandl将所有的exchange rate的数据做了premium权限设定，这下没法用免费的了，查了下发现[免费的echange rate API](http://free.currencyconverterapi.com/api/v5/convert?q=USD_CNY&compact=y).更换后可用。

**Updated 2018-08-03**

