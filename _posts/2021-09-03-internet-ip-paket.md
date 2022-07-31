---
layout: post
title: "İnternet 101: Internet Protocol (IP) — IP Adres Sistemi — IP paketleri — IPv4 ve IPv6"
date: 2021-09-03 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-03-internet.jpg"
image_hash: "0eaa74f1c6c658a026a8385aacddeb38"
---

Önceki sayfalarda internette haberleşme standarlarından olan TCP/IP protokol paketinden bahsetmiştim. Temel olarak TCP’nin internette iletişimin nasıl yapılacağını belirlemek için kullanılırken, Internet Protocol (IP) sisteminin de internetteki iletişimin sağlanması için kullanıldığından bahsetmiştim.

İnternet Protokolü (IP), datagramları ve paketleri ağ boyunca iletmek için kullanılan İnternet protokol paketindeki bağlantı (ağ) katmanında yer alan iletişim protokolüdür. Bu protokol ağlar arasında seyahat edebilmeleri ve doğru hedefe varabilmeleri için veri paketlerini yönlendirmek ve adreslemek için bir protokol veya kurallar dizisidir. IP işlevsel olarak paketler taşıma ve yönlendirme işlevi sağlayarak, ağlar arası çalışmayı mümkün kılar ve esasen İnternet’in temelini kurar.

İnternette dolaşan veriler, paket adı verilen daha küçük parçalara bölünür. İnternete bağlanan her düğüme (düğümden kastımız bir bilgisayar veya ağ etki alanı olabilir) bir IP adresi atanır. IP adresi bu protokolü kullanarak yönlendirilen paketlerin hangi hedeften çıktığı ve hangi hedefe gideceğini bildiren işaretçilerdir. Bir nevi adımız gibi düşünebilirsiniz.

Her pakete IP bilgisi eklenir ve bu bilgi yönlendiricilerin paketleri doğru yere göndermesine yardımcı olur ve paketler bunlara bağlı IP adresine yönlendirildikçe veriler ihtiyaç duyulan yere ulaşır. Paketler hedeflerine ulaştığında, IP ile birlikte hangi taşıma protokolünün kullanıldığına bağlı olarak farklı şekilde işlenirler. Bundan sonrasını ise TCP protokolleri olan aktarım protokolleri yapar, buna daha sonra deyineceğim.

![IP paketinin içeriği](https://cdn-images-1.medium.com/max/600/0*AondrwKM62RdqT6u.png)

IP protokolü datagramları taşımakta kullanılır demiştim. Datagram aktarılan paketin genel adıdır. Her datagramın iki bileşeni vardır: bir başlık ve bir yük. IP başlığı, kaynak IP adresini, hedef IP adresini ve datagramı yönlendirmek ve teslim etmek için gereken diğer meta verileri içerir. Yük, taşınan verilerdir. Veri yükünü bir başlık ile bir pakete yerleştirmenin bu yöntemine **kapsülleme** denir.

IP, yalnızca paket başlıklarındaki IP adreslerine bağlı olarak paketleri kaynak ana bilgisayardan hedef ana bilgisayara teslim etme görevine sahiptir. Bu amaçla IP, teslim edilecek verileri kapsülleyen paket yapılarını tanımlar. Ayrıca datagramları kaynak ve hedef bilgileriyle etiketlemek için kullanılan adresleme yöntemlerini de tanımlar.

IP adresleri ise kaynak ve hedef bilgisayarı tanımlayan adres bilgileridir. IP adresi, İnternet’e bağlanan bir cihaza veya etki alanına atanan benzersiz bir adrestir. Bir nevi TC Kimlik Numaramız gibi çalışmaktadır. Her IP adresi, ‘192.168.1.1’ gibi bir dizi sayıdan veya IPv6'da değineceğim octal (16'lı sayı sistemi) karakterlerden oluşur. Kullanıcılar, insan tarafından okunabilen alan adlarını IP adreslerine çeviren DNS çözümleyicileri aracılığıyla, bu karmaşık karakter dizisini ezberlemeden web sitelerine erişebilir. Her IP paketi, hem hedef adresin hem de iade adresinin bir posta parçasına dahil edilmesi gibi, hem paketi gönderen cihazın veya etki alanının IP adresini hem de hedeflenen alıcının IP adresini içerecektir.

Bu konuda bilmemiz gerek bir konu da IP adresleme. IP adresleme, IP adreslerinin ve ilgili parametrelerin ana bilgisayar arayüzlerine atanmasını gerektirir. Adres alanı, ağ öneklerinin atamasını içeren alt ağlara bölünmüştür.

Son olarak paketlerin yönlendirilmesine değineyim. IP yönlendirme, ana işlevi paketleri ağ sınırları boyunca taşımak olan yönlendiricilerin yanı sıra tüm ana bilgisayarlar tarafından gerçekleştirilir. Yönlendiriciler, ağın topolojisi için gerektiği gibi, iç ağ geçidi protokolleri veya dış ağ geçidi protokolleri gibi özel olarak tasarlanmış yönlendirme protokolleri aracılığıyla birbirleriyle iletişim kurarlar. Yani posta sistemine benzer bir yapı bulunmaktadır.

### IP Paket Formu

İnternette, cihazlar arası iletişimde, iki cihaz arasında her türlü mesajı gönderilir. Bir mesaj, başka bir cihazın çevrimiçi olup olmadığını kontrol etmek için küçük bir ping paketi olabileceği gibi bir mesaj tüm bir web sayfasını içerebilir.  
Ancak bir mesajın büyüklüğünün bir sınırı vardır, çünkü cihazlar arasındaki fiziksel ağ bağlantıları tarafından bir kerede ne kadar verinin makul bir şekilde iletilebileceğinin bir sınırı vardır.  
Bu nedenle birçok ağ protokolü, her mesajı birden çok küçük pakete böler. İnternet Protokolü (IP), İnternet’te dolaşan paketlerin yapısını tanımlar.  
Her IP paketi hem bir başlık (20 veya 24 bayt uzunluğunda) hem de veri (değişken uzunluk) içerir. Başlık, kaynak ve hedefin IP adreslerini ve ayrıca paketin yönlendirilmesine yardımcı olan diğer alanları içerir. Veriler, bir harf dizisi veya bir web sayfasının parçası gibi gerçek içeriktir.

IP paketinin başlık kısmı bir postanın arkasında yazan adres gibi düşünürsek, paketin diğer kısmı ise mektubu ifade etmektedir.

#### IP Paket Başlığı

IP paketi başlığını iki başlık altında inceleyebiliriz.

**IPv4**

![](https://cdn-images-1.medium.com/max/800/0*mboIluuSsE2UxaKY.png)

*   **Version:** IP sürümünün kaç olduğunu ifade eder. IPv4 için bu değer 4'dür.
*   **Header Length:** kaç baytlık bir başlığa sahip olduğumuzu çözümler.
*   **Differentiated Services Field:** ağ trafiğini sınıflandırmak ve yönetmek ve modern IP ağlarında hizmet kalitesi sağlamak için basit ve ölçeklenebilir bir mekanizma belirten bir bilgisayar ağ mimarisidir.
*   **Total Length:** IP başlığını ve kullanıcı verilerini içeren IP paketinin uzunluğunu belirtir. Uzunluk alanı 2 bayttır, bu nedenle bir IP paketinin maksimum boyutu 216–1 veya 65.535 bayttır.
*   **Identification:** IPv4'te Tanımlama (ID) alanı, belirli bir kaynak adres, hedef adres ve protokol için her verikatarına özgü olan ve maksimum veri birimi ömrü içinde tekrarlanmayacak şekilde 16 bitlik bir değerdir.
*   **Flag:** IP paket parçalarını kontrol etmenize ve tanımlamanıza yardımcı olan üç bitlik bir alandır. Bit değeri 0 ile 2 arasındadır, Bit 2: daha fazla parça anlamına gelir.
*   **Fragment Offset:** Parça dirseği, belirli Datagram’daki belirli parçanın önündeki Veri Baytlarının sayısını temsil eder.
*   **Time to live:** IP sayesinde iyi bilinen bir mekanizmadır. IP başlığında, bir paketin ömrü sona ermeden ve bırakılmadan önce hala sahip olduğu süreyi belirten 8 bitlik bir alandır. Bir IP paketi gönderildiğinde, TTL’si genellikle 255'tir ve ardından her atlamada 1 azaltılır. TTL 0'a ulaşırsa paket bırakılır.
*   **Protocol:** IP başlığındaki protokol alanı, IP paketi içinde hangi protokolün kullanıldığını tanımlayan 8 bitlik bir sayıdır. TCP ve UDP, en yaygın olmalarına rağmen, filtrelenebilecek olası protokollerden yalnızca ikisidir.
*   **Header checksum:** IP üstbilgisi sağlama toplamı, IP paketlerinin üstbilgisindeki bozulmayı algılamak için Internet Protokolü’nün 4\. sürümünde kullanılan bir sağlama toplamıdır. IP paket başlığında taşınır ve başlık kelimelerinin toplamının 16 bitlik sonucunu temsil eder.
*   **Source:** Paketin çıkış yaptığı kaynak bilgisayardır.
*   **Destination:** Paketin ulaşması istenen bilgisayardır.

**IPv6**

![](https://cdn-images-1.medium.com/max/800/0*8bQfykiaRZ7KOfCX.png)

*   **Version:** İnternet Protokolünün 4 bit sürüm numarası. IPv6 için bu değer 6'dır.
*   **Traffic Class:** 8 bit trafik sınıfı alanı.
*   **Flow label:** 20 bitlik alan.
*   **Payload length:** sekizli olarak IPv6 başlığını takip eden paketin geri kalanı olan 16 bitlik işaretsiz tam sayı.
*   **Next header:** 8 bit seçici. IPv6 başlığını hemen takip eden başlık türünü tanımlar. IPv4 protokol alanıyla aynı değerleri kullanır.
*   **Hop Limit:** 8 bitlik işaretsiz tam sayı. Paketi ileten her düğüm tarafından birer birer azaltılır. Atlama limiti sıfıra düşürülürse paket atılır.
*   **Source address:** 128 bit. Paketin ilk göndericisinin adresi.
*   **Destination address:** 128 bit. Paketin amaçlanan alıcısının adresi. İsteğe bağlı bir yönlendirme başlığı varsa, hedeflenen alıcının alıcı olması gerekmez.

IP paketi başlığı bu şekilde incelenebilmektedir.

### IP Adres Sistemi

İnternet Protokolü adresi (IP adresi), iletişim için İnternet Protokolünü kullanan bir bilgisayar ağına bağlı olan bilgisayarın kendine özgü adresidir. Bir IP adresi iki ana işlevi yerine getirir: ana bilgisayar veya ağ arabirimi tanımlama ve konum adresleme.

IP iki temel sürüme sahiptir. İnternet Protokolü sürüm 4 (IPv4), bir IP adresini 32 bitlik bir sayı olarak tanımlar. İnternet Protokolü sürüm 6 (IPv6) ise 128 bit kullanan yeni bir IP sürümü olarak 1990larda geliştirildi, 1998'de [RFC1883](https://tools.ietf.org/html/rfc1883) dokümanı altında standartlaştırıldı.

Neden iki farklı IP sürümü var derseniz. IPv4 32 bitlik yapısı ile 2^32 kadar IPv4 adresine sahip olabilir ki bu da yaklaşık **4,294,967,296 IPv4 kullanan cihaz** demek. 4 milyar cihaz internetin ilk dönemlerinde az gibi dursa bile şu an sadece Java kullanan 1 milyar cihaz olduğunu varsayarsak geriye 3 milyar cihaz kalıyor demektir. (bunu şaka olarak söylemedim. ATM’lerden otomatlara, akıllı televizyonlardan şehir içi ulaşım ve ışıklandırma sistemlerine kadar pek çok düğümde cihaz java kullanarak yazılmış yazılımlarla çalışıyor.)

Klasik Internet of Things’in hayatımıza girmesi ile internete bağlı düğüm sayısı arttı tezini de geçin, Türkiye özelinde 40 milyondan fazla yetişkinin en az bir telefonu, her ailenin de bir bilgisayarı olsa bu 84 milyon gibi az bir nüfusa sahip olan bir ülkede (evet gerçekten az bir sayı bu bence) yaklaşık 50 milyondan fazla cihaz demek. İnternet, daha ARPANET dönemlerine bu günler düşünülerek planladığını hiç sanmıyorum. Çünkü halihazırda ARPANET bile savunma sanayisi için geliştirilmiş bir teknoloji idi.

El hasılı kelam internet’in büyümesi ve mevcut IPv4 adreslerinin tükenmesi nedeniyle, IPv6 dağıtımı 2000'lerin ortalarından beri devam etmektedir.

Ağ yöneticileri, bir ağa bağlı her cihaza bir IP adresi atar. Bu tür atamalar, ağ uygulamalarına ve yazılım özelliklerine bağlı olarak statik (sabit veya kalıcı) veya dinamik bir temelde olabilir.

IP adresleri, IPv4'te 192.0.2.1 ve IPv6'da 2001:db8:0:1234:0:567:8:1 gibi insan tarafından okunabilen gösterimlerde yazılır ve görüntülenir. Ancak bu adresler (özellikle IPv6 adresleri) pek insanın okuması için uygun değildir. Bu sebeple DNS sunucuları kullanarak her bir alan adı için bir IP ataması yapılır.  
Bir diğer IP konusu ise IP adreslerinin bir yapısı vardır. Bunu IP Subnetting ile ilgili yazacağım bir yazıda detaylı olarak anlatırım. Ancak IP adresinin bir yönlendirme öneki bir de host soneki kısmı vardır. IPv4 için örneğin 192.168.1.1 adresi 32 bitlik yazımda şu şekilde ifade edilir

**11000000.10101000.00000001.00000001**

Burada her bir 8 bitlik kısım bir parçayı ifade eder. genellikle bugünkü kullandığımız ağlarda ilk 24 bit yönlendirme öneki, son 8 bit ise cihaz sonekidir. Bu durumda yönlendirme biti adresin sonuna eklenir. Bu durumda IPv4 adresi 192.168.1.1/24 olarak ifade edilir. Ve ağ maskesi de yine bu yönlendirme önekine göre oluşturulur.

IP adres alanı, küresel olarak İnternet Tahsisli Numaralar Kurumu (IANA) ve kendi belirlenmiş bölgelerinde İnternet servis sağlayıcıları (ISP’ler) ve diğer uç noktalar gibi yerel İnternet sicillerine atamadan sorumlu beş bölgesel İnternet sicili (RIR) tarafından yönetilir.   
IPv4 adresleri, IANA tarafından RIR’lere her biri yaklaşık 16,8 milyon adresten oluşan bloklar halinde dağıtıldı, ancak 2011'den beri IANA düzeyinde tükendi. RIR’lerden yalnızca birinin Afrika’da yerel atamalar için hala bir miktar IPv4 kaynağı var. Ancak bazı IPv4 adresleri özel ağlar için ayrılmıştır ve genel olarak benzersiz değildir.

### IP Yönlendirme Sistemi

İnternet Protokolünde (IP), bilgisayarlar mesajları paketlere böler ve bu paketler hedeflerine giderken yönlendiriciden yönlendiriciye atlar:

![](https://cdn-images-1.medium.com/max/800/0*uVkD3r-oViftL05Y.png)

Bir paketi bir kaynaktan bir hedefe yönlendirme sürecini adım adım inceleyelim.  
Bilgisayarlar ilk paketi en yakın yönlendiriciye gönderir. Yönlendirici, bilgisayar ağlarında paketleri hareket ettirmeye yardımcı olan bir tür bilgi işlem aygıtıdır. Şu anda evinizde veya ağınızda büyük olasılıkla bir yönlendiriciniz var ve bu yönlendirici, mevcut bilgisayarınızın paketleri için ilk durak olarak kullanılır.

![](https://cdn-images-1.medium.com/max/800/0*eqL3-jOw7ZJH3e-X.jpg)

Yönlendirici bir paket aldığında, IP başlığına bakar. En önemli alan, yönlendiriciye paketin nereye varmak istediğini söyleyen hedef IP adresidir.

Yönlendiricinin bir paket gönderebileceği birden fazla yolu vardır ve amacı, paketi nihai hedefine daha yakın bir yönlendiriciye göndermektir. Peki nereye gidileceğine nasıl karar verilir? Yönlendirici, hedef IP adresine göre bir sonraki yolu seçmesine yardımcı olan bir yönlendirme tablosuna sahiptir. Bu tabloda her olası IP adresi için bir satır yoktur; çünkü 2 üzeri 32 olası olası IP adresi var ve bunlar saklanamayacak kadar fazla bir IP adres sayısıdır. Bunun yerine, tabloda IP adresi önekleri için satırlar bulunur.

IP adresleri hiyerarşiktir. İki IP adresi aynı önekle başladığında, bu genellikle Comcast SF ağı gibi aynı büyük ağda oldukları anlamına gelir. Yönlendirici yönlendirme tabloları, çok daha az bilgi depolayabilmeleri için bu durumdan yararlanır.

Yönlendirici, hedef IP adresi için tabloda en spesifik satırı bulduğunda, paketi bu yol boyunca gönderir. Her şey yolunda giderse, paket sonunda onu tam olarak nereye göndereceğini bilen bir yönlendiriciye ulaşacaktır.  
Yönlendirici artık mesajı kişisel bir bilgisayar veya sunucu olabilecek hedef IP adresine gönderebilir.

### **Sonuç:**

Bu yazıda IP paket sistemi, adresleme ve paket yönlendirmesi nasıl yapılır ondan bahsettim. Internet iletişim yapısının temeli olan IP sistemi bu şekilde açıklanabilir. Bir sonraki kısımda paketlerde iletişim nasıl sağlanır onu göstereceğim.

### Kaynakça:

* [**IP Address Definition**](https://www.investopedia.com/terms/i/ip-address.asp)
* [https://www.cloudflare.com/learning/network-layer/internet-protocol/](https://www.cloudflare.com/learning/network-layer/internet-protocol/)
* [**Internet Protocol - Wikipedia**](https://en.wikipedia.org/wiki/Internet_Protocol)
* [**IP address - Wikipedia**](https://en.wikipedia.org/wiki/IP_address)
* [**Computers and the Internet - Khan Academy**](https://www.khanacademy.org/computing/computers-and-internet/)
* [**rfc1883**](https://tools.ietf.org/html/rfc1883)
* [**rfc6864**](https://datatracker.ietf.org/doc/html/rfc6864)
* [**IPv4 Header Format**](https://www.educba.com/ipv4-header-format/)
* [**IPv6 Packet Header Format - System Administration Guide: IP Services**](https://docs.oracle.com/cd/E18752_01/html/816-4554/ipv6-ref-2.html)
