---
layout: post
title:  "Earth.NullSchool Package test" 
categories: technology 
tags: earth_nullschool nodejs
author: LZN
---

* content
{:toc}

After setup node.js, follow the instruction to install earth.nullschool

https://github.com/cambecc/earth

install grib2json

https://github.com/cambecc/grib2json

Steps:

1. set JAVA_HOME

http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/
<pre class=" language-bash"><code class=" language-bash"><span class="token function">export</span> JAVA_HOME<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/usr/libexec/java_home<span class="token variable">)</span></span></code></pre>
<p class="p1">brew install maven</p>
https://github.com/cambecc/grib2json/issues/19

&nbsp;

convert:
<pre><code>grib2json<strong> -d -n -o</strong> current-wind-surface-level-gfs-1.0.json gfs.t00z.pgrb2.1p00.f000</code></pre>
<p class="p1"><span class="s1">Error: Unable to access jarfile /Users/zhenningli/workspace/grib2json/src/bin/../lib/grib2json-*.jar</span></p>
You should use the executable in another folder
<p class="p1"><strong><span class="s1">/Users/zhenningli/workspace/grib2json/target/grib2json-0.8.0-SNAPSHOT/bin</span></strong></p>
