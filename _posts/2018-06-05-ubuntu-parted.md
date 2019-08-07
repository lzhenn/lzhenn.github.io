---
layout: post
title:  "Ubuntu下用parted分区4TB硬盘"
categories: technology
tags: linux hardware ubuntu parted
author: LZN
---

* content
{:toc}

Orion要用来做天池比赛的服务器啦，安多一块硬盘用来存雷达数据。放上后需要用parted做分区，然后mkfs格式化，过程和CentOS差不多。这里做一下记录：


``` bash 
lzhenn@thinkstation:~$ sudo parted /dev/sdb
(parted) mklabel GPT                                                      
(parted) mkpart primary 0% 100%                                           
(parted) print                                                            
Model: ATA HGST HUS724040AL (scsi)
Disk /dev/sdb: 4001GB
Sector size (logical/physical): 512B/4096B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name     Flags
 1      1049kB  4001GB  4001GB               primary
(parted) quit
lzhenn@thinkstation:~$ partprobe  # let the core know the partation
lzhenn@thinkstation:~$ mkfs.ext4 /dev/sdb1 # format
                     
```
format后，建立fstab并mount -a即可。与CentOS完全一致。

**Updated 2018-06-05**

