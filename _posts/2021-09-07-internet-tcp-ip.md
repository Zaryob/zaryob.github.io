---
layout: post
title: "Internet 101: TCP Ip Uygulamaları"
date: 2021-09-07 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-07-internet-tcp-ip.jpg"
image_hash: "c07c7500ed57e97f4beb0fe7adb9016a"
---


TCP/IP sadece internetten ibaret sanıyorsanız yanlış düşünüyorsunuz.

Bu bölüme kadar internetin hep en temel olan kısımlarını anlattım. Ancak bunu anlatırken şunu farkettim hep ben, bazı şeyleri kafada canlandırmak çok zor. Ben de sadece bunun teorik olan kısımlarını kısa kısa notlar halinde siz okurlarıma sundum. Bazılarınız bu konunun daha derinini öğrenmek istiyor olabiliriz. Bu konuda bir düşüncemi iletmek istiyorum. Tabi ki bu düşüncemi tek başıma oturup ortaya atmış da değilim.

Ben CS (Bilgisayar Bilimi) tarafına daha meraklı ve ilgili birisi olduğum için bir konuyu öğrenirken en temeline kadar öğrenmeye özen gösteriyorum. Ancak bu sizler için gerekli olmayabilir. O sebeple her okuduğumdan sadece aklımda kalanları ufak notlar halinde paylaşıyorum, hem notlarımı kaybetmiyorum hem de bence bilgi öğrenmenin en önemli şartını yerine getirmiş oluyorum.

Bu konuya kadar geldiğimiz noktadaki internet iletişimini gözünüze getirin, bir bilgi her bir düğüm arasında yayılır. Direk ilk düğüm ile son düğüm arasında direk bir bilgi iletilmez. Bu sebeple yaptığım işi bir amaca oturtmuş durumdayım. Elbet birisi bu yazılarımı okuyarak ileride belki etkilenecek ve kendisi de öğrendiklerini başkası ile paylaşacak. Bu şekilde bilgi paylaşılır insanlar arasında ve böyle kalkınır medeniyetler. Neyse asıl konumuza dönelim.

Bu yazımda, birçok uygulamanın desteklediği TCP/IP protokolünü kullanan bazı uygulamalarını açıklayacağım. Aslında bu uygulamalardan bazıları var ki, internetle bile alakası yok. Bu uygulamalardan bazıları basit ve tamamen kolay bir işlem için üretilmiştir (Finger ve Whois), bazıları ise karmaşıktır (X Pencere Sistemi gibi). Bu uygulamalara sadece kısa bir genel bakış atacağız ve TCP/IP protokollerinin kullanan uygulamaları inceleyeceğiz. Ek olarak, bazı İnternet kaynak keşif araçlarına genel bir bakış atmış olacağım ki bu araçlar, konumlarını ve tam adını bilmediğimiz öğeleri arayarak İnternet’te gezinmemize yardımcı olacak araçlardan tutun da internetteki bazı şeyleri daha detaylı incelememizi ve paketleri takip etmemizi sağlayacak araçlara kadar geniş bir araç kataloğu var. Bunlara belki sonra bakarım ama temelde ufak araçlardan bu yazıda bahsedeceğim. Belki ötekisi ise bir başka yazının konusu olur.

Server-Client Mantığı
=====================

![](https://miro.medium.com/max/20000/0*TEWXb8-YhuXxkPR8.png)

Bu mantık aslında Unix ekosistemi ile gelen bir mantıktır. Temel olarak her büyük program ve kendi içerisinde haberleşen sistemler işletim sistemi içerisinde aynı bir web sunucusunda olduğu gibi davranır. Yani iletişimini bir soket üzerinden sunucu kullanarak ve bunu alan bir istemci yazılım ile sağlar. Bu temelde performansı azaltsa bile birden fazla kez aynı programı çalıştırmanız durumunda aynı sunucu üzerinden eşzamanlı olarak çalışmak hem deadlock oluşmasını engeller hem de süreçleri manüple etmesi daha zor bir hale getirir. Ayrıca bir sunucu (örneğin Xorg veya DBus gibi — gerçi Dbusun durumu biraz daha farklı ama olsun) üzerinden tüm süreçleri takip edebilmeyi sağlar. Ayrıca pek çok program temelinde Unix soketi üzerinden diğer servislere bağlanarak haberleşir. Unix etki alanı soketi veya IPC soketi, aynı ana bilgisayar işletim sisteminde yürütülen işlemler arasında veri alışverişi için bir veri iletişim uç noktası oluşturur, ve çoğu süreç bazlı istem (fork, veya kill gibi) de bu etki alan soketi üzerinden yapılır.

Bu durumlarda genelde Middleware (Orta Katman) işletim sistemi olur. Orta katman iki ayrı uygulamayı birbirine bağlayan özel tipteki yazılımlara orta katman adı verilir. Örneğin, bir veritabanı sistemini bir web sunucuya bağlayan yazılım bir orta katman ürünüdür. Aynı şekilde bu soketi yöneten çekirdek de bu şekilde bir orta katman oluşturur.

Temel TCP/IP Uygulamaları
=========================

Bu uygulamalar TCP protokolünü kullanan bir protokoller ailesidir aslında.

HTTP
----

![](https://miro.medium.com/max/20000/0*PSAwLkL4h1I6Rvo8.png)

**Köprü Metni Aktarım Protokolü** ( **HyperText Transfer Protocol — HTTP** ) hypermedia bilgi sistemleri dediğimiz, son kullanıcı tarafından okunabilecek forma getirilecek olan verilerin aktarıldığı en temel protokoldür. İlk geliştirildiği dönemde yazı aktarımı yapmak için kullanılmıştır. HTTP veri iletişiminin temelidir World Wide Web (onu da bir sonraki yazıda detaylandırayım), köprü metni adı verdiğimiz şeyler düz yazı, kaynaklara kullanıcı kolayca erişim sağlayan linkler, medya dosyaları veya etkileşim komutu (örneğin fare tıklaması veya bir web tarayıcısında ekrana dokunma işlemi)verilerini taşımakta kullanılır.

HTTP 1989 yılında Tim Berners-Lee tarafından CERN içerisinde veri iletimi yapmak amacı ile tasarlanmıştır. Ancak kullanımı bu protokolü kullanan CERN hocaları tarafından kendi üniversitelerine adapte edilmeye başladığında hızla gelişmiş ve ilk HTTP RFC belgesi olan [RFC 1945](https://datatracker.ietf.org/doc/html/rfc1945) belgesinin yazılmasının ardından Internet Engineering Task Force ve Dünya Çapında Ağ Birliği çalışma grubu (W3C) tarafından 1997'ye kadar geliştirilmiştir. Ve ardından HTTP/1 ilk olarak IEFT tarafından 1997'de belgelenerek kullanıma sunulmuştur (versiyon 1.1 olarak [RFC 2068](https://datatracker.ietf.org/doc/html/rfc1945)).

HTTP temel olarak bir web sitesi sunucusuna bağlanarak onda bir oturum açma ve bu oturum üzerinden istenilen köprü metinleri almayı esas alan bir sisteme sahiptir. TCP iletişimi kullanır ve iletişim portu farklılık göstermektedir, örneğin genelde kullanılan port 80 iken Apache için 443, Python HTTP için 8000, Ruby için 8080 olarak farklı portlar belirlenmiştir. Ancak ekseriyetle 80 portu kullanılmaktadır.

HTTP’de TCP’de olduğu gibi durum kodları ve bayraklar kullanır, TCP’ye ek olarak kendi durum kodları ve bayrakları vardır demek istiyorum yani. Ama bunlara hiç girme derdim yok. Bu kadarını bilsek çok bile bence

HTTPS
-----

HTTP protokolünün güvensiz oluşunu çözmek amacı ile SSL sertifikası üzerinden iletişim yapmayı hedefleyen genişletilmiş bir HTTP protokolüdür.

FTP
---

Defalarca kere benim bu internet serimde sözü geçen protokoldür. HTTP benzeri bir yapıya sahiptir ancak tasarlanış amacı uzak sunucu tarafından sağlanan dosya paylaşım sistemine erişerek sistem üzerinden dosyaları çekmektir. Ancak son on senede çıkan güvenlik açıkları ve protokolün güvensiz olması sebebiyle dinlenmesi sebebiyle yerini SFTP almıştır. SFTP ise SSH protokolünü kullanan bir FTP hizmetidir.

Ancak daha fazla anlatarak kafanızı şişirmeyeceğim ve daha keyifli ve ilginç olan diğer uygulamalara geçeceğim.

Diğer Bazı TCP/IP Uygulamaları
==============================

X Pencere Sistemi
-----------------

![](https://miro.medium.com/max/20004/0*pbqfDSNqVPgV_zAB)

Bilinen en bariz Server-Client mantığına sahip yazılımdır. X Pencere Sistemi veya sadece X, birden fazla istemcinin (uygulamanın) bir sunucu tarafından yönetilen bit eşlemeli ekranı kullanmasına izin veren bir sunucu-istemci uygulamasıdır.

> “Sunucu, bir ekranı, klavyeyi ve fareyi yöneten yazılımdır. İstemci, sunucuyla aynı ana bilgisayarda veya farklı bir ana bilgisayarda çalışan bir uygulama programıdır.”

İkinci durumda, istemci arasındaki ortak iletişim biçimidir, ve sunucu TCP iletişimi yapmaktadır, ancak DECNET gibi başka protokoller de kullanılabilir. Bazı durumlarda sunucu, diğer ana bilgisayarlardaki istemcilerle iletişim kuran özel bir donanım parçasıdır (bir X terminali gibi).

İnternet üzerinden görüntü paylaşılması durumunda, bağımsız bir çalışma istasyonu, istemci ve sunucu aynı ana bilgisayar üzerindedir ve herhangi bir ağ katılımı olmadan bu ana bilgisayardaki işlemler arası iletişimi kullanarak iletişim kurar. Bu iki uç nokta arasında, aynı ana bilgisayardaki istemcileri ve diğer ana bilgisayarlardaki istemcileri destekleyen bir iş istasyonu bulunur. X, güvenilir, çift yönlü bir TCP gibi akış protokolü (X protokolü TCP üzerine kurulu bir protokoldür, bilinenin aksine UDP gibi güvenilmez bir protokol tasarımına sahip değildir) ile tasarlanmıştır. İstemci ve sunucu arasındaki iletişim, bu bağlantı üzerinden değiş tokuş edilen 8 bitlik baytlardan oluşur. X protokolü, TCP bağlantısı üzerinden istemci ve sunucu arasında değiş tokuş edilen 150'den fazla mesajın biçimine sahiptir.

![](https://miro.medium.com/max/20000/1*nrKWjyMREfKj9sCjwPu0jg.png)

Bir Unix sisteminde, X istemcisi ve X sunucusu aynı ana bilgisayarda olduğunda, TCP yerine normal olarak Unix etki alanı protokolleri kullanılır, çünkü TCP’nin kullanılmasından daha az protokol işlem kullanılır. Unix etki alanı protokolleri daha öncesinde söylediğim gibi, aynı ana bilgisayardaki istemciler ve sunucular arasında kullanılabilen bir süreçler arası iletişim biçimidir.

İlk bakışta istemci ve sunucu terimleri biraz daha anlamsız görünse de Telnet ve FTP gibi uygulamalar gibi düşünebiliriz. İstemciyi klavye ve ekrandaki etkileşimi kullanıcı olarak düşünelim. Ancak X ile klavye ve ekran sunucuya aittir. Bu açıdan bakınca sunucuyu, hizmeti sağlayan son olarak düşünmek mümkündür. X tarafından sağlanan hizmet, bir pencereye, klavyeye ve fareye erişimdir. Bu da aynı diğer protokol hizmetleri gibidir. Telnet ile hizmet, uzak ana bilgisayarda oturum açar. FTP ile hizmet, sunucudaki dosya sistemidir.

WhoIS Sistemi
-------------

![](https://miro.medium.com/max/20000/0*yeajZZEeKkGR3N3o.png)

Whois İnternet içerisinde kullanılan belki de en yaygın bilgi servisidir. Whois kendi protokolü üzerine kurulmuş bir sunucu sistemidir. Herhangi bir site bir Whois sunucusu sağlayabilse de, en yaygın olarak [InterNIC](http://rs.internic.net)’deki sunucusu kullanılır. Bu sunucu, tüm kayıtlı DNS etki alanları ve İnternet’e bağlı sistemlerden sorumlu birçok sistem yöneticisi hakkında bilgi tutar. ([nic.ddn.mil](http://nic.ddn.mil)’de başka bir sunucu sağlanır, ancak yalnızca MILNET hakkında bilgi içerir.). [RFC 954](https://datatracker.ietf.org/doc/html/rfc954) belgesinde Harrenstien, Stahl ve Feinler (1985) tarafından Whois hizmeti belgelenmiştir. Protokol açısından bakıldığında, Whois sunucusunun bağlantı noktası 43 numaralı porttur. Bu port üzerinden istemcilerden gelen bağlantı isteklerini kabul eder ve istemci sunucuya tek satırlık bir sorgu gönderir. Sunucu, mevcut olan bilgilerle yanıt verir ve ardından bağlantıyı kapatır. İstekler ve cevaplar NVT ASCII kullanılarak iletilir. İstekler ve yanıtlar farklı bilgiler içermesine rağmen bu, Finger sunucusu mantığı ile neredeyse aynıdır.

Sonuç
=====

Öyle yani ekstra bişey yok. Sadece TCP/IP iki protokolden ibaret değildir. Bir sürü alt protokole sahiptir. Bunlar ilk elden aklıma gelenler. Gerisi sizde ;)

Kaynakça
========

[unix(7) - Linux manual page](https://man7.org/linux/man-pages/man7/unix.7.html)
[Client-server model - Wikipedia](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)
[X.Org](https://www.x.org/wiki/)
