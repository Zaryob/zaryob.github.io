---
layout: post
title: Elektronik
permalink: /elektronik/
image: "electronik-bg.jpg"
image_hash: "fd7fff582b02262c7e3377b981048d36"
---



{% for post in site.posts %}

  {% unless post.next %}
  {% if post.group == 'elektronik' %}
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