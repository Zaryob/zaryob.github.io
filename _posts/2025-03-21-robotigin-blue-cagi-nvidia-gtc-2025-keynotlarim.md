---
layout: post
title: "Robotiğin “Blue” Çağı: Nvidia GTC 2025 Keynotlarım"
date: 2025-03-21 07:02:34 +0300
categories: [genel]
tags: ["nvidia","nvidia-newton","türkçe","robotik","gtc2025"]
image: "2025-03-21-robotigin-blue-cagi-nvidia-gtc-2025-keynotlarim.jpeg"
image_hash: "bc8e1c7ab32c7fb486e5412684070a8d"
---


Robotik ve Yapay Zekanın bulûğ çağına girdiğimizin ilk işaretini GTC 2025'de ​NVIDIA CEO’su Jensen Huang’ın sunumunda gördük. ‘Blue’ adını verdikleri, Star Wars’tan esinlenilmiş (bence WALL-E ama kendileri öyle diyorsa öyle olsun), yapay zeka destekli bir araştırma robotunu tanıttı. Bu robot, NVIDIA, Google DeepMind ve Disney Research iş birliğiyle geliştirilen yeni bir fizik motoru olan Newton ile çalışıyor. Peki bu gelişmeler ne anlama geliyor.

Bu yazımda bunu irdelemek için GTC’ye değinerek başlayacağım, ardından Asimov’dan bu yana robotiği anlatarak geçmişten geleceğe bir köprü kuracağım.

### Etkinliğin “Blue” Kısmına Bakış

GTC 2025 etkinliğine şüphesiz ki damga vuran, Tarkan gibi sahneye yerin altından çıkan Blue ismindeki robot oldu. Hareketlerindeki çizgifilm tadındaki halleri, sesli komutlara cevap vermesi ve gerçek zamanlı olarak bunu yapması ile robot çağına girdiğimizin işaret fişeği oldu diyebilirim. Aslında bu gelişmenin ayak izlerini görmedik de sayılmaz: GTC 2024 açılış konuşmasında yine Jensen Huang, **Gr00t** isimli modelini Omniverse tabanlı bir dijital ikiz ortamında göstererek robotların bir işi yapmayı tıpkı bir dojo’da eğitim alır gibi sanal olarak öğrenebildiğini sergilemişti.

Sunumda bahsedilenler arasından en çok dikkatimi çeken Newton framework’ü oldu. Newton framework’ü, robotların karmaşık görevleri daha hassas bir şekilde öğrenmelerine olanak tanıyan ve en önemlisi açık kaynaklı olan bir fizik motoru olarak tanıtıldı. NVIDIA’nın Warp framework’ü üzerine inşa edilmiş olan bu motor kütüphane, robotların gerçek dünyadaki fiziksel etkileşimleri simüle etmelerine yardımcı oluyor. Bu model esasında geçen sene gördüğümüz **Gr00t** modelinin yeni sürümü olan **Gr00t** **N1** üzerine geliştirildi ve yeni bir fizik simülasyonu motoru olan **“Newton”** ile birleştirdi. Bu da ‘Blue’nun, gerçek zamanlı simülasyon yetenekleriyle, robotların sanal ortamlarda binlerce deneme yaparak kendi kendine öğrenmesine ve ardından bu bilgileri gerçek dünyada uygulamalasına olanak tanıyor.

Bu gelişmeler, robotik teknolojisinin geleceği için önemli bir adım olarak görülüyor ve robotların daha esnek, öğrenebilir ve insanlarla etkileşim kurabilen sistemler haline gelmesini hedefliyor.Hatta diyebiliriz ki​ robotik için temel modeller (foundation models) çağı başlıyor. Peki bu ne demek? Nasıl ki dil modellemesi için dev yapay zekâ modelleri (GPT gibi) insan dilini anlayıp üretebiliyorsa, benzer şekilde devasa modeller robotik davranışlar için eğitiliyor. Bu tür modeller sayesinde robotlar, görüntü tanıma, ortam algılama, karar verme ve hareket planlamayı entegre bir biçimde gerçekleştirebilecek kapasiteye ulaşıyorlar.

Elbette bu çapta bir “zekaya” sahip robotları gerçek dünyada çalıştırmak, büyük hesaplama gücü ve gelişmiş donanımlar gerektiriyor. Robotlar artık sadece motorlar ve sensörlerden ibaret değil; içinde adeta bir mini veri merkezi barındırmaları gerekiyor. Nitekim bunun paralelinde, laf arasında bu robotun içinde 2 tane NVIDIA bilgisayarın çalıştığını ifade edildi.

Yapay zeka algoritmalarının hesaplaması için gereken GPU’lar ve özel yongalar, NVIDIA’nın halihazırda uzmanlık alanı. Ancak dikkatimi çeken bir durum daha var, bizim ülkemizde alışık olmadığımız şekilde şirketler bir robotu müşterek olarak yapıyor. Her şey benim olsun benim elimden çıksın demek yerine herkes kendi güçlü noktalarını bir proje bünyeside ortaya koymuş.

NVIDIA, Blue’yu geliştirmek için Disney Araştırma birimi ve Google DeepMind ile ortak çalışmış. Disney, eğlence robotları ve animatronik konusundaki uzmanlığıyla Blue’nun fiziksel tasarım ve hareketlerinde katkı sunmuş ve gördüğüm kadarıyla robotun tatlı hareketleri buna işaret ediyor; Google DeepMind ekibiyse gelişmiş yapay zeka algoritmalarıyla robotu donatmış. Sonuçta Blue, film stüdyosu sihirbazlığını andıran bir sevimlilikte ancak son derece gelişmiş bir robotik yapay zeka ile donatılmış bir robot olarak karşımıza çıktı.

Robotik dediğim gibi bir anda icad edilmedi, sahneye çıkan bu robot da atalarının adımlarını takip ediyor diyebilirim. Burada devrim yaratan geçmişte robotlar, büyük ölçüde önceden programlanmış görev setleri ve kural temelli algoritmalarla çalışıyordu. Robot süpürgeleri düşünün. Görüntü işlemeye dayalı basit yapay zeka uygulamaları olsa da, robotların çevrelerini anlama ve karmaşık kararlar alma yetenekleri sınırlıydı.

Newton, açık kaynaklı bir robotik fizik simülatörü, robotların tıpkı oyun motorlarında olduğu gibi gerçekçi fizik koşullarında test edilmesini mümkün kılıyor. Bu sayede Blue, gerçek dünyada karşılaşabileceği durumlara dair eğitimini önceden simülasyonda almış ve sıfırdan ince ayar yapmadan gerçek ortama uyum sağlayabilecek bir seviyeye gelmiş oluyor. Tam olarak bu, robotik için oldukça çığır açıcı bir gelişme; zira genelde simülasyondan gerçeğe geçişte zorluklar yaşanır, ancak gelişmiş simülasyon, dijital ikiz ve yapay zeka algoritmaları sayesinde Blue bu eşiği aşmış gibi görünüyor, ki bu durum yapay zekanın robotik bedenlere entegrasyonu konusunda bir dönüm noktası olarak değerlendirilebilir.

Bu nokta robotlar için algılama, anlama ve eyleme geçme döngüsünü kesintisiz uygulayabilen prototiplerin çıkması robotların, önceden programlanmış bir gösteri yapmaktan öte, ortama ve verilen komutlara uyum sağlayarak zeki bir “ajan” gibi davranabileceğini de düşündürüyor.

Sonuçta bu GTC’nin bize verdiği mesaj gayet net: Artık robotlar, yalnızca mekanik birer araç değil, aynı zamanda yapay zeka ile “düşünen”, çevresi ile etkileşime giren varlıklar. Asimov’un robot öykülerindeki karakterler gibi, basit de olsa sorulara cevap vermek veya engelleri algılayıp duruma uygun tepki vermek önümüzdeki birkaç yıl sonra mümkün olacağa benziyor.

GTC’yi yeterince anlattığımı düşünerek yazımı biraz farklı bir yöne doğru çevirmek istiyorum Peki Asimovdan bu yana ne değişti?

### Düşünsel Robotikten Asimov Çağına

Asimov denilince akla robotlar ve yapay zeka geliyor, öyle ki yapay zekanın ve robotiğin en meşhur hocaları bile onun kadar atıf almamıştır. Bir bilim kurgu yazarı olarak kendisini bu denli meşhur yapan, kurgusal robotlarının davranışını kısıtlayan meşhur Üç Robot Yasası’nı ortaya koyarak geleceğin robotları için etik bir çerçeve koymasıydı. ​Ve yine kendisi, taa 1960’larda, 2000'li yıllara geldiğimizde robotların ne yaygın ne de çok yetenekli olacağını ve hayatımızda varlık göstereceğini de öngörmüştü. Peki, günümüzde yapay zeka ve robotik alanında geldiğimiz noktada, Asimov’un tahayyül ettiği insansı robotlar gerçek olmaya ne kadar yaklaştık?

Robotik 18'inci yüzyıldan beri insanın hayali diyebilirim. Ki o dönemlerden miras kalan steampunk tarzında bunun etkilerini de görmek mümkün. Bu erken zamanlarda otomata olarak adlandırılan kendinden devinimli makineler sarayların gözdesiydi.

O zamanlar söylendiği iddia edilen, kimin söylediğini bulamadığım şu söz ise bu otomataların gizli sırrını açıklıyor ediyor bize:


> **_“Her yeterince zeki robotun içinde bir cüce gizlidir.”_** 
 

> (Inside every robot, no matter how intelligent, there is always a dwarf. ) 






![](/assets/img/posts/0*yWCa9xHHNZRJvKSU.jpg)


Çünkü bugün bu meşhur robotların, özellikle yukarıda örneğini gördüğümüz otomatik satranç makinesinin içinde onu dışarıdan yönlendiren satranç bilgisine sahip bir cüce vardı. Aksini iddia etmek ise şunu demek; gerçekten de o zamanlar, 1990'da DeepBlue’nun ulaştığı noktaya biz 1700'lerde çoktan gelmiştik, bir takım çarklı ve dişlileri çevirerek…

1900'lere gelene kadar robotlar hayal ürünü bir icat olarak sinemada teneke kutular olarak tasvir edilirken, Asimov tarafından ise insansı tenekeler olarak gösterilirken, 1900'lerin ortasında modern robotik devrim, üretim hatlarında tekrarlayan ve tehlikeli işleri yapmaya odaklanmış basit makineler olarak karşımıza çıktı. Fabrikalardaki tehlikeli işleri, kaynak ve montaj gibi süreğen işleri otomatikleştirme amacıyla çıkılan robotik alanında, ilk kan, 1954 yılında Amerikalı mucit George Devol, adım adım programlanabilen mekanik bir kolun patentinin alınması ile döküldü. _Unimate_ adı verilen ve 1961’de General Motors’un New Jersey’deki fabrikasında devreye giren ilk endüstriyel robot, insan sağlığı için riskli bir işi devralarak kızgın döküm parçalarını preslere besliyordu.


![](/assets/img/posts/0*CB9XquhcCcS_J0TF.jpg)


Esasında bu gelişme ile Isaac Asimov’un robotik etik ilkelerinden ilham alınarak, robotları öncelikle “insanlara zarar verebilecek işlerde” kullanılmış oldu. Tabi atomik faciadan 20 sene geçmeden endüstrisini toparlayan Japonlar, artan iş gücüne yanıt verecek insan kaynağının azlığı yüzünden robotik işine girdi, 70'lere geldiğimizde Japonya’da ilk humanoid robotlar geliştirilirken, Amerika’daki şirketlerle ortaklıklar kurularak gerek kullanıcı olarak gerek geliştirici olarak çoktan robotik alanına girmişlerdi. Pasifik ayağı böyle iken Avrupa ayağında ise, robotik kollar ile devam eden endüstriyel robotik sıklıkla tenis oynarken veya cam bardaklarla müzik yaparkenki videolarını gördüğümüz KUKA’nın 6 eksenli robotik kollarının geliştirildi.


![Kuka’nın 6 eksenli robotik kolunun timelapse merged bir fotoğrafı (“Made in Germany” )](/assets/img/posts/0*aTrAf16dpILIsP7F.jpg)

Kuka’nın 6 eksenli robotik kolunun timelapse merged bir fotoğrafı (“Made in Germany” )

Endüstriyel robotiğin yaygınlaşması Japonya’da 1980 yılında, robot kullanımının patlama yapması ile sonuçlanarak “robotik yıl sıfır” (Year One of Robotics) olarak adlandırılan bir devir başladı​.Bu dönemde (İntel’in 8086'ları da sağ olsun) mikroişlemci kontrollü robotlar geliştirildi. Helişen sensör teknolojisi sayesinde montaj hattındaki robotların hassasiyeti arttı, yani robotik kolların programlarının karmaşıklığı arttı; kaynak yapma, boyama, taşıma gibi işlerde robotlar insan işgücünün yerini alarak üretimi hızlandırdı, 90'larda ise uzay istasyonunun kurulması sırasında robotik kollardan yararlanılması bile gündem oldu ancak 20 yıllık ufak bir gecikmenin ardından robotik kolların uzayda kullanılması ancak 2022'de nasip oldu. Tabi o sırada çoktan Mars’ta ilk robot diyebileceğimiz Sojourner roveri tekerlek çeviriyordu.


![](/assets/img/posts/0*rURIRv1OCJFF8Aw5.jpg)


Bir yandan robotik kollar geliştirilirken bir yandan Asimovdan aldığımız mirası getiren “enthusiast”lar da yok değildi. İnsansı robotlarda çalışmaya 70'lerde başlanmış olsa bile gerek baskı devre teknolojisi, gerek çip teknolojisi gerek servoların hala uygun boyutlara inmemesi derken, yıllar süren Ar-Ge’nin meyvesi olan ASIMO robotu 2000 yılında halka tanıtıldı. Tanıtıldığında, milenyumun işaret fişeği olarak görülen bu robot, kendi başına yürüyebilen, merdiven çıkabilen ilk ileri seviye insansı robotlardan biriydi. İlk robotik koldan bu yana 50 sene içinde ilk kendi kendine yürüyebilen robot yapıldı, sonraki 20 senede ise robot süpürgeleri geliştirdik…


![](/assets/img/posts/0*fi9eiWLAZdnZUOeC.jpg)


…diyemeyeceğim çünkü daha 5 sene geçmeden Boston Robotics ilk prototiplerini ortalarda yürütmeye başladı. General Dynamics ve Boston Robotics ayrı kollardan 2010'larda kendi başına yürüyebilen, çita gibi koşan, keçi gibi dağda bayırda dolaşan farklı insansı ve hayvansı modern robotlar geliştirdi. En son kutuları taşıyıp sağa sola zıplarken gördüğümüz Atlas da bu programın bir ürünü. Ve şu robot köpek. Parantez açmak istiyorum, acaba onu geliştirenler, “abi bir sanatçı alsın şuna bir silikon kafa taksın da modern sanat yaptım diye etrafta dolaştırsın” diye düşünmüş müdür, düşünmedilerse böyle kullanıldığını görünce yüzleri sirke satmış mıdır?

Şüphesiz ki yüzyılımızın ilk çeyreğinde her şey gibi bilakis robotlar, gelişmiş sensör teknolojileriyle donatılarak çok daha yetenekli hale geldi. Modern robotlar artık kameralar, lidar ve çeşitli algılayıcılar ile çevrelerini 3 boyutlu olarak “görebiliyor”, üzerindeki algoritmalar ile yol bulabiliyor ve yürüyebiliyorken derin öğrenme algoritmaları sayesinde görsel tanıma, nesne algılama ve hatta insan yüz ifadelerini anlama gibi beceriler kazanmış durumdalar​. Artıracak olursam robotlardan kazanılan bu yetenekler arabalarımıza bile giriyor, şerit takip sistemleri, otopilotlar, kendi kendine parklar. . .

Yapay zeka destekli robotlar endüstride de yeni bir çağ başlattı. Ayrıca bir zamanların dahiyene fikri olarak lanse edilen IoT’nin esasında uygulanabileceği en uygun topraklar oldu robotik. Ki daha “IoT öldü” başlıklı yazıların yazılması daha yeni yeni birmişken, kendi aralarında konuşan İşbirlikçi robotlar (cobot’lar) olarak adlandırılan yeni nesil robotlar, eski robotların yerini alıyor; fabrikalarda insanlarla yan yana güvenle çalışabiliyor, üzerlerindeki sensörler ve akıllı yazılımlar sayesinde çevresel farkındalık ve tehlike durumlarını hesaplayarak en optimum ve güvenli çalışacak şekilde tasarlanıyorlar.


![Atlas reisin bıçkın bir delikanlı olarak ringe çıkışı](/assets/img/posts/0*zC4vC3G2BOU5LetP.jpg)

Atlas reisin bıçkın bir delikanlı olarak ringe çıkışı

Yani bilim kurgu filmlerindeki seviyeye tam olarak ulaşılmış olmasa da, son 60–70 yılda alınan yol muazzam. Öncü robotlar _“zekasız”_ birer mekanik kol olmaktan çıkıp, günümüzde yapay zeka ile bütünleşen akıllı sistemlerine dönüştü. Bu dönüşüm, Devol’un Unimate’ıyla başlayan robotik serüveninin son halkası olan “Blue”, yapay zeka çağına evrildiğimizin heyecan verici bir başarı hikayesi. Asimov, belki 2014 yılını gösterirken, çok iyimserdi ancak ben 2042'i göstermek için daha iyimser olabilirim. Neden 42 diye sorarsanız, danışmanız gereken rehberi biliyorsunuz.

Muhtemelen şimdiden sokaklarımızda, işyerlerimizde ve evlerimizde bizlerle beraber çalışıp yaşayan ufak robotlar var. NVIDIA Blue gibi kompleks örnekleri ise çok yakında göreceğimiz, humanoid robotların etrafta dolaşacağı bu geleceğin, artık çok da uzak olmadığını gösteriyor.

Peki önümüzde neler var?

### Önümüzdeki Gelecek: 2042 Hedefleri

Bu tarihi benim uydurduğumu belirtiyorum. Aman sonra kimsen aldın bunu referans göster demeyin.

Blue’nun sahne almasıyla somutlaşan yapay zeka-robotik birleşimi, önümüzdeki yıllarda hız kazanarak devam edecek gibi görünüyor. Boston Dynamics Atlas gibi insansı robotlar ve Tesla’nın geliştirdiği Optimus robotu gibi irili ufaklı pek çok proje, genel amaçlı kullanılabilecek, insan biçimli veya benzer kabiliyette robotlar üretmeyi hedefliyor.

2030’lara doğru, depolarda yük taşıyan, inşaat alanlarında iş yapan veya evlerimizde yardımcı olan robotların ortaya çıkması bekleniyor hatta yük taşıyan etrafı temizleyen robotlar çoktan çıktı. Bunların daha insansı olan, kendi başına düşünen etraftaki arkadaşları ile iletişim kuranları da yolda gibi görünüyor. 2035'de rakamları akıllı telefonlar veya bilgisayarlar kadar yaygın olmayacaklarını düşünsek de, bugüne kıyasla ciddi bir robot kullanıcısı olacağını öngörmek zor değil. Robot süpürgenin kullanıcı sayısı başarısı bile 3 senelik ömründe takdire şayan.

Bu geleceğin gerçekleşmesinde şüphesiz ki NVIDIA kilit bir rol oynuyor. Yalnızca ekran kartı üreticisi olarak değil, hesaplama sistemlerinde kilit konumunu kullanarak yapay zekada olduğu gibi robotik ekosisteminin de merkezindeki oyunculardan biri haline gelmiş durumda. Örneğin, bir startup bugün bir robot prototipi geliştirmek isterse, NVIDIA’nın sağladığı simülasyon ortamında tasarımını test edebilir, Isaac platformuyla algı ve kontrol yazılımını yazabilir ve Jetson modülünü robotuna entegre ederek hemen çalıştırabilir. Bu tür bir hazır altyapı ve ekosistem, girişimler açısından, robotik inovasyonu ivmelendirirken, NVIDIA gibi bir devin varlığı diğer devleri de bu alana çekiyor.

Söylemeliyim ki NVIDIA Blue ise robotik zeka vizyonun bir vitrini niteliğinde. Blue ile NVIDIA, “donanım + yazılım + yapay zekâ” birleşiminin neler başarabileceğini göstererek geliştiricilere ilham veriyor, ayrıca, Disney ve Google DeepMind gibi farklı uzmanlık alanlarından ortaklarla çalışması da, inovasyonun işbirlikleriyle hızlanacağına işaret ediyor.

Sonuç olarak, robotik ve yapay zeka arasındaki sınırlar bulanıklaşırken, Isaac Asimov’un hayal dünyasında kurguladığı sahneler bir bir gerçeğe dönüşmeye başlıyor…

Şimdiden geleceğe, her daim esen kalın...

### İleri Okumalar

Tavsiye edeceğim bir de okuma var. Deepmind bu robotu geliştirirken rol aldı demiştik, geçenlerde açık kaynak kodlu olarak Gemini için Robotik modülü yayınladı:


[![](https://lh3.googleusercontent.com/J74rVi68EPPNMBLxhxI76Bli7QggLtYRYfp5Pk2HVPtSt2NIIk2VmLktQbwDZeIlZiW3AHwlpLNcswHuz_ecR-oj4kI-mtF53yYsGJKfvPugAw5ulQ=w1200-h630-n-nu)](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/)

### Kaynaklar
#### Asimov’un Üç Kuralı:
- Asimov, Isaac (1950) . “Runaround”. _I, Robot_ (The Isaac Asimov Collection ed. ) . New York City: Doubleday. p. 40. ISBN 978–0–385–42304–5.

#### Bahsi Geçen Blue tanıtımı:


[![](https://static.euronews.com/articles/stories/09/12/46/52/1200x675_cmsv2_96e42f89-f855-5b9d-aa6f-6618886b7e44-9124652.jpg)](https://www.euronews.com/video/2025/03/19/nvidias-ai-robot-blue-stuns-with-live-interaction)

#### Diğer Kaynaklar:


[![](https://cms.tinyml.org/wp-content/uploads/summit2024/Copy-of-The-Robots-Are-Coming-%E2%80%93-Physical-AI-and-the-Edge-Opportunity-Video.jpg)](https://www.edgeaifoundation.org/edgeai-content/the-robots-are-coming-physical-ai-and-the-edge-opportunity)



[![](https://bostondynamics.com/wp-content/uploads/2024/04/atlas-blue-mobile-copy.jpg)](https://bostondynamics.com/atlas/)



[![](https://developer-blogs.nvidia.com/wp-content/uploads/2025/03/gtc25-newton-500x282.gif)](https://developer.nvidia.com/blog/announcing-newton-an-open-source-physics-engine-for-robotics-simulation/)



[![](https://developer.download.nvidia.com/images/isaac/gtc24-issac-robotics-social-3167701-1200x628.png)](https://developer.nvidia.com/isaac)



[![](https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/06/european_robotic_arm_installation_on_nauka/23367771-1-eng-GB/European_Robotic_Arm_installation_on_Nauka_pillars.jpg)](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/European_Robotic_Arm)



[![](https://www.invent.org/sites/default/files/styles/og_image/public/article-image/2019-06/Inductee-Devol.jpg)](https://www.invent.org/blog/inventors/George-Devol-Industrial-Robot)


[https://www.automate.org/robotics/engelberger/joseph-engelberger-unimate](https://www.automate.org/robotics/engelberger/joseph-engelberger-unimate)

