---
layout: page
title: Arşiv
subtitle: Geçmişe doğru neler yazdığım...
permalink: /arsiv/
image: "archive-bg.jpg"
image_hash: "cc30914dbb849385dc6c0bf877626671"
---
  
<div class="col-lg-8 col-md-10 mx-auto">
<section id="archive">
{% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}
{% assign grouped_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in grouped_by_year %}
  <h1>{{ year.name }}</h1>
  
  {% assign grouped_by_month = year.items | group_by_exp: "post", "post.date | date: '%-m' | minus: 1 " %}
  <ul>
  {% for month in grouped_by_month %}
    <h2>{{ months[month.name] }}</h2>
    <ul>
      {% for post in month.items %}
        {% assign m = post.date | date: "%-m" | minus: 1 %}
        {% assign dd = post.date | date: "%d" %}
        {% assign mm = months[m] %}
        {% assign yy = post.date | date: "%Y" %}
        <li class="arch-list"> {{ dd }} {{ mm }} {{ yy }} &raquo; <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a> </li>
      {% endfor %}
    </ul>
  {% endfor %}
  </ul>
{% endfor %}
</section>
</div>