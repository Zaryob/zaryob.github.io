---
layout: post
title: "Uçtan Uca Okunuyoruz"
date: 2021-09-09 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-09-uctan.jpg"
image_hash: "ed26d40fec190cecb3219f77522dfb69"
---

“Gün geçmiyor kiii” diye başlayan haber başlıklarından yoruldum. Evet abi gün geçmiyor ki başka bir WhatsApp skandalı çıkmasın veya internet servisinin birisinin yaptığı katakullileri ortaya dökülmesin ([bkz: katakulli nedir](https://tr.wiktionary.org/wiki/katakulli))

Olaya basit bir skandal gözü ile bakmak bence abes. Çünkü kullanıcılarına bir gizlilik sözleşmesi güncellemesi dayatıp,

> **\-kanka sizin veriler varya**
>
> **— eee**
>
> **\-sattık biz onu**

diyen ve itirazlar yükselince başta bu gizlilik sözleşmesi güncellemesini geri çekip sonra “ya kanka biz okumuyoruz mesajlarını, sadece hizmetlerimizi geliştirmek için ufak bir güncelleme sen yanlış anladın muhabbeti” diyen adamlardan beklenir bir şeydi.

Neyse işte ben de olaya farklı açılardan bir bakış yapacağım; başta şu olayı bir hatırlayalım (eğer ileri bir tarihte okuyacaksak ihtiyacımız var) sonra uçtan uca şifrelemeye bir teknik açıdan bakalım, durumun etik olup olmadığına sosyolojik açıdan bakalım ve tabi ki kullanan birisi olarak kendi açımdan bakayım.

Arka Plan: Olayın Açığa Çıkışı
==============================

Her şey New York merkezli kar gütmeyen bir araştırma kuruluşu olan ProPublica haber sitesinin ortaya koyduğu bir rapordan kaynaklandı. İşin aslı şu, WhatsApp’ın üst kuruluşu olan Facebook, bizim WhatsApp mesajlarımızı kendi yapay zeka motorunda kullanıyor, üstüne üstlük binden fazla kişiden oluşan bir ekibe de bütün konuşmaları “güvenlik amacıyla” okutturuyorlar. Sadece mesajları okumakla kalmayan bu işlemler attığımız ses dosyalarının yazıya geçirilmesi, fotoğraflarımızın yorumlanması gibi diğer bazı işlemleri de içeriyor. Ayrıca bu işlem uçtan uca şifrelemeli sohbetlerimize de yapılıyor.

WhatsApp’ın uçtan uca şifreleme ile alakalı kendi uygulamasındaki mesaj kutusunda ayni ile şu yazıyor.

_“Bu sohbette gönderdiğiniz mesajlar ve yaptığınız aramalar, uçtan uca şifrelemeyle korunmaktadır. Bu sohbetin dışında bulunan hiç kimse, mesaj ve aramalarınızı okuyamaz ve dinleyemez.”_

Birinci çelişki burada, bunu garanti ederek sunduğun bir uygulama var. Bunun etik tarafını en sonda bir daha sorgulayacağım ama hepsini geçtim. Bunu garanti etmese bile bir hizmet sunucusu olarak WhatsApp’ın bizim mesajlarımızı okuma hakkı ne? Pek çok kişi bunu “sanane” demeye çalıştığım bir cümle olarak algılayacak ama olayın gerçekten bir platform boyutu var. Sormak istediğim aslında şu **herhangi bir çevrimiçi platform kurarak bize hizmet veren kuruluşlar bunları kullanabilme hakkına sahip mi?**

Şimdi burada iki önemli kıstas var.

İlki ülkelerin kendini koruma mekanizması, bu mekanizmaya göre ülkeler herhangi bir suçun işlenmesi halinde teknik takip talebiyle zanlıların kullandığı uygulamalara başvurup “teoride” bütün konuşmalarının dökümünü almalıdır. Aynı süreç aslında telefon konuşmaları için de geçerli. Siz eğer bir suça karışırsanız operatörlerden kullanıcılara ait konuşma ve SMS dökümlerini devlet talep eder ve şirketler devlete karşı bu noktada şeffaf olmak zorundadır. WhatsApp’tan yapılan ilk açıklamada kendilerini tam da bunu kullanarak savundular:

> Biz kullanıcılarımızın verilerini herhangi bir suça karışmışlığın bulunması durumunda mahkemelere teslim etmek üzere açıp okuyabiliriz.

İkinci kıstas kullanıcı tarafında. Eğer birisi, **hiçbir mesajın özel olmadığını** belirten bir Hizmet Şartları anlaşmasını kabul ettiyse **ve yöneticiler tacizden veya yasa dışı faaliyette bulunulduğundan** veya benzer bir şeyden **şüphelenirlerse bütün mesajlarını okuyabilirse,** o zaman tamamen bu durum yasal bir durum olur.

Şimdi WhatsApp’ı kabul etmek için okuduğumuz ve **onayladığımız** WhatsApp Hizmet Şartlarına bir bakış atalım isterseniz. Öncelikle bizden topladıkları verilere dair

![](https://miro.medium.com/max/20000/1*GbCveLny21zktZDCRwqUWA.png)

Yani bu şu demek, bazı bilgilerimiz toplanıyor. Peki nedir bu bilgiler:

*   Kullanıcı adı, profilimiz ve buna dair bütün bilgiler
*   Cihazımızın durum bilgisi (konum, arama, SMS doğrulaması için SMS ve MMS hizmetlerine erişimimiz)
*   Rehberimiz
*   Eğer Whatsapp üzerinden bir ödeme işlemi veya para aktarımı yaptıysak satın alma verileri
*   Mesajlarımız

Şimdi mesajlarımızı nasıl tutuyorlar derseniz iki şekilde, ilki 30 gün gönderilmek üzere beklerken sunucularda tutuluyor, 30. günün sonunda iletilmeyen mesajlar siliniyor, ikincisi ise medyaların optimize edilmesi için farklı sohbetlere aynı medyayı gönderirken veribandı işgal etmemiz adına medyalar şifreli biçimde sunucularda tutuluyor.

Peki nasıl kullanılıyor. Bunun iki boyutu var (2 sayısına çok kafayı taktım bugün). Verilerimizin ilk kullanım alanı kendi hizmetlerini güncel tutmak ve kullanıcılara dair tanımlama bilgileri (cihaz, konum vs.) kaydederek servisi bu verilerle beslemek ve hizmetlerini iyileştirmek. Bu amaçla evet verilerimizi Facebook servisine **entegre ediyor,** çünkü bunu biz **kabul ettik.** İkincisi ise WhatsApp’ın kendini savunduğu alan. Hizmet şartlarında şunlar yazmakta.

![](https://miro.medium.com/max/20000/1*-fr_MGT57XnTYqAIehWs1Q.png)

Yani biz topladığımız bilgilerin tamamını (mesajlarınızdan, konumunuza, cihazınıza hatta rehber listenize kadar) WhatsApp **yasal olarak:**

*   yasal süreçler için alıp okuyabiliriz
*   dolandırıcılığa ve yasa dışı işlere karşı bu bilgilerinizi okuyup önlem almak için kullanabiliriz
*   cinayetleri önlemek için bu bilgilerinizi inceleyip değerlendirebiliriz
*   kendi bekamız olan fikri mülkiyetimizi korumak için kullanabiliriz

ve **hepsini paylaşabiliriz** dedi. Ayrıca kullanıcılarımızın güvenliğini artırmak amacıyla topladığımız her bilgiyi kullanırız diyor. Yasal olarak yaptıkları gayet de doğal, **çünkü bunlara siz izin verdiniz**.

Teknik Perspektif: Peer-To-Peer, Uçtan Uca Şifreleme (**E2EE**) ve WhatsApp
===========================================================================

Peer-to-Peer, eşler arasında mesaj gönderme demektir. Aradaki iletişimden bir üçüncü sunucu sorumlu değildir. Sadece alıcı ve verici arasında mesajlaşma yapılır. **Bu mesajlaşma şifrelenmiş bir mesajlaşma değilse bu mesajlaşma okunabilir**.

Uçtan uca şifreleme ise iletişimin uç noktalarındaki alıcılar arasında yapılan haberleşmede sadece haberleşen ikilinin okuyabileceği formda mesajlaşmaktır. Mesajlar başka sunucular üzerinden geçebilir, mesajlaşmada kullanılan şifreli anahtarlar etrafta gezebilir ama mesajlar şifrelidir.

Bunu niye anlatıyorum, çünkü bir kavram karmaşası var. WhatsApp mesajlaşmalarında kişiler arası haberleşmede uçtan uca şifreleme bulunmakta. Bu şu demek, başa dönelim, bizim mesajlarımız bazı sunucular üzerinden geçiyor, bu sunucularda iletilene kadar tutuluyor (iletilmezse 30 gün tutuluyor) ve bize gelince biz bunu okuyoruz. Peki iletişimi şifreli bir şekilde yaparken, şifrelerken kullandığımız şifreleme anahtarımız nerede? WhatsApp kullanıcı sözleşmesinin uçtan uca şifreleme ile alakalı yazısında diyor ki

> Mesajlar cihazınızdan çıkmadan önce şifreleme kilidiyle güvence altına alınır ve bu kilidin anahtarı sadece alıcıda bulunur.

Şimdi bir saniye.

Yasal olarak bizim her şeyimiz okunabiliyor. Teknik açıdan uçtan uca kullanınca sunucudan geçen mesajlar şifreli. Şifreleme anahtarı da **_sadece_** alıcıda bulunuyor. Peki o zaman nasıl verilerimiz okunabiliyor.

İşte orada güzel bir oyun var. Bizim şifre anahtarımız da sunucular üzerinden gönderiliyor ve bu anahtarlar da teknik açıdan mesaj sayılıyor. Yanı WhatsApp bunu da tutabiliyor. Ancak buradaki yasal olmayan tek sorun şu **bizim şifreli mesajlarımızın da okunabileceğini bildirmeleri belirtilmeli** idi. Ancak burada da olayın etik tarafı sözkonusu oluyor

Etik Tartışması
===============

Aslında şu an bütün dünyada her konu ile alakalı tartışılan bir şey etik. Biyolojik etik, sosyolojik etik, ekonomik etik... Kısacası doğrudur ne yanlıştır üzerine ilgilenen araştırma dalına etik diyoruz.

Şimdi bir de yasalar var elimizde. Yasalar bir ülkenin iç işleyişlerinin düzenlenmesi için ortaya atılmış kurallar bütünüdür. Bütün insanlar ve insanların kurduğu sistemler (şirketler, topluluklar, kulüpler, dernekler) yasalara tabidir. Bütün toplum yasalara tabidir.

Şimdi WhatsApp’ın bu politikası yasal mıdır sorusunun cevabı evet yasaldır. Çünkü bu servisi sunarken ortaya koyduğu **bir şartname var** ve biz bu **şartnameyi kabul ettik**.

Peki etik midir? Bu soru çok yönlü bir soru. Hiçbir insan özel mesajlarının Facebook’ta çalışan 3–5 tanımadık kişi tarafından açılıp okunmasını açıkçası asla istemez. Veya benden alınan verilerin bana reklam sunmak amacıyla verilmesini ben şahsi olarak istemiyorum. Ancak bu iki durum özelinde WhatsApp etik olmayan bir şey yapıyor diyemiyorum. Çünkü kabul ettik. Bu servisi kullanmak için bu şartları kabul ettik, bu bir kar zarar dengesi olarak görülebilir.

Buradaki katakulli şu: bize sözleşmeyi okutup imzalatırken gri alanlar bırakılmış. Yani direk Hizmet Sözleşmesi’nden bir örnek

![](https://miro.medium.com/max/20000/1*s7_1LL_VPE-OXWRuIYZQMw.png)

İşte bunlara gri alan diyoruz. Hani biz yapmayız ama yapabiliriz de demek gri alandır.

Bu gri alanları bütün şirketler kullanır, bütün devletler kullanır, bütün insanlar kullanır. Çünkü bu tip gri alanlar bilgisayar dünyası için bir çeşit beyaz yalan olarak görülür. Ve bu alanlar aslında şirketlerin bazı doğru olmayan işlemlerini yapmak için yasal dayanaklarını oluşturur.

Kişisel Tutumum
===============

Şahsi olarak WhatsApp’ın verilerimi kapalı kapılar ardında işleyip, analiz etmesinden ve buna göre bazı tutumlarda bulunmasından oldukça rahatsızım. Ancak yasal mı derseniz, “maalesef ki evet yasal” çünkü bunu biz kabul ettik. Peki etik mi derseniz şunu diyeceğim:

*   Bir suçun işlenmesini engellemek veya yargı sürecinde olayların açığa çıkarılması için yapılan işlemler **bence** etik
*   Ancak kendi şirket politikaları için kapalı bir şekilde bu verileri kullanmaları **bence** etik değil

Ancak **bence** kullandıkları verilerin işlenmesinde daha şeffaf bir operasyon ortaya koysalar evet bir yere kadar kabul edebilirdim.

Sonsöz:
=======

Bazıları dinleniyoruz hadi Telegram’a geçelim hadi bip’e göçelim demeye başladı yine. Haklısınız dinleniyoruz, izleniyoruz, biliniyoruz. Ancak her iki servisi de kullanan birisi olarak diyorum ki her sistemde bu geçerli. Her servis kendisi için bu verileri tutuyor, kullanıyor ve bazen satıyor bile.

Bizim yapmamız gereken bence, kullandığımız her servis hakkında bir bilince sahip olmak ve seçimlerimizi ona göre yapmak.

Ayrıca şu ünlü Kurtlar Vadisi sözünü de internette dolaşırken asla unutmamalıyız

> İki Kişinin Bildiği Sır Sır Değildir

Kaynak:
=======

[WhatsApp Legal Info](https://www.whatsapp.com/legal/)
[Privacy Policy](https://www.whatsapp.com/legal/privacy-policy)
[WhatsApp Help Center - About end-to-end encryption](https://faq.whatsapp.com/general/security-and-privacy/end-to-end-encryption)

En En Son Söz:
==============

Başlığa ilham kaynağım olan tweet.

![](https://miro.medium.com/max/20000/1*t4VIBsMp__8YmBIjyndx-w.png)
