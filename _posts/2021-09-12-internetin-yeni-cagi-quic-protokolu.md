---
layout: post
title: "İnternetin Yeni Çağı: Quic Protokolü"
date: 2021-09-12 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-12-quic.jpg"
image_hash: "1c48d1c52b9a8a6c5f21798b187a47c7"
---

İnternet 101 serimde TCP/IP Yapısından ve TCP protokolünden ayrı ayrı bahsetmiştim. Bu yazılarıma şuradan ulaşabilirsiniz:

[İnternet 101: Ağların Yapısı — TCP/IP Yapısı ve OSI Model](https://medium.com/i̇nternet-101-ağların-yapısı-tcp-ip-yapısı-ve-osi-model-d6b2373976f4)

[İnternet 101: TCP — TCP İletişimi Nasıl Yapılır - TCP Paketleri — UDP ile TCP’nin Farkları](https://medium.com/i̇nternet-101-tcp-tcp-i̇letişimi-nasıl-yapılır-tcp-paketleri-udp-ile-tcpnin-farkları-1747b8652d33)

TCP/IP modeli internet içerisinde nasıl haberleşeceğimizi belirleye protokol listesini belirtir, IP protokolü ağ bağlantısında kullanılırken TCP protokolü ise bu ağda iletişimin yapılmasında kullanılır.

Quic protokolü ise TCP/IP modeline göre Aktarım Katmanında kullanılan protokollerden birisidir. Hatırlarsanız bu katmanda TCP ve UDP protokolleri yaygın olarak kullanılmaktadır ve bu protokollerin yapısını da önceki yazılarımda aktarmıştım.

TCP ve UDP’nin farklarını anlatırken TCP’nin multicasting için kullanılamayacağınız, her bir istemci için sunucuda bir oturum açmayı gerektirdiğini ve UDP’nin bu durumlarla başa çıkabilmek amacıyla ortaya atılan bir protokol olduğunu söylemiştim. Ancak burada da UDP’nin güvensiz oluşundan ve verilerin sıralamasının hatta verilerin doğru aktarılıp aktarılamadığının kontrollerinin dahi yapılamadığından bahsetmiştim.

Quic işte tam bu iki protokolün de dezavantajlarını gören bir mühendis tarafından ortaya atılmış yeni bir protokoldür. Ayrıca HTTP/3'de (Haziran 2021 tarihinde çıktığından itibaren) Quic protokolü kullanmaktadır. Peki nedir bu Quic protokolü?

2012 yılında Google çalışanı Jim Roskind, genel amaçlı sunucularda kullanılmak ve ağ üzerindeki veri trafiğini azaltmak istemiştir. Bunu yaparken UDP kullanmak güvensiz olacağı için UDP üzerine kurulu internet bağlantısı yapmak için kullanılacak bir protokol hazırlamıştır. **“Quick UDP Internet Connections”** yani “Hızlı UDP internet bağlantıları” adı altında hazırlanmış bu geliştirilmiş protokol yapısı 2013 yılında Google iç sistemlerinde kullanılması ve test edilmesi ardından kamuya duyuruldu. IETF’ye yazılırken QUIC başlığı ile yazılan bu RFC kağıtları sebebiyle adı Quic olarak kalmıştır.

Quic temel olarak TCP ile UDP’nin iyi yönlerini birleştirir. Sunucu ile istemciler arasında çoklanmış bağlantı dediğimiz “multiplexed” bağlantı kurar. Ardından yapılan iletişim paketleri TCP bağlantı paketlerini andırmaktadır.

Çok noktalı bağlantıda Quic UDP’den farklı olarak paket kaybından dolayı çıkacak eksikleri tamamlamak için TCP benzeri isteklerde bulunur var multiplexed yapısı sayesinde bir tarafta regüler veri akışı devam ederken paket eksiklerini giderebilir, böyle UDP’nin tutarsızlık sorunlarına çözüm getirmiştir.

Quic protokolü bir de UDP protokolünün güvensizliğine bir çözüm getirmiştir. İletişimde ilk olarak UDP üzerinden bağlantı sağlanır. Ardından UDP’de olduğu gibi iletişim yapılır. Ancak Quic burada UDP üzerine ek bir katman ekler. Öntanımlı olarak açık olan “Quic Handshake” dalgasıdır bu. Şimdi temelde TCP protokolü şu şekilde iletişim yapar.

![](https://miro.medium.com/max/2000/1*iI0AErSF6T8vyoCmz7me6w.png)

TCP 3 adımda iletişime başlar. “SYN” bayraklı paket sunucuya gönderilir, sunucu “SYN+ACK” ile paketin kabul edildiğini verir ardından istemci “ACK” bayraklı paket göndererek iletişime başlanır. Buraya kadar her şey tamam. Ancak TCP iletişimini korumak için TLS altyapısı da son 15 senedir kullanılmakta. Temel fark yanda gördüğünüz üzere burada 5 adımda bir doğrulama yapılmakta. “SYN+ACK” alındıktan sonra istemci TLS 1.3 ile şifreleme için “ClientKeyExchange” paketi gönderir. Ardından “KeyChipherSpec” paketi onaylandığı taktirde (“**verified**” bayraklı paket alınması halinde) veri iletişimi başlar. TLS 1.2 zamanlarında ise bu 3adımda doğrulamaya ek 2 adım daha uzun bir TLS el sıkışması var ve hala da kullanılmakta. Peki bu neye sebep oluyor.

![](https://miro.medium.com/max/2000/1*I5lLuHopIII1pqF1lMHKTQ.png)

Yanda TCP/TLS1.3 kullanarak bir HTTP iletişimi var. Server tarafından oturum açılması için ayrı bir işlem süresi ki o bu grafikte yok, sonra TLS el sıkışması için ayrı bir süre, HTTP request alınması için ayrı bir işlem derken veri aktarımına başlarken resmen 300ms kaybediliyor.

Quic işte tam bu sorunu çözmek amacıyla başlanılan bir proje oldu. Quick temelde iletişim için UDP bağlantısı kuruyor. Kurulan UDP bağlantısı üzerinden de kendi 2 adımlı QUIC el sıkışmasını yapıyor. Bu el sıkışmasının ardından gönderilen veri sunucu ile istemci arasında şifrelenmiş olarak gidiyor ve TCP-TLS’de olduğundan çok daha kısa sürede paket teslimi yapılabiliyor.

![](https://miro.medium.com/max/2000/1*IujXHZ4VWHXa2v6WNzEf3w.png)

2 adımda UDP bağlantısı başlatıldıktan sonra yanda görüldüğü üzere QUIC handshake yapılarak veri transferi başlamakta. Bu da 4 adımda bir iletişim yapmaya kadir olmak demek

Quic’in veri aktarımı paketleri ise TCP paketlerine benzer. Daha öncesinde söylediğim gibi, eksik paketleri karşılarken TCP benzeri sıralı paketler kullanır, bu paketlerden eksik olanları tespit edip tekrar ister. Ayrıca HTTP, FTP gibi yaygın uygulama katmanı protokollerinde de TCP’de olduğu gibi, paket yapısında değişim yapmadan QUIC protokolü ile haberleşmede kullanabiliriz. Sırf bu sebeple TCP/2 takma adı sık sık Quic için kullanılmaktadır.

Quic’in özelliklerine girdik. Bari bu yolda devam edelim. Quic, kaynaktan bağımsız olarak sunucuya olan bağlantıyı benzersiz şekilde tanımlayan bir bağlantı tanımlayıcısı içerir. Bu, kullanıcının IP adresi değişse bile orijinal bağlantı kimliği geçerli olacağından, her zaman bu kimliği içeren bir paket göndererek bağlantının yeniden kurulmasını sağlar. Böylece haberleşmede mobiliteyi artırır. Hareket halinde farklı baz istasyonlarından sürekli olarak veri akışı sağlamamıza yardımcı olur. UDP protokolünde aynı senaryoda kayıp paket problemleri yaşarken, TCP’de ise daha sancılı olan ve yeniden bağlantı kurulması, paket bütünlüklerinin kontrolü vs. içeren oldukça uzun bir süreç yine bizi bekliyor olacaktır.

Son olarak Quic, TCP’den farklı olarak çekirdekte yer alması gerekmeyen bir protokoldür. UDP ve TCP protokollerini harmanladığı için, bu ikisini destekleyen işletim sistemlerinde bir uygulama üzerinden kullanılabilinmektedir. Nitekim ilk yıllarında Chromium ve Chromium tabanlı tüm tarayıcılara bu destek bu uygulama bazlı haberleşme modülleri üzerinden sağlanmıştır. Bunun ayrıca bir artısı ise protokol üzerinde yapılan önemli güncellemeleri ve açık kapatma işlemlerini çekirdek güncellemesine gerek kalmadan yapabilir, veya kendi Quic protokol kütüphanesini yazarak istediğiniz gibi kullanabilirsiniz.

Hatta bu yapısı sayesinde ilerleyen süreçte TLS el sıkışması içeren Quic bağlantıları, tıkanıklık kontrolü de iyileşmekte ve iyileştirmeler de işletim sistemleri için yayınlanan paket güncellemeleri üzerinden çekilerek anında kullanılır vaziyete gelmesi sağlanılmaktadır.

Geleceğin teknolojileri daha kararlı ve daha yüksek hızlı donanımlar ile daha yüksek performans almak ve bu donanımlarda eski yöntemlerin düzenlenip toplanarak bu donanımları en verimli kullanmak üzere revize edilmesiyle kurulmakta. Ve Quic bu açıdan bakıldığında kendisine verilen görevi başarı ile yerine getirmektedir.

Kaynakça:
=========

[IETF QUIC WG](https://github.com/quicwg)

[QUIC - Wikipedia](https://en.wikipedia.org/wiki/QUIC)

[Version-Independent Properties of QUIC](https://www.rfc-editor.org/rfc/rfc8999.html)

[QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000.html)
