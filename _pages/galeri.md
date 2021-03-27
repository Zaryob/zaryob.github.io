---
layout: post
title: Galeri
permalink: /galeri/
image: "galeri_bg.jpg"
image_hash: "0387b4fbf5153d1421b68cf671247105"
---

<main class="page gallery-page">
    <section class="clean-gallery dark">
        <div class="container">
            <div class="block-heading">
                <p>Boş zamanlarımda amatör fotoğrafçılık ile ilgilenmeye çalışıyorum. Sanat anlayışım ise en çirkine ulaşmayı hedefliyor. İşte en çirkin fotoğraflarımdan oluşan bir seçme galeri.</p>
            </div>
            <div class="row">
            {% for image in site.static_files %}
              {% if image.path contains 'galeri' %}
              <div class="col-md-6 col-lg-4 item"><a class="lightbox" href="{{ site.baseurl }}{{ image.path }}"><img class="img-thumbnail img-fluid image" src="{{ site.baseurl }}{{ image.path }}" /></a></div>
              {% endif %}
            {% endfor %}
            </div>
        </div>
    </section>
</main>
