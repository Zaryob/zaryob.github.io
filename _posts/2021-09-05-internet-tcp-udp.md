---
layout: post
title: "İnternet 101: TCP — TCP İletişimi Nasıl Yapılır - TCP Paketleri — UDP ile TCP’nin Farkları"
date: 2021-09-05 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-05-internet.jpg"
image_hash: "1cf8fef9ba4e57e4da2cc06a858571f5"
---


Bir önceki yazımızda IP’nin nasıl çalıştığını, IP paket yapısını ve paket standartlarını öğrenmiştik. Veri aktarımında internet protokolü görev yaparken bilgisayar ağlarında iletişiminin sağlanması ve kayıpsız veri gönderimi sağlayabilmek için TCP isminde bir protokol daha bulunmaktadır.

TCP/IP modelinde IP ağlar arası iletişimden sorumlu paket protokolü iken TCP protokolü de iletişimden sorumludur. Aslında iletişimden sorumlu tek paket protokolü TCP değildir. UDP isminde ikinci bir protokol daha vardır. Bunu yazının ilerleyen kısımlarında anlatacağım.

TCP’de internetin doğuşundan önce ARPANET için tasarlanmış bir protokoldür. Hatta öncülü olduğu belirtilen DoD (Department of Defence) protokolünin biraz daha gelişmiş bir versiyonudur. Bütünü ile bu paket yapısına TCP/IP denmesinin sebebi internetin erken dönemlerinde bu iki protokol eş zamanlı olarak ağın adreslenmesi, ağ bağlantısı kurularak iletişim sağlanması işlevleri için aynı anda kullanılmışlardır.

TCP temel olarak WWW, IMAP ve POP3 (e-mail protokolleri), FTP (File Transfer Protocol) gibi protokollerin veri aktarımının temelini oluşturur. Diğer pek çok protokol TCP üzerine kuruludur.

TCP, bir uygulama programı ile IP arasında orta düzeyde bir iletişim hizmeti sağlar. Bu iletişim hizmeti TCP/IP modeline göre aktarım katmanında yer almaktadır. Aktarım katmanında, TCP tüm anlaşma ve aktarım ayrıntılarını işler ve tipik olarak bir ağ soketi arabirimi aracılığıyla uygulamaya ağ bağlantısının bir soyutlamasını sunar. Bu protokolde veri aktarımından uygulamadan ziyade ağ soket arabirimi, dolayısıyla kernel sorumludur.

TCP, özellikle ağ yapılandırmasında paketlerin kaybedilmesini engellemek ve iletişimde sıfır kayıp esasına bağlı olarak iletişim yapmak için yazılmıştır. Bazı öngörülemeyen durumlarda, ağ tıkanıklığı ve trafik yükünün dengelenmesi amacıyla bazı ağ işlemleri yüzünden IP paketleri düzensiz teslim edilmesi, paket kaybı yaşanması veya paketlerin duplicated (çoğaltılmış) olması sözkonusu olabilir. TCP protokolü, soket sistemi üzeriden bu sorunları algılayarak kaybolan verinin tekafisini, bozuk verilerin yeniden gönderilmesini ister. Bazı durumlarda ise hata olarak bu anomalileri kaynağa hata mesajları olarak iletir.

TCP zamanında teslimat yerine doğru teslimat için optimize edilmiştir ve sıra dışı mesajları veya kayıp mesajların yeniden iletimlerini beklerken nispeten uzun gecikmelere (saniyeler düzeyinde) neden olabilir. Bu nedenle, IP üzerinden ses gibi gerçek zamanlı uygulamalar için özellikle uygun değildir. Bu tür uygulamalar için, bunun yerine genellikle Kullanıcı Datagram Protokolü (UDP) üzerinden çalışan protokoller kullanılmaktadır. Bunlardan başlıca en çok kullanılanları Gerçek Zamanlı Aktarım Protokolü (RTP) ve Web-RTC (Web RealTime Connection) prokolleridir.

TCP protokolü bazı bayraklar içeren özel paketleri kullanarak, bilgisayarlar arasındaki iletişim kanalının kurulması, iletişimin başlatılması ve iletişimin sonlandırılması komutlarını yürütmektedir. Bu komutlar iletişimde kullanılan faz komutlar olarak adlandırılır.

TCP iletişiminde bu faz komutlar ve iletişim verisi paketler haline getirilir. Bölünmüş bu paketlere TCP segmenti adı verilir ve her bir segmentin başına ise TCP başlığı adı eklenir. TCP segmentleri daha sonra bir İnternet Protokolü (IP) verikatarında kapsüllenir ve IP paketlerine veri olarak bu bilgiler eklenir.

* * *

### TCP Segmentleri

![](/assets/img/posts/0*_lNdd13RRLgL4NSt.jpg)

Bir TCP segmenti, bir _segment_ _başlığından_ ve bir _veri_ katarından oluşur. Segment başlığı 10 zorunlu alan ve isteğe bağlı bir uzantı alanı içerir. Veri bölümü başlığı takip eder ve uygulama için taşınan yük verileridir. Veri bölümünün uzunluğu, segment başlığında belirtilmemiştir; IP başlığında belirtilen toplam IP datagram uzunluğundan segment başlığının ve IP başlığının birleşik uzunluğunun çıkarılmasıyla hesaplanabilir. Ardından bu segment şekilde görüldüğü üzere IP başlığı ile birleştirilerek veri akışı sağlanır. TCP komutlarının başlıkları ise şu şekilde sıralanabilir:

**Source Port:** Bağlantının kaynağına ait port bilgisidir. Bu bilgi verinin hangi porttan çıktığını anlatır.

**Destination Port:** İletim yapılacak adrese ait port bilgisidir.

**Sequence Number:** Sıra numarasının TCP sisteminde ikili bir rolü vardır:

*   SYN bayrağı (1) ayarlanmışsa, ilk sıra numarasıdır. Sıra numarasının bir fazlası, gerçek ilk veri baytının sıra numarası ve karşılık gelen ACK’deki onaylanan sayının toplamına eşittir.
*   SYN bayrağı boş (0) ise, mevcut oturum için bu segmentin ilk veri baytının birikmiş sıra numarasıdır.

**Acknowlegment Number:** Onay numarası olarak adlandırılır. ACK bayrağı ayarlanmışsa, bu alanın değeri, ACK göndericisinin beklediği bir sonraki sıra numarasıdır. Bu, önceki tüm baytların (varsa) alındığını onaylar. Her iki uç tarafından gönderilen ilk ACK, diğer ucun ilk sıra numarasını kabul eder, ancak veri yoktur.

**Data Offset:** TCP başlığının boyutunu belirtir. Minimum boyut başlığı 5 kelimedir ve maksimum 15 kelimedir, bu nedenle minimum boyut 20 bayt ve maksimum 60 bayt vererek başlıkta 40 bayta kadar seçenek sağlar. Bu alan adını, aynı zamanda TCP segmentinin başlangıcından gerçek veriye kadar olan uzaklık olması gerçeğinden alır.

**Reserved (32bit):** 32 bitlik ayrılmış alandır. Gelecekte kullanım için ayrılmıştır ancak henüz bir kullanım amacı olmadığı için sıfıra ayarlanmaktadır.

**Flags:** TCP bayraklarını anlatır. Daha öncesinde bahsettiğim gibi TCP iletişimi 3 ana fazda yapılmaktadır. Bu fazlardan hangisinde olduğumuzu bayraklar sayesinde anlarız. Bir nevi trafik ışıkları gibidir ve iletişimi yönetirler. Aşağıdaki gibi 9 adet 1 bitlik bayrak (kontrol biti) içerir:

*   **NS (1 bit): ECN-nonce **— gizleme koruması bayrağıdır.
*   **CWR (1 bit):** Tıkanıklık penceresi azaltma (CWR) bayrağı, gönderen ana bilgisayar tarafından ECE bayrağı ayarlanmış bir TCP segmenti aldığını ve tıkanıklık kontrol mekanizmasında yanıt verdiğini belirtmek için ayarlanır.
*   **ECE (1 bit):** ECN-Echo, SYN bayrağının değerine bağlı olarak ikili bir role sahiptir. SYN bayrağı (1) ayarlanırsa, TCP eşinin ECN yeteneğine sahip olduğu belirtilir. SYN bayrağı temizse (0), normal iletim sırasında IP başlığında Tıkanıklık Deneyimli bayrağı ayarlanmış (ECN=11) bir paket alındığını ifade etmektedir. Bu da TCP göndericisine ağ tıkanıklığının (veya yaklaşan tıkanıklığın) bir göstergesi olduğunu ifade eder.
*   **URG (1 bit):** Acil işaretçi alanının önemli olduğunu gösterir
*   **ACK (1 bit):** Onay alanının önemli olduğunu gösterir. İstemci tarafından gönderilen ilk SYN paketinden sonraki tüm paketler bu bayrak setine sahip olmalıdır.
*   **PSH (1 bit):** İtme işlevi. Arabelleğe alınan verilerin alıcı uygulamaya gönderilmesini ister.
*   **RST (1 bit):** Bağlantıyı sıfırlama talebi gönderir.
*   **SYN (1 bit):** Sıra numaralarını senkronize etme komutu gönderir. Yalnızca her uçtan gönderilen ilk pakette bu bayrak ayarlanmalıdır. Diğer bazı bayraklar ve alanlar, bu bayrağa göre anlam değiştirir ve bazıları yalnızca ayarlandığında ve diğerleri açık olduğunda geçerlidir.
*   **FIN (1 bit):** Göndericiden gelen son paketi ifade eder.

**Window:** Bu segmentin gönderen cihazın anlık olarak _alma penceresi_ pencere boyutu birimlerinin sayısını almaya hazır olduğunu belirtir.

**Checksum:** 16 bitlik sağlama toplamı alanı, TCP başlığının, yükün ve bir IP sözde başlığının hata kontrolü için kullanılmaktadır.

**Urgent Pointer:** URG bayrağı ayarlanmışsa, bu 16 bitlik alan, son acil veri baytını gösteren sıra numarasından bir ofsettir.

**TCP Options:** Bu alanın uzunluğu _Data Offset_ tarafından belirlenir. TCP aktarımına dair seçenekleri ifade eder. Seçenek numarası atamaları IANA tarafından sağlanır. Veri aktarımına ait seçenekler kullanılarak verilerin aktarım yoları ifade edilir.

![](/assets/img/posts/1*5yyYm-pw05Bnm5ElfoY3og.png)

**Padding:** TCP başlık dolgusu olarak adlandırılır, 32 bitlik bir sınıra sahiptir. TCP başlığının belirtilen veri biti sınırında bitmesini ve verilerin istenilen bitten sonra başlamasını sağlamak için kullanılır. Dolgu kısmı tamamı ile sıfırlardan oluşur.

**TCP Data:** TCP tarafndan encapsüle edilmiş verileri ifade etmektedir.

Bu şekilde segmentlere ayrılmış veri, veri katarları halinde iletişim için kullanılır.

* * *

### TCP İletişimi

Daha öncesinde bahsettiğim bir cümle vardı ki ayni ile buraya yazıyorum:

> TCP protokolü bazı bayraklar içeren özel paketleri kullanarak, bilgisayarlar arasındaki iletişim kanalının kurulması, iletişimin başlatılması ve iletişimin sonlandırılması komutlarını yürütmektedir. Bu komutlar iletişimde kullanılan faz komutlar olarak adlandırılır.

Burada faz komutlar TCP iletişimine yön veren ve TCP trafiğini ağ içerisinde yönlendiren ağ durumlarıdır. Hangi durumda olduğumuz bu komutlara bağlı olarak alınır. Bu komutlar:

**LISTEN: (sunucu)** İstemci tarafından bir TCP bağlantı isteğinin beklenildiği durumdur.
**SYN-SENT:(istemci)** Karşı tarafa TCP bağlantısı isteği gönderildikten sonra karşı taraftan bağlantı isteğine cevap beklenilen durumdır.
**SYN-RECEIVED: (sunucu)** İstemci tarafından SYN bayrağı ile yapılan bağlantı isteğine sunucunun SYN-ACK bayrağı ile cevap vermesinden sonraki bekleme durumudur.
**ESTABLISHED:(sunucu ve istemci)** Bağlantı kurulduktan sonraki veri transferinin yapıldığı durumdur
**FIN-WAIT-1:(sunucu ve istemci)** Uzak TCP’den bir bağlantı sonlandırma talebi veya daha önce gönderilen bağlantı sonlandırma isteğinin bir onayı beklendiği durumdur.
**FIN-WAIT-2: (sunucu ve istemci)** Karşı taraftan TCP bağlantısının bitirilme isteğinin beklendiği durumdur.
**CLOSE-WAIT: (sunucu ve istemci)** Karşı taraftan TCP bağlantısının bitirilme isteği onayının beklendiği durumdur.
**CLOSING:(sunucu ve istemci)** Karşı tarafa bağlantının bitirilmesine dair bir ACK bayrağı gönderildikten sonra bağlantının bitmesini bekleme durumu
**LAST-ACK:(sunucu ve istemci)** Uzak TCP’ye daha önce gönderilen bağlantı sonlandırma isteğinin (bağlantı sonlandırma isteğinin bir bildirimini içerir) bir onayını beklendiği durumdur.
**TIME-WAIT:(sunucu ve istemci)** Uzak TCP’nin bağlantı sonlandırma isteğinin onayını aldığından emin olmak için yeterli sürenin geçmesi beklendiği durumdur.
**CLOSED:(sunucu ve istemci)** TCP bağlantısının tamamen bittiği durumdur.

Bu durumlar yardımı ile iletişim durumu gözlemlendirilir. Sunucu bu durumlara bakarak iletişime yön verir.

#### TCP Bağlantı Sağlama ve Bağlantı Sonlandırma

TCP bağlantısının sağlanması ise bazı bayraklara sahip paketlerin aktarımı ile mümkündür. TCP üzerinden iletişim yapılırken bir yol kullanılması gerekmektedir. Bu yol iki tarafın açık olduğu bir oturumdur. Bir istemci bir sunucuya bağlanmaya çalışmadan önce, sunucunun bağlantılara açılması için önce bir bağlantı noktasına bağlanması ve onu dinlemesi gerekir: buna pasif açık denir. Pasif açık bir kez kurulduğunda, bir müşteri üç yollu (veya 3 adımlı) el sıkışmayı kullanarak aktif bir açık başlatarak bir bağlantı kurabilir:

1.  **SYN** : Aktif açma, istemcinin sunucuya bir SYN göndermesi ile gerçekleştirilir. İstemci, segmentin sıra numarasını rastgele bir A değerine ayarlar.
2.  **SYN-ACK** : Yanıt olarak sunucu bir SYN-ACK ile yanıt verir. Onay numarası, alınan sıra numarasından bir fazlaya, yani A+1'e ayarlanır ve sunucunun paket için seçtiği sıra numarası, başka bir rasgele sayıdır, B.
3.  **ACK** : Son olarak, istemci sunucuya bir ACK gönderir. Sıra numarası, alınan alındı ​​değerine, yani A+1'e ayarlanır ve alındı ​​numarası, alınan sıra numarasından bir fazlaya, yani B+1'e ayarlanır.

![](/assets/img/posts/0*JiNf7WyhrtNJwO6j.png)

Adım 1 ve 2, bir yön için sıra numarasını belirler ve onaylar. Adım 2 ve 3, diğer yön için sıra numarasını belirler ve onaylar. Bu adımların tamamlanmasının ardından hem istemci hem de sunucu veri yanıtı ​​alıdı demektir ​​ve bu aşamadan sonra tam çift yönlü iletişim kurulur.

Bağlantı sonlandırma aşaması ise bağlantı kurulmasından biraz daha karmaşıktır. Bağlantının her iki tarafının bağımsız olarak sona erdiği dört yönlü bir el sıkışma kullanır. İki taraftan birisi, bağlantının yarısını durdurmak istediğinde, diğer ucun bir ACK ile onayladığı bir paket gönderir.

![](/assets/img/posts/0*A4WhqPOuwm0kIgZT.gif)

Ardından karşı taraf da bir FIN paketi iletir. Son olarak bağlantı sonlaracak taraf da bir ACK paketi göndererek bağlantı sonladırılır ve “Connection refused” mesajı çekirdek tarafından uygulamaya iletilir. Bazen ise 2\. ve 3\. adımlardaki ayrı ayrı gönderilen ACK ve FIN paketi tek bir paket üzerinden FIN&ACK şeklinde gönderilerek 3 adımda bağlantı sonlandırması yapılabilir. Bazı durumlarda ana bilgisayar bir bağlantıyı aktif olarak kapatırsa ve hala okunmamış gelen veriler mevcutsa, ana bilgisayar FIN yerine RST sinyalini (alınan verileri kaybederek) gönderir. Bu, bir TCP uygulamasının bir veri kaybı olduğunun farkında olmasını sağlar ve bağlantı yeniden kurulması için yine bağlantı kaybı mesajı uygulamaya iletilir ve iletişim sonlandırılır.

Burada temel sorun ise iletişim devam ederken verici bilgisayar ile alıcı bilgisayar arasında verinin kopmasıdır. Eğer alıcı bilgisayar bu veri kaybını yaşarsa bütün iletişim bitene kadar verici bilgisayar veri katarlarını soket üzerinden vermeye devam edecektir. İletişimi tek taraflı olarak bitiren taraf artık bağlantıya herhangi bir veri gönderemez, ancak diğer taraf gönderebilir; sonuç olarak bitiren taraf, diğer taraf da sonlandırana kadar verileri okumaya devam etmek zorunda kalır.

* * *

### UDP nedir ve TCP ile farkları nelerdir?

**UDP (User Datagram Protocol - Kullanıcı Veribloğu İletişim Kuralları)**, TCP/IP protokol takımında TCP’ye alternatif olarak oluşturulmuş aktarım katmanı protokolüdür. Aktarım katmanındaki iki aktarım katmanı protokolünden birisidir ve OSI Modeldeki ulaşım katmanındaki 4 protokolden birisidir. UDP’de veriler bağlantı kurulmadan yollanır. UDP ile bilgisayar uygulamaları, bir IP paketi ile internetteki diğer bir cihaza karşılıklı el sıkışma olmaksızın paket gönderebilir.

UDP, 1980 yılında David P. Reed tarafından tasarlandı ve resmi olarak RFC 768'de tanımlandı. Temel tasarlanma amacı ise basit sorgu-yanıt sistemlerinin internet üzerinde oluşturduğu paket yoğunlunu önlemektir. Bunun temel sebebi TCP ile gerek iletişim sağlanmasını gerekse iletişimin sonlandırılması için 7 adımda ( bağlantı sonlandırma esnasında FIN&ACK aynı anda gönderildi durumlarda 5 adımdaa) el sıkışmalı bir iletişim varken UDP’de bu durum yoktur ve bütün sorgu yanıt işlemi 2 paketle sağlanabilir ve bu da özellikle sorgu-yanıt bazlı işlemleri hızlandırır.

UDP, minimum protokol mekanizmasına sahip basit bir bağlantısız iletişim modeline sahiptir. UDP kontrol mekanizmaları olarak sadece veri bütünlüğü için sağlama toplamları ve datagram kaynağındaki ve hedefindeki farklı işlevleri adreslemek için bağlantı noktası numaraları sağlar. İletişimde kullanılan bayraklar el sıkışma diyalogları yoktur ve bu nedenle, kullanıcının programını temel ağın herhangi bir güvenilmezliğine maruz bırakır. Paketlere dair teslimat, sipariş veya iletişim koruma garantisi yoktur. UDP, hata denetimi ve düzeltmenin gerekli olmadığı veya uygulamada yapıldığı amaçlar için uygundur; UDP, protokol yığınında bu tür işlemlerin ek yükünü önler.

UDP’yi kullanan protokollerden bazıları DNS, TFTP, ve SNMP protokolleridir. Bunlarda sorgu yanıt yapısı olduğu için veya kontrole gerek kalmadan tek yönlü komut aktarımı olduğu için UDP tercih edilmiştir. Bunlara ek olarak NTP için ağ zamanlama sorguları, IP tünelleme, uzaktan prosedür çağrısı ve Ağ Dosya Sistemi (NAS) için de uygun altyapı UDP uygun paketler ile sağlanır. Kamuya açık ağlarda yani geniş alan ağlarında (WAN) ses ve görüntü aktarımı gibi gerçek zamanlı veri aktarımlarında, IPTV backendlerinde de UDP kullanılabilir.

Daha öncesinde söylediğim gibi paket yapısı çok basittir. TCP’deki gibi **Source Port, Destination Port, Length, Checksum** içeren bir başlık ve bu başlığa bağlı bir veri paketi içerir.

Temel fark tam da burada başlamaktadır. UDP ile TCP arasında paket boyutu farkı ciddi manada vardır. Bir diğer konu da bahsettiğim gibi TCP ikili el sıkışma kullanarak verileri aktaracağı bir kanal açar. Bu kanal bir veri aktarım oturumudur. Oturum aktarım bitene kadar durur ve aktarım bitince sonlandırılır. Ancak UDP’de oturum umursanmaksızın veri gönderilir. Bu da portlar için güvenlik zafiyetine sebep olabilecek bir husustur. UDP sırf bu yüzden **Unsecured Datagram Protocol (Güvensiz Veriblogu Protokolü)** olarak da adlandırılmaktadır.

Bir diğer konu ise bu oturum mantığı ile ilişkilidir. TCP’de, bir oturumu çalışan bir işletim sistemi işlemine eşleyen bir tablo bulunur ver her bir girdi tabloda bir alan tahsis eder. TCP paketleri bir oturum tanımlayıcısı içermediğinden, her iki uç nokta da istemcinin adresini ve bağlantı noktasını kullanarak oturumu tanımlar. Bu tablo RAM bellekte bulunur. Bu yüzden aşırı ağır yükler altında kalan veya tam olarak bitirilmemiş onlarca oturuma sahip bir istemcinin kaynakları tükenebilir ve diğer uygulamalardan bile yeni TCP bağlantıları kuramaz hale gelebilir. Ancak UDP’de böyle bir durum sözkonusu dahi değildir. Ne oturum için ne de paket aktarım sıralamasının optimizasyonu için veri arabellekte tutulmaz. Hatta UDP’de alıcıya iki mesaj gönderilirse, bunların hangi sırayla geleceği garanti edilemez. Bu ağ üzerinde bir yoğunluk oluşturmak için (DDoS gibi) saldırılarda kullanılan bir şey olsa dahi sunucu belleğini işgal eden sonlanmamış oturumlar sorunu UDP’de yoktur.

Akış konusundaki temel fark ise UDP’nin bir avantajı olarak karşımıza çıkmaktadır. TCP’de veri bir bayt akışı olarak okunur, sinyal mesajı (segment) sınırlarına hiçbir ayırt edici gösterge iletilmez. Ayrıca oturum bazlı sistem sebebi ile her bir uçbirim için ayrı ayrı iletişim açma zorunluluğu doğmaktadır. Ancak UDP’de multicast yayın yapabilirsiniz. Bu şu demektir, UDP’de tek bir datagram paketinin bir grup aboneye tekrarlanmadan otomatik olarak yönlendirilebildiği çok noktaya yayın çalışma modu desteği vardır.

### Sonuç

Bu yazımda TCP ve UDP iletişimin nasıl yapıldığını ve veri protokolündeki paket yapısını göstermiş oldum.

### Kaynakça:
* [**rfc675**](https://datatracker.ietf.org/doc/html/rfc675)
* [**rfc793**](https://datatracker.ietf.org/doc/html/rfc793)
* [**RFC - STD7**](https://tools.ietf.org/html/std7)
* [**Transmission Control Protocol - Wikipedia**](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [**User Datagram Protocol - Wikipedia**](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [**UDP - Vikipedi**](https://tr.wikipedia.org/wiki/UDP)
* [**TCP - Vikipedi**](https://tr.wikipedia.org/wiki/TCP)
* [**TCP/IP Protocol Suite Guide books**](https://dl.acm.org/doi/abs/10.5555/572565)
* [http://justpain.com/eBooks/Networking/TCP-IP/TCP-IP%20Illustrated%20-%20Vol%201.pdf](http://justpain.com/eBooks/Networking/TCP-IP/TCP-IP%20Illustrated%20-%20Vol%201.pdf)
