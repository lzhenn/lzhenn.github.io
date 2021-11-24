---
layout: post
title:  "git submodules"
categories: technology
tags: linux git github
author: LZN
---

It would be nice if we can manage a repo that request support from other repo. 
For example, if you have repo A and hope to use repo B in A, and you hope to get updated with B.
Simply use submodules!

First add from remote:

```
git submodule add https://github.com/user/repoB
git commit -am 'Add submodule B'
git push origin master
```

Done.


### Clone
If you hope to clone A with submodule B:
```
git clone https://github.com/user/repoA
git submodule init
git submodule update
```
Or simply:
```
git clone --recurse-submodules https://github.com/user/repoA
```

### Update 
If submodule B has been upgraded by the owner, we could simply update A with this modification by:
```
cd B
git fetch
git merge origin master
```

If 


