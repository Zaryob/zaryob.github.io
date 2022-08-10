---
layout: post
title: "Mini Mini Birler: Microservices Yapısı ve Yanlış Bilinenler"
date: 2021-10-06 12:23:43 +0300
categories: [genel, internet]
image: "2021-10-12-mini-mini-birler-microservices.png"
image_hash: "5eb48a4e2c015e8afa737e627fe75cdf"
---

Son dönemlerde okuluma dönüşümle beraber yeniden hocaların ağzından düşmeyen ve çok büyük bir nimetmiş gibi önümüze sunulan microservice mimarisini anlatmaya gerek duydum. Bu sebeple bu yazımda günahıyla, sevabıyla microservice mimarisinden bahsedeceğim ve bazı kişisel görüşlerimi size aktaracağım.

Bunu aktarırken de bazı yanlış bilinenlerden bahsederek aslında Türkiye’de insanların popüler kültür etkisi ile bu teknolojiyi nasıl yanlış yorumladığından bahsetmek istiyorum. İsterseniz başta kesin sınırları ile tanımı yapıp ardından buna bakalım.

Microservice Architecture
=========================

Microservice yapısı veya mikrohizmet yapısı büyük bir uygulamayı bir hizmet koleksiyonu olarak yapılandıran bir mimari stildir. Bir çeşit Servis Odaklı Hizmet Mimarisidir (SOA). Temelde bir microservice hizmeti birden fazla irili ufaklı hizmeti birleştirerek tek bir temel uygulama oluşturmakta kullanılır. Örneğin farklı programlama dilleri, veri tabanları, donanım ve yazılım çözümleri kullanılarak bir servisin gerektirdiği her bir hizmet ayrı ayrı oluşturularak bunlar **gevşek bağlanma** olarak adlandırılan bir yöntemle birbirine bağlanır ve eş zamanlı çalışabilir hale getirilir.

![](https://miro.medium.com/max/2000/1*MOA-XcKkT9i1TkX3Q0ox3A.png)Monolitik uygulama mimarisi

Bu aşamada çokça karıştırılan bir olgu var. Bir microservice sanılanın aksine monolitik bir uygulamadaki küçük bir bölüm değildir. Monolitik servisler genelde bütünü ile kullanıcı arayüzünden veri tabanına her şeyi içerisinde bulunduran ve denetleme işini de yine kendisi yapan bir uygulama yönetimi şeklidir.

Microservice mantığı ise bundan tamamen farklı bir yapıdır. Aslında mimarisi ve felsefesi itibariyle Unix’e de benzeyen bir mimaridir microservice mimarisi. Unix’te temel felsefe “Bir işi yapacaksan onu en iyi şekilde yap” olmuştur. Microservice altyapısında da aynı durum söz konusu. Her bir hizmet kendi alanında özelleştirilmek suretiyle hazırlanılır. Ayrıca gevşek bağlama konusunda da Unix’e benzer bir yapı sunmaktadır. Hizmetler arasındaki koordinasyon basitlik sağlamak için Unix benzeri zamanlama ve boru hatları ile yapılır. Burada tabi ki boru hatlarından kastettiğimiz iki farklı şeydir. Ya bir servisi diğerine gerçek bir veri hattı ile bağlarsınız veya Web özelinde konuşmak gerekirse her bir servis bir diğerine REST API olarak tasarlanmış bir API kullanarak bağlanır. Yani anlayacağınız üzere infrastructure konusunda microservice küçük küçük dizayn edilmiş servislerin hepsini tutan bir hizmet yapısı olarak ifade edildiği için küçük yapılardır şeklinde düşünülse de, sanılanın aksine monolitik sistemlerden daha esnek oluşu ile büyük çaplı işler için oldukça başarılı bir mimari mantığına sahiptir.

![](https://miro.medium.com/max/20000/1*u-TiVCgdJJdLPKnWj_iruA.png)Mikroservice Architecture

Sonuç olarak mikro hizmetler, esnek, bağımsız olarak dağıtılabilir yazılım sistemleri oluşturmak için kullanılan hizmet odaklı mimariler (SOA) için bir uygulama yaklaşımının uzmanlığıdır. Microservices, büyük ve karmaşık uygulamaların hızlı, sık ve güvenilir bir şekilde teslim edilmesini sağlar. Ayrıca bir kuruluşun teknoloji yığınını geliştirmesini sağlar.

Yanlış Bilinenler
=================

Şimdi biraz öncesinde tanımı yaptım. Tabi tanımı yaparken sıkıcı ve formal bir dil de kullandım. Şimdi gelgelelim asıl konumuza. Bir soru ile başlayalım, hiç mikro hizmet tabanlı bir mimari tanımladınız mı veya uyguladınız mı? Muhtemelen bu soruya evet yanıtı veren pek çok kişi “Abi patron istedi öğrendik işte, kullandık yani” diyor ve bu konuda çok temel bir yanılgıya düşüyor.

Biraz önceki gibi bir deneyime sahip olan arkadaşlar büyük olasılıkla daha önce uğraştığınız şey mikro hizmetler değil, belki mini hizmetler diyebiliriz veya dağıtılmış monolitik hizmet yapısı diyebiliriz. Neden mi? Bunun neden olduğunu ve bu konuda yanılmanın neden uygun olduğunu açıklamaya çalışayım.

“Mikro hizmetleri”, genellikle tek bir sorumlulukla ilgilenen küçük, çok mantık odaklı hizmetler olarak düşünme eğilimindeyiz. Ancak böyle düşünüp bunu da uygularken, Martin Fowler’ın Mikro Hizmetler tanımında yer alan çok ama çok küçük, ancak bir o kadar da önemli bir özelliği kaçırdığımızı farkedeceksiniz. Sözü aynı ile yazıyorum

> In short, the microservice architectural style is an approach to developing a single application as a **suite of small services**, each **running in its own process** and communicating with lightweight mechanisms, often an HTTP resource API.

Bakın **_suite of small services_** yani ufak servisler takımı kısmının ucundan tutmuşuz. Ve mimariyi ona göre yapmışız ANCAK **_running in its own process_** kısmının pek güzel anlaşıldığına inanmıyorum.

Microservices yapısı ile alakalı düşülen en temel ve bilindik yanılgı servislerin “kendi süreçlerine sahip olduğu” ve “her bir sürecin ayrılmış olarak yürütüldüğü” kısmıdır.

“Mikro hizmet” dediğimiz terim bugünlerde o kadar çok ortalıkta dolanıyor ki, tam olarak ergenler için “**seks**” neyse bu kavram da gibi bir noktaya geliyor: herkes bunun hakkında konuşuyor, kimse gerçekten nasıl yapılacağını bilmiyor, herkes herkesin bunu yaptığını düşünüyor, bu yüzden herkes yaptığını iddia ediyor, herkes yaptıysa biz neden yapmayacağız diyip aslında ihtiyacı olmasa bile bazı şirketler bu yapıya geçmek için işçilerini zorluyor.

Doğruyu söylemek gerekirse, ben de araştırırken, çeşitli yazıları okurken nerdeyse tamamında mikro hizmet tanımını yaptıktan sonra yazarın REST API’leri hakkında yazdığı güzel dokümanları ve bol bol Kubernetes yönergelerini görüyorum. Ama abi burada bir saçmalık var. Tanım olarak, REST API’leri kullanarak tek başına mikro hizmet mimarisi oluşturamayız, bunları her biri tek bir sorumluluğu üstlenen birden çok küçük öğeye bölseniz bile sadece milyon tane REST API oluşturmuş olursunuz. Çünkü tanımı gereği bir REST API’sini doğrudan kullanabilmeniz için bunu bilmeniz gerekir.

![](https://miro.medium.com/max/20004/0*COkmyE8KhWUdl6Ti)

Bir yan not olarak şunu da ifade edetim ki iki tür REST geliştiricisi vardır (yani geliştiriciler REST API’leri iki farklı şekilde oluştururlar):

İlk grup bilgilidir, REST hakkında ihtiyaç duyduklarını düşündükleri kadar çok özelliği uygulayarak bir API oluştururlar, isterlerse kaynak odaklı URL’leri önemseyerek bu API mimarisini düzgünce uygularlar ancak belki de REST API uygulanması o kadar zor olmadığı için API’lerinin stateless olması konusunda endişelenmeceklerdir. Ancak bu tür bir geliştirici API’nin yapısının kendini keşfetmekten ziyade, istemci ve sunucu arasındaki ilişkiyi kullanarak bunu yapmaktadırlar.

İkinci grup ise REST Tarikatına mensup olanlardır ki bunlar ise REST standardını harfiyen yerine getirirler. REST API’lerini bu şekilde uygulamak çok daha uzun sürebilir, ancak sonuç çok daha iyidir, özellikle istemcilerin sunucuyla çok az bağlantısı olduğundan, bu tip bir uygulamada bilmemiz gereken tek şey sunucunun nerede olduğu ve kök uç noktasının ne olduğudur.

Ancak, her iki durumda da istemci ve sunucu arasındaki bağlantı hala oradadır. YANİ REST’İ İYİ KULLANARAK SADECE REST’İ İYİ KULLANMIŞ OLURSNUZ. Yani Rest’i iyi kullanmak demek ayrıştırılmış bir iletişim elde etmek demek değildir ve bu nedenle Rest’i iyi kullanarak microservice mimarisi elde etmiş olmazsınız.

Microservices = REST API varsayma eğilimindeyiz ve aynı zamanda REST API, istemci-sunucu iletişim paradigması ile otomatik olarak ilişkilendirilmek de çokça düştüğümüz hatalar.

Microservice hizmeti oluştururken monolitik uygulamalar oluşturmak yerine, önce bağımsız bileşenler oluşturun ve bunları hizmetler ve uygulamalar halinde oluşturmamız gerekmekte. Bu da geliştirmeyi hızlandırır ve ekiplerin daha tutarlı ve ölçeklenebilir uygulamalar oluşturmasına yardımcı olur. Bit gibi OSS Araçları, bağımsız bileşenler oluşturmak ve uygulamalar oluşturmak için harika bir geliştirici deneyimi sunar. Birçok ekip, bağımsız bileşenler aracılığıyla Tasarım Sistemlerini veya Mikro Ön Uçlarını oluşturarak işe başlar.

Yani microservices yapısındaki ilk ve en önemli adım bağımsız bileşenleri oluşturup bunları ayırmaktır. Peki bu ayrışmayı nasıl sağlayabiliriz? İşin püf noktası hizmetin dışını da düşünmektir: iletişim kanalı.

İletişim konusunda en etkili ve mantıklı yöntemlerden birisi de: Asenkron mesajlaşma. Bu seçenek, istemciyi ve hizmetlerimizi doğrudan bağlamaz, bunun yerine, mesajların istemci ve hizmetler arasında birbirlerini bilmelerine gerek kalmadan iletilmesiyle ilgilenen merkezi bir mesaj veriyolu gerektirir. RESTAPI ile beraber asenkron mesajlaşma kullanarak ne elde ettiğimizi görebiliyor musun? Basit bir paradigma değişikliği ile istemciyi ve sunucuyu tamamen ayırdık.

![](https://miro.medium.com/max/20000/0*iQCpDJyy2I2YWG9t.png)

Bu mesajlaşma yöntemi ile arkada neler olduğunu, kaç hizmetin dahil olduğunu veya olacağını bilmek zorunda bile değiliz, ki bu harika bir yapı sunuyor bize. Bu da, karmaşık istek dizilerini düzenlemenin artık istemcinin sorumluluklarının bir parçası olmadığı anlamına gelir. Sonuç olarak da bir şekilde istemci sunucudan istediğini alır, “bir şekilde diyorum” çünkü bu senkron bir iletişim modeli değil, nasıl çalıştığına bakılırsa asenkron olması gerekiyor. Bunu bir sorun olarak görseniz dahi bir sorun değil, sadece istemcilerimizi (ve diğer mikro servislerimizi de, birbirleriyle bu şekilde konuşabileceklerini göz önünde bulundurarak) kodlama şeklimizde bir değişiklik gerektiriyor. Bir saniyeliğine gerçekçi olalım: Mesaj yolu tabanlı bir iletişim modeli, hizmetlerinize doğru bir şekilde “microservices” diyebilmeniz için yeterli değildir, ayrıca bazı güzel avantajlar da sağlar: İstemci uygulamalarınız da dahil olmak üzere tüm mimariniz reaktif hale gelir. Özellikle doğası gereği çözülmesi uzun zaman alan taleplerle uğraşıyorsanız bu harika bir çözüm olacaktır. Belki çok karmaşık hesaplamalarla uğraşıyorsunuz, bazı ML modelleri çalıştırıyorsunuz veya yalnızca diğer üçüncü taraf API’lerinden veri topluyorsunuz. İşte bu durumda asenkron olarak haberleşmek oldukça karlı olacaktır. Yanı sonuç olarak sebep ne olursa olsun, istemcileriniz, zaman aşımına uğramayacağını umarak aktif bir bağlantıyla kilitlenmek yerine, yanıtı beklerken başka bir şey yapmaya devam edebilir.

Şimdi toparlayacak olursak, servislerimizi microservices yapısında yaparsak tek yönlü bir işlem modelinden çok yatay bir ölçeklendirme kullanmış olacağız. Hizmeti yatay ölçeklendirmek isterseniz teknik olarak REST API’lerinin doğrudan istemciyle konuşması gibi birleştirilmiş bir uygulamayla, yükü aynı mini hizmetin tüm kopyalarınız arasında dağıtmanıza izin verecek bir tür yük dengeleyiciye veya API ağ geçidine sahip olmanız gerekir. Ancak, ayrıştırılmış bir mimariyle uğraşıyorsak, bu kadar detayla endişelenmemize gerek yok, mesajı alan ilk mikro hizmet bununla ilgilenecek ve kopyaları bir sonraki gelen mesajla ilgilenmek için serbest bırakacaktır ve yatay mimarinin ölçeklenmesi oldukça basit bir şekilde mümkün olacaktır.

Ayrıca bu noktada sistem içerisine yeni hizmetler eklemenin istemci üzerinde doğrudan bir etkisi olmayacaktır. Çünkü bir istemci-sunucu iletişiminde, yeni bir hizmet eklemek (yeni bir özellik eklediğinizden veya mevcut bir hizmeti bölmeye karar verdiğinizden dolayı), istemcinin artık farklı senaryolar için kiminle iletişim kuracağını bilmesi gerektiği anlamına gelir. Ya öyle ya da düzenlemeyi tüm isteklerin karşılandığı merkezi bir API’ye taşıdınız, ancak bu durumda hizmetinizde o düzenleme mantığını da güncellemeniz gerekir. Kabul, istemci etkilenmedi, ancak yine de bir yan etkiniz var. Microservices tabanlı bir mimariyle artık durum böyle değil. Düzenleme, mesaj veriyolu tarafından yapılır ve eklemeyi neredeyse sorunsuz hale getirir.Sonuç olarak microservices daha kolay yeniden deneme ve daha dayanıklı mimari.

Microservices yapısı ile alakalı çok önemli iki nokta var. Normal mimaride eğer, hizmetleriniz herhangi bir nedenle ölürse (veya en azından ulaşılamazsa) ne olacağı konusunda endişelenmeniz gerekir. İstemci-sunucu iletişimi için bu, isteklerin başarısız olacağı anlamına gelir. Ancak bir mesaj yolu için bu, hizmetler geri yüklenene kadar isteğin bitmeyeceği anlamına gelir. Mesaj yolu, mesajları bir süreliğine saklayabilir, böylece daha esnek bir mimarinin oluşturulmasına izin verir. Aynı zamanda, daha önce de belirttiğim gibi, başarısızlık durumunda bir tür yeniden deneme mantığına sahip olmak istiyorsanız, bu microservices tabanlı bir mimari için ima edilirken, bir istemci-sunucu için kendiniz kodlamanız gerekir.

Buraya kadar mimariye dair pek çok noktadan bahsettim ve hala ikna olmadınız mı? İşte o zaman belki de bunun nedeni, kullanım durumunuzun microservices için mükemmel bir eşleşme olmamasıdır. Belki farklı bir mimari, örneğin miniservices veya yine monolitik bir yapıya sahip ancak semidivided architecture, sizin için doğru çözümdür. Bu makalede bunlardan bahsetmememin sebebi bir şeyin anlaşılması. “Mikro hizmetler” harika olsa da, her mimari için zorunlu değildir. Sadece popüler kültürün etkisinde kalmak, kaynak planlaması yapmanız için veya bir yapıdan başka bir yapıya geçmeniz için tek parametre olmamalıdır. Başta dediğim gibi bilip bilmeyen herkes bu konuda konuşuyor diye siz de bu tarafa yönelmek veya bu yapıda ürünler çıkartmak zorunda değilsiniz.

Kendiniz olun, ihtiyaçlarınızı algılayın, ona göre aksiyon alın…

![](https://miro.medium.com/max/20008/0*R9xmaIvO7E0Mr1jL.jpg)

Kaynaklar
=========

* [What are microservices?](https://microservices.io/)
* [martinfowler.com](https://martinfowler.com/)
* [What is a REST API?](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
