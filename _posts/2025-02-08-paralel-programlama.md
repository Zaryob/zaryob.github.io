---
layout: post
title: "Paralel Programlama 101"
date: 2025-02-08 18:42:52 +0300
categories: [programlama]
image: "2025-02-08-paralel-programlama.jpeg"
image_hash: "3bde78199468d6affeb6539c56af87c9"
---

Yapay zeka konusu açıldığı zaman insanlar teknik altyapılarından ziyade, düşünce deneylerinden toplumsal etkisine,
teknolojik değerinden uygulama alanlarında kadar pek çok konusuna değiniyor. Ancak işin matematik tabanı ve bilgisayar bilimi ayağına girildiğinde o kadar çok anlatılabilecek konu varken sadece elimize graflar verip yapay sinir ağları çizmek bence yeterli olmuyor. Ben de yazılarımda bu gibi konulara girmekten zevk alıyorum. Örneğin görüntü işleme konusunda insanlar hep yüz tespiti, nesne tanımayı anlatırken ben görüntü işlemede kullanılan methodların matematiksel methodlarını anlatmayı (hatta zamanım genişse örnekleri ile beraber) daha fazla seviyorum. Bugün de benzer bir yazı yazacağım, bugünkü konumuz özellikle yapay zekanın hesaplama ayağına değen paralel programlama ile alakalı olacak.

Düşünün ki bir yapay zeka modelini eğitirken kullanılan veri setleri yazıdan yazı (text-to-text) modelleri örneğin büyük dil modelleri için gigabaytları buluyor, yazıdan görüntüye olan modeller ise terabaytları geçiyor ve bu hesaplama maaliyeti o kadar büyük ki bizim bilgisayar mühendisliği okurken öğrendiğimiz klasik metodlarla işlemeye kalksak belki yıllar alacak. Milyar parametreli (hatta yarım trilyon parametreler bu zamanlar konuşuluyor) modelleri düşünecek olursanız gigabaytlarca veriyi, ilişkilendirerek işlemeniz ve ilişki matrikslerini oluşturmanız size milyarlarca parametreden oluşan verilerin kendi arasında yüz milyarlarca ilişkisel yapı oluşmasına ve bunların hesaplanması ise bu verinin üzerinde trilyonlarca matematiksel işlem yapmamıza neden oluyor. 

İşte bu gibi büyük matematiksel işlemleri meşhur böl parça yönet stratejisi ile şu filmlerde gördüğümüz devasa veri merkezlerinde, yüzlerce işlemcinin eş zamanlı olarak çalıştığı sistemlerde, büyük verileri işlerken paralel programlama yöntemlerini kullanırız. Sadece veri merkezlerinde de değil kendi bilgisayarımız içerisinde oyunların Ray Tracing özelliği bile paralel hesaplama yöntemleri ile ışınları hesaplamak gibi işlemciler için maaliyetli olan işlemleri, grafik kartlarının çekirdeklerine dağıtarak birden çok işlemci çekirdeğinde eşzamanlı olarak hesaplar. 

Paralel hesaplama, işte bu şekilde birçok hesaplama veya işlemin aynı anda gerçekleştirilebilmesine imkan sağlayan bir hesaplama yöntemi olarak karşımıza çıkmakta. Kendisi görevleri ardışık (sıralı) olarak yerine getirmek yerine, problemi daha küçük, bağımsız (veya yarı-bağımsız) alt görevlere bölerek bunların aynı anda, birden fazla işlem birimi üzerinde çözebilmemizi sağlar. 

Şimdi paralel hesaplamanın ne olduğu ve nasıl çalıştığına daha yakından bir bakış atalım ve CUDA ile MPI kütüphanelerine giriş yapalım. 

### Paralel Hesaplama Nedir?

Paralel hesaplamanın tanımı, bir dizi hesaplamayı aynı anda gerçekleştirmek için birden fazla işlemci veya çekirdek kullanmak olarak yapılabilir. Bu zamana kadar bilgisayar mühendisliği derslerinde gördüğümüz algoritmalarda, görevler tek tek işlendiği sıralı hesaplamalar ile yapılmaktadır. Bir Djikstra'yı ele alalım, en kısa yol uygulamasında her bir dallanma için en yüksek puanlı dalı seçerek hareket ederiz ancak oldu da yüksek puanlı dallarımız bizim için sonuç elde etmezse geriye dönerek çıkış şansımız bulunan olası diğer yolları tek tek gezeriz. Böyle bir graf üzerinde işlem yaparken eğer her bir dalın potansiyel ağırlığını hesaplamak istersek bu durumda karmaşıklığımız her bir graf için eleman sayısının faktoriyeli ile ifade edilecek. Diyelim ki gerçekten de Djikstra gibi algoritmik yaklaşımlarla çözemeyeceğimiz bir görev var, bu görevde beklenen potansiyel olarak iki nokta arasındaki tüm yolların adımlarının çıkarılması ve yolun toplam ağırlıklarının hesaplaması olsun. Hatta bir ileri adıma taşıyayım bu ikili nokta seçimi de graftaki tüm 2'li nokta kombinasyonları için yapılacak olsun. Bu gibi işlemleri tek bir çekirdekli bir donanımda koşturmak, O(n ^ 2 * n!) karmaşıklığa sahip bir problemi çözmeye çalışmak, çok büyük bir hesaplama maaliyeti demek.

İşte paralel hesaplamada temel amaç, aynı anda birçok işlemi gerçekleştirebilen donanımdan yararlanarak hesaplama görevlerinin yatay eksende dağıtarak hızlandırmaktır. Bu, özellikle sıralı olarak gerçekleştirildiğinde işlem süresi çok uzun olabilecek karmaşık veya büyük ölçekli problemlerin çözümü için gereklidir.

