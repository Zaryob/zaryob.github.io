---
layout: post
title: "STL Madenleri: Modern C++'ın Derinliklerine Doğru Bir Kazı"
date: 2025-02-18 20:46:12 +0300
categories: [programlama]
image: "2025-02-18-cpp-madenleri.jpeg"
image_hash: "3bde78199468d6affeb6539c56af87c9"
---

Neden STL'i bir maden olarak adlandırdığım ile giriş yapmak istiyorum. STL, bir dilin en güçlü olan yanlarından birisidir.
Bir dilin beraberinde getirdiği özellikleri en güzel şekilde içeren, geniş ve güçlü bir araç setidir. Bu araç setini bir 
nevi demir cevheri çıkan bir maden gibi görebilirsiniz. Önemli olan çıkan madeni nasıl işleyeceğinizdir işte bu sebeple 
STL özelliklerini bilmek dili kullanmak açısından oldukça mühimdir.

STL içerisinde farklı yeteneklere sahip parçalar bulunur. Örneğin işletim sistemi bazlı kodlar, istemci-sunucu iletişimi 
için kodlar, protokol implementasyonları, thread yapıları, algoritma implementasyonları ve konteynırlar bu parçalar 
arasında sayılabilir.

Konteynerler, C++ Standart Kütüphanesi'nin temel taşlarından biridir. Kompleks görevleri basitleştiren güçlü ve esnek veri 
yapıları sağlarlar. Modern C++ (C++11 ve sonrası), geleneksel konteynerlerin yeteneklerini artırmış ve belirli kullanım 
durumlarına özel yeni konteynerler tanıtmıştır.

Çoğumuz `std::vector`, `std::string` ve `std::map` gibi popüler bileşenlere aşinadır. Ancak pek çok farklı bileşenleri ile 
C++'ta neredeyse başka hiçbir kütüphaneye ihtiyaç duymaksızın pek çok işi başarabilirsiniz.

Bu yazıda, genellikle göz ardı edilen ancak mühim gördüğüm programlama görevlerinizi kolaylaştırabilecek Standart Kütüphane 
araçlarını inceleyeceğiz.

---
### **1. Modern Özelliklere Sahip Klasik Konteynerler**

`std::vector`, `std::list` ve `std::map` gibi geleneksel konteynerler, on yıllardır C++'ın yükünü taşımaktadır. Modern C++ 
bu konteynerlere, daha güçlü ve verimli olmalarını sağlayan yeni özellikler kazandırmıştır.

#### **1.1 Mevcut Konteynerlerdeki İyileştirmeler**
- **`emplace` Metotları**: C++11 ile tanıtılan `emplace`, elemanların yerinde oluşturulmasına olanak tanır ve gereksiz 
kopyalamaları önler.

    ```cpp
    #include <vector>
    #include <string>

    int main() {
        std::vector<std::string> vec;
        vec.emplace_back("Merhaba, Dünya!"); // Doğrudan yerinde oluşturuldu
        return 0;
    }
    ```

- **Taşıma Semantikaları**: Tüm standart konteynerler artık taşıma işlemlerini destekler, böylece veri aktarımında ek yük 
azalır.



#### **1.2 Yeni Üye Fonksiyonları**
- **`try_emplace`**: C++17 ile tanıtılan bu özellik, var olan bir elemanı güncellemeden yeni bir eleman ekleme işlemini 
birleştirir.

    ```cpp
    #include <map>
    #include <string>

    int main() {
        std::map<int, std::string> myMap;
        myMap.try_emplace(1, "İlk Eleman"); // Eğer anahtar yoksa ekler
        myMap.try_emplace(1, "Yoksayılır"); // Anahtar mevcut olduğu için eklenmez
        return 0;
    }
    ```

---

### **2. Modern C++'ta Yeni Konteynerler**

Modern C++'ta, belirli ihtiyaçlara yönelik yeni konteynerler tanıtılmıştır.

#### **2.1 `std::array`**

- STL konteyner benzeri davranış sergileyen sabit boyutlu bir dizi oluşturmaya yarar.

    ```cpp
    #include <array>
    #include <iostream>

    int main() {
        std::array<int, 3> arr = {1, 2, 3};
        for (auto x : arr) {
            std::cout << x << " ";
        }
        return 0;
    }
    ```

#### **2.2 `std::forward_list`**

Hafıza verimliliği ve ileri yönlü iterasyon için optimize edilmiş tek yönlü bağlı listedir.

    ```cpp
    #include <iostream>
    #include <forward_list>

    int main() {
        // Bir forward_list oluştur
        std::forward_list<int> flist = {1, 2, 3, 4, 5};

        // Elemanları yazdır
        std::cout << "Liste elemanları: ";
        for (int x : flist) {
            std::cout << x << " ";
        }
        std::cout << std::endl;

        // Listenin başına bir eleman ekle
        flist.push_front(0);

        std::cout << "Başına 0 eklendi: ";
        for (int x : flist) {
            std::cout << x << " ";
        }
        std::cout << std::endl;

        return 0;
    }
    ```

#### **2.3 `std::unordered_map` ve `std::unordered_set`**
- C++11 ile tanıtılan bu hash tabanlı konteynerler, `std::map` ve `std::set`'e kıyasla daha hızlı ortalama zaman 
karmaşıklığı sunar. Geleneksel map ve set yapılarında belirli bir ordering algoritması olması, ordering'e ihtiyaç duyan
işler için önem arz ederken ordering'e ihtiyaç duymayan veriler için gereksiz kaynak israfına neden olur.

Hash tablosu kullandığı için arama, ekleme ve silme işlemleri ortalama O(1) karmaşıklığa sahiptir.
Elemanlar sıralı tutulmaz. Her anahtar yalnızca bir kez kullanılabilir. Aynı anahtarla ikinci bir ekleme, mevcut değeri günceller.
Hash tablosu için varsayılan olarak std::hash kullanır, ancak özelleştirilmiş bir hash fonksiyonu da belirtilebilir.

    ```cpp
    #include <iostream>
    #include <unordered_map>

    int main() {
        // Bir unordered_map oluştur
        std::unordered_map<std::string, int> myMap;

        // Eleman ekle
        myMap["Ali"] = 25;
        myMap["Veli"] = 30;
        myMap["Ayşe"] = 28;

        // Elemanları yazdır
        for (const auto& pair : myMap) {
            std::cout << pair.first << ": " << pair.second << std::endl;
        }

        // Anahtar kullanarak bir değere erişim
        std::cout << "Ali'nin yaşı: " << myMap["Ali"] << std::endl;

        return 0;
    }
    ```

#### **2.4 `std::deque`**

- Her iki uçtan verimli ekleme ve silme işlemlerini destekleyen çift uçlu bir kuyruk.

    ```cpp
    #include <iostream>
    #include <deque>

    int main() {
        // Bir deque oluştur
        std::deque<int> dq = {1, 2, 3};

        // Elemanları yazdır
        std::cout << "Deque başlangıç durumu: ";
        for (int x : dq) {
            std::cout << x << " ";
        }
        std::cout << std::endl;

        // Başa ve sona eleman ekle
        dq.push_front(0);
        dq.push_back(4);

        std::cout << "Başa 0, sona 4 eklendi: ";
        for (int x : dq) {
            std::cout << x << " ";
        }
        std::cout << std::endl;

        // Baştan ve sondan eleman sil
        dq.pop_front();
        dq.pop_back();

        std::cout << "Baştan ve sondan eleman silindi: ";
        for (int x : dq) {
            std::cout << x << " ";
        }
        std::cout << std::endl;

        return 0;
    }
    ```


### **3. Polimorfik Bellek Kaynakları (`std::pmr`)**

C++17, standart konteynerler için özelleştirilebilir bellek tahsis stratejileri sağlayan **Polimorfik Bellek Kaynağı (PMR)** kütüphanesini tanıttı. Bu, performans açısından kritik uygulamalarda faydalıdır.

**Örnek: Özel Bellek Kaynağı ile `std::pmr::vector` Kullanımı**
```cpp
#include <memory_resource>
#include <vector>
#include <iostream>

int main() {
    char buffer[1024];
    std::pmr::monotonic_buffer_resource pool{buffer, sizeof(buffer)};
    std::pmr::vector<int> vec{&pool};

    vec.push_back(1);
    vec.push_back(2);

    for (int x : vec) {
        std::cout << x << " ";
    }
    return 0;
}
```

---


### **4. `std::filesystem`: Dosya ve Dizin Yönetimini Basitleştirme**

C++'da dosya işlemlerine dair C'ye göre daha kapsamlı araçlar bulunmaktadır. Stream yapıları, `<<` ve `>>` ile dosya yazdırma, dosya işlemlerinde kolaylık sağlayan başka yapılar halihazırda C++'ın ilk dönemlerinden beri varolan özellikler. Ancak altta hala platform bağımlı büyük bir kısım var ki bu da dizin sistemleri. 

C++17 ile tanıtılan `std::filesystem`, dosya ve dizin işlemleri için kapsamlı bir API sağlar. Platforma özgü kütüphanelere veya dosya yollarını manuel işlemeye olan ihtiyacı ortadan kaldırır, bütün platformlar için uyumlu bir dosya-dizin manüplasyon aracı sunar.

- Dosya yollarını işleme (dosya dizin yollarını standartize eder)
- Bir dosyanın/dizinin var olup olmadığını kontrol etme.
- Dosya ve dizin oluşturma
- Dosya ve dizinleri kopyalama ve taşıma
- Dosya ve dizin durumlarını ve erişimlerini ayarlama

```cpp
#include <iostream>
#include <filesystem>

namespace fs = std::filesystem;

int main() {
    fs::path dir = "ornek_dizin";

    // Bir dizin oluştur
    if (!fs::exists(dir)) {
        fs::create_directory(dir);
    }

    // Dizin içinde bir dosya oluştur
    fs::path file = dir / "ornek.txt";
    std::ofstream(file) << "Merhaba!";

    // Dizin içeriğini yinele
    for (const auto& entry : fs::directory_iterator(dir)) {
        std::cout << "Dosya: " << entry.path() << std::endl;
    }

    return 0;
}
```

---

### **5. `std::chrono`: Hassas Zaman Ölçümü**

Zaman işlemleri C++'da geleneksel C yöntemleri ile ve işletim sistemi tanımlı olarak yapılan işlemlerdi.

C++11 ile tanıtılan `std::chrono`, tür güvenli süre ve zaman noktası soyutlamaları ile zamanla ilgili işlemleri basitleştirir.

- Çalışma süresini ölçme
- Farklı zaman birimleri arasında dönüştürme
- Zamanlama ve gecikmeleri hesaplama.
- Performans kritik uygulamalar için yüksek hassasiyet sunar.
- Zaman birimi dönüşümlerini basitleştirir.

```cpp
#include <iostream>
#include <chrono>
#include <thread>

int main() {
    auto start = std::chrono::high_resolution_clock::now();

    std::this_thread::sleep_for(std::chrono::seconds(2)); // Çalışmayı simüle et

    auto end = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);

    std::cout << "Geçen süre: " << duration.count() << " ms" << std::endl;
    return 0;
}
```


---


### **6. Ranges ile Veri İşleme**

C++20’nin **Ranges kütüphanesi**, fonksiyonel tarzda dönüşümler ve filtreler için boru hattı (pipeline) tarzı sözdizimi sunar. Görünümlerle birleştirildiğinde veri manipülasyonunu basitleştirir.

```cpp
#include <ranges>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    auto squaredEvens = vec | std::views::filter([](int x) { return x % 2 == 0; })
                            | std::views::transform([](int x) { return x * x; });

    for (int x : squaredEvens) {
        std::cout << x << " "; // Çıktı: 4 16
    }
    return 0;
}
```


---


## Kütüphanelerden Modüllere Doğru Yaşanacak Olan Savrulma
Buraya kadar STL kütüphanesinin içerisini anlattıktan sonra bir sonraki yazımda modüllere değinmeden edemeyeceğim. 

Bir sonraki yazımda görüşmek üzere esen kalın.
