---
layout: page
title: Raspberry Pi
permalink: /pi/
image: "raspberrypi-bg.jpg"
image_hash: "80738471d1f9b811754aca914194612e"
---

<style>

      .blog-post {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          border-bottom: 1px solid #ddd;
          padding-bottom: 1rem;
      }
      .blog-post img {
          max-width: 200px;
          margin-right: 1rem;
          border-radius: 8px;
          background-color: #ccc; /* Default gray color */
      }
      .blog-post .details {
          flex: 1;
      }
      .blog-post .details h5 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
      }
      .blog-post .details p {
          margin: 0.5rem 0;
      }
      .blog-post .meta {
          font-size: 0.9rem;
          color: #888;
      }
      .blog-post img {
          width: 150px; /* Set a consistent width */
          height: 150px; /* Set a consistent height */
          object-fit: cover; /* Ensures the image fits well without distortion */
          margin-right: 1rem; /* Spacing between the image and text */
          border-radius: 8px; /* Optional: Rounds the corners */
      }

</style>
<div class="col-md-9 col-12">
  {% assign months = "Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık" | split: "|" %}

  {% for post in site.categories.pi %}
  {% assign m = post.date | date: "%-m" | minus: 1 %}
  {% assign day = post.date | date: "%d" %}
  {% assign month = months[m] %}
  {% assign year = post.date | date: "%Y" %}

  <div class="blog-post">
      <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}"><img src="{{site.baseurl}}/assets/img/pages/{{post.image}}?h={{post.image_hash}}" onerror="this.style.backgroundColor='#ccc'; this.style.objectFit='contain'; this.src='';"></a>
      <div class="details">
          <h5><a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">{{ post.title }}</a></h5>
          <p class="meta">  {% if post.author %}
            {{ post.author }}
            {% else %}
            {{ site.author }}
            {% endif %} | {{ month }} {{ day }}, {{ year }}  | {% include read_time.html content=post.content %}</p>

            {% if post.subtitle %}
            <p class="post-subtitle">{{ post.subtitle }}</p>
            {% else %}
            <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
            {% endif %}
          
      </div>
  </div>
  {% endfor %}

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

