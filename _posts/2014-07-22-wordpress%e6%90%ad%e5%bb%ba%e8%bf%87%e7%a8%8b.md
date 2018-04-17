---
layout: post
title:  "【已解决】WordPress搭建过程" 
categories: Blog&amp;CMS PHP&amp;mySQL
tags: Blog&amp;CMS PHP&amp;mySQL
author: LZN
---

* content
{:toc}

安装过程的确不太轻松，可能最初php和mysql设置有问题吧。痛苦的安装过程记录一下，下学期有了新电脑正式建站的时候作参考。

官方安装说明：http://codex.wordpress.org/zh-cn:%E5%AE%89%E8%A3%85WordPress

1.下载解压后，查看 /etc/rc.d/init.d/mysqld status 是否启动，否则启动mysql
#service mysqld start

按照说明运行mysql -u命令出现ERROR 1045 (28000)错误，其实可能是root没有密码，我没有多尝试，直接查到了mysql强行重新修改密码的方法，如下：
<blockquote>
<p style="padding-left: 30px;">/etc/init.d/mysql stop (service mysqld stop )
/usr/bin/mysqld_safe --skip-grant-tables
另外开个SSH连接
[root@localhost ~]# mysql
mysql&gt;use mysql
mysql&gt;update user set password=password("123456") where user="root";
mysql&gt;flush privileges;
mysql&gt;exit</p>
<p style="padding-left: 30px;">pkill -KILL -t pts/0 可将pts为0的**用户(之前运行mysqld_safe的用户窗口)强制踢出
正常启动 MySQL：/etc/init.d/mysql start (service mysqld start)</p>
</blockquote>
打开install.php，出现提示
<blockquote>您的PHP似乎没有安装运行WordPress所必需的MySQL扩展。</blockquote>
查到问题是php没有加载mysql模块所致，查看/etc/php.d/目录，如果只有dbase.ini,idpa.ini，而没有 mysql.ini,mysqli.ini,pdo.ini,pdo_mysql.ini,pdo_mysqli.ini,同时查看/usr/lib /php/modulse目录，如果没有 mysql.so,mysqli.so,pdo.so,pdo_mysql.so,pdo_sqlite.so,phpcpus.so,那么可判断为 php没有加载mysql模块。
#yum install php-mysql

php-pdo貌似centos已经默认安装。安装后/usr/lib/php/modulse目录下会有上述所需文件

配置/etc/php.ini，在任意地方加入下列语句

extension=mysql.so
extension=mysqli.so

extension=pdo_mysql.so

保存，重启apache，如果还是出现问题，重启了一下mysql，刷新网页，问题基本能够解决。

Done！

#20140729#

mysql默认为空密码，重置密码方式：
<div><em>    3. 然后用空密码方式使用root用户登录 MySQL；</em></div>
<div><em>    mysql -u root</em></div>
<div><em>    4. 修改root用户的密码；</em></div>
<div><em>    mysql&gt; update mysql.user set password=PASSWORD（'新密码'） where User='root'；</em></div>
<div><em>    mysql&gt; flush privileges；</em></div>
<div><em>    mysql&gt; quit</em></div>
<div><em>    5. 重新启动MySQL，就可以使用新密码登录了</em></div>
<div></div>
<div>使用密码登陆的正确姿势</div>
<div>mysql -u root -p 回车！！！</div>
<div>输入新密码</div>
<div>回车……</div>
<div>奇葩吧</div>