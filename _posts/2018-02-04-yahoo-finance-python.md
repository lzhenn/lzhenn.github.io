---
layout: post
title:  "爬取Yahoo Finance美股数据"
categories: finance 
tags:   yahoo-finance spider investment python finance equity
author: LZN
---

* content
{:toc}

去年5月就试着用python现成包爬取Yahoo Finance的数据，但是发现坑爹的是在我打算搞这个事情前两天，雅虎改了API爬不到。这次想起来查了下发现已经有相应的fix包了，当然只是临时的。不过无所谓，数据先拉到，后面业务化运行时能用多久用多久咯。

先装包：
``` bash
pip install pandas_datareader
pip install yahoo-finance
pip install fix-yahoo-finance
```
然后就可以快乐地爬数据了。Stock ETF代码可以在[Nasdaq官网](https://www.nasdaq.com/screening/companies-by-name.aspx?letter=A)拿到，这玩意儿一共26个英文字母，我居然手动下完了所有才发现有集中到一起的表格可以下载，shit！
对代码先做了个A-Z排序，加上个随机延时，然后就可以开搞啦。源码如下：
``` python
def mainfunc():

    yf.pdr_override() # fix yahoo finance api

    for item in eq_market:
        pd_symbol=pd.read_csv(eq_path+item+'.csv', index_col='Symbol')
        pos=0
        for symb in pd_symbol.index:
            pos=pos+1
            print('Now download %s@%s (%d/%d)' % (symb, item, pos, len(pd_symbol.index)))
            try:
                df = pdr.get_data_yahoo(symb, start=ini_time, end=end_time)
            except:
                print('i\nError while downloading %s@%s' % (symb, item))

            with open(eq_path+item+'/'+symb+'.csv', 'w') as f:
                df.to_csv(f)
            sptime=random.randint(0,50)/10
            print('\nsleep %4.2fs' % sptime)
            time.sleep(sptime)
```


**Updated 2018-02-04**
