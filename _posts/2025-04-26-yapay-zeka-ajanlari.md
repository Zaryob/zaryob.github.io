---
layout: post
title: "Yapay Zeka’da Üçüncü Dalga: Yapay Zeka Ajanları"
date: 2025-04-26 21:44:10 +0300
categories: [genel]
tags: ["artificial-intelligence", "ai-agent", "türkçe"]
lang: tr
description: "Google’ın Agent Development Kit’ini duyurmasıyla birlikte, yapay zekada “ajanlar” kavramı yeniden ön plana çıktı. Araştırmacıların ilk günlerden beri hayal"
cover_image: "/assets/img/posts/medium-26b74a71dbcc69.webp"
medium_url: "https://medium.com/@zaryob/yapay-zekada-%C3%BC%C3%A7%C3%BCnc%C3%BC-dalga-yapay-zeka-ajanlar%C4%B1-0c47544c314e"
---
<figure><img loading="lazy" decoding="async" width="1024" height="676" alt="" src="/assets/img/posts/medium-26b74a71dbcc69.webp" /></figure>

<p>Google’ın Agent Development Kit’ini duyurmasıyla birlikte, yapay zekada “ajanlar” kavramı yeniden ön plana çıktı. Araştırmacıların ilk günlerden beri hayalini kurduğu, algılayan, düşünen ve harekete geçen yazılım ve donanım sistemleri — yeni bir çağın eşiğinde. Bu yazıda, birinci ve ikinci dalgayı kısaca gözden geçirip, üçüncü dalganın neyi farklı kıldığını, uygulama örneklerini ve geleceğe dair temel bakış açılarını ele alacağız.</p>

<h2>İlk Dalga</h2>

<p><strong>Monolitlerden Mikro Topluluklara</strong><br>1980’lerde ve ’90’larda Marvin Minsky ve Rodney Brooks gibi öncüler, “büyük beyin” yapay zekaya meydan okudu. Minsky ve Brooks’un yapay zeka ajanlarının tasarımlarına dair iki yaklaşım, yapay zekânın “nasıl düşünürüz?” sorusuna çok farklı yanıtlar sunmaktadır. Minsky’nin <em>Zihnin Topluluğu</em> (<em>Society of Mind</em>), zekayı birçok basit, birbiriyle etkileşen alt ajanın ortak çalışması olarak tanımlarken, Brooks ise gerçek dünya etkileşimleriyle öğrenen bedenlenmiş ajanları savundu.</p>

<figure><img loading="lazy" decoding="async" width="311" height="162" alt="" src="/assets/img/posts/medium-80f1ea4850cfcc.webp" /><figcaption>Marvin Minsky</figcaption></figure>

<p>Minsky’e göre zihin, tek bir büyük “görünen zekâ”dan ziyade; her biri basit bir işi ya da kuralı gerçekleştiren <strong>çok sayıda küçük düşünenle </strong>(subagent) birlikte çalışmasından oluşan bir topluluktur. Bu alt düşünenler, doğrudan algılama, sınıflandırma, hafıza erişimi, planlama gibi işlevler için özelleşmiş modüllerdir. Zekâ, bu modüllerin etkileşim ağından doğar.</p>

<p>Brooks’un düşüncesinde ise, soyut içsel modellerin (dünya temsillerinin) yapay ajanları yavaş ve kırılgan kıldığını savundu. Onun yerine, <strong>doğrudan algı–eylem (sense–act) döngüleri</strong> üzerinden hızlı, reaktif ve basit davranış katmanları gerektiğini yani zekânın oluşması için fiziksel bir bedene, sensörlere ve etkileyicilere (actuator) ihtiyaç vardır. Ajan, ancak gerçek dünyayla etkileşim kurarak öğrenebilirdi.</p>

<p>Bu dönemde FIPA ACL ve KQML mesajlaşma protokolleri, RDF/OWL bilgi modelleri ile JADE ve NetLogo gibi çerçeveler hayata geçti; ancak yapay zeka ana akım yazılıma tam anlamıyla nüfuz edemedi. 2000’lerde akıllı telefonlar ve sosyal medyanın yükselişi, sektörün dikkatini dağıttı ve yapay zekanın arka sahnede beklemesi süreci başladı.</p>

<h2>İkinci Dalgayı Ne Tetikledi?</h2>

<p>Yapay zekâ, yıllar içinde iniş çıkışlar yaşadı, temel teorisi 1970&#39;lerde atılan pek çok yapay zeka yöntemi, methodoloji vardı, çoğu hayata geçmek için yüksek kaynaklara ihtiyaç duyan bu projeler uzun süre matematiksel olarak veya ufak demolar olarak karşımıza çıktı; ama son on yıldaki hesaplama gücü, veri bolluğu, derin öğrenmedeki atılımlar ve pazarın ilgisi bir araya gelince, bir anda devasa bir patlama (AI Hype) meydana geldi. Yani çalışmalar son 5 yılda gelmedi ve hatta 50 senedir nerdeyse hiç durmadı; sadece bugünkü başarılar, hem teknolojik hem de ekonomik koşulların olgunlaşması sayesinde milletçe görece “uyku”dan uyanır gibi gerçekleşti. Ve tam da ikinci dalga bu noktada başladı.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="576" alt="" src="/assets/img/posts/medium-2c37fed069ac16.webp" /></figure>

<p>2017’den itibaren Transformer tabanlı modellerin dil alanında uygulanması ile bugün yakinen bildiğimiz modeller (BERT, GPT gibi) doğal dil işleme alanında çığır açtı. Kendine dikkat (self-attention) mekanizması olarak adlandırılan mekanizma sayesinde <strong>transformerler</strong> tabanlı modeller uzun menzilli bağlantılar ile her kelime tüm cümleye “dikkat” ederek uzak ilişkileri doğrudan modelleyebilmesine imkan sağladı. Her kelimeye, bağlama göre farklı önem puanları atandığı için çok daha esnek ve bağlamsal temsiller ortaya çıktı ve GPT gibi modellerin temeli atılmış oldu.</p>

<p>OpenAI, Hugging Face gibi servislerin API’leri, transformer tabanlı model geliştirebilme altyapısı şirketlerin birkaç satır kodla güçlü modelleri hemen entegre edebilmesini sağladı.</p>

<p>Bu entegrasyon da sonucunda üretken uygulamalara yol açtı. İçerik yazma, kod üretme, görsel yaratan modeller (DALL·E, Stable Diffusion) gündelik hayata hızlıca girdi. Ve birkaç sene içerisinde hayatımıza hızlıca bir giriş yaptı.</p>

<p>Düşünün, ikinci dalga olarak görebileceğimiz ilk olay olarak 30 Kasım 2022 tarihinde ChatGPT’nin araştırma önizlemesini alacak olursak 2025 Nisan’a kadar geçen süreçte yapay zekanın atladığı çağı görmek hiç de zor olmayacak.</p>

<p>Peki bu nereye gidecek?</p>

<h2>Üçüncü Dalga: Ajanların Şafağı</h2>

<p>Yapay zeka ajanı, çevresini algılayıp (sensör / girdi) bu algılamalara göre eylemde bulunan (aktüatör / çıktı) ve belirli bir hedefe ulaşmak üzere tasarlanmış yazılım veya donanım sistemidir.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="683" alt="" src="/assets/img/posts/medium-aa1ecebbf02793.webp" /></figure>

<p>Üçüncü dalga, “ajan” kavramının modern LLM’ler, mikroservis mimarileri ve bulut altyapılarıyla kesişmesiyle şekilleniyor. Bir “ajan”ın sahip olması gereken 4 temel özellik bulunmaktadır. Bunlar:</p>

<ol><li><strong>Algılayıcılar (Perceptors):</strong> Ortamdan toplanacak veriler (ör. kameralar, mikrofonlar, API’ler).</li><li><strong>Durum Temsili (State):</strong> Toplanan veriyi iç modelde işler ve çevre hakkında “anlık fotoğraf” oluşturur.</li><li><strong>Karar Verici / Planlayıcı (Decision Maker):</strong> Hedefe nasıl ulaşacağını belirler; basit kurallardan karmaşık optimizasyon algoritmalarına kadar değişir.</li><li><strong>Etkileyiciler (Actuators):</strong> Karar sonucunda eylemleri gerçekleştirir (ör. robot kolu hareket ettirme, mesaj gönderme, veri tabanına yazma)</li></ol>

<p>Büyük verinin sayesinde yapay zeka ajanları bir nevi algılayıcılara sahip oldu. Apple Intelligence gibi çözümlerdeki anlık ses ve görüntülere, ChatGPT’nin kamera verilerini inceleme özelliğine filan hiç değinmiyorum bile.</p>

<p>GPT tarzı düşünsel modeller, planlama, özetleme ve çıkarım yapma yetenekleriyle ajanlar olarak adlandırılan yapılara gerçek bir “beyin” kazandırıyor, karar verme mekanizmaları oluşturuyor.</p>

<p>LangChain, Microsoft AutoGen ve Google Vertex AI Agent Builder gibi kütüphaneler, LLM’leri web tarayıcılar, veritabanları hatta robotik API’leri ile birleştirerek ajanların algılamasını ve harekete geçmesini sağlıyor.</p>

<p>Kubernetes, sunucusuz fonksiyonlar ve olay odaklı mimariler, ajanların talep üzerine ayağa kalkmasına, duruma göre paylaşılmasına ve esnek ölçeklenmesine imkân tanıyor; mikro-ajan bulutları oluşturmaya imkan sağlıyor.</p>

<p>Model Context Protocol (MCP) ve Google’ın A2A spesifikasyonu gibi protokoller, ilk dalgadaki FIPA ACL çabalarını andıran şekilde, ajan platformları arasında birlikte çalışabilirlik vaat ediyor.</p>

<p>Bunlar da yapay zeka ajanlarının bugününü şekillendiriyor.</p>

<h2>Sohbet Botlarının Ötesinde: Vahşi Ajanlar</h2>

<p>Hayatımıza sohbet botları ile girerek vucüt bulan yapay zeka bugünlerde pek çok konuda hem özel hem de iş hayatımıza girmiş durumda. Hem de bir seneden kısa süre içerisinde, çok fazla alanda hayatımıza dahil olmuş durumdalar, artık çok daha karmaşık görevleri üstleniyor. Bunlardan aklıma gelen en önemlilerine değinmeden geçemeyeceğim.</p>

<ul><li><strong>Kurumsal İş Akışı Orkestrasyonu</strong><br>CRM güncellemeleri, finansal mutabakatlar ve tedarik zinciri lojistiği gibi parçalanmış sistemleri koordine eden ajanlar, manuel el değişimlerinin yerini otomatik boru hatlarına bırakıyor. Pek çok şirketin kendisine kazandırdığı bu yapılar, insan ihtiyacını azalttığı gibi çalışan verimliliğini de arttırıyor</li><li><strong>Nesnelerin İnterneti (IoT) ve Uçta İş Birliği</strong><br>Akıllı üretimde, uç cihazlardaki mikro-ajanlar kaynak kullanımını müzakere ediyor, üretim hatlarını yeniden yapılandırıyor ve bakım gereksinimlerini önceden işaretliyor. Sadece fabrikalarda büyük üretim hatlarını değil kişisel kullanımda bile bu uçtan uca işbirliğini görebiliyoruz. Ev eşyalarından arabalara kadar geniş alanlarda hayatımıza giren bu uçtan uca işbirliği, parmağımızın ucundaki bir telefona bağlı komutlarla evinizi çekip çevirmenize, arabanızı park etmeye ve hatta ayağınıza kadar getirmeye imkan sağlıyor.</li><li><strong>Kişisel Üretkenlik Yardımcıları</strong><br>Özellikle Apple Intelligence gibi araçlar ile gündelik yaşamımıza dahil olan yapay zeka ajanları, gelen kutunuzu tarayıp filtreleyen, zaman dilimlerinizi, tercihlerinizi ve seyahat kısıtlamalarınızı dikkate alarak proaktif toplantılar planlayan veya karmaşık belgeleri taslak aşamasından son hâline kadar size yardımcı olan yeni nesil “dijital uşaklar” haline dönüştü.</li></ul>

<h2>Ajanik Yapay Zeka Çağına Bakış Açıları</h2>

<p>Yapay zeka ajanlarının herhangi sistemden farklı olarak çok fazla gri alana sahip olduğunu belirtmekte yarar var. Yapay zeka ajanlarının harekete geçmesi, onun diğer yazılım parçalarıyla veya diğer cihazlarla ve hatta sizle etkileşime girmesi, kullanıcının çevresini ve bağlamını yorumlaması gerekir — kısacası, yerleşik, özerk, zeki, sosyal olması gerekir. Peki bunlar beni ne gibi konuları düşünmeye itiyor?</p>

<h2>1. Yönetişim ve Etik</h2>

<ul><li><strong>Denetlenebilirlik:</strong> İş kritik kararlar ajanlara devredildikçe, “açıklanabilir ajan” günlüklerine — bir nevi denetim izlerine — ihtiyaç duyulacak.</li><li><strong>Hesap Verebilirlik: </strong>Net yasal çerçeveler ve sigorta modelleri elzem olacak . Bir ajan maliyetli bir hata yaptığında sorumluluk kime ait? Geliştiricilere mi, platform sağlayıcılara mı, yoksa son kullanıcıya mı? Bu gibi sorulara cevap verecek herhangi bir yasal düzenleme olmadığı gibi hayatımızın içinde 40 yıldır internet bulunmasına rağmen siber suçlara karşı sigortalama politikası bile yeni yeni gelişmeye başlamışken yapay zeka kaynaklı hataların potansiyel kayıplarının nasıl karşılanacağı büyük bir muammadır.</li><li><strong>Hizalama:</strong> Ajanlar dar KPI’ları (key performance indicator) optimize ederken, metriği manipüle eden “araçsal yakınsama” davranışları sergileyebilir. Metriğin manipüle edilmesini engellemek için oldukça objektif çerçeveler tanımlamalar gerektiği gibi pek çok noktada sağlam etik kısıtlamalar ve insan denetimli süreçler içermeden yol alınamayacağa benziyor.</li></ul>

<h2>2. Güvenlik ve Sağlamlık</h2>

<ul><li><strong>Adversarial Saldırılar:</strong> Siber güvenliğe değindiğimizde yapay zekaya karşı yapılan siber saldırıları daha doğrusu “yapay sosyal mühendislik saldırılarına” girmeden olmaz. Ekranları veya web formlarını yorumlayan ajanlar, özenle hazırlanmış girdilerle kandırılabilir. Düşmanca örneklere karşı sertleştirme ve algılama kanallarının bütünlüğünü sağlamak elzem.</li><li><strong>Tedarik Zinciri Riskleri:</strong> Birçok ajan platformu üçüncü parti LLM API’lerine ve açık kaynak modüllere dayanıyor. Bu bileşenlerin kaynağının doğrulanması, arka kapı veya kötü niyetli güncellemelere karşı koruma sağlayacağına inanıyoruz.</li><li><strong>İzolasyon vs. İş Birliği:</strong> Ajanları sandbox’lamak aşırı erişimin önüne geçerken, fazla izolasyon iş birliğini engeller. İşletim sistemi güvenliğinden ödünç alınan ince kontrollü yetenek modelleri dengeyi kurabilir.</li></ul>

<h2>3. Merkeziyetsizlik ve Uçta Çalıştırma</h2>

<ul><li><strong>Federatif Ajanlar:</strong> Tek bir bulut beyninden ziyade, ajanlar cihazlar arasında federatif şekilde iş birliği yapabilir, öğrenilmiş ağırlık veya politika parçalarını hassas verileri merkezileştirmeden paylaşabilir.</li><li><strong>Düşük Enerji Tüketimli Uç Ajanlar:</strong> Sensörler veya giyilebilir cihazlara gömülü küçük “nano-ajanlar”, yalnızca gerektiğinde güçlü bulut ajanlarına danışarak yerel çıkarım yapabilir. Ancak bu durum da uç ajanların güvenliği sorusunu da ortaya getiriyor.</li></ul>

<h2>4. İnsan-Ajan İş Birliği</h2>

<ul><li><strong>Tamamlayıcı Güçler:</strong> Ajanlar desen tanıma ve tekrarlı işlerde üstünken, insanlar sağduyu, empati ve stratejik yargıda hala bir adım önde. İnsan ve ajan arasında akıcı görev geçişleri tasarlamak başarılı uygulamaların anahtarı olacak.</li><li><strong>Güven Kalibrasyonu:</strong> Otonom bir ajana aşırı güven denetimsizlik hatalarına, eksik güven ise benimsemeyi engeller. Belirsizlik yüksek olduğunda mantığı açığa çıkaran adaptif şeffaflık, kullanıcı güvenini ayarlamaya yardımcı olur.</li></ul>

<h2>Sonuç</h2>

<p>Yapay zeka ajanları, daha iyi sohbet botları geliştirmemize yardımcı olmayacak. Yapay zeka ajanları, yapay zeka halüsinasyonlarına yol açmamalı (burda bahsettiğim halüsinasyon yapay zekanın kendi gördüğü değil de bizim ona dair gördüklerimiz :) ) Daha gidecek çok uzun bir yol var, genel yapay zeka olarak adlandırdığımız o yüce yapay zekaları bize getirmeyecek. Onun adımları bir başka koldan halihazırda yürüyor. Belki ileride ondan da bahsederim bir yazımda.</p>

<p>Ama yapay zeka ajanları, birçok görevin daha önce hayal bile edilemeyecek ölçüde otomatikleşeceği bir kurumsal yazılım devrimi getirecek ve getirecekten de öte getiriyor bile.</p>

<p><em>Hazır olun ya da olmayın, üçüncü dalganın üzerindeyiz. Şimdi batma veya elimizi hızlı tutarak sörf yapma zamanı.</em></p>
