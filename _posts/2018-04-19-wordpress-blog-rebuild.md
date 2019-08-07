---
layout: post
title:  "从备份的wordpress数据库重建技术博客"
categories: technology 
tags: server database wordpress jekyll markdown
author: LZN
---

* content
{:toc}

接上篇[东校服务器RAID rebuild](https://novarizark.github.io/2018/04/04/raid-rebuild/),接下来的任务是如何把wordpress的数据库内容导出，转成jekyll的markdown文档。

思路应该很简单直接，sql抽出来内容 日期 关键词（我当时只做了category分类，可以考虑直接充当关键词和分类，后续再调整），然后按jekyll的post格式给出即可。
工具：pymysql

google下，抽出post内容的几个关键语句如下：
```sql

--选出内容，唯一id，和category
>SELECT post_title, wpr.object_id, wp_terms.name
FROM wp_terms
INNER JOIN wp_term_taxonomy ON wp_terms.term_id = wp_term_taxonomy.term_id
INNER JOIN wp_term_relationships wpr ON wpr.term_taxonomy_id = 
wp_term_taxonomy.term_taxonomy_id
INNER JOIN wp_posts ON ID = wpr.object_id
WHERE taxonomy = 'category' 
AND post_type = 'post' 
ORDER by post_title;
```
然后用python重新组织为markdown博客的形式，tag和category用相同的关键词。成功恢复了200+篇博客内容，后面大概修改下残缺，整理下tag就很好啦。


**Updated 2018-04-13**

