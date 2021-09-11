---
layout: post
title: "Hileler 101: Yeni Linux Kullanıcılarına Öneriler"
date: 2021-05-03 12:23:43 +0300
categories: [genel, linux, programlama]
image: "2021-05-14-linux.jpg"
image_hash: "e1581b0554fa4e93f7ca7532d59f9613"
---

Linux dediğimiz zaman pek çoğumuzda farklı farklı duygular uyanmakta. Kimisi tek dönemlik bir ders için kurduğu ve baş belası bir şey olarak tanımlar Linux’u kimisi ise sadece tanrısal güçlere sahip kişilerin kullanabileceği “bir işletim sistemi” olarak görür. Aslında her kulak aşinası kişi gibi ben de 2012'de binbir farklı gazla girdim. Tabi o apayrı bir hikaye. Ama şimdi iyisi ile kötüsü ile Linux’u anlatıp ardından da birkaç pratik öneri vereceğim. Hazırsanız başlayalım.

### Linux Nedir?

Linux bir Unix türevi çekirdek projesidir. Uzun hikayesini bulabilirsiniz diye uzatmayacağım. 1992'den beri Linus Torvalds önderliğinde gelişmektedir. Ve aktif olarak geliştirilen 8 Unix türevi kernelden birisidir (diğerler popüler kerneller ise [FreeBSD](https://www.freebsd.org/), [Darwin](https://darwin.org), [Minix](http://www.minix3.org/)[, Solaris](https://illumos.org), [plan9](https://9p.io/plan9/), Gnu Hurd, Spartan olarak sayılabilir.)

Linux’u diğerlerinden özgün ve popüler yapan şeylerden en önemlisi ise Linux Dağıtımlarıdır.

### Linux Dağıtımı Nedir?

Linux çekirdeği üzerinde kurulu olan çeşitli kabuk ortamları, daemonlar, servisler ve yazılımlardan oluşan ve gerçek manada işletim sistemi diyeceğimiz yapılara Linux Dağıtımı demekteyiz. Linux çekirdeği bütün bu süreçlerin sürdürülmesi, donanımların yönetimi ve kontrolü için kullanılırken son kullanıcı tamamı ile bu alt olayları görmeden (kendisi istemedikçe) bilgisayarında işler yaparak yaşamına devam edebilmesi için konfigüre edilmiş paketler bütünü Linux dağıtımı anlamına gelmektedir.

Açık kaynak felsefesinin sağladığı bazı güzellik ve özgürlükler sayesinde Linux üzerine kurulu pek çok dağıtım geliştirilmiştir. Bu dağıtımlar temel olarak paket yönetim sistemlerine göre ayrılırken kullanıcılar dağıtımları seçerken öncelikle paket yönetim sisteminden ziyade dağıtımın, oluşturulma amacına ve kullanıcı kitlesine bakarak uygun seçim yapmaya çalışırlar (en azından yurtdışında böyle)

İçerdiği paketlere bağlı olarak bir dağıtım sunucu oluşturmak amaçlı, genel amaçlı, güvenlik ve test amaçlı, herhangi bir amaca hizmet edecek şekilde düzenlenmiş ve dağıtılıyor olabilir. Ayrıca son 5 senede yükselen kubernetes sayesinde mikrosunucu/mikroservis yapıları için uygun, kolayca şekillendirilebilir, küçük boyutlu sistemlere gereksinim duyulması da Linux dağıtımlarının daha da yaygınlaştırılmasında öncü olmuştur.

### Dağıtım Seçimi

Öncelikli olarak yeni başlayan birisi kesinlikle ama kesinlikle **özel amaçla yapılmış bir dağıtım seçmemelidir.** Daha çok genel amaçlı olan dağıtımlardan birisine kafa atarak başlamasında yarar var.

Herhangi bir dağıtımı sanalda veya gerçek aygıt üzerinde kullanıp kullanmamak sizin tercihiniz. Ancak Virtualbox veya VmWare gibi bir sanallaştırma aygıtı üzerinde de kullanmadan önce disk yönetimi nedir, disk alanları nedir diye bir araştırmanız da kesinlikle ama kesinlikle gerekmekte. O yüzden başta biraz bunlara bakmanızda yarar var.

Eğer ki bir siber güvenlik eğitimi bile alıyor olsanız, her şeyden önce işlerin nasıl gittiğini öğrenmek için **bence** bir süre basit bir dağıtımda vakit geçirmeli ve ardından **Kali** veya **ParrotSec** gibi özel amaçlı bir dağıtıma geçmelisiniz. Ha bunu yapmam ben burnumun dikine giderim diyorsanız tecrübe ile sabittir, değil Linux öğrenmeniz, aldığınız siber güvenlik eğitimi bile size işkence gelecektir. Temelleri atmadan kat çıkmaya çalışırsanız o kat başınıza çöker.

Bir diğer husus ise **Hangi paket yöneticisi ne abi? Hangisini seçeceğim?** Buradasıklıkla kullanılan rpm ve deb paket tipleri var. Temelde sizin hangi paket yöneticisi olduğundan çok en düzgün şekilde bunları kullanan bir dağıtım belirlemeniz lazım. Şimdi lafı daha da uzatmadan bazı örnek dağıtımlar vereyim:

#### Debian

Oldukça optimize ve sağlam desteğe sahip bir linux dağıtımıdır.Hatta pek çok dağıtımın direk babasıdır. (Gerçek manada)

[**The Operating System**_Debian is an operating system and a distribution of Free Software.](https://debian.org/)

#### Ubuntu

Debian tabanlı ancak debian paketlerinin bazı özelleştirilmiş formlarını kullanan bir dağıtımdır. Birebir debian değildir ama pek çok yönü ile debian ile aynı sayılır. Debiandan farklı olarak kullanıcı deneyimini iyileştirmek amacı ile daha eli yüzü düzgün bir kurulum aracı ve bazı ek araçlar ile gelir. Donanım uyumluluğu için özellikle üzerinde çalışılmış bir debian tabanlı dağıtımdır

[**Enterprise Open Source and Linux | Ubuntu** Introducing the Ubuntu Desktop for Raspberry Pi, the latest desktop features and micro clouds. Publisher of Ubuntu…_ubuntu.com](https://ubuntu.com)

#### PopOS!

Ubuntu tabanlı bir distro (suyunun suyu). Nvidia ekran kartlı bilgisayarlarla aşırı uyumlu çalışması ile meşurdur kendisi.

[**Pop!_OS by System76** Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to…_pop.system76.com](https://pop.system76.com/)

#### Fedora

Biraz da başka bir paket yönetim sistemini içeren distro verelim. Fedora **rpm** paket yöneticisini içeren genel amaçlı bir dağıtım.Debian’dan kullanıcı deneyimi olarak pek bir farkını göremedim. Ancak daha sık güncelleniyor ve kendi paketleri, konfigürasyonları, ıvırı zıvırı var.

[**Get Fedora** Choose Freedom. Choose Fedora. Pick a flavor of Fedora streamlined for your needs, and get to work right away._getfedora.org](https://getfedora.org/)

#### **OpenSUSE**

Bir zamanların Almanlarının yerli ve milli işletim sistemi. Fedora ile aynı paket yöneticisini kullansa da kendine ait paketleri ve optimizasyonları ile bence Fedoradan daha kullanışlı bir dağıtım. Ayrıca yast2 yönetici yazılımı da bir hayli kullanımı kolaylaştırmakta.

[**The makers' choice for sysadmins, developers and desktop users.** Any user who wishes to have the newest packages that include, but are not limited to, the Linux kernel, SAMBA, git…_www.opensuse.org](https://www.opensuse.org/)

### Linux Öğrenmek İsteyenler İçin Kaynaklar

Son olarak da biraz kaynak atayım size.

* [**Kim Korkar LINUX'tan**_Niçin LINUX? LINUX'UN tarihçesi, ilk tanışma: KDE masaüstü yöneticisi, editörler; Kedit ve diğerleri, önemli LINUX…_www.getgnu.or](https://www.getgnu.org/belge/e-kitap/kim-korkar-linuxtan.html)

* [**Linux Belgelendirme Çalışma Grubunun Sayfalarına Hoş Geldiniz** Linux Kitaplığı, gönüllüler tarafından oluşturulmakta ve düzenlenmektedir. NASIL belgelerinin dilimize çevrilmesi…_belgeler.org](http://belgeler.org)

* [**Belgelendirme** Bir işletim sisteminin önemli bir parçası, programların nasıl çalıştığını ve kullanıldığını açıklayan teknik…_www.debian.org](https://www.debian.org/doc/index.tr.html)
