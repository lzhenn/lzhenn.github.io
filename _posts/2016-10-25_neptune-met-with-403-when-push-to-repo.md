---
layout: post
title:  "Neptune met with 403 when push to repo" 
categories: Git&amp;GitHub
tags: Git&amp;GitHub
author: LZN
---

* content
{:toc}

I have found that after the attack to DNS servers in the US, gitrefresh operation seems to be blocked. Got the error:

<span style="color: #ff0000;"><strong> error: The requested URL returned error: 403 Forbidden while accessing https://github.com/Novarizark/project/info/refs</strong></span>

<span style="color: #ff0000;"><strong>fatal: HTTP request failed</strong></span>

Then found this in stackoverflow

http://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed

change the https method to ssh method really solved the probleme. Although, I am still confused why this problem happens...