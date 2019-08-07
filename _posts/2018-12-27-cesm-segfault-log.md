---
layout: post
title:  "CESM Reading User-defined File got Segmentation Fault"
categories: science
tags: cesm segmentation_fault
author: LZN
---

* content
{:toc}

YT met segmentation fault error when using similar tech as in the [UV Nudging experiment](https://github.com/Novarizark/project/tree/master/SRC_MOD_LIB-2017/SourceMods-Nudging/src.cam) to conduct TP heatforcing experiments.

The segfault comes from the user-added call in `phypkg.F90`:

```fortran
    call infld('tp', fh_tpmask, 'lon', 'lat', 1, pcols, begchunk, endchunk, &
                tpmask, found, grid_map='PHYS')
```

According to [wikipedia](https://en.wikipedia.org/wiki/Segmentation_fault):
>In computing, a segmentation fault (often shortened to segfault) or access violation is a fault, or failure condition, raised by hardware with memory protection, notifying an operating system (OS) **the software has attempted to access a restricted area of memory (a memory access violation)**. 

We believe the error comes from the `infld` reading process. Somehow the program violates the memory access limit, such as using double to read byte, or reading after End-of-File.

However, the original code is copied from a previous F compset run, which was smoothly conducted. So we re-check the ad-hoc part:

```fortran
      !*** MOD START: infld TP mask and heating file
      fh_tpmask=>tpmask_file_get_id()
      call infld('tp', fh_tpmask, 'lon', 'lat', 1, pcols, begchunk, endchunk, &
              tpmask, found, grid_map='PHYS')
```

The thing is that we read the file info (get the file handle) in a function from another module (`cam_initfiles.F90`), and use the pointer to get the function handle in `phypkg.F90`. In ` cam_initfiles.F90` we define:

```fortran
function tpmask_file_get_id()
  type(file_desc_t), pointer :: tpmask_file_get_id
  tpmask_file_get_id => fh_tpmask
end function tpmask_file_get_id

```


**Updated 2018-12-27**

