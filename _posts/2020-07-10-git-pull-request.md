---
layout: post
title:  "Try the Community Development Tool on GitHub"
categories: technology
tags: github pull-request branch merge
author: LZN
---

* content
{:toc}

Here we show an simple example about how to use community development commands in GitHub.

We need to first fork the community repo, then clone it to our local machine. On the local machine, we can create our own branch:

``` bash
git checkout -b test-brch
```

After modification:

``` bash
git add .
git commit -m "test-brch"
git push origin test-brch
```

Now we push the revised branch onto our remote GitHub repo. Go to that repo and change to the branch, submit the pull request to the original repo. Then the community admin will see our pull request.

If we hope to merge the branch locally:

``` bash
git checkout master # checkout to master branch
git merge test-brch
```

Now it is safe to delete the test-brch branch.

``` bash
git branch -d test-brch
```

**Updated 2020-07-10**
