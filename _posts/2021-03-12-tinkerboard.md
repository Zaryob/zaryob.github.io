---
layout: post
title: "Asus Tinkerboard Sağlam geldi"
date: 2021-03-12 21:55:02 +0300
categories: [genel, programlama, pi, elektronik]
image: "2021-03-12-tinkerboard.jpg"
image_hash: "051034573b9158da750e33b22bcea80f"
---

Acaba Tinkerboard 2 gerçek manada Raspberry Pi’ye rakip mi? İşte ilk izlenimlerim ve detaylar.

![Kutu açılışı](/assets/img/posts/2021-03-12-tinker_1.jpeg)

Asus 2020 yılının Kasım ayında bir duyuruda bulundu. Bu duyuru yeni Asus Tinkerboard modelini tanıtıyordu.

İlkin üretim kartın fotoğraflarında Raspberry Pi serisinde olduğu gibi 40 pin GPIO; DSI ve CSI portları bulunmaktaydı. Ancak geriye kalan kısmı büyük çoğunlukla Raspberry Pi’den çok farklı.

Öncelikle dikkatimi çeken detay ethernet girisi Raspberry Pi’deki konumun tam tersinde. Yani eski Raspberry Pi soğutma kasalarını buna uydurmak için bayaa bir uğraşmamız gerekecek. Bir diğer yandan Raspberry Pi 4 gibi micro HDMI kullanmak yerine tam boy 4K destekli bir HDMI çıkışı bulunuyor. Bununla beraber 4 tane USB 3.1 portundan type C formunda olan ayrıca display output için de kullanılabilmekte. Yani kartta hala 4K olan 2 tane ekran desteği var.

Asus Tinkerboard’dan ve diğer tek kart bilgisayarlardan alışık olduğumuz USB Type B güç beslemesi yerini 5.5/2.5 generic bir power adaptör almış. Bu tinkerboard ailesi için yeni bir gelişme değil. Bunun birinci sebebi bu kartın performans modunda 65 Watt güç tüketmesi benzer şekilde Tinkerboard Edge ailesi de 50 Watt’a yakın güç tüketiyordu. Bunda da benzeri bir durum var. Ancak yine de GPIO portları üzerinden 5V 3A ile besleme mümkün. Her ne kadar düşük voltaj uyarıları alsak da.

Raspberry Pi gibi bu kart da ARM işlemci üzerine kurulmuş yerel aygıtlardan oluşan bir kart. Rockpi’den alışık olduğumuz 6 çekirdekli RK3399 işlemci bu kartın kalbinde yer almakta. Bu 6 çekirdekten 4'ü Cortex-A53 mimaride 1.5 GHz hızına sahipken, 2'si ise Cortex-A72 mimaride 2.0 Ghz hızına sahip. Ve bu işlemcide ileride vereceğim benchmark’lardan anlayacağınız kadarı ile delicesine bir hız var. Bu işlemciye ek olarak 1 GB Mali T860 grafik işlemci bulunmakta. Bu grafik işlemcinin OpenGL ES 3.0/3.1, OpenVG 1.1, OpenCL desteği bulunmakta.
Görüntüden anladığınız kadarı ile kartta Tinkerboard Edge kartlardan alışık olduğumuz PCI-E Wifi/Bluetooth modülü bulunmakta. Bluetooth 5 ve Wifi 5 her ne kadar mütiş hızlar vermese de karta gömülü olan wifi modüllerinden kat ve kat daha hızlı olduğunu hissettiriyor.
Bu kartta SD Kart üzerinden boot olabilmekte, aynı Raspberry Pi gibi. Tinkerboard 2'de olmasa da ileride çıkacak Tinkerboard 2 S modelinde emmc desteği bulunmakta. Bütün bunlara ek olarak ek fan ve RTC modülü de kartta bulunmakta.
Bir paket olarak Tinkerboard 2'de sağlanan özellikler kağıt üzerinde oldukça güzel durmakta. 

Şimdi genel olarak bu kartların özelliklerine bakalım.

# Özellik Tablosu

![Özellik tablosu](/assets/img/posts/2021-03-12-tinker_2.png)

# Fiyat

Bu kartın EMMC bulunmayan ve 2GB RAM’e sahip modelini satın aldım. Samm Market üzerinde kart satın aldığım 18 Mart 2021 tarihinde 673 lira + KDV ile satışa çıkarıldı. Yani 763 tl gibi bir fiyata. Bunun yurtdışındaki karşılığının yaklaşık olarak 75–80 dolar arasında olduğunu tahmin ediyorum çünkü yurtdışında başka bir sitede bu yazının yazıldığı 23 Mart 2021 tarihinde satışına rastlamadım. Halihazırda beklenilen 70–80 dolar arasındaki fiyata yakın bir fyat bizi karşılıyor. Bu da yaklaşık olarak Raspberry Pi 4 8GB modeli kadar bir fiyata denk.

# İlk İzlenim

Kart beraberinde kendi heatsink’i ile gelmekte. Elimdeki 2GB RAM’e sahip modeli var.
Bu kartı heatsink olmadan çalıştırmak korkutucu durduğu için direk heatsink’i monte ederek çalıştırdım. İşletim sistemi olarakoldstable Debian 9 ve Android 10 olmak üzere iki tane imaj bulunmakta. Şahsen bu durum beni şaşırttı. Gelecek aylarda Debian 9 oldoldstable olarak (yani çok yakında ana depolardan kaldırılacak ve arşiv depolarına taşınacak) işaretlenecekken Asus’un bu kart için Debian 10 çıkartmaması şaşırtıcı. Görece daha güncel duran Android 10'u ise henüz deneme fırsatı bulamadım.
Debian 9 tabanlı TinkerOS’la gelen tinker-power-manager ve tinker-config yazılımları pek çok konuda optimizasyonu kolaylaştırmakta. Ayrıca işletim sisteminin donanım bazlı GPU hızlandırması sayesinde 2GB RAM’e rağmen Chromium veya VLC gibi grafik işlemci işlemciye yüklenen uygulamalar oldukça yumuşak ve optimize çalışmakta.
Bununla beraber Debian 9 beni genel olarak memnun etti. Bazı sistem parçacıkları aşırı eski ve kopuk bazı paketlere sahip olsa bile yine de sunucu kurmak için fazlası ile yeterli. Denemek amacı ile stockfish destekli PHP-Chess sunucusu kurdum ve Apache 2 kurmayı denedim. Stockfish bazında hayli güzel sonuçlar aldım.
Çeşitli derlemeler yaptım. Derlemeler esnasında sıcaklık sadece heatsink takılı iken 60–65 derecede kalmakta. Ancak 70 dereceye ulaştığında CPU hızları yavaşlıyor ve dolaylı olarak da işlem hızları yavaşlıyor. Bu şekilde kartın kendini yakmasına izin verilmiyor. Aslında kendi heatsink’i haricinde ek bir soğutucuya gerek kalmasa bile ben heatsink’in üzerine bir fan takma gereği duydum.
Kartın 4 farklı güç tüketim modu bulunmakta ve bunlar arasında yeniden başlatmaya gerek kalmadan geçiş imkanı bulunmakta. auto , powersave , manual , performance modları arasındaki bu geçiş tinker-power-monitor ismindeki bir araç kiti ile yapılabilmekte.
tinker-config ise Raspberry Pi kullananların yakından tanıdığı raspi-config’i andırmakta. Tek farkı VNC arayüzünü etkinleştirince tigervnc kurması olabilir 😂
Genel olarak kart oldukça hoşuma gitti ve çoğu şeyimi Raspberry Pi’den Tinkerboard2 üzerine taşıdım. Ancak tek korkum bu kartın Asus tarafından hiç çıkmamışcasına bir tepki görmesi. Umarım bu kart için güncelleştirmeler, yeni imajlar çıkar ve DietPI gibi bazı işletim sistemi üreticileri de bu karta yeterli desteği verebilirler.

# Benchmarklar

Bu aşamada sysbench ve GeeXLabkullandım. Bunlarla beraber derleme test için binutils derledim ve ne kadar sürdüğünü paylaştım.

Elimde sadece Raspberry Pi 4 ve Tinkerboard 2 bulunduğu için testlerde bu kartları kullandım. Ayrıca Tinkerboard’ın performans modunu test etmek için hem auto hem de performance modunda bu testleri yaptım.

## CPU Testleri

İlk olarak tek çekirdek işlem kaabiliyetlerini karşılaştıralım. (Bu testlerde az olan daha iyidir.)

![bench1](/assets/img/posts/2021-03-12-tinker_3.png)

Tek çekirdekte 10000 işlem RPi4'de 92.7 saniye, TB2 auto modda 5.3 saniye, TB2 performans modda 4.9 saniye sürdü

Şimdi tüm çekirdekleri kullanarak CPU işlem kaabiliyetlerini karşılaştıralım.

![bench2](/assets/img/posts/2021-03-12-tinker_4.png)


Full Yükte 10000 işlem RPi4'de 23.3 saniye, TB2 auto modda 1.78 saniye, TB2 performans modda 1.53 saniye sürdü

Test sonuçları Tinkerboard’ın Asus tarafından sağlanan verileri ile nerdeyse uyuşuyor. Şimdi binutils derlemesi yaparak 1 SBU süresini test edelim.

![bench3](/assets/img/posts/2021-03-12-tinker_5.png)

1 SBU RPi4'de 589.5 saniye, TB2 auto modda 212.6 saniye, TB2 performans modda 200.1 saniye sürdü

## GPU Testleri

GeeXLab ile yaptığım testlerden aradaki farkı rahatlıkla görebiliriz

![bench4](/assets/img/posts/2021-03-12-tinker_6.png)

Raspberry Pi 4'de 1 GB VRAM GPU ile 23 fps alınırken, TB2 auto modda 41, TB2 performans modda 44 fps alındı.

Görüldüğü gibi GPU bakımından da Tinkerboard baya bir önde görünmekte.

## USB Portlarının Hızı

gnome-disk-utility ile WD my passport diskinde yaptığım testte:

![bench5](/assets/img/posts/2021-03-12-tinker_7.png)

Tinkerboardda 3.2 Gen 1 Type C portundaki ortalama yazma hızı 233.4 MB/s, okuma hızı ise 367.6 MB/s


![bench6](/assets/img/posts/2021-03-12-tinker_8.png)

Raspberry Pi4'de ise 3.1 portundaki ortalama yazma hızı 277.9 MB/s, okuma hızı ise 340.0 MB/s
Grafiklerde okuma hızı Tinkerboard 2'de her ne kadar daha yüksek olsa da yazma hızında düşüklük görülmekte. Bununla beraber grafikten de anlaşılabileceği gibi diskin yazma ve okuması esnasındaki ortalama erişim süresinde Raspberry Pi 4 açık ara önde. Ayrıca yazma ve okuma esnasındaki sağlık istastistikleri de okumadaki kesinti ve genel test dağılımının Raspberry Pi 4 de daha iyi olduğu da ortada.


## SD Kart Testi
Bu testte dd komutu /dev/zero ile 20MB’lık 5 blok yazması denendi. Bu testte Samsung Evo Plus 64 GB kart üzerine ayrı ayrı kurulan TinkerOS ve Raspberry Pi OS kullanıldı.

![bench7](/assets/img/posts/2021-03-12-tinker_9.png)

Raspberry Pi 4'de 234 MB/sn olan okuma testi, TB2'de 249 MB/sn olarak test edildi.

![bench8](/assets/img/posts/2021-03-12-tinker_10.png)

Raspberry Pi 4'de 181 MB/sn olan yazma testi, TB2'de 173 MB/sn olarak test edildi.


# Son Görüşlerim

Yazılım desteği ve uzun zamanlı olacak şekilde Asus Tinkerboard’a ait çekirdek kodlar gerek Android 11 ve halefi olacak Android 12'ye port edilirse, ayrıca Debian Buster ve Bullseye için Linux kernel kodları kernel 5.x e adapte edilirse Tinkerboard’ın kendisine daha çok talep bulacağını düşünmekteyim. Ancak bu hali ile bile uzun süre kullanmaya değer bir kart ki pek çok işimi de bu sisteme geçirdiğimi söylemeliyim.
Bunlara ek olarak benchmarkların da gösterdiği gibi kart gerçek manada ağırlığını hissettirecek ve Raspberry Foundation gibi veya RockPi gibi pek çok kart üreticisi bunun da üstünde kartlar üretmesi için teşvik edecektir diye düşünüyorum.
Ancak, Tinker Board’un gelişmiş işlem gücü, daha iyi USB ve GPU performansı ve en önemlisi Raspberry Pi ile kod ve donanım uyumluluğu, yeni bir kullanıcı alanı yaratma potansiyeli var. Pek çok Raspberry uyumlu modül Tinkerboard’da da çalışabilmekte ve aynı dts dosyaları da bu iki kartta da kullanılabilmekte. Tinkerboard gömülü UEFI desteği sayesinde generic aarch64 çekirdeklerine yapılacak RK3399 kaynaklarının eklenmesi ile gömülü linux geliştirmesinin mümkün olduğu görüşündeyim.

Hatta her ne kadar denemesem de Android 10 imajı ile belki de Tinkerboard 2'nin mobil gaming için kullanılabileceği konusunda bile düşünmekteyim.


Okuduğunuz için çok teşekkür ederim. Nice güzel günlere