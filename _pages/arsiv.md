---
layout: page
title: Arşiv
permalink: /arsiv/
image: "archive-bg.jpg"
image_hash: "cc30914dbb849385dc6c0bf877626671"
---
  
<div class="card">
  <div class="card-header bg-dark text-light">
    <p class="card-title float-left">Archives</p>
    <span class="fa fa-archive float-right"></span>
    <div class="clearfix"></div>
  </div>
  <div class="card-body">
  {% assign pg_year  = page.date | date: '%Y' %}
  {% assign pg_month = page.date | date: '%m' %}
  
  {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}
  {% for year in postsByYear %}
      <div class ="archive-year">
        <a href="{{ site.baseurl }}/pages/archives-y#{{ year.name }}">
        {{ year.name }}</a>
      </div>

    {% if pg_year == year.name %}
    <ul class="archive-month">
      {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%m'" %}
      {% assign postsByMonthSorted = postsByMonth | sort: 'name' | reverse %}

      {% for month in postsByMonthSorted %}
      <li class="list-month">
        {% for post in month.items limit:1 %}
        <span class ="archive-month">
          <a href="{{ site.baseurl }}/pages/archives-m#{{ post.date | date: '%Y-%m' }}">
            {{ post.date | date: '%B %Y' }}
          </a></span>
        {% endfor %}

          {% if pg_month == month.name %}
          <ul class="archive-item">
          {% for post in month.items %}
          <li class="list-content">    
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </li>
          {% endfor %}
          </ul>
          {% endif %}
      </li>
      {% endfor %}
    </ul>
    {% endif %}
  {% endfor %}
  </div>
</div> 


