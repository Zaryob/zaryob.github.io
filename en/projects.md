---
layout: default
title: Projects
permalink: /en/projects/
description: Süleyman Poyraz’s applications, system software, technical documentation
  and historical open source work preserved in 9base.
lang: en
translation_key: page-projeler
translation_of: /projeler/
translated: '2026-11-03'
---

<p class="page-intro">My work spans package management and XML libraries, network analysis, research tools and native applications. This page brings together projects I am developing today and software I worked on in the past, explaining what I did, why I did it and where my contribution begins.</p>
<p>My main account, <a href="https://github.com/Zaryob">Zaryob</a>, and <a href="https://github.com/9base">9base</a>, where I collect past work and source archives, are two parts of this story. Moving a repository to 9base does not change its history or original authors. The historical projects below are presented in that context, rather than as products I currently maintain.</p>
<nav class="project-navigation" aria-label="Project categories"><ul>
{% for group in site.data.project_groups_en %}<li><a href="#{{ group.id }}">{{ group.title }}</a></li>{% endfor %}
<li><a href="#kaynak-arsivi">9base source archive</a></li></ul></nav>
{% for group in site.data.project_groups_en %}
<section class="project-group" id="{{ group.id }}" aria-labelledby="group-{{ group.id }}">
<h2 id="group-{{ group.id }}">{{ group.title }}</h2><p>{{ group.intro }}</p>
{% assign grouped_projects = site.data.projects_en | where: "group", group.id %}
{% for project in grouped_projects %}{% include project-detail.html project=project %}{% endfor %}
</section>{% endfor %}
<section class="project-group" id="kaynak-arsivi" aria-labelledby="archive-heading">
<h2 id="archive-heading">9base source archive</h2>
<p>Alongside my own development history, 9base contains upstream sources I have used or kept for study. These are not listed as projects entirely of my own authorship. The original teams’ work should be read together with each repository’s provenance notes and local changes.</p>
<ul>
<li><a href="https://github.com/9base/Tinkerboard2-kernel">Tinker Board 2 / RK3399 platform family</a>: kernel, U-Boot, Buildroot, Debian/rootfs and manifest sources. Vendor software is retained; the local README experiment and limited Debian fixes are described in their own notes.</li>
<li><a href="https://github.com/9base/licensecc">Open License Manager family</a>: licensecc, generator, dependencies and examples. A source archive of upstream licensing tools.</li>
<li><a href="https://github.com/9base/jsbsim">JSBSim working copy</a>: the JSBSim team’s flight dynamics software; the historical local C130 model adjustment is documented separately.</li>
<li><a href="https://github.com/9base/gdb-dashboard">gdb-dashboard working copy</a>: the upstream debugger tool, with the preserved copy and maintenance context explained in its README.</li>
</ul><p><a href="https://github.com/9base">Browse the full 9base collection <span aria-hidden="true">↗</span></a></p>
</section>
