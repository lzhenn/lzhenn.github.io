---
layout: post
title:  "不要使用明文密码！以mysql创建数据库链接为例讨论下密码学"
categories: technology
tags:  database AES_Encrypt python pymysql mysql
author: LZN
---

* content
{:toc}

终于把基本的数据库组织结构学的差不多啦，上午拖着需要补充的市场数据，测试导入数据！

python3使用pymysql模块连接InnoDB数据库，连接过程中需要用户名密码，可是明文密码再上传github这是找死，决定研究下简单的加密解密过程，从外部读取密文，再decode后给入。


### 对称加密
加密算法分对称加密和非对称加密。对称加密很好理解，就是经典的凯撒密码的套路，采用同样的密钥加密和解密（字幕平移法则）。
![](https://bignerdcoding.com/uhttps://raw.githubusercontent.com/Novarizark/Novarizark.github.io/masthttps://raw.githubusercontent.com/Novarizark/Novarizark.github.io/master/uploads/2017/08/3799978773.jpeg)

DES是经典的对称加密算法，64bits为单位然后套轮函数循环，但是DES目前已经被攻破，三重DES（密钥1加密，密钥2解密，密钥3加密）还有应用价值。
AES是取代DES的算法，具体步骤为替换（SubBytes），ShiftRows（平移），MixColumns（混列），最后AddRoundKey（与原数据异或）。此为一轮AES。
如果采用对称加密，推荐AES算法。


### 公钥非对称加密
公钥加密是密码学领域非常牛逼的技术，即加密密钥和解密密钥可以不同，这样可以避免密钥配送过程中的风险。公钥丢失也不怕，神不神奇？

比如用户浏览器和server之间非对称加密过程可以是这样：server给公钥，用户用公钥加密，将密文给server（公钥、密文都被窃取也无法获得明文），server将密文用私钥解密。
经典非对称加密算法RSA。其[数学原理](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)在阮一峰的网站有介绍。不再赘述。


以我们的应用情景来说，因为不涉及通讯，直接AES对称加密即可。

构建如下类解决：

``` python
class AESCipher(object):

    def __init__(self, key): 
        self.bs = 32
        self.key = hashlib.sha256(key.encode()).digest()

    def encrypt(self, raw):
        raw = self._pad(raw)
        iv = Random.new().read(AES.block_size)
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return base64.b64encode(iv + cipher.encrypt(raw))

    def decrypt(self, enc):
        enc = base64.b64decode(enc)
        iv = enc[:AES.block_size]
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return self._unpad(cipher.decrypt(enc[AES.block_size:])).decode('utf-8')

    def _pad(self, s):
        return s + (self.bs - len(s) % self.bs) * chr(self.bs - len(s) % self.bs)

    @staticmethod
    def _unpad(s):
        return s[:-ord(s[len(s)-1:])]
```

[参考资料](https://bignerdcoding.com/archives/33.html)

**Updated 2018-03-12**
