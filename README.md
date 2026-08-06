# Süleyman Poyraz'ın sitesi

[zaryob.github.io](https://zaryob.github.io/) üzerinde yayımlanan kişisel site, proje vitrini ve yazı arşivi. Kaynak dosyalar Jekyll ile statik HTML'ye dönüştürülür. Medium'daki yazılar için kalıcı kopya oluştururken içerik ve görseller bu depoda tutulur.

## Yerelde çalıştırma

Ruby 3.3 ve Bundler kurulu olmalı. `Gemfile`, GitHub Pages'in kullandığı Jekyll sürümünü `github-pages` gem'i üzerinden sabitler.

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

Site `http://127.0.0.1:4000` adresinde açılır. Yayına çıkacak HTML'yi ve yerel bağlantıları denetlemek için:

```sh
bundle exec jekyll build --trace
python3 scripts/check_site.py _site
```

GitHub Actions aynı build ve bağlantı denetimini her push ve pull request için çalıştırır. Denetim, oluşturulan sayfalardaki yerel `href`, `src`, `srcset` ve `poster` hedeflerinin yanı sıra `feed.xml` ve `sitemap.xml` dosyalarının varlığını kontrol eder. Harici sitelerin erişilebilirliğini test etmez.

## Yazı ekleme ve Medium arşivi

Yazıların kaynağı `_posts/YYYY-MM-DD-kisa-baslik.md` dosyalarıdır. Yeni yazının ön bilgileri için örnek:

```yaml
---
layout: post
title: "Yazının başlığı"
date: 2025-04-26 20:00:00 +0300
categories: [programlama]
image: "kapak.webp"
---
```

`image` alanı kullanılıyorsa dosyayı `assets/img/pages/` içine koyun. Yazı içindeki görselleri `assets/img/posts/` altında saklayın ve Markdown içinde yerel `/assets/img/posts/dosya.webp` yoluna bağlayın. Kod örneklerini mümkün olduğunca Markdown kod blokları olarak ekleyin; Gist veya Medium gömüsü tek kopya olmasın.

Kapak başka bir klasördeyse `cover_image: "/assets/img/posts/dosya.webp"` kullanın. Yeni bir kapak ekledikten sonra kartlar için küçük kopyalarını üretin:

```sh
python3 -m pip install Pillow
python3 scripts/make_thumbnails.py
```

Üretilen `assets/img/thumbs/` dosyalarını da commit'e ekleyin. Sitede kullanılan Bootstrap kuralları `assets/bootstrap/css/bootstrap-site.css` içinde küçültülmüş bir alt kümedir; yeni Bootstrap bileşeni eklenirse bu dosya da güncellenmelidir.

Medium'da yayımlanmış bir yazıyı arşive eklerken:

1. Başlığı, özgün yayımlanma tarihini, metni, kod bloklarını ve görselleri karşılaştırın.
2. Yerel Markdown dosyasını ve gereken görselleri depoya ekleyin. Dış bağlantıları kaynak oldukları yerde koruyun, fakat sitenin kendi yazılarına giden bağlantıları yerel adreslere çevirin.
3. `bundle exec jekyll build --trace` ve `python3 scripts/check_site.py _site` komutlarını çalıştırın; telefonda da yazının okunabilirliğini kontrol edin.
4. Medium'daki özgün bağlantıyı yazının ön bilgilerine `medium_url` olarak kaydedin. Böylece iki sürüm arasında iz sürülebilir.

Bu işlem otomatik eşitleme değildir; yeni Medium yazıları ayrıca depoya aktarılmalıdır.

Görsel kaynakları ve yerel karşılıkları `_data/medium_media.json` içinde kayıtlıdır. Her kayıtta yazı dosyası, yerel görsel ve SHA-256 özeti bulunur; bilinen özgün adresler ayrıca kaydedilir. Taşınan yayıncı adresleri `resolved_source` alanında tutulur. Yeni arşiv görselleri `assets/img/medium/` altındadır; mevcut yerel görseller tekrar indirilip çoğaltılmaz. Animasyonlu GIF dosyaları özgün biçiminde saklanır.

`scripts/check_site.py`, bu envanterdeki dosyaları ve içerik özetlerini doğrular; görsellerin sayfalarda gerçekten kullanıldığını da denetler. Harici sunucudan yüklenen fotoğrafları hata olarak bildirir. Yeni bir Medium görseli eklediğinizde envantere kaydını da ekleyin.

Menü ve sosyal bağlantı ikonları `assets/icons/site.svg` içindeki seçili Font Awesome SVG’lerinden gelir. Yeni bir ikon eklerken `_includes/icon.html` kullanın ve `assets/fontawesome/LICENSE.txt` atfını koruyun.
