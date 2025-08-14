---
layout: default
title: Projeler
permalink: /projeler/
description: "Süleyman Poyraz'ın açık kaynak yazılım ve teknik belgeleme projeleri: Inary, iksemel ve ZFS Kitabı."
---

<p class="page-intro">Açık kaynakta geliştirdiğim ve bakımını üstlendiğim işlerden bir seçki. Kod, teknik kararlar ve belgeler doğrudan depolarında incelenebilir.</p>

{% for project in site.data.projects %}
<section class="project-detail" id="{{ project.name | slugify }}" aria-labelledby="project-{{ forloop.index }}">
  <p class="project-detail__meta">{{ project.type }}</p>
  <h2 id="project-{{ forloop.index }}">{{ project.name }}</h2>
  <p>{{ project.summary }}</p>
  <dl>
    <dt>İhtiyaç</dt><dd>{{ project.problem }}</dd>
    <dt>Katkım</dt><dd>{{ project.contribution }}</dd>
    <dt>Yaklaşım</dt><dd>{{ project.approach }}</dd>
    <dt>Görülebilir çıktı</dt><dd>{{ project.result }}</dd>
  </dl>
  <p><a href="{% if project.docs %}{{ project.docs }}{% else %}{{ project.repo }}{% endif %}">{{ project.link_text }} <span aria-hidden="true">↗</span></a> · <a href="{{ project.repo }}">GitHub deposu <span aria-hidden="true">↗</span></a></p>
</section>
{% endfor %}
