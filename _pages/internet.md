---
layout: page
title: İnternet
permalink: /internet/
image: "internet-bg.jpeg"
image_hash: "a2949bc1310b53ff52b8b97492be4de9"
---

<div class="container">
  <div class="col-lg-12 col-md-14 mx-auto">
  {% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}

  {% for post in site.categories.internet %}
  {% assign m = post.date | date: "%-m" | minus: 1 %}
  {% assign day = post.date | date: "%d" %}
  {% assign month = months[m] %}
  {% assign year = post.date | date: "%Y" %}
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
            {{ day }} {{ month }} {{ year }} tarihinde yayınladı. &middot; {% include read_time.html
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

