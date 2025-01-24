---
layout: post
title: "Modern C++'ta Derleme Zamanı Özellikleri"
date: 2025-02-05 18:29:22 +0300
categories: [programlama]
image: "2025-02-05-modern-cpp-compile-time.jpeg"
image_hash: "3bde78199468d6affeb6539c56af87c9"
---


Önceki yazılarımda C++11'in modern C++ programlamaya getirdiği yenilikleri inceledik. Bu postlarda genel olarak dile gelen 
yeni özelliklerini incelerken çoklu iş parçacığı programlama, bellek yönetimi ve akıllı işaretçiler gibi konulara değindik.

Bu yazıda, Modern C++'ın bir nevi en derinlerine doğru inerek derleme zamanı özelliklerini keşfedeceğiz. 
`std::optional`, `std::variant`, `constexpr` gibi ifadeleri detaylıca inceleyerek derleme zamanı hususunda C++'ın sunduğu
olanakları gözler önüne sermeye çalışacağız.

Esasında derleme zamanı hesaplamalar veya derleme zamanında yapılan işlemleri pek sevmemekteyim. Çünkü bu gibi özellikler
kodun okunabilirliğini artırıyor gibi görünse bile kodun inceleme ve hata ayıklama süreçlerini zorlaştırabiliyor. Yine de
bazı durumlarda bu tür özelliklerin kullanılması nerdeyse zaruriri gibi bir şey. Bu özelliklerin kullanımını macro
kullanımına benzetebilirsiniz. Bazı durumlarda kullanmak süreçleri o kadar rahatır ki, keşke daha önce kullanmaya 
başlasaymışım dersiniz, ancak çok abanırsanız o zaman da "ulan bunu niye yazdım ben?" diye sıklıkla kendinize söversiniz

---

## Cilala ve Parlat: C++11, C++14 ve C++17

Bu noktada şuna da parantez açmamda yarar var, Modern C++ kavramı biraz esnek bir kavramdır. C++11'den sonra gelen
standartlar genel olarak Modern C++ olarak adlandırılır. Ancak C++14 ve C++17 standartları genellikle C++11'in üzerine
inşa edildiği için bu standartlar genellikle birlikte ele alınır. Bu yazıda da C++14 ve C++17 standartlarını birlikte
inceleyeceğiz. Hatta yeri gelecek C++20'yi de inceleyeceğiz. Anlayacağınız üzere işlerin bir noktada ucu kaçmaya başlayacak.
Umarım öyle olmaz :)

### 1. `constexpr` Fonksiyonları

`constexpr` fonksiyonları, ki daha öncesinde ufacık değinmiştim, derleme zamanında değerlendirilebilen ve hesaplanabilen 
fonksiyonlardır. C++11'de tanıtıldı ve C++14'te genişletildi. C++11'de `constexpr` fonksiyonları yalnızca tek bir ifade 
ile sınırlıydı. C++14, döngüler ve dallanma gibi daha karmaşık hesaplamalara izin verecek şekilde bu sınırları genişletti.

`constexpr` fonksiyonları, derleme zamanında hesaplanan değerlerle çalışır ve çalışma zamanında işlem yapmaz. Bu, performansı 
ciddi anlamda artırır ve çalışma zamanındaki yükü azaltır.

**Örnek: Bir `constexpr` Faktöriyel**
```cpp
constexpr int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; ++i) {
        result *= i;
    }
    return result;
}

int main() {
    constexpr int value = factorial(5); // Derleme zamanında hesaplanır
    std::cout << value; // 120 çıktısını verir
    return 0;
}
```

Bu kod örneğinde `factorial` fonksiyonu, derleme zamanında hesaplanan bir değer döndürür. Bu, `value` değişkeninin derleme
zamanında hesaplanmasını sağlar. Bir nevi biz bu value değişkenine 120 değerini atamış oluyoruz. Bu da demek oluyor ki, 
`factorial` fonksiyonu çalışma zamanında hiçbir işlem yapmıyor. 

Şimdi gel de bu özelliği görüp de "bu bilgisayar şeytan icadı şeylerdir" deme.

---

### 2. Template Meta Programlama

C++'ın en güçlü özelliklerinden biri olan şablonlar, derleme zamanında hesaplamalar yapmak için kullanılabilir. Esasında
Template meta programlama C++11 öncesinde var olan bir kavram olup, C++'da derleme zamanında türler ve değerler üzerinde
işlemler yapmak için kullanılan oldukça yararlı bir araçtır.

Bu şablonlar ile farklı türler üzerinde yapılacak işlemler tek bir şablon ile yapılabilir, içeriğine birden fazla türde 
nesne alabilen ve bunlara aynı işlemleri uygulayabilen sınıflar ve fonksiyonlar tek bir şablon ile yazılıp bu şablondan 
türetilerek kullanılabilir. Bu sayede kod tekrarı önlenir ve kodun okunabilirliği artar.

Standart Şablon Kütüphanesi (STL), `std::vector`, `std::map` ve `std::set` gibi genel konteynerleri uygulamak için 
şablonları yoğun şekilde kullanır.

Bunu neden anlatacağım derseniz, Modern C++ ile birlikte template meta programlama daha da güçlendi. Özellikle
C++17 ile birlikte gelen `if constexpr` ifadesi ile birlikte template meta programlama konusunda öyle uç örnekler 
görmeye başladım ki bu kadar meta programlama yapılmasının ne kadar sağlıklı olduğunu sorgulamaya başladım diyebilirim.

Neyse, şimdilik fonksiyon şablonları ve sınıf şablonlarını anlatayım, ardından variadic template'ler ve template 
meta programlama konularına gelen yeniliklere değineceğim.



#### 2.1 Sınıf Şablonları

Şablonları belirlerken biz `template` anahtar kelimesi ile türü belirtiriz. Bu türü belirtirken `typename` veya `class`
anahtar kelimelerinden birini kullanabiliriz, `class` derseniz türün bir sınıf olması gerekirken `typename` ile her 
türlü tip şablon içerisine verilir. 

**Örnek: Bir Sınıf Şablonu**
```cpp

template <typename T>
class Box {
public:
    Box(T value) : value(value) {}
    T getValue() const { return value; }
private:

    T value;
};

int main() {
    Box<int> box(42);
    std::cout << box.getValue(); // 42 çıktısını verir
    return 0;
}
```


#### 2.2 Fonksiyon Şablonları

Sınıf şablonlarının lacivertidir. Fonksiyon şablonları, fonksiyonun parametrelerinin türlerini belirlemek için `template` 
anahtar kelimesi ile tanımlanır.

```cpp
template<typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    std::cout << add(5, 3) << std::endl; // int ile çalışır
    std::cout << add(2.5, 1.5) << std::endl; // double ile çalışır
    return 0;
}
```


#### 2.3 İleri Meta Programlama Özellikleri

##### 2.3.1 Template Specialization (Şablon Özelleştirme)

Şablon özelleştirme, belirli türler için davranışı özelleştirmeye olanak tanır.

**Örnek:**
```cpp
template<typename T>
class Printer {
public:
    void print(T value) {
        std::cout << value << std::endl;
    }
};

// const char* için özelleştirme
template<>
class Printer<const char*> {
public:
    void print(const char* value) {
        std::cout << "String: " << value << std::endl;
    }
};

int main() {
    Printer<int> intPrinter;
    Printer<const char*> stringPrinter;

    intPrinter.print(42); // Çıktı: 42
    stringPrinter.print("Özelleştirilmiş Şablon"); // Çıktı: String: Özelleştirilmiş Şablon
    return 0;
}
```

##### 2.3.2 Değişken Şablonlar (Variadic Templates)

Değişken şablonlar, fonksiyonların veya sınıfların değişken sayıda şablon argümanı kabul etmesine olanak tanır.
Katlama ifadeleri olan `...` ile parametreler üzerinde işlem yapmayı basitleştirir.

**Örnek:**
```cpp
template<typename... Args>
void printAll(Args... args) {
    (std::cout << ... << args) << std::endl;
}

int main() {
    printAll(1, 2, 3, "Merhaba", 4.5); // Çıktı: 123Merhaba4.5
    return 0;
}
```

---

##### 2.3.3 Constraints (Kısıtlamalar) ve Concepts (Kavramlar)

C++20 ile beraber şablonlarda yeni bir özellik tanıtıldı. Hani biraz önce bahsetmiştim hatırlarsanız, şablonların class ve
typename anahtar kelimeleri ile belirtildiğini. İşte constraints ifadesi ile birlikte artık şablonların türlerini daha
kesin bir şekilde belirleyebiliyoruz.

Bu şekilde kesin belirlemelere biz ilgili fonksiyon için en uygun işlev aşırı yüklerini ve şablon özelleştirmelerini seçmek 
için kullanılabiliyoruz. Bu kesin belirlemeler bir nevi kısıtlamalar olup, şablon argümanlarındaki gereksinimleri, derleme
zamanında değerlendirilir ve bir kısıtlama olarak kullanıldığı bir şablonun arayüzünün bir parçası haline gelir:

**Concepts ile Örnek:**
```cpp
#include <concepts>

template<std::integral T>
T multiply(T a, T b) {
    return a * b;
}

int main() {
    std::cout << multiply(5, 3) << std::endl; // Geçerli
    // std::cout << multiply(5.0, 3.0) << std::endl; // Hata: Tam sayı türü değil
    return 0;
}
```

Örneğin biz artık multiplication yapacağımız zaman bu işlemin aritmetik bir işlem olduğunu bildiğimiz için integral 
verilerini kabul eden bir fonksiyon yazabiliriz. Bu fonksiyonu çağırırken de integral verileri kullanmamız gerektiğini
derleme zamanında anlar ve uygunsuz veri tipleri ile çağrı yaparsak derleme zamanında hata alırız.

Concepts, ise adından da anlaşılacağı üzere bir türün belirli bir kavrama uygun olup olmadığını belirlemek için kullanılır.
Bu kavramlar, türlerin belirli özelliklere sahip olup olmadığını belirlemek için kullanılır. Örneğin, `std::integral`
kavramı, tamsayı türlerini temsil eder ve `std::floating_point` kavramı, kayan nokta türlerini temsil eder.
Başka bir deyişle, şablon parametrelerini “doğal” ve kolay bir sözdizimi ile kısıtlayabilirsiniz. 

Örnek
```cpp
#include <numeric>
#include <vector>
#include <iostream>
#include <concepts>

template <typename T> 
requires std::integral<T> || std::floating_point<T>
constexpr double Average(std::vector<T> const &vec) {
    const double sum = std::accumulate(vec.begin(), vec.end(), 0.0);        
    return sum / vec.size();
}

int main() {
    std::vector ints { 1, 2, 3, 4, 5};
    std::cout << Average(ints) << '\n';                                      
}
```

Şimdi bu örnekle üstteki örnek arasında ne değişti de concepts kullanımı ile birlikte daha güçlü bir yapıya sahip oldu
diye düşünebilirsiniz. Ben de öyle düşünüyorum, :) Concepts bu noktada bir nevi şablon türlerini kısıtlarken daha okunaklı
ve daha özelleştirilebilir bir yapıya sahip olmamızı sağlıyor. 

### 3. Opsiyonel Parametreler: `std::optional` 

`std::optional`, bir değerin var olup olmadığını temsil etmenin güvenli bir yolunu sağlar. Ham işaretçiler veya özel 
değerler kullanma ihtiyacını ortadan kaldırır.

**Örnek: Boş Olabilir Bir Değer Döndürmek**
```cpp
#include <optional>
#include <iostream>

std::optional<int> findEven(int num) {
    return (num % 2 == 0) ? std::make_optional(num) : std::nullopt;
}

int main() {
    auto result = findEven(5);
    if (result) {
        std::cout << "Bulundu: " << *result;
    } else {
        std::cout << "Bulunamadı";
    }
    return 0;
}
```

Şimdi bu noktadaki örnek Rust programlama dilindeki Option tipine benziyor. Bu tip, bir değerin var olup olmadığını
belirtmek için kullanılır. Eğer bir değer varsa bu değeri döner, yoksa None döner. Bu sayede bir fonksiyonun dönüş değerinin
boş olabileceğini belirtmiş oluruz. 

---

### 4. `std::variant`: Union'lara Daha Güvenli Alternatif

`std::variant`, bir değişkenin birden fazla türden birini güvenli bir şekilde tutmasına izin veren bir türdür. Bir nevi
union'lar gibidir ama daha güvenlidir deniliyor. Peki neden daha güvenli? Çünkü union'lar tür güvenliği sağlamazlar.
Eğer bir union içerisindeki türü yanlış bir şekilde okumaya çalışırsanız bu durumda tanımsız davranışlar oluşabilir.
`std::variant` ise bu tür durumları engellemek için derleme zamanında bir takım kontroller yapar ve eğer yanlış bir
tür okumaya çalışırsanız programınız derleme zamanında hata verir.

**Örnek: `std::variant` Kullanımı**
```cpp
#include <variant>
#include <iostream>

int main() {
    std::variant<int, double, std::string> value;
    value = 42;
    std::cout << std::get<int>(value) << std::endl;

    value = 3.14;
    std::cout << std::get<double>(value) << std::endl;

    value = "Merhaba";
    std::cout << std::get<std::string>(value) << std::endl;

    return 0;
}
```
---

### 5. Yapılandırılmış Bağlantılar (Structured Bindings)

Bu özellik, bir yapı (struct), sınıf (class), dizi (array), veya std::tuple gibi bir veri yapısının bileşenlerini 
kolayca ayrı değişkenlere ayırmak için kullanılır. Python'vari bir şekilde bir veri yapısını parçalayarak, içindeki
 bileşenlere bir dizi yeni değişken olarak erişim sağlamak için oldukça güzel bir çözümdür kendisi. Bunu yaparken de 
 `auto` anahtar kelimesi kullanılır ve değişkenler köşeli parantezler [] içine yazılır.


**Örnek: Bir Pair'i Ayırmak**
```cpp
#include <tuple>
#include <iostream>

int main() {
    std::pair<int, std::string> data = {42, "Cevap"};
    auto [number, text] = data; // Pair'i ayır
    std::cout << number << ", " << text << std::endl;
    return 0;
}
```

**Örnek: Bir Tuple'ı Ayırmak**
```cpp

std::tuple<int, double, std::string> getValues() {
    return {42, 3.14, "Hello"};
}

int main() {
    auto [x, y, z] = getValues(); // Tuple parçalama
    std::cout << "x: " << x << ", y: " << y << ", z: " << z << '\n';
    return 0;
}
```


---

### 6. Başlatıcılarla `if`

Son olarak yaşam döngülerini incelerken aklıma gelen şu konudan bahsetmek istedim. Hatırlarsınız `for` döngüleri için 
başlatıcılar bulunuyor, hatta bu başlatıcılar `range-based for loops` konusunda auto olarak da atanabiliyor. 
Artık C++17 ile birlikte, bir `if` veya `switch` ifadesinin içinde doğrudan değişken başlatmaya olanak tanır.

**Örnek: Basitleştirilmiş `if` İfadesi**
```cpp
#include <map>
#include <iostream>

int main() {
    std::map<int, std::string> data = {{1, "Bir"}, {2, "İki"}};
    if (auto it = data.find(2); it != data.end()) {
        std::cout << "Bulundu: " << it->second;
    } else {
        std::cout << "Bulunamadı";
    }
    return 0;
}
```

---

Her C++ postunda biraz daha derinlere inmeye çalışıyorum bir yandan da tekerrürden kaçınmaya çalışıyorum. Umarım bu
yazıda Modern C++'ın derleme zamanı özelliklerini anlatırken sizi sıkmamışımdır. Sonraki yazılarımda hayal ettiğim 
dilde gelen hata yakalama özelliklerine girmek, tabi STL Kütüphanesi'ni daha detaylı inceleyeceğim ki hatrı kalmasın, 
bir ara da `Concepts` ve `Constraints` konularına daha detaylı bir şekilde değineceğim, araya da `Couroutines` ve
`Modules` konularını sıkıştırırım.

Şimdilik hoşça kalın, sağlıcakla kalın...