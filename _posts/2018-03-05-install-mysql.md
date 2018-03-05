---
layout: post
title:  "CentOS mysql安装记录"
categories: linux mysql
tags:  server centos
author: LZN
---

* content
{:toc}

Mercurius系统后续的数据组织必须要用数据库啦，而且SQL作为基本的程序员技能当然要熟悉啦，跟着youtube教学视频在CentOS下安装mysql server，记录如下：
首先切换到root下安装：
``` bash
yum install mysql mysql-server
```
检查服务状态
``` bash
chkconfig mysqld --list
mysqld          0:off   1:off   2:off   3:off   4:off   5:off   6:off
```
启动服务
``` bash
chkconfig mysqld on 
```

启动开机服务
``` bash
service mysqld start
```

之后给出提示信息：
```
PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

/usr/bin/mysqladmin -u root password 'new-password'
/usr/bin/mysqladmin -u root -h localhost.localdomain password 'new-password'

Alternatively you can run:
/usr/bin/mysql_secure_installation
```
采用第二种方法更加安全。

之后需要输入root密码，注意这个root指代是mysql的root用户的密码，不是系统root用户。

然后的选项一路Y。

登录mysql，在root用户下，直接
``` bash
mysql -p
```
登陆后，我们查看一下用户列表。
``` sql
select Host,User from mysql.user;
```
```
+-----------+------+
| Host      | User |
+-----------+------+
| 127.0.0.1 | root |
| localhost | root |
+-----------+------+
2 rows in set (0.00 sec)
```
添加一个非root用户
``` sql
CREATE USER 'lzhenn'@'127.0.0.1' IDENTIFIED BY 'password';
CREATE USER 'lzhenn'@'localhost' IDENTIFIED BY 'password';
```
给予新用户相应权限
``` sql
GRANT ALL PRIVILEGES ON *.* TO 'lzhenn'@'localhost' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'lzhenn'@'127.0.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
FLUSH HOSTS;

select Host,User from mysql.user;
+-----------+--------+
| Host      | User   |
+-----------+--------+
| 127.0.0.1 | lzhenn |
| 127.0.0.1 | root   |
| localhost | lzhenn |
| localhost | root   |
+-----------+--------+
4 rows in set (0.00 sec)
```
**Updated 2018-03-05**
