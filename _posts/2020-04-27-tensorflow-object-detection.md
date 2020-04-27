---
layout: post
title:  "Object Detection Using Tensorflow Models"
categories: technology
tags: python object_detection tensorflow tensorflow-gpu 
author: LZN
---

* content
{:toc}

Follow [the procedure](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/installation.md) to install the libs and dependencies.

In the last step, testing the installation:
```
Running tests under Python 3.6.10: /users/b145872/project-dir/Anaconda3_2020/envs/tf1.14/bin/python
[ RUN      ] ModelBuilderTest.test_create_experimental_model
[       OK ] ModelBuilderTest.test_create_experimental_model
[ RUN      ] ModelBuilderTest.test_create_faster_rcnn_model_from_config_with_example_miner
[       OK ] ModelBuilderTest.test_create_faster_rcnn_model_from_config_with_example_miner
[ RUN      ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_faster_rcnn_with_matmul
[       OK ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_faster_rcnn_with_matmul
[ RUN      ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_faster_rcnn_without_matmul
[       OK ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_faster_rcnn_without_matmul
[ RUN      ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_mask_rcnn_with_matmul
[       OK ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_mask_rcnn_with_matmul
[ RUN      ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_mask_rcnn_without_matmul
[       OK ] ModelBuilderTest.test_create_faster_rcnn_models_from_config_mask_rcnn_without_matmul
[ RUN      ] ModelBuilderTest.test_create_rfcn_model_from_config
[       OK ] ModelBuilderTest.test_create_rfcn_model_from_config
[ RUN      ] ModelBuilderTest.test_create_ssd_fpn_model_from_config
[       OK ] ModelBuilderTest.test_create_ssd_fpn_model_from_config
[ RUN      ] ModelBuilderTest.test_create_ssd_models_from_config
[       OK ] ModelBuilderTest.test_create_ssd_models_from_config
[ RUN      ] ModelBuilderTest.test_invalid_faster_rcnn_batchnorm_update
[       OK ] ModelBuilderTest.test_invalid_faster_rcnn_batchnorm_update
[ RUN      ] ModelBuilderTest.test_invalid_first_stage_nms_iou_threshold
[       OK ] ModelBuilderTest.test_invalid_first_stage_nms_iou_threshold
[ RUN      ] ModelBuilderTest.test_invalid_model_config_proto
[       OK ] ModelBuilderTest.test_invalid_model_config_proto
[ RUN      ] ModelBuilderTest.test_invalid_second_stage_batch_size
[       OK ] ModelBuilderTest.test_invalid_second_stage_batch_size
[ RUN      ] ModelBuilderTest.test_session
[  SKIPPED ] ModelBuilderTest.test_session
[ RUN      ] ModelBuilderTest.test_unknown_faster_rcnn_feature_extractor
[       OK ] ModelBuilderTest.test_unknown_faster_rcnn_feature_extractor
[ RUN      ] ModelBuilderTest.test_unknown_meta_architecture
[       OK ] ModelBuilderTest.test_unknown_meta_architecture
[ RUN      ] ModelBuilderTest.test_unknown_ssd_feature_extractor
[       OK ] ModelBuilderTest.test_unknown_ssd_feature_extractor
----------------------------------------------------------------------
Ran 17 tests in 0.427s

```

Now we test the object detection script. As the model need to run on GPU cluster, we cannot simply use jupyter notebook.
So convert to plain python code.
``` bash
jupyter nbconvert --to python object_detection_tutorial.ipynb
```

Excecute the python code, got:
``` bash
ModuleNotFoundError: No module named 'object_detection'
```

Compile protobufs and install the object_detection package:

``` bash
cd models/research/
protoc object_detection/protos/*.proto --python_out=.
pip install .
```

Execute again, got:
```bash
tensorflow.python.framework.errors_impl.NotFoundError: models/research/object_detection/data/mscoco_label_map.pbtxt; No such file or directory
```

This is the relative path problem caused by changing directory from ipython notebook.

Execute again, got:

```bash
File "object_detection_tutorial.py", line 98, in <module>
  detection_model = load_model(model_name)
File "object_detection_tutorial.py", line 62, in load_model
  model = tf.saved_model.load(str(model_dir), None)
File "/users/b145872/project-dir/Anaconda3_2020/envs/tf1.14/lib/python3.6/site-packages/tensorflow/python/util/deprecation.py", line 324, in new_func
  return func(*args, **kwargs)
TypeError: load() missing 1 required positional argument: 'export_dir'
```

[See this.] (https://stackoverflow.com/questions/58683841/problem-with-running-object-detection-tutorial-typeerror-load-missing-2-requi)

Version Change:
``` python
model = tf.saved_model.load(export_dir=str(model_dir))
# change to:
model = tf.saved_model.load_v2(export_dir=str(model_dir),tags=None)
```


**Updated 2020-04-27**

