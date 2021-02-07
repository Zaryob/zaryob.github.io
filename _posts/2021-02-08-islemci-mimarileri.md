---
layout: post
title: "Bilgisayar Mimarileri: RISC ve CISC Makineleri"
date: 2021-02-08 09:08:18 +0300
categories: ['genel', 'elektronik']
image: "2021-02-08-islemci-mimarileri.jpg"
image_hash: "f0de082e28da5a9e3ff7afb2ee4decc2"
---

  

Bilgisayar işlemcileri bilgisayarın hesaplama ve kontrol aygıtıdır.Bilgisayar sistemi dediğimiz yapı; girdi, çıktı, bellekleme, hesaplama ve kontrol aygıtlarından oluşan bir elektronik devresidir. Bilgisayar sistemlerinde hesaplama ve kontrol işleminin yapıldığı entegre devreye işlemci ismi verilir.
70'li ve 80'li yıllarda üretilen bilgisayarlarda işletim sisteminin doğrudan assembly programlama dilinde kodlanması yapılırdı. CISC bir işlemcinin doğrudan assembler ile programlanması insanlar için çok daha kolaydı. Ayrıca bu programlamayı yaparken diğer işlemci mimarilerine göre daha kısa komutla yerine getirmek ve silikon bazında işlemcileri özelleştirebilmek mümkündü.
80'lerin ortasında internetin Amerika'da yaygınlaşması ile birlikte Unix ve diğer derlemeli diller ile yazılmış çekirdeklerin popülerleşmesi ile CISC işlemcilerinin o dönemdeki hantallığını azaltmak amacıyla, az miktarda ve işlemcinin kullanım alanına uygun olarak daha doğru özelleştirilmiş komut kiti ile hem işlem zamanı daha kısa hem enerji tüketimi daha optimize işlemciler oluşturma tasarısı ortaya atıldı. Ve bu tasarı altında oluşturulan RISC terimi ilk David Patterson tarafından önerildi.
Berkeley Üniversitesi  RISC tarasını  projelendirerek 1982'de CISC tasarımlarında ortalama 100.000 transistöre karşılık sadece 44.420 transistörden oluşan ve 32 komut içeren RISC-I işlemcisini teslim etti . RISC-I çipi dönemindeki tüm CISC bazlı işlemcilerden daha az kaynak tüketerek daha optimize çalışıyordu. Peşinden 1983 yılında 40.760 transistör, 39 komut içeren ve RISC-I'den üç kat daha hızlı RISC-II geldi. (kaynak)
Stanford Üniversitesi de, 1981 yılında John L. Hennessy öncülüğünde RISC tabanlı işlemci projesi geliştirdi ve 1984 yılında satışa ahzır MISC ve R2000 işlemcilerini üretti.
Yakın zamanda ise 2010 yılında yine Berkeley Üniversitesinde ortaya atılan ve 2014'te ilk üretilmiş işlemcilere kavuşan RISC-V projesi ile güncel ihtiyaçlara cevap veren ilk açık kaynak RISC işlemcisi hayata geçti.
Günümüzde AMD ve Intel gibi üreticiler CISC mimari işlemciler üretirken; ARM Holding, STMicrocontrollers, Broadcom Microcontrollers ve Kendrayte gibi üreticiler de RISC mimarisi işlemciler üretmekte. Her ne kadar günümüzdeki Intel ve AMD işlemciler de aslında CISC işlemcilerdir desek de, işlemcinin altyapısında karışık komutları daha basit RISC mimarisi komutlarına benzeri sayılabilecek parçalara dönüştürülerek işlenirler.


---

İki Mimarinin Detayları
Gelgelelim iki mimarinin detaylarına.
CISC (Complex Instruction Set Computing) Mimarisi
CISC tabanlı AMD EPYC işlemcisiCISC, veya karmaşık bir komut seti bilgisayarı, tek komutların birkaç düşük seviyeli işlemi (örn. Bellekten bir yükleme, bir aritmetik işlem ve bir bellek deposu) yürütebildiği veya çok adımlı işlemler yapabildiği bir bilgisayardır. CISC komutları, bilgisayarın işlemcisinin komutlarının tipini ifade eder. Komutları karmaşık olan bir işlemci de her komutun işlemci tarafından decode edilmesi uzun sürer ve devrenin bu biçimi silikon üzerinde de fazladan yer kaplar. RISC işlemciler komut sayısını azaltarak, performans kazanmayı hedeflemişlerdir.
CISC bir işlemcinin tek bir komut ile yaptığı işlem, RISC bir işlemci ile 2 ya da daha fazla komutla yerine getirilebilmektedir. Ama yine de RISC mimarisinin avantajları ile bu işlemciler aynı saat frekansları ile daha yüksek işlem gücüne sahip olabilmektedirler. 
Bir diğer yandan CISC farklı komut setlerine sahiptir. CISC mimarilerinin örnekleri, bellek yükleme ve depolama işlemlerinin aritmetik talimatlardan ayrılmadığı karmaşık ana bilgisayarlardan basit mikro denetleyicilere kadar pek çok alanda kullanıldığı için çok farklı komut setleri vardır. Ve bazı karmaşık CISC sistemleri de içerisinde RISC benzeri makineleri bulundurur. Bu özel olarak bazı işlerin donanım katmanlı optimizasyonunu sağlamaktadır (ECDSA algoritmaları gibi algoritmalar pek çok algoritmada temel olduğu için donanım katmanlı hızlandırma işleri kolaylaştıracaktır). Bu durum bazı işlemciler için tanımlama farkları oluşmasına neden olmuştur. Örneğin, 6502 ve 6809, karmaşık adresleme modlarına ve ayrıca RISC ilkelerinin aksine bellek üzerinde çalışan aritmetik komutlara sahip olmalarına rağmen, RISC benzeri olarak tanımlanmıştır.


RISC (Reduced Instruction Set Computing) Mimarisi
SiFive RISC-V işlemcisiKüçültülmüş bir komut seti bilgisayarı, CISC'e kıyasla daha kısa komut setine sahiptir. Bilgisayar teknolojileri ilk dönemde küçük ve basit komut kümeleri üzerine tasarlanıyordu. Bunun birincil sebebi daha ucuz ve daha küçük bilgisayarlar üretmekti. Sayısal donanımlar ucuzlamaya başlayınca bu yapı hantal kalmaya başlandı. Bazı bilgisayarlarda 100 ve hatta 200'ün üzerinde komut kümesi kullanılmaya başlandı. Bu da bilgisayarlarda daha yoğun ve daha fazla veri tipi kullanılabilmesine imkan sağlıyordu. Ve bilgisayara çok fazla optimize kip üretilmesine imkan sağlıyordu. RISC işlemcileri komut setinin çok sayıda komut ve  düzenli bir komut ardışık düzeni ile optimize edilmiş olması sayesinde komut başına düşük sayıda saat döngüsüne (CPI) izin verir. 
Assembly Bazında İki Mimarinin Karşılaştırılması
Yüksek düzeyli dillerde yazılmış olan yazılımların CISC makinelerde derlenmesi ile elde edilen kodlar incelendiğinde:
Çok sayıda atama işlemi (A=B) yapılmaktadır.
Erişilen verilerin çoğunlukla yerel ve skaler (dizi ve matris olmayan) verilerden oluşur.
Makine dili yazılımlarda en büyük yükünü çağrılarının oluşturur.
Çağrıların büyük çoğunluğunun 6 veya daha az parametre ve yerel değişken almaktadır.
Bir diğer yandan çağrı derinliği maksimum 8/10 katmandan oluşmaktadır.



 RISC işlemcilerinde ise
Daha az sayıda komut içeren kodlar bulunmaktadır.
Daha az sayıda adresleme kipi kullanılmıştır.
Sabit uzunlukta komut yapısı (komut çözme işi kolaydır)
Doğrudan bellek üzerinde işlem yapan komutlara sahip olmayıp, işlemlerin iç saklayıcılarda yapılmaktadır.
Belleğe sadece okuma/yazma işlemleri için erişilebilir.
Tek çevrimde alınıp yürütülebilen komutlar (komut işhattı sayesinde) kodun büyük kısmını oluşturmaktadır.

Bu temel noktalar CISC ve RISC'in kullanım alanları için belirleyicidir
Kabaca İki Mimarinin Karşılaştırması
RISC (Hard-wired Control Unit)
Hızlı
Ucuz
Yeniden Dizayn Zor
Daha fazla Komut (instruction)
Daha fazla saklayıcı bellek (register)
Kesişimli saklayıcı penceresi (overlapped register window)
Derleyici desteği

CISC (Microprogrammed Control Unit)
Yavaş
Pahalı
Esnek
Daha az komut
Daha az saklayıcı bellek
Daha az sayıda adresleme kipi
Sabit uzunlukta komut yapısı (komut çözme işi kolaydır)
Doğrudan bellek üzerinde işlem yapan komutlara sahip olmayıp, işlemlerin iç saklayıcılarda yapılması
Belleğe sadece okuma/yazma işlemleri için erişme
Devrelendirilmiş (hardwired) donanım birimi
Tek çevrimde alınıp yürütülebilen komutlar (komut işhattı sayesinde)

RISC'in ve CISC'in Avantaj ve Dezavantajları
CISC Avantajları:
Komut setinin yapısını değiştirmeye gerek kalmadan çipe yeni komutlar eklemek kolaydır. 
Bu mimari, ana belleği verimli kullanmanıza olanak tanır.
Derleyici, CISC örneğinde olduğu gibi çok karmaşık olmamalıdır. 
Komut setleri, yüksek seviyeli dillerin yapılarına uyacak şekilde yazılabilir. 

RISC Avantajları: 
Karmaşık ve verimli makine talimatları içerir.
Bellek yönetimi için kapsamlı adresleme yetenekleri sunar. 
RISC işlemcilerle karşılaştırıldığında nispeten komut setini azaltmanıza yardımcı olur.
Bellek işlemleri için sınırlı adresleme şemaları sunar 

CISC Dezavantajları:
Bir işlemci ailesinin önceki nesilleri çoğunlukla her yeni sürümde bir alt küme olarak yer alıyordu.
 Bu nedenle, komut seti ve çip donanımı her nesil bilgisayarla karmaşık hale gelir. Farklı komutlar tarafından alınan saat süresinden dolayı makinenin performansı yavaşlar asla benzer olmayacaktır. 
Daha fazla transistöre ihtiyaç duyduklarından daha büyüktürler

RISC Dezavantajları: 
RISC işlemcilerinin performansı programcıya veya derleyiciye bağlıdır. Derleyici, CISC kodunu bir RISC koduna dönüştürürken önemli bir rol oynar.
RISC işlemcilerin çipin üzerinde büyük bellek önbellekleri vardır. 
RISC mimarisi, yonga üstü donanımın sürekli olarak yeniden programlanmasını gerektirir.