---
layout: post
title: "Kopyala-Yapıştır’ın Daha Akıllı Hali: Github CoPilot"
date: 2021-11-06 12:23:43 +0300
categories: [genel, internet]
image: "2021-11-06-kopyala-yapistir.jpeg"
image_hash: "09ead2b255c3ac06e09cb9615fca5aaf"
---

Birkaç gün kadar önce kapalı test sürecindeki Github Copilot, bu özelliğin beta testine gönüllü olan kişiler için kullanıma açıldı. Peki nedir bunun Alamet’i Farikası? Bir developerin gözüyle gelin CoPilot’un bize neler katabildiğine bakalım. Ayrıca neden yapay zeka diyerek kendini yırtanların iddia ettiği gibi programlama alışkanlıklarımızı tamamen değiştiremeyeceğini analiz edelim.

Nedir Bu CoPilot?
=================

Teknolojinin daha hızlı gelişmesi ile birlikte pek çok şirket kendi sorunlarına daha hızlı çözümler arama konusunda deli gibi çalışıyor. Özellikle binlerce programcınızın elinizin altında bulunduğu Microsoft gibi bir şirketseniz bu ihtiyaç daha da fazla elbette. Microsoft, bu tip sorunlara “şaşırmayın ama” yapay zekada çözüm bulmuş.

Olayı biliyorsunuzdur diye kısa keseceğim. Yapay zeka dediğimiz şey basitçe aldığı girdileri ve kendi çıktılarını karşılaştırıp her adımınızda bir önceki adımdan daha doğru çözüme ulaştırmayı hedefleyen programlama algoritmasıdır, yani programınıza deneyimden öğrenebilme yeteneği kazandırmanızdır.

Microsoft da yapay zeka destekli bir programlama asistanı olan GitHub Copilot’u duyurdu. Temel amacını IDE’lerin otomatik tamamlama ve eksikler için öneride bulunma özelliğinin biraz daha büyük boyutlusunu düşünün. Ama adamlar burada sadece basir bir kelime değil komple fonksiyon implementasyonu önerisinde bulunuyor.

![](/assets/img/posts/1*1rGPuRxePDwgQDodWFKFhQ.png)ama hala sorting için bubble sort öneriyor o başka tabi

GitHub Copilot, temelde GitHub’daki açık kaynak projeleri ve mevcut kodunuzu kullanan bir veri tarama motoru ve IDE üzerinden mevcut kodunuza destek atan bir eklenti olarak iki kısımdan oluşmakta.

Veri tarama motoru bütün kodları analiz ediyor. Sıklıkla kullanılan algoritmalara dair modeller çıkarıyor ve sonuç olarak bir fonksiyonu tanımlamaya siz daha başlarken size en uygun implementasyon önerisini yapıyor.

Olaya büyük perspektiften bakınca CoPilot bize daha hızlı kod yazma imkanı vererek aslında çok büyük bir lutufta bulunuyor gibi görünüyor olabilir. Hatta bazı aşırı abartan Yapay Zeka hayran kitlesi gelecekte programcılara gerek yok CoPilot kendi kodlarını kendi yazacak da diyebilir. Ben bu iki konuda da pek iyimser değilim.

Analiz
======

Ana sorumuz şu. Kodlamaya ne kadar zaman harcıyoruz?

![](/assets/img/posts/0*BFM5dw974jClyk1b)

Küçük geliştiriciler olarak bizim yaptığımız şeyler genellikle ortaya bir amaca hizmet eden bir uygulama ortaya koymak. Büyük kütüphanelerden bahsetmiyorum. Örneğin PDF’leri birleştiren basit bir komut satırı dosyası gibi şeyler genellikle yaptığımız. Yazılım şirketlerinde çalışan arkadaşlarımdan gözlemle onların yaptıkları ise önceden yazılmış bir koddaki olası hataları ortaya çıkartmak ve gerekli olması halinde yeni özellikler eklemek. Şimdi biraz gerçekçi olalım. Aslında çoğu yazılım şirketinde kod yazmak için harcadığımız zaman, genel yazılım geliştirme döngüsünün çok çok küçük bir kısmı. Bir yazılımın ortaya çıkış sürecinde, ihtiyaçlardan ve buna ait çözümleri ortaya raporlamakla başlayan bir süreç var. Bu sürecin sonunda bir yol haritası konularak çalışılmaya ve ilk ürün çıkarılmaya çalışılır. Bu sırada tabi ki kodlamada ihtiyacımıza yönelik sektörde kullanılan çözümleri inceleriz bazen hazır kodlar arasında dolaşıp bunu projeye ekleyebilir miyim deriz. Hatta aptalca gibi görünse bile basit bir string concatenation operasyonu için bile araştırma yaparız. Ardından bir ürün çıkartırız ancak bu aşamadan sonra ise çok dhaa büyük bir süreç başlar, test aşaması. Defalarca kere farklı durumlar için yazılımımızı test ederiz, bazen kullanıcı feedbackleri ile tasarımsal değişimler yapılırken bazen bir hatayı supress etmek için kodun bazı kısımlarında büyük çaplı değişimler yaparız.

Sonuç olarak, kodlama veya direk yazılım mühendisliği, gerçek dünyanın yüksek karmaşıklığı nedeniyle zordur. Yavaş kodlama nedeniyle şimdiye kadar hiçbir proje başarısız olmadı, ancak güncel sorunlara cevap verememesi veya hatalarına zamanında müdahale edememesi sebebiyle çoğu yazılım maalesef çürüyüp gitti.

Daha hızlı kodlamak kimseyi daha iyi bir programcı yapmaz. Analiz, tasarım ve ihtiyaca yönelik yerinde çözümler üretmek, sizi daha iyi bir yazılım mühendisi yapacak şeylerdir.

Daha Hızlı Yazmak
=================

Pek çok programcı hızlı kod yazma konusunda takıntılıdır. Bilgisayar mühendisi olmayı seçtiğim yol biraz çetrefilliydi. Bilmem daha önce anlattım mı ama bir Fen Lisesi öğrencisi olarak dört bir yandan ya tıp yazacaksın ya diş yazacaksın baskısında bu yolu seçtim. Ve daha lise 1'de iken (dile kolay 8 sene geçmiş) bir yazılımcı ile tanışma fırsatı bulmuştum.

Böyle muhabbet arasında geçenlerde girdiği bir iddiayı anlattı. “Ben gecede 10 bin satır kod yazdım” dedi. Peki dedim nasıl bir şey, zor mu, 10 bin satır sonuçta boru mu. Bana şunu söyledi: “Yaptığım iş bir görevi gerçekleştirmesi için aylar öncesinden planladığım bir çözümdü. Tek yaptığım oturup tasarımı koda geçirmem oldu. Çok zor bir şey değil ki” ve bana oturup algoritma nedir konusunda 2 saatlik bir ders anlattı. Yazılım mühendisliği çözüme sonuç oluşturma aşamasında kendini belli eder. Yoksa körlemesine kod yazma dediğimiz şeyi herkes yapar. Bir göreve ait çözüm oluştırma hızını deneyiminiz ve konuya dair analiziniz belirler.

Şimdi buna ek olarak şunu da ekleyeyim. Direk kendimden örnek vereyim. Çoğunlukla geçmişte yazıp aa bunu ileride kullanırım dediğim kod parçalarını saklarım. Belli bir yerde işim olunca bunları kullanırım ve bunların bana hız kazandırdığını sanırdım. Lakin bu kod parçalarımı eski laptopum mefta olunca kaybettim. Sonuçta kodlama yaparken elimin altında eski parçalar olmayınca baya zorlanacağımı düşünerek bir proje üzerine çalışmaya başladım. Bir yerden sonra bu kod parçalarından kurtulmuş oluşum resmen bana özgürlüğümü geri vermiş gibiydi ve şunu farkettim. Bu tip çözümler çoğunlukla beni projeden koparıyormuş. Sonuçta evet kod örnekleri var ama bunların o koda uyum sağlaması için bir de kullandığım yere uygun değişimler yapmam gerekiyor ve bu da benden odağımı çalıyor. Kendime şunu öğrendim diyebilirim. İyi kodlamanın, iyi analiz yapmak kadar önemli bir diğer şartı da odaklanmak.

Her iş için böyle gerçi böyle ama dünyanın ve sektörün hızlı değişen yapısı nedense bizi daha hızlı üretelim havasına sokuyor ve pek çok şirket günün trendlerini yakalayım derken bir odağı olmadığı için batıyor. Bunu da özellikle bizim ülkemizde kurulmuş start-up’larda görmek mümkün. Bir hocamın da bu husustaki çözümlemesine katılıyorum:

> I don’t understand you. In America, people believe and do, so trends always come from us. However, even if you have better solutions, you do not believe it. Then you say that this is not the trend, let’s copy whatever the trend is. Until you do this, the times will change, and just your failures will left in your bags.

Neyse konu dağıldı. Sonuç olarak hızlı kod yazmanın bir alameti farikası bence yok.

![](/assets/img/posts/0*-l23657-Yp_ciSq0)

Gelgelelim yapay zeka konusunda, CoPilot hala erken bir seviyede. Bu seviyesinden bakarak gelecekte programcılar kod yazacak demek, 50 sene öncesinde gelecek 50 yılda Jetgiller gibi bir geleceğimiz olacak umudu gibi geliyor bana.

Etik
====

Gelgelelim en güzel konuya: kodun telif hakkı ve mülkiyet sorunu. GitHub CoPilot kendi veritabanındaki kodları analiz ederek sonuç oluşturuyor ve açık kaynak kodlu projelerin bazıları GPL lisansı ile lisanslı. Soru basit: GPL lisanslı bir kod tabanından bir kod parçacığı oluşturulur ve ticari bir şirket tarafından uyarlanırsa, kodun sahibi kimdir?

Şimdi teknik açıdan bu durumda kullandığınız kod GPL iken ticari bir proje içerisinde bunun kaynak kodunu kapatamazsınız. Yasal olarak çok büyük yaptırımları olan bir sonuçla karşılaşabileceğiniz bir durum olur bu. Ancak bu kısım ciddi manada yazılım etiğini ihlal ediyor. Her ne kadar kodunuz açık kaynak bile olsa bu tip çözümlerin oluşturulması günün sonunda maalesef ki lisans ihlallerine sebep verecektir.

Sonuç
=====

Bu aracın geliştirme alanındaki yeri maksimum öyle hani bir deneyelim dedik kadar olur. Verdiği önerilerin bug içermesi filan konularını bakın hiç açmadım daha.

Ancak, bu araç yine de deneyimsiz programcılar ve kodlamayı öğrenenler için mükemmel bir kaynak olacaktır. Yeni bir dil öğrenmek (muhtemelen başka bir dilden geçiş yapmak) veya yeni frameworkler ile çalışmak istiyorsanız da harika bir araçtır. CoPilot, süreci kolaylaştırmaya yardımcı olabilir ve eksik içeriği tespit etmeyi kolaylaştabilir.

Ancak bu araçtan bir sihirli değnek olmasını beklemeye gerek yok bence.
