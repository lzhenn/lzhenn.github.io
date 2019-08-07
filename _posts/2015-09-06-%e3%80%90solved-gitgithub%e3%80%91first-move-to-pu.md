---
layout: post
title:  "【solved, git&github】first move to push my project" 
categories: technology
tags: git github web
author: LZN
---

* content
{:toc}

Try to push paperhub project on Lab server to github. The following are steps and barriers when I did this.

1. create a new repo on github, same name as "paperhub"

2. Try one file down_enw.php
<pre><strong>$git init</strong> # to regard paperhub dir as a git repo
<strong>$git add down_enw.php
$git commit -m "first commit"
$git push origin master</strong></pre>
Get error:
<pre><code class="language-bash" data-lang="bash"><span class="nv">$ </span>git push origin master
error: The requested URL returned error: <span class="m">403</span> Forbidden <span class="k">while</span> accessing https://github.com/Novarizark/paperhub.git

fatal: HTTP request failed</code></pre>
Follow this:

<a href="http://jim-y.me/linux/2015/04/01/setting-up-git-for-error-403-forbidden/">http://jim-y.me/linux/2015/04/01/setting-up-git-for-error-403-forbidden/</a>
<a href="http://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed"> http://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed</a>

Change:
<pre>$vi .git/config
url = https://<strong>Novarizark@</strong>github.com/Novarizark/paperhub.git
:wq</pre>
Another error:
<pre><code>(gnome-ssh-askpass:29241): Gtk-WARNING **: cannot open display:</code></pre>
Follow this:
<a href="http://stackoverflow.com/questions/16077971/git-push-produces-gtk-warning#">http://stackoverflow.com/questions/16077971/git-push-produces-gtk-warning#</a>
<pre><code>unset SSH_ASKPASS</code></pre>

Done!
