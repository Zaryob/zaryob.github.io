---
layout: post
title: Programlama ve Algoritmalar
permalink: /prog/
image: coding.jpg
imagehash: 07cf2ddcecae877d4cd76bedda767a54
---


{% for post in site.posts %}
  {% if post.group == 'programlama' %}
  <div class="container">
       <div class="row">
           <div class="col-md-10 col-lg-8">
             <div class="post-index">
             {% for post in site.posts %}
               <div class="col-md-6">
                 <div class="card">
                  <img src="/assets/img/{{post.image}}" class="card-img-top" alt="Picture of a happy monkey">
                    <div class="card-body">
                       <h5 class="card-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></h5>
     <p class="card-text"><span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 120 }}</span></p>
                    </div>
                 </div>
               </div>
             {% endfor %}
             </div>
           </div>
       </div>
   </div>
  {% else %}

  {% endif %}

{% endfor %}
