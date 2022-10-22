---
title: "Hello world!"
date: "2022-10-08T13:34:53+01:00"
template: "post"
isML: true
slug: "/hello-world/"
img: "https://localhost/gatsby-blanla/php-backend/media/20221007_125544-scaled-1.jpg"
category: "Python"
tags:
 - "Javascript"
 - "Performance"
 - "Python"
 - "React"
description: This is my first blog. Make it count.
prev: "/keras-cnn-tutorial/"
next: "/intro-to-rnns/"
---
## This is my first blog
So exited to let you know this is my first blog here

![](./media-link/keras-posts/keras-logo.png)

[Keras](https://keras.io/) is a simple-to-use but powerful deep learning library for Python. In this post, we'll build a simple [Recurrent Neural Network](/blog/intro-to-rnns/) (RNN) and train it to solve a real problem with Keras.

This post is intended for **complete beginners to Keras** but does assume a **basic background knowledge of RNNs**. My [introduction to Recurrent Neural Networks](/blog/intro-to-rnns/) covers everything you need to know (and more) for this post - read that first if necessary.

Here we go!

> Just want the code? The [full source code](#the-full-code) is at the end.

## The Problem: Classifying Movie Reviews

We're going to tackle a classic introductory [Natural Language Processing](/tag/natural-language-processing/) (NLP) problem: doing sentiment analysis on [IMDb](https://www.imdb.com/) movie reviews from Stanford AI Lab's [Large Movie Review Dataset](https://ai.stanford.edu/~amaas/data/sentiment/).

Here are two samples from the dataset:

| Excerpt from review | Sentiment |
| --- | --- |
| Liked Stanley & Iris very much. Acting was very good. Story had a unique and interesting arrangement… | Positive&nbsp;👍 |
| This is the worst thing the TMNT franchise has ever spawned. I was a kid when this came out and I still thought it was deuce… | Negative&nbsp;👎 |

```python
from tensorflow.keras.preprocessing import text_dataset_from_directory
from tensorflow.strings import regex_replace

def prepareData(dir):
  data = text_dataset_from_directory(dir)
  return data.map(
    lambda text, label: (regex_replace(text, '<br />', ' '), label),
  )

train_data = prepareData('./train')
test_data = prepareData('./test')
```
  
<br/>  