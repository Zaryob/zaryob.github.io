---
layout: post
title: "Kendine Yalan Söyleme!"
date: 2025-03-07 10:33:13 +0300
categories: [genel]
tags: ["yapay-zeka", "türkçe"]
lang: tr
description: "Yapay zekada halüsinasyon, eleştirel düşünme ve yapay zeka kullanımında kendimize dürüst olmak üzerine bir eleştiri."
cover_image: "/assets/img/posts/medium-kendine-yalan-soyleme-1.webp"
medium_url: "https://medium.com/@zaryob/kendine-yalan-s%C3%B6yleme-99539aa2d919"
---

## Yapay zekada halüsinasyon gerçek zekada halüsinasyon… Yapay zeka kullanımı üzerine bir eleştiri.

![Pencereden dışarı bakan kişi çizimi](/assets/img/posts/medium-kendine-yalan-soyleme-1.webp)

Yapay zeka artık kolumuz bacağımız gibi bir parçamız oldu. Soracağımız soruları ona soruyoruz, araştırmalarımızı onun üzerinden yapıyoruz(?), tüm bilgiye onun sayesinde erişiyoruz(!) hatta yeri geliyor psikolojik danışmanlık alıyoruz.

Peki yapay zeka ne kadar doğru çalışıyor, peki doğrunun tanımı ne? hepsinden ötesi biz yapay zeka kullanırken kendimize dürüst davranıyor muyuz?

## Giriş

İlk başta yapay zeka derkenki kastımı söylerek başlayalım. Burada bahsedeceğim yapay zeka aslında büyük dil modeli dediğimiz modellerden bahsediyorum yani biz buna yazıyla SORULAR sorduğumuz zaman cevaplar üretebilen robotlar diyebiliriz.

Yapay zeka sistemleri, büyük veri kümeleri üzerinde eğitilerek örüntüleri öğrenir ve bu örüntülere dayanarak cevaplar üretir. Basitçe yapay zeka modelleri aslında daha öncesinde yazılmış farklı cümleleri birbiri arasında sinir ağları oluşturarak biz bir soru sorduğumuz zaman devamını getirme, cümleyi tamamlama veya sorulara cevap üretme şekilde çıktılar verir. Bu gel zaman git zaman tabi farklı optimizasyonlarında eklenmesi ile beraber gerçekte düşünen bir insan gibi cevaplar verebilme yeteneği kazandı. İnsan nasıl düşünür bunu apayrı ele amak lazım ama o bu yazının konusu değil.

İşte ChatGPT, LLama, Claude gibi modellerin tam olarak geldiği köken bu. Ancak bugün hala düşündüğümüz üzerine tezler yazdığımız iki konu var ki bunlardan birisi fairness kavramı.

## Yapay Zeka İçin Fairness Kavramı

![Gözleri bağlı adalet heykeli ve terazi](/assets/img/posts/medium-kendine-yalan-soyleme-2.webp)

Türkçeye basitçe adalet olarak çevirebiliriz ama tam olarak adalet diye çevirmek benim için mantıklı gelmiyor. Çünkü bir yapay zeka modeli düşünün bu yapay zeka modeli eğitildiği ülkenin düşünce yapısını, toplumsal yapısını, hatta o ülkedeki yasakları bile bünyesinde barındırıyor. O yüzden verdiği cevaplar genellikle kendisini nasıl eğitildiğine dair bize çıkarımlar sağlıyor. Bunun potansiyel sonuçları arasındaysa yapay zeka modellerinin yanlı sonuçlar çıkartması belki ayrımcı sonuçlar çıkartması ve hatta bilerek ve isteyerek bunu yapmasına neden oluyor.

Bir de bundan azade ikinci bir konuda var ki bu çok ilginç: siz her ne kadar yanlı bir şekilde eğitmeseniz bile modeller, bazı önyargılara sahip olabiliyor. Ve hatta kendi bünyesinde barındırdığı bazı karmaşıklıklardan dolayı ve bazı belirsizlikler dolayı (çünkü kapalı kutu bir sistem aslında baktığımız zaman sinir ağları, yani biz dışarıdan müdahale edemiyoruz biz dışarıdan nasıl çalıştığını anlık olarak göremiyoruz daha ziyade bir sistem gibi düşünün input veriyoruz output alıyoruz) bilerek isteyerek yönlendirilebiliyor. Peki yapay zeka da adalet dediğimiz konu neye yarıyor diye soracak olursanız; adalet, özel geçmişler, taksonomiler, ve yerine getirme teknikleri dediğimiz bir nevi filtreler, mantıksal filtrelerden oluşuyor.

Esasında bu adalet kavramı hala üzerine çalışılan bir kavram. Bugün scholar’a baktığınız zaman son dönemde çıkan pek çok makalede farklı metrikler ile farklı sonuçları karşılaştırarak adil büyük dil modelleri oluşturma üzerine oldukça fazla çalışma devam ediyor ancak mevcut araştırmanın kendine içkin bazı zorlukları var. Oldukça ideal bir yapıdan bahsedelim. Büyük dil modellerinde adillik farklı metriklerle ölçüm yaparak, karar mekanizmaların algoritmalarının şeffaflığını ve öngörülebilirliğini arttırarak, ve modelin iletildiği verileri uygun şekilde (yani ön yargılar içermeyecek ve her türde düşünceyi içerecek dengeli bir model olarak oluşturmak) dağıldığını teyit ederek, modelin adil cevaplar verebileceğini kısmen de olsa garanti etmeyi amaçlıyor. Ancak bu demek değil ki bizim elde ettiğimiz veriler her daim önyargısız, her daim yansız. Daha da kötüsü, özellikle reinforcement learning olarak adlandırdığımız özyinelemeli öğrenme özelliğine sahip büyük dil modellerinde, kullanıcının girdiği komutlar bile modelin ilerleyen safhalarında bazı ön yargılar oluşmasına neden olabiliyor.

Metrik değerlendirme algoritmaları adalet ölçümleri aynı değil ayrıca. Farklı metrikler arasında çıkar çatışması dediğimiz bir fenomen oluşması sebebiyle bir ölçütü optimize etmek diğer bir ölçüt de gerilemeye yol açabiliyor. Ve bir sonraki anlatacağım noktada bahsedeceğim gibi eğer ki bir dil modelini kişiye doğru cevaplar verme yönünde eğitirseniz kişi girdiği komutlarla modeli yanlış bildiğine ikna ederek çeşitli yanlışları doğruymuş gibi besleyebiliyor. Bu da internette sıkça gördüğümüz saçma sapan ChatGPT ekran alıntılarını doğuruyor. Ama ben nasıl bu noktada yapay zekada halüsinasyona değineceğim.

## Ne Kullandı Bu Yapay Zeka

![Düşünceli filozof heykeli](/assets/img/posts/medium-kendine-yalan-soyleme-3.webp)

Sıklıkla saçma sapan cevaplar veren büyük dil modelleri için bu soruları soruyorum, çünkü bazen bir insanın basitçe internette 3 dakikada bulabileceği şeyleri bilmeyince insan ChatGPT’nin verisetinden şüphe ediyor. Esasında olay sadece veriseti ile alakalı değildir. Bu durum, özellikle dil modellerinde görülen “halüsinasyon” olarak bilinir; örneğin, bir yapay zeka modelinin var olmayan bir bilgiyi gerçekmiş gibi sunması veya mevcut verilerle çelişen ifadeler üretmesi tam olarak bunun örnekleridir. Modelin eğitildiği verilerdeki eksiklikler veya yanlılıklar, hatalı çıktılara yol açabilir. Ayrıca model tüm bağlamı tam olarak anlamayabilir ve bu da yanıltıcı sonuçlar doğurabilir. Bunlar beklenilir şeyler, çünkü modellerin karakutu gibi çalışması, olası cevapları öngörebilmeyi zorlaştırıyor.

Daha ilginç olan kavram ise kullanılan modelin doğru bilgiyi tam olarak ayırt edemeyip, olası cevaplar arasından rastgele seçim yapabilmesi. Beni keyiflendiren cevaplar tam bu durumda çıkıyor. Örneğin ChatGPT’ye birisinin doğum gününü soruyorsunuz, karşılığında çok acaip bir tarih veriyor. Çok tanınmamış ama internette araştırarak bulabileceğiniz bir kişiyi soruyorsunuz, Martin Luther King J. ilan ediyor onu bir anda.

Özellikle bu durumlar ödev yaparken ortaya çıkarsa değmeyin akademisyenin keyfine...

## Peki Bunlar Ne Anlatıyor Bize

Her iki kavram da yani adalet ve halüsinasyon, o çok güvenilir gördüğümüz, her şeyi ona sorduğumuz bilgi yumağı yapay zekalarımızın güvenilirliğini ve toplumsal kabulünü doğrudan etkiliyor. Hallüsinasyon, yanlış veya eksik bilgi üretimi ile sonuçlanırken, bu hatalı çıktılar belirli gruplara karşı önyargıların pekişmesine ve adaletsiz sonuçların ortaya çıkmasına neden olabilir. Örneğin, tarihsel önyargılar içeren bir veri seti kullanılarak eğitilmiş bir model, belirli demografik gruplar hakkında yanıltıcı veya zarar verici bilgiler üretebilir. Dahası bu bilgi zamanında elimine edilmezse ChatGPT gibi gelişen modellerin bu yöne doğru hareket etmesine neden olur. Bu açıdan bakıldığında, hallüsinasyon probleminin minimize edilmesi, yalnızca doğru bilgi sunmak açısından değil, aynı zamanda toplumsal adilliğin sağlanması açısından da önemlidir.

Şimdi durum buyken biraz da çuvaldızı kendimize batıralım. Yapay zeka yanlış cevaplar üretebiliyor, peki biz doğru ve yanlışı ayırt edebiliyor muyuz?

## İnsan Gözüyle Bir Bakış

Öncelikle insan nasıl düşünür sorusuna bir bakış atalım, bu yazının konusu değil demiştim ama üstünkörü geçmekte bir fayda gördüm. İnsan düşüncesinin temelini, beynimizde bulunan milyarlarca nöron oluşturur. Bu nöronlar, karmaşık sinir ağları vasıtasıyla birbirleriyle iletişim kurar. Yapay zeka da aynen böyle sinir ağlarının sıralı tetiklenmesi ile bizlere veriler üretir.

İnsanlar, eleştirel düşünme yetenekleri sayesinde çeşitli kaynaklardan gelen bilgileri değerlendirip, hangi bilginin doğru, hangisinin ise yanıltıcı olduğunu sorgulayabilir. Yapay zekada da bu şekilde sorgu algoritmaları var. Ancak insan düşüncesi, beynimizin karmaşık yapısı, bilişsel süreçler, duygular ve sosyal etkileşimlerin kesişim noktasında ortaya çıkar. Yapay zekanın rastgeleliğe dayalı (aslında bias theory rastgelelik teorisi olarak çevrildiği için böyle söylüyorum) yapısının bu süreçleri algoritmik bir sürece dönüştürmemiz zaman alacak gibi duruyor.

Daha henüz ilk zamanlarını yaşadığımız yapay zeka devriminde(?) yazıyı yazmama neden olan bir şeyi sorgulamak istiyorum.

Yapay zeka haüsinatif ve doğru olmayan bilgileri getiriyorken, yapay zeka kullanarak iş yapıp ben yaptım demek ne kadar doğru?

## Kendimizi Masaya Yatıralım

Esasında bizler için mühim olan yapay zekayı bir araç olarak esas almak olmalıdır. Ve bunu yaparken şunları kesinlikle zihnimizden çıkartmamalıyız. Modeller her zaman doğrulukçu değildir, GPT-4 gibi son teknoloji bir modelin bile basit bilgi sorularında doğruluk oranı %40’ın altında kalmakta​ bu da özellikle kritik uygulamalar için yetersiz bir oran olarak karşımıza çıkmaktadır. Çünkü yapay zeka modelleri nihayetinde bir araçtır ve onu nasıl kullanacağımızın sorumluluğu bizdedir. İşte tam olarak da tehlike burada,**_kendine yalan söylemek_**!

Microsoft ve Carnegie Mellon araştırmacılarının yaptığı bir çalışmada, yapay zekaya fazla güven duyan kişilerin onun ürettiği çıktıları daha az sorguladığını göstermiştir.

[Çalışmaya dair Pure AI haberi](https://pureai.com/articles/2025/02/18/study-finds-genai-is-reconfiguring-critical-thinking.aspx)

Bu haber çok yeni bir haber olsa bile değerli buldum ve yazıyı bu haberi okuduktan sonra yazma kararı aldım. Hasta olduğum için belki de zaman geçsin diye yapıyorum.

Buradaki tehlike büyük dil modellerinin verdiği bir bilgiyi filtrelemeksizin yaymak ve bu bilgi yanlış ise, istemeden de olsa yanlış bilginin yayılmasına katkı sağlamış olursunuz. **Aşırı güven, sorumluluk duygusunu azaltabilir.** İşte siz peki sonuca ulaşmak için bir yapay zekaya ne kadar güveniyorsunuz?

Benim kendi düşüncelerim ve kullanım senaryolarım için yapay zeka **eleştirel düşünme**becerilerini geliştirmesi için bir fırsat sunuyor. Bir yapay zeka sisteminden yanıt alındığında, bu yanıtı değerlendirme süreci aslında bir eleştirel düşünme egzersizi olarak görüyorum. Verilen bilgiyi analiz etmek, çelişkileri aramak, akıl yürütmek ve gerektiğinde daha fazla soru sorarak baştaki girdimize genelleştirme veya özelleştirme yapabilme imkanı sağlamaktadır. Bu pratik, bireyin sorgulama ve analiz etme alışkanlıklarını güçlendiren bir pratik.

Ancak kullanıcılar kabullenici rolüne girilmesi, durumunda yapay zekanın önerilerini veya çözümlerini sorgulama eğiliminin azalması, zihinsel tembelliğe yol açma potansiyeline de sahip. Bu tembellik ise uzun vadede sorun çözme becerilerimizi zayıflatabilir. Bunu şununla karşılaştırmak istemiyorum, üniversite fizik yazılılarında (malum hocaya buradan selam olsun…) bol virgüllü sonuçlar veren saçma argümanlarla ile doldurulmuş problemleri hesap makinesi olmadan çözmemize zorlayan akademisyenler gibi “Efendim her şeyi kafadan hesaplamak zorundasınız” demeyeceğim bu yanlış bir bakış açısı. Yapay zekayı gerçekten de hesap makinesi gibi bir destek aracı olarak görüp, asıl düşünme sürecini kendimiz yürütmeye devam etmeliyiz. Yapay zeka bazı bilişsel yükleri alsa da, ortaya çıkan sonuçları doğrulama ve denetleme işi bizde kaldığı için eleştirel düşünme önemini koruyor.

Peki bu araçları kullanarak yaptığımız şeyleri kendi başarımız olarak lanse ettirmek nasıl değerlendirilmelidir? Akademisyensiniz, günlerinizi harcayarak makale yazıyorsunuz veya benim gibi medium yazarısınız gece uykudan feragat edip araştırarak, gün içinde kurgunuzu düşünüp iş bitip eve dönünce düşüncelerinizi yazıya dökerek yani zihinsel aktivitelerle destekleyerek bir şeyler yazıyorsunuz. Ama birisi çıkıyor, chatgpt claude llma derken bir büyük dil modeli salatasından farklı paragraflar ürettirip sonra bir başka modele bunları verip makale diye yayınlıyor. Bu ne kadar doğru, ne kadar etik? Veya en güzel örneği midjourney. Tabi ki ben de bazen midjourney kullanıyorum ama tutup da bu benim sanat eserim veya bunu ben çizdim diyemiyorum. İşte bunu diyememe konusunda otoriteler şöyle bir kural geliştirdiler: yapay zeka araçları kullanılarak oluşturulan içeriklerin, yapay zeka tarafından üretildiğinin açıkça belirtilmesi gerekiyor. Peki biz bu kuralı koyduk herkes riyaet edecek değil mi? Ne kadar pembe bir düşünce bu.

Yapay zeka kullanımı sadece teknoloji veya araç kullanımı değildir; aynı zamanda etik ve sosyal sorumluluk içeriyor. Biraz önce örneğini verdiğim gibi, sonuçların kime ait olacağı problemi, yapay zeka desteğiyle ürettiğiniz bir içerikte hatalı veya ayrımcı bilgiler yer alıyorsa bu yanlışın sorumluluğu, yapay zeka modelinin ayrımcı tutumlar içeren sonuçlar vermesi gibi konularda, doğrudan sorumlu olan kişi kimdir? Modeli yayınlayan mı, kullanan mı, yoksa verileri sağlayanlar mı? Veriler demişken bu denli büyük modelleri eğitmede kullanılan veriler yerden patates olup bitmiyor, peki bu verilerin toplanma, ayıklanma ve modele uyumlandırma süreçlerindeki etik kaygılar ne olacak?

Kullanıcılar olarak, ortaya çıkan sonuçların etkisini değerlendirme ve gerektiğinde müdahale ederek düzeltme sorumluluğumuz var. Bu bilinci geliştirmediğimiz sürece, teknolojinin olumsuz sonuçlarından sorumlu hale gelebiliriz. Ancak hepsinden önce kendimize yalan söylemeyelim. Kullandığımız araç bize pek çok imkan sağlıyor, onu kullanan biz olarak zaten büyük bir yetenek ve bilgi birikimi ile bunu yapıyoruz. Ancak sahiplenmemiz gereken kusursuz sonuçlardan ziyade içerisinde bizden parçalar ve hatta kusurlar taşıyan şeyler olmalı. Yazdırdığımız makalelerde belki yararlanacağız ama 3 dakikada deepsearch yapmak ChatGPT için bir anlam ifade etmezken, onu kopyalayıp bir yere yapıştırmak bizi nasıl geliştirebilir ki? Geliştirmeyen şeyler bizleri nasıl tatmin edebilir?

Bununla beraber biz felsefik olarak daha hâlâ doğrunun ne olduğunu bulamamışken çeşitli doğrular oturtmaya çalışmak ne kadar uygun sonuç verecek onu da sizin takdirinize bırakıyorum.

Bu yazı benlik bu kadar. Esen kalın.
