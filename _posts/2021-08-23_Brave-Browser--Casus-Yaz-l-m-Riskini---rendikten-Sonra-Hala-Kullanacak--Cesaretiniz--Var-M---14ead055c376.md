---
layout: post
title: "Brave Browser: Casus Yazılım Riskini Öğrendikten Sonra Hala Kullanacak “Cesaretiniz” Var Mı?"
date: 2021-08-23 12:23:43 +0300
categories: [genel]
image: "2021-08-23-brave.png"
image_hash: "696fa20b90ca6ce4ebbe1955498ed01b"
---


2018'de yayınlanan ve son dönemde yeniden düzenlenen rapora göre 3 senedir Brave tarayıcısında casus yazılımlar için bir altyapı bulunmakta.

İş bu belge [Brave Spyware Watchdog](https://spyware.neocities.org/articles/brave.html) adıyla yayınlanan makalenin Türkçe çevirisini içermektedir. Bahsi geçen makale **Kaynakça**’da da belirtilmiş olup makale CC0 ile lisanslanmıştır. Kaynak kodu da aynı şekilde **Kaynakça**’da belirtilmiştir.

### Brave Tarayıcı nedir?

Brave Tarayıcı [Brave Software Inc.](https://brave.com/about/) tarafından Chromium tabanlı olarak geliştirilmiş bir tarayıcıdır. Ana iddiası web’de dolaşırken 4\. kişi olarak geçen reklam verenler, casus yazılımcılar ve kötü niyetli içerik üreticileri gibi kişileri engellemeyi öne sürmektedir. Chromium üzerine inşa edilerek geliştirilmiş yapısı sayesinde oldukça hızlıdır. Açık kaynak kodludur ve tamamen ücretsiz bir web tarayıcı yazılımıdır.

Brave, temel olarak 3\. şahıs reklamlarını engellerken, Google’ın sonuçlarında ve sitelerin içinde (bazı sitelerin her yerinde) bulunan Google Ads (eski adıyla AdWords) reklamlarını engellemez. Çünkü Brave tarayıcının reklam engelleme uzantıları arama ağı reklamlarını engellemez.

Son dönemlerde yeniden konusu açılan makale ise brave tarayıcı içerisindeki bazı şeylerin casus yazılımlar için kullanıldığı hakkında. Yani bu şu demek. Bu tarayıcıyı kullanan herkes tehlike altında olabilir.

### İddia Edilen Makalenin Çevirisi

Brave Browser, yerleşik Adblock ve diğer uzantılar, parmak izi koruması, diğer Chrome çatallarına kıyasla daha temiz bir Tercihler menüsü ve ziyaret ettiğiniz web siteleri üzerinde otomatik olarak destekleme (ödeme) yeteneği gibi başka hiçbir yerde bulunmayan birçok ilginç özelliğe sahip bir Chromium çatalıdır. Geliştiriciler bu tarayıcıyı yerleşik gizlilik korumaları ile _“İlgi alanlarınızı tam olarak karşılayan bir tarayıcı”_ olarak tanımlıyor. [[1]](https://spyware.neocities.org/articles/brave.html#one)

> **Casus Yazılım Seviyesi: Yüksek**

Brave kendi kendini güncelleyen bir yazılımdır, varsayılan arama motoru olarak [Google’ı](https://spyware.neocities.org/articles/google.html) kullanır, yerleşik telemetriye sahiptir ve hatta Firefox Pocket’e benzer bir tercihe bağlı rss benzeri haber akışına sahiptir. Birisi gizlilik odaklı bir tarayıcı hayal ederse akla gelen şeyler bunlar olmamalı.

> Otomatik güncellemeler

Brave, her çalıştırdığınızda güncellemeleri kontrol eder ve tarayıcıdan kapatamazsınız. Yine de, bunu yapmak için bir seçenek eklemek Brave’in düşük öncelikli listesinde. [[2]](https://spyware.neocities.org/articles/brave.html#two) Düşük öncelikli olmasının nedeni, aradan bir yılı aşkın süre geçmesi ve henüz bu amaçlı bir uygulama uyarlaması yapılmamış olmasıdır.

> Brave yerleşik telemetriye sahiptir

Çalışırken, Brave etki alanına `p3a.brave.com`üzerine telemetri olarak çok sayıda istekte bulunacaktır . Toplanan verileri, kendilerinin birkaç gün sakladıklarını iddia ediyorlar. [[8]](https://spyware.neocities.org/articles/brave.html#eight) Bu özellik, devre dışı bırakılabilen bir tercihe bağlı özelliktir. Bu özellik `brave://settings/privacy` yolundan devre dışı bırakılabilir.

> Brave Today

Brave artık Firefox Pocket’e benzer Brave Today adlı yeni bir özelliğe sahip. Firefox Pocket’in ne olduğunu bilmiyorsanız, temelde her boş sekmede gösterilen rss benzeri bir haber akışıdır. Brave’in sahip olduğu bu özellik, ne yazık ki bir tercihe bağlı özellikten ziyade bir devre dışı bırakılamaz bir yerleşik özelliktir ve bunun için Brave’in sunucularına çok sayıda istek gönderir. Kendi başına devre dışı bırakılabilen bir özellik gibi görünmüyor, ancak uygulamanın sekmelerini boş olarak ayarlamak ( `brave://settings/newTab`) istekleri durduruyor gibi görünüyor.

> SafeBrowsing

Brave, SafeBrowsing’i kullanır. Kullanıcıyı potansiyel olarak güvenli olmayan web sitelerinden ve uzantılardan “korumaya” çalışan bir özelliktir. Ancak, gerekli bilgileri almak için istekler gönderir. Brave’in Güvenli Tarama özelliği Google tarafından da desteklenmektedir. [[10]](https://spyware.neocities.org/articles/brave.html#ten) Bu tercihe bağlı bir özelliktir `brave://settings/security` yolundan devre dışı bırakılabilir .

> Brave Rewards

Brave’in bir ödül programı var. Bununla ilgili daha fazla bilgiyi burada bulabilirsiniz. [[3]](https://spyware.neocities.org/articles/brave.html#three) İlk bakışta ödül programı bir tercih gibi görünüyor, ancak kaydolsanız da kaydolmasanız da tarayıcı bu alan adlarına istekte bulunuyor:

`rewards.brave.com`

`api.rewards.brave.com`

`grant.rewards.brave.com`

Hızlı bir güncelleme: Bu istekler bir hata olarak rapor edildi ve çoğunlukla düzeltildi (birkaç istisna dışında). Hata tamamen giderildiğinde bu bölümü kaldıracağım. [[12]](https://spyware.neocities.org/articles/brave.html#twelve)

> Kayda değer çeşitli istekler

İlk çalıştırmada Brave, yazım hatalarını denetlemek için kullanılan kitaplığı getirmek için bir istek gönderir:

![](https://cdn-images-1.medium.com/max/800/0*zdEBa0x3ch6SNQMT.png)

Brave başlangıçta `variations.brave.com`üzerine bir istek gönderir. Brave, özellikleri açmak ve kapatmak için bu isteği kullanır. Bunu henüz devre dışı bırakmanın bir yolu yoktur. [[11]](https://spyware.neocities.org/articles/brave.html#eleven)

![](https://cdn-images-1.medium.com/max/800/0*I10_-k3F1s0-oTaZ.png)

Brave, bağlı kuruluşların listesini şu site üzerinden istekle getirir `laptop-updates.brave.com`:

![](https://cdn-images-1.medium.com/max/800/0*nvUXcyrkjS-2AiN2.png)

Brave, ara sıra `static1.brave.com`, eklenti bilgilerini almak için kullanılmış gibi görünen bir istekte bulunur ? [[4]](https://spyware.neocities.org/articles/brave.html#four) Ancak URL tarayıcıya yerleştirildiğinde, Google'ın 404 hatası sayfasına yönlendirildi. [[9]](https://spyware.neocities.org/articles/brave.html#nine)

![](https://cdn-images-1.medium.com/max/800/0*BN_huHzQPcHzbseC.png)

![](https://cdn-images-1.medium.com/max/800/0*WeBEWRys-CfthvwJ.png)

`curl --head static1.brave.com`Brave'in Google'ın gstatic'ini kullandığını ve Cloudflare'ı da kullandığını hızlı bir şekilde gösteriyor:

![](https://cdn-images-1.medium.com/max/800/0*kIrb58kkVCQvkx8K.png)

İlk çalıştırmada, Brave beş uzantı alır `brave-core-ext.s3.brave.com`ve bunları yüklemeye çalışır:

![](https://cdn-images-1.medium.com/max/800/0*0XHSIp4nP2xbRMIg.png)

> Sonuçta bu çıkan sonuçlar casus yazılımla ilgili değil, ancak kayda değer bir ihtimal var

> Facebook ve Twitter’dan casus yazılımları beyaz listeye ekleme

Brave, web sitesinde _“Brave, kötü amaçlı yazılımlarla savaşır ve izlemeyi önleyerek bilgilerinizi güvende ve güvende tutar. Bu bizim önceliğimizdir”_ iddiasında bulunuyor. [[6]](https://spyware.neocities.org/articles/brave.html#six) . Ancak bu iddiaya rağmen, Brave, Facebook ve Twitter’ın insanları web üzerinden izlemelerine izin veren komut dosyaları için izleme korumalarını devre dışı bırakıyor. [[5]](https://spyware.neocities.org/articles/brave.html#five) Brave, JavaScript’in birini izlerken oynadığı rolü etkin bir şekilde küçümsüyor.

_“Bir uç önbellekten bir komut dosyası yüklemek, üçüncü taraf çerezleri veya Brave’in her zaman engellediği ve her zaman engelleyeceği eşdeğer tarayıcı yerel depolaması olmayan bir kullanıcıyı izlemez. Başka bir deyişle, çerezler veya diğer araçlar olmadan istek gönderme ve yanıt alma kullanıcıları tanımlamak, mutlaka bir izleme tehdidi oluşturmaz.”_ [[7]](https://spyware.neocities.org/articles/brave.html#seven)

Bu gerçeklerden daha uzak olamazdı. Bir web sitesinin tanımlama bilgilerini depolayamaması, sizi benzersiz bir şekilde tanımlayamayacağı anlamına gelmez. Facebook ve Twitter’dan JavaScript kullanmak sizi izlemek için fazlasıyla yeterli olacaktır ve yalnızca çerezleri engellemek bunu durdurmayacaktır. JavaScript’in hangi bilgileri kazıyabileceğine dair hızlı bir referans noktası olarak, [bu web sitesini](https://coveryourtracks.eff.org/) ziyaret etmek isteyebilirsiniz .

Geçenlerde bir tartışma sonucu pushback aldıktan sonra Facebook, Twitter ve LinkedIn gelen komut bazılarını engellemeyi `brave://settings/socialBlocking` seçenek eklediler. Kısa bir not, chrome tabanlı bir tarayıcı kullandığınız sürece, JavaScript kullanımını `chrome://settings/content/javascript` her iki şekilde de yönetebilmeniz gerekmektedir .

> Varsayılan olarak gizlilik karşıtı arama motoru

[Google](https://spyware.neocities.org/articles/google.html) , Brave’in varsayılan arama motorudur. Gizlilik odaklı olduğunu iddia eden bir tarayıcı için bu bir kırmızı bayraktır. En azından ilk çalıştırmada varsayılan arama motorunu değiştirmenizi kolaylaştırırlar.

**Bu makale 5/7/2018 tarihinde oluşturuldu.  
Bu makale en son 8/17/2021 tarihinde düzenlendi.**  
**Bu makale 8/22/2021 tarihinde Türkçeye çevrilmiştir.**

### Sonuç:

Bu makale ışığında şunu söylebilirim. Halihazırda google telemetrisi içeren chromium bazlı bir tarayıcıda bu denli dağıtık istek haritası ve güvenliği bu kadar önde tuttuklarını iddia ederken, Javascript açıklarının bu kadar umursanmaması, bu tarayıcının casus yazılım tehditi altında olduğunu söylemek için “bence” gayet yeterli.

Kullanmayın demiyorum ama kullanırken ihtiyatlı olmakta yarar var.

### Kaynakça:

Bahsi geçen makale:

[**Brave**
_Brave Browser is a Chromium fork with many interesting features not found elsewhere, such as built-in Adblock and other…_spyware.neocities.org](https://spyware.neocities.org/articles/brave.html)

Bahsi geçen makalenin kaynak kod deposu:

[**_SpywareWatchdog_** SpywareWatchdogcodeberg.org](https://codeberg.org/shadow/SpywareWatchdog)
