---
layout: default
title: Projeler
permalink: /projeler/
description: "Süleyman Poyraz'ın uygulamaları, sistem yazılımı, teknik belgeleri ve 9base'de korunan tarihsel açık kaynak çalışmaları."
---

<p class="page-intro">Paket yönetimi ve XML kütüphanelerinden ağ analizine, araştırma araçlarına ve yerel uygulamalara uzanan çalışmalarım. Burada bugün geliştirdiğim projelerle geçmişte üzerinde çalıştığım yazılımları, neyi neden yaptığımı ve katkımın nerede başladığını anlatarak bir araya getiriyorum.</p>

<p>Ana hesabım <a href="https://github.com/Zaryob">Zaryob</a> ile geçmiş çalışmalarımı ve kaynak arşivlerini topladığım <a href="https://github.com/9base">9base</a> bu hikâyenin iki parçası. Bir depoyu 9base’e taşımam, onun geçmişini ya da özgün yazarlarını değiştirmiyor. Aşağıdaki tarihsel projeler, bugün bakımını üstlendiğim ürünler olarak sunulmuyor.</p>

<nav class="project-navigation" aria-label="Proje kategorileri">
  <ul>{% for group in site.data.project_groups %}
    <li><a href="#{{ group.id }}">{{ group.title }}</a></li>{% endfor %}
    <li><a href="#kaynak-arsivi">9base kaynak arşivi</a></li>
  </ul>
</nav>

{% for group in site.data.project_groups %}
<section class="project-group" id="{{ group.id }}" aria-labelledby="group-{{ group.id }}">
  <h2 id="group-{{ group.id }}">{{ group.title }}</h2>
  <p>{{ group.intro }}</p>
  {% assign grouped_projects = site.data.projects | where: "group", group.id %}
  {% for project in grouped_projects %}{% include project-detail.html project=project %}{% endfor %}
</section>
{% endfor %}

<section class="project-group" id="kaynak-arsivi" aria-labelledby="archive-heading">
  <h2 id="archive-heading">9base kaynak arşivi</h2>
  <p>9base’de, yerel geliştirme geçmişimin yanında kullandığım veya incelemek için sakladığım upstream kaynaklar da var. Bunlar bütünüyle bana ait projeler olarak listelenmiyor; özgün ekiplerin çalışmaları, depo içindeki provenance notları ve yerel değişiklikleriyle birlikte okunmalı.</p>
  <ul>
    <li><a href="https://github.com/9base/Tinkerboard2-kernel">Tinker Board 2 / RK3399 platform ailesi</a>: kernel, U-Boot, Buildroot, Debian/rootfs ve manifest kaynakları. Vendor yazılımı korunuyor; yerel README deneyi ve sınırlı Debian düzeltmesi kendi notlarında açıklanıyor.</li>
    <li><a href="https://github.com/9base/licensecc">Open License Manager ailesi</a>: licensecc, generator, bağımlılıklar ve örnekler. Upstream lisanslama araçlarının kaynak arşivi.</li>
    <li><a href="https://github.com/9base/jsbsim">JSBSim çalışma kopyası</a>: JSBSim ekibinin uçuş dinamiği yazılımı; tarihsel yerel C130 model ayarı ayrı belgeleniyor.</li>
    <li><a href="https://github.com/9base/gdb-dashboard">gdb-dashboard çalışma kopyası</a>: upstream debugger aracı; korunmuş kopya ve bakım bağlamı README’de.</li>
  </ul>
  <p><a href="https://github.com/9base">9base koleksiyonunun tamamı <span aria-hidden="true">↗</span></a></p>
</section>
