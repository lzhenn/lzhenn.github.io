---
layout: post
title:  "Object Detection Using Tensorflow Models"
categories: technology
tags: python object_detection tensorflow tensorflow-gpu 
author: LZN
---

* content
{:toc}

Try to construct our own training and test data! ![Ref](https://blog.csdn.net/zong596568821xp/article/details/82015126)

In generating TFrecords, using
```bash
python3 generate_tfrecord.py --csv_input=data/train_labels.csv --output_path=data/train.record --image_dir=xxx
```

**Updated 2020-05-10**

