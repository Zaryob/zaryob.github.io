---
layout: post
title: Galeri
permalink: /galeri/
image: "galeri_bg.jpg"
image_hash: "0387b4fbf5153d1421b68cf671247105"
---


<div class="container">
        <div class="intro">
          <p class="text-center">Boş zamanlarımda amatör fotoğrafçılık ile ilgilenmeye çalışıyorum. Sanat anlayışım ise en çirkine ulaşmayı hedefliyor. İşte en çirkin fotoğraflarımdan oluşan bir seçme galeri.</p>
        </div>
        <section class="portfolio-block projects compact-grid">
            <div class="row no-gutters">
            {% for image in site.static_files %}
              {% if image.path contains 'galeri' %}
                <div class="col-md-6 col-lg-4 item zoom-on-hover">
                    <a href="{{ site.url }}{{ image.path }}">
                        <img class="img-fluid image" src="{{ site.url }}{{ image.path }}">
                        <!--span class="description">
                            <span class="description-heading">Lorem Ipsum</span>
                            <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span-->
                    </a>
                </div>
              {% endif %}
            {% endfor %}
            </div>
          </section>
    
        
</div>