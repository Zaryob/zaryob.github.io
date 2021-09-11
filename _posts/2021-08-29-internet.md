---
layout: post
title: "İnternet 101:İnternet İçerisinde Nasıl İletişim Yaparız?"
date: 2021-08-29 12:23:43 +0300
categories: [genel, internet]
image: "2021-08-29-internet.jpg"
image_hash: "74f8e1440b314fd0f262152b07e31a72"
---


### Ben Kimim?

Şimdi bunu düşünmeden önce insanlar arasındaki bir iletişime bakalım. Dialog dediğimiz olgu, iki ya da daha çok kişinin karşılıklı konuşmasına denir. Örneğin birisi ile konuşmak istiyorsunuz. Başlangıçta kim olduğuna bakmaksızın söyleceğini ilk gördüğün kişiye söylemek dialog değildir. Aynı olgu internette de var. Siz bir iletişimi yapacakken o cihazın kim olduğuna bakmaksızın veri yollamaya başlarsanız karşınızdaki cihaz çoğunlukla gönderdiğiniz bilgileri umursamayacaktır, aynı sizi tanımayan insanların sizi dinlemeyeceği gibi.

İnternetin her düğümünde bir cihazın belirli bir ismi vardır. Bu isme biz IP adresi demekteyiz. Şimdi örneğimize dönelim. Bir şeyi birisine söylemek için ne yaparız örneğin evine gideriz. Evde kapıyı açan o değilse annesi, abisi veya babası ise o kişilere de biz yine söyleyeceğimizi söylemeyiz. O kişilere sadece iletişim yapacağımız kişinin kim olduğunu söyleriz, onlar da arkadaşımızı çağırır. Ve iletişim başlar. Temelde internette iletişim de böyledir.

#### IP Bazlı İletişim ve Domain Name Services

Hatırlarsanız biz iletişim yaparken IP adreslerini kullanmaktayız. Ve veriler paketler halinde ağa verilerek doğru kişiler arasında doğru iletişimin kurulması gerekmekte. Bir paket yönlendiriciye ulaştığında, yönlendirici, kaynak bilgisayardaki IP protokol katmanı tarafından oraya konulan IP adresini inceler. Yönlendirici, yönlendirme tablosunu kontrol eder. IP adresini içeren ağ/cihaz, yerel ağ içerisinde bulunursa, paket o ağa/cihaza gönderilir. IP adresini içeren ağ bulunamazsa, yönlendirici paketi varsayılan bir rotada, genellikle omurga hiyerarşisinde bir sonraki yönlendiriciye gönderir. Bu yönlendirici bir sonraki yönlendirici paketi nereye göndereceğini bilirse oraya yönlendirir, ancak bilmezse paket yine bir NSP omurgasına ulaşana kadar yukarı doğru yönlendirilir. NSP omurgalarına bağlı yönlendiriciler, en büyük yönlendirme tablolarını tutar ve burada paket, hedefini bulana kadar daha küçük ve daha küçük ağlar üzerinden ‘aşağıya doğru’ yolculuğuna başlayacağı doğru omurgaya yönlendirilir. Ne zaman ki bu paket karşısında hedefini bulur, o zaman iletişim tamamlanmış olur. Ancak hedef bulunamazsa gönderdiğimiz paket uzayda rastgele yollanmış “Heyyooo, Dünyadan selamlar, yaşam var mı orada?” mesajı gibi sonsuzluğa gider.

Yani iletişimde adres en önemli ve belirleyici şeydir. Peki ya bağlanmak istediğiniz bilgisayarın IP adresini bilmiyorsanız? Ya da nasıl oluyor da IP’sini bilmeden [www.google.com](http://www.google.com) olarak adlandırılan bir web sayfasına nasıl erişebiliyoruz? Web tarayıcımız bir kahin mi yoksa, bu bilgisayarın İnternet’te nerede yaşadığını nasıl biliyor? Tüm bu soruların cevabı **Alan Adı Hizmeti (Domain Name Service)** veya **DNS**’dir. DNS, bilgisayar adlarını ve bunlara karşılık gelen IP adreslerini internette tutan dağıtılmış bir veritabanıdır. İnternete bağlı bazı bilgisayarlar, aslında DNS veri tabanının ana bilgisayar kısmı ve başkalarının ona erişmesine izin veren yazılımı içerir. Bu bilgisayarlar DNS sunucuları olarak bilinir. Hiçbir DNS sunucusu tüm veritabanını içermez; sadece bir alt kümesini içerirler. Bir DNS sunucusu, başka bir bilgisayar tarafından istenen etki alanı adını içermiyorsa, DNS sunucusu, istekte bulunan bilgisayarı başka bir DNS sunucusuna yeniden yönlendirir.

DNS, IP yönlendirme hiyerarşisine benzer bir hiyerarşi olarak yapılandırılmıştır. Ad çözümlemesi talep eden bilgisayar, istekteki etki alanı adını çözebilecek bir DNS sunucusu bulunana kadar hiyerarşide yeniden “yukarı” yönlendirilecektir.

Bir İnternet bağlantısı kurulduğunda (örneğin, Windows’ta bir LAN veya Çevirmeli Ağ için), kurulumun bir parçası olarak genellikle bir birincil ve bir veya daha fazla ikincil DNS sunucusu belirtilir. Bu sayede alan adı çözümlemesi gereken tüm internet uygulamaları doğru bir şekilde çalışabilecektir. Örneğin, web tarayıcınıza bir web adresi girdiğinizde, tarayıcı önce birincil DNS sunucunuza bağlanır. Girdiğiniz alan adı için IP adresini aldıktan sonra tarayıcı hedef bilgisayara bağlanır ve istediğiniz web sayfasını talep eder.

Gelişmiş işletim sistemlerinde ve tarayıcılarda, kendi ufak çaplı DNS servisleri bulunmakta. Bu temel olarak sorgulanan alan adını kısa süreli olarak belirtilen IP ile eşleştirildiği bir sözlük gibidir. Eğer ki bu sözlük içerisinden uyuşma bulunur ancak erişim sağlanamazsa, yine yukarıdaki protokol izlenerek farklı DNS’ler üzerinden bağlanarak alan adı aranırken, erişim sağlanması halinde direk bu adresler kullanılır.

### Peki İnternette Bu Paket İletişimi Nasıl Çalışır?

İnternette iletişim İnternet Protokolü (IP) ve Aktarım Kontrol Protokolü’nü (TCP) takip eden bir paket yönlendirme ağı kullanarak çalışır. Bunlara aslında ileride daha detaylı bakacağım. Çünkü TCP/IP modeli ve protokol yapısını öğrenmeden ne anlatsam havada kalacak gibi hissediyorum.

Ancak basitçe anlatmam gerekirse: veriler sınır cihazlarından başta ağımıza sonra da internet üzerinden aktarıldığında, her bir veri mesajlar ve paketler halinde iletilir. İnternet üzerinden gönderilen verilere mesaj denir, ancak mesajlar gönderilmeden önce paket adı verilen daha küçük parçalara bölünür. Bu mesajlar ve paketler, İnternet Protokolü (IP) ve Aktarım Kontrol Protokolü (TCP) kullanılarak bir kaynaktan diğerine gider. Uygun hedefin bulunması bazen direk paketler üzerinde verilen hedef IP bazense DNS üzerinden alan adı sorgulayarak sağlanır.

Sayısal bir adresleme sistemi kullanarak yaptığımız bu iletişim, verilerin nasıl aktarılması gerektiği konusunda tahmin ettiğimizden daha fazla talimat alır. Aktarım Kontrol Protokolü (TCP), veri aktarımının güvenilir bir şekilde sağlanması için IP ile birlikte çalışır. Bu, hiçbir paketin kaybolmamasını, paketlerin uygun sırayla yeniden birleştirilmesini ve veri kalitesini olumsuz yönde etkileyen herhangi bir gecikme olmamasını sağlamaya yardımcı olur. Tarayıcının başlatılmasından arama sonuçlarına kadar internetin nasıl çalıştığını mı merak ediyorsunuz? Bu olayı adım adım ele alalım

Tarayıcınıza bir web adresi yazdığınızda…  
**Adım 1:** Kullandığınız son cihaz bir sınır bileşen ( bir modem veya yönlendirici) üzerinden ağınıza ve ağınız aracılığıyla web’e bağlıdır. Bu cihazlar birlikte dünya çapındaki diğer ağlara bağlanmanıza izin verir.  
**Adım 2:** Tarayıcı üzerinden bir URL girerek başlarsınız. URL (Uniform Resource Locator) belirli bir formda internetteki web sitelerinin isimlerini ifade eder. Her web sitesinin, ISP’nize nereye gitmek istediğinizi bildiren kendi benzersiz URL’si vardır. Bu URL’ler bir alan adı, bir etki alanı ve alt yollar içerebilir. Örneğin **192.168.1.1** bir IP adresi iken [**https://google.com**](https://google.com)bir URL’dir.  
**Adım 3:** Sorgunuz, NAP Sunucusu ve DNS (Etki Alanı Adı Sunucusu) gibi verileri depolayan ve gönderen birkaç sunucuya bağlanan ISP’nize iletilir.  
Ardından tarayıcınız, DNS aracılığıyla arama motorunuza yazdığınız alan adının IP adresini arar. DNS daha sonra tarayıcıya yazdığınız metin tabanlı alan adını sayı tabanlı IP adresine çevirir.

Örnek: google.com -> 64.233.191.255 olur

**Adım 4:** Tarayıcınız, TCP/IP kullanarak web sitesinin bir kopyasını istemciye göndermek için hedef sunucuya bir Köprü Metni Aktarım Protokolü (HTTP) (son dönemde ise Güvenli Köprü Metni Aktarım Protokolü olan HTTPS’yi kullanır) isteği gönderir.  
**Adım 5:** Sunucu isteği onaylar ve bilgisayarınıza “200 OK” mesajı gönderir. Ardından sunucu, web sitesi dosyalarını tarayıcıya veri paketleri şeklinde gönderir.  
**Adım 6:** Tarayıcınız veri paketlerini yeniden birleştirirken, web sitesi yüklenir.

### Sonuç:

Biraz böyle araya kaynamış bir yazı gibi oldu ancak bu yapı internetin yapısını öğrenmemiz için önemli. İletişimin nasıl yapıldığını bildiğimize göre artık ağ modelini öğrenebiliriz.

### Kaynakça:

* [**How Does the Internet Work (Infographic)**](https://www.hp.com/us-en/shop/tech-takes/how-does-the-internet-work)
