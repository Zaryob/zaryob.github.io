---
layout: post
title: Programlama ve Algoritmalar
permalink: /prog/
image: coding.jpg
imagehash: 07cf2ddcecae877d4cd76bedda767a54
---


{% for post in site.posts %}
  {% if post.group == 'programlama' %}
    <div class="card">
      <div class="col-md-16 col-lg-12">
        {% if post.image %}
        <img src="/assets/img/{{post.image}}" class="card-img-top" alt="Picture of a happy monkey">
        {% else %}
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Önizleme Yok</text></svg>
        {% endif %}
        <div class="card-block">
          <h4 class="text-center card-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></h4>
          <p class="text-center card-text"><span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 150 }}</span></p>
          <p class="card-text">
          <small class="text-muted"> Son güncellenme
            {% assign m = post.date | date: "%-m" %}
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
            {{ post.date | date: '%Y' }}
          </small>
          </p>
        </div>
      </div>
    </div>
  {% else %}

  {% endif %}
{% endfor %}
