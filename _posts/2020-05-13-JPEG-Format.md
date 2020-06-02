---
layout: post
title: "Dijital Fotoğrafçılık ve JPEG Formatı"
date: 2020-03-19 14:03:35 +0530
icon: product-hunt
group: programlama
image: raspberry-hqcamera.jpg
imagehash: 6e90a576a1765a73948dc32b4fbb4580
---

Fotoğraf, dış dünyadaki bir görüntünün odaklanarak karanlık odacık içerisine düşürülmesi,
 düşürülen bu görüntünün ışığa duyarlı film, cam veya sensörler üzerinden okunması yoluyla
elde edilir. İbnül Heysem'in karanlık oda deneyleriyle başlayıp Sir John F. W. Herschel
tarafından ışığa duyarlı filmlerle görüntü kaydedilmesine kadar uzanan, sonrasında 20. yüzyıl
kimya ve optik gelişmeleri ile üretilen analog kameralarla devam eden fotoğrafçılık
1984 yılında üretilen ilk dijital görüntü algılama sensörü ile dijital ortamda yeni bir
kapı açtı.

Sayısal görüntü algılama sensörleri ile alınan verinin işlenmesi ve kaydedilmesi
daha da bir önem arz eder hale geldi. Sonuçta RAW veri olarak adlandırılan ham veri hem
fazla alan kaplamakta, hem de gereksiz derecede şişkin olmaktaydı. Bu durum elektronik
camiası içerisinde farklı algoritmalar geliştirilmesi zorunluluğunu doğurdu. Bu algoritmalar
sayısal görüntü biçimleri olarak adlandırıldı. Kayıplı veya kayıpsız sıkıştırma algoritmalarıyla
bazı kurallar ve biçimlendirmeler belirlendi.

Temelde Yatan Mantık
--------------------

Lisede iken öğretmenlerin prizma kullanarak yaptıkları deneyleri hatırlarsınız.
Hatırlarsanız bu deneylerde beyaz ışık `spektrum` adı verilen renkler kuşağına bölünmekte idi.
Beyaz ışık temelde üç bileşenden oluşmaktadır: kırmızı, yeşil ve mavi. Sayısal fotoğrafçılık
ışığın bu temel prensiplerinden yararlanır. Sayısal görüntü algılama sensörleri (CCD veya COD sensörler)
görüntüyü algılar. Algılanan görüntü her bir sensör noktası üzerinde farklı bir renk noktası oluşturur.
Yani bir nevi görüntü parçalara bölünür. Bu renk noktalarına piksel denilir. Her bir piksel de ışığın
**R-G-B** kanallarından oluşur. *R* pikseldeki kırmızı renk kanalını, *G* yeşil renk kanalını
*B* mavi renk kanalını oluşturur. Bir fotoğrafın kalitesini sensörün kalitesi, optik lensin
kalitesi ve lensin ışığı toplaması verimliliği, ışık miktarı gibi farklı parametreler belirler.
Ancak en kaliteli görüntünün bile saklanması gerekir. Depolama aygıtları geçmişten günümüze
çok yol katetse bile hala görüntünün saklanması için ham verinin kullanılması mantıksızdır.
Şöyle düşünün, sıkıştırılmış bir veri derli toplu bir oda gibiyken, ham veri daha çok
sevgilisinden yeni ayrılmış bir kızın odası gibidir. :joy: . Ayrıca ham veri aktarım ve depolanma
esnasında daha fazla kayıp ve bozulma riski ile karşı karşıya kalır. Bu sebeple görüntülerin
en uygun ve mümkün olduğunca kayıpsız olarak sıkıştırması çok önemlidir.

JPEG Nedir?
-----------

Piksellerin sıkıştırılması ve depolanmasını kolaylaştırılmak amacıyla **J**oint **P**hotographic
**E**xperts **G**roup (*Birleşik Fotoğraf Uzmanları Grubu*) tarafından 1994 yılında bir algoritma
ortaya konuldu. Adından anlaşılacağı üzere bu format **JPEG** formatı oluyor. Başlangıçta bir sayısal
görüntü biçimi olarak 1994 yılında [ISO/IEC 10918-1](https://www.iso.org/standard/18902.html) isminde
normları ortaya konulan bu format temelinde 4 birim içermekte. Bu birimler pikelleri
ve kodlanması amacıyla *RGB* renk kodu uzayından, **YUV** *(Y'CbCr)*
renk kodu uzayına çevrilmesini ve Huffman algoriması ile sıkıştırılmasını öngören bir
standart tanımıdır. Bu tanıma göre sensörden gelen *RGB* renk uzayında her bir piksele ait veri değerini
*YUV* renk uzayına aktarılır ve Huffman algoritması kullanılarak sıkıştırılır. Değer tablosu
ve diğer veriler de dosyanın başına eklenerek paketlenir. Sıkıştırma esnasında **ayarlanabilir kayıpla sıkıştırma**
yöntemi kullanılıması öngörülür.

## Pikseller ve Renk sıkıştırma
Renkler basitçe 3 kanaldan oluşur. Bundan daha önce bahsetmiştim. Bu 3 kanalı kullanan (ya da daha farklı renk
kanalları kullanan) birbirinden farklı renk uzayları mevcuttur. Bu renk uzaylarının özellikleri kullanılarak
birbirinden farklı sıkıştırmalar ile piksellerin bant genişliği küçültülür. Bu küçültmeye de **Chroma Subsampling**
yani *renk örneklemesi* denilir.

### Renk Uzayları
Renk uzayları bir renge ait verinin yazılmasını sağlayan standartlara verilen isimdir. Renk uzayı piksele ait
verinin kanallarını ve diğer verilerini içerir. Bir renk uzayı parlaklık ve renk öğelerinden oluşur.
Parlaklık verisi göz tarafından daha hassas algılanılırken, renk doygunluğu için bu hassasiyet daha azdır.
Bu durum temelde gözdeki konik ve çubuk hücrelerinin hassasiyet farkından kaynaklanmaktadır.

![Göz hücreleri](/assets/img/jpeg_pic/rod_and_cones.jpg)

Gözün bu özelliğinden yararlanılarak, göz tarafından daha fazla tolere edilen renk verisi daha fazla
sıkıştırılarak görüntünün tamamının daha az bant genişliği kaplaması sağlanır. Bu prensip ile doğala
daha yakın renk sıkıştırması yapılabilir.

Bu renk sıkıştırmaları için pikselleri örnekleyecek renk uzayları kullanılır. Basitçe bilmemiz gereken
iki renk uzayı vardır. Bunlar **RGB** ve  **YUV**

#### RGB Renk Uzayı Nedir?
*RGB* en basit görüntü depolama uzayıdır. Her bir piksele ait kırmızı, yeşil ve mavi renk kodunu içerir.
Görüntüdeki her bir piksel için bu 3 renk kanalı kullanılır. Her bir renk değeri `8 bit` veri içerisine
yazılır. Bir piksel için toplamda **8*3** `24 bit` veri kullanılır. *RGB* renk uzayı oldukça basit ve sıkıştırmak
için yeterince optimal değildir. Ayrıca bu renk uzayında parlaklık bilgisi de yer almaz. Bu nedenle
renk ve parlaklık bilgisini ayrı ayrı sıkıştırmak mümkün değildir. Bu sebeple RGB renk uzayı pikseli
ham halinden dönüştürmek için kullanılır. Televizyonculuk ve dijital veri işleme uygulamalarında
depolanacak veri *RGB*'den *YUYV* formatına dönüşüm yapılır. İşlenmesi esnasında da *YUYV*'den
*RGB* formatına çevrilir.

##### RGBA renk uzayı
*RGB* renk uzayındaki kanallara ek olarak `alpha` kanalını da içeren renk uzayıdır. `Alpha` kanalı
pikselin saydamlık verisin içeren kanaldır.

#### YUV renk uzayı
*YUV* aslında RGB gibi tam bir renk uzayı ihtiva etmez. *RGB* renk uzayındaki pikselleri farklı bir
şekilde ifade etmek için kullanılır. Bu işlemde parlaklık *(luma)* ve renk *(chroma)* ögeleri birbirinden
ayrılır ve bu sayede farklı farklı sıkıştırılmasına imkan sağlar.

**Luma** *(Y')* bilgisi bir resimdeki gamma-sıkıştırılmış renk kanallarının ağırlıklı toplamı ile elde edilir.

**Chroma** değerleri ise **Cb** *(U)* ve **Cr** *(V)* ile gösterilir.
**Cb** değeri *RGB* formatındaki mavinin (*B* değerinin) *luma* ile farkını ihtiva eder.ITU standardına göre
`Cb=-0.169R – 0.331G +0.499B + 128` şeklinde hesaplanır.
**Cr** değeri *RGB* formatındaki kırmızının (*R* değerinin) *luma* ile farkını ihtiva eder.ITU standardına göre
`Cr=0.499R – 0.418G - 0.0813B + 128` şeklinde hesaplanır.

![YUV Katmanlandırma örneği](/assets/img/jpeg_pic/yuv_example.jpg)

### Chroma Subsampling
Buraya kadar **JPEG** formatının ortaya attığı noktalara deyindik ve dedik ki orjinal fotoğraf başta alt örneklenir,
sonrasında Huffman algoritması ile sıkıştırılır ve dosya yazılır. **JPEG** için bahsedilen *ayarlanabilir veri kaybı*
tam da renk alt örneklemesi kısmında yaşanır.

Görüntünün kalitesini etkilemeden bant genişliğini yani boyutunu azaltmak için kullanılan yöntemlere
**Chroma Subsampling** yani renk alt örneklemesi denilir. Burada amaç olabildiğince çok ham veriyi
sıkıştırmaktır. Renk uzaylarında genelde kullanılan örnekleme oranları `J:a:b` şeklinde yapılır.

* J: referans alanının eni
* a: örneklemenin ilk sırasındaki renk bilgisini içeren piksel sayısı
* b: örneklemenin ikinci sırasındaki renk bilgisini içeren piksel sayısı

*RGBA* renk uzayı gibi 4 kanallı olan renk uzaylarında format `J:a:b:Alpha` şeklinde sıralanır.

Ham veriye ait sıralamadaki renk içeriği düştükçe renk netliği azalırken sıkıştırma artırılmış olur.
Yaygın olarak kullanılan bazı alt örneleme şablonları vardır.
Bunlar:

![Subsampling](/assets/img/jpeg_pic/subsampling.jpg)

Üstte yer alan ilk satır renkleri içeren 8 piksel için verinin en ham halidir. `4:4:4` olarak adlandırılır.

İkinci satırda ise yer alan *chroma* ise her bir satır için sağdaki pikseli içeren sıkıştırılmış formattır.
Bu format `4:2:2` olarak adlandırılır. Yani 4 enli bir piksel grubu için birinci satırda 2 piksel, 2. satırda
iki piksel kalacak şekilde renk azaltılır.

Son satırda ise `4:2:0` lık şablom bulunmakta. Yani 4 enli bir piksel grubu için 1. satırda 2 piksel bırakılır.
2. satır 1. satırdan üretilir.

Bütün pikseller birleştirilip *Luma* değerleri üzerine konulduğu zaman fotoğraflarda farklı alt örneklemeler için
farklı derecede netlik değişimi yaşanır.

Her bir alt örnekleme methodu farklı amaçlara hizmet eder. `4:4:4` tam çözünürlüğü bozulma olmaksızın sakladığı için
yüksek kalite film tarama gibi alanlarda kullanılır.
`4:2:2` pek çok uzman yayıncılık formatında kullanılır. `4:2:0` dikey ve yatayda yarı çözünürlük sağladığı için
Blue-Ray disklerde veri sıkıştırılacağı zaman yaygınlıkla kullanılır.

## Her Şeyi Birleştirme
Renk örneklemesi yapılmış bir fotoğraf için işlem sırası şimdi sıra Huffman algoritması ile sıkıştırılmasında...
Ham veri için Huffman ağacı oluşturulur. Burada **JPEG** maksimum sıkıştırma için **Y** **Cb** ve **Cr** değerlerini
ayrı ayrı sıkıştırır ve *Quantization Table* dediğimiz kodlama tablosu oluşturulur. Huffman algoritmasının nasıl
çalıştığına girmeyeceğim çünkü daha öncesinde [burada](https://zaryob.github.io/2020/03/19/Huffman-Algoritmasi.html) açıkladım.
Sonuçta **JPEG** format dönüşümü bu şekilde özetlenebilir.
![Subsampling](/assets/img/jpeg_pic/encode_decode.png)
