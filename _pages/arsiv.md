---
layout: page
title: Arşiv
permalink: /arsiv/
image: "archive-bg.jpg"
image_hash: "cc30914dbb849385dc6c0bf877626671"
---
  
<div class="col-lg-8 col-md-10 mx-auto">
<section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Bu yılın arşivi</h2>
{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}
{% for year in postsByYear %}

  {% for post in site.posts %}
  {% unless post.next %}

  <ul class="this">
  {% assign year = post.date | date: '%Y' %}
  {% assign n_year = post.next.date | date: '%Y' %}
  {% if year != last_year %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>

  <ul class="past">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% endif %}
  {% endunless %}
  {% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}
  {% assign m = post.date | date: "%-m" | minus: 1 %}
  {% assign day = post.date | date: "%d" %}
  {% assign month = months[m] %}
  {% assign year = post.date | date: "%Y" %}
 <li class="arch-list"> {{ day }} {{ month }} {{ year }} &raquo; <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a> </li>
  {% endfor %}
  </ul>
{% endfor %}
</section>
</div>



