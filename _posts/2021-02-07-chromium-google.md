---
layout: post
title: "Google, Chromium’dan Sync özelliğini çıkarttı"
date: 2021-02-07 09:08:18 +0300
categories: ['genel']
image: "2021-02-07-chromium.png"
image_hash: "06fb628c4d8e357d610f4e04808dcee3"
---


Google 15 Ocak itibari ile Chromium'un Google API desteğinin kesileceğini duyurdu. Google buna gerekçe olarak Chromium tabanlı tarayıcıların, Google altyapısına bindirme yaptığını ve Chrome Sync hizmetini kullanarak Google kullanıcılarının verilerini, yer işaretlerini ve tarama geçmişini onay almadan Google'ın sunucularında saklamak için kullandıklarını keşfettiklerini iddia etti. Google, kısa bir açıklamada, keşfin "yakın tarihli bir sunucu denetimi" sırasında yapıldığını söyledi.

Gelecekte kötüye kullanımı önlemek için Google, 15 Mart 2021 tarihinden itibaren Chromium'un içinde bulunan bazı Chrome API'lerini (özelliklerini) sınırlandırmayı planladığını ve bunları Chromium açık kaynak kod tabanının üstünde geliştirilen diğer tarayıcılar için kullanılamaz hale getirmeyi planladığını söyledi.

Bu yalnızca Chrome Senkronizasyonuna Chromium tabanlı tarayıcılar üzerinden erişmesini kaldırmakla kalmaz, aynı zamanda Chrome Yazım API'si, Kişiler API'si, Chrome Çeviri Öğesi ve diğer özelliklere erişimin kalkması demek. Tüm bu API'ler, Chrome tarayıcısınına taban olan ve Google'ın yıllar önce açık kaynaklı olarak paylaştığı Chromium kaynak kodunun içinde paylaşılmaktaydı.

Normal koşullar altında, Chromium kodunun üzerine tarayıcılar oluşturan diğer şirketler genellikle bu API'leri kaldırır ve üzerinde kontrol sahibi olabilecekleri kendi benzer sistemlerini entegre ederler. Ancak Google tarafından keşfedilen son kötüye kullanım, "bazı üçüncü taraf Chromium tabanlı tarayıcıların" Chrome'a ​​özgü bu özelliklere API anahtarları eklediği ve bunları offshoot tarayıcı ürünlerine entegre ettiği olaylardan kaynaklanıyor.

Bu, bu şirketlerin kendi verilerini depolamak için Google sunucularını kötüye kullanmalarına ve Google'ın geliştirme maliyetlerini etkili bir şekilde artmasına neden oldu. Google, bu şirketlere, Chrome'a ​​özgü bu API'leri ve özellikleri kodlarından kaldırmaları ve erişimi kesilmeden önce kendi kodlarını uygulamaları için iki ay süre verdi.

Tarayıcı üreticisi, sistemlerini kötüye kullanan Chromium tabanlı tarayıcıların adını vermedi ve Chromium tabanlı tarayıcıların listesinde Microsoft Edge, Opera ve Brave gibi büyük isimlerden; Blisk, Colibri ve Torch gibi daha küçük girişimlere kadar uzun bir liste var.

## Google'ın Bu Adımının Etkileri

Bu API'ler yakın gelecekte eksiltilecek olsalar da, 2021 Mart ortasına kadar da çalışmaya devam edecek. Ancak, Google'ın bu API anahtarlarına erişimi kestikten sonra bunun Chromium kullanan herkesi etkilemesi bekleniyor.

Bu sadece son sürümlerini değil; Chromium'un tüm sürümlerini, API anahtarlarının hala mevcut olduğu daha eski yapıları bile 15 Mart'tan itibaren etkileyecek.


Aslında bu durum, Chromium'u nasıl paketlemeyi seçtiklerine bakılmaksızın tüm Linux dağıtımlarını etkileyecek. Ubuntu'da "saf" Chromium paketi, Canonical tarafından sağlanan bir Snap uygulaması (apt ile yükleseniz bile) olarak dağıtılıyor. Linux Mint, tarayıcının geleneksel bir paket sürümünü sunar. Bazı distro ekiplerindeki Chromium paket bakımcıları, son kullanma tarihinden önce API'leri şimdiden devre dışı bıraktı.

Chromium kullanıcıları bu karara nasıl tepki verecek? Muhtemelen kafa karışıklığıyla. Kapanış tarihinden önce bunu duymayanlar muhtemelen kafaları karışacak ve yapılandırmalarında veya Linux dağıtımlarının paketlerinde bir şeylerin kırıldığını düşünecekler.

Yani bu değişikliği gerçekleşmeden önce ne kadar çok insan bilirse o kadar iyi.

## Bu Adımın Etkileri

Chromium kullanıyorsanız, senkronizasyon verilerinizin silinmeyeceğini Google zaten belirtti. Chrome API anahtarlarının kaldırılması ve bu desteğin son verilmesi, yalnızca yerel olarak kullanımın kesildiğini ifade ediyor. Chromium'dan Google hesabınıza senkronize ettiğiniz tüm veriler; Google Etkinliğim sayfası ve Google Paket Servisi'nin yanı sıra Google Chrome'dan da kullanılmaya devam edecektir. Yani maalesef ki Google'ın bu özelliklerinden yararlanmak için Chrome kullanmak zorunda kalacağız

## Chrome ve Chromium'un Farkları

Chromium, Chrome web tarayıcısının temelini oluşturan açık kaynaklı bir tarayıcı projesidir. Ancak bunun ne anlama geldiğine biraz daha derinlemesine bakalım. Google, Chrome'u 2008'de ilk kez piyasaya sürdüğünde, Chrome'un bir açık kaynak projesi olarak temel aldığı Chromium kaynak kodunu da yayınladı. Bu açık kaynak kod Chromium Projesi tarafından korunurken, Chrome'un kendi kodları Google tarafından kapalı kaynak kodlu olarak değiştirilmeye devam ediyor. Bu durum biraz Android Projesine benziyor. Android Projesi açık kaynak kodlu olarak AOSP tarafından dağıtılırken, Google Play Servisleri kapalı kaynak olarak dağıtılıyor.


İki tarayıcı arasındaki en büyük fark, Chrome Chromium'u temel alırken, Google'ın ayrıca Chrome'a ​​otomatik güncellemeler ve ek kapalı kaynak video formatları için destek gibi bir dizi özel özellik bulunmakta. Google, Chromebook'larda çalışan işletim sistemi olan kendi Chrome OS'lerinin temelini oluşturan açık kaynaklı bir proje olan Chromium OS için de benzer bir yaklaşım benimsedi. Her iki tarayıcı da açık kaynak; Opus, Theora, Vorbis, VP8, VP9 ve WAV kodekleri içerir. Chrome ve Chrome OS; AAC, H.264 ve MP3 gibi tescilli medya biçimleri için lisanslı codec'ler içerir ve size daha geniş bir medya içeriğine, özellikle de H.264 videolarını izlemek için HTML5 video kullanan sitelere erişim sağlar. Ayrıca Adobe Flash (PPAPI). Chrome, Google'ın Chrome ile birlikte otomatik olarak güncellediği kapalı kaynak bir Pepper API (PPAPI) Flash eklentisi içerir. Bu, Linux'ta en modern Flash sürümünü edinmenin tek yoludur. Windows ve Mac'te bile, Adobe'nin web sitesinde bulunan eski NPAPI Flash eklentisi yerine Chrome'un korumalı alanlı PPAPI Flash eklentisi Flash uygulamaları için en optimal Flash sürücüsü. Gerçi Flash desteği yakın dönemde kalkmış olsa bile Flash uygulamalarını çalıştırmak için hala en iyi yol PPAPI eklentisi. Bir diğer yandan Chrome, sadece Chrome eklenti mağazasında bulunan eklentilere destek verirken, Chromium 3. parti eklentilere de izin veriyor. Ayrıca, bazı Linux dağıtımlarının Chromium'un güvenlik korumalı alanını devre dışı bırakabilirsiniz.

# Sonuç

Sonuç olarak yakın dönemde Google servislerinden faydalanabilmek ve senkronizasyon özelliklerini kullanabilmek için Google Chrome'dan başka bir alternatif bulunmayacak. Bu uygulamaları kullanmak isteyenler mecburen Chromium'dan Chrome'a geçecek veya herkesin kendine başka bir alternatif bulmalası gerekecek.