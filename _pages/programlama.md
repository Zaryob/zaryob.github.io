---
layout: post
title: Programlama
permalink: /programlama/
image: "programming-bg.jpg"
image_hash: "14e966d46bb6ece26db3432d8171b1b4"
---



{% for post in site.posts %}

  {% unless post.next %}
  {% if post.group == 'programlama' %}
  <div class="list">
  <div class="post-index">
    <div class="post-image">
        <a href="{{post.url}}">

              <i class="fa fa-{{post.icon}} fa-fw"></i>

        </a>
    </div>
    <div class="post-content">
        <p class="post-index-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></p>
        <p>

                <span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 90 }}</span>

        </p>
        <p class="post-detail">{{ post.date | date: '%B %d, %Y' }}

             <a href="{{site.baseurl}}{{post.url}}/index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a>
        </p>
    </div>
  </div>
  </div>
  {% else %}

  {% endif %}
  {% endunless %}
{% endfor %}