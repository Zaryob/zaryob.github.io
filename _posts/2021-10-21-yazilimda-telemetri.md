---
layout: post
title: "Yazılımda Telemetri Sistemleri: Tanım — Perspektif — Kullanım — Gizlilik"
date: 2021-10-21 12:23:43 +0300
categories: [genel, internet]
image: "2021-10-21-yazilimda-telemetri.png"
image_hash: "38db6887149be5b8e091c9855b6af13d"
---

Telemetri kavramını sci-fic ilgilileri yakından biliyor, hatta hayatında en az bir kere uzay filmi izlemiş insanlar bile duymuştur elbet.

> “Huston, telemetri değerleri kritik, aracı kaybediyoruz…”

Uzay araçlarından Formula 1 ve MotoGP yarışlarına, basit yazılımlardan, işletim sistemlerinde kadar pek çok alanda telemetri kelimesinin sıkça bahsedildiğini duymaktayız. Ve hatta bir veri sızıntısı olunca “sızanlar sadece telemetri idi” gibi ifadeleri de duymaktayız. Basitçe telemetri dediğimiz kavram, sistemimizden veri toplayarak bu verileri yerel günlük olarak kaydeden veya tasnif eden sistemlerdir. Bu telemetri yazılım davranışları üzerine olabileceği gibi sensorler üzerinden mekanik tabanlı elde edilen veriler de olabilir, hatta bir yerde bölgesel ve küresel hava durumu kayıtları bile bilimsel olarak telemetri niteliğinde görülebilir. Çünkü telemetrinin genel amacı veri toplamak ve bu verileri uygun şekilde kullanmaktır.

Ancak burada bahsedeceğim telemetri daha çok yazılım alanında kullanılan bir yöntem. Şimdi böyle diyince insanların aklında tabi ki şu soru belirmiş olabilir, “Sistemimiz neden buna ihtiyaç duysun ki?”. İşte bu yazıda tam da bunu konuşacağız.

**Telemetri nedir?**
====================

Telemetri diyince herkesin aklına kapaktaki gibi bir dinleme ve izleme sistemi gelmekte. Aslında tam da aynı şekilde düşünebiliriz. Daha öncesinde söylediğim gibi telemetri sistemimizin davranışlarını kaydeden ve bunu kullanmak için uygun şekilde verileri önümüze sunan uygulamadır. Aslında bir günlükleme ve raporlama yazılımıdır.

Pek çok yazılım daha ilk üretimi esnasında sürekli olarak günlük tutarak yazılımın davranışlarını toplayacak ve telemetri için kayıt oluşturacak şekilde tasarlanır. Burada amaç, yazılımın kullanılan ortamla doğru şekilde çalıştığını onaylayabilmeniz için veya yazılımınızın hatalarına daha hızlı yanıt verebilmeniz için yeterli veriyi sağlamaktır. Bir sorun oluştuğunda, telemetri kayıtlarınızı görüntüleyerek sorunun ne olduğunu hızlı bir şekilde anlayabilir ve düzeltmek için bilinçli kararlar alabilirsiniz.

Ayrıca telemetri, özellikle mühendisler açısından üretim sistemlerinizde gerçekte olanlarla karşılaştırıldığında, üretim sistemlerinizde neler olup bittiğine dair anlayışınızı doğrulamanıza yardımcı olur, böylece aralarında ilişki olup olmadığını kolayca görebilirsiniz. Bu da sizin ürününüzün ne tarafa yöneldiğini veya yöneleceğini kestirmenize, ürünün etki alanını ayarlamanıza ve uygun özellikleri ekleyip gereksizleri çıkararak uzun süreçte vereceğiniz desteği somutlaştırmanıza katkı sağlayarak ürününüzün geliştirme süreçlerini hızlandırmış olur.

**Telemetri Altyapısı**
-----------------------

Bir sistemdeki günlükleri direk telemetri olarak kabul edemeyiz. Günlüklendirme sistemleri telemetri altyapısında yer alabilse de, gerçek manada telemetri altyapısına sahip olmak için iki ana bileşene sahip olmanız gerekir:

1.  **Telemetri Metrik Kaydı:** Bir telemetri sisteminin temelini günlük kayıtları olarak dediğimiz (log) dosyalar oluşturur. Özellikle de işletim sistemlerde her yazılım katmanında yüz binlerce ölçümü sürekli olarak kaydedilir. Hatta pek çok donanım da aynı şekilde kendi kayıtlarını tutar. İşletim sistemi süreçleri, veritabanları, disk G/Ç işlemleri, ağ G/Ç işlemleri, RAM, CPU ve Güvenlik gibi kontroller platform bazlı sağlık kontrolleri olarak adlandırılır ve bu metrikler telemetri sisteminin temelini oluşturur.
2.  **Telemetri Metriklerini Yönetmek için Merkezi Bir Platform:** Bu platform, metrikleri ve olayları saklar. Bu platformlar genelde, rapor oluşturma, örnekleme, uyarı verme, anormallik tespiti sağlar. Günlükleri parçalar, tasnif eder, örnekler ve sonuç olarak önemli istisnaların sayısı veya toplam rapor edilen hatalar gibi gruplandırılmış metriklere dönüştürür. Bu da sisteme ait sorunları veya gereksinimleri algılamanıza yardımcı olur. Veya yazılımınızdaki güncel sorunları tespit ederek geliştirme sürecinde bir yol haritası oluşturmanız kolaylaşır.

**Telemetri Türleri**
---------------------

Bu kısıma kadar telemetrinin ne olduğu ve nasıl bir günlüklendirme sistemine telemetri denilebileceğini öğrendik. Şimdi de telemetri metrik türlerine bir öz atalım. Temelde 5 çeşit telemetri vardır. Bunlar şöyle sıralanabilir.

1.  **İş Katmanı Metrikleri:** Bu metrikler genelde iş uygulamaları ve online marketler gibi işletme odaklı yazılımlarda kullanılmaktadır. A/B testi sonuçları, kar, gelir, yeni kullanıcı sayısı, ortalama oturum süreleri, tamamlanan siparişlerin sayısı ve terk edilen ödeme sayısı gibi verileri içerir.
2.  **Uygulama Katmanı Metrikleri:** Bu metrikler uygulamaların günlükleridir diyebiliriz. Uygulama yanıt süreleri, işlem süreleri, çekirdek dökümlerinin sayısı ve önemli istisnaların sayısı gibi uygulamaya dair veriler bu katmandadır.
3.  **Altyapı Katmanı Metrikleri:** İşletim sistemi metrikleri bu kategoriye girmektedir. Ağ trafiği, disk G/Ç işlemleri, ağ G/Ç işlemleri, RAM, CPU ve disk kullanımı gibi verileri içerir.
4.  **İstemci Katmanı Metrikleri:** Herhangi bir sunucuya bağlanarak işlem yapan web veya mobil uygulamalarında istemci uygulaması yanıt süreleri ve istemci hataları gibi temel verileri içerir.
5.  **Dağıtım İşlem Hattı Katmanı Metrikleri:** DevOps tarafında kullanılan metriklerdir ve yazılım dağıtım sürecine dair somut verileri içerir. Bu veriler check-in’ler, dağıtım sağlama süreleri, sıklıklar, ortamların durumu ve otomatik testlerin yürütülmesinden sonraki yeşil/sarı/kırmızı durum sonuçları gibi verilerdir.

Bir uygulamada veya bir işletim sisteminde bu kategorideki metrikler uygun şekilde tutularak sorunlara dair bunların çıktıları kullanılmak üzere tasnif edilirler.

Bu aşamaya kadar temel telemetri mantığına dair bilgileri verdim. Şimdi olayın biraz daha işletim sistemleri ile olan alakasını anlatıp ardından telemetrilerin gizlilik tarafından bahsedeceğim.

İşletim Sistemlerinde Telemetri
===============================

Pek çok kişi işletim sistemlerinin bizden veriler topladığını bilir. Hatta Windows 10 ve sonrası için şöyle bir telemetri olarak bunları işleyeceğiz ama “isterseniz” kapatabilirsiniz seçeneği bile sunuyorlar (ne kadar da nezaketli bir hareket)

![](/assets/img/posts/0*mdgpLe66q1Lxp0L4.jpg)

Bu tip işletim sistmei telemetrileri sayesinde geliştiriciler veya şirketler ürün süreçlerini daha yakından takip edip sonuç odaklı çalışabilmekte. Hani benim verilerimle ne yapacak diyoruz ya işte neler yaptıklarına bir örnek geliştirme süreçlerini yapılandırmak. Aslında bu kısıma gizlilik boyutunda geleceğim.

Neyse Windows tarafına geri dönelim. Windowsta uzun süredir telemetri kayıtlarının tutulması ve bu kayıtların **Microsoft tarafından kullanılması için uzak sunucuya yüklenmesi** yapılmakta. Microsoft Compatibility Telemetry servisi ile Windows 10’da sisteminiz ile ilgili bilgi toplanır, bu bilgiler tasnif edilir ve Microsoft telemetri sunucularına gönderilir. Bu telemetriler üzerinden Windows sistemlerine dair istatistikler tutular.

Bu süreç işletim sistemleri için aslında önemli bir süreç, yani yazılım içerisindeki sorunları tespit etmek ona çözüm oluşturmak için ilk adım niteliğinde denilebilir. Microsoft ayrıca bu süreçte metrikleri geliştirme amaçlı olarak oldukça sağlam kullanıyor. Çünkü ComputersWorld’ün bir haberinde[\[1\]](https://www.computerworld.com/article/3623772/the-real-reason-for-windows-11.html) iddia edildiğine göre Windows bu metriklerden elde edilen veriler ile çok yüksek oranda insanların eski sürüm Windows 10 (1604, 1804 gibi) kullandığını analiz edip hadi Windows 11 çıkartalım diyip yeni işletim sistemi sürümü çıkarttılar (tabi ki sadece güvenlik sorunlarını düşünüp bunu yaptılar abi, hem tpm zorunluluğu geldi, hepsi güvenlik için :P)

Şimdi Windows böyle telemetri aldığını ve bunları Microsoft’un geliştirme süreçlerine dahil ettiğini görenler (özellikle de güvenlik takıntılıları) çıldırıyor. Ama iki grupta insan var ki onlara şimdi bir soğuk duş aldıralım.

Apple fanboyları telemetri konusunda “Moruk Apple ürün satmıyor, teknoloji satıyor, tutup da bizim verimizi işlemez diyorlar”. Bunu diyenlere direk cevabı Apple’ın güvenlik sayfasının linkini aşağıya bırakarak veriyorum.

![](/assets/img/posts/0*TsaAnIXFyn1k8HJC.png)Apple telefonlarının ve Google Android cihazların telemetri veri listesi.

Sizden veri toplamayı, bunları tutmayı ve bunları yaparken “emin olun dostum tamamen aramızda kalacak” demeyi “Privacy” ismindeki parlatılmış bir kapta sunup etrafına bu kadar mürit toplayan Apple’ye helal olsun. Ama yine Apple iyi de sayılır ki Google Android’de yapılan son araştırmalarda iOS’tan 20 kat daha fazla veri topladığı raporlandı.

![](/assets/img/posts/0*AhjHHJPVJkPZAmTd.png)

Bunu okuyup gülen Linux kullanıcıları size geldim şimdi. Dağıtımların da hepsi telemetri toplamakta ve hatta Linux çekirdeği de. Ancak burada bir fark var. Linux çekirdeği dmesg çıktıları ile, dağıtımlar ise gerek “systemd” gerek diğer servis yöneticileri ile işletim sistemi içerisindeki her olayı ayrı ayrı günlükler. Bu günlükler genellikle “systemd” tarafında “journald” isimli servis tarafından tasnif edilir ve kullanıcılar bu günlükleri, sorunlarına çözüm olması için takip ederler. Linux’ta bu tip günlüklerin tutulması diğer işletim sistemlerinde olduğu gibi ek bir süreç ile değil, her bir program/servis tarafından veya servis yöneticileri tarafından yapılır. Bugün Linux’un ktread kernel servisi bile günlük oluşturuyor en basitinden. Ancak aradaki fark şu. Apple ve Windows bu günlükleri kendi amaçları doğrultusunda kullanmak için uzak sunuculara yüklerken ve bu yüklemede her ne kadar size “bunu yüklemek ister misin” diye sormasına rağmen işin arka planında sizi umursamadan bunu yapıyor.

Daha öncesinde bahsetmiştim. WhatsApp’ta her mesajımız okunuyor ve bunu yaparken onayladığınız lisansı size referans gösterip diyor ki, “eee izin verdin”.

[

Uçtan Uca Okunuyoruz
--------------------

### WhatsApp uçtan uca şifreleme skandalına bakış

zaryob.medium.com

](https://medium.com/uçtan-uca-okunuyoruz-a076596e3cc9)

Linux’ta ise bu olay sadece enterprise destek veya topluluk desteği içeren dağıtımlarda (örneğin RHEL veya Ubuntu) ve gerçekten kullanıcı onayına bağlı olarak var.

![](/assets/img/posts/1*AAOmXsjBSGrQT-XHF-NaRw.png)RedHat telemetri

Ayrıca Linux dağıtımları telemetri konusunda şeffaf davranmak zorunda kalıyor. Çünkü daha öncesinde Ubuntu’nun arama barında Amazon alışveriş sitesinden arama yapıp önümüze veriler çıkardığı için topluluk ile Canonical arasında bayaa sorunlar yaşanmıştı. Ayrıca Çin menşeyli Deepin’de benzeri bir şey yaptığı için mükemmel ötesi olarak lanse edilen ve benim de hoşuma giden masaüstü ortamına rağmen kullanıcılar tarafından diri diri gömüldü. Sebebi ise bu telemetrileri Çinli sitelere göndermesi idi.

Telemetri ve Gizlilik
=====================

Şimdi iyi hoş herkes telemetri kullanıyor ve bu telemetrileri bazı durumlarda gönderiyor. Bu durumlar Windows ve Apple için servisleirni güncel tutmak amaçlı, Linux’ta kullanıcının sorununa çözüm üretmek amaçlı. Ancak bu işin bir gizlilik boyutu var.

Olaya Linux dağıtımları perspektifinden bakınca bu veriler bugzilla servisleri üzerine https üzerinden veya mail formatında gönderiliyor. Gönderilen verilerde (burada dmesg çıktıları ve GNU programlarının logları bazında söylüyorum) bize ait gizliliği ihlal edecek kritik veriler bulunmamakta. Burada kastettiğim kritik verilerin başında bizim kullanıcı şifrelerimiz gibi veriler geliyor. Bazı durumlarda Linux’ta da statik IP adreslerimiz, MAC adreslerimiz isteğimize bağlı olarak bugzilla servisleri üzerinden gönderilebilir. Ancak RHEL özelinde bu verileri göndermeden önce olabildiğine logdan siler. Ubuntu’da ise bu günlükleri göndermeden önce sizin incelemenize ve değişiklikte bulunmanıza izin veriyor.

Windows ve Apple tarafında ise bunlar tabi ki hak getire. Şimdi çok güvenenlere söylüyorum. Apple yakın dönemde ABD’deki bazı eyaletlerde çocuk tacizini önlemek için iCloud fotoğraflarını inceleyerek kolluk kuvvetleri için veri sağlayacağını açıkladı. [\[2\]](https://fortune.com/2021/09/03/apple-delays-launch-feature-scanning-child-abuse-images/) Bu aslında çocuk tecavüzlerini ve pedofili önlemek için iyi bir çözüm. Ama peki gizlilik. Şimdi bu işi dünya geneline yaydığını düşünün. Sizce çocuk tacizini önlemek için bu yaptıklarını başka amaçlarla kullanamaz mı? Veya sadece fotoğraflarımızı inceleyecek sadece.

Apple daha yeni Çin hükümetine Çin özelindeki kullanıcıları takip etmesi için Moğolistan özerk bölgesine kurulan veri merkezlerinin yönetim yetkisini verdi [\[3\]](https://www.nytimes.com/2021/05/17/technology/apple-china-censorship-data.html) Sonra da şirin görünmek için Çin hükümeti izlemek için bazı uygulamaları kullanıyor diye appstore üzerinden bazı uygulamaları kaldırdığını duyurdu.

Ya Google konusuna hiç girmiyorum ve WhatsApp konusuna hiç girmiyorum bile. Bir reklam uğruna donumuzun rengine kadar satıyorlar ne diyeyim.

Sonuç olarak telemetri dediğimiz, her sistem için elzem olan raporlama sistemi, siz tutup da bunu merkezi bir yapıda bütün verileri tutup bunları kullanmak için muhafaza etmeleri siber alanda bireysel veri güvenliğini tehdit etmekte. Yani düşününsenize daha geçen aylarda Facebook’tan 1.6 milyar kullanıcının verisi çalındı. Ki aynı durumu Apple ve Microsoft da defalarca kere orta ve düşük ölçekli olarak yaşadı. Sonuçta kullanıcı verileri çalındı mı çalındı.

Telemetri verilerinin bence kullanıcı izni olmadan bu denli kolay toplanması ve kullanıcıların sadece bu verilerin toplanmasını kısıtlı imkanlarla engelleyebilmesi (çoğunlukla ise engelleyememesi) sözde özgürlük vaadeden şirketlerin bizi bir veri toplama malzemesi haline getirmesi gelecekte pek çok sorunla yüzleşmemize sebep verecek.Yalnız bildiğim tek bir şey var. Bu şekilde verileri hükümetlere peşkeş çeken şirketler bugün Dünya’nın doğusundaki soykırımın mimarlarıdırlar.

Kaynakça:
=========

* [The real reason for Windows 11](https://www.computerworld.com/article/3623772/the-real-reason-for-windows-11.html)
* [Privacy](https://www.apple.com/privacy/)
* [Ubuntu 'Spyware' Will Be Disabled In Ubuntu 16.04 LTS](https://www.omgubuntu.co.uk/2016/01/ubuntu-online-search-feature-disabled-16-04)
* [Is Deepin Linux safe, or whether it is spyware?](https://www.fosslinux.com/48103/deepin-linux-safe-spyware.htm)
* [Apple delays launch of feature that would scan for child abuse images](https://fortune.com/2021/09/03/apple-delays-launch-feature-scanning-child-abuse-images/)
* [Censorship, Surveillance and Profits: A Hard Bargain for Apple in China](https://www.nytimes.com/2021/05/17/technology/apple-china-censorship-data.html)
* [Apple accused of giving Chinese government control over local data | Engadget](https://www.engadget.com/apple-chinese-government-control-data-131343119.html)
*   [Android Telemetry](https://ethicaldebuggers.com/telemetryiosandroid/)
*   [Mobile Handset Privacy: Measuring The Data iOS and Android Send to Apple And Google](https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=n8dX1fUAAAAJ&sortby=pubdate&citation_for_view=n8dX1fUAAAAJ:Ns2bVKt8YxIC)
