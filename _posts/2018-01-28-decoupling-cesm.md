---
layout: post
title:  "CESM air-sea decoupling测试"
categories: science
tags: cesm decoupling
author: LZN
---

* content
{:toc}

在之前MM高原试验基础上，应黄老师要求增加北大西洋SST restoring的试验。因通量计算在海洋模块进行，所以应该在海洋模块计算之前修改并update。

查到论坛[帖子](https://bb.cgd.ucar.edu/how-prescribe-sst-annual-cycle-cesm-pop2)，以及HC师兄提供的code.

看帖子似乎有namelist变量控制。找到一个NCAR的github主页[内容](https://ncar.github.io/POP/doc/build/html/users_guide/running-forcing-options.html),不过是针对只转海洋模式的情况。

经查HC师兄的code，发现思路比较简单，就是在海洋模块每一次积分step后，用人工读入的文件做restoring。不过貌似还有可以优化的地方，读文件模块应该可以放到其他module，避免模式每一积分步都在读写。

测试编译一次通过。Nice.关键是拿到对应的文件，并进一步优化一下程序流程。

POP的history文件比较诡异，不仅有.h文件，还有.h.nday1文件。

在faq找到了[关于nday1的说明](http://www.cesm.ucar.edu/models/cesm1.0/pop2/doc/faq/#tavg_files)

> By default, the daily averaged fields are bundled into monthly timeseries files. These files are relatively small, because they contain only a handful of 2D fields. Out of the box, these fields are: Surface Potential Temperature (SST), SST2, Mixed-Layer Depth, and Maximum Mixed-Layer Depth.

这个文件在之前run ctrl的时候并没有存下，那么接下来的问题就是月平均文件是否足以提供full layer海温，包括SST呢？

瞄了一下h文件，发现第一层代表10m深的水，那么应该是没问题的了，直接restore 10m水深。

**Updated 2018-01-28**

继续看，存储位温的变量是TRACER，但这个变量比较诡异，是一个6维的数据，0 1 2 容易理解，是经纬度，和层次数，第1层为10m水深。3不知道是什么，4是previous/current时间帧，最后一维是iblock用于MPI分片。
问题就是神奇的第3维。

检查了下程序，发现第3维的循环控制变量bound为nt，step_mod.F90内有以下语句：
``` fortran
   SBUFF_SUM(:,:,iblock,index_o2x_So_t ) =   &
      SBUFF_SUM(:,:,iblock,index_o2x_So_t ) + delt*  &
                                   TRACER(:,:,1,1,curtime,iblock)

   SBUFF_SUM(:,:,iblock,index_o2x_So_s ) =   &
      SBUFF_SUM(:,:,iblock,index_o2x_So_s ) + delt*  &
                                   TRACER(:,:,1,2,curtime,iblock)

```
进一步查找，发现prognostic.F90有以下定义
``` fortran

   type (tracer_field), dimension(nt) :: &
      tracer_d   ! descriptors for each tracer

!......
      tracer_d(1)%short_name = 'TEMP'
      tracer_d(1)%long_name  = 'Potential temperature'
      tracer_d(1)%units      = 'degC'
      tracer_d(1)%tend_units = 'degC/s'
      tracer_d(1)%flux_units = 'degC cm/s'
      tracer_d(1)%scale_factor = 1.0_rtavg

      tracer_d(2)%short_name = 'SALT'
      tracer_d(2)%long_name  = 'Salinity'
      tracer_d(2)%units      = 'msu (g/g)'
      tracer_d(2)%tend_units = 'gram/kilogram/s'
      tracer_d(2)%flux_units = 'gram/kilogram cm/s'
      tracer_d(2)%scale_factor = 1000.0_rtavg

```
明白啦，1是位温，2是盐度。所以修改思路就很明确了：
1. 读入SST文件和weight文件
2. 在每一个step后对SST进行overwrite处理

逐一解决！首先看怎么找个合适的地方把文件送进来。这种任务当然在模式initial的时候干。

以read为关键词搜索，锁定文件IO位置。发现不少东西，比如pop设置了专门的forcing模块用于外强迫驱动。但因为forcing模块只有在单独海洋的时候才调用,为保证代码具有较高的可复用性，安全起见，我们还是首先考虑在initial module找读取外强迫场的语句。
然后呢，在initial.F90发现了这么一段可爱的内容：
``` fortran
!-----------------------------------------------------------------------
!
!  read full 3-d t,s from input file
!
!-----------------------------------------------------------------------

   case ('ccsm_startup', 'file')
      first_step = .true.

      if (my_task == master_task) then
         write(stdout,'(a31,a)') 'Initial 3-d T,S read from file:', &
                                 trim(init_ts_file)
         call POP_IOUnitsFlush(POP_stdout) ; call POP_IOUnitsFlush(stdout)
      endif

      allocate(TEMP_DATA(nx_block,ny_block,km,max_blocks_clinic))

      in_file = construct_file(init_ts_file_fmt,             &
                               full_name=trim(init_ts_file), &
                               record_length = rec_type_dbl, &
                               recl_words=nx_global*ny_global)
      call data_set(in_file,'open_read')

      i_dim = construct_io_dim('i',nx_global)
      j_dim = construct_io_dim('j',ny_global)
      k_dim = construct_io_dim('k',km)

      io_temp = construct_io_field('TEMPERATURE', &
                 dim1=i_dim, dim2=j_dim, dim3=k_dim,        &
                 field_loc = field_loc_center,    &
                 field_type = field_type_scalar,  &
                 d3d_array=TEMP_DATA)
      io_salt = construct_io_field('SALINITY',    &
                 dim1=i_dim, dim2=j_dim, dim3=k_dim,        &
                 field_loc = field_loc_center,    &
                 field_type = field_type_scalar,  &
                 d3d_array=TEMP_DATA)

      call data_set(in_file,'define',io_temp)
      call data_set(in_file,'define',io_salt)

      call data_set(in_file,'read'  ,io_temp)
      do iblock=1,nblocks_clinic
         TRACER(:,:,:,1,curtime,iblock) = TEMP_DATA(:,:,:,iblock)
      end do
      call data_set(in_file,'read'  ,io_salt)
      do iblock=1,nblocks_clinic
         TRACER(:,:,:,2,curtime,iblock) = TEMP_DATA(:,:,:,iblock)
      end do

      call destroy_io_field(io_temp)
      call destroy_io_field(io_salt)

      deallocate(TEMP_DATA)

      call data_set(in_file,'close')
      call destroy_file(in_file)

      if (my_task == master_task) then
         write(stdout,blank_fmt)
         write(stdout,'(a12,a)') ' file read: ', trim(init_ts_file)
         call POP_IOUnitsFlush(POP_stdout) ; call POP_IOUnitsFlush(stdout)
      endif

```
嘿嘿，和HC师兄的程序对比，如出一辙。那么我们仅仅需要在某一个合适的地方给出读取forcing场的语句就可以了。注意initial读取的时候是没有时间帧的，所以我们需要读入时间帧，并且把变量传参到step_mod或者main driver程序中。
接下来我们看如何解决这两个问题。时间问题容易解决，HC师兄的程序里给出了，直接通过dim来指定时间维即可，关键是construct_io_field这个语句，查下这个语句的定义。在io_types.F90:
``` fortran
 function construct_io_field (  & 
       short_name,       &    
       dim1, dim2,       &    
       dim3,             &    
       time_dim,         &    
       long_name,        &    
       units,            &    
       coordinates,      &    
       grid_loc,         &    
       valid_range,      &    
       field_loc,        &    
       field_id,         &    
       field_type,       &    
       i0d_array,        &    
       i1d_array,        &    
       i2d_array,        &    
       i3d_array,        &    
       r0d_array,        &    
       r1d_array,        &    
       r2d_array,        &    
       r3d_array,        &    
       d0d_array,        &    
       d1d_array,        &    
       d2d_array,        &    
       d3d_array)        &    
    result (descriptor)
```
dim123时间都给考虑好了，意不意外，惊不惊喜？依葫芦画瓢往里送就行了。

几个神奇的参数：

``` fortran
 character(4), intent(in), optional :: &
    grid_loc                  ! position of field in staggered grid
 
 integer (i4), intent(in), optional :: &  ! for ghost cell updates
    field_loc,               &! staggering location
    field_type,              &! field type (scalar,vector,angle)
    field_id                  ! previously defined id

```
首先的神奇之处是grid_loc，这什么鬼，虽然模板里给了3111代号，但是毕竟好奇，搜索下发现tavg.F90有如下语句：
``` fortran
      if (present(grid_loc)) then 
         !*** try to decode field location from grid_loc
         if (grid_loc(2:2) == '1' .and. grid_loc(3:3) == '1') then 
            tavg_field%field_loc = field_loc_center
         else if (grid_loc(2:2) == '2' .and. grid_loc(3:3) == '2') then 
            tavg_field%field_loc = field_loc_NEcorner
         else if (grid_loc(2:2) == '1' .and. grid_loc(3:3) == '2') then 
            tavg_field%field_loc = field_loc_Nface
         else if (grid_loc(2:2) == '2' .and. grid_loc(3:3) == '1') then 
            tavg_field%field_loc = field_loc_Eface
         endif
      endif
```
东西南北？看起来是位于格点什么位置的指示。还有那些r2d_array, d2d_array代表的是数据精度real,double之类（居然没写注释！也是醉了）
查pop log发现了这个东西
```
                                             2                                        30   
                                          ________                                    31   
                      y ^                |        |                                   32   
                        |               3|   ijk  |1                                  33   
                        +--->            |        |                                   34   
                            x            |________|                                   35   
                                             4                                        36   
```
居然有这么可爱的图示……

**Updated 2018-01-29**

下面我们测试在main driver函数ocn_comp_mct.F90里读入一个既存的NC文件。为了效率，当然不能在run的时候每一步都读入，仅仅在initial的subroutine读入。initial和run都在ocn_mct的大module中，因此变量彼此应当可见互用。

写的时候发现一堆全局变量满天飞，POP的软件工程做得真是醉醉的……

增加namelist变量需要让bld namelist程序认识，根据[这个帖子操作](https://bb.cgd.ucar.edu/how-add-new-namelist-variables)

增加两个subroutine，一个负责在initial的时候读取forcing文件，另一个负责在pop积分步后给出reset。

写好后发现一个大坑，由于IO module默认没有对3D var+时间的变量进行处理，如果手动增加这一功能需要改动非常多的模块，只能退而求其次，仅仅对第一层temp进行处理了。具体代码：

``` fortran
! ***LZN: MOD START***
 subroutine ptempforcing_read
   integer (i4) ::  nml_error
   integer (i4) :: decoupling_days=30

   character (char_len) :: &
   ptempf_file_name, &
   ptempf_file_fmt
   type (datafile) :: &
   ptempf_file
   type (io_field_desc) :: &
   io_temp, io_ce
   type (io_dim) :: &
   t_dim, i_dim, j_dim, k_dim
   namelist /ptempf_forcing_nml/ ptempf_file_name, ptempf_file_fmt
   
   allocate(TEMP_DATA(nx_block, ny_block, decoupling_days, max_blocks_clinic))
   allocate(WGT_DATA(nx_block, ny_block, decoupling_days, max_blocks_clinic))
   WGT_DATA=1.0


   ! Read forcing file path from namelist file
   if (my_task == master_task) then
      open (nml_in, file=nml_filename, status='old', iostat=nml_error)
      if (nml_error /= 0) then
         nml_error = -1
      else
         nml_error =  1
      endif
      do while (nml_error > 0)
         read(nml_in, nml=ptempf_forcing_nml,iostat=nml_error)
      end do 
      if (nml_error == 0) close(nml_in)
   end if
   ! broadcast the scalar to all MPI processors
   call broadcast_scalar(ptempf_file_name, master_task)
   call broadcast_scalar(ptempf_file_fmt, master_task)
      
   ptempf_file = construct_file(ptempf_file_fmt, &
               full_name=trim(ptempf_file_name),&
               record_length=rec_type_real,&
               recl_words=nx_global*ny_global)
   call data_set(ptempf_file, 'open_read')

   i_dim = construct_io_dim('i',nx_global)
   j_dim = construct_io_dim('j',ny_global)
   t_dim = construct_io_dim('time',decoupling_days)

   io_temp = construct_io_field('TEMP',dim1=i_dim,dim2=j_dim,dim3=t_dim,&
               long_name='Potential Temperature', units='degC', grid_loc='3111',&
               field_loc = field_loc_center, &
               field_type = field_type_scalar, r3d_array = TEMP_DATA)
   call data_set(ptempf_file, 'define', io_temp)
   call data_set(ptempf_file, 'read', io_temp)

!   ru_data = construct_io_field('ru', dim1=i_dim, dim2=j_dim,&
!             long_name='nudging coefficients', units='1',&
!             grid_loc=' 3111', field_loc = field_loc_center,&
!             field_type = field_type_scalar, r2d_array = ru)
!   call data_set(sstf_file, 'define', ru_data)
!   call data_set(sstf_file, 'read', ru_data)

   call data_set(ptempf_file, 'close')
   call destroy_io_field(io_temp)
!   call destroy_io_field(ru_data)
   call destroy_file(ptempf_file)

 end subroutine ptempforcing_read
 
 ! fixing the SST!
 subroutine ptempforcing_fix
    integer (int_kind) ::  iblock
    ! debug info
    write(stdout,*) iday_of_year, TEMP_DATA(50,50,iday_of_year,:) 


    ! Operation: override the runtime tracer(temp)
    !$OMP PARALLEL DO PRIVATE(iblock)
    do iblock = 1, nblocks_clinic
       TRACER(:,:,1,1,curtime,iblock) =  &
       TEMP_DATA(:,:,iday_of_year,iblock)*WGT_DATA(:,:,iday_of_year, iblock)+ &
       TRACER(:,:,1,1,curtime,iblock)*(1-WGT_DATA(:,:,iday_of_year, iblock))
    end do
    !$OMP END PARALLEL DO
 end subroutine ptempforcing_fix
 ! ***LZN: MOD END***
```
经测试一个月积分没有问题。


**Updated 2018-01-29**
