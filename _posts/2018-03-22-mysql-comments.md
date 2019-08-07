---
layout: post
title:  "mysql字段注释"
categories: technology
tags:  server database 
author: LZN
---

* content
{:toc}

开始组建财报数据表，过程中有必要做一些注释说明字段，比如资产负债表中为了压缩存储空间，现金等字段单位用kdollar。
差了下操作如下：

创建表过程中
``` sql
mysql> cash_equiv int null comment 'Cash and Equivalents (kdollars)',
```

修改表过程中

``` sql
mysql> alter table eqbalance_sheet modify column invest int comment 'Investments (Deficit, kdollars)'; 
```

添加字段过程中

``` sql
alter table eq_balance_sheet add other_income int comment 'Accumulated Other Comprehensive Income (kdollars)';
```

查看说明：

``` sql
mysql> show full columns from eq_balance_sheet;
+----------------+-------------+-----------------+------+-----+---------+-------+---------------------------------+---------------------------------------------------+
| Field          | Type        | Collation       | Null | Key | Default | Extra | Privileges                      | Comment                                           |
+----------------+-------------+-----------------+------+-----+---------+-------+---------------------------------+---------------------------------------------------+
| rhid           | char(36)    | utf8_general_ci | NO   | PRI | NULL    |       | select,insert,update,references |                                                   |
| symbol         | varchar(10) | utf8_general_ci | NO   |     | NULL    |       | select,insert,update,references |                                                   |
| cash_equiv     | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Cash and Equivalents (kdollars)                   |
| invest_curr    | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Investments Current (kdollars)                    |
| cash_st_invest | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Cash and Short Term Investments (kdollars)        |
| receivables    | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Trade and Non-Trade Receivables (kdollars)        |
| inventory      | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Inventory (kdollars)                              |
| curr_ast       | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Current Assets (kdollars)                         |
| ppe_net        | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Property, Plant & Equipment Net (kdollars)        |
| goodwill       | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Goodwill and Intangible Assets (kdollars)         |
| invst_ncurr    | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Investments Non-Current (kdollars)                |
| tax_ast        | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Tax Assets (kdollars)                             |
| ast_ncurr      | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Assets Non-Current (kdollars)                     |
| total_ast      | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Total Assets (kdollars)                           |
| payables       | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Trade and Non-Trade Payables (kdollars)           |
| debt_curr      | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Debt Current (kdollars)                           |
| curr_liab      | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Current Liabilities (kdollars)                    |
| debt_ncurr     | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Debt Non-Current (kdollars)                       |
| total_debt     | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Total Debt (kdollars)                             |
| def_revenue    | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Deferred Revenue (kdollars)                       |
| tax_liab       | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Tax Liabilities (kdollars)                        |
| dep_liab       | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Deposit Liabilities (kdollars)                    |
| liab_ncurr     | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Liabilities Non-Current (kdollars)                |
| total_liab     | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Total Liabilities (kdollars)                      |
| other_income   | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Accumulated Other Comprehensive Income (kdollars) |
| ret_earning    | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Accumulated Retained Earnings (Deficit, kdollars) |
| equity         | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Shareholders Equity (Deficit, kdollars)           |
| invest         | int(11)     | NULL            | YES  |     | NULL    |       | select,insert,update,references | Investments (Deficit, kdollars)                   |
+----------------+-------------+-----------------+------+-----+---------+-------+---------------------------------+---------------------------------------------------+
28 rows in set (0.00 sec)
```



**Updated 2018-03-08**
