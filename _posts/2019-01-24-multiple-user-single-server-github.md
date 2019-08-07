---
layout: post
title:  "Multiple users, single server account, github"
categories: technology
tags: linux git git github
author: LZN
---

* content
{:toc}

There is a common case that multiple users use the same Linux server account, but they have different github account and their own repo. How to get a solution for this problem?
![](http://ww1.sinaimg.cn/large/73ebdc71ly1fzhkby1wadj20qo0k0gm9.jpg)

Given you have already configured an active github account (Alice) on the server with all global git and ssh settings done. We treat Alice as the main account.

Now configuring the ssh settings. We generate one more RSA key pairs.

``` bash
ssh-keygen  -t rsa -C "hello world"
```

When choosing the save path, be sure save the file to a new name, e.g. `id_rsa_bob`.

Then we add the private key to ssh settings.

``` bash
ssh-agent bash
ssh-add id_rsa_bob
```

`$ssh-add -l` will show the accepted private keys list.

Also, add `id_rsa_bob.pub` to your github ssh key list.

Next, we write the `~/.ssh/config` file:

``` bash
# git@github.com:Alice
Host github-alice
  User Alice 
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa

# git@github.com:bob
Host github-bob
  User bob
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_bob
```

Make sure to give the file a proper authority:

``` bash
chmod 600 ~/.ssh/config
```

Alice, as the main user, do not need to change anything. Bob, however, consider he clone a repo `gene-player` from his github. Now he need to set the repo's config file.

``` bash
git config user.name "bob"
git config user.email email "bob@gene-player.com"
git config remote.origin.url "git@github-bob:bob/gene-player.git"
```

Note that we need to modify the remote.origin.url, replacing the original domain name "github.com" to "github-bob" as what we set the `Host` variable in `~/.ssh/config`.

Now Bob can play with the repo.

### Reference 

* [https://blog.csdn.net/onTheRoadToMine/article/details/79029331](https://blog.csdn.net/onTheRoadToMine/article/details/79029331)
* [https://blog.csdn.net/Jack_0817/article/details/55668892](https://blog.csdn.net/Jack_0817/article/details/55668892)
* [https://blog.csdn.net/dong_alex/article/details/80813816](https://blog.csdn.net/dong_alex/article/details/80813816)

**Updated 2019-01-24**

