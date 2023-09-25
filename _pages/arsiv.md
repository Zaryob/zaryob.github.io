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
{% for post in site.posts %}
  {% unless post.next %}

  <ul class="this">
  {% assign cur_year = post.date | date: '%Y' %}

  {% if cur_year != last_year %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>

  <ul class="past">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% endif %}
  {% endunless %}
 <li class="arch-list">
    <span>{% assign m = page.date | date: "%-m" %}
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
                            {{ page.date | date: "%Y" }}</span> &raquo; <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a> </li>
{% endfor %}
  </ul>
</section>
</div>



