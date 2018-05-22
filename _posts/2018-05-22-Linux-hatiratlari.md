---
layout: post
title:  "Linux Hatıratları"
date:   2018-05-22 11:43:56 +0530
icon:  linux
group: linux
---

Ortalama 7 senemi (gençliğimin baharını) bilgisayar başında geçirmiş bir kişiyim. Şu anki yaşıma göre hayli
uzun bir süreyi bu kutu karışısında Linux adlı büyülü bir sistemde geçirmekten o kadar memnunum ki geçmişe
bakınca iyi ki bu kutuyu hakkınca kullanabilmişim diyorum.

Linux'un aslında bir sistem çekirdeği olduğunu gerçekte herkesin Linux dediği şeyin distrolardan başka bir
şey olmadığını söyleyip can sıkmak istemiyorum. Aslında Linux diyince bnu distroları kastettiğimi anlamanızı
isterim. Ve bence yazdığı her lafın üçte biri

>Linux işletim sistemi değil çekirdek yazılımıdır.

diyen kişiler öğrencilerine sadece *Ney'in çalınmayıp üflendiğini* öğretmenlere benziyorlar. Aslında bir şey
bilmeyen ama biliyormuş gibi görünen kişilere...


# Linux ile ilk tanışmam

İlk bilgisayarım olan **Casecom** marka dinozoru ilk aldığım gün açılan Ubuntu ile başladı Linux ile
cebelleşmem. Tabi belirtmeliyim ki Ubuntu kuran üstün şahsiyet kullanıcı parolasını vermediği için hiçbir
yetkiye sahip olmadan bir sene geçirdim. (Allah'tan autologin özelliği aktifmiş) Gel zaman git zaman Pardus
2011 ile gelen akıma ben de katıldım. 2013 yılına kadar Pardus'un başına neler geldiğini bilmeden 2 sene
kullandım. 2013 yılından bu yana da bulduğum distro kullandım. Debian, Fedora, Mint, Arch... Bu dönem bir
*distohupperlık* (her hafta başka bir distro kullanma hastalığı) olmaktan ziyade elimdeki sistemi tanıma
dönemiydi benim için. Her kullandığım sistemi bir haftada bozabilme yeteneği elde ettim, her paket yönetim
sistemini her masaüstü ortamını denedim.

**Raspberry** kullanana kadar böyle devam etti. **Raspberry PI** kullanmaya başlayınca Linux'un gerçekte ne
kadar stabil ve ne kadar az sistem özelliği ile nasıl güçlü işler yapabildiğini görünce Linux'a olan
hayranlığım gerçek bir `hacker` olma yoluna girmemi sağladı diyebilirim. `Hacker olacam` lafını ilk duyunca
anne-babamın:

>Oğlum, kuzum... Haydut mu olacan yavrum, gel etme eyleme!

tepkisi yedim. Tabi `gerçek hackerların` **Richard Stallman, Linus Torvalds** gibi insanlar olduğunuanlatınca
destek gördüm.

# Bir genç gözüyle Linux

Linux distroları pek çok kişi için bir imtihan sebebi, bir çeşit Çin İşkencesi, küfretmeyi öğrenmek için ve bildiğin
küfürleri tekrar etmek için kullanılacak harika bir sistem olarak görülebilir. Her ne kadar ilk kullandığı
sistem *DOS* olan dayımınki kadar havalı bir bilgisayar hayatım olmasa da 11 yaşımda okulda kullandığım
Windows XP ile başlayan bilgisayar hayatım Linux ile 5 sene önce tanışınca aynı durumda idi. Bir türlü kök
dosya sistemini, klavye kısayollarını öğrenemedim senelerce. Hele komut satırı olayına hiç girmiyorum.

Ancak olay tam anlamıyla şu ki insan tüm önyargılarını kaldırıp sadece zevk almak için kullanmaya başlayınca
kademe kademe Linux'a alışıyor. Her işini Linux'ta yapar hale geliyor. Mesela ben çifte işletim sistemi
kullanıyorum. Ancak Windows 10'u ilk kurduğumdan beri sayılı kez açmışımdır. Bunun tek sebebi Linux'un rahat
oluşu değil. Sadece Linux'a alışınca ne kadar basit olduğunu ve ne kadar stabil olduğunu anlayınca
kullanmaktan vazgeçemiyorsunuz.

Ancak öneririm ki bir sürü önyargı ve forumlardan girip Linux'a sövmek için Linux kullanacaksanız hiç
kullanmayın.

# Neden Linux

Pek çok site zaten tek tek sayıyor bunu. Ancak aklıma gelen farklı şeyleri yazmak isterim.

### Kendinizi geliştirmek için dehşet bir ortam:
Linux gerçekten bilgisayarı öğrenmek isteyenler için, programlamayı öğrenmek için çok sağlam bir platform.
C, C++, Java gibi derlemeli; Python, Ruby, Perl, GoLang, Ocalm yorumlamalı ve adını sayamadığım nice dilli
Linux ortamından daha iyi hiçbir yerde öğrenemezsiniz. Çünkü bu diller bizatihi Linux distrolarının olmazsa
olmaz yazılımlarının kullandığı diller. Ayrıca Linux altında kullanılan tüm yazılımlar açık kaynak olduğu
için farklı kodlama üslupları, farklı algoritmaları incelemeniz için en uygun platformlardan birisi Linux.
Yani işi menbaında öğrenmek isterseniz Linux kullanmanızı öneririm.

Ayrıca derseniz ki *Biz Windows'ta Visual Studio filan kullanıyorduk şimdi ne kullanacağız?* ileriki
yazılarımda oldukça sağlam ve alternatif olarak tanımlanamayacak kadar kendine özgü örnekler vereceğim.
Ancak bir önemli nokta var. Sağlam bir C# geliştiricisi iseniz Linux'ta C# ile uygulama geliştirirken çok
sıkıntı yaşayacağınızı göz önünde bulundurun.

### Linux'da mavi ekran almazsınız:
Çünkü mavi ekran özelliği yok Linux'un. Çok köklü hatalar alsanız bile bunlara çözüm bulmanız için
stackoverflow gibi sitelerden, kullandığınız distroların forumlarından bulabilir. Sisteminize format atmaya
gerek kalmadan sisteminizi düzeltebilirsiniz.

### Tek dokunuş ile sistemi güncelleme:
Yeni kurduğunuz distronun bir üst sürümü mü çıktı? Format atmak istemiyor musunuz? Linux distronuzun
forumunda size verilen uygulama yöneticisi server adresini kullanarak bilgisayarınızın `Uygulama Merkezi`
ile ya da komut satırından sisteminizi basitçe güncelleyebilir (internetinize bereket) bunu yaparken diğer
işleriniz ile uğraşabilirsiniz. Güncelleme yaptıktan sonra da yeniden başlatma zorunluğunuz yok.
Windows'taki gibi sistemin güncelleştirilme çilesini yaşamaktan kurtulursunuz. Ayrıca sistemi güncel
tutmanız da bir zorunluluk değil. Çünkü Linux'ta geliştirilen pek çok şey eski sürümlere yönelik
geliştirilir.

### Özelleştirebilme şansı:
Linux distroları dev bir özelleştirme kartelasına sahiptir. Uygulama panelinden açılış ekranlarına;
renklerden fontlara, ikonlara; hatta login ekranlarından masaüstü ortamlarına kadar her şeyi baştan ele
alabilir, değiştirebilir, zevkinize uygun döşeyebilirsiniz. Hatta ustalaşınca kendi temalarınızı
yazabilirsiniz.

### Ve zaman
Eğer vaktiniz bolsa bunca şeyi kısa zamanda öğrenebilirsiniz. Ancak vaktim az diye öğrenip kullanmaktan
geri durursanız ileride *Neden ben zamanında kullanmadım* diyerek Windows formatlarına güncellemelere ve
viruslere ayırdığınız süreye acırsınız benden söylemesi.



Bu yazılık bu kadar.
