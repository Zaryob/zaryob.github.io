---
layout: page
title: Photography
permalink: /blog/photography
image: linux.png
imaghash: c4a1969076cd5ab7920084cdd8398de8
---

{% for post in site.posts %}
{% assign groups = post.group %}
{% for group in groups %}
  {% if group == 'photography' %}
  <div class="list">
  <div class="post-index">
    <div class="post-image">
        <a href="{{post.url}}">

              <i class="fa fa-{{post.icon}} fa-fw"></i>

        </a>
    </div>

    <div class="post-content">
    {% if post.image %}
        <img width="100%" height="100%" src="/assets/img/blog/{{post.image}}" class="post-image" alt="Picture of a happy monkey">
        {% else %}
        <svg class="post-image" width="100%" height="180" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Önizleme Yok</text></svg>
        {% endif %}
        <p class="post-index-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></p>
        <p>

                <span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 90 }}</span>

        </p>
        <p class="post-detail">Son güncellenme
          {% assign m = post.date | date: "%-m" %}
            {{ post.date | date: "%-d" }}
            {% case m %}
              {% when '1' %}Ocak
              {% when '2' %}Şubat
              {% when '3' %}Mart
              {% when '4' %}Nisan
              {% when '5' %}Mayıs
              {% when '6' %}Haziran
              {% when '7' %}Temmuz
              {% when '8' %}Ağustos
              {% when '9' %}Eylül
              {% when '10' %}Ekim
              {% when '11' %}Kasım
              {% when '12' %}Aralık
            {% endcase %}
          {{ post.date | date: '%Y' }}

             <a href="{{site.baseurl}}{{post.url}}/index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a>
        </p>
    </div>
  </div>
  </div>
{% else %}

{% endif %}

{% endfor %}
{% endfor %}
