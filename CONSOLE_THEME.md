# Ortak Zaryob görünümü

Kişisel site, Kılavuzlar, Syscall ve Pin Atlas; terminal yolu biçimindeki kimliği,
IBM Plex Mono'yu, proje seçiciyi ve açık/koyu renk değişkenlerini paylaşır.
Ana site `zaryob:~ $`, araçlar `zaryob:~/kilavuzlar $`, `zaryob:~/syscall $` ve
`zaryob:~/pin-atlas $` olarak görünür. `zaryob` ana siteye döner; yol ve `$`
proje seçiciyi açar. Başlıkta proje bağlantıları yan yana birikmez. Ana sitenin
Yazılar, Projeler ve Hakkımda gezinmesi yalnızca ana sitede bulunur. Her site yerel font ve tema
kopyasını yayımlar; diğer sitelerin CSS dosyalarına çalışma anında bağımlı değildir.

Asıl kaynak bu depodaki `assets/console/theme.css`, `assets/console/theme.js` ve
`_includes/console-header.html` dosyalarıdır. `site.css` kişisel siteye özgüdür;
Kılavuzlar `assets/style.css`, Syscall `public/assets/console/syscall.css` kullanır.
Pin Atlas kendi `public/style.css` dosyasını ve ortak Jekyll başlığını kullanır;
ortak CSS/JavaScript dosyaları diğer sitelerle birebir aynıdır. Pin Atlas Türkçe
arayüzünü korur ve ortak arama/dil denetimlerini yüklemez.

Proje listesi `_data/console_projects.json` içindedir. Yeni bir site için bu
listeye `key`, `title`, isteğe bağlı `title_en`, `path` ve `prompt` alanlarını
ekleyin; sitenin `suite_section` değerini `key` ile eşleştirin. Eşitleme betiği
listeyi Jekyll depolarına kopyalar, Pin Atlas'ın statik proje bağlantılarını da
aynı listeden üretir. Seçici JavaScript kapalıyken de açılır; Escape, dışarı
tıklama veya odağın dışarı taşınmasıyla kapanır.

İkon yardımcı dosyası `console-icon.html`, yerel `site.svg` simge derlemesi ve
`_data/writing_topics.yml` konu listesi de aynı betikle eşitlenir. Yazılar menüsü
yerel bir `details/summary` açılır listesi kullanır; Escape ve dışarı tıklama ile
kapanır. Kategori etiketleri ve bağlantıları konu listesinden üretilir.

1180 piksel ve altında üst satır yalnızca marka ve erişilebilir adı olan menü
simgesini gösterir. Gezinme, kategoriler, arama ve tema seçimi aynı açılır
paneldedir. Uzun menü panelin içinde kayar; Escape menüyü kapatıp odağı
simgeye taşır. Daha geniş ekranda yatay gezinme kendiliğinden geri gelir.
Arama penceresi kapanınca odak görünür arama düğmesine veya kapalı mobil
menünün simgesine döner. JavaScript kapalıysa bağlantılar görünür kalır.

Kişisel sitede `_includes/post-meta.html`, hem yazı listelerinde hem yazı
üstbilgisinde aynı kategori, tarih ve okuma süresini gösterir. Fotoğraflı
üstbilgi `cover_image` veya `image` alanını kullanır; başlık ve bilgiler ortalıdır.
Makale içindeki görseller doğal oranlarını korur; liste küçük resimleri aynı
boyutta kırpılır. Butonlar bağımsız yazılmış, ince amber çerçeveli düz kontrollerdir.

Ortak dosyalar [Zaryob/console-theme](https://github.com/Zaryob/console-theme) deposunda
tutulur ve Git Subtree ile kardeş depolara bağlanır:

```sh
# Güncellemeleri çekmek için:
git subtree pull --prefix assets/console console-theme assets --squash
```

Yerel kopyalar arası hızlı eşitleme ve denetim için betik de kullanılabilir:

```sh
python3 scripts/sync_console_theme.py
python3 scripts/sync_console_theme.py --check
```

Depolar başka konumdaysa `--guides /yol/kilavuzlar --syscall /yol/syscall --pin-atlas /yol/pin-atlas` verilebilir. Pin Atlas varsayılan olarak kardeş
`pin-atlas` dizininde aranır; mevcut değilse atlanır.
Eşitleme betiği depoya özgü stilleri ve içerikleri değiştirmez.

Koyu tema antrasit, açık tema kırık beyaz taban kullanır. Her iki paletin
arka plan, metin, vurgu, sınır ve anlamsal durum renkleri `theme.css` içindedir.
Fontlar yerel WOFF2 olarak sunulur; normal ve medium ağırlıklar kullanılır.
Fontların özgün OFL lisansı ve Font Awesome simgelerinin lisansı dağıtımda tutulur.
Yeni yazılan ortak tema kodu GPL-2.0-or-later lisanslıdır; sitelerin mevcut
lisansları değişmez.

Tema seçicisi `Sistem`, `Koyu`, `Açık` seçeneklerini sunar. İlk açılış sistem
tercihini izler; açık seçim `zaryob-theme` anahtarında saklanır. Dört site aynı
origin altında yayımlandığından seçim aralarında paylaşılır. Depolama kapalıysa
seçim mevcut sayfada çalışır. JavaScript kapalıysa CSS sistem temasını izler;
gezinme ve belge içeriği kullanılabilir kalır.

Jekyll üst menü bağlantıları `_config.yml` içindeki `suite_url` değerinden oluşur.
Pin Atlas proje bağlantıları yayımlanan ana site adresini kullanır.
Kılavuzlar ve Syscall var olan `baseurl` yollarını korur. Arama penceresi ilk
açıldığında kişisel sitenin ve Kılavuzlar'ın `search.json` dizinlerini indirir;
Syscall sorgularını mevcut `?q=` aramasına gönderir. Sunucu veya API anahtarı
gerektirmez. Dizinlerden biri erişilemiyorsa sonuçlar bu durum belirtilerek sunulur.

Dört Jekyll sitesini derledikten sonra ortak önizleme:

```sh
python3 scripts/preview_suite.py --port 4180
```

Önizleme yalnızca `127.0.0.1` üzerinde çalışır ve üretim bağlantılarını yanıtta
yerel adrese çevirir; kaynak veya derlenmiş dosyaları değiştirmez. Syscall
önizlemeden önce `--baseurl /syscall` ile derlenmelidir. Kılavuzlar'ın mevcut
`/kilavuzlar` baseurl değeri kullanılır. Üretim için her depo kendi statik
çıktısıyla yayımlanmaya devam eder.

## Dil ve içerik çevirileri

Ortak menüdeki TR/EN seçimi arayüz dilidir. İlk ziyarette tarayıcının birincil
dili Türkçe (`tr`, `tr-TR` vb.) ise Türkçe, diğer dillerde İngilizce seçilir.
Geçerli `?lang=tr` / `?lang=en` parametresi kayıtlı tercihten, kayıtlı tercih de
tarayıcı dilinden önce gelir. Geçersiz veya temizlenen kayıt tarayıcı diline döner. Seçim
`zaryob-language` anahtarında saklanır ve aynı origin altındaki üç bölümde
paylaşılır. Depolama engelliyse mevcut sayfada ve açık dil URL’lerinde çalışır.
Tema ve dil birbirinden bağımsızdır. Syscall filtreleri ve ayrıntı bağlantısı
dil değişiminde korunur; JSON verileri ve indirilen C kodu değiştirilmez.

`assets/console/i18n.js`, ortak sözlüğü ve çalışma kodunu içerir. Sözlükte
anahtarlar İngilizce kaynak metinler, değerler Türkçe çevirilerdir. Yeni bir
arayüz metni eklerken sözlüğe çiftini ekleyin ve HTML’de örneğin
`<span data-i18n="All posts">Tüm yazılar</span>` kullanın. Erişilebilir adlar,
ipucu ve yer tutucular için `data-i18n-aria-label`, `data-i18n-title`,
`data-i18n-placeholder` vardır. Değişkenler JSON `data-i18n-vars` ile,
JavaScript’te `window.ZaryobI18n.t(metin, değerler)` ile verilir. Çeviriler
textContent/setAttribute üzerinden uygulanır; çeviri metni HTML olarak yürütülmez.
Ortak betik de eşitleme betiğiyle üç depoya kopyalanır.

Yazı ve belge çevirileri ayrı Markdown dosyalarıdır. Aynı içeriğin sürümlerine
aynı `translation_key`, her dosyaya kendi `lang: tr` veya `lang: en` alanını
verin. Başlık, açıklama ve gövde dosyanın kendi dilinde yazılır. URL mevcut
permalink kurallarından gelir; eski bağlantılar korunur. Örnek:

```yaml
layout: post
lang: en
translation_key: ai-agents-third-wave
title: "Third Wave in Artificial Intelligence: AI Agents"
```

Mevcut dört TR/EN yazı çifti, sabit sayfalar ve kılavuz sürümleri bu şekilde bağlandı. Gerçek çevirisi olan içerikte
dil seçimi karşılık sayfayı açar; ilk yüklemede kayıtlı/tarayıcı tercihi de uygulanır.
Açık dil bağlantıları `?lang=` taşır ve tercih geri yönlendirme döngüsü oluşturmaz; içerik notunda doğrudan dil bağlantısı da
vardır. Karşılık yoksa arayüz çevrilir, özgün başlık/gövde korunur ve çevirinin
henüz bulunmadığı belirtilir. İçerik kendi `lang` niteliğini taşır. Çeviri
sayfaları statik `hreflang` bağlantılarıyla eşleşir; arayüzün `?lang=` seçeneği
kendiliğinden yeni bir içerik çevirisi veya ayrı indekslenebilir sayfa üretmez.
JavaScript kapalıysa HTML’deki özgün dil ve mevcut çeviri bağlantıları kullanılır.

Sabit sayfalar `/en/` altında İngilizce sürümlerine sahiptir. Hakkında, kitaplık,
27 projenin ayrıntıları ve konu dizinleri çevrilmiştir. Kılavuzlar’da 40 Markdown
belgesi ve hata sayfasının İngilizce karşılığı `/kilavuzlar/en/` altındadır.
288 kod bloğu kaynaklarıyla birebir korunur; kapsam ve arşiv uyarıları çevrilir.
Blog arşivinin yeni gövde çevirileri ayrı bir aşamadır; mevcut İngilizce
yazılar `/en/posts/` altında listelenir. Syscall’ın statik/dinamik arayüzü de çevrilidir. Ana sayfa tanıtımlarının İngilizce metinleri projects.yml
`type_en` ve `summary_en` alanlarında tutulur. Dil eklerken bu alanları ve
ortak sözlüğü birlikte güncelleyin.

Kontroller:

```sh
node --test scripts/test_i18n.mjs
python3 scripts/check_i18n.py
python3 scripts/sync_console_theme.py --check
```

İkinci komut üç site derlendikten sonra çalışır; kullanılan anahtarları,
değişken JSON’unu, yer tutucuları ve mevcut çeviri bağlantılarını doğrular.

Kılavuzların kaynak/çeviri eşleşmesini ve kod bloklarının korunmasını denetlemek için
`python3 scripts/check_content_translations.py` çalıştırın.
