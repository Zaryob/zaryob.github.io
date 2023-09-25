---
layout: post
title: Programlama
permalink: /programlama/
image: "programming-bg.jpg"
image_hash: "14e966d46bb6ece26db3432d8171b1b4"
---

<div class="container">
  <div class="col-lg-12 col-md-14 mx-auto">
  {% for post in site.categories.programlama %}
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
            {{ day }}/{{ month }}/{{ year }} tarihinde yayınladı. &middot; {% include read_time.html
            content=post.content %}
          </p>
  </article>
  <hr>

  {% endfor %}
  <div>

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

