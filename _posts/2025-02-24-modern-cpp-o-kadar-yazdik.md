---
layout: post
title: "E O Kadar Yazdık: Modern C++'ın Hata Yakalama ve Ayıklama Yetenekleri"
date: 2025-02-24 20:46:12 +0300
categories: [programlama]
image: "2025-02-24-modern-cpp-o-kadar-yazdik.png"
image_hash: "28b5e972255de1398b3d657915d420e8"
---

Şimdi bu noktaya kadar hep yeni eklenen özelliklerinden bahsettik lakin şimdiye kadar olan kısımlarda hep yazmaya odaklandık, ancak bilirsiniz ki geliştirilerin hayat döngüsü 24 saatten oluşur; 3 saati kodu yazmak, 21 saati ise kodu okumak, anlamak ve hataları düzeltmekle geçer.

## Hata Yakalama

C++'ın hata yakalama yetenekleri, özellikle de modern C++ ile birlikte oldukça gelişti. Modern C++'da, hem mantık 
hatalarını, hem de çalışma zamanı hatalarını raporlamanın ve işlemenin tercih edilen yolu `exceptions` kullanmaktır. 

C tarzı programlamada ve özellikle gömülü programlamada, hata raporlama genellikle bir fonksiyonun belirli bir hata kodu
veya durum kodu döndürmesiyle ya da her fonksiyon çağrısından sonra çağıranın isteğe bağlı olarak alabileceği global bir
değişkenin ayarlanmasıyla yönetilir. Normalde pek çok standartta (örneğin JSAF-AV, MISRA-C) bu tür bir hata raporlama
yöntemleri önerilir. Ancak bu tür hata yakalamada, hatayı tanıyıp uygun şekilde yanıt vermek çağıranın sorumluluğundadır.
Eğer çağıran hata kodunu açıkça ele almazsa, program uyarı vermeden çökebilir veya hatalı verilerle çalışmaya devam edip
yanlış sonuçlar üretebilir. Bunun sıkıntılarını sıklıkla çeken birisi olarak aptalca çalışmasındansa bir programın doğru
şekilde çökmesini tercih ederim. Ancak gelin görün ki her zaman isterler sizin yelkeninizi şişirmez, neyse, konumuza 
dönelim.

Bir hata bu şekilde `exceptions` yolu ile elde edildiğinde, kod size bu hata durumunu tanımaya ve ele almaya zorlar. 
Ele alınmayan hatalar programın yürütülmesini durdurur. Bir diğer faydası hata, hatayı ele alabilecek noktaya kadar çağrı 
yığını boyunca iletilir. Ara fonksiyonlar istisnayı iletebilir; diğer katmanlarla koordinasyon kurmaları gerekmez. Böylece 
hataya sebebiyet veren fonksiyonun hata durumunu ele alacak bir fonksiyon olup olmadığından endişe etmeye gerek kalmaz.
Hata yakalandıktan sonra sonra, hata yığını çözme mekanizması kapsamda olan tüm nesneleri iyi tanımlanmış kurallara göre 
yok etmenize olanak tanır, gerekli olduğu durumda ise o noktadaki yığını restore edebilmenizi sağlayacak mekanizmalar 
geliştirebilmenize imkan sağlar.
Ancak hepsinden de önemlisi, hata tespiti ve ele alınmasının ayrılmasını sağlar ki, bu da hatayı tespit eden kod ile hatayı 
ele alan kod arasında net bir ayrım sağlar.

Bu tip hataların raporlanması için `throw` anahtar kelimesi kullanılır ve bu hataların işlenmesi için `try-catch`
blokları kullanılır. Yani başka programlama dillerindeki mekanizmalara aşişk iseniz, C++'daki `exceptions` mekanizması
size oldukça tanıdık gelecektir.

```cpp

#include <iostream>
#include <stdexcept>

void foo() {
    throw std::runtime_error("Bir hata oluştu!");
}

int main() {
    try {
        foo();
    } catch (const std::runtime_error& e) {
        std::cerr << "Hata: " << e.what() << std::endl;
    }
}

```

Yukarıdaki örnekte `foo` fonksiyonu bir hata fırlatıyor ve bu hata `main` fonksiyonunda yakalanıyor. `catch` bloğu ile
hata yakalanıyor ve `e.what()` metodu ile hata mesajı ekrana yazdırılıyor. Bir parantez açayım uygun bir catch bloğu 
tarafından yakalanmayan hatakar, std::terminate çağırır ve programı sonlandırır. 

Burada gördüğünüz std::runtime_error sınıfı, stdexcept başlık dosyasında tanımlanmış bir sınıftır. Bu sınıfın bir
alt sınıfı olan std::exception sınıfı, hata sınıflarının temel sınıfıdır ve gerekli görülmesi halinde kendinize ait hata
sınıflarıınızı std::exception sınıfından türetmeniz tavsiye edilir. Lakin ille de türetmek zorunda değilsiniz, C++'ta 
herhangi bir hata objesi oluşturarak hata yakalama yapabilirsiniz; ancak, doğrudan veya dolaylı olarak std::exception'dan 
türeyen bir hata mesajı oluşturmanız şiddetle önerilir.

Bir diğer önemli nokta ise C++'ta, bir hata yakalandığında tüm kaynakların serbest bırakılmasını sağlamak için `finally` 
bloğu gerekmez. Çünkü kaynak edinimi ve başlatmalar (RAII) idiomu ile ele alınır ve akıllı işaretçiler kullanarak kaynak 
temizleme için gerekli işlevselliği sağlar. Bu da bizi en başından itibaren ham işaretçiler ve C tarzı bellek yönetiminden 
uzak durmaya iten bir diğer sebeptir.


## assert ve static_assert 

`assert` fonksiyonu, programın belirli bir koşulu sağlaması gerektiğini belirtir. Eğer koşul sağlanmazsa, programın
çalışmasını durdurur. Genellikle çalışma zamanında bu şekilde hatalı bir değerin kırıcı bir hata oluşturduğunu düşündüğünüz
durumlarda `assert` kullanmak mantıklı gibi görünse de tekrar belirttiğim gibi C++'ta `exceptions` mekanizmasının belirli 
başlı bazı dezavantajları vardır, örneğin assert fonksiyonu çalışma zamanında programın çalışmasını durdurur ve bu durumda
sizin 7/24 çalışan bir programınız varsa, bu durumda programınızın çalışmasını durdurmak yerine, hata durumunu ele alarak
programınızın çalışmasını sürdürmek isteyebilirsiniz. Lakin bu yapı özellikle test aşamasında oldukça faydalıdır.

```cpp

#include <cassert>

int main() {
    int x = 5;
    assert(x == 5);
    assert(x == 6);
}

```

Bu mantık denediğim gibi çalıştığında, programın çalışmasını durdurur ve bir hata mesajı verir. Ancak bunu bir üst aşamaya taşıyalım,
örneğin bir kod yazıyorsunuz ve daha derleme aşamasında bazı kontrolleri yapmak ve bazı koşulların sağlanıp sağlanmadığını
test etmek istiyorsunuz. İşte bu durumda kodunuzun güvenlirliğini sağlamak için `static_assert` oldukça güzel bir seçenek olarak
Modern C++'da tanıtıldı. 

`static_assert` fonksiyonu, derleme zamanında belirli bir koşulun sağlanıp sağlanmadığını kontrol eder. Eğer koşul sağlanmazsa,
derleyici hata verir ve programın derlenmesini durdurur. Bu sayede, programın çalışma zamanında hata yapma olasılığınızı
minimize eder

```cpp

#include <type_traits>

int main() {
    static_assert(std::is_integral<int>::value, "int bir integral tür değil!");
    static_assert(std::is_integral<float>::value, "float bir integral tür değil!");
}

```

Yukarıdaki örnekte, bir miktar `type_traints`e giriyoruz ancak halihazırda onu ayrıca anlatacağım. Ancak burada önemli olan
şey, `static_assert` fonksiyonunun derleme zamanında belirli bir koşulun sağlanıp sağlanmadığını kontrol etmesidir. 

Bunu özellikle altta kullandığım kütüphanelerin sürümlerinin kontrol edilmesi, içerideki deklarasyonların (ki metaprogramlamada
bu durum oldukça kritik) kontrol edilmesi aşamalarında kullandığım bir mekanizma.


## Hata Ayıklama

Bu noktada biraz daha ileriye gidip dumanı üzerinde tüten özelliklerden `stack_trace` ve `<debugging>` kütüphanesine değineceğim.

`stack_trace` fonksiyonu, programın çalışma zamanında çağrı yığınındaki fonksiyonların listesini almanızı sağlar. Bu fonksiyon
genellikle debuggerların eriştiği gibi bir fonksiyonun çağrı yığınındaki fonksiyonların listesini almanızı sağlar.  

```cpp

#include <iostream>
#include <stacktrace>


void handler(int sig) {

  std::cout<< "Error: signal "<< sig;

  std::cout << std::stacktrace::current() << '\n';
  exit(1);
}

void func_br() {
 int *foo = (int*)-1;  // yapay bir hata oluşturuyoruz, bir işaretçiye geçersiz bir adres atıyoruz
  printf("%d\n", *foo);    // hata burada oluşacak
}

void func_ar() { func_br(); }
void func_a() { func_ar(); }


int main(int argc, char **argv) {
  signal(SIGSEGV, handler);   // SIGSEGV sinyali için bir işleyici ayarlıyoruz
  func_a(); // ve bizim hata oluşturduğumuz fonksiyonu çağırıyoruz
}
````

Yukarıdaki örnekte, hata çıktıktan sonra `stack_trace` fonksiyonunu kullanarak programın çalışma zamanında çağrı yığınında hataya
sebep olan fonksiyonları listeleyebiliriz. Bu fonksiyon, programın çalışma zamanında çağrı yığınındaki fonksiyonların listesini almanızı
sağlar. 

Bunu geçmişte Linux ve MacOS için `backtrace` fonksiyonu ile yapabiliyorduk, ancak derleyici seviyesinde bu işlemi yapabilmek kodun
taşınabilirliğini arttırdığı için bu gibi özelliklerin standarta entegre edilmesi oldukça değerli bence.


Gelgelelim `debugging` kütüphanesine, kendisiprogramın çalışma zamanında hata ayıklama yapmanızı sağlar. Geleneksel olarak, programın
çalışma zamanında breakpoint koymak için editörünüzde kırmızı bir nokta koyarak yaptığınızı koda taşıyarak, programın çalışma zamanında
hata ayıklama yapmanızı sağlar. Bununla beraber çalışma zamanında bir debugger olup olmadığını kontrol eder ve eğer varsa, programda debugger
kullanırken tetiklenen özel durumları ele almanızı sağlar. 

```cpp

#include <iostream>
#include <debugging>

void foo() {
    if(std::debugging::is_debugger_attached())
        std::cout << "Debugger is attached" << std::endl;

    std::debugging::breakpoint();
}

int main() {
    foo();

}

```

## Beklentisel Değerler

Hani bir şarkı var ya, `bekledim de gelmedin sevdiğimi bilmedin` diye, bu özellik işte bilmemize sağlıyor. Beklentisel değerler, bir
fonksiyonun geri dönüş değerini kontrol etmek için kullanılır.

`std::expected`, bir değeri veya bir hatayı temsil etmenin standart bir yolunu sağlar. Bu, istisnalara (exceptions) ve std::optional'a 
bir alternatiftir ve hataların açıkça yönetilmesini kolaylaştırır. Ve hep bahsettiğim istisnalar yerine açık hata kontrolünü teşvik
ederek kullanmaktan korktuğumuz hata oluşturma ve assertion yapılarından bizi bir miktar azade eder. Örneğin


```cpp
#include <expected>
#include <iostream>

std::expected<int, std::string> divide(int a, int b) {
    if (b == 0) {
        return std::unexpected("Sıfıra bölme hatası");
    }
    return a / b;
}

int main() {
    auto result = divide(10, 2);
    if (result) {
        std::cout << "Sonuç: " << *result << std::endl;
    } else {
        std::cout << "Hata: " << result.error() << std::endl;
    }

    auto errorResult = divide(10, 0);
    if (errorResult) {
        std::cout << "Sonuç: " << *errorResult << std::endl;
    } else {
        std::cout << "Hata: " << errorResult.error() << std::endl;
    }

    return 0;
}
```

Yukarıdaki örnekte, `std::expected` fonksiyonunu kullanarak bir fonksiyonun geri dönüş değerinin çalışma zamanında kontrol edilmesini
sağlayabiliriz.

## **6. `std::source_location`: Hata Ayıklamayı Kolaylaştırma**

C++20 ile tanıtılan `std::source_location`, kaynak kodun konumu hakkında derleme zamanı bilgisi sağlar. Bu, günlükleme ve hata ayıklama için kullanışlıdır. Normalde derleyiciler ile beraber gelen `__FILE__` ve `__LINE__` işlemlerini derleyici bağımsız bir hale getirir. Manuel çaba gerektirmeden hassas hata ayıklama bilgisi sağlar. Büyük kod tabanlarında hata raporlamayı basitleştirir.


```cpp
#include <iostream>
#include <source_location>

void log(const std::string& message, const std::source_location& location = std::source_location::current()) {
    std::cout << location.file_name() << ":" << location.line() << " - " << message << std::endl;
}

int main() {
    log("Bu bir hata ayıklama mesajıdır.");
    return 0;
}
```


## Bir Yazıyı Daha Arkamızda Bırakırken

Kısa ve öz yazdığım bu yazıya geri dönüp baktığımda hata ayıklama özelliklerini ki bunlar biraz yeni gelen özelliklerdir, değindim, ancak bu özellikleri anlatmak ve C++'ın güçlü ve ayakları yere basan idiomlara sahip bir dil olarak gelişmeye devam ettiğini göstermek istedim. Umarım bu isteğimi ilerleyen yazılarıma da uygun bir şekilde devam ettirebilirim.

Hadi, bir sonraki yazıda görüşmek üzere, esen kalın.
