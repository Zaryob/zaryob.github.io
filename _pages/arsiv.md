---
layout: page
title: Arşiv
permalink: /arsiv/
image: "archive-bg.jpg"
image_hash: "cc30914dbb849385dc6c0bf877626671"
---
  
<div class="col-lg-8 col-md-10 mx-auto">
<section id="archive">

<ul class="this">
{% assign cur_year = site.date | date: '%Y' %}
{% assign last_p_year = site.date | date: '%Y' %}
{% for post in site.posts %}
  {% unless post.next %}


  {% assign post_year = post.date | date: '%Y' %}
  {% if post_year == cur_year %}
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Bu yılın arşivi</h2>
  {% else %}
  {% if post_year != last_p_year %}
</ul> 
<ul class="past-{{post_year}}">
<h2>{{ post.date | date: '%Y' }}</h2>
  {% assign last_p_year = post.date | date: '%Y' %}

  {% endif %}
  {% endif %}


  {% endunless %}
  {% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}
  {% assign m = post.date | date: "%-m" | minus: 1 %}
  {% assign dd = post.date | date: "%d" %}
  {% assign mm = months[m] %}
  {% assign yy = post.date | date: "%Y" %}
  <li class="arch-list"> {{ dd }} {{ mm }} {{ yy }} &raquo; <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a> </li>
{% endfor %}
</ul>
</section>
</div>