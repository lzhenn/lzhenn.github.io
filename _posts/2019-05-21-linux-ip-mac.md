---
layout: post
title:  "Maintaining: Server network outage due to IP-MAC bind issue"
categories: Internet Linux
tags: Internet Linux
author: LZN
---

* content
{:toc}

The team server met an issue that the IP is only available from the local network. After quick check, we found the IP service charge was overdue. However, After recharge the service, the server is still not available from the other campuses.

It seems that the issue comes from IP-MAC binding. Actually, we used a clone MAC due to historical reasons. The solution, after many tests, was use another IP-MAC pair to replace the existing one.

Now we archive some useful commands, given the network settings in use is 'em2'
``` bash
#ifconfig show the network status
$ifconfig

#stop/start the network settings in use
$ifdown em2
$ifup em2
```
Network settings file position `/etc/sysconfig/network-scripts/`

Style:

```
DEVICE=em2
TYPE=Ethernet
UUID=4425bdde-016e-40af-dfwerfef-df-we-fsdf-
ONBOOT=no
NM_CONTROLLED=yes
BOOTPROTO=none
MACADDR=3C:XX:XX:XX:XX:5A
IPADDR=202.XXX.XXX.XXX
PREFIX=23
GATEWAY=XXX.XXX.70.1
DNS1=10.X.8.X
DNS2=X.8.4.X
DEFROUTE=yes
IPV4_FAILURE_FATAL=yes
IPV6INIT=no
NAME=106
HWADDR=XX:83:XX:XX:XX:C4
LAST_CONNECT=1431774283
```

**Updated 2019-05-21**

