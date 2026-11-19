---
layout: default
title: "About · CV"
title_i18n: About
permalink: /en/about/
type: noimage
description: "Süleyman Poyraz: Software Engineer at ASELSAN. CV, experience, and open source projects focusing on embedded systems, Linux kernel, C++, and systems programming."
lang: en
translation_key: page-hakkinda
translation_of: /hakkinda/
translated: '2026-11-19'
---

<div class="about-content cv-container">
  <!-- Profile Hero Header -->
  <header class="cv-header">
    <div class="cv-header__main">
      <div class="cv-avatar-wrap">
        <img class="cv-avatar" src="{{ '/assets/avatars/avatar.webp' | relative_url }}" alt="Portrait of Süleyman Poyraz" width="120" height="120">
        <span class="cv-status-indicator" title="Currently employed"></span>
      </div>
      <div class="cv-header__info">
        <div class="cv-header__eyebrow">
          <span class="console-badge console-badge--info">Software Engineer</span>
          <span class="cv-location">{% include console-icon.html name='globe' %} Ankara, Turkey</span>
        </div>
        <h1 class="cv-name">Süleyman Poyraz</h1>
        <p class="cv-tagline">Systems programmer & technical writer focused on embedded systems, the Linux kernel and Modern C++.</p>
        <p class="cv-bio">I engineer Linux-based embedded platforms, system performance tracing tools, and robust software architectures. I contribute to open source ecosystems, sharing my research, tools, and technical documentation in Turkish and English.</p>
      </div>
    </div>

    <!-- Quick Action / Contact Toolbar -->
    <div class="cv-quick-actions">
      <a href="mailto:zaryob.dev@gmail.com" class="site-button site-button--accent">
        {% include console-icon.html name='mail' %}
        <span>Send Email</span>
      </a>
      <a href="https://github.com/Zaryob" target="_blank" rel="noopener noreferrer" class="site-button">
        {% include console-icon.html name='github' %}
        <span>GitHub <span aria-hidden="true">↗</span></span>
      </a>
      <a href="https://www.linkedin.com/in/suleyman-poyraz/" target="_blank" rel="noopener noreferrer" class="site-button">
        {% include console-icon.html name='linkedin' %}
        <span>LinkedIn <span aria-hidden="true">↗</span></span>
      </a>
    </div>
  </header>

  <!-- Two-Column Grid: Timeline (left) + Sidebar (right) -->
  <div class="cv-grid">
    <!-- Main Column: Experience, Education, Flagship Projects -->
    <div class="cv-main-col">
      <!-- Section: Work Experience -->
      <section class="cv-section" id="cv-experience" aria-labelledby="heading-experience">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-experience">
            {% include console-icon.html name='chip' %}
            <span>Work Experience</span>
          </h2>
          <span class="cv-section__subtitle">Embedded systems, R&D and system software</span>
        </div>

        <div class="cv-timeline">
          <!-- ASELSAN -->
          <article class="cv-card cv-timeline__item is-current">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Software Engineer</h3>
                <h4 class="cv-card__company"><a href="https://www.aselsan.com/en" target="_blank" rel="noopener noreferrer">ASELSAN</a></h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge cv-badge--current">Since December 2024</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Developing embedded systems software and system-level architectures for defense industry applications.</p>
            <ul class="cv-card__bullets">
              <li>Low-level software development, device driver engineering and integration in embedded Linux environments.</li>
              <li>Real-time systems, mission-critical fault tolerance, and dependable inter-system communication.</li>
            </ul>
            <div class="cv-card__tags">
              <span class="cv-tag cv-tag--accent">C++20</span>
              <span class="cv-tag cv-tag--accent">C</span>
              <span class="cv-tag">Embedded Linux</span>
              <span class="cv-tag">POSIX</span>
              <span class="cv-tag">Real-Time Systems</span>
            </div>
          </article>

          <!-- TÜBİTAK İLTAREN - Researcher -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Researcher</h3>
                <h4 class="cv-card__company">TÜBİTAK İLTAREN</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">August 2023 – December 2024</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Contributed to research, prototyping and development for embedded systems, computing solutions and R&D projects.</p>
            <ul class="cv-card__bullets">
              <li>Hardware-software integration, system validation, and automated testing pipelines on custom hardware.</li>
              <li>System performance profiling, peripheral bus communication and computing infrastructure development.</li>
            </ul>
            <div class="cv-card__tags">
              <span class="cv-tag">C/C++</span>
              <span class="cv-tag">Python</span>
              <span class="cv-tag">Embedded Hardware</span>
              <span class="cv-tag">Linux</span>
            </div>
          </article>

          <!-- TÜBİTAK İLTAREN - Candidate Researcher -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Candidate Researcher</h3>
                <h4 class="cv-card__company">TÜBİTAK İLTAREN</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">June 2022 – August 2023</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Participated in embedded hardware/software prototyping and exploratory applied research.</p>
            <div class="cv-card__tags">
              <span class="cv-tag">Prototyping</span>
              <span class="cv-tag">C++</span>
              <span class="cv-tag">Hardware Validation</span>
            </div>
          </article>

          <!-- Adal Grup -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">VR Technology Researcher (Intern)</h3>
                <h4 class="cv-card__company">Adal Grup</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">March – June 2022</span>
                <span class="cv-card__location">Kayseri / Remote</span>
              </div>
            </div>
            <p class="cv-card__desc">Developed interactive virtual reality (VR) experiences, multiplayer networking and simulations using Oculus and Unreal Engine.</p>
            <div class="cv-card__tags">
              <span class="cv-tag">Unreal Engine</span>
              <span class="cv-tag">Oculus VR</span>
              <span class="cv-tag">C++</span>
            </div>
          </article>

          <!-- TÜRASAŞ -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">IT Intern</h3>
                <h4 class="cv-card__company">TÜRASAŞ</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">June – August 2021</span>
                <span class="cv-card__location">Sivas</span>
              </div>
            </div>
            <p class="cv-card__desc">Contributed to enterprise Linux servers, ERP infrastructure, network routing and security operations.</p>
            <div class="cv-card__tags">
              <span class="cv-tag">Linux Servers</span>
              <span class="cv-tag">Network Administration</span>
              <span class="cv-tag">System Security</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Section: Education -->
      <section class="cv-section" id="cv-education" aria-labelledby="heading-education">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-education">
            {% include console-icon.html name='user' %}
            <span>Education</span>
          </h2>
        </div>

        <div class="cv-edu-list">
          <!-- Gazi University -->
          <article class="cv-card">
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">MSc in Computer Engineering</h3>
                <h4 class="cv-card__company">Gazi University</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge cv-badge--current">Since February 2025</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Graduate studies focused on systems programming, advanced algorithm design, and high-performance embedded computing.</p>
          </article>

          <!-- AGU -->
          <article class="cv-card">
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">BSc in Computer Engineering</h3>
                <h4 class="cv-card__company">Abdullah Gül University</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">2018 – 2023</span>
                <span class="cv-badge cv-badge--highlight">GPA: 3.46 / 4.00 · High Honors</span>
              </div>
            </div>
            <p class="cv-card__desc">100% English curriculum. Operating systems, computer architecture, network protocols, data structures, and software engineering.</p>
          </article>
        </div>
      </section>

      <!-- Section: Key Projects & Open Source -->
      <section class="cv-section" id="cv-projects" aria-labelledby="heading-projects">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-projects">
            {% include console-icon.html name='code' %}
            <span>Key Projects & Open Source</span>
          </h2>
          <span class="cv-section__subtitle"><a href="{{ '/en/projects/' | relative_url }}">View all projects →</a></span>
        </div>

        <div class="cv-projects-grid">
          <!-- imshark -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://github.com/Zaryob/imshark" target="_blank" rel="noopener">imshark</a></h4>
              <span class="cv-badge">C++20 · GPL-3.0</span>
            </div>
            <p>A fast desktop packet analyzer leveraging Dear ImGui for inspecting, decoding, and filtering capture files and network protocol fields.</p>
          </div>

          <!-- Performer -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://github.com/Zaryob/Performer" target="_blank" rel="noopener">Performer</a></h4>
              <span class="cv-badge">eBPF · Python</span>
            </div>
            <p>A performance profiling utility utilizing Linux eBPF and bpftrace probes to record portable runtime snapshots and view them offline.</p>
          </div>

          <!-- ZFS Book -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="{{ '/kitapligim/' | relative_url }}">ZFS Storage Guide</a></h4>
              <span class="cv-badge">Open Source Book</span>
            </div>
            <p>Comprehensive open-access reference book explaining modern enterprise storage systems, pool management, ARC caching, and ZFS architecture.</p>
          </div>

          <!-- Pisi Linux -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://pisilinux.org" target="_blank" rel="noopener">Pisi Linux</a></h4>
              <span class="cv-badge">Packager & Contributor</span>
            </div>
            <p>Maintained upstream package recipes, system toolchains, and binary repositories for the independent Turkish Linux distribution.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Sidebar Column: Contacts, Skills, Sister Tools, Languages -->
    <aside class="cv-sidebar-col" aria-label="Additional Information and Skills">
      <!-- Card: Contact & Networks -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Contact & Networks</h3>
        <ul class="cv-contact-list">
          <li>
            <span class="cv-contact-label">Location</span>
            <span class="cv-contact-val">Ankara, Turkey</span>
          </li>
          <li>
            <span class="cv-contact-label">Email</span>
            <span class="cv-contact-val"><a href="mailto:zaryob.dev@gmail.com">zaryob.dev@gmail.com</a></span>
          </li>
          <li>
            <span class="cv-contact-label">GitHub</span>
            <span class="cv-contact-val"><a href="https://github.com/Zaryob" target="_blank" rel="noopener">github.com/Zaryob</a></span>
          </li>
          <li>
            <span class="cv-contact-label">LinkedIn</span>
            <span class="cv-contact-val"><a href="https://www.linkedin.com/in/suleyman-poyraz/" target="_blank" rel="noopener">suleyman-poyraz</a></span>
          </li>
          <li>
            <span class="cv-contact-label">Medium</span>
            <span class="cv-contact-val"><a href="https://zaryob.medium.com" target="_blank" rel="noopener">@zaryob</a></span>
          </li>
          <li>
            <span class="cv-contact-label">Blog</span>
            <span class="cv-contact-val"><a href="{{ '/en/' | relative_url }}">zaryob.github.io</a></span>
          </li>
        </ul>
      </div>

      <!-- Card: Technical Skills -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Technical Skills</h3>
        
        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Languages</h4>
          <div class="cv-tags">
            <span class="cv-tag cv-tag--accent">C</span>
            <span class="cv-tag cv-tag--accent">C++ (Modern 17/20)</span>
            <span class="cv-tag cv-tag--accent">Rust</span>
            <span class="cv-tag">Python</span>
            <span class="cv-tag">Bash / POSIX Shell</span>
            <span class="cv-tag">Swift</span>
          </div>
        </div>

        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Systems & Kernel</h4>
          <div class="cv-tags">
            <span class="cv-tag">Linux Kernel</span>
            <span class="cv-tag">eBPF / bpftrace</span>
            <span class="cv-tag">POSIX API</span>
            <span class="cv-tag">Concurrency & Threading</span>
            <span class="cv-tag">Memory Management</span>
            <span class="cv-tag">System Calls (Syscalls)</span>
            <span class="cv-tag">ZFS & File Systems</span>
          </div>
        </div>

        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Embedded & Hardware</h4>
          <div class="cv-tags">
            <span class="cv-tag">Embedded Linux</span>
            <span class="cv-tag">ARM / RISC-V / x86</span>
            <span class="cv-tag">U-Boot & Buildroot</span>
            <span class="cv-tag">Device Tree</span>
            <span class="cv-tag">UART / SPI / I2C / CAN</span>
          </div>
        </div>

        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Toolchain & Ecosystem</h4>
          <div class="cv-tags">
            <span class="cv-tag">Git</span>
            <span class="cv-tag">GDB & LLDB</span>
            <span class="cv-tag">Valgrind & Sanitizers</span>
            <span class="cv-tag">CMake & Make</span>
            <span class="cv-tag">Docker</span>
            <span class="cv-tag">Wireshark</span>
            <span class="cv-tag">Vim / Neovim</span>
          </div>
        </div>
      </div>

      <!-- Card: Sister System Tools -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">System Tool Suite</h3>
        <ul class="cv-sister-list">
          <li>
            <a href="https://zaryob.github.io/syscall/">~/syscall <span aria-hidden="true">↗</span></a>
            <p>Linux system call numbers, signatures, and architectural ABI tables.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/execmap/">~/execmap <span aria-hidden="true">↗</span></a>
            <p>Interactive structural map of ELF binaries and memory layouts.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/pin-atlas/">~/pin-atlas <span aria-hidden="true">↗</span></a>
            <p>Hardware pinout reference for popular SBCs and microcontrollers.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/wire/">~/wire <span aria-hidden="true">↗</span></a>
            <p>Visual diagrams of network packets, framing, and protocol headers.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/kilavuzlar/">~/kilavuzlar <span aria-hidden="true">↗</span></a>
            <p>Curated technical guides on Linux, C++, and systems engineering.</p>
          </li>
        </ul>
      </div>

      <!-- Card: Languages -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Spoken Languages</h3>
        <div class="cv-lang-item">
          <span class="cv-lang-name">Turkish</span>
          <span class="cv-badge">Native</span>
        </div>
        <div class="cv-lang-item">
          <span class="cv-lang-name">English</span>
          <span class="cv-badge">Full Professional (C1)</span>
        </div>
      </div>
    </aside>
  </div>
</div>
