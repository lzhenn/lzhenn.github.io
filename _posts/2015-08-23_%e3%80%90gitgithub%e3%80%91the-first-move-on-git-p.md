---
layout: post
title:  "【git&github】the first move on git push" 
categories: Git&amp;GitHub
tags: Git&amp;GitHub
author: LZN
---

* content
{:toc}

Finally we come to the deadline of data science course project on coursera. In fact, most of the questions are very easy to answer or cope with, except one aiming at try the git push. I got some problems when test this:

As the question requests, I created a file named "HelloWorld.md" and write something in it. When I type the command
<pre>&gt;git push</pre>
Waiting for about 1 min, an error occors:

<strong>error:src refspec master does not match any</strong>

Then I found this was because no file in the dir yet. The solution is as follow:
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="gutter"></td>
<td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="shell functions">touch</code> <code class="shell plain">README</code></div>
<div class="line number2 index1 alt1"><code class="shell plain">git add README </code></div>
<div class="line number3 index2 alt2"><code class="shell plain">git commit -m </code><code class="shell string">'first commit'</code></div>
<div class="line number4 index3 alt1"><code class="shell plain">git push origin master</code></div>
</div></td>
</tr>
</tbody>
</table>
Of course, we don't need README, then I trid git add, commit and push commands, it works!

Through, I am not really understand the exact reason.

Referrence:

http://www.open-open.com/lib/view/open1366080269265.html#_label0