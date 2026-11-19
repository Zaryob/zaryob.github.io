---
translation_key: page-hakkinda
lang: tr
layout: default
title: "Hakkımda · CV"
title_i18n: About
permalink: /hakkinda/
type: noimage
description: "Süleyman Poyraz: ASELSAN'da yazılım mühendisi. Linux çekirdeği, gömülü sistemler, C++ ve açık kaynak sistem yazılımları üzerine özgeçmiş ve çalışma notları."
---

<div class="about-content cv-container">
  <!-- Profile Hero Header -->
  <header class="cv-header">
    <div class="cv-header__main">
      <div class="cv-avatar-wrap">
        <img class="cv-avatar" src="{{ '/assets/avatars/avatar.webp' | relative_url }}" alt="Süleyman Poyraz'ın portresi" width="120" height="120">
        <span class="cv-status-indicator" title="Aktif olarak çalışıyor"></span>
      </div>
      <div class="cv-header__info">
        <div class="cv-header__eyebrow">
          <span class="console-badge console-badge--info">Yazılım Mühendisi</span>
          <span class="cv-location">{% include console-icon.html name='globe' %} Ankara, Türkiye</span>
        </div>
        <h1 class="cv-name">Süleyman Poyraz</h1>
        <p class="cv-tagline">Gömülü sistemler, Linux çekirdeği ve modern C++ üzerine odaklanan sistem yazılımcısı ve teknik yazar.</p>
        <p class="cv-bio">Linux tabanlı gömülü sistemler, sistem seviyesi performans analizi ve güvenilir yazılım mimarileri üzerine çalışıyorum. Açık kaynak ekosistemine katkı sunuyor; öğrendiklerimi, geliştirdiğim araçları ve teknik dokümantasyonları Türkçe ve İngilizce olarak paylaşıyorum.</p>
      </div>
    </div>

    <!-- Quick Action / Contact Toolbar -->
    <div class="cv-quick-actions">
      <a href="mailto:zaryob.dev@gmail.com" class="site-button site-button--accent">
        {% include console-icon.html name='mail' %}
        <span>E-posta Gönder</span>
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
      <!-- Section: İş Deneyimi -->
      <section class="cv-section" id="cv-experience" aria-labelledby="heading-experience">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-experience">
            {% include console-icon.html name='chip' %}
            <span>İş Deneyimi</span>
          </h2>
          <span class="cv-section__subtitle">Gömülü sistemler, Ar-Ge ve sistem yazılımı</span>
        </div>

        <div class="cv-timeline">
          <!-- ASELSAN -->
          <article class="cv-card cv-timeline__item is-current">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Yazılım Mühendisi</h3>
                <h4 class="cv-card__company"><a href="https://www.aselsan.com" target="_blank" rel="noopener noreferrer">ASELSAN</a></h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge cv-badge--current">Aralık 2024 – Günümüz</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Gömülü sistemler ve savunma sanayii projelerinde sistem seviyesi yazılım geliştirme ve mimari tasarım çalışmaları yürütüyorum.</p>
            <ul class="cv-card__bullets">
              <li>Gömülü Linux ortamlarında aygıt sürücüleri ve çekirdek seviyesi yazılım geliştirme.</li>
              <li>Gerçek zamanlı sistemler, güvenilir donanım-yazılım iletişimi ve yüksek kararlılık gerektiren görev mimarileri.</li>
            </ul>
            <div class="cv-card__tags">
              <span class="cv-tag cv-tag--accent">C++20</span>
              <span class="cv-tag cv-tag--accent">C</span>
              <span class="cv-tag">Gömülü Linux</span>
              <span class="cv-tag">POSIX</span>
              <span class="cv-tag">Gerçek Zamanlı Sistemler</span>
            </div>
          </article>

          <!-- TÜBİTAK İLTAREN - Araştırmacı -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Araştırmacı</h3>
                <h4 class="cv-card__company">TÜBİTAK İLTAREN</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">Ağustos 2023 – Aralık 2024</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Gömülü sistemler, ileri bilişim çözümleri ve Ar-Ge projelerinde araştırma, prototipleme ve geliştirme süreçlerine katkı sağladım.</p>
            <ul class="cv-card__bullets">
              <li>Özel donanım platformları üzerinde yazılım doğrulama, test altyapısı ve entegrasyon.</li>
              <li>Sistem başarım analizi, donanım arayüzleri ve bilişim sistemleri geliştirme.</li>
            </ul>
            <div class="cv-card__tags">
              <span class="cv-tag">C/C++</span>
              <span class="cv-tag">Python</span>
              <span class="cv-tag">Gömülü Donanım</span>
              <span class="cv-tag">Linux</span>
            </div>
          </article>

          <!-- TÜBİTAK İLTAREN - Aday Araştırmacı -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Aday Araştırmacı</h3>
                <h4 class="cv-card__company">TÜBİTAK İLTAREN</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">Haziran 2022 – Ağustos 2023</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Gömülü sistem prototipleme ve araştırma projelerinde görev alarak Ar-Ge süreçlerine teknik katkı verdim.</p>
            <div class="cv-card__tags">
              <span class="cv-tag">Prototipleme</span>
              <span class="cv-tag">C++</span>
              <span class="cv-tag">Donanım Doğrulama</span>
            </div>
          </article>

          <!-- Adal Grup -->
          <article class="cv-card cv-timeline__item">
            <div class="cv-timeline__marker" aria-hidden="true"></div>
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">VR Teknolojisi Araştırmacısı (Gönüllü Staj)</h3>
                <h4 class="cv-card__company">Adal Grup</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">Mart – Haziran 2022</span>
                <span class="cv-card__location">Kayseri / Uzaktan</span>
              </div>
            </div>
            <p class="cv-card__desc">Oculus ve Unreal Engine ile sanal gerçeklik (VR) deneyimleri, çok oyunculu ağ iletişimi ve simülasyon ortamları üzerine çalıştım.</p>
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
                <h3 class="cv-card__role">Bilgi İşlem Stajyeri</h3>
                <h4 class="cv-card__company">TÜRASAŞ</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">Haziran – Ağustos 2021</span>
                <span class="cv-card__location">Sivas</span>
              </div>
            </div>
            <p class="cv-card__desc">Linux tabanlı kurumsal sunucular, ERP altyapısı, kurumsal ağ yönetimi ve sistem güvenliği operasyonlarında görev aldım.</p>
            <div class="cv-card__tags">
              <span class="cv-tag">Linux Sunucular</span>
              <span class="cv-tag">Ağ Yönetimi</span>
              <span class="cv-tag">Sistem Güvenliği</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Section: Eğitim -->
      <section class="cv-section" id="cv-education" aria-labelledby="heading-education">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-education">
            {% include console-icon.html name='user' %}
            <span>Eğitim</span>
          </h2>
        </div>

        <div class="cv-edu-list">
          <!-- Gazi Üniversitesi -->
          <article class="cv-card">
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Yüksek Lisans (MSc) · Bilgisayar Mühendisliği</h3>
                <h4 class="cv-card__company">Gazi Üniversitesi</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge cv-badge--current">Şubat 2025 – Günümüz</span>
                <span class="cv-card__location">Ankara</span>
              </div>
            </div>
            <p class="cv-card__desc">Sistem yazılımları, gelişmiş algoritma analizi ve yüksek başarımlı gömülü bilişim mimarileri üzerine lisansüstü çalışma.</p>
          </article>

          <!-- AGU -->
          <article class="cv-card">
            <div class="cv-card__header">
              <div class="cv-card__titles">
                <h3 class="cv-card__role">Lisans (BSc) · Bilgisayar Mühendisliği</h3>
                <h4 class="cv-card__company">Abdullah Gül Üniversitesi</h4>
              </div>
              <div class="cv-card__meta">
                <span class="cv-badge">2018 – 2023</span>
                <span class="cv-badge cv-badge--highlight">GPA: 3.46 / 4.00 · Onur Derecesi</span>
              </div>
            </div>
            <p class="cv-card__desc">%100 İngilizce eğitim müfredatı. İşletim sistemleri, bilgisayar mimarisi, ağ protokolleri, veri yapıları ve yazılım mühendisliği.</p>
          </article>
        </div>
      </section>

      <!-- Section: Öne Çıkan Projeler & Açık Kaynak -->
      <section class="cv-section" id="cv-projects" aria-labelledby="heading-projects">
        <div class="cv-section__header">
          <h2 class="cv-section__title" id="heading-projects">
            {% include console-icon.html name='code' %}
            <span>Öne Çıkan Projeler & Açık Kaynak</span>
          </h2>
          <span class="cv-section__subtitle"><a href="{{ '/projeler/' | relative_url }}">Tüm projeleri incele →</a></span>
        </div>

        <div class="cv-projects-grid">
          <!-- imshark -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://github.com/Zaryob/imshark" target="_blank" rel="noopener">imshark</a></h4>
              <span class="cv-badge">C++20 · GPL-3.0</span>
            </div>
            <p>Dear ImGui arayüzüyle PCAP/PCAPNG yakalama dosyalarını ve ağ protokol alanlarını filtreleyen, ayrıştıran ve inceleyen modern paket analizörü.</p>
          </div>

          <!-- Performer -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://github.com/Zaryob/Performer" target="_blank" rel="noopener">Performer</a></h4>
              <span class="cv-badge">eBPF · Python</span>
            </div>
            <p>Linux eBPF ve bpftrace probları kullanarak süreç profillerini taşınabilir paketlerde saklayan ve çevrimdışı görselleştiren performans aracı.</p>
          </div>

          <!-- ZFS Kitabı -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="{{ '/kitapligim/' | relative_url }}">ZFS Depolama Kitabı</a></h4>
              <span class="cv-badge">Açık Kaynak Kitap</span>
            </div>
            <p>Modern depolama sistemleri, zpool yönetimi, ARC/L2ARC mekanizmaları ve ZFS mimarisini kapsamlı ele alan açık Türkçe referans kaynağı.</p>
          </div>

          <!-- Pisi Linux -->
          <div class="cv-project-card">
            <div class="cv-project-card__head">
              <h4><a href="https://pisilinux.org" target="_blank" rel="noopener">Pisi Linux</a></h4>
              <span class="cv-badge">Paketçi & Katkıcı</span>
            </div>
            <p>Açık kaynak Türkçe Linux dağıtımında paket derleme reçeteleri, sistem kütüphaneleri bakımı ve paket deposu geliştirme katkıları.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Sidebar Column: Contacts, Skills, Sister Tools, Languages -->
    <aside class="cv-sidebar-col" aria-label="Ek Bilgiler ve Yetkinlikler">
      <!-- Card: İletişim & Ağlar -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">İletişim & Ağlar</h3>
        <ul class="cv-contact-list">
          <li>
            <span class="cv-contact-label">Konum</span>
            <span class="cv-contact-val">Ankara, Türkiye</span>
          </li>
          <li>
            <span class="cv-contact-label">E-posta</span>
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
            <span class="cv-contact-val"><a href="{{ '/' | relative_url }}">zaryob.github.io</a></span>
          </li>
        </ul>
      </div>

      <!-- Card: Teknik Yetkinlikler -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Teknik Yetkinlikler</h3>
        
        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Programlama Dilleri</h4>
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
          <h4 class="cv-skill-group__title">Sistem & Çekirdek</h4>
          <div class="cv-tags">
            <span class="cv-tag">Linux Çekirdeği</span>
            <span class="cv-tag">eBPF / bpftrace</span>
            <span class="cv-tag">POSIX API</span>
            <span class="cv-tag">Eşzamanlılık & Threads</span>
            <span class="cv-tag">Bellek Yönetimi</span>
            <span class="cv-tag">Sistem Çağrıları (Syscalls)</span>
            <span class="cv-tag">ZFS & Dosya Sistemleri</span>
          </div>
        </div>

        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Gömülü & Donanım</h4>
          <div class="cv-tags">
            <span class="cv-tag">Gömülü Linux</span>
            <span class="cv-tag">ARM / RISC-V / x86</span>
            <span class="cv-tag">U-Boot & Buildroot</span>
            <span class="cv-tag">Cihaz Ağaçları (Device Tree)</span>
            <span class="cv-tag">UART / SPI / I2C / CAN</span>
          </div>
        </div>

        <div class="cv-skill-group">
          <h4 class="cv-skill-group__title">Araçlar & Ekosistem</h4>
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

      <!-- Card: Geliştirdiği Sistem Siteleri -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Geliştirdiği Sistem Siteleri</h3>
        <ul class="cv-sister-list">
          <li>
            <a href="https://zaryob.github.io/syscall/">~/syscall <span aria-hidden="true">↗</span></a>
            <p>Linux sistem çağrıları, numaraları ve mimari ABI referansı.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/execmap/">~/execmap <span aria-hidden="true">↗</span></a>
            <p>ELF dosya yapısı ve bellek yerleşimi interaktif haritası.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/pin-atlas/">~/pin-atlas <span aria-hidden="true">↗</span></a>
            <p>Tek kart bilgisayarlar (SBC) ve mikrokontrolcüler pinout atlası.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/wire/">~/wire <span aria-hidden="true">↗</span></a>
            <p>Ağ protokolleri ve paket başlıkları görsel referansı.</p>
          </li>
          <li>
            <a href="https://zaryob.github.io/kilavuzlar/">~/kilavuzlar <span aria-hidden="true">↗</span></a>
            <p>Linux, C++ ve sistem araçları teknik dokümantasyon arşivi.</p>
          </li>
        </ul>
      </div>

      <!-- Card: Diller -->
      <div class="cv-sidecard">
        <h3 class="cv-sidecard__title">Konuşulan Diller</h3>
        <div class="cv-lang-item">
          <span class="cv-lang-name">Türkçe</span>
          <span class="cv-badge">Anadil</span>
        </div>
        <div class="cv-lang-item">
          <span class="cv-lang-name">İngilizce</span>
          <span class="cv-badge">İleri Seviye (C1 / Profesyonel)</span>
        </div>
      </div>
    </aside>
  </div>
</div>
