---
layout: post
title: "Bilimsel Python: SciKit Kütüphanesi"
date: 2023-03-18 12:05:28 +0300
categories: ["programlama"]
lang: tr
description: "Scikit-learn, sklearn olarak da bilinir, Python’da makine öğrenimi için güçlü ve popüler bir kitaplıktır. NumPy ve SciPy gibi diğer popüler kitaplıkların ü"
cover_image: "/assets/img/medium/787bce7849fac3cfea.jpg"
medium_url: "https://medium.com/@zaryob/bilimsel-python-scikit-k%C3%BCt%C3%BCphanesi-a4c4d54e8aac"
---

Scikit-learn, sklearn olarak da bilinir, Python’da makine öğrenimi için güçlü ve popüler bir kitaplıktır. NumPy ve SciPy gibi diğer popüler kitaplıkların üzerine inşa edilmiştir ve sınıflandırma, regresyon, kümeleme ve boyut azaltma gibi görevler için çok çeşitli araçlar sağlar.

<figure><img src="/assets/img/medium/787bce7849fac3cfea.jpg" alt="Veri dağılımları ve eğrilerden oluşan örnek grafikler" width="400" height="280" loading="lazy" decoding="async"></figure>

Scikit-learn’ün amacı, makine öğrenimi algoritmalarını uygulamak için kullanıcı dostu ve verimli bir arayüz sağlayarak hem araştırmacıların hem de uygulayıcıların makine öğrenimi modellerini hızlı ve kolay bir şekilde oluşturmasını, değerlendirmesini ve dağıtmasını kolaylaştırmaktır. İster makine öğrenimine yeni başlayan bir acemi olun, ister deneyimli bir veri bilimcisi olun, scikit-learn, hedeflerinize ulaşmanıza yardımcı olabilecek değerli bir araçtır.

Scikit-learn, makine öğrenimi için çok çeşitli özellikler ve yetenekler sağlar. Hem denetimli hem de denetimsiz öğrenme algoritmalarının yanı sıra model seçimi, ön işleme ve değerlendirme yöntemlerini destekler.

Kütüphanenin temel özelliklerinden bazıları şunlardır:  
• Çizgisel regresyon, mantıksal regresyon, destek vektör makineleri, karar ağaçları ve daha fazlasını içeren çok çeşitli denetimli öğrenme algoritmaları.  
• K-ortalamalı kümeleme, hiyerarşik kümeleme ve Gauss karışım modelleri gibi denetimsiz öğrenme algoritmaları.  
• Özellik çıkarımı, özellik seçimi ve model değerlendirmesi gibi yaygın makine öğrenimi görevlerini yerine getirmek için yerleşik araçlar.  
• Kullanıcıların ön işleme ve model uydurma gibi bir makine öğrenimi iş akışının birden çok adımını birlikte zincirlemesine olanak tanıyan ardışık düzen desteği.  
• Model performansını değerlendirmek için kullanılabilen doğruluk, kesinlik, hatırlama ve F1 dahil olmak üzere çeşitli metrikler ve puanlama işlevleri.  
• Çok sınıflı ve çok etiketli sınıflandırmanın yanı sıra regresyon sorunları için destek.  
• Kitaplık ayrıca pandas, matplotlib ve seaborn gibi diğer kitaplıklarla uyumlu olacak şekilde tasarlanmıştır.  
Başta dediğimi tekrar edecek olursam kendisi hızlı ve kolay bir şekilde araştırma veya üretim amaçlı modeller oluşturmasına, değerlendirmesine ve dağıtmasına yardımcı olabilecek kapsamlı bir makine öğrenimi araçları seti sağlar. (Bunu zaten söylemiştim de yukarıda, Kayserili esnaf gibi malımın özelliklerini sayıp öyle satasım geldi)

Scikit-learn, makine öğrenimi için esnek ve güçlü araç seti sayesinde çok çeşitli uygulamalarda kullanılabilir.

<figure><img src="/assets/img/medium/ad876a6cbc8c76d503.png" alt="Bir fotoğrafın renkli bölgelere ayrılması" width="594" height="223" loading="lazy" decoding="async"></figure>

• Görüntü sınıflandırması: Scikit-learn ile görüntüleri farklı kategorilerde sınıflandırmak için modeller eğitmek mümkündür. Örneğin, bir görüntünün köpek mi yoksa kedi mi içerdiğini belirlemek için bir model eğitilebilir. Bu, destek vektör makineleri (SVM’ler) veya karar ağaçları gibi çeşitli denetimli öğrenme algoritmaları kullanılarak yapılabilir. Yani ilerde bilgisayarlı görü çalışacak olursanız “az da suyundan koy” diyip scikit-learn kullanabilirsiniz. Gerçekten güzel özellikler içermekte.

• Doğal Dil İşleme (NLP): scikit-learn ayrıca metin sınıflandırma, duyarlılık analizi ve konu modelleme gibi doğal dil işleme görevleri için de kullanılabilir. Örneğin, scikit-learn ile eğitilmiş bir model, ifade edilen duyguya göre bir metin parçasını olumlu, olumsuz veya nötr olarak sınıflandırmak için kullanılabilir. Hatta hırslı bir çocuk olursanız belki bir chatGPT alternatifi çıkarabilirsiniz bile.  
• Öneri Sistemleri: scikit-learn, kullanıcılara önceki etkileşimlerine veya davranışlarına göre öğeler önerebilen öneri sistemleri oluşturmak için de kullanılabilir. Örneğin, birçok kullanıcıdan tercihler veya tat bilgileri toplayarak bir kullanıcının ilgi alanları hakkında otomatik tahminler (filtreleme) yapmak için bir yöntem olan Collaborative Filtering.  
• Zaman serisi tahmini: scikit-learn ayrıca, zaman serisini bileşenlerine ayırma ve ARIMA, Prophet veya Exponential Smoothing gibi modelleri uydurma gibi zaman serisi verileriyle çalışmak için işlevsellik sağlar. Özellikle Endüstri Mühendisi iseniz Stokastik’te scikit-learn kol bacak olur size ayakta tutar. (Buradan Hüseyin Yeşilbaş’a selamlar)

• Kümeleme: scikit-learn, müşteri verilerini, görüntü bölümlemesini ve çok daha fazlasını bölümlere ayırmak için kullanılabilen k-ortalamalar, hiyerarşik ve Gauss Karışım Modelleri gibi denetimsiz kümeleme yöntemleri için işlevsellik sağlar.  
Güçlü araç seti ve kullanımı kolay arayüzü ile scikit-learn, makine öğrenimine başlamak isteyen herkes için mükemmel bir seçimdir.  
Sonuç olarak işte ne diyim.

Umarım size scikit-learn’ün ne olduğunu iyi bir genel bakış sunmuşumdur. Yine 3–5 link atarım ama şunu unutmayın ki bir şeyi öğrenmenin en iyi yolunu uygulayaraktır. Bu nedenle, farklı şeyler denemekten ve deneyimlemekten korkmayın.  
Makine öğrenimi yolculuğunuzda iyi şanslar!
