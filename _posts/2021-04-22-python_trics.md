---
layout: post
title: "Hileler 101: Python Kullanırken Ufkunuzu Açacak Bazı Püf Noktalar"
date: 2021-04-22 12:23:43 +0300
categories: [genel, linux, programlama]
image: "2021-04-22-python_trics.jpg"
image_hash: "1a99ed6255f6692947dfd4d295ff2833"
---

- Acılarınız hafifleyecek.

Sıklıkla Python kullanan bir geliştirici olarak bir gece yarısı aklıma gelen bazı Python özellikleri ile bir Hileler serisine başlamak istedim.

Bu serimin ilk yazısının Python olması 2014'den beri Python öğrenen ve her yeni günde de öğrenmeye devam eden bir Pythonista olduğum için pek şaşırılacak bir şey olmasa gerek.

## **Tek Satırlık İfadeler ve Fonksiyonlar ile Tatlı Birlikteliği**

Daha önce hiç, bir **if-else** koşullu ifadesini tek satırda yazdınız mı? Eğer yazmadıysanız bir fonksiyona parametre olarak bu ifadeyi girebileceğinizden de habersiz olmalısınız. Ne kadar da yazık:

```python
print("tek" if int(input("Bir sayı giriniz: "))%2 else "çift")

```

Peki hiç bir döngüyü tek satırda yazarak bir fonksiyona öge basmayı denediniz mi:

```python
sum(i for i in range(10))
```

Bu tip ufak kaçış yolları bir dili oldukça zevkli, kodlarınızı okunur ve yer yer katlanılır yapacaktır.

## Büyük Larousse: İki Sözlüğü Birleştirmek

Ona Büyük Larousse adını veriyorum. Çünkü büyük sözlük diyince aklıma bir o geliyor. Neyse cıvımayayım…

İki sözlüğü birleştirmek Python kodlayanlar için genelde sık kullanılmayan bir şey. Ancak ben böyle bir özelliğe ilk ihtiyaç duyduğumda çözüm ararken iki sözlüğü birleştirmeye çalışmak bana saçlarımı yoldurdu. Şöyle çok basit bir yolunun olduğunu görünce de kahkahaya boğuldum. (Sanırım deliriyorum 😂)

```python
a = {"isim":"Süleyman", "soyisim":"Poyraz"}
b = {"yaş": 20, "hobi" : None}
a.update(b)
print(a)
```

## Listeleri Koşullu İfadelere Koşul Yapmak

Nasıl mı? Bir sürü koşulu, tek tek kontrol etmek için bol bol **if-else** yazmak ile, pardon yapay zeka kodlamak ile uğraşan bireyler için, uzun koşul listeleri içinden çıkılmaz bir hal alabilir. Belki adını dahi hiç duymadığınız bir `all` methodu ve `any` methodu; koşulların sayısı arttığında ve bunları manuel olarak yazmanız gerektiğinde stres giderici hatta bazen ağrı kesici bile olabilir.

```python
kosul1=3
kosul2=true
kosul3="kosul_saglandi"

kosul_listesi=[ 
                kosul1>2,
                kosul2==true, 
                kosul3=="kosul_saglandi"
              ]
              
if(all(kosul_listesi)):
    print("Koşulların hepsi sağlandı")
else:
    print("Koşullardan en az birisi sağlanmadı")
```

Bu şekildeki bir ifade bizim bir sürü ifadeyi, `and` kullanıp if’e koşul olarak girmemiz ve satırlar dolusu yazdığımız koşullar silsilesi ile kafamızı allak bullak etmektense kullanabileceğimiz en güzel yoldur. Peki biz aynı ifadeleren en az birisinin sağlandığını nasıl kontrol edeceğiz. İşte burada da `any` methodu yardıma koşuyor.

```python
kosul1=1
kosul2=false
kosul3="kosul_saglandi"

kosul_listesi=[ 
                kosul1>2,
                kosul2==true, 
                kosul3=="kosul_saglandi"
              ]
              
if(any(kosul_listesi)):
    print("Koşullardan en az birisi sağlandı")
else:
    print("Koşullardan hiç birisi sağlanmadı")
```

## Gez Göz Arpacık

Ona bu adı verdim. Sebebi ise aynı anda birden fazla inputu tek satırda alabilmeniz. Defalarca kez `input()` fonksiyonunu çağırmayı hedefleyen nazik kalpli insanlar için Python ne kadar büyük bir işkence olsa gerek.

```python
a,b,c,d=input("4 tane input girin: ").split()
print("Birinci: {}\nİkinci: {}\nÜçüncü: {}\nDördüncü: {}".format(a,b,c,d))
```

## Kafaları Tokuşturalım Mı?

Eğer *a* değişkenini *b*, *b* değişkenini de *a* yapmak için bir temp değişkeni kullanıyorsanız acilen kafa tokuşturmayı öğrenmeniz gerekmekte.

```python
a=5
b=3
print("{} : {}".format(a,b))
a,b=b,a
print("{} : {}".format(a,b))

```

## İki Listeyi Birden Döngüye Almak

Aslında, aşağıda gösterildiği gibi birden çok liste için birden çok döngü kullanmadan aynı anda iki listeyi yineleyebilirsiniz.

```python
isimler = ['Günay', 'Necmet', 'Guido']
soyisim = ['Zenne', 'Erdima', 'von Rossum]
for isim ,soyisim in zip(isimler,soyisimler):
    print("{} {}".format(isim, soyisim))
```

Bu da zip fonksiyonunun en sevdiğim kullanımlarından birisi.

## Listeleri Temizlemek

Bir listede eğer ki birden fazlaca kez tekrarlanan değer varsa bunları bazen temizlemek istersiniz. İşte bu konuda yardımımıza `set` ler koşuyor.

```python
liste=[1,2,9,5,8,6,5,9,2,6,3,9,5,6,9,6,5,4]
print(list(set(liste)))
```

## Listelerde En Çok Tekrar Edeni Bulmak

Bazen listedeki tekrarlanan veriler bizim aradığımız bir veri olabilir. İşte bu konuda da yine `set` leri kullanacağız ama bu sefer akıl dolu ve zarif bir şekilde...

```python
liste=[1,2,9,5,8,6,5,9,2,6,3,9,5,6,9,6,5,4]
print(max(set(liste), key=liste.count))
```

## Sonsuz Girdili Fonksiyonlar

Bir fonksiyona elemanı sonsuz farklı şekilde giremiz mümkün değil ama sonsuz tane girdiyi tek seferde girmeniz Python ile mümkün. Nasıl mı? Oynat bakalım…

```python
def toplam(*a):
    sonuc=0
    for eleman in a:
        sonuc+=eleman
    return sonuc
  
top=toplam(5,6,9,6,9,6,6)
print(top)
```

Bir `*` işareti baya bir ayıp kapatıyor.

## Sonuç

Bu yazımda Python’da sıkça kullandığım ama pek çok kişinin bilmiyor olabileceği bazı yollar ve kullanımlardan bahsettim.

Bir dilin özellikle bu tip ufak kaçış yolları sunması benim için hayli heyecan verici ve kod yazmamı teşfikleyen bir şey.

Umarım size de faydalı olmuştur. İyi okumalar…