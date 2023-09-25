---
layout: post
title: Pixel Art
permalink: /pixelart/
image: "pixelart.jpg"
image_hash: "934bee399ce669974100a5d559925157"
---

<div class="container">
  <div class="col-lg-12 col-md-14 mx-auto">

  {% for post in site.categories.pixelart %}
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

  {% endfor %}
  </div>

  <!-- Pager -->
  {% if paginator.total_pages > 1 %}
  
  <div class="clearfix">

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

