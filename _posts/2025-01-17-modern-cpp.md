---
layout: post
title: "Tüm Gurular Toplandık: Modern C++"
date: 2025-01-17 22:39:23 +0300
categories: [programlama]
image: "2025-01-17-modern-cpp.jpeg"
image_hash: "3bde78199468d6affeb6539c56af87c9"
---

Söz konusu C++ olunca, birçok kişi farklı farklı şeyler konuşuyor, bileni ile
bilmeyeni ile. Kimisi C++'ın kompleksliğine dem vururken kimileri ise C++'ı
gömülü sistemlerde kullanmaktan başkasının gereksiz olduğunu savunuyor.
3 senedir birfiil C++ ile uğraşan biri olarak, benim de bu konuda bir şeyler 
yazmam gerektiğini düşündüm.

3 senede oyun geliştirmeden (Unreal Engine 5 ile) masaüstü uygulamalarına (Qt ile), 
oradan gömülü sistemlere ve hatta zaman kritik sistem programlamaya kadar birçok
alanda C++'la haşır neşir oldum.

Bir süredir aklımda Modern C++ konusunda bir şeyler yazmak vardı.
Ancak bir süredir erteleme sendromundan muzdarip olduğum için bir
türlü başına oturup da bir post yazmayı başaramadım. Artık o akşam bu akşam :)

Başta belirtmek isterim ki, bu yazıda C++'ın ne tarihine gireceğim ne de çok bilinen
yok işte variable türleri budur, pointerlar şunlar, referanslar bunlar gibi şeylerden
bahsetmeyeceğim. Çünkü büyüklü küçüklü herkes "Ben C++ gurusuyum" diyip oturup Bjarne diye bir 
adam C'nin şu sorunlarını görmüş hede hödö diye bir sürü Wikipedia bilgisini oturup 
paylaşıyor. Ama bununla kaldığın zaman C++'ın gurusuyum demek havuzda yüzüp Manş Denizini
geçebilirim demek gibi bir şey. Neyse lafı uzatmadan Modern C++ hikayeleri anlatalım biraz da.


# C++'ın Orta Çağları: C++98 ve C++03 

Tarihte C++ 90'ların sonunda bugünkü bildiğimiz ilk iskeletini C++98 ile ISO ortaya attı. Ardından 
2000'lerin başında C++03 tanıtıldı ve bu dönemin ardından uzun süre C++ topluluğu yeni özellikler
ve standartlar konusunda sessiz kaldı, bir nevi bir buz çağı. Derken Java ve C#'ın ağırlığı
ve popülaritesi C++ dilinin üzerinde bir baskı yaratmaya başladı. Öyle ki o dönemlerde
sınıfların ve nesnelerin yönetimi, bellek yönetimi gibi konularda C++ zamanın gerisinde kalmış,
hatta verilerin başlangıç tanımlamaları gibi konularda bile C++ oldukça ilkel kalmıştı.

Örneğin çokça bildiğimiz aşağıdaki tanımlama C++'ın o dönemlerinde yoktu:

```cpp
class MyClass {
public:
    int value = 5; // C++98/03'de derleme hatası verir.
};
```

Bu dönemlerin ardından daha öncesinde bahsettiğim Java ve C# gibi dillerin popülerliği ile 2003-2005
yılları arasında C++'ın yeni standartları üzerinde çalışmalar başladı. C++0x olarak adlandırılan bu 
yeni standartlara sahip olması için topluluk C++'ı eleştirilere maruz bıraktı. Geliştiriciler, dilin 
uzun uzadıya yazım gerektirmesinden, hata yapmaya aık bellek yönetiminden ve fonksiyonel programlama
ile eşzamanlılık gibi modern programlama paradigmalarına sınırlı desteğini yerden yere vuran yazılar 
yayınladı. Çeşitli konferanslarda C++'ın geleceği tartışıldı ve bu uzun sürenin ardından 2011 yılında
modern C++ duyuruldu. O zamanlarda C++0x olarak adlandırılan bu standart, C++11 olarak yeniden 
adlandırıldı.

“Yeniden icat edilmiş C++” olarak anılan bu standart, performanstan ödün vermeden dili daha güvenli, 
daha ifade gücü yüksek ve geliştirici dostu hale getiren özellikler tanıttı. Standart kütüphanelerde
oldukça büyük değişiklikler yapıldı ve C++11 ile birlikte C++'ın modern çağı başlamış oldu diyebilirim.


## Buz Devri Öncesi C++'ın Sorunları

Esasında C++ dili oldukça güçlü bir dildi, o zamanlar bile... Ancak geliştiricileri konforsuz hale getiren
bazı sıkıntılar var idi.

Örneğin en büyük sıkıntılardan birisi fazla uzun yazım zorunluluğu gerekliliği idi. Buna "verbosity" diyoruz 
ki bence Rust'ın şu dönemlerde yaşadığı en büyük sorunlardan bir tanesi bu, ama bu hususa bir başka zaman
gireceğim. Özellikle iteratörler gibi karmaşık türler için tür bildirimleri uzundu ve okumak zordu.

Örneğin bir iteratör tanımlamak için aşağıdaki gibi bir şey yapmanız gerekiyordu:

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};
std::vector<int>::iterator it = vec.begin();
```

Bellek yönetimi ve eşzamanlılık eksikleri de C++'ın en baş ağtırıcı sorunlarıydı. C++'ın ham işaretçileri
ve çok iş parçacıklı (multi-thread) programlamayı harici kütüphanelere bırakması, C++'ın bu konularda 
geride kalmasına neden olmuştu, hele hele Java ve C#'ın bu konularda getirdiği yenilikçi yaklaşımlar 
C++'ı pek tercih edilmeyen bir dil haline getirilmişti.

Bu açıdan bakldığında C++11 bir güncellemeden çok daha fazlasıydı; adeta bir devrimdi. Standart, 
uzun süredir var olan sorunlara çözüm getiren ve dili daha modern, güvenli ve verimli hale getiren
düzinelerce özellik tanıttı ki şimdi bunlardan birkaçına değinelim.
---

# Modern C++'ın Temel Bazı Yenilikleri

Şimdi C++11 ile birlikte gelen bazı temel özelliklere değinelim. 

## Kısaltmalar ve Daha Okunabilir Kodlar:  `auto`, `range-based loops` ve `decltype`

İlk olarak verdiğim ilk örnekten başlayalım. C++11 ile birlikte sınıfların ve nesnelerin başlangıç
değerlerini constructor çalıştırılmadan önce tanımlamak artık mümkün. Yani yukarıdaki kod artık derlenebilir.

Hatta constructor'lar için de aynı şey geçerli. C++11 ile birlikte constructor'lar için de başlangıç
değerleri tanımlamak mümkün hale geldi.

```cpp

class MyClass {
public:
    int value; 
    MyClass(int val) : value(val) {}
};

```

Ayrıca iteratörler gibi karmaşık türlerin tanımlamaları da oldukça basitleştirildi ki bu noktada `auto` 
anahtar kelimesi devreye girdi.

```cpp

std::vector<int> vec = {1, 2, 3, 4, 5};
auto it = vec.begin();

```

Bu örnekte `auto` anahtar kelimesi, `it` değişkeninin türünü `std::vector<int>::iterator` olarak 
kısaltıyor. Bu kısatlamalara ileride daha detaylı değineceğim ancak bu özellikler sayesinde C++'ta özellikle
meta programlama ve şablonlar gibi karmaşık türlerin tanımlamalarını sadeleştirebileceğimiz pek çok
mekanizma da sunuldu.

Kısaltmalardan bir diğeri ise for döngüleri için gelen `range-based for loop` özelliği. Bu özellik
sayesinde C'den hatırlayacağınız şu döngüler yerine:

```cpp

for (std::vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {
    std::cout << *it << std::endl;
}

```

Artık aşağıdaki gibi daha basit bir döngü yazabilirsiniz:

```cpp

for (auto& value : vec) {
    std::cout << value << std::endl;
}

```

Şimdi diyeceksiniz ki "Bunlar ne sağlar ki? Ben elle ne güzel index veriyorum". Ancak güzel kardeşim
bu gibi kısaltmalar "off-by-one" olarak bilinen index takip eksikliklerin önüne geçer hatta aralığın
derleme zamanında kontrol edilmesi geçersiz adreslere erişimin temel nedeni olan "buffer overflow"
gibi hataların önüne geçer. Çünkü bu aşamada döngü sınırlarını derleyici kontrol eder ve bu sayede
ve hem kodun daha okunabilir olmasını hem de daha güvenli 
olmasını sağlanır.

Son olarak `decltype` anahtar kelimesinden bahsedeceğim ama burada işler biraz kompleksleşecek, belki
detayları ile bir sonraki yazıda ilgileneceğim.

`decltype` ile de bir değişkenin türünü başka bir değişkenin türüne eşitleyebilirsiniz.

```cpp
int x = 5;
decltype(x) y = 10; // y'nin türü int olur
```

Son olarak `auto` ile `decltype` arasındaki farkı vurgulamakta fayda var:

* auto türler (types) üzerinde çalışır,
* decltype ise ifadeler (expressions) üzerinde çalışır.

---

## Uniform Initialization (Birörnekli Başlatma)

C++11, değişkenleri süslü parantezler {} kullanarak başlatmak için tutarlı bir sözdizimi tanıttı.
Bu sözdizimi, yerleşik türlerden toplu yapılara (aggregate) ve sınıf nesnelerine kadar tüm türlerde 
çalışır.

Bu sayede daraltıcı (narrowing) dönüşümlerini engelleyerek, başlatma sırasında yaşanabilecek hassasiyet 
kaybı veya beklenmedik davranışların önüne geçer.

Eski Yöntem (C++11 Öncesi)

```cpp
int x = 42;         // Kopya başlatma (copy initialization)
double y(3.14);     // Doğrudan başlatma (direct initialization)
```

```cpp
int x{42};          // Birörnekli başlatma (uniform initialization)
double y{3.14};
std::vector<int> vec{1, 2, 3};  // Toplu başlatma (aggregate initialization)
```

Birörnekli başlatma, tehlikeli dönüşümleri de derleme aşamasında engeller:

```cpp
int x = 3.14;  // İzin verilir ama kesme (truncation) olur
int y{3.14};   // Hata: daraltıcı dönüşüm
```
---

## Akıllı İşaretçiler ve Bellek Yönetimi

C++ diyince aklıma geçmişten beri hep C tarzı taş (new) ve sopalarla (delete) yapılan bellek yönetimi geliyor.
C++'ın bellek yönetimi konusunda yaşadığı en büyük sorunlardan birisi ham işaretçilerin (raw pointer) yönetimiydi.
C++'ta C'den aşina olduğunuz `new` ve `delete` anahtar kelimeleri ile bellek yönetimi yapılması 
dönemdaşları olan Java ve C#'da olduğu gibi otomatik bellek yönetimi yapılmaması C++'ın C'ye göre
tercih edilmesinin neredeyse tek sebebi olarak "C'de sınıf kullanmak istiyorum" olmasına neden oldu
diyebilirim. Hatta o dönemlerde (yazılımı alfabeden sonra öğrenmiş birisi olarak) C++'ın ne olduğunu
sorduğum birisinin "Sınıfları kullanacaksam Java kullanırım, ne kendimi C++ ile yırtayım" dediğini
hatırlıyorum. Belki de zihnim bana oyun oynuyordur, bilemiyorum...

C++11 ile beraber gelen akıllı işaretçiler, bellek yönetimini oldukça basitleştirdi. `std::unique_ptr`
ve `std::shared_ptr` ile bellek sızıntıları ve bellek hataları oldukça zarif bir şekilde çözüldü.

```cpp
std::unique_ptr<int> ptr(new int(5));
std::shared_ptr<int> ptr2 = std::make_shared<int>(5);
```

Bu örnekteki `std::unique_ptr` işaretçileri senin new ile oluşturduğun nesnelerin scope'unun dışına
çıktığında otomatik olarak bellekten silindiğini garanti ediyor. Ve her zaman tek bir işaretçiye sahip
olabileceğiniz anlamına geliyor, yani o işaretçiye sahip olan başka bir işaretçi olamaz, dolayısıyla
aynı bellek alanını iki kez silme gibi bir sorun yaşamazsınız.

`std::shared_ptr` ise işaretçinin kaç tane referansa sahip olduğunu takip eder ve referansı tutan
scope sayısı 0 olduğunda bellekten silinir. Bu sayede paylaşılan bellek alanlarını oldukça zarif bir
şekilde yönetebilirsiniz.

Unique ve shared pointerlerin yanında `std::weak_ptr` de oldukça kullanışlı bir işaretçi türüdür. Ancak
onları daha detaylı anlatacağım başka bir yazı olacak, evrim ağacı gibi "O da başka bir yazının konusu :)"
demek istemiyorum ama, öyle işte.

Ayrıca belirttiğim gibi bu işaretçileri scope'lar arasında taşımak için tanıtılan `std::move` fonksiyonu 
ile gereksiz kopyalamaları ortadan kaldırarak performansı artırır.

```cpp
std::string source = "Hello";
std::string target = std::move(source); // Sahipliği aktarır, derin kopyayı önler
```

Bu örnekte `source` değişkeninin sahipliği `target` değişkenine aktarılır ve `source` değişkeni artık
boş bir değişken olur. Bu da bellek yönetimini oldukça basitleştirir. 

Ayrıca akıllı işaretçilerle beraber, özel silici (custom deleter) tanımlama yeteneği de sunar. 
Bu, yönetilen kaynağın sadece dinamik bellek değil, örneğin dosya, soket veya kilit (lock) gibi 
sistem kaynakları da olması durumunda faydalıdır.

```cpp
#include <iostream>
#include <memory>
#include <cstdio>

// Dosya işaretçisi için özel silici
struct FileCloser {
    void operator()(FILE* fp) const {
        if (fp) {
            std::fclose(fp);
            std::cout << "Dosya kapatıldı.\n";
        }
    }
};

int main() {
    // Dosyayı açmak ve otomatik yönetmek
    std::unique_ptr<FILE, FileCloser> filePtr(std::fopen("test.txt", "w"));

    if (!filePtr) {
        std::cerr << "Dosya açılamadı.\n";
        return 1;
    }

    std::string data = "Merhaba, Modern C++!";
    std::fwrite(data.c_str(), 1, data.size(), filePtr.get());

    // filePtr dışına çıkıldığında custom deleter ile fclose otomatik çağrılır
    return 0;
}
```
---

## Lambda Fonksiyonlar

Lambda fonksiyonlar, C++11 ile birlikte gelen en güzel özelliklerden birisi. Lambda fonksiyonlar,
fonksiyonları bir değişken gibi tanımlamanıza olanak sağlar ve algoritmalar ile geri çağrılarda 
(callback) kullanılmak için idealdirler. Bu noktada şundan da değinmeden geçemeyeceğim, C++'ın 
bu özelliği ile C'den geleneksel olarak gelen fonksiyon göstericileri lambda fonksiyonları ile
derinlik kazanmış oldu.

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};
std::for_each(vec.begin(), vec.end(), [](int value) {
    std::cout << value << std::endl;
});
```

Bu örnekte `std::for_each` algoritması, `vec` vektöründeki her bir eleman için lambda fonksiyonunu
basitçe çağırır. Bu sayede algoritmaları daha okunabilir hale geldi.
---

## Eşzamanlılık ve Paralellik

C++11 ile birlikte gelen `std::thread` sınıfı, C++'ın eşzamanlılık ve paralellik konusundaki 
eksikliklerini oldukça güzel bir şekilde kapattı. std::mutex ve std::future gibi özelliklerle,
C++11 çok iş parçacıklı programlamayı taşınabilir ve standart hale getirdi.

```cpp
std::mutex mtx;
std::vector<int> vec = {1, 2, 3, 4, 5};
std::thread t([&vec, &mtx]() {
    std::lock_guard<std::mutex> lock(mtx);
    for (auto& value : vec) {
        std::cout << value << std::endl;
    }
});
t.join();
```

Yukarıdaki kodda `std::mutex` sınıfı, `std::lock_guard` sınıfı ve `std::thread` sınıfı ile
birlikte eşzamanlılık ve paralellik oldukça basit bir şekilde sağlanabiliyor. Hepsinden de 
ötesi işletim sistemi bağımlılıklarını ortadan kaldırarak taşınabilir bir kod yazmanıza olanak
sağlıyor. Düşünsenize bu kod, platform bağımsız thread yönetimi sağlayarak, bu kodu 
Windows'ta da Linux'ta da macOS'ta da aynı şekilde çalıştırabilirsiniz. 

C++11 ayrıca `std::async` ve `std::future` öğeleriyle asenkron görev yönetimini 
(async task management) de destekler. Böylece manuel olarak `std::thread` yönetmek yerine, 
asenkron olarak çalıştırılan işlerden dönüş değerleri alabilirsiniz.
---

## Meta Programlama Şablonlar ve Derleme Zamanı Hesaplamaları

C++'ın güçlü yanlarını en iyi şekilde gördüğümüz yerlerden birisi ise modern C++ ile birlikte
derleyicilerin de güçlenmesi oldu.

C++11 ile birlikte gelen `constexpr` anahtar kelimesi, derleme zamanında hesaplamaları
mümkün kılar. Bu sayede derleme zamanında hesaplanan sabitler, derleme zamanında bellekte
depolanır ve çalışma zamanında bu sabitlerin değerlerine erişebilirsiniz.

```cpp
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int main() {
    int result = factorial(5);
    std::cout << result << std::endl;
    return 0;
}
```

Bu örnekte `factorial` fonksiyonu, derleme zamanında hesaplanan bir faktöriyel hesaplaması
yapar ve bu sayede çalışma zamanında faktöriyel hesaplamasını yapmaktan kurtulmuş olursunuz.

Bunun şöyle düşünün, daha derleme zamanında factorial(5) fonksiyonunu hesaplayarak, biz
programı çalıştırdığımızda önceden hesaplanmış bu değeri bellekten okuyarak ekrana 
yazdırabiliriz.


Modern C++, şablon metaprogramlama (TMP) ile derleyici zamanında kompleks hesaplamalar 
veya tür manipülasyonu yapmaya izin verir. constexpr, auto, decltype gibi anahtar sözcükler
bunu daha da kolaylaştırmıştır. Tekerrür eden kodları azaltan ve kodunuzu daha esnek ve
genel hale getiren şablon metaprogramlama, C++'ın en güçlü yanlarından birisidir.

```cpp

#include <iostream>
#include <type_traits>

template<typename T>
constexpr bool isPointerType() {
    return std::is_pointer<T>::value;
}

int main() {
    std::cout << std::boolalpha;
    std::cout << "int* bir pointer mı? " << isPointerType<int*>() << std::endl;
    std::cout << "double bir pointer mı? " << isPointerType<double>() << std::endl;
    return 0;
}
```

Bu tarz metaprogramlama, kütüphane geliştiricileri veya çerçeve (framework) yazarları 
için özellikle yararlıdır.
---

# Sonraki Blog Yazılarıma Referans Niteliğinde...

Her biri kendine has kullanım senaryolarına sahip olan bu özellikleri genel olarak açıkladım
ancak ilerleyen postlarımda modern C++'ın daha detaylı bazı özelliklerine gireceğim, bellek 
yönetiminden, standart kütüphanelere kadar birçok konuda daha detaylı yazılar yazacağım.

Lakin C++11 ile sadece sentaksı modernleştirmekle kalmadılar, aynı zamanda geliştiricilere 
daha güvenli, daha anlaşılır ve performans odaklı kod üretme olanağı sağlandı. 


Umarım bu ek örnekler ve açıklamalar, Modern C++’ın sunduğu yenilikleri daha iyi anlamanıza yardımcı olur.

İlerleyen postlarımda görüşmek üzere, esen kalın!


# Referanslar

Benim bu aşamada başucu kaynağı gibi kullandığım bazı kaynakları sizinle de paylaşmak isterim:

* [Effective Modern C++ - Scott Meyers ](https://www.oreilly.com/library/view/effective-modern-c/9781491908419/)

* [C++20 for Programmers: An Objects-Natural Approach](https://www.pearson.com/en-us/subject-catalog/p/c20-for-programmers-an-objects-natural-approach/P200000000211/9780136905660)

* [Modern C++ for Absolute Beginners](https://link.springer.com/book/10.1007/978-1-4842-9274-7)

* [Learn C++ by Example](https://www.manning.com/books/learn-c-plus-plus-by-example)