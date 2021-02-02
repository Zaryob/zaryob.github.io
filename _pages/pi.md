---
layout: post
title: Raspberry Pi
permalink: /pi/
image: "raspberrypi-bg.jpg"
image_hash: "80738471d1f9b811754aca914194612e"
---


{% for post in site.posts %}
{% unless post.next %}
{% for cat in post.categories %}
{% if cat == 'pi' %}
<article class="post-preview">
  <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">
    <h3 class="post-title">{{ post.title }}</h3>
    {% if post.subtitle %}
    <h3 class="post-subtitle">{{ post.subtitle }}</h3>
    {% else %}
    <a class="post-subtitle">{{ post.excerpt | strip_html | truncatewords: 30 }}</a>
    {% endif %}
  </a>
  <p class="post-meta">
    {% if post.author %}
    {{ post.author }}
    {% else %}
    {{ site.author }}
    {% endif %}
    tarafından
    {{ post.date | date: '%B %d, %Y' }} tarihinde yayınladı. &middot; {% include read_time.html
    content=post.content %}
  </p>
</article>
<hr>
{% else %}

{% endif %}
{% endfor %}
{% endunless %}
{% endfor %}