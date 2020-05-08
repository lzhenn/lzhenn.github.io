---
layout: post
title:  "Tensorflow handwriting recognition"
categories: technology
tags: python keras tensorflow tensorflow-gpu 
author: LZN
---

* content
{:toc}

Here we show our first "hello world" programm with tensorflow on chpc GPU node. Envirment:

* GTX 1080 Ti
* Tensorflow1.14-GPU

```python
import tensorflow as tf
import numpy as np

# use mnist data
mnist = tf.keras.datasets.mnist

print('mnist.load_data')
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# normalize data
x_train = tf.keras.utils.normalize(x_train, axis=1)
x_test = tf.keras.utils.normalize(x_test, axis=1)

# sequential network
model = tf.keras.models.Sequential()
# input layer
model.add(tf.keras.layers.Flatten())
# hidden layers
model.add(tf.keras.layers.Dense(128, activation=tf.nn.relu))
model.add(tf.keras.layers.Dense(128, activation=tf.nn.relu))
# output layer
model.add(tf.keras.layers.Dense(10, activation=tf.nn.softmax))

model.compile(optimizer='adam',
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy'])

print('model.fit')
model.fit(x_train,y_train, epochs=3)

val_loss, val_acc = model.evaluate(x_test, y_test)
print(val_loss, val_acc)

model.save('epic_num_reader.model')
new_model=tf.keras.models.load_model('epic_num_reader.model')

predictions = new_model.predict(np.array(x_test))

print(np.argmax(predictions[0]))

```

The execution flow without hardware info:
```bash
Epoch 1/3
2020-05-08 22:14:25.772225: I tensorflow/stream_executor/platform/default/dso_loader.cc:42] Successfully opened dynamic library libcublas.so.10
60000/60000 [==============================] - 6s 93us/sample - loss: 0.2649 - acc: 0.9225
Epoch 2/3
60000/60000 [==============================] - 5s 85us/sample - loss: 0.1056 - acc: 0.9682
Epoch 3/3
60000/60000 [==============================] - 5s 86us/sample - loss: 0.0721 - acc: 0.9769
10000/10000 [==============================] - 1s 59us/sample - loss: 0.0908 - acc: 0.9721
0.09084201904330402 0.9721

7
```

The predicted handwritting figure is "7".

Actually, we found the GPU version of tf in this case is slower than the CPU version. This may due to the scalebility issue.

**Updated 2020-05-08**

