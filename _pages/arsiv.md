---
layout: post
title: Arşiv
permalink: /arsiv/
image: archive.jpg
imagehash: dd33489001ab206a53750f16fdf35d19
---

<section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Bu yılın arşivi</h2>
{% for post in site.posts %}


  <ul class="this">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>

  <ul class="past">
  {% endif %}

  <li class="arch-list">
    <img src="/assets/img/{{post.image}}" class="card-img-top" alt="Picture of a happy monkey">
    <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>&nbsp;
    <time>{% assign m = post.date | date: "%-m" %}
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
      {{ post.date | date: '%Y' }}</time>
  </li>
{% endfor %}
  </ul>
</section>
