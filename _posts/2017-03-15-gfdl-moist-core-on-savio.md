---
layout: post
title:  "GFDL MOIST CORE on SAVIO" 
categories: Blog&amp;CMS
tags: Blog&amp;CMS
author: LZN
---

* content
{:toc}

follow the dry core procedure, the first problem we meet is

<strong>#error: unknown fpp directive.</strong>
<p class="p1"><span class="s1">vi /global/home/groups/co_aiolos/models/spec_moist_idl_gfdl_model/src/shared/include/fms_platform.h</span></p>
<p class="p1">and give two space before the first _, done.</p>
<p class="p1">Next, the model was compiled smoothly, when it hit the link process, throw a problem</p>
<p class="p1"><strong><span class="s1">atmos_model.o: In function `atmos_model_init':</span></strong></p>
<p class="p1"><strong><span class="s1">/global/home/groups/co_aiolos/models/spec_moist_idl_gfdl_model/src/atmos_solo/atmos_model.F90:290: undefined reference to `omp_set_num_threads_'</span></strong></p>
<p class="p1">compared  with dry core, comment corresponding lines</p>
<p class="p1"><strong><span class="s1">vi /global/home/groups/co_aiolos/models/spec_moist_idl_gfdl_model/src/atmos_solo/atmos_model.F90</span></strong></p>
<p class="p1">IT WORKS!</p>
<p class="p1"></p>
<p class="p1"></p>