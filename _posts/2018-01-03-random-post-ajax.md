---
layout: post
title:  "给博客增加了一个随机展示内容的功能"
categories: network javascript
tags:  json ajax jekyll javascript blog
author: LZN
---

* content
{:toc}

给主页加了一个小模块，随机显示一些自己value的原则性内容，折腾了一下午，记录一下：

首先也是考虑到服务器端传文件下来，然后用javascript解析后post上去，但是代码简单测试了下没有起效。没细究原因，查了下能否用jekyll实现，结果发现jekyll只是在build过程中随机一下，并不能在页面刷新时随机。这样很正常嘛，本身就是静态网页啦。

所以还是回到刚刚的思路，查了下解决方案，发现是自己定义了函数但是木有执行。在定义后加入执行代码后，生效。注意对应的json包不能放在jekyll生成的下划线前缀目录下，否则无法获取到。javascript代码：
``` javascript
function showJson(){  
    var test;  
    if(window.XMLHttpRequest){  
        test = new XMLHttpRequest();  
    }else if(window.ActiveXObject){  
        test = new window.ActiveXObject();  
    }else{  
        alert("Browser not supported!");  
    }  
    
    if(test !=null){  
        test.open("GET","/database/principles.json",true);  
        test.send(null);  
        test.onreadystatechange=function(){  
            if(test.readyState==4&&test.status==200){  
                var obj = JSON.parse(test.responseText);  
                var count = Object.keys(obj).length;
                var rnd_pos = Math.floor(Math.random() * count + 1)-1
                document.getElementById("content-principle").innerHTML = obj[rnd_pos].content;
            }  
        };  
    }  
}  
showJson(); 
```

