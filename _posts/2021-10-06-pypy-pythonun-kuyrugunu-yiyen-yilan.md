---
layout: post
title: "PyPy: Python’un Kuyruğunu Yiyen Yılan"
date: 2021-10-06 12:23:43 +0300
categories: [genel, internet]
image: "2021-10-06-pypy-pythonun-kuyrugunu-yiyen-yilan.jpg"
image_hash: "b758889f7897151cb174f6391a6bfe7b"
---


**PyPy’in logosuna ilham kaynağı olan mitolojik yılan, Ouroboros**

Python ile çalışırken genellikle sıkça yaşadığımız bir durum var. Özellikle yüksek iş maliyetine sahip programlarda (örneğin bir hesaplama yaparken) geleneksel Python yorumlayıcısı olan CPython oldukça yavaş kalmaktadır. Adı üzerine CPython bir yorumlayıcı ve Python da yorumlamalı bir betik dilidir.
Ancak betik dilleri dediğim gibi karmaşık işlemler için yavaş kalabilmektedir. Özellikle bilimsel hesaplamalarda bunun ceremesini sıkça çeken bir arkadaşım için Python’u nasıl hızlandırırızı araştırırken Guido van Rossum’un konu hakkında verdiği şu demeci gördüm:

> “If you want your code to run faster, you should probably just use PyPy.”

Bir süredir de PyPy denemekteyim ve bu konuda birkaç şey yazmak istedim.

Python’un Temel Mantığı
=======================

Python, bir programlama dilidir. Normalde C veya C++ gibi dillerin resmi spesifikasyonları bulunur. Java’nın da kendi referans kayıtları yine aynı şekilde bulunur. Dillerin bu referansları üzerinden dili derleyen derleyiciler veya çalıştıran yorumlayıcılar veya sanal makineler inşa edilir. Python’da ise durum biraz farklıdır. Python oldukça basit bir öngörülen söz dizimi ve veri yapılarına dair tanımlamaları kaba hatları ile içeren bir Python Dil Referansı’na sahip bir dildir. Ancak bu referansta dilin yorumlanarak mı, yoksa derlenerek mi çalıştırılacağına girilmez. İşte bu tip detaylar ise Python’u çalıştıracak veya derleyecek yazılımların insafına kalıyor ki, o noktada da karşımıza CPython çıkıyor.

CPython Nedir?
==============

![](https://miro.medium.com/max/20000/0*DRK0fZ4oaBSKHeVB.png)

CPython, geleneksel Python yorumlayıcıdır. Python’da yazdığımız betikler başta bytecode’lara çevrilir ve kabuk ortamla etkileşim sağlayacak şekilde çalıştırılır. Bu olay daha öncesinde anlattığım JVM gibi bir durum değildir. CPython bytecode’yi adım adım yorumlar ve herhangi bir interrupt yiyene kadar (bytecode’de sona gelinmesi de interrupt olarak kabul edilir) kodları işletir.

Python’un geleneksel yorumlayıcısı 3 adımda Python kodunu çalıştırır. İlk adım **başlatma** adımıdır. Başlatma aşaması sırasında CPython, Python’u çalıştırmak için gereken veri yapılarını başlatır. Ayrıca yerleşik türler gibi şeyleri hazırlar, yerleşik modülleri yapılandırır ve yükler, içe aktarma sistemini kurar ve daha birçok şeyi yapar.

İkinci adım ise derleme adımıdır. Evet Python bir nevi derlenir ama bu derlemeyi C kodlarının derlenmesi gibi düşünmeyin. Python kodu CPython tarafından derlenirken başta kaynak kod ayrıştırılır ve bir AST (Özet Sözdizimi Ağacı) elde edilir. Bazı durumlarda bu AST üzerinden temel optimizasyonlar yapılır, bytecode elde edilir ve son adıma geçilir.

Son adım ise tercüme adımıdır. Bu adımda ise bytecode çalıştırılır. Çalışma esnasında kodlar **dinamik dil çerçevesi** olarak adlandırdığımız alt bloklara bölünür. Ve her bir blok çalıştırılır. Bu sürecin tabi ki pek çok detayı var ama ben bu yazımda detaylarına girmeyi elzem görmüyorum ancak detaylarını merak edenler için [şuradaki makaleyi](https://tenthousandmeters.com/blog/python-behind-the-scenes-1-how-the-cpython-vm-works/) tavsiye ederim.

CPython’un Eksileri
===================

CPython’da en büyük handikap ilk başta anlattığım bütün kütüphanelerin yüklenmesi sürecinin aşırı uzun sürmesidir. Python yorumlayıcısının init süresi onlarca milisaniye sürmektedir. Bir de bunun üzerine kodun satır satır yürütülmesi kodun daha yavaş çalışmasına neden olur.

Bir diğer hangikap ise Python’un üst düzey bir programlama dili oluşundan kaynaklanmaktadır. Python’da bellek optimizasyonu gereken uygulamalar kodlamak pek mümkün olmadığı gibi çalışma zamanında CPython bellek tahsisi konusunda verimsizdir.

PyPy
====

![](https://miro.medium.com/max/20000/0*nwV1ynDPLFg_5WMv.jpg)

Özellikle Python’un bellek tahsisi ve init sürelerini kısaltmak için 2007 yılında yapılan PyPy isminde bir proje var. Bu proje Python kodunu derleyerek derleme esnasında makine diline çevirmek suretiyle çalışır ki bu yönteme de çalışma zamanı (JIT) derleme yöntemi denilir. Yani PyPy’de bir nevi Python yorumlayıcısıdır. Ancak tamamen CPython alternatifi olarak göremeyiz. Yalnızca Python Dil Referansının ve CPython’un yeniden yorumlanmış bir halidir diyebiliriz.

PyPy temelde kodu CPython gibi derler ancak bunu direk optimizasyon yapmak için kullanır. Çalışma zamanı derleme ile PyPy kendi dinamik dil çerçevelerini oluşturur. PyPy bir Python kodu derleyicisi değildir. Tamam Python kodunu _derler_, ama Python kodu için derleyici olduğu anlamına gelmemektedir. Nitekim Python’un doğal dinamizmi nedeniyle, Python’u bağımsız bir ikili dosyada (binary) derlemek ve yeniden kullanmak imkansızdır.

PyPy, tam olarak yorumlanmış bir dilden daha hızlı olan bir **çalışma zamanı yorumlayıcısıdır** , ancak C gibi tam olarak derlenmiş bir dilden tabiki daha yavaştır.

PyPy’nin çıktığı iki şey var. İlki aşırı hızlı çalışmasıdır. İkincisi ise CPython ile en uyumlu olan Python yorumlayıcıdır. Ancak bir diğer yandan PyPy henüz CPython’un yerine geçemeyecek kadar sorunlu da. Örneğin geleneksel “numpy” yerine pypy için özel yapılandırılmış olan “numpypy” kütüphanesini kullanmanız gerekmekte.

Hız Karşılaştırması
===================

Şimdi üstteki kod ile 1000 tane sayının toplamını başta CPython ile hesaplayalım.

![](https://miro.medium.com/max/2000/1*f6dDwhO9isDji6G_uxDAAw.png)Python3 çıktısı![](https://miro.medium.com/max/2000/1*48gjbZap23p28FLvxoZgZw.png)PyPy çıktısı

Son Düşünceler
==============

PyPy her ne kadar hızlı ve oldukça esnek. Özellikle optimizasyon gereken işlemleri yaparken PyPy oldukça başarılı bir JIT ortamı sunuyor. Ancak handikapları da bulunmakta. Ayrıca CPython kısa süreli görevler için hala PyPy’den hızlı.

Kaynakça
========

* [Python behind the scenes #1: how the CPython VM works](https://tenthousandmeters.com/blog/python-behind-the-scenes-1-how-the-cpython-vm-works/)
* [As you probably know, the GIL stands for the Global Interpreter Lock, and its job is to make the CPython interpreter...](https://tenthousandmeters.com/)
* [Getting Started with PyPy](https://towardsdatascience.com/getting-started-with-pypy-ef4ba5cb431c)
