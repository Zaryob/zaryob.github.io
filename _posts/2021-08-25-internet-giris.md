---
layout: post
title: "İnternet 101: İnternete Giriş"
date: 2021-08-25 12:23:43 +0300
categories: [genel, internet]
image: "2021-08-25-internet.jpg"
image_hash: "5d55d48c217a4c74ba72c08acfa886f7"
---


İnternet belki de insanlık için ampulün icadından sonraki en büyük adım olabilir.

Çünkü nasıl bugün elektrik deyince insanların aklına ilk aydınlatma sistemleri geliyorsa, bilgisayar deyince de herkesin aklına ilk olarak internet gelmekte.

Peki nedir bu internet hiç düşündünüz mü veya internet evlerimize nasıl geliyor hiç merak ettiniz mi?

Bu yazı serimde bu sorulara kendi lisanımla yanıt vereceğim. Başlayalım.

### Birazcık Tarih

İlk olarak bilgisayarların laboratuvarlardan çıkarak askeri alanda kullanılmaya başlandığı zamanlara gidelim. Yani 1950'lere. O dönemde balistik füzelerden uydulara, pek çok fizik gerektiren işlemin hesaplanması için Computatinal Unit olarak adlandırılan bilgisayarlarda yapılmaktaydı. Şimdi herkesin aklına laptop tarzı cihazlar gelse de o zamanki bilgisayarlar hem alan olarak büyük hem de çok hantal makineler idi.

![1950'lerde vakum tüplü transistörler kullanan bilgisayarlardan birisi.](/assets/img/posts/0*QjEvMk-HjpPKGYms.png)

Makinelerin askeri alanda ve uzay teknolojisinde yoğun olarak kullanılmaya başlamasının ardından bilgisayarlar arası veri aktarımı gündeme geldi. Zannımca bu olay büyük teyp disklerin taşınması esnasında yaşanan gerek kazaları gerekse olası güvenlik sorunlarını yaşamamak için eşler arası iletişim yapabilecek telgraf tarzı bir sistem üzerinde çalışılmaya başlandı. 1970'lerin sonunda bu eşler arası iletişim sistemi, farklı düğümler içeren “ağlar arasında” olacak şekilde geliştirilerek bugünkü internetin temelleri ARPANET adı ile atıldı. ARPA (Gelişmiş Savunma Araştırmaları Projeleri Birimi) tarafından ülkedeki savunma merkezleri arasında anlık iletişim kurulabilmesi ve veri transferi yapabilmek amacıyla kurulan bu ağ zamanının çözülemeyen bazı problemlerine çözüm getiriyordu. Klasik haberleşme sistemlerde aynı kablo üzerinden (örneğin bir telefon ağı için) bir santral iki eşi birbirine bağlaması halinde bu iki eşin arasındaki konuşma bitene değin başka eş konuşmaya müdahil olamıyor veya başka bir eşten gelen arama kabul edilmiyordu. Ayrıca bu iletişim modelinde veri açık bir şekilde gönderildiği için izleme ve dinlemeye açıktı. Günümüzde kullanılan **paket dağıtımı** kavramı ARPANET ile geliştirilmeye ve bugünkü baskın ses ve veri iletişim altyapısını oluşturmaya başlamıştı. Ayrıca eş zamanlı çok eşli iletişim de paket dağıtımının bize sunduğu avantajlardan birisiydi. Paket dağıtımı temel olarak verinin paketler halinde iletişim sistemine verilerek dağıtma işleminden ibaret. Bu sayede aynı anda birden fazla eşten gelen veriler alınabiliyor, iletişimin tamamlanması ile veri bütünlüğü sağlanıyor.Ayrıca bu yöntem sayesinde bağlantı paylaşılabiliyor ve aynı hat üzerinden farklı paket tipleri dağıtılabiliyordu. İlkin internet olan ARPANET o zamanlar o kadar geliştirilmeye muhtaç bir yapıydı ki ilk iletişim 1968'de, 10 seneye yakın süren bir ARGE çalışmasının ardından ilk ARPA ağı, birisi Kaliforniya Üniversitesi Los Angeles kampüsü, diğeri Kaliforniya Üniversitesi Santa Barbara kampüsü, birisi Stanford Üniversitesi ve sonuncusu da Utah Üniversitesinde bulunan 4 eşli ağ olarak kurulmuş, eşler arası mesaj iletimi denemesi yapılmış, eşler arasında `login` komutu gönderilmeye çalışılsa da saatler süren çalışma sayesinde sadece `l` ve `o` harfleri gönderilebilmiş. İlerleyen aylarda iletişim mantığındaki yaşanan sorunlar düzeltilerek ağ genişletilmiş 1969'da döneminin zirvesini yapmıştı.

Yine o tarihte eşler arası veri iletimini düzenlemek amacıyla tarihte geliştirilen ilk ağ protokolü olan 1811 protokolü üzerinden iletişim sağlanmaya başlanması ile ARPANET üniversiteler arası veri iletim projesi halini aldı.

1980'lerde [TCP/IP](https://tr.wikipedia.org/wiki/TCP/IP "TCP/IP") yapısının ARPANET üzerinde belirleyici rol oynaması, bu yapının altında çıkarılan yeni protokollerin (örneğin mail protokolü olan ve ping yazılımında da kullanılan ICMP protokolü, http protokolü gibi bugünkü sıkılıkla kullandığımız protokoller ve bu protokollerin ataları) ARPANET’in gelişmesini sağladı. Zamanla eklenen farklı düğüm ve sistemler ile ARPANET yeni doğan İnternet’in birçok bileşeninden yalnızca birisi oldu. 1983'de Ulusal Bilim Vakfı tarafından Amerikan merkezli pek çok özel ağ sistemi fonlanarak (ARPANET’de buna dahil) aynı ortak ağ üzerinde toplandı ve bu sisteme de “internet” adı konuldu.

İnternet kelimesi, “kendi aralarında bağlantılı ağlar” anlamına gelen _Interconnected Networks_ teriminin kısaltmasıdır.

İnternet bu tarihten itibaren eklenen yeni bağlantı noktaları ile gün geçtikçe büyüyen bir deve dönüştü. Bugün elektrik kadar önemli bir ihtiyacımız haline geldi.

### Temel Yapılar

Artık internetin tarihi hakkında biraz bilgi sahibi olduğunuza göre, elimizdeki soruyu ele alalım: “İnternet nasıl çalışır?”

İnternet, birbirine bağlı cihazlar arasında çeşitli veri ve ortamları ileten dünya çapında bir bilgisayar ağıdır. İnternet Protokolü (IP) ve Aktarım Kontrol Protokolü’nü (TCP) takip eden bir paket yönlendirme ağı kullanarak çalışır [[1]](https://www.lifewire.com/tcp-transmission-control-protocol-3426736)[[2]](https://tr.wikipedia.org/wiki/%C4%B0nternet)

İnternet bir yönüyle birbiriyle ile bağlı olan telefon hatlarıyla benzer prensiplerle çalışır ki bu sebeple dünyanın pek çok yerinde internet hala mevcut olan telefon hatları üzerinden dağıtılmaya devam etmektedir. Ülkelerarasında örülü olan karasal hatlar ve deniz altı hatları ile gökyüzünden iletişim uyduları aracılığıyla ülkeler arası veri aktarımı sağlanabilmektedir.

![](/assets/img/posts/0*i-mlvKFIhcMLLcEF.gif)

Temelde internet işte bu ülkeler arası ağlar arasında kurulan omurga sistemler üzerinden paylaşılır, ve ağı bu omurga sistemler üzerinden yönetiriz. İnternet omurgası, birbirine bağlanan birçok büyük ağdan oluşur. Bu büyük ağlar, Ağ Servis Sağlayıcıları (Network Service Provider — NSP) olarak bilinir. Bizim ülkemiz için örneğin bu sağlayıcılardan birkaçı; TürkNET, Kablonet ve Türktelekom’dur. Bu ağlar, paket trafiğini değiştirmek için birbirleriyle eşleşir. NSP Backbone olarak ifade edilen bu omurgalardan en fazla üçü ortak bir Ağ Erişim Noktasına (Network Access Point — NSP) bağlanır. Bu noktaların temel görevi belirtilen ağ servis sağlayıcıları arasında paket aktarımı yapmaktır. NAP’lerde, paket trafiği bir NSP’nin omurgasından başka bir NSP’nin omurgasına atlayabilir.

Yani olaya basitçe bakarsak sizin evinize gelen kablo buradan örneğin mahalle içi bir NSP omurgasına bağlanıyor, oradan bütün mahallelerin ayrı ayrı omurgaları bir NAP üzerine bağlanıyor. Bunu kafanızda bir şekil oluşsun diye söyledim.

NSP’ler ayrıca Metropolitan Alan Değişim Omurgaları (Metropolitan Area Exchanges — MAE) ile birbirine bağlanabilir. MAE’ler, NAP’lerle aynı amaca hizmet eder, ancak özel sektöre aittir (Buradaki örnekte mesela Turkcell altyapısına aktarılarak ağınız onun üzerinden şehir hattına bağlayanabilir). Temel yapı aynen budur. Ancak şimdi evinizi Türkiye gibi hayal edin, mahalleniz Asya ve şehriniz dünya olsun. Birden fazla internet düğüm noktası olan NAP ve MAE’ler bu mantıkla çalışır. Hepsi birbirine bağlanarak, düğümler halinde interneti tüm dünyaya yaymaya çalışır. Aslında bu örnekte kendi evinize şehir şebekesinden nasıl internet geldiğini anlatmam da pek bir tesadüfen veya lafın gelişi yapılmış bir şey değil.

![Örnek bir internet bağlantı şeması. yalnızca NSP’lerin birbirleriyle ve daha küçük ISP’lerle nasıl bağlantı kurabileceğini göstermeyi amaçlamaktadır.](/assets/img/posts/0*Pt5J2fTPzAHmusL9.jpg)

NAP’ler orjinal İnternet ara bağlantı noktalarıydır. Hem NAP’ler hem de MAE’ler, İnternet Değişim Noktaları (Internet EXchanger — IX) olarak adlandırılır. NSP’ler ayrıca Internet Servis Sağlayıcıları (Internet Service Provider — ISP) ve daha küçük bant genişliği sağlayıcıları gibi daha küçük ağlara bant genişliği satar. Yani ülke içerisindeki servis sağlayıcıları belirli bir ağ bandı satın alarak bunu kendi oluşturdukları ufak omurgalar (ufak dediğime bakmayın, küresel manada ufak) aracılığı ile dağıtır. Örneğin ülkenin üniversite internetleri (bizim ülkemiz örneğinde ULAKNET) yine bu şekilde kurulur. Ulaknet örneğinde mesela, her üniversite kendi omurga sistemleri ve kabloları ile birbirine bağlıdır. En sonunda ODTU üzerinden global internete bağlanmak üzere veri NAP’e verilir.

Çoğu NSP, ağ altyapılarının haritalarını web sitelerinde yayınlar ve arama servisleri (Google, Bing gibi) kolayca istenilen web sitelerini bulabilir. Boyutu, karmaşıklığı ve sürekli değişen yapısı nedeniyle İnternet’in gerçek bir haritasını çizmek neredeyse imkansız olurdu. Çoğu NSP bu haritalandırmayı, Dinamik Ana Bilgisayar Yapılandırma Protokolü (Dynamic Host Configuration Protocol — DHCP) kullanarak yapılandırdıkları IP’lerin alan adları ile eşleştirip bu eşleşlemeler ve kendi alt düğümlerini kitaplık olarak paylaşarak yapmaktadırlar.

Burada basitçe anlattığım yapı aslında çok karmaşık bir yapının genel formülize edilmiş halidir. Yani işler aslında göründüğünden karmaşık. Ve bu karmaşık ağın değeri de çok fazla. Haziran 1996'da, kıyıdan kıyıya 45 Mbps fiber optik kiralamanın maliyeti ve ayrıca gerekli ek donanım ayda yaklaşık 150.000 dolardı. [[3]](http://www2.ic.uff.br/~michael/kr1999/1-introduction/1_08-topology.htm) Şu an bu maaliyetin daha yüksek fiyatlara ulaştığını tahmin etmek hiç de zor olmasa gerek.

Uç sistemler yani ülkenin şehirleri, yerel bir ISP’ye bağlanarak İnternet’e erişim kazanır. Üniversiteler ve şirketler yerel ISP’ler olarak hareket edebilir, ancak omurga servis sağlayıcıları üzerinden yerel bir ISP ye bağlanarak da hizmet verebilir.

En başta internetin çıkışını anlatırken hatırlarsak dedik ki internet birden fazla birbirine bağlı ağı ifade etmekte. İşte internetin omurga sistemleri tam da bu amaç için kullanılmakta. Peki bu ağ kimin elinde? Hemen bir komplo teorisyenliği yapalım mı, kim bu devasa ağı yönetiyor?

#### İnterneti Kim Yönetiyor?

İnternet, daha öncesinde bahsettiğim gibi birbirine bağlı bir çok özerk ağdan oluşan küresel bir ağdır. Merkezi bir yönetim organı olmadan çalışır. Farklı omurga sistemlerinin NAP’lere eklenmesi ile gitgide genişlemektedir de. Ancak bu kadar geniş bir sistemi otobana benzetirsek, elbet bu otoban üzerinde bazı kural koyucular bulunacaktır. Bu kurallar çekirdek protokollerin ( IPv4 ve IPv6 ) teknik olarak desteklenmesi ve standardizasyonundan tutun kullanılacak donanımlara ait standartların belirlenmesi tamamiyle kar amacı gütmeyen bir kuruluş olan [İnternet Mühendisliği Görev Gücü’nün](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (Internet Engineering Task Force — IETF) yetkisi altındadır. Herkesin teknik uzmanlığa katkıda bulunarak ilişki kurabileceği bu görev gücü altyapı ve protokollerin tamamını belirlenmesinde rol oynarken; internete dair diğer belirleme ve düzenlemeler “_dünyadaki tüm insanların yararına İnternetin açık gelişimini, evrimini ve kullanımını sağlamak”_ amacı ile kurulan, hükümetler, üniversiteler ve diğer internet gönüllülerinden oluşan İnternet Topluluğu ([Internet Society](https://en.wikipedia.org/wiki/Internet_Society "Internet Society") — ISOC) tarafından yönetilmektedir. İnternet topluluğu; İnternet Mimarisi Kurumu ([Internet Architecture Board](https://en.wikipedia.org/wiki/Internet_Architecture_Board "Internet Architecture Board") — IAB), İnternet Mühendisliği Yönlendirme Kurulu ([Internet Engineering Steering Group](https://en.wikipedia.org/wiki/Internet_Engineering_Steering_Group "Internet Engineering Steering Group") — IESG), İnternet Araştırmaları Görev Gücü ( [Internet Research Task Force](https://en.wikipedia.org/wiki/Internet_Research_Task_Force "Internet Research Task Force") — IRTF), ve İnternet Araştırmaları Yönlendirme Grubu ([Internet Research Steering Group](https://en.wikipedia.org/wiki/Internet_Research_Steering_Group "Internet Research Steering Group") — IRSG) alt grupları ve kurumları ile resmi olarak internet mimarisi üzerine yapılan ve yapılacak araştırmaların desteklenmesi ve kötüye kullanımların önlenmesi görevlerini almıştır.

İnternetteki bir diğer önemli yönetim noktası ise henüz bahsetmediğimiz alan adı ve aidiyet olaylarının korunması ve yönetilmesidir. [İnternet Tahsisli İsimler ve Numaralar Kurumu](https://en.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers) (Internet Corporation for Assigned Names and Numbers — ICANN) tarafından alan adları ve özel IP blokları yönetilerek internet üzerinde alan adı ve özel IP bloğu bazlı hak ihlali yapılması engellenir. Bununla beraber dünyanın beş bölgesi için [Bölgesel İnternet kayıtları](https://en.wikipedia.org/wiki/Regional_Internet_registry) (Reginal Internet Registry — RIR) merkezleri bulunmakta. Her bölgenin kendi merkezi her bölge için ayrılmış belirli bir adres havuzundaki yerel kayıtlara IP adres blokları ve diğer İnternet parametrelerini Yerel İnternet Sağlayıcılarına atama yetkisine sahiptir.

Yani uzun lafın kısası internetin sahipliği belirli bir zümreden çok internete bağlanan herkese aittir. Ancak internet standartlarının belirlenmesi ve servislerin devamlılığı gönüllü mühendisler tarafından kurulan ve pek çok hükümet ve üniversite tarafından fonlanan bu kurumlar tarafından “bilim ve mühendislik esas alınarak” yönetilmektedir.

#### **Sonuç:**

Artık internetin nasıl çalıştığını biliyoruz. İlerleyen yazılarımda internete daha derinlemesine bakacağız. Bu sefer bazı protokolleri, TCP/IP modelini ve başka şeyleri anlatacağım. Belki de fiber optik sistemleri ve 5G gibi bugünlerde sıklıkla kullandığımız sistemleri inceleyeceğiz.

İnternet, askeri amaçlı bir araştırma projesi olarak başlangıcından bu yana çok yol kat etti. İnternetin ne olacağını gerçekten kimse bilmiyor. Ancak kesin olan bir şey var. İnternet, dünyayı başka hiçbir mekanizmanın sahip olmadığı şekilde birleşti. Ancak ilerleyen yıllarda uzay çalışmalarının daha da artması ve başka gezegenlerde koloniler kurulması ile küresel internet belki de yetmeyecek. Ve gezegenler arası iletişim için farklı metodları da bu sisteme işlememiz gerekecek.

### Kaynakça:

* [**İnternet - Vikipedi**
_İnternet, bilgisayar sistemlerini birbirine bağlayan elektronik iletişim ağıdır.](https://tr.wikipedia.org/wiki/%C4%B0nternet)

* [**İnternet iletişim kuralları dizisi — Vikipedi** _İnternet protokol takımı](https://tr.wikipedia.org/wiki/%C4%B0nternet_ileti%C5%9Fim_kurallar%C4%B1_dizisi)

* [**How to Host a Website Right Out of Your Own Home**_This article outlines how to host a website and explains everything you need to be successful at it. ](https://www.lifewire.com/tcp-transmission-control-protocol-3426736)

* [**How Does the Internet Work?** Introduction Where to Begin? Internet Addresses Protocol…_web.stanford.edu](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)

* [**Computer Networking: A Top-Down Approach Featuring the Internet Chapter 2 -- 1.8: Internet…**](https://www.cs.huji.ac.il/course/2002/com1/book/chapter1/1_8.htm)

* [**Internet structure: Backbones, NAP's and ISP's** _Our discussion of layering in the previous section has perhaps given the impression that the Internet is a carefully…_www2.ic.uff.br](http://www2.ic.uff.br/~michael/kr1999/1-introduction/1_08-topology.htm)
