---
layout: page
title: Operating Systems
permalink: /blog/opsys
image: security.jpg
imagehash: 94eea21cbb146cfaf5fc802ee0e8911b
---


{% for post in site.posts %}
{% assign groups = post.group %}
{% for group in groups %}
  {% if group == 'operating_systems' %}
  <div class="col-md-6 col-lg-4">
      <div class="card border-0">
        <a href="{{site.baseurl}}{{post.url}}">
          {% if post.image %}
          <div class="image" style="background-image:url(&quot;/assets/img/blog/{{post.image}}?h={{post.imagehash}}&quot;);"></div>

          {% else %}

          <img class="card-img-top scale-on-hover" src="/assets/img/nature/image1.jpg?h=d679710e5ce8e4c2db35fde74a78a924" alt="Post Image">

          {% endif %}
        </a>
          <div class="card-body">
              <h6><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></h6>
              <p class="text-muted card-text">{{ post.content | strip_html | strip_newlines | truncate: 150 }}</p>
          </div>
      </div>
  </div>
{% else %}

{% endif %}

{% endfor %}
{% endfor %}
