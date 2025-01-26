---
layout: post
title: "Yapay Hayat: 6 Ayı Yapay Zeka Araçları Kullanarak Geçen Bir Yazılımcının Güncesi"
date: 2025-01-29 22:54:42 +0300
categories: [genel]
image: "2025-01-29-yapay-hayat.png"
image_hash: "5dcae51363b931caca8669f567f14958"
---


Her şey o sıcak haziran sabahında, "Kanki ChatGPT alacağım, AppStore'den alınca normalden 1 lira daha ucuzmuş, beraber kullanalım mı?" diye soran Kayserili arkadaşımın bana aldırdığı ChatGPT Premium hesabı ile başladı...


# Girişme

Herhalde bir bilgisayar mühendisi olup ya işte efendim yapay zeka ChatGPT filan diyebilecek en son insanlardan birisiyim. 
Benim için yapay zeka ile tanışmak aslında bir noktada Pardus 2011 ile tanıştığım zamanlara dayanıyor. Beni tanıyan 
arkadaşların "ne Pardusmuş arkadaş" dediğini duyar gibiyim. O Pardus, 2011 yılındaki Pardus yani, benim için bilgisayar 
mühendisliğini seçmeme neden olan şeylerden birisi ve yanlış hatırlamıyorsam içerisinde zemberek isimli bir paketle aslında 
ben yapay zeka ile tanışmış oldum. 

Zemberek bir doğal dil işleme kütüphanesi aslında. İçerisinde Türkçe kelimeleri ve cümle yapılarını anlayan ve bu noktada 
tahminler yaparak cümleleri tamamlayan kelimeleri düzenleyen bir kütüphaneydi veya ben öyle anımsıyorum. Gel zaman git 
zaman 2018 yılına geldiğimizde ben halihazırda pek çok yapay zeka olarak iddia edilen kullanıma da şahit oldum. 2016 
yılında aldığım Raspberry Pi ve kamera modülüyle çoktan Open CV kullanmış, Apache’nin Open NLP kütüphanesini kurcalamış ve 
bu durumda bilgisayar mühendisliği seçmiş birisiydim. Yani 2018 yılında üniversite ilk başladığımda görüntü işlemeyi yapay 
zeka zanneden insanlarla bol bol yapay zekanın aslında düşündükleri gibi bir şey olmadığı konusunda uzun uzun çok şeyler 
anlattım ama işte sektör böyle, insanlar parayı opencv'yi güzel bir şekilde paketleyerek ürününü ise yapay zeka diye 
süsleyerek buluyorsa, kendi ürününün "öz hakiki yapay zeka" olduğunu iddia etmekte özgür. 

Yani çoğu için yapay zeka şu anda bir chat botundan ibaret hatta bu chat botunu kendi uygulamaları içerisine başarıyla 
entegre eden insanlar da var ve onlar için bile bundan ibaret. Ama benim için yapay zeka geçmişten beri biraz General 
Dynamic’in şu videolarda Jackie Chan vari hareketler yapmasını için uğraştığı insansı robotlara benziyor, kendisinden pek 
çok şey bekleyeceğimiz büyük bir devrimin öncüsü, aynı buharlı makineler gibi yeni bir çağın açıcısı. Ayrıca yapay zekanın 
özellikle genel yapay zeka adımındaki en büyük kilometre taşı olan Genel Yapay Zeka aşamasına belki de bu General 
Dynamics'in robotunun insan gibi parkurda düşmeden koşabilmeyi başardığı kadar zamandan daha hızlı ulaştık diyebilirim. 
Pandemi döneminde yaygınlaşmaya başlayan ve ödevlerimiz konusunda bizlere oldukça yardımcı olan ChatGPT tam bu dönemde 
radarıma girdi. 

Geri dönecek olursam neden haziran dönemine neden referans vererek başladım onu irdelemem lazım. Çünkü ödevleri yapmak 
amacından başka bir sebeple kullanmadım ve etrafta herkesin büyük bir hype ile “abi çok fena, abi çok fena ya” yere göğe 
sığdımadığı bu servisi aslında biraz küçümsediği kabul etmem gerekiyor. Belki de küçümsemenin ötesinde belki de mağara 
adamı için bir taş balta neyse o olabilecek kadar mühim olduğunu gözden kaçırdım. Bir diğer noktada ise benim için güvenlik 
çekinceleri bu kadar mühimken hatta belirli bir noktada paranoya seviyesine ulaşmışken böyle bir yapay zeka botunu 
kullanmanın senin hakkında pek çok veriyi sen daha vermeden elde edebilmelerini sağladığına dair geniş bir çekincem vardı. 
Haziran ayına geldiğimiz noktada ben zaten çoktan ChatGPT'yi ücretsiz olarak kullanıyordum,  Mistral AI modellerini LLama 
ve Google'nin büyük bir reklam balonu olan ve o dönemlerde benim için 2-3 günde sönüp gidiveren Gemini modelini 
kullanmıştım. Bir yandan da kelimelerimi dikkatli seçiyorum çünkü mu modeller için hayat döngüleri o kadar değişken ki, 
haziranda benim beklentilerime göre hüsran ile sonuçlanan Gemini, belki de 1 seneye ChatGPT'yi yiyip yok edecek kadar büyük 
bir model olacak.

Konuma geri dönecek olursak, bu modelleri kullanmış, midjourney, ve stable diffusion modellerini bile denemiş birisi olarak 
biraz da "boomer"vari bir zihinle küçümseyici ve aradağımı pek bulamamış gibi hissediyordum. Neden diyecek olursan yapay 
zeka dediğin zaman aklıma bir nevi Jarvis gibi bilge bir şey canlanıyor. Veya en azından direk her şeyiyle senin ne 
istediğini anlayıp senin isteklerine doğru düzgün cevaplar veren botlar canlanıyordu gözümde. Ancak 2024'ün ilk çeyreğine 
kadar çoğu model sorunu cevaplamaya başladığı noktada belirli bir döngüsel cümle cevabını getiriyordu, ki bu başladığında 
kendimi General Dynamic robotunun yine sağa sola düştüğü videoları izlerken bulmuş gibi hissediyordum, olmadığını görmenin 
verdiği egoist bir keyif.

Şunu da belirtmem gerekecek bir koldan da GitHub copilot özelliği ile belirli bir miktar ChatGPT ile haşır neşirdim. Hatta 
2 senedir aktif olarak kullanmama rağmen (bilenler bilir ki taaa 2021'in Kasımında Github Copilot'a kopyala yapıştırın zeli 
hali demiştim) kendisini otomatik dokümantasyon ve güzel isimlendirmeleri sağlamaktan öteye başarılı bulmuyordum. Hele kodu 
alacaksın chatgpt'ye atacaksın bekleyeceksin cevabı geri kopyalayıp yapıştıracaksın, ölme eşşeğim ölme, ona hiç girmedim 
bile. 

Haziran ayı bu noktada benim için şöyle önemli ki genelde hem ücretsiz modelleri, hem copilotu deneyimleyen bir insan 
olarak ChatGPT'ye pek ihtiyacım olmadığını düşünüyordum. Ancak Apple'ın sistem seviyesi ChatGPT entegrasyonu ve Elon'un 
"Apple cihaza sahip olan kişiler Tesla ve Space şirketlerine alınmayacak", "kapının önüne devasa bir Faraday kafesi 
koyacağım" gibi absürt bazı planları "Ne varmış kardeşim bu ChatGPT'de" diye beni merak ettitirdi. Ve haziranda da 
arkadaşımın bu teklifiyle ChatGPT'yi aktif olarak kullanmaya başladım

# Gelişme

Bu noktadan sonrasında biraz paranın acısını çıkartarak başladım diyebilirim, ücretli plan ile gelen 4o'nun suyunu sıktım 
resmen. Sıklıkla çeşitli araştırma sorularımı yönelttim, ve bir noktada Google gibi kullanmaya başladım diyebilirim. 
Kafamdaki net olmayan sorular konusunda ön araştırmayı hep ChatGPT ile yaptım ardından ise Google'da bunu nasıl 
aratabileceğimi isteyerek Google ile ChatGPT arasında mekik dokundum. 

Zaman geçtikçe yazdığım kodların bir kısmını sormaya başladım ve SteakOverflow'dan daha hızlı sorunlarımı çözüm bulduğumu 
fark ettim. Derken internet üzerinden araştırabilme özelliği sayesinde Google'a sorma aşamasını bile neredeyse ChatGPT'ye 
aktardım. Zaten görsel oluşturma ve müzik oluşturma özelliklerinden hiç bahsetmiyorum canım sıkıldıkça sıklıkla 
kullandığımdan emin olabilirsiniz. 

Derken Eylül ayına kadar nerede değilse günümün büyük kısmında sorunlarımı ChatGPT'ye sorular sorarak çözdüğümü fark ettim. 
Bir noktada şunun farkındayım yapay zeka araçları oldukça hayat kurtarıcı araçlar. Ve resmen üç ay boyunca bütün hayat 
kurtarıcı yanlarına hatta güzel yanlarını deneyimledim diyebilirim. Çoğu yapacağım internet araştırmasını, saatlerce 
sürecek hata araştırmalarını, günlerimi alabilecek implementasyonları, süreç iyileştirme ve doküman yazımı işlerine 
işlerini dakikalar içerisinde tamamlayabilmemi sağladı. Lakin  bir anda ChatGPT'nin kölesi oldum gibi hissedebilecek kadar 
çok kendisini kullandığımı düşünmeye başladım. 2025 Ocak itibari ile gün içerisinde yaptığı pek çok işte bunları kullanan 
birisi olarak ChatGPT'ye yedinci kez para ödedim diyebilirim :D

Şu o kadar ilginç ki anne babalarımız için fatura dediğimiz şey elektrik, su ve telefondan ibaretken hatta dedelerimiz için 
belki sadece elektrik ve su iken; bizler için bu listeye internet de dahil oldu. Ve yine kendi dönemdaşılarımız ve gelecek 
nesiller için bu liste içerisine bir anda chatgpt veya bir yapay zeka aracının dahil olması o kadar içten ki.  

---

Peki nereye gidiyoruz, bütün bu devrimsel gibi görünen yapay zeka işleri gerçekten devrimsel mi? 

Kasım ayına kadar artarak devam eden bu kullanımın bir noktada bana şunu hissettirdi. İnternette çoğu okuduğum haber 
sayfasının haberleri, blog yazıları, çeşitli bilgi sayfaları ve daha pek çok site; insanoğlunun zihinsel karmaşasının ifade 
etme güçlükleri ile birleşiminden oluşan cümlelerinden oldukça uzak, tekdüze ve ChatGPT'den alışkın olduğum cevaplara sahip.

Bu konuda tek muzdarip olan da ben değilmişim gibi youtube'den sevdiğim bir yayıncı olan Efe Aydal da aynı durumdan 
bahsetti. Gerçekten de çok basit bir iş yapmak istediğinizde, örneğin Ankara Ego ile Atakuleye hangi otobüsle çıkarım diye 
yazdığınızda google pek çok bot cevabı ile size dönüyor. İşte tam o anda, her ne kadar ChatGPT'den alışkın olduğum 
cevapların içi boşluğu bir kenara bana bazı faydalar sağladığını farkettim. 

Örneğin birebir bu soruyu sorduğumda:
[](/assets/img/posts/sWDjs72nsWoqSs7w.png)
ilgili siteleri gezip doğru ve yanlış verileri ayıklayıp önüme en azından mantıklı bazı bilgiler çıkartıyor. Direk kullanıp kullanmamak tamamen bana kalmış ama filtreleme yeteneğinin kuvveti yadsınamaz.

Sadece basit soruların cevaplanması da değil aslında beni bu nereye gidiyoruz diye sorgulatan. Bir ara o kadar kaptırdım ki bu sesli sohbet konusunu, elalemin yapay zekasıyla gecenin bir yarısı Aristo'nun 4 elementi ve idea'ları üzerine uzun uzun bir şeyler anlatırken buldum ChatGPT'yi. Esasında bu yazının taa başından beri ChatGPT övdüm gibi oldu ama bunu başarabileceğiniz farklı modeller de yok değil. OpenWebUI sayesinde llama-3'ünden mistral'ine pek çok modeli de eşzamanlı olarak denedim. hatta bu yazıyı yazmaya başladığımda çıkan deepseek-r1 modelini de bu satırları yazarken çoktan kullanmıştım. Ancak yapay zekanın ChatGPT tarzında hazır bir ürün olarak sunulduğu, içerisinde sesli sohbetinden, görüntü oluşturmaya pek çok özelliği barındıran bir uygulama formu ile karşıma çıkması kendimi yapay bir dünyanın ortasında bulmuş gibi hissetmeme neden oldu. Şunu buradan nereye geleceğim diye ben de düşünüyorum bu noktada nasıl anne babalarımız kendilerini bir anda internet alemi içerisinde bulduysa biz de kendimizi yapay bir dünyanın ortasında bulmuş gibiyiz.


# Sonuçma

Bilgi verme amacından uzak bir yazı oldu ancak sadece deneyim ve hislerimi bir noktada böyle bir yazıya dökmek istedim. Muhtemelen bir yazının, defalarca kere yapay zeka botları tarafından okunacağı bir dünyaya gidiyoruz. 

O gelecek gerçek olana kadar...

Hoşçakalın dünyalılar, ben dostum.