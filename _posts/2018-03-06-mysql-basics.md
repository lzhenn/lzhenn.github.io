---
layout: post
title:  "mysql基本操作"
categories: mysql notebook
tags:  server database 
author: LZN
---

* content
{:toc}


常用命令
``` sql
show databases;
create database test;
use test;
select database(); # show what is the selected database
drop database if exists test;
```
建立好数据库之后，则可以开始建立tables啦，这个过程中需要有一些数据库的设计思路，大概是列出各种table，如下图：
![](https://ws1.sinaimg.cn/large/73ebdc71gy1fp2ugsl2uej20nd0gbwka.jpg)

然后我们仿照视频教程建立一个存储学生数据的table
``` sql
mysql> create table student(
    -> first_name varchar(30) not null,
    -> last_name varchar(30) not null,
    -> email varchar(60) null,
    -> street varchar(50) not null,
    -> city varchar(40) not null,
    -> state char(2) not null default "PA",
    -> zip mediumint unsigned not null,
    -> phone varchar(20) not null,
    -> birth_date date not null,
    -> sex enum('M', 'F') not null,
    -> date_entered timestamp,
    -> lunch_cost float null,
    -> student_id int unsigned not null auto_increment primary key);
```
解释一下各关键词：

varchar代表可变长度的string，not null表示不能是空值；

state因为只有两个字母，所以，强制要求char(2)，并且给了default值为PA。mediumint有意思，查了一下，发现mysql提供非常多种类的数据类型，估计是考虑到数据库的空间利用效率的原因。
![](https://ws1.sinaimg.cn/large/73ebdc71gy1fp2v4f3uo0j20wc07c42m.jpg)
我们总结一下数据类型：
```
CHAR		fixed length character string
VARCHAR		a character string with a length that is variable
BLOB		contain 2^16 bytes of data
BIGINT		2^63 to -2^63-1
FLOAT		decimal spaces 1.1e38 to -1.1e38
DOUBLE		decimal spaces, 1.7e308 to -1.7e308
ENUM		A character stirng that has a limited number of total values, which you must define
SET			(Seldom used) A set of legal possible character strings. Unlike ENUM, a SET can contain a multiple values in comparason to the one legal value with ENUM.
DATE		YYYY-MM-DD
TIME		HH:MM:SS
DATETIME	YYYY-MM-DD HH:MM:SS
TIMESTAMP	YYYYMMDDHHMMSS
YEAR		YYYY
```
unsigned 表示非负值。

sex的enum非常清楚了，只有两个选项。

注意入学时间，用的timestamp类型，可以看到数据库软件本身提供了非常体贴的类型，不需要自己parser date string啦。

最后一个student id，被定义为主键。

然后我们看一下student中的情况
``` sql
describe student;

+--------------+-----------------------+------+-----+-------------------+-----------------------------+
| Field        | Type                  | Null | Key | Default           | Extra                       |
+--------------+-----------------------+------+-----+-------------------+-----------------------------+
| first_name   | varchar(30)           | NO   |     | NULL              |                             |
| last_name    | varchar(30)           | NO   |     | NULL              |                             |
| email        | varchar(60)           | YES  |     | NULL              |                             |
| street       | varchar(50)           | NO   |     | NULL              |                             |
| city         | varchar(40)           | NO   |     | NULL              |                             |
| state        | char(2)               | NO   |     | PA                |                             |
| zip          | mediumint(8) unsigned | NO   |     | NULL              |                             |
| phone        | varchar(20)           | NO   |     | NULL              |                             |
| birth_date   | date                  | NO   |     | NULL              |                             |
| sex          | enum('M','F')         | NO   |     | NULL              |                             |
| date_entered | timestamp             | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
| lunch_cost   | float                 | YES  |     | NULL              |                             |
| student_id   | int(10) unsigned      | NO   | PRI | NULL              | auto_increment              |
+--------------+-----------------------+------+-----+-------------------+-----------------------------+

```

查看table中field值的方法：
``` sql
select first_name from student;
```
可以用逗号隔开多个fields。
清空数据表
``` sql
truncate student;
```
注意truncate和drop的区别，drop直接将table从database拿掉，truncate仅仅是清空field的content。
我们总结一下层级关系
```
databases
	tabels
		fields
			field rows (contents)
```

向student table中插入一条数据记录
``` sql
mysql> insert into student value
    -> ('Dennis', 'Lee', 'dcooper@aol.com', '123 Main St', 'Yakima', 'WA', 95294, '510-365-0383', '1995-2-22', 'M', now(), 3.50, null);
```

查看加入的数据记录
``` sql
slect * from student;
```
Foreign Key的概念

表A中的Primary Key，出现在表B中，则为Foreign Key，可为空值，可重复出现。

如果要对已有的表增加一条数据属性，使用alter table语句
``` sql
mysql> alter table test
    -> add maxscore int not null after type;

describe test;
+----------+------------------+------+-----+---------+----------------+
| Field    | Type             | Null | Key | Default | Extra          |
+----------+------------------+------+-----+---------+----------------+
| date     | date             | NO   |     | NULL    |                |
| type     | enum('T','Q')    | NO   |     | NULL    |                |
| maxscore | int(11)          | NO   |     | NULL    |                |
| class_id | int(10) unsigned | NO   |     | NULL    |                |
| test_id  | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
+----------+------------------+------+-----+---------+----------------+

```
改变已有的数据表中的Field名，
``` sql
mysql> alter table score change event_id test_id
    -> int unsigned not null;
```

**Updated 2018-03-08**
