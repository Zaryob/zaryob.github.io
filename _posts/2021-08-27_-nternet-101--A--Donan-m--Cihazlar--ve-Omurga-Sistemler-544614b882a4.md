---
layout: post
title: "İnternet 101: Ağ Donanımı Cihazları ve Omurga Sistemler"
date: 2021-08-27 12:23:43 +0300
categories: [genel, internet]
image: "2021-08-27-internet.jpg"
image_hash: "9bb80a06ec17f09dccda16adbc5625fb"
---


İnternetin iletişim altyapısı, donanım bileşenlerinden ve donanım üzerinde mimarinin çeşitli yönlerini kontrol eden bir yazılım katmanları sisteminden oluşur.

İnternet, aynı bilgisayar devrelerindeki gibi farklı düğümlerden oluşan bir yapıdır. Nasıl ki bilgisayarımız RAM, CPU, GPU gibi parçalardan meydana gelmişse, internet bağlantısında kullanılan cihazlar da benzeri bir yapıya sahip. Hepsi çalışan çok büyük bir sistemin parçası. Kullandığımız internet cihazları kendi ağlarımızı genel ağlara bağlamaya yarıyor. Yani bir nevi bizim birazdan sayacağımız parçalar aynı biraz önce saydığım bilgisayar parçaları gibi ve interneti de elektrik gibi düşünebiliriz.

Biz interneti kendi sistemlerimizde kullanırken bazı internet cihazlarından yararlanırız. Bunlar **networking devices** olarak adlandırılan ağ donanımı cihazlardır. Spesifik olarak, bir bilgisayar ağında veri aktarımına aracılık ederler. Bir nevi ağ için bu cihazlar, yol niteliğindedir. Basitçe bu cihazlardan bahsedelim ve bu cihazların kullanım amaçlarına göz atalım.

### Ağ Donanımları

Günümüzde en yaygın ağ donanımı türü , çoğu modern bilgisayar sisteminde standart olarak bulunan bakır kablodan iletimi esas alan bir Ethernet adaptörleridir. Bu adaptörlerin tek amacı bağlantıyı bir kablo vasıtası ile bilgisayara taşımaktır. Bir diğer yaygın donanım ise kablosuz dağıtıcılardır. Bu dağıtıcılar kablonun işini radyo sinyalleri kullanarak halletmektedir.

Ancak bu cihazlar biz son kullanıcılara interneti ileten cihazlardır. Ağ oluşturmak için kullandığımız cihazlar ise daha karmaşıktır. Bu cihazlar Çekirdek Ağ Bileşenleri, Hibrit Ağ Bileşenleri, Sınır Cihazlar ve Bitiş İstasyonları olarak 4 grupta incelenir.

#### Çekirdek Ağ Bileşenleri:

Çekirdek ağ bileşenleri diğer cihazları ve bileşenleri birbirine bağlarken kullandığımız cihazlardır. Bunları şu şekilde yazabiliriz.

* * *

![Gateway’lerin temel mantığı](https://cdn-images-1.medium.com/max/600/0*B05HxFNk351PSoNu.PNG)


**Gateway — Ağ Geçidi**: iletim hızlarını, protokolleri, kodları veya güvenlik önlemlerini dönüştürerek ağlar arasında uyumluluk sağlayan bir arayüz cihazıdır. Gerek ağlar arasında kullanır, gerek son haline ulaşan ağı, internet sağlayıcısından getirilen fiber optik kablolara bağlamayı sağlar. Bu açıdan dönüştürücü ve düzenleyici sistem vazifesi görmektedir.

* * *

![Cisco Router](https://cdn-images-1.medium.com/max/600/0*wb8A5caEVU7o1KAY.png)

**Router — Yönlendirici :** veri paketlerini bilgisayar ağları arasında ileten bir ağ aygıttır. Yönlendiriciler, İnternet’te “trafik yönlendirme” işlevlerini yerine getirir. Bir veri paketi, hedef düğümüne ulaşana kadar ağları oluşturan ağlar aracılığıyla tipik olarak bir yönlendiriciden diğerine iletilir.

* * *

![Temel bir switch cihazı](https://cdn-images-1.medium.com/max/600/0*gY3mGfV2SmxqSgA6)

**Switch — Ağ Anahtarları:** Verileri almak, işlemek ve hedef cihaza iletmek için paket değiştirme işlemini kullanarak bir bilgisayar ağında cihazları birbirine bağlayan bir cihazdır. Bu bağlama işlemi VLAN kurularak yapılır.

Sanal yerel alan ağı anlamına gelen VLAN(Virtual Local Area Network), yerel ağ içerisinde çalışma grupları oluşturmak için kullanılır. Bu sayede bağlı cihazlar birden fazla anahtarlarla bölünerek farklı alt ağlar oluşur.

![Basit bir VLAN yapısı](https://cdn-images-1.medium.com/max/800/0*mNCYhm12dipBP8CL)

Daha az gelişmiş ağ hub’larından farklı olarak , bir ağ anahtarı, her bir bağlantı noktasından aynı verileri yayınlamak yerine, verileri yalnızca onu alması gereken bir veya daha fazla cihaza iletir. Ağ anahtarı cihazlarının eski modelleri, ayarlama yapmaksızın kullanılırken (örneğin cihaz üzerinde ip atamalarını kontrol etmek mümkün değilken) veya sadece yönlendirme için kullanılırken, akıllı ağ anahtarları bugün hem yönlendirici hem de ayarlanabilir ağ anahtarı olarak da kullanılabilmektedir.

* * *

![Temel olarak bu cihaz iki alt alanı birbirine bağlar.](https://cdn-images-1.medium.com/max/600/0*Ky-CqpD7Bs2zhVAD.gif)

**Bridge — Köprü:** birden çok ağı birbirine bağlayan bir aygıttır. Ancak son dönemde ayarlanabilir router cihazları da bu işi yapabilmektedir. Ağ anahtarlarından farklı yanı anahtar bir ağı bağlanan eş cihazlara dağıtırken, köprü cihazları yalnızca ağları birbirine bağlar. Veri geçişine paket değiştirme işlemi yapmadan izin verir. Böylece paketin gideceği cihazı belirlemenin aksine sadece paketin iletimini sağlar. (Ağ anahtarları paketleri uygun bilgisayarlar için ayırmaktadır.)

* * *

![](https://cdn-images-1.medium.com/max/600/0*p3wBLd9AM8pFS4tm.jpg)

**Repeaters — Tekrarlayıcı:** Bir sinyali alan ve sinyali daha uzun mesafeleri kapsayabilmesi için daha yüksek bir seviyede veya daha yüksek bir güçte veya bir engelin diğer tarafına yeniden ileten elektronik bir cihazdır. Hub tarzı tekrarlayıcılar ise birden fazla ağın tek bir ağ segmenti gibi davranmasını sağlamak için kullanılır. Uzak mesafeler arasında kurulan ağlarda temel olarak ağı güçlendirmek ve cihazları eşgüdümlü çalıştırabilmek için kullanılmaktadır. Ancak hub’lar artık yerini büyük ölçüde akıllı ağ anahtarlarına bıraktı ve çok eski kurulumlar veya özel uygulamalar haricinde tekrarlayıcılar kullanılmamaktadır.

#### Hibrit Ağ Bileşenleri:

İletimde dönüştürme, yönlendirme ve protokol güvenliğini destekleme amacıyla kullanılan; sınır bileşenlere veya çekirdek bileşenlere destek veren cihazlardır.

**Multilayer Switch — Çok Katmanlı Ağ Anahtarı:** Çok katmanlı ağ anahtarları yüksek protokol katmanlarında işlevsellik sağlayan anahtar aygıtlardır. Cihazların genel olarak görünümü birbirine benzerken üzerindeki portların hangi amaçla kullanılabileceğine ağ anahtarı üzerinde ayar yapılarak karar verilir. Biraz önceden beri akıllı ağ anahtarları dediğim cihaz da yine bu cihazdır.

Her bir ağ anahtarı kendi interface (arayüz) sistemine sahiptir. Arayüz türü o ağ anahtarının hangi amaçla kullanılmak için yapılandırılacağını belirler. Bu arayüzlerin bir veya hepsini birden aynı cihaz üzerinden oluşturabiliriz. Çok katmanlı ağ arayüzü aşağıdaki tiplerde olabilir:

**Layer 2 Interface:** Port bir VLAN ağı oluşturmak için bir port **access gate** (erişim kapısı) olarak verilebilir veya port **trunk** (ana hat) olarak kullanılarak birden fazla VLAN bir arada yönetilebilir. (VLAN konusuna daha detaylı olarak geleceğim. Belki de bir sonraki yazıda OSI modeli anlatırken bile olsun o konuya değineceğim)

**Switch Virtual Interface (SVI):** SVI kullanarak sanal bir arayüz oluşturabiliriz. Bu yazılımsal arayüz VLAN’a özgüdür. Layer 2 Interface olarak ayarlanabileceği gibi veya Layer 3 olarak da bir ağ oluşturmak için ayarlanabilir.

**Routed Interface:** Fiziksel bir arayüz herhangi bir VLAN’la ilişkisi bulunmamaktadır. Bu tip bir arayüz router portu gibi davranmaktadır.

Bu arayüzlerden bir veya birden fazlasını kullanarak bir ağ üzerinde tek bir ağ anahtarı ile hem yönlendirme, hem de sanal ağ oluşturma işlemleri yapılabilmektedir.


* * *

![](https://cdn-images-1.medium.com/max/600/0*2Qy4KeyuaR-Fl_gV.jpg)

**Protocol Converter — Protokol Çevirici:** Protokol Dönüştürücü, bir cihazın standart veya tescilli protokolünü, birlikte çalışabilirliği sağlamak için diğer cihaz veya araçlara uygun protokole dönüştürmek için kullanılan bir cihazdır. Bu sayede aynı ağ üzerine farklı protokolleri kullanan cihazlar eş zamanlı olarak bağlanabilmektedir.

Bir protokol dönüştürücünün genel olarak, harici bağımlı cihazlarla iletişim kuran bir dahili ana protokolü içerir (örneğin ethernet gibi) ve toplanan veriler dönüştürücünün dahili veritabanını güncellemek için kullanılır. Harici ağ cihazları veri talep ettiğinde, dahili veri tabanından veri toplar ve harici cihaza gönderir. .bunu yaparken de veriyi uygun aralıklarla uygun protokole dönüştürür. Bir dönüştürücü RS-232, RS-485, Ethernet vb. içeren protokol-X & Y üzerinde iletişim için farklı fiziksel ortamlar üzerinde protokol çevirmesi yapabilir.

* * *

![Brouter kullanan iki ağ birbiri ile hem yönlendirmeli hem yönlendirmesiz olarak haberleşebilir.](https://cdn-images-1.medium.com/max/600/0*QigvBqBoTfp074WU.png)


**Brouter (Bridge Router — Köprü Yönlendirici):** Köprü yönlendirici, köprü ve yönlendirici olarak çalışan bir ağ aygıtıdır. Brouter paketleri bilinen protokoller için yönlendirir ve diğer tüm paketleri bir köprünün yapacağı gibi iletir. Standart yönlendiriciler, karmaşık ağ yapılarında yönlendirilebilir protokoller için hem ağ katmanında hem de yönlendirilemez protokoller için veri bağlantı katmanında çalışır. Bu sayede hem yönlendirme yaparak bir router gibi çalışan hem de yönlendirme yapmadan ağlar arası bağlantı sağlayan bridge gibi çalışan cihaz ihtiyacını gidermiş ve karmaşık ağlarda birden fazla router ve bridge kullanarak ağları düzenleme zorunluluğunu ortadan kaldırmıştır.

#### Sınır Cihazlar:

Bir ağ için sınır, bir ağın özel ve yerel olarak yönetilen tarafı, genellikle bir şirketin intraneti ile bir ağın halka açık tarafı, genellikle İnternet arasındaki güvenli sınır olarak adlandırılır.

Tipik olarak sınır cihazlar farklı ağların (örneğin, bir dahili ağ ve bir harici ağ arasındaki) bağlantı noktasında bulunan donanım veya yazılım bileşenleri içerir.

![Bir proxy sunucusu donanımsal bir cihaz olabildiği gibi bir ana sunucu üzerinden yazılımsal olarak bu özelliği sağlamak üzere yapılandırılmış bir VM bile olabilir.](https://cdn-images-1.medium.com/max/600/0*jhghZrkh1MuqgCpz.jpg)


**Proxy Sunucusu:** İstemcilerin diğer ağ hizmetlerine dolaylı ağ bağlantıları kurmasını sağlayan bilgisayar ağı hizmetine Proxy Sunucu sistemi denir. Proxy sunucusu, masaüstü bilgisayar veya mobil cihaz gibi bir uç “istemci” ile internetteki bir web sitesi, sunucu veya web veya bulut tabanlı uygulama gibi bir hedef arasında bulunur, istemciden bir web isteği alır geri dönütü ağ içerisine verir ve bağlantıyı sonlandırır.

* * *

![Endüstride sıkça kullanılan bir firewall cihazı](https://cdn-images-1.medium.com/max/600/0*0hsuNXOhJx6dWflw.jpg)

**Firewall — Güvenlik Duvarı:** Ağ politikası tarafından yasaklanan bazı iletişimleri önlemek için ağa yerleştirilen bir donanım veya yazılım parçasıdır. Bir güvenlik duvarı, tipik olarak, güvenilir bir dahili ağ ile internet arasıdaki iletişimi filtreleyerek iletişimin güvenli veya güvenilir olmadığı tespit eder ve güvensiz bir dış ağ arasında bir engel oluşturur. Çeşitli sitelerin engellenmesi, veri kaybının ve virüslerin önüne geçilmesi için güvenlik gerektiren bir ağda en önemli komponent güvenlik duvarı olmalıdır.

* * *

![Donanımsal bir NAT bileşeni](https://cdn-images-1.medium.com/max/600/0*XiwKdaOMlurOaPqd.jpg)

**Ağ adresi çeviricisi (NAT):** Dahili ağ adreslerini harici ağ adreslerine dönüştüren veya bunun harici ağ adreslerini dahili ağ adreslerine dönüştüren ağ hizmetidir. Sınır cihazların tamamı gibi bu da donanımsal veya yazılımsal olarak sağlanabilmektedir.

* * *


**Residential gateway — Konut geçidi:** Gatewaylerden bahsederken bazı gatewaylerin bizim ağımızı internete bağlamak için kullanıldığından bahsetmiştim. Bu amaçla yapılandırılmış gatewaylere residential gateway demekteyiz. Ancak bazı özel durumlarda (örneğin ISS tarafından getirilen fiber optik kabloların ağ içerisine bakır kablolara dönüştürülerek dağıtılması) özel konut geçidi cihazları gerektirebilir.

#### Bitiş İstasyonları:

Bu cihazlar genel olarak günlük yaşamımızda kullandığımız cihazlara ağ ve çevirmeli ağ (telefon hattı) sağlayan cihazlardır.

![](https://cdn-images-1.medium.com/max/600/0*6raqkINELt8CYguP.jpg)

**Ağ arabirim denetleyicisi (Network Interface Controller — NIC):** Bir bilgisayarı kablo tabanlı bir bilgisayar ağına bağlayan bir aygıttır. Bir aygıt dediğime bakmayın bile. Bu sizin laptoplarınızda bulunan bir ethernet soketi veya aşağıdaki gibi bir ethernet kartı da olabilir

* * *

![](https://cdn-images-1.medium.com/max/600/0*GbcCw-Wvvo7uVesV)

**Kablosuz ağ arabirim denetleyicisi:** Evimizde kullandığımız wifi sinyallerini işleyerek interneti bilgisayarımıza ileten aletlere verilen isimdir. Şu anda laptopların çoğundaki dahili WiFi adaptörleri bu işleri yapmaktadır.

* * *

**Modemler:** Dijital bilgiyi kodlamak için analog bir “taşıyıcı” sinyali yayan ve ayrıca iletilen bilginin kodunu çözmek için böyle bir taşıyıcı sinyali işleyen eden cihazdır. Çoğunlukla switch’e bağlanarak ortak bir kablosuz ağ oluşturmaya yarar. Modemlere herhangi bir örnek vermeyi gerekli görmüyorum.

* * *


**Line Driver — Ağ Sürücüsü:** Ağ üzerindeki sinyali güçlendirerek iletim mesafesini artıran alettir.

### Sonuç:

Ağ oluşturmak için kullanılan genel cihazları öğrenmemizin ardından, temel internet konseptlerini ve ağ türlerini öğrenerek ilk ağ simulasyonumuzu yapabiliriz.

### Kaynakça:

* [**Networking hardware - Wikipedia**](https://en.wikipedia.org/wiki/Networking_hardware)
<div name="b04a" id="b04a" class="graf graf--mixtapeEmbed graf-after--mixtapeEmbed">
* [**Network Devices Explained**
_To build a strong network and defend it](https://blog.netwrix.com/2019/01/08/network-devices-explained/)
* [**Internet - Wikipedia**](https://en.wikipedia.org/wiki/Internet)
