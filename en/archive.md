---
description: "Archive — articles and resources by Süleyman Poyraz."
layout: page
title: Archive
subtitle: Articles from across the years
permalink: /en/arsiv/
image: archive-bg.jpg
image_hash: cc30914dbb849385dc6c0bf877626671
lang: en
translation_key: page-arsiv
translation_of: /arsiv/
translated: '2026-11-03'
---

<div class="col-lg-8 col-md-10 mx-auto"><section id="archive">
{% assign months = "January|February|March|April|May|June|July|August|September|October|November|December" | split: "|" %}
{% assign grouped_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in grouped_by_year %}<h2>{{ year.name }}</h2>
{% assign grouped_by_month = year.items | group_by_exp: "post", "post.date | date: '%-m' | minus: 1" %}
{% for month in grouped_by_month %}<h3>{{ months[month.name] }}</h3><ul>
{% for post in month.items %}{% assign m = post.date | date: "%-m" | minus: 1 %}
<li class="arch-list">{{ post.date | date: "%d" }} {{ months[m] }} {{ post.date | date: "%Y" }} » <a href="{{ post.url | relative_url }}" lang="{{ post.lang | default: 'tr' }}">{{ post.title }}</a> <small>[{% if post.lang == 'en' %}EN{% else %}TR{% endif %}]</small></li>
{% endfor %}</ul>{% endfor %}{% endfor %}
</section></div>
