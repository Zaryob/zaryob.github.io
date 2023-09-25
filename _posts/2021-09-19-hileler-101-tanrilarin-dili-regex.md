---
layout: post
title: "Hileler 101: Tanrıların dili Regex"
date: 2021-09-19 12:23:43 +0300
categories: [genel, internet]
image: "2021-09-19-regex.jpg"
image_hash: "cf1e76c74723af6eb45ee626ca4269a9"
---

Regular Expressions (regex veya regexp), herhangi bir metinden bilgi çıkarma ve arama amacıyla kullanılan karakter dizisi modelleridir.

Temel olarak karakter dizilerinde belirli bir arama modelinin (yani belirli bir ASCII veya unicode karakter dizisi) bir veya daha fazla eşleşmesini arayarak eşleşmeleri metinde bulmak için kullanılır. Bu ifadeler ile bulunan sonuçlar geçerli metni silmek veya manüple etmek amacıyla kullanılır.

Başlıca regex’in uygulama alanları arasında verileri ayrıştırma/değiştirme, verileri diğer biçimlere çevirme yer alırken; ayrıca web kazıma ,veri temizlemeye kadar uzanan bir kullanım alanı vardır.

En ilginç özelliklerinden biri söz dizimini öğrendikten sonra aslında bu aracı (neredeyse) tüm programlama dillerinde (JavaScript, Java, VB, C#, C/C++, Python, Perl, Ruby) kullanabilmenizdir. , Delphi, R, Tcl ve diğerleri) kullanabilirsiniz. Farklı regex kütüphaneleri tarafından çoğunlukla aynı ifadeler desteklenir. Ancak bazı ufak tefek kullanım ve kütüphane farklılıkları bulunmaktadır.

Bazı örneklere ve açıklamalara bakarak başlayalım.

Temel İfadeler
==============

Çapalar — ^ ve $
----------------

`**^bir**` **: “**bir” ile başlayan herhangi bir dizeyle eşleşir.

`**bir$**`**: “**bir” ile biten bir dizeyle eşleşir.

`**^bir$**` **: “**bir” ile başlayan ve biten dizelerle eşleşir.

`**bir**` **:** içinde “bir” metni bulunan herhangi bir dizeyle eşleşir

Niceleyiciler — \* + ? ve {}
----------------------------

`**abc***` **:** “ab” ve ardından sıfır veya daha fazla “c” harfi içeren bir dizeyle eşleşir.

`**abc+**` **:** “ab” ve ardından bir veya daha fazla “c” harfi içeren bir dizeyle eşleşir.

`**abc?**` **:** “ab” ve ardından sıfır veya bir “c” harfi olan bir dizeyle eşleşir.

`**abc{3}**` **:** “ab” ve ardından 3 tane “c” harfi içeren bir dizeyle eşleşir.

`**abc{4,}**` **:** “ab” ve ardından 4 veya daha fazla “c” harfi içeren bir dizeyle eşleşir.

`**abc{3,8}**` **: “**ab”’nin ardından en az 3 en fazla 8 tane “c” harfi olan bir dizeyle eşleşir.

`**a(bc)***` **:** sonunda “bc” dizisinin sıfır veya daha fazla kopyası olan ve başlangıcında “a” harfi olan bir dizeyle eşleşir.

`**a(bc){3,6}**` **:** sonunda “bc” dizisinin en az 3 en fazla 6 kopyası olan başlangıcında “a” harfi olan bir dizeyle eşleşir.

**VEYA operatörü — | ve \[\]**
------------------------------

`**a(b|c)**` **:** “a” harfi ile başlayan ve sonu “b” veya “c” harfi ile biten harfleri içeren dizileri eşler. “b” ve “c” harfleri dizi ile beraber döndürülür.

`**a[bc]**` **:** “a” harfi ile başlayan ve sonu “b” veya “c” harfi ile biten harfleri içeren dizileri eşler. “b” ve “c” harflerini döndürmez.

Karakter sınıfları — \\d \\w \\s ve .
-------------------------------------

`**\d**` **:** rakam olan tek bir karakterle eşleşir.

`**\w**` **:** bir kelime karakteriyle eşleşir (alfanumberik karakter artı alt çizgi)

`**\s**` **:** bir boşluk karakteriyle eşleşir (sekmeler ve satır sonları içerir)

`**.**` **:** herhangi bir karakterle eşleşir (Genellikle sınıf veya olumsuzlanan karakter sınıfı daha hızlı ve daha kesin olduğundan . operatörünü dikkatli kullanın.)

\\d, \\w ve \\s ayrıca sırasıyla \\D, \\W ve \\S ile olumsuz karşılıklarını içerir. Örneğin, -\\d rakam olan tek karakterle eşleşirken, \\D rakam olmayan tek karakterle eşleşir.

Bayraklar
---------

Bayraklar regular expressions konusundaki en önemli şeydir.

Bir regex genellikle bu `**/abc/**` biçiminde gelir, burada arama modeli iki eğik çizgi karakteriyle sınırlandırılır. Sonunda bu değerlerle bir bayrak belirleyebiliriz ve bu bayraklar aramanın nasıl yapılacağını belirler (bunları kendi aralarında da birleştirebiliriz):

**g (global)** ilk maçtan sonra geri dönmez, önceki maçın sonundan sonraki aramaları yeniden başlatır.
**m (çok satırlı)** etkinleştirildiğinde `^` ve `$` tüm dize yerine satırın başlangıcı ve sonuyla eşleşir.
**i (duyarsız)** tüm ifadeyi büyük/küçük harfe duyarlı yapmaz (örneğin `/aBc/’`i, **abc**, **ABC** veya **AbC** ile eşleştirir)

![](/assets/img/posts/0*LZfT4uqWBNY0sYE6.jpg)Bu ifadeler sıklıkla kullanılan regex ifadeleridir.

**Orta Düzey İfadeler**
=======================

Gruplama ve yakalama — ()
-------------------------

Bu operatör, dizilerden bilgi çıkarmamız gerektiğinde çok kullanışlıdır. Bir programlama dili ile bu şekil veri dizilerini çıkarırken birkaç karakter grubu ile yakalanan herhangi bir çoklu oluşum, klasik bir dizi şeklinde gösterilecektir: gruplama sayesinde karşılaştırmaların sonucunda bir indeks kullanarak onların değerlerine eşleştirebiliriz.

Gruplara bir isim koymayı seçersek (**(?<foo>…)** kullanarak) grup değerlerini, anahtarların her grubun adı olacağı bir sözlük gibi, eşleşme sonucunu kullanarak alabiliriz.

`**a(bc)**` **:** parantezleri bc değerine sahip bir yakalama grubu oluşturur.

`**a(?:bc)***` **:** ? kullanarak yakalama grubunu devre dışı bırakırız.
a(?<foo>bc) ?<foo> kullanarak gruba bir isim koyarız.

Köşeli Parantez ifadeleri — \[\]
--------------------------------

`**[abc]**` **:** a veya b veya c içeren bir dizeyle eşleşir (Temel kullanımı `**a|b|c**` ile aynıdır)

`**[a-c]**` **:** öncekiyle aynı

`**[a-fA-F0-9]**` **:** tek bir onaltılık basamağı temsil eden bir dizeyle eşleşir ve büyük/küçük harfe duyarsızdır.

`**[0-9]%**` **:** % işaretinden önce 0 ile 9 arasında bir karaktere sahip bir dizeyle eşleşir

`**[^a-zA-Z]**` **:** a’dan z’ye veya A’dan Z’ye harf içermeyen bir dize. Bu durumda ^, ifadenin olumsuzlaması olarak kullanılır.

Greedy and Lazy Arama
---------------------

Niceleyiciler ( \* + {}) greedy (açgözlü) operatörlerdir, bu nedenle sağlanan metin aracılığıyla eşleşmeyi olabildiğince genişletirler.

Örneğin, “Bu bir <div> basit div</div> testidir.” dizisini,<.+> ifadesi ile eşleme yapınca sonuç, **“<div>basit div</div>”** ile eşleşir. Yalnızca div etiketini yakalamak için bir lazy (tembel) eşleme yapmak gerekir. Örneğin:

`**<.+?>**` **:** < ve > içinde yer alan herhangi bir karakterle bir veya daha fazla kez eşleşir, gerektiğinde genişletilir.

Daha esnek bir çözümün kullanımından kaçınması regexte önem arz eder. Çoğu durumda daha katı bir regex lehimize olabilir. Örneğin:

`**<[^<>+]>**` **:** < ve > -> içinde bir veya daha fazla kez bulunan < veya > dışında herhangi bir karakterle eşleşir.

![](/assets/img/posts/0*TpFV74av7jhTCoSU)

Gelişmiş Birkaç Kullanım
========================

Sınırlayıcılar — \\b ve \\B
---------------------------

\\b, $ ve ^’ye benzer, bir tarafın bir kelime karakteri olduğu (\\w gibi) ve diğer tarafın bir kelime karakteri olmadığı (örneğin, dizenin başlangıcı olabilir) konumları eşleştirir veya bir boşluk karakteri eşler.

Olumsuzlaması ise \\B’dir. Bu da, \\b’nin eşleşmediği tüm konumlarla eşleşir ve kelime karakterleriyle tamamen çevrelenmiş bir arama modeli bulmak istiyorsak olabilir.

`**\babc\b**` **:** “yalnızca tam sözcükler” araması yapar. “**abc”** olan sözcükleri döndürür.

`**\Babc\B**` **:** yalnızca desen tamamen **“abc”** karakterleriyle çevriliyse eşleşir.

**Geri referanslar — \\1**
--------------------------

`**([abc])\1**` **:** \\1 kullanılarak ilk yakalama grubu tarafından eşleşen metinle eşleşir.

`**([abc])([de])\2\1**` **:** ikinci (üçüncü, dördüncü vb.) yakalama grubu tarafından eşleşen aynı metni tanımlamak için \\2 (\\3, \\4, vb.) kullanabiliriz.

`**(?<foo>[abc])\k<foo>**` **:** gruba foo adını koyarız ve daha sonra referans veririz (\\k<foo>). Sonuç, ilk normal ifadenin aynısıdır yalnızca aramanının grup ismi foo olarak geçmektedir.

İleriye ve Arkaya Bakma — (?=) ve (?<=)
---------------------------------------

`**d(?=r)**` **:** yalnızca bir d ile yalnızca ardından r geliyorsa eşleşir, ancak r genel regex eşleşmesinin bir parçası olmaz.

`**(?<=r)d**` **:** yalnızca öncesinde bir r varsa, a d ile eşleşir, ancak r genel regex eşleşmesinin bir parçası olmayacaktır.

Olumsuzlama operatörünü de şu şekilde kullanabilirsiniz!

`**d(?!r)**` **:** d ile yalnızca ardından r gelmiyorsa eşleşir, ancak r genel regex eşleşmesinin bir parçası olmaz.
`**(?<=!r)d**` **:** d ile yalnızca başında bir r yoksa eşleşir, ancak r genel regex eşleşmesinin bir parçası olmayacaktır.

![](/assets/img/posts/0*2nuLRDorKE0hZyJh.jpg)

Sonuç
=====

Gördüğünüz gibi, regex’in uygulama alanları birden fazla olabilir, işte kullanım alanlarına dair kısa bir liste:

*   veri doğrulama (örneğin, iyi biçimlendirilmiş bir zaman dizisi olup olmadığını kontrol etmekte kullanılır)
*   veri kazıma (özellikle web kazıma, sonunda belirli bir sırayla belirli bir kelime grubunu içeren tüm sayfaları bulmakta kullanılır)
*   veri tartışması (verileri “ham” formattan başka bir formata dönüştürme)
    dize ayrıştırma (örneğin, tüm URL GET parametrelerini yakalayın, bir parantez içindeki metni yakalamak için kullanılır)
*   dize değiştirme (örneğin bir JSON nesnesini bulmak veya değiştirmek gibi işlemler için JSON kütüphanelerinin çoğu regex kullanır)
*   sözdizimi vurgulama, dosya yeniden adlandırma, paket koklama ve dizeleri içeren diğer birçok uygulama (verinin metinsel olması gerekmediği yerlerde)

Sonuç olarak bu alanlarda sıkça kullanıldığı için regex’i öğrenmek önem arz etmektedir. Bazen pek çok gereksiz işleme girerek yapabileceğimiz işlemlerin içinden regex sayesinde kolaylıkla çıkabiliriz. Ve işlem gücünden tasarruf edebiliriz.
