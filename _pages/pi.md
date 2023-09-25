---
layout: post
title: Raspberry Pi
permalink: /pi/
image: "raspberrypi-bg.jpg"
image_hash: "80738471d1f9b811754aca914194612e"
---

<div class="container">
  <div class="col-lg-12 col-md-14 mx-auto">

  {% for post in site.categories.pi %}
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
                            {{ page.date | date: "%Y" }} tarihinde yayınladı. &middot; {% include read_time.html
            content=post.content %}
          </p>
  </article>

  <hr>

  {% endfor %}

  <!-- Pager -->
  {% if paginator.total_pages > 1 %}


  {% if paginator.previous_page %}
    <a class="btn btn-primary float-left"
      href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr;
      Yeni<span class="d-none d-md-inline"> Gönderiler</span></a>
  {% endif %}

  {% if paginator.next_page %}
    <a class="btn btn-primary float-right"
      href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Eski<span
        class="d-none d-md-inline"> Gönderiler</span> &rarr;</a>
  {% endif %}

  </div>

  {% endif %}
</div>