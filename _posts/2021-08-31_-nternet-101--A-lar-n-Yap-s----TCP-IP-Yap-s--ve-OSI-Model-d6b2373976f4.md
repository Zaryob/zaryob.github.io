---
layout: post
title: "İnternet 101: Ağların Yapısı — TCP/IP Yapısı ve OSI Model"
date: 2021-08-31 12:23:43 +0300
categories: [genel, internet]
image: "2021-08-31-internet.jpg"
image_hash: "0cd2da7bebff6e26129bc28814aee8c2"
---

Bir önceki yazımda internette iletişimin nasıl yapıldığını ve IP ile DNS dalgasını anlatmıştım. Önceki yazılımda ise internetin donanım boyutunu görmüştük. Yani daha çok altyapı boyutunu. Bu yazımızda ise internetin daha çok hizmet boyutunu anlatacağım.

İlk yazımda internetin bir otoban gibi olduğunu söylemiştim. Bir önceki yazımda ise internet cihazlarından bahsettiğimde sıkça bir protokol olayından bahsetmiştim. Protokol çeviriciler, iletişimin farklı protokoller üzerinde yapılması vb. diyip durmuştum.

Protokoller iletişim esnasında yapılacak veri aktarımında paketlerin yapısını belirleyen kurallar dizisidir. İnternette veri aktarımı için farklı protokoller bulunur. Bu protokoller belli modeller altında anlatılmıştır. OSI Model ve TCP/IP’de bu protokolleri tanımlayan temel protokol paketleridir (birden fazla protokolün aynı internet ağında nasıl yönetileceğini açıklamakta kullanılan referans belgelerin bütününe paket demekteyiz.).

Bu modeller protokollerin temellerini, paketlerin yapısını ve iletişimin hangi katmanlarda yapılacağını anlatmaktadır. Tamamiyle teknik bir konudur.

Bu kısımda protokollerin temel aldığı ağ yapısından bahsedeceğim. Bir sonraki yazıda da sıklıkla kullandığımız protokollerden ve bu protokollerde nasıl iletişim yapıldığından bahsedeceğim.

### TCP/IP

![TCP/IP Model](https://cdn-images-1.medium.com/max/800/0*xsemEx5b7DPJ0mFG.png)


#### TCP/IP Nedir?

Genel olarak **TCP/IP** olarak bilinen **İnternet Protokol Paketi,** internet ve benzeri ağlarda kullanılan iletişim protokollerini belirleyen bir standartlar kümesidir. **TCP** ilk olarak 1974 yılında **A Protokol for Packet Network Intercommunication** başlıklı bir makalede duyurulmuştur. Verilerin bölünerek paketler halinde karşı tarafa iletilmesini esas alan anahtarlamalı paket modeli olarak nitelendirilmektedir.

**TCP**, verilerin nasıl paketleneceğini, adresleneceğini, iletileceğini, yönlendirileceğini ve alınacağını belirten bir standartasyondur. Temel olarak uçtan uca veri iletişimin nasıl sağlanacağını anlatır. Bu model, ilgili tüm protokolleri, her protokolün ağ kapsamına göre sınıflandıran dört soyut katmanda düzenlenmiştir. En düşükten en yükseğe bu katmanlar, tek bir ağ segmentinde (bağlantı) kalan veriler için iletişim yöntemlerini içeren **bağlantı katmanı;** bağımsız ağlar arasında ağlar arası çalışmayı sağlayan **internet katmanı**; ana bilgisayardan ana bilgisayara iletişimi yöneten **taşıma katmanı**; ve uygulamalar için işlemler arasında veri alışverişi sağlayan **uygulama katmanı** olarak adlandırılır.

> TCP/IP modeli ve onu oluşturan protokollerin altında yatan teknik standartlar, İnternet Mühendisliği Görev Gücü (IETF) tarafından sürdürülmektedir. Geçmişte ARPANET’in Birleşik Devletler Savunma Bakanlığı tarafından finanse edilmesi sebebiyle, ilk dönem sürümleri **Savunma Bakanlığı (Department of Defence — DoD) Modeli** olarak bilinen bu model sonradan TCP/IP adını almıştır. Daha sonrasında ise genel ağ sistemleri için daha kapsamlı bir referans protokol paketi olan olan OSI modeline öncülük etmiştir.

Paketteki mevcut temel protokoller, **İletim Kontrol Protokolü** (Transmission Control Protocol - TCP) ve **İnternet Protokolüdür** (IP) olarak iki temel grupta incelenir. İlki eşler arası iletişimi açıklarken ikincisi de internet bağlantısı standartlarını ifade etmektedir.

#### TCP/IP Standartları

Bu kısımda bazı soyut bilgiler vereceğim. Çünkü buradaki bilgilerin tamamı dokumantasyonlardan yararlanarak ortaya konulan teknik bilgilerdir. **RFC** olarak adlandırılan TCP/IP’nin tanımlanmasında kullanılan standart numaralara sahip dokümanlardan basitçe bu standartları size aktaracağım.

İnternet Görev Gücü **IETF**, TCP/IP’yi oluşturan dört soyutlama katmanını genel hatlarıyla **RFC 1122** belgesinde özetlemiştir. Erken bir mimari belge olan RFC 1122 , mimari ilkeleri katmanlar üzerinde açıklamıştır. Bu belgede bu katmanlar şöyle tanımlanmıştır:

*   **Uygulama katmanı:** Uygulamalar, ya da uygulama içinde yapılan işlemler bu katmanda iletişim sağlamalıdır. Bu işlemler kullanıcı verilerini oluşturmak ve bir başka uygulamalar veya aynı ana bu verileri iletişimi bu katman üzerinde kurar. Uygulamalar, alttaki alt katmanlar tarafından sağlanan hizmetlerden, özellikle de diğer işlemlere “güvenilir” veya “güvenilmez” borular sağlayan taşıma katmanından yararlanır. İletişim ortaklar arasındaki istemci-sunucu modeli ve eşler arası ağ iletişimi gibi uygulama mimarisi ile karakterize edilir. **SMTP**, **FTP**, **SSH**, **HTTP** gibi tüm uygulama protokollerinin çalıştığı katman uygulama katmanıdır. İşlemler, esas olarak hizmetleri temsil eden bağlantı noktaları aracılığıyla ele alınır.
*   **Taşıma katmanı:** Yerel ağdan uzak ağlara bağlantıyı açıklar. Ev sahibinden ana iletişim yönlendiriciler ile birbirlerinden ayrılmış olması durumunda uygulamaların iletişim ihtiyaçları için bir kanal kullanılması gerekmektedir. Bu kanal bu katman üzerinde tanımlanmıştır. Bu katmanda 2 temel protokol örneklendirilmiştir: **UDP**, bu katmanda bulunan, güvenilir olmayan, bağlantısız bir datagram hizmeti sağlayan temel taşıma katmanı protokolüdür. **İletim Denetimi Protokolü** olan **TCP** yine bu katmanda bulunan bir taşıma katmanı protokolüdür, UDP’den farklı olarak akış denetimi, bağlantı kurulması ve güvenilir veri iletimi sağlar.
*   **İnternet katmanı:** Bu katman temel ağ bağlantılarının gerçek topolojisini (düzenini) gizleyen tek tip bir ağ arabirimi sağlar. Bu nedenle, ağlar arası iletişimi bu katman üzerinde kurarız. Aslında bu katman interneti tanımlar ve kurar. Bu katman, **TCP/IP** protokol takımı için kullanılan adresleme ve yönlendirme yapılarını tanımlamaktadır. Bu kapsamda birincil protokol, cihazların ağ üzerindeki adreslerini tanımlayan **İnternet Protokol (IP)** adresleridir . Yönlendirmedeki işlevi, son veri hedefine daha yakın bir ağa bağlantısı olan bir IP yönlendiricisi olarak işlev gören bir sonraki ana bilgisayara datagramları taşımaktır.
*   **Bağlantı katmanı:** Barındıran yönlendiricilere müdahale etmeden iletişim hangi yerel ağ bağlantısı kapsamında ağ yöntemleri tanımlar. Bu katman, yerel ağ topolojisini tanımlamak için kullanılan protokolleri ve İnternet katmanı datagramlarının komşu ana bilgisayarlara iletimini etkilemek için gereken arayüzleri içerir.

![](https://cdn-images-1.medium.com/max/600/0*FsyLCNdE1qRdtcw4.jpg)

Bu katmanlar en dıştan en içe doğru sıralandığında

*   4\. Katman — Uygulama Katmanı
*   3\. Katman — Taşıma Katmanı
*   2\. Katman — İnternet Katmanı
*   1\. Katman — Bağlantı Katmanı

olarak sayılabilir.

**TCP/IP Protokolleri**

Protokol Paketleri ile ilgili önceki daha önce liste edildiği gibi, İnternette kullanılan birçok protokolün olduğu tahmin edilebilir. Bu doğru; İnternetin çalışması için gerekli birçok iletişim protokolü vardır. Bunlara TCP ve IP protokolleri, yönlendirme protokolleri, ortam erişim kontrol protokolleri, uygulama seviyesi protokolleri vb. dahildir.

Minimal bir TCP/IP uygulaması; İnternet Protokolü (**IP**), Adres Çözümleme Protokolü (**ARP**), İnternet Kontrol Mesajı Protokolü (**ICMP**), İletim Kontrol Protokolü (**TCP**), Kullanıcı Datagram Protokolü (**UDP**) ve İnternet Grup Yönetimi Protokolü (**IGMP**) protokollerinin tamamını içermelidir.

Bu protokollerin ne olduğunu ve nasıl çalıştığını ileride başka bir postta anlatacağım. Ancak TCP protokollerinin çalışma mantığı üç aşamada açıklanabilir. **Birinci** aşamada hedefe bir bağlantı isteği gönderilir. **İkinci** aşamada bağlantının gerçekleştiği onaylanır ve veri transferi başlar. **Üçüncü** aşamada ise veri transferinin tamamlandığı taraflara iletilerek bağlantı sonlandırılır. Bu üç aşamanın gerçekleşmesi iletişim için bir ‘’State’’ işleminin tamamlanması olarak tanımlanır.

* * *

### OSI Modeli

OSI Modeli (Açık Sistem Bağlantı Modeli — Open Systems Interconnection ) modeli 984’te Uluslararası Standartlaştırma Örgütü (ISO) tarafından geliştirilmiş ağ içerisinde farkındalığına sahip cihazlarda çalışan uygulamaların birbirleriyle nasıl iletişim kuracakları tanımlayan bir ağ modelidir. TCP/IP’den farklı olarak önce katman yapısı olarak ortaya konulmuş model olarak ortaya çıkmıştır. Ardından bu modele uygun protokoller yazılmıştır.

Bu model temel olarak ağı 7 katmana ayırmıştır.

**7\. Uygulama Katmanı**

Uygulama katmanı, web tarayıcıları ve e-posta istemcileri gibi son kullanıcı yazılımları tarafından kullanılır. Yazılımın bilgi gönderip almasına ve kullanıcılara anlamlı veriler sunmasına izin veren protokoller sağlar. Uygulama katmanı protokollerine birkaç örnek, HyperText Aktarım Protokolü (HTTP), Dosya Aktarım Protokolü (FTP), Posta Hizmeti Protokolü (POP), Basit Posta Aktarım Protokolü (SMTP) ve Etki Alanı Adı Sistemidir (DNS).

**6\. Sunum Katmanı**

Sunum katmanı, uygulama katmanı için verileri hazırlar. Diğer uçta doğru şekilde alınması için iki cihazın verileri nasıl kodlaması, şifrelemesi ve sıkıştırması gerektiğini tanımlar. Sunum katmanı, uygulama katmanı tarafından iletilen herhangi bir veriyi alır ve oturum katmanı üzerinden aktarım için hazırlar.

**5\. Oturum Katmanı**

Oturum katmanı, cihazlar arasında oturum adı verilen iletişim kanalları oluşturur. Oturumların açılmasından, veriler aktarılırken açık ve işlevsel kalmasının sağlanmasından ve iletişim sona erdiğinde kapatılmasından sorumludur. Oturum katmanı ayrıca veri aktarımı sırasında kontrol noktaları ayarlayabilir; oturum kesilirse cihazlar son kontrol noktasından veri aktarımına devam edebilir.

**4\. Taşıma Katmanı**

Taşıma katmanı, oturum katmanında aktarılan verileri alır ve iletim tarafında “segmentlere” ayırır. Alıcı taraftaki segmentleri yeniden birleştirmek ve oturum katmanı tarafından kullanılabilecek verilere dönüştürmekten sorumludur. Aktarım katmanı, akış kontrolünü, alıcı cihazın bağlantı hızına uygun bir hızda veri gönderme ve hata kontrolünü, verinin yanlış alınıp alınmadığını kontrol ederek ve değilse tekrar talep ederek gerçekleştirir.

**3\. Ağ Katmanı**

Ağ katmanının iki ana işlevi vardır. Biri, segmentleri ağ paketlerine bölmek ve paketleri alıcı uçta yeniden birleştirmek. Diğeri, fiziksel bir ağ boyunca en iyi yolu keşfederek paketleri yönlendirmektir. Ağ katmanı, paketleri bir hedef düğüme yönlendirmek için ağ adreslerini (tipik olarak İnternet Protokolü adresleri) kullanır.

**2\. Veri Bağlantı Katmanı**

Veri bağlantı katmanı, bir ağ üzerinde fiziksel olarak bağlı iki düğüm arasında bir bağlantı kurar ve sonlandırır. Paketleri çerçevelere böler ve kaynaktan hedefe gönderir. Bu katman iki bölümden oluşur: Ağ protokollerini tanımlayan, hata denetimi gerçekleştiren ve çerçeveleri senkronize eden Mantıksal Bağlantı Kontrolü (LLC) ve cihazları bağlamak ve veri iletmek ve almak için izinleri tanımlamak için MAC adreslerini kullanan Medya Erişim Kontrolü (MAC).

**1\. Fiziksel Katman**

Fiziksel katman, ağ düğümleri arasındaki fiziksel kablo veya kablosuz bağlantıdan sorumludur. Cihazları bağlayan adaptörü, elektrik kablosunu veya kablosuz teknolojiyi tanımlar ve bit hızı kontrolü ile ilgilenirken, sadece bir dizi 0 ve 1 olan ham verilerin iletilmesinden sorumludur.

Farkettiğiniz gibi OSI modeli protokollerle harmanlanmış bir model olmaktan çok protokollerin kullanmasına uygun olarak ağ katmanları belirtir. Bugünün dünyasında yeni teknolojiler bu katman mantığını esas alarak geliştirilmektedir.

* * *


### OSI ve TCP/IP Modellerinin Karşılaştırması:

![TCP/IP ve OSI modellerinin katman karşılaştırması şekildeki gibidir.](https://cdn-images-1.medium.com/max/800/0*QJh-OT-cnZ9N7uqd.png)


#### OSI ve TCP/IP Modelleri Arasındaki Benzerlikler

*   Her iki referans modeli de katmanlı mimariye dayanmaktadır. Hatta bu sebeple modellerdeki katmanlar birbirleriyle karşılaştırılır. Ancak OSI modelinin fiziksel katmanı ve veri bağlantı katmanı, TCP/IP modelinin bağlantı katmanına karşılık gelir.
*   Her iki modelde de ağ katmanları ve taşıma katmanları aynıdır. OSI modelinin oturum katmanı, sunum katmanı ve uygulama katmanı birlikte TCP/IP modelinin uygulama katmanını oluşturur.
*   Her iki modelde de protokoller katman bazında tanımlanmıştır.
*   Her iki modelde de veriler paketlere bölünür ve her paket kaynaktan hedefe giden bireysel rotayı alabilir.

#### OSI ve TCP/IP Modelleri Arasındaki Farklar

*   OSI modeli, her katmanın işlevlerine dayanan genel bir modeldir. TCP/IP modeli, protokol odaklı bir standarttır.
*   OSI modeli, hizmetler, arayüzler ve protokoller olmak üzere üç kavramı birbirinden ayırır. TCP/IP’nin bu üçü arasında net bir ayrımı yoktur.
*   OSI modeli, iletişimin nasıl yapılması gerektiğine dair yönergeler verirken, TCP/IP protokolleri İnternet’in geliştirildiği standartları düzenler. Dolayısıyla TCP/IP daha pratik bir modeldir.
*   OSI’de önce model geliştirildi, ardından her katmandaki protokoller geliştirildi. TCP/IP paketinde önce protokoller geliştirildi, ardından model geliştirildi.
*   OSI yedi katmana sahipken, TCP/IP dört katmana sahiptir.

### Kaynakça:

* [**Internet protocol suite - Wikipedia**](https://en.wikipedia.org/wiki/Internet_protocol_suite)
* [**OSI & TCP/IP models**](https://study-ccna.com/osi-tcp-ip-models/)
* [**What is the OSI Model?**](https://www.forcepoint.com/tr/cyber-edu/osi-model)
