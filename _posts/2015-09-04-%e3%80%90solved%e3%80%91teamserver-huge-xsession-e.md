---
layout: post
title:  "【solved】Teamserver huge .xsession-error problem" 
categories: technology
tags: linux xsession server linux
author: LZN
---

* content
{:toc}

A few days ago I have found that the available disk space on Teamserver was shrunk to 60%. This is very weird because most datasets on the machine were uploaded by me and I know they only occupy about 30% in 22TB. Once I thought they might come from one of my teammate, uploading CMIP5 data or something. However, when I checked individual directory in home, I found nothing. Then I checked “ll -ah” in home. Holly shit! One file named “.xsession-error” takes up about 6TB, and still enlarging! So I google it and found it might be a bug of Linux, regardless of the distribution. Many people delete it or use file permission to restrict its expansion, without any source seeking. I followed them, while nothing happened to the available size from df command. I used DirStat and the original software to check this, nothing.
What the fuck! I just let it alone and do my staff until I found there is only 2TB available today. Another similar file named as “.xsession-error.XXXXX” did the evil things. In fact this file was a text file, thus I “tail” it and found the flowing statement:
<pre>sslvpn_read_packet: SSL_read failed!
Error while reading SSL packet
keep alive recv failed!
TCP_KEEP_ALIVE_SOCK_ENVENT
sslvpn_read_packet: SSL_read failed!
Error while reading SSL packet
keep alive recv failed!
TCP_KEEP_ALIVE_SOCK_ENVENT
sslvpn_read_packet: SSL_read failed!</pre>
VPN! So it must be the vpn soft which aimed at connecting TH-2 that wrongly redirect the std out flow to this poor file and made the shit. Without any hesitate, I uninstall the VPN soft. Everything's back to normal.
