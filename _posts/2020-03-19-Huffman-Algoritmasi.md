---
layout: post
title: "Huffman Algoritması"
date: 2020-03-19 14:03:35 +0530
icon: product-hunt
group: [programlama]
image: pointing-data.jpg
imagehash: bf120c54397ba65f193e35996e5668cc
---

Veri yönetim ve sıkıştırma algoritmaları dinamik kodlama için çok büyük önem arzetmektedir. Özellikle sıkıştırma algoritmaları ve bu algoritmaların başarısı veri iletimindeki ağ yükünü azaltmakta ve başarıyı artırmaktadır. Bu sıkıştırma algoritmalarından `Huffman Algoritmasını` inceleyeceğiz


Huffman Algoritması Nedir?
--------------------------

David Huffman tarafından geliştirilen bu algoritma kayıpsız sıkıştırma ilkesini (loseless) temel almaktadır. Bu sıkıştırma algoritması karakter tekrarını esas almaktadır. Bu sayede sık kullanılan karakterler daha az yer kaplar. Eğer bütün karakterlere ait tekrar oranı aynı ise bu algoritma ASCII gibi karakter kodlama algoritmaları ile neredeyse aynı başarıyla veriyi sıkıştırır ki pratikte bu durum mümkün değildir. Bu sebeple veri sıkıştırması blok algoritmalarından her zaman daha iyidir.

Huffman algoritması bir ağaç yapısıdır. Ağaçta kökten uçlara karakter sekansları ile düğümler oluşturulur ve her bir karakter için kod belirlenerek şifreleme yapılır.

Aynı ağaç kullanılarak da veri deşifre edilir.

Veri deşifrelemesinde ise önek kodları ile belirsizlik sıfıra indirilmeye çalışılır.

Huffman Veri Algoritması
------------------------

```
Bir öncelik sıralaması S değişkeni oluştur.
Sıklık sıralamasında azalandan artana doğru sıralama oluştur.
Herbir karakter için:
	Minimum değer için yeni bir düğüm oluşturun.
	Minimum değeri düğümün soluna atayın.
	Maksimum değeri düğümün sağına atayın.
	Değerlerin sıklıklarını toplayın ve bu düğüme atayın.
	Bu düğümü ağaca ekleyin.
Düğümü geri dönderin.
```

Huffman Algoritması Nasıl Çalışır?
----------------------------------

Elimizde 20 haneli bir veri bulunduğunu düşünelim. Bu veri aşağıdaki gibi olsun:

```
AGDCASDCDSGSDSSGADSA
```

Her bir karakter 8 bit yer kaplamaktadır. Bu da bu verinin iletimi esnasında `8*20` bit yani `160` bitlik aktarımın yapılması gerekmektedir. Huffman ile adım adım bunu kodlarsak

* Karakter sıklıkları belirlenir.

|   A   |   G   |   D   |   C   |   S   |
| :---- | :---: | :---: | :---: | ----: |
|   4   |   3   |   5   |   2   |   6   |

* Sıkılığa göre sıralama yapılır.

|   C   |   G   |   A   |   D   |   S   |
| :---- | :---: | :---: | :---: | ----: |
|   2   |   3   |   4   |   5   |   6   |

* Tam bir ağaç elde edilene kadar parça parça düğümleme yapılır.


|   Z1  |   A   |   D   |   S   |
| :---- | :---: | :---: | ----: |
|   5   |   4   |   5   |   6   |


```
   Z1
  / \
 C   G
 2   3
```

- Sıklığa göre yeniden sıralama yapılır.

|   A   |   Z1  |   D   |   S   |
| :---- | :---: | :---: | ----: |
|   4   |   5   |   5   |   6   |

- Yeniden parça düğümleme yapılır.

|   D   |   S   |   Z2  |
| :---- | :---: | ----: |
|   5   |   6   |   9   |


```
      Z2
     / \
    A   Z1   
    4  / \  
      C   G
      2   3
```

- Sıklığa göre yeniden sıralanıp yeniden parça düğümleme yapılır.

|   Z2  |   Z3  |
| :---- | ----: |
|   9   |   11  |


```         
      Z2             Z3    
     / \             / \
    A   Z1          D   S
    4  / \          5   6
      C   G
      2   3
```

- Sıklığa göre yeniden sıralanıp yeniden parça düğümleme yapılır.

```
         _Z4_
        /    \
       /      \
      Z2       Z3  
     / \      / \
    A   Z1   D   S
    4  / \   5   6
      C   G
      2   3
```

* Düğümlerin sol düğümleri 0 sağ düğümleri 1 olarak kodlanır. Bu 0 ve 1'ler bit değerlerini ihtiva edecek.

```
          _ Z4 _
         /      \
        0        1
       /          \
      Z2          Z3  
     / \          / \
    0   1        0   1
   /     \      /     \
  A       Z1   D       S
  4      / \   5       6
        0   1
       /     \
      C       G
      2       3

```

* Kodlama tablosu ile harfler yeniden kodlanır.

| Karakter | Sıklık | Kod |   Karakter Boyutu   |
| :------- | :----: | :-: | :-----------------: |
|    C     |    2   | 010 |     3 bit           |
|    G     |    3   | 011 |     3 bit           |
|    A     |    4   | 00  |     2 bit           |
|    D     |    5   | 10  |     2 bit           |
|    S     |    6   | 11  |     2 bit           |

Sıklıklar toplamı 20 bitdir.

Toplam boyut buradan hesaplanabilir.

| Karakter |   Karakter başı Boyut  |
| :------- | :--------------------: |
|    C     |  2  *  3 bit = 6 bit   |
|    G     |  3  *  3 bit = 9 bit   |
|    A     |  4  *  2 bit = 8 bit   |
|    D     |  5  *  2 bit = 10 bit  |
|    S     |  6  *  2 bit = 12 bit  |

Karakterler toplam 5 * 8 = 40 bit yer kaplar.

`Toplam 45 bit`

* Böylece veri kodlama tablosu ile veri yazıldığı zaman kodlanmış veri 45 bit alan kaplar.

`AGDCASDCDSGSDSSGADSA` veri tablosu `00 011 10 010 00 11 10 010 10 11 011 11 10 11 11 011 00 10 11 00` olarak dönüştürülmüş olur.

İsteğe bağlı olarak kodlanmış verinin çözülmesi için verinin başına karakter karşılıkları ve sıklık tablosu eklenmesi gerekebilir.
Örneğin bunu kullanarak veriyi: `C2 G3 A4 D5 S6 00 011 10 010 00 11 10 010 10 11 011 11 10 11 11 011 00 10 11 00` olarak yazarsak veriyi kayıpsız olarak tam dönüştürmek için kullanabiliriz.

Bu durumda toplam veri boyutumuz ise: `Karakter boyutu  + Sıkılık boyutu + Veri Tablosu` olarak hesaplanır. `40 bit + 20 bit + 45 bit = 105 bit` toplam veri boyutunu oluşturur.

Huffman Algoritmasının Karmaşıklığı
-----------------------------------

Sıklık sıralamasının oluşturulması `2*(n-1)` karmaşıklığı ise `O(log n)` kadardır.
Kodlamanın oluşturulmasının zamana bağlı karmaşıklığı ise  karakter sayısı başına `O(n*log n)` olarak hesaplanır.

Huffman Algoritmasının Dezavantajları
-------------------------------------

Huffman algoritması en optimal olarak az karakter çeşidi ve büyük boyutlu verilerde kullanışlıdır. Ancak karakter çeşidi arttıkça oluşturulan sıklık tablosu ve karakter ağacının yazılması zorlaşır veya aynı karakter çeşidinden az miktarda veri bulunması durumunda sıkıştırma oranı azalmaktadır. Bu sebeple bu algoritmanın yaygınlaşmasından sonra ilerleyen dönemlerde `Adaptive Huffman` gibi teknikler geliştirilmiştir.


Huffman Algoritmasının Uygulamaları
-----------------------------------
* BZIP ve JPEG gibi sıkıştırma algoritmaları
* TEXT ve FAX gibi karakter bazlı veri aktarım yolları

## KAYNAKÇA

1. [programiz.com algoritma sayfası](https://www.programiz.com/dsa/huffman-coding)
2. [İngilizce Wikipedia sayfası](https://en.wikipedia.org/wiki/Huffman_coding)
3. [Türkçe Vikipedi sayfası](https://tr.wikipedia.org/wiki/Huffman_kodu)
4. [Sadi Evren Şeker'in blogu](http://bilgisayarkavramlari.sadievrenseker.com/2009/02/25/huffman-kodlamasi-huffman-encoding/)
