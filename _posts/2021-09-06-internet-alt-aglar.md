---
layout: post
title: "Internet 101: Alt Ağlar Ip Subnetting"
date: 2021-09-06 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-06-internet-alt-aglar.jpg"
image_hash: "a568a0feef4f7c4c6d73804a16a15e43"
---

TCP/IP protokol paketinde iletişimi sağlayan protokolün İnternet Protokolü olan IP olduğunu öğrenmiştik. İletişim sağlanırken cihazlar bu protokolü kullanarak birbirlerine bağlanırlar, adres alırlar ve haberleşmeyi tamamiyle bu altyapı ile oluştururlar. Ağ yapılandırması bu iletişimin ne kadar hızlı ve kaliteli yapılabileceğini belirleyen faktördür. Düzgün yapılandırılmamış ağlarda switch’lerin baş edemeyeceği kadar yüksek bir trafik oluşmaktadır. Bu trafiği ve sıkışıklığı azaltmak için örneğin, bir kuruluş, kuruluş dışındaki kullanıcılar tarafından bilinen tek bir internet ağ adresine (NETID) sahip ağı, farklı departmanlar ve farklı tipteki kullanıcılar için alt ağlarına bölerek yapılandırabilir. Bu işleme **alt ağ oluşturma** (IP Subnetting) denir. Alt ağ adresleri yerel yönlendirme yeteneklerini geliştirirken gerekli ağ adreslerinin sayısını azaltır.

IPv4, bir ağ varyasyonuna izin verir ve bir IP adresinin alt ağ olarak bilinen ana bilgisayar segmentleri, bir ağı fiziksel ve mantıksal olarak tasarlamak için kullanılabilir. Temel olarak burada bir IP adresi blogunu belli kurallara uygun olarak böleriz ve internet ağ adresine sahip olan ağları daha kolay yapılandırıp iç ağ üzerindeki yükü azaltabiliriz. Ağınızın belirli bölümleri arasında çok fazla trafik akışı olduğunda, bu bölümleri tek bir bölümde gruplandırmanız trafiğin bir yerden bir yere gitmek için tüm ağ boyunca seyahat etmesini azaltarak ağ içerisinde trafiği azaltır. Ağınızın küçük bölümlerini alt ağlara ayırmak, trafiğin daha hızlı akmasına ve gereksiz yollardan kaçınarak trafiğin gerekmediği yerlere eklenmesine olanak tanır.

Ek olarak, alt ağ oluşturma, IP adreslerinin verimli bir şekilde tahsis edilmesine yardımcı olur ve çok sayıda IP adresin boşta kalmasını önler. Bu alt ağ mantalitesi sadece **Kurumsal Kaynak Yönetim Sistemleri (ERP)** içinde değil bazı internet sağlayıcıları tarafından da kullanılır. İnternet sağlayıcıları kendi IP aralıklarında sabit IP adreslerini size kendi çatısı altında yeni bir alt ağ ayarlayarak verir, bu sayede sizin hızınız belirli olsa bile trafiğiniz azaldığı için daha sabit hızlı ve daha az gecikme süresine sahip bir internet bağlantısına sahip olursunuz.

Alt ağ sistemi oluşturmaya bakmadan önce IP adres yapısına bir daha bakalım.

**IP Adres Yapısı**
===================

IP adresleri temel olarak 2 protokol ile dağıtılır. Eski model IPv4 ve daha modern olan IPv6 olmak üzere iki farklı IP adresi altyapısı bulunmaktadır. Bir ağa bağlandığımız zaman bizim kişisel bir ağ adresimiz olur. Bu adres genellikle:
`**xxx.xxx.xxx.xxx**`formundadır. IPv4 için bu x değerleri 0–255 arasındaki bir sayıyı ifade eder. IPv6 içinse bu adres biraz daha uzundur:
`**ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff**`
şeklindedir ve her bir blok 0 ile `**ffff**` hexadecimal değeri (yani 65535 arasında bir sayı değeri) olarak ifade edilir

![](https://miro.medium.com/max/2000/1*L0a1C8afrEbROjsmjUIDnw.png)Örnek bir IP çıktısı.

Biz öntanımlı bir broadcast (ağ bağlantı adresi) üzerinden ağ sahibi isek yukarıdaki çıktıda gördüğümüz gibi /24 olan bir IPv4 ağımız olacaktır, bu bizim internet adresimizin ilk 24 bitlik kısmının ağ bağlantı noktası son 8 bitlik kısmının ise host portion (ana bilgisayar bağlantı adresini) oluşturduğunu ifade eder. Bu ağda bağlantı kısmı 0 ile 255 arasında olan toplamda 254 (0 ve 255 numaralı hostlar rezerve edilmiştir) cihaz bağlanabilir. Benim ağım özelinde bu şu demektir, benimle aynı ağda bulunan cihazlar:

192.168.43.1 -> 192.168.43.254

kartelasında bir IP alır. Bazı durumlarda biz bu aralığı büyütüp küçültmek isteriz. Bunun temel sebebi örneğin yüzlerce bilgisayardan oluşan bir ağımız varsa olabildiğine küçük ağ parçalarına ayırmak gelen bir paketin tüm 254 cihazın üzerinden geçmesini önleyerek uygun bir cihaza aktarımını sağlamaktır. Bu yüzden biz ağları alt parçalara böleriz. Bunu yaparken de IP sınıflarından çoğunlukla yararlanırız.

IP Sınıfları
============

Diyelim ki belirli bir IP adresi bulmaya, ağınızdaki IP adreslerini düzenlemeye çalışıyorsunuz veya bizim gibi ağınızı bölmeye çalışıyorsunuz. Bu, bir tür standart olmadan imkansız bir iş haline gelirdi. IP adresleri, aradığınızı daha hızlı bulmanıza yardımcı olmak için sayısal bölümlere ayrılmıştır. Bu bölümlere **IP sınıfı** denir. IP adresleri üç sınıfa ayrılır: A, B ve C

*   **A Sınıfı:** IP adresleri 0.0.0.0 ile 127.255.255.255 arasında olanlardır.
*   **B Sınıfı:** IP adresleri 128.0.0.0 ile 191.255.255.255 arasındaki adreslerdir.
*   **C Sınıfı:** IP adresleri 192.0.0.0 ile 223.255.255.255 arasındaki adreslerdir.

Bir IP adresinin sınıfını belirlemeye çalışıyorsanız, ilk numaraya bakmanız gerekir. İlk sayı 1'den 127'ye kadar ise, bu A sınıfı bir adres olacaktır. İlk sayı 128 ile 191 arasındaysa, bu B sınıfı bir adrestir. Son olarak, 192 ile 223 arasındaysa, C sınıfı bir adrestir.

A sınıfı ağ numaralarının ilk baytına atanan değerler 0–127 aralığındadır. A sınıfı IP adresleri için ağ 0–127 sayıları arasındadır

```
**00000000=0    -> Minimum
01111111=127  -> Maksimum**
```

Örneğin 73.12.01.14 IP adresi bir A sınıfı IP adresidir. Sınıf a İlk bayttaki 75 değeri, ana bilgisayarın A sınıfı bir ağda olduğunu gösterir. Kalan bayt 12.01.14, ana bilgisayar adresini oluşturur. InterNIC, bir A sınıfı numarasının yalnızca ilk baytını atar. Kalan üç baytın kullanımı, ağ numarasının sahibinin takdirine bırakılmıştır. İnternet içerisinde veya intranet ağında 127 tane A sınıfı ağ var olabilir. Bu numaraların her biri **16.777.214** ana bilgisayar barındırabilir.

B sınıfı bir ağ numarası, ağ numarası için 16 bit ve ana bilgisayar numaraları için 16 bit kullanır. B sınıfı ağ numarasının ilk baytı 128–191 aralığındadır.

```
**10000000=128    -> Minimum
10111111=191    -> Maksimum**
```

130.121.21.53 sayısında, ilk iki bayt olan 130.121, InterNIC tarafından atanır ve ağ adresini oluşturur. Son iki bayt, 21.53, ana bilgisayar adresini oluşturur ve ağ numarasının sahibinin takdirine bağlı olarak atanır.

C Sınıfı ağ numaraları, ağ numarası için 24 bit ve ana bilgisayar numaraları için 8 bit kullanır.

```
**11000000=192    -> Minimum
11011111=223    -> Maksimum**
```

C Sınıfı ağ numaraları, az sayıda ana bilgisayarı olan ağlar için uygundur — maksimum bağlanabilecek bilgisayar sayısı 254'tür. C sınıfı ağ numarası, bir IP adresinin ilk üç baytını kaplar. Ağ sahiplerinin takdirine bağlı olarak yalnızca dördüncü bayt atanır.

IP adresi sınıfına bağlı olarak, ağı ve ana bilgisayarı belirtmek için IP adresinin farklı bölümleri kullanılır. Örneğin, A sınıfı, ağ için IP adresinin yalnızca 8 bitini kullanır ve ana bilgisayar için 24 bit bırakır. Bu nedenle, 126.27.61.137 örneğini kullanarak, ağ IP adresi 126.0.0.0 ve ana bilgisayar adresi 0.27.611.137 olacaktır.

C sınıfı bir adres için ağ için 24 bit kullanılır ve ana bilgisayar için sekiz bit kalır. Örnek olarak 200.23.65.1 kullanıldığında, bu, ağ için 200.23.65.0 ve ana bilgisayar için 0.0.0.10 ile sonuçlanır.

Ancak bazı özel koşullar da IP ataması için önem arz etmektedir. Örneğin A sınıfı 127.0.0.0 ile 127.255.255.255 adresleri kullanılamaz. Bu adresler geri döngü(loopback) aygıtı ve tanılama işlevleri için ayrılmıştır. Yine aynı şekilde 192.168.0.0 ile 192.168.255.255 adreslerinin ise kullanımı tavsiye edilmez. Bu ağ adresleri genellikle internete bağlı ağlarda bir güvenlik duvarının yapılandırılmasında kullanılır.

Sonuç olarak IP sınıflandırması ile TCP/IP ağı gibi ağların çalışması için, ağ boyunca bilgi ileten yönlendiricilerin tam ana bilgisayar adresini bilmesi gerekmez. Yalnızca IP adresinin ağ kısmını bilmeleri gerekir; daha sonra paket, ana bilgisayarın ağına teslim edildiğinde, doğru ana bilgisayara ulaşabilir.

Ağları Parçalamak
=================

Ağları alt parçalara ayırırken biz temel bir kaynaktan ödün veririz. Bu kaynak IP adres miktarıdır. Ağları alt parçalara ayırırken her bir ağın bir “alt ağ maskesi” bulunmaktadır. Bu maske, ağda dolaşan paketlerin doğru yere gitmesini sağlamak için gerekli olan ve rezerve edilmiş bir IP adresidir. Her IP adresi sınıfı, IP adresinin hangi bölümünün ağla, hangi bölümünün ana bilgisayarla ilgili olduğunu bununla belirler. Her alt ağ sınıfı için varsayılan eşleşen alt ağ maskeleri aşağıdaki gibidir:

*   **A Sınıfı:** 0.0.0.0
*   **B Sınıfı:** 255.0.0.0
*   **C Sınıfı:** 255.255.0.0

Bu ağ maskesine ek olarak ağ bağlantı noktası ve ana bilgisayar bağlantı adresini de IP sınıflarına bağlı olarak belirleriz. Daha öncesinde de belirtmiştim.

*   **A Sınıfı:** ilk 8 biti ağ bağlantı noktası, son 24 biti bağlantı adresi olarak kullanır.
*   **B Sınıfı:** ilk 16 biti ağ bağlantı noktası, son 16 biti bağlantı adresi olarak kullanır.
*   **C Sınıfı:** ilk 24 biti ağ bağlantı noktası, son 8 biti bağlantı adresi olarak kullanır.

Derleyip topladığımız zaman karşımıza şöyle bir tablo çıkmakta.

![](https://miro.medium.com/max/20008/0*4gbmhIVjHQwE-GBj.png)

Alt ağ maskesi, alt ağın boyutunu ve kaç tane IP’ye sahip olacağını belirler. Alt ağ maskesi kullanıcı sayısına ve istenen IP sayısına göre seçilmelidir.

Aynı alt ağda bulunan bilgisayarları temsil eden sınıf adresine **Ağ Adresi (Network ID)** denir. Bu adresler, IP olarak herhangi bir cihaza atanamazlar ve oluşturulan alt ağların ilk adresleridir.

**Ağ maskesi (Network Mask)** ise

Herhangi bir ağda bütün adresleri temsil etmek için kullanılan adreslere **Broadcast Adres (Yayın Adresi)** denir. Bu adresler de ağ adresi gibi ağdaki herhangi bir bilgisayara IP adresi olarak atanamazlar ve oluşturulan alt ağların son adresleridir.

Standart IP Parçalama İşlemi
----------------------------

Standart IP parçalama işlemi aslında A B ve C sınıfı altında IP oluşturma işlemidir. Örneğin: ISP tarafından bize sınıf A bir IP adresi atanıyor olsun. 121.x.x.x bize ayrılıyor olsun. Bu durumda aslında biz şunu yaparız.

```
**01111001**.00000000.00000000.00000000 -> Ağ maskemizdir
**01111001**.11111111.11111111.11111111 -> Yayın adresimizdir
```

Bu durumda biz 121.0.0.1 ile 121.255.255.254 arasındaki tüm IP’leri aynı ağ içerisine atabiliriz

Standart Olmayan IP Parçalama İşlemi
------------------------------------

Standart IP parçalama işlemi ise ağ bağlantı noktası ile ana bilgisayar bağlantı adresi 8, 16 veya 24 olmayan bir alt ağ oluşturma işlemidir. Örneğin biz 22 bitlik bir ağ bağlantı noktasından bir alt ağ oluşturmak istediğimizde ise şöyle bir sonuç karşımıza çıkıyor. Örneğin yukarıdaki ağı 22 bitlik alt ağlara ayıralım. Bu ağlarda ilk alınan IP adresi 121.0.0.1'dir.

```
**01111001**.00000000.00000000.00000001 -> İlk IP adresi
**01111001**.**00000000.000000**00.00000001 -> 22 bitlik formda ilk subnet maskesidir. Yani bizim ilk ağımızın subneti alabildiğimiz ilk IP adresi olur
**01111001**.**00000000.000000**11.11111111 -> İlk alt ağımızın yayın adresidir
```

İlk IP adresimiz aslında burada ilk alt ağımızın ağ maskesi olan 121.0.0.1'olur.

İlk alt ağımızın yayın adresi ise 121.0.4.255 olur.

Bu şekilde yapılan alt ağ oluşturma işlemlerine ise standart olmayan dememizin sebebi ise gördüğünüz gibi standart sınıfların dışına çıkışımızdan dolayıdır.

Alt Ağ Sayısını Hesaplama
-------------------------

Olası alt ağların sayısını hesaplamak için, n’nin ödünç alınan ana bilgisayar bitlerinin sayısına eşit olduğu 2 üzeri n formülünü kullanarak elde ederiz. Örneğin, üç biti ana bilgisayar bağlantı adresi için alırsak, n=3 olur. 2^3 = 8, yani üç bitlik ana bilgisayar bağlantı adresi için sekiz alt ağ mümkündür.

Alt ağ başına olası ana bilgisayar sayısını hesaplamak için `2^h — 2` formülünü kullanarak buluruz ki; burada h, ana bilgisayar bitlerinin sayısına eşittir. İki adresin çıkarılmasının gerekmesinin nedeni, ağ adresi ve yayın adresi için ayrılmış sayılardır.

Sonuç
=====

Bu yazımızda ağları parçalayarak alt ağlara ayırmayı anlattım. Bir sonraki yazımda görüşmek üzere.

Kaynakça:
=========

* [IPv4 subnetting](https://www.ibm.com/docs/en/zos/2.1.0?topic=internetworking-ipv4-subnetting)

* [IP Addressing and Subnetting for New Users](https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html)

* [Subnet and Subnetting Tutorial Guide - DNSstuff](https://www.dnsstuff.com/subnet-ip-subnetting-guide)

* [Help:Range blocks/IPv6 - MediaWiki](https://www.mediawiki.org/wiki/Help:Range_blocks/IPv6)

* [IP Address Classes & Subnetting](https://snetengineer.blogspot.com/2010/11/ip-subnet-table.html)

* [What is a broadcast address and how does it work?](https://www.ionos.com/digitalguide/server/know-how/broadcast-address/)

* [https://docs.oracle.com/cd/E19504-01/802-5753/planning3-78185/index.html](https://docs.oracle.com/cd/E19504-01/802-5753/planning3-78185/index.html)
