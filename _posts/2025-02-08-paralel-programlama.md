---
layout: post
title: "Paralel Programlama 101"
date: 2025-02-10 19:42:52 +0300
categories: [programlama]
image: "2025-02-10-paralel-programlama.webp"
image_hash: "1d9326f63b4fce9436dd7c59afd364e4"
---

Yapay zeka konusu açıldığı zaman insanlar teknik altyapılarından ziyade, düşünce deneylerinden toplumsal etkisine, teknolojik değerinden uygulama alanlarında kadar pek çok konusuna değiniyor. Ben de değineceğim ama boşuna karalamayayım. Hatta özellikle Çin-Amerika Yapay Zeka Savaşı'nın Yeni Soğuk Savaş mı olacağına ayrıca gireceğim. Ancak işin matematik tabanı ve bilgisayar bilimi ayağına girildiğinde o kadar çok anlatılabilecek konu varken sadece elimize graflar verip yapay sinir ağları çizmek bence yeterli olmuyor. Ben de yazılarımda bu gibi konulara girmekten zevk alıyorum. Örneğin görüntü işleme konusunda insanlar hep yüz tespiti, nesne tanımayı anlatırken ben görüntü işlemede kullanılan metodların matematiksel temellerini (hatta zamanım genişse örnekleri ile beraber) daha fazla seviyorum. Bugün de benzer bir yazı yazacağım, bugünkü konumuz özellikle yapay zekanın hesaplama ayağına değen paralel programlama ile alakalı olacak.

Düşünün ki bir yapay zeka modelini eğitirken kullanılan veri setleri, yazıdan yazıya (text-to-text) modeller için gigabaytları buluyor, yazıdan görüntüye olan modeller ise terabaytları geçiyor. Bu hesaplama maliyeti o kadar büyük ki, bilgisayar mühendisliği okurken öğrendiğimiz klasik yöntemlerle işlemeye kalksak belki yıllar alacak. Milyar parametreli (hatta yarım trilyon parametreler bu zamanlar konuşuluyor) modelleri düşününce; gigabaytlarca veriyi ilişkilendirerek işlemeniz, ilişki matrislerini oluşturmanız ve bu veriler üzerinde trilyonlarca matematiksel işlem yapmanız gerekiyor.

İşte bu gibi büyük matematiksel işlemleri, meşhur "böl-parça yönet" stratejisiyle, şu filmlerde gördüğümüz devasa veri merkezlerinde, yüzlerce işlemcinin eş zamanlı çalıştığı sistemlerde; hatta kendi bilgisayarımızda oyunların Ray Tracing özelliğinde bile, paralel hesaplama yöntemleriyle işlemciye maliyetli hesaplamaları dağıtarak gerçekleştiriyoruz.

Paralel hesaplama, birçok hesaplama veya işlemin aynı anda gerçekleştirilebilmesine imkan sağlayan bir yöntemdir. Görevleri ardışık (sıralı) olarak yerine getirmek yerine, problemi daha küçük, bağımsız (veya yarı-bağımsız) alt görevlere bölerek bunların aynı anda, birden fazla işlem birimi üzerinde çözebilmemizi sağlar.

Şimdi paralel hesaplamanın ne olduğu ve nasıl çalıştığına daha yakından bir bakış atalım, diğer blog yazılarından farklı olarak hemen gidip CUDA ve MPI kütüphanelerine giriş yapıyorum ayağıyla kaynak kodundaki örnek kodları bir tur da ben paylaşmadan önce; paralel hesaplamada kullanılan bazı donanımsal, matematiksel ve gerek alt seviyeli gerek üst seviyeli tekniklere değinelim.

# Paralel Hesaplama Nedir?

Paralel hesaplamanın tanımı, bir dizi hesaplamayı aynı anda gerçekleştirmek için birden fazla işlemci veya çekirdek kullanmak gibi şeklinde yapılabilir. Bu zamana kadar bilgisayar mühendisliği derslerinde gördüğümüz algoritmalarda, görevler tek tek işlendiği sıralı hesaplamalarla yapılmaktadır. Örneğin, bir grafik üzerinde potansiyel ağırlıkları hesaplamak ya da Dijkstra gibi algoritmalarda dalların kontrolünü sağlamak, sıralı hesaplamada büyük maliyet getirebilir. Bir Djikstra'yı ele alalım, en kısa yol uygulamasında her bir dallanma için en yüksek puanlı dalı seçerek hareket ederiz ancak oldu da yüksek puanlı dallarımız bizim için sonuç elde etmezse geriye dönerek çıkış şansımız bulunan olası diğer yolları tek tek gezeriz. Böyle bir graf üzerinde işlem yaparken eğer her bir dalın potansiyel ağırlığını hesaplamak istersek bu durumda karmaşıklığımız her bir graf için eleman sayısının faktoriyeli ile ifade edilecek. Diyelim ki gerçekten de Djikstra gibi algoritmik yaklaşımlarla çözemeyeceğimiz bir görev var, bu görevde beklenen potansiyel olarak iki nokta arasındaki tüm yolların adımlarının çıkarılması ve yolun toplam ağırlıklarının hesaplaması olsun. Hatta bir ileri adıma taşıyayım bu ikili nokta seçimi de graftaki tüm 2'li nokta kombinasyonları için yapılacak olsun. Bu gibi işlemleri tek bir çekirdekli bir donanımda koşturmak, O(n ^ 2 * n!) karmaşıklığa sahip bir problemi çözmeye çalışmak, veya devasa bir matris üzerinde aynı işlemleri uygulamak sıralı yapıldığı zaman çok büyük bir hesaplama maaliyeti demek.

İşte paralel hesaplamada temel amaç, aynı anda birçok işlemi gerçekleştirebilen donanımlardan yararlanarak, hesaplama görevlerini yatay eksende dağıtarak hızlanmayı sağlamaktır. Bu yaklaşım, özellikle sıralı olarak gerçekleştirildiğinde işlem süresi çok uzun olabilecek karmaşık veya büyük ölçekli problemlerin çözümünde hayati öneme sahiptir. İşlemlerin paralelleştirmesi yaklaşımı, özellikle bilimsel simülasyonlar, makine öğrenimi ve veri analitiği gibi uygulamalarda kullanılmaktadır.

# Paralel Hesaplama Nasıl Çalışır?

Paralel hesaplama daha önce belirttiğim gibi "böl-parçala-yönet" mantığına benzer olarak 5 aşamalı bir metodoloji getirir.

1. **Problemin Parçalanması:**  
   İlk adım, büyük bir problemi aynı anda yürütülebilecek daha küçük alt problemlere veya görevlere bölmektir. Bu görevler arasındaki bağımsızlık seviyesi, paralelleştirmenin etkinliğinde belirleyici rol oynar.

2. **İşlemcilere Dağıtım:**  
   Problem parçalara ayrıldıktan sonra, alt görevler çok çekirdekli CPU’lar, GPU’lar veya dağıtık sistemler gibi farklı işlem birimlerine dağıtılır.

3. **Eşzamanlı Yürütme:**  
   Her işlem birimi, kendisine atanmış görevi diğerleriyle aynı anda yürütür. Görevler bağımsız çalışabileceği gibi, ara sıra veri alışverişi veya senkronizasyon da gerekebilir.

4. **İletişim ve Senkronizasyon:**  
   Görevler arasında iletişim (örneğin MPI kullanılarak) ve senkronizasyon mekanizmaları (kilitler, bariyerler vb.) ile koordinasyon sağlanır.

5. **Sonuçların Birleştirilmesi:**  
   Tüm alt görevlerin sonuçları toplandıktan sonra, nihai hesaplama çıktısını oluşturmak üzere birleştirilir.

# Düşük Seviye Paralellik

Paralel hesaplamanın uygulanmasında, yalnızca yazılım seviyesinde görevlerin bölünmesi değil, aynı zamanda donanım düzeyinde de çeşitli paralellik teknikleri kullanılmaktadır. İşte NVIDIA'yı NVIDIA yapan Cuda gibi yazılım seviyesinde görülen bu paralellik methodlarından da öte bu tekniklerdir.

## Bit Seviyesinde Paralellik

Bit seviyesinde paralellik, tek bir komutla işlenen bit sayısını artırmaya yönelik bir yaklaşımdır. Bu teknik, erken bilgisayar dönemlerinde daha büyük kelime boyutlarının kullanılmasıyla hesaplamanın hızlanabileceği keşfine dayanır.  
Örneğin işlemci registerlarının boyutunun artırılması sayesinde, aynı anda daha fazla bit işlenebilir. 2000’li yılların başında 32-bit sistemlerden 64-bit sistemlere geçiş, bu tekniğin başarılı bir örneğidir. Grafik işlemcilerindeki 256 bit 512 bit gibi yüksek bit sayıları görmemiz GPU'ların geniş kelime boyutlarına sahip olmasını sağlamaktadır

Bit seviyesinde paralellik donanımsal olarak uygulansa da, programcılar bu durumu göz önünde bulundurarak, özellikle yoğun sayısal hesaplamalar gerektiren algoritmaların daha verimli yazılmasına katkı sağlayabilir.

## Komut Seviyesinde Paralellik

Komut seviyesinde paralellik (Instruction-Level Parallelism - ILP), farklı komutların aynı anda yürütülmesine odaklanır. Geleneksel sıralı hesaplamalarda bir komut tamamlanmadan diğerine geçilmezken, ILP sayesinde bir komutun çalışması devam ederken, diğer komutlar da paralel olarak işlenebilir.  
Bu yaklaşımın temelinde pipelining (boru hattı) yer alır. Cuda'dan alışkın olduğumuz pipelining, bir komut henüz tamamlanmadan, sonraki komutun yürütülmesi başlatılır.  
Ancak komutlar arasındaki bağımlılıklar, örneğin bir komutun sonucuna bağlı başka bir komutun varlığı, eşzamanlı yürütmeyi engelleyebilir. Bununla beraber geri beslemeli veriler gibi pipeline'a uyumsuz yapılar komut seviyesinde paralelliğin uygun olmadığı örnekler teşkil etmektedir.

## Superkelime Seviyesinde Paralellik

Superkelime seviyesinde paralellik (Superword Level Parallelism - SLP), özellikle vektör işlemcilerde karşımıza çıkar, kısa vektör registerlarında saklanan veriler üzerinde vektörleştirme işlemleri gerçekleştirir. Bu yöntem, aynı işlemin bir dizi veri üzerinde eş zamanlı olarak uygulanmasını sağlayan veri paralelliğinin bir çeşididir.  
SLP, SIMD (Tek Komut, Çoklu Veri) operasyonlarını kullanır; yani tek bir komut, birden fazla veri parçasına aynı anda uygulanır. Bu teknik, özellikle görüntü işleme, sinyal işleme gibi alanlarda büyük veri setlerine aynı işlemin uygulanmasında oldukça etkilidir. Etkili kullanım için hem donanımda (uygun vektör registerları) hem de derleyici tarafından vektörleştirme fırsatlarının belirlenmesi gerekir.

---

# Paralel Hesaplamanın Matematiği

Paralel hesaplama donanımsal olarak düşük seviyede çözümlerle beraber, karmaşık problemleri daha küçük ve bağımsız hesaplamalara ayırarak eşzamanlı olarak işlemeyi mümkün kılan matematiksel prensiplere dayanır. Temelinde, işlem hızını artırmak için birleşim (associativity), dağıtım (distributivity) ve ayrışım (decomposition) gibi özelliklerin kullanılması yatar. Görevleri birden fazla işlemciye dağıtarak, seri hesaplamaların asla ulaşamayacağı hızlarla karmaşık problemleri çözmemize olanak tanır. Bu durum yalnızca algoritma verimliliğinin teorik analizine değil, aynı zamanda bilim, mühendislik ve veri yoğun uygulamalarda kullanılan yüksek performanslı hesaplama çözümlerinin pratikte uygulanmasına da rehberlik eder.

Paralel hesaplama teknikleri, zengin matematiksel prensiplere dayanır. Veri paralelliği ile vektör işlemlerinin eşzamanlı gerçekleştirilmesi, görev paralelliği ile FFT gibi algoritmaların çok çeşitli alanlarda kullanılması ve azaltma/öncelik işlemlerinde birleşim özelliğinin kullanılması, matematiğin verimli algoritma tasarımındaki merkezi rolünü ortaya koymaktadır.

---

## 1. Paralel Azaltma (Parallel Reduction)

Paralel azaltma, bir değerler kümesini tek bir özet değere indirgeme işlemlerinde kullanılır—örneğin, bir diziyi toplamak, maksimum değeri bulmak veya çarpım hesaplamak gibi. Bu teknik, işlemin birleşim özelliğinden yararlanır.

### Örnek: Toplama Azaltma

Bir dizi \( \{x_0, x_1, \dots, x_{n-1}\} \) verildiğinde, toplam:

\[
S = x_0 + x_1 + \cdots + x_{n-1}.
\]

Paralel azaltmada, dizi çiftlere bölünür ve her çift aynı anda toplanır:

- **İlk Adım:** \( s_j^{(1)} = x_{2j} + x_{2j+1} \) şeklinde hesaplanır \( j = 0, \ldots, \frac{n}{2}-1 \).
- **İkinci Adım:** Sonuçlar toplanır: \( s_k^{(2)} = s_{2k}^{(1)} + s_{2k+1}^{(1)} \).

Bu işlem, bir ağaç yapısı boyunca devam eder ve tek bir toplam elde edilene kadar sürer. Matematiksel olarak, toplama işlemi birleşim özelliğine sahipse, toplama sırası sonucu etkilemez ve işlem \( O(\log n) \) adımda tamamlanabilir.

---

## 2. Paralel Öncelik (Prefix) İşlemleri

Paralel öncelik veya tarama (scan), bir dizinin tüm kısmi azaltmalarını hesaplayan bir işlemdir. Birleşim özelliğine sahip bir ikili işlem \( \oplus \) için, bir dizinin içeren öncelik toplamı şu şekilde tanımlanır:

\[
y_i = x_0 \oplus x_1 \oplus \cdots \oplus x_i, \quad i = 0, \ldots, n-1.
\]

Bu işlem, birçok algoritmada—özellikle yinelemeli ilişkileri çözme, histogram oluşturma veya veri sıkıştırmada—kritik öneme sahiptir. Paralel öncelik algoritması tipik olarak iki aşamada çalışır:

- **Yukarı Tarama (Reduction) Aşaması:** Toplamı hesaplamak için bir azaltma ağacı oluşturulur.
- **Aşağı Tarama Aşaması:** Her öncelik değeri, kısmi toplamların ağacın aşağısına yayılmasıyla hesaplanır.

Birleşim özelliği sayesinde, ağaç yapısı ne olursa olsun aynı sonuç elde edilir ve bu işlem \( O(\log n) \) zamanında verimli şekilde uygulanabilir.

---

## 3. Alan Bölme Yöntemleri (Domain Decomposition Methods)

Özellikle kısmi diferansiyel denklemlerin (PDE'ler) sayısal simülasyonlarında, problem alanı alt alanlara bölünür ve bu alt alanlar eşzamanlı olarak çözülebilir.

### Örnek: Sonlu Elemanlar Yöntemi (FEM)

Bir PDE, uzaysal bir alan \( \Omega \) üzerinde tanımlı olsun. Alan bölme yöntemleri, \( \Omega \) alanını \( \Omega_1, \Omega_2, \ldots, \Omega_p \) alt alanlarına ayırır. Her alt alanın PDE’si eşzamanlı olarak çözülür ve ardından alt alan çözümleri ara yüz koşulları ile birleştirilir. Matematiksel olarak, PDE şu şekilde verilir:

\[
\mathcal{L}(u) = f \quad \text{in } \Omega,
\]

Her alt problem ise

\[
\mathcal{L}(u_i) = f \quad \text{in } \Omega_i,
\]

şeklinde, uygun sınır ve ara yüz koşullarıyla tanımlanır. Yinelemeli yöntemler (örneğin Schwarz yöntemleri), çözümlerin küresel çözüme yakınsamasını sağlar.

---

## 4. Paralel Matris Ayrışımları

Birçok yüksek performanslı sayısal algoritma, LU, QR ve Cholesky ayrışımları gibi matris ayrışımlarına dayanır. Bu algoritmalar, doğrusal sistemlerin çözümünde ve özdeğer problemlerinde yoğun olarak kullanılır.

### Örnek: LU Ayrışımı

Bir \( A \) matrisi, alt üçgen matris \( L \) ve üst üçgen matris \( U \) olarak ayrışır:

\[
A = LU.
\]

Paralel ortamda matris, bloklara ayrılabilir. Her blok üzerinde yapılan işlemler (örneğin, Schur tamamlayıcısının hesaplanması) farklı işlemcilerde eşzamanlı gerçekleştirilebilir. Matris çarpımı ve ters çevirme gibi işlemlerin matematiksel özelliklerinden yararlanarak bu işlemler paralel olarak hızlandırılır.

---

# Programlada Paralellik Türleri

Şimdi gel gelelim turşu suyunun faydalarına. 

## 1. Veri Paralelliği (Data Parallelism)

Veri paralelliği, paralelliğin en basit formudur. Bu modelde, aynı işlem farklı veri parçalarına eşzamanlı olarak uygulanır. Matematiksel olarak, bir dizi veya vektör \( \mathbf{x} = (x_0, x_1, \ldots, x_{n-1}) \) verildiğinde ve her eleman için eleman bazlı bir dönüşüm \( f(x) \) hesaplanmak istendiğinde, paralel formülasyon şu şekilde olur:

\[
y_i = f(x_i) \quad \text{( } i = 0, 1, \dots, n-1 \text{ )}
\]

Örneğin, iki vektör \( \mathbf{a} \) ve \( \mathbf{b} \) verildiğinde, toplamları:

\[
\mathbf{c} = \mathbf{a} + \mathbf{b} \quad \text{ve} \quad c_i = a_i + b_i,
\]

tüm \( i \) değerleri için aynı anda hesaplanabilir. SIMD (Tek Komut, Çoklu Veri) mimarileri veya modern GPU'lar, bu tür aritmetik işlemleri binlerce çekirdekle paralel olarak yapabilir ve genel hesaplama süresini önemli ölçüde azaltır.

---

## 2. Görev Paralelliği (Task Parallelism)

Görev paralelliği, karmaşık bir problemi farklı görevler halinde ayrıştırmayı ve bu görevleri eşzamanlı olarak yürütmeyi içerir. Veri paralelliğinden farklı olarak, burada farklı hesaplamalar yapılır.

### Örnek: Paralel Hızlı Fourier Dönüşümü (FFT)

Hızlı Fourier Dönüşümü (FFT), matematiğin paralelleştirmeye yön verdiği klasik bir örnektir. Bir dizinin ayrık Fourier dönüşümü (DFT) şu şekilde tanımlanır:

\[
X_k = \sum_{n=0}^{N-1} x_n e^{-2\pi i kn/N}, \quad k = 0, \ldots, N-1.
\]

FFT algoritması, Danielson-Lanczos leması temelinde bir DFT’yi \( N/2 \) boyutlu iki alt DFT’ye ayıran bir böl ve fethet yaklaşımını kullanır:

\[
X_k = \sum_{n=0}^{N/2-1} x_{2n} e^{-2\pi i k (2n)/N} + e^{-2\pi i k/N} \sum_{n=0}^{N/2-1} x_{2n+1} e^{-2\pi i k (2n+1)/N}.
\]

Bu daha küçük dönüşümler paralel olarak hesaplanır ve sonuçlar, uygun "twiddle faktörleri" \( e^{-2\pi i k/N} \) ile birleştirilir. Bu matematiksel yapı, doğal olarak paralel uygulamalara uygundur.


## Sonuç

Bu yazıda ele alınan teknikler—veri paralelliği, görev paralelliği, paralel azaltma, paralel öncelik, alan bölme yöntemleri ve paralel matris ayrışımları—matematiksel kavramların doğrudan hesaplama performansını nasıl artırabileceğini göstermektedir. Bu tekniklerden yararlanarak, modern paralel sistemler daha önce hesaplanması imkânsız olan problemleri çözmeye devam ediyor ve bilim, mühendislik ile daha birçok alanda önemli ilerlemelere öncülük ediyor.

Özetle, paralel hesaplama:
- **Hesaplama Süresini Kısaltır,**
- **Verimliliği Artırır,**
- **Ölçeklenebilirliği Destekler,**

Bir sonraki yazımda, bu kavramların pratikte nasıl uygulandığına dair örnekler ve CUDA ile MPI’nin sunduğu imkanlara daha yakından bakacağız!

O zamana kadar, esen kalın
