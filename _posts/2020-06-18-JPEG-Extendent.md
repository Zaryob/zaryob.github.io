---
layout: post
title: "Smart JPEG - Optimize Edilmiş Huffman Tabloları"
date: 2020-06-18 19:29:35 +0530
group: [programming, photography]
image: blur-camera.jpg
imagehash: 1007f4449f50731c79f045d91520a988
---

JPEG formatı hakkında daha detaylı bilgileri bir önceki blog postumda paylaşmıştım.
Şimdi bu formatı daha verimli kullanmak amacıyla geliştirilmiş bir yöntemi ve bu
yöntemin farklı noktalarını inceleyeceğim bir yazı kaleme almak istiyorum.
Bazı akıllı telefon geliştiricileri kendi telefonlarının kamera yazılımında `Smart Photo`
veya `Smart JPEG` ibaresi eklenmeye başlandı. İşte bu ibare nedir tam olarak bunu
açıklamaya çalışacağım.

Akıllı JPEG (Smart JPEG) Nedir?
-------------------------------
Bu aslında basitçe yapay zeka ile işlenmiş fotoğraflar diye kestirilip atılmakta.
Yapay zeka ile işlenmesi kısmı aslında Piksellerin JPEG dosyalarına dönüştürülmesi
esnasında; optimize edilmiş Huffman Tabloları kullanılması, piksel sıkıştırma için
uygun subsampling kullanılması, uygun odaklama yapılması gibi yöntemleri en uygun şekilde
kullanılmasına dayanıyor. Bu yazıda daha çok `Optimize Edilmiş Huffman Tabloları`
ile ilgileneceğim.


Optimize Edilmiş Huffman Tabloları
----------------------------------
Huffman Tabloları JPEG dosyalarını oluşturulurken piksellerin sıkıştırılmasında
kullanılan tablolardır. Her bir Huffman tablosu fotoğrafa özel oluşturulur. Huffman
tabloları piksellerin yerleşimine özel olarak üretilir. Bu tabloların işlenmemiş
fotoğraflara özel olarak optimize edilmesini esas alır. Bu sayede hem tablonun boyutu
küçültülür hem de pikseller daha optimal sıkıştırılmış olduğun için JPEG sıkıştırılmış
fotoğrafın toplam boyutu düşmüş oluyor.

Örnek olması açısından Adobe Photoshop ile bir deneme yaptım. Huffman tablolarının
optimize edilmesi farklı fotoğraglar için boyutta %2 ile %8 arasında bir boyut azalımı
olmaktadır.

![Ayar Örnek Fotoğrafı](/assets/img/blog/jpeg_pic/atn-trick.png)

Linux ortamında ise `jpegoptim` programı sayesinde yapılabilmekte.

JpegOptim Ile Sıkıştırma Testi
------------------------------
JpegOptim terminal üzerinden kullanılan basit bir programdır. Linux dağıtımlarına
paket yöneticileri sayesinde kurulabilir. Debian ve Ubuntu tabanlı dağıtımların
öntanımlı depolarında bu program yer almaktadır, kurulum için

```shell
root@localhost#~ apt-get install jpegoptim
```

Fedora ve RedHat tabanlı dağıtımlar için `epel` deposunda bu paket yer almaktadır.

```shell
root@localhost#~ dnf install jpegoptim
```

Gentoo için ise,

```shell
root@localhost#~ emerge --ask jpegoptim
```

Parametrelerine şimdi girmeyeceğim. Ancak basit kullanımı şu şekildedir.

```shell
zaryob@localhost $~ jpegoptim file.jpeg
```

Şimdi ise kullanalım.

```shell
zaryob@localhost $~ jpegoptim lena_optimized.jpeg
lena_optimized.jpg 512x512 24bit N JFIF  [OK] 69214 --> 67683 bytes (2.21%), optimized.
```

Standart resim boyutu 67.6 Kb iken 66.1 Kb'a düşüyor.

Karşılaştırmak istersiniz diyerek iki fotoğrafı da ekliyorum.

Bu fotoğraf orjinal.
---
![Orjinal Lena fotoğrafı](https://imagej.nih.gov/ij/images/lena.jpg).

Bu ise optimize edilmiş fotoğraf.
---
![Optimize Fotoğraf](/assets/img/blog/jpeg_pic/lena_optimized.jpg)


Huffman Tablolarının Optimize Edilmesinin Avantajları
-----------------------------------------------------

 * Boyut küçülür ancak kalite değişmez.
   Huffman tablolarını optimize etmek sadece tabloların boyutunu optimize etmek için
   en uygun tablonun tespitine dayandığı için veri kaybı yaşanmaz.

Huffman Tablolarını Nasıl Optimize Ederim
-----------------------------------------
Algoritma açısından bakıldığında optimizasyon şu şekilde yapılır.

1. Önişleme
 * Y, Cb ve Cr bileşenleri için yinelenen, görüntüdeki tüm MCU blokları için nicelenmiş DCT katsayılarını hesaplayın
 * DC katsayısıyla başlayan zig-zag dizisini ve ardından 63 AC katsayısının tümünü kullanarak katsayıları yeniden sıralayın.
 * Herhangi bir sürekli sıfır dizisini, ilk başlangıcı sıfır sayısını (yani 0-15 arasında) tanımlayan uygun bir kod sözcüğü ile değiştirin.
 * Her MCU'nun DC katsayısını, huffman kodlu boyut alanı ("kategori") ve ardından değerin kendisi ile değiştirin.

2. Bütün DC ve Ac tablolarını yeniden kodlayın.
3. Kodlama listesini en sıktan en seyreğe doğru sıralayın.
4. En az sık kullanılan iki kodu seçin ve bunları ikili ağacın alt yaprak düğümlerine ekleyin. Her kodun frekansını kaydedin.
5. Bu çiftin üstünde, aşağıda eklenen iki düğümün toplamına eşit bir değere sahip bir düğüm oluşturun.

Bu adımları tekrarlayarak tüm piksel tablosunu Huffman Kodlama ile kodlayın ve DHT tablosu yazın.

## KAYNAKÇA

1. [Optimal Huffman coding of DCT blocks](https://www.semanticscholar.org/paper/Optimal-Huffman-coding-of-DCT-blocks-Lakhani/152c4e4db93b3b5d384df56bc39bbb7ab626c609)
2. [Impulse Adventure](https://www.impulseadventure.com/photo/optimized-jpeg.html)
