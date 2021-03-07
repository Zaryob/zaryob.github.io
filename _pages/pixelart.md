---
layout: post
title: Pixel Art
permalink: /pixelart/
image: "pixelart.jpg"
image_hash: "934bee399ce669974100a5d559925157"
---



{% for post in site.posts %}
{% unless post.next %}
{% for cat in post.categories %}
{% if cat == 'pixelart' %}
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
    {% assign m = page.date | date: "%-m" %}
    {{ page.date | date: "%-d" }}
    {% case m %}
      {% when '1' %}Ocak
      {% when '2' %}Şubat
      {% when '3' %}Mart
      {% when '4' %}Nisam
      {% when '5' %}Mayıs
      {% when '6' %}Haziran
      {% when '7' %}Temmuz
      {% when '8' %}Ağustos
      {% when '9' %}Eylül
      {% when '10' %}Ekim
      {% when '11' %}Kasım
      {% when '12' %}Aralık
    {% endcase %}
    {{ page.date | date: "%Y" }}
    tarihinde yayınladı. &middot; {% include read_time.html
    content=post.content %}
  </p>
</article>
<hr>
{% else %}
{% endif %}
{% endfor %}
{% endunless %}
{% endfor %}