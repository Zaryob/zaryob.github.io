---
layout: post
title: "Windows’unuzu Çekilir Kılın"
date: 2021-10-02 12:23:43 +0300
categories: [genel, internet]
image: "2021-10-02-windowsunuzu-cekilir-kilin.jpg"
image_hash: "b758889f7897151cb174f6391a6bfe7b"
---


İşim gereği bir süredir Windows kullanmam gerekiyordu. Özellikle benim gibi uzun sürelerden beri GNU/Linux Distrolarını kullanıyorsanız alışma süreci sancılı geçiyor. Pek çok KDE masaüstü ortamında bulunan özellikten feragat ettim, GNU’nun pek çok güzel özelliğinden aynı şekilde feragat ettim. Ancak bir diğer yandan da bazı kazanımlar da elde etmedim değil.

Bir işletim sistemi ekosisteminden diğerine geçiş aslında ev taşımak gibi bir şey. İlk zamanlarında “ah eski mahallem” demeye başlıyorsunuz. Gerçi ben kısa zamanlı olarak Windows kullanacağım için dualboot yapıp geçtim. Ama bir diğer yandan da Windows 7'den beri kullanmadığım (2018'de birkaç ay zorunlu olarak kullandığım Windows 1804 hariç) Windows’a tekrar bir şans vermedim de değil. Ancak her ekosistem gibi bunda da zamanla kullanıp alışkanlık elde ettikçe işlerinizi kolaylaştırmak için farklı arayışlara giriyorsunuz.

Bu süreçte işlerimi kolaylaştırması için kullandığım bazı araçlar oldu. Bazı değişimler yaparak Windows’u daha kullanılır kılmam gerekti. Şimdi sizlerle de bu yaptığım değişimleri paylaşacağım ve kullandığım araçlardan bahsedeceğim. Kullandığım araçlar da tamamen Microsoft tarafından açık kaynak olarak sağlanan araçlar olacak (gözünü seveyim açık kaynağın)

**Not:** İş bu makale yazıldığı tarihte Windows 11 betada olduğu için Windows 10 özelinde anlatıyorum. Zaten zannetmem ki gelecekte de işe yaramasın.

Kurulum Esnası
==============

Kurulum esnasında kesinlikle ama kesinlikle adınızı Türkçe karakter içeren bir formda yazmayın. Kullanıcı adınızda boşluk karakteri bulunmasın. Çünkü gerçekten saçma bir şekilde özellikle Java’da kullanıcı adından dolayı alakasız hatalar yiyorsunuz. Bunu da Windows’un UTF-8 desteğinin özürlü olmasına bağlıyorum.

Bir diğer tavsiyem de kurulum sırasında şöyle bir ekran çıkıyor

![](/assets/img/posts/0*QgQO-3BRQWAg_CFW.png)

Benim yegane tavsiyem bunların tamamını kapatın. Gerek yok yani boşuna bunlarla uğraşmaya “bence”. Kaç kere Cortana kullanıyorsunuz ki normal hayatınızda, veya kaç kere cihazımı bul özelliğini kullanıyorsunuz ki. Ben kullanmadım hiç gerek de duymadım. Bu yüzden kapatıyorum.

İlk ve En Temel Sorun
=====================

![](/assets/img/posts/1*O7CnEokQJ_GeKiRBHmw-Fg.png)

Yani şundan nasıl kurtulunulacağını anlattırmayın bana.

Temalama
========

Etkinleştirmeyi hallettikten sonra en önemli işlerden birisi temalama oldu benim için. Abi açık renkli (light) temalardan nefret ediyorum. Bu yüzden karanlık tema mutlaka benim gibi rahatsız olan insanlar için birebir. Öncelikle sağ tıklayıp kişiselleştir diyoruz, ardından Renkler sekmesinden renginizi seçiniz kısmına gelip koyu rengi seçiyoruz, işte şöyle:

![](/assets/img/posts/1*wHPO1UbeJX85rGE3TL4aBQ.png)

Temizlik
========

![](/assets/img/posts/1*zj9Oy9x7WVvDr9IEMR4Xzg.jpeg)

Başlat menüsünde şu yandaki gibi görünen bir sürü gereksiz simge var. Eminim son kullanıcı da bu simgelerden neredeyse çoğunu kullanmıyordur. Bu simgeler gereksiz yere arka planda veri çekiyor (Finans, Hava Durumu, Önerilen Uygulamalar, Haber ve dahası), bazı durumlarda gereksiz yere başlat menüsünün yavaş açılmasına sebep veriyor. Öncelikli olarak ben bu simgelerden kurtularak şöyle temiz bir başlat menüsü görünümü elde ettim.

![](/assets/img/posts/1*7rPMTeJe71iDm077Xe-LbA.png)

Ardından alt panele gelelim. Alt panelde de çoğunlukla benim kullanmadığım bazı şeyler var. Hava durumu, Cortana düğmesi ve Arama Çubuğu gibi. Aşağıda görüldüğü gibi:

![](/assets/img/posts/1*tE5TgrhBwtbONImddFCYBg.png)

Zaten Windows’ta rendering her manada kütük gibi çalışıyor (Hatta böyle bir şeyin olduğuna bile şüpheliyim, hele hele MacOSX kullandıktan sonra daha da şüphe etmeye başladım). O yüzden bunları sıra sıra kapatıyoruz. Bunun içinse Görev Çubuğuna sağ tıklamak yeterli oluyor.

![](/assets/img/posts/1*krQUdLP47lK8vhQcyyDgqg.png)Bunda öntanımlı açık olan “Arama kutusunu göster” seçeneğidir. Bunu “Gizli” yapın![](/assets/img/posts/1*BiiXJ006NM0UDdtE0TdT6w.png)Bunda öntanımlı olan ise “Simge ve metin göster” seçeneğidir. Bunu da “Kapat” yapın![](/assets/img/posts/1*oZ5RAkznYgG5ymstcxRYRQ.png)En son ise şu “Cortana düğmesini göster” seçeneğini kapatın

Bunlar ile çalışma alanımı daha temiz bir hale getirdiğimi düşünüyorum. Sonuç aşağıdadır:

![](/assets/img/posts/1*mxIX5_SUntDSsEYYdYITXA.png)Gereksizliklerden arındırılmış, sade bir görünüm…

Pano
====

Windows’un bir diğer özelliği ise pano. KDE’de güzel bir panomuz vardı ve Windows’a geçince bir panonun olmayışından çok yakındım. Aslında varmış ama biraz arka tarafta kalmış bir özellik Pano.

Panoyu açmak için **“Windows — V”** tuşlarına basıyoruz.

![](/assets/img/posts/1*6iECHDycXzZreehN-KU7ww.png)

Geçmiş gösterilemiyor diyecek çünkü bu özellik kapalı. Hemen açalım, “Aç” tuşuna tıklayınca ayarlara yönlendirecek ve şu pencere açılacak:

![](/assets/img/posts/1*E21tdAaSFyioHcmBmm7IXA.png)

Buradan pano geçmişini açıyoruz.

![](/assets/img/posts/1*WceSXzaCVzlJmaYui1XENQ.png)

Gördüğünüz gibi yüzen bir pencere oluşmuş olacak.

> **Bundan sonrasını Geliştiriciler için anlatacağım. İşine yarayacak olan veya okumak isteyen buradan sonrasında okumaya devam edebilir.**

Powershell ve Windows Terminal
==============================

Geliştiriciyseniz bazen farklı araçlara işiniz düşmüyor değil. Şimdi hacılar benim de bazen PowerShell’e işim düşüyor. Her PowerShell açtığımda çıkan şu bildirimden bıktım:

![](/assets/img/posts/1*_B2Mldo8t4VaDSlqXunBlA.png)

Bunun gelmesinin temel sebebi PowerShell’in yeni bir sürümünün oluşu ancak lisans kısıtlamaları sebebiyle bu sürümünü kurulum isosu içerisinde dağıtamaması (gözünü seveyim açık kaynak lisanslarının) Öncelikle tavsiyem yeni sürüm PowerShell kullanmanız çünkü yeni sürümleri eskiye nazaran hem çok daha hızlı hem de daha güzel özelliklere sahip. Ayrıca çapraz platform, yani diğer platformlarda da PowerShell (son sürümleri ile beraber) kullanılabiliyor.

Bir diğer konu ise benim gibi GNU ekosisteminden çıkanların yaşadığı konulardan birisi. Neden Windows’un bir terminali yok. CMD veya PowerShell demiyorum. Terminal diyorum. Onu da Windows Mağaza’dan çözüyoruz. Karşınızda Windows Terminal:

![](/assets/img/posts/1*vPw_1Zsjt9tPS6hOats1Tw.png)

Bu uygulamanın en güzel yanı sekmeler özelliği.

![](/assets/img/posts/1*BgNyVG9k2B6wgm6UKd0nbQ.png)

Özellikle Azure ve WSL kullanan insanlar için oldukça yararlı bu sekmeler, ayrıca kendi sekmenizi de ekleyebiliyorsunuz.

Bir diğer güzel yanı ise Özelleştirebilmeye izin vermesi ve Windows Terminalin beraberinde getirdiği bazı araçlar. Hala düzeltemediğim bir şey ise Administator olarak shell nasıl açarım onu bilemiyorum.

Ancak gerek PowerShell, gerekse Windows Terminalde sağ tıklayınca bir menü açılmamasına ve sadece seçili metnin kopyalanmasına alışamadım.

WSL
===

Yani herkes duymuştur sanırım. **WSL** veya **Windows için Linux Alt Sistemi** dediğimiz araç Hypervisor kullanarak sanallaştırılmış bir Linux çekirdeğini kullanarak Windows altında bir Linux ekosistemi kullanmaya yarıyor. Özellikle çapraz platform uygulama geliştirirken (C# artık çapraz platform, ona da bir sonraki yazımda değinirim) oldukça işe yarar bir şey bu WSL.

![](/assets/img/posts/1*nPDoil8V-RZIxR2RwbFwxQ.png)

WinGet
======

Windows için terminal üzerinden paket kurmaya sağlayan bir araç bu WinGet, kaynak kodu da yine Microsoft tarafından sağlanıyor:

[

GitHub - microsoft/winget-cli: Windows Package Manager CLI (aka winget)
-----------------------------------------------------------------------

### This repository contains the source code for the Windows Package Manager Client (aka winget.exe). The packages…

github.com

](https://github.com/microsoft/winget-cli)![](/assets/img/posts/1*fBbSQYj-mfj-yeuEV8SmeQ.png)winget çıktısı

Bu araç üzerinden istediğiniz herhangi bir paketi kolaylıkla kurabiliyoruz. 3. parti dağıtılanlar da dahil.

![](/assets/img/posts/1*v6iQ8teWRC6-moU7Tce1nA.png)Biraz apt-get vari ama güzel bir paket yönetim sistemi bence.

PowerToys
=========

Yani işte Microsoft’un verimlilik araç kiti işte. Bikaç güzel özelliği var. En sevdiğim hiçbir ayarla uğraşmadan, komut verip kısa süreliğine sistemin uykuya geçmesini süresiz engellemek. Yani böyle bir kısayol neden KDE’de yok dedirtti bana.

Kurulumu ise hemen winget ile yapalım :D

```
**winget install PowerToys --source winget**
```
![](/assets/img/posts/1*uYpaxedA_tNZN75jrLr6ew.png)

![](/assets/img/posts/1*530ikyR6dvDO7GrXk2wjeQ.png)

Ve hemen başlat üzerinden açalım, unutmadan Administrator olarak açmakta yarar var:

![](/assets/img/posts/1*elXE9FTZ9X0AZnWDgQoh3g.png)

VSCode
======

Çok fazla anlatmaya gerek yok herhalde. Eski Visual Studio aklımda canlandıkça midem bulanıyor.

![](/assets/img/posts/1*lZNY6e2VKvh_StKCuOdb7A.png)

Hadi bu da son ekran alıntısı olsun

Sonuç
=====

Hala kullandıkça Windows’u daralıyorum ama artık en azından ufak tefek kişiselleştirilebilecek yanlarını görünce Windows’a göz kırpmıyor da değilim. Ama bir geliştiriciyseniz ve artık Windows kullanmak kaçınılmaz olduysa tadını çıkartın derim :D

Linkler
=======

Şöyle buraya da yağdıram linkleri.

**Microsoft Github Repository:**

[Microsoft](https://github.com/microsoft)

**PowerShell:**

[GitHub - PowerShell/PowerShell: PowerShell for every system!](https://github.com/PowerShell/PowerShell)

**Windows Terminal:**

[GitHub - microsoft/terminal: The new Windows Terminal and the original Windows console host, all in…](https://github.com/microsoft/terminal)

**WinGet:**

[GitHub - microsoft/winget-cli: Windows Package Manager CLI (aka winget)](https://github.com/microsoft/winget-cli)

**PowerToys:**

[GitHub - microsoft/PowerToys: Windows system utilities to maximize productivity](https://github.com/microsoft/PowerToys)

**VSCode:**

[GitHub - microsoft/vscode: Visual Studio Code](https://github.com/microsoft/vscode)
