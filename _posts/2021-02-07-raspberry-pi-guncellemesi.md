---
layout: post
title: "Linux Dağıtımları Bizlere Ne Kadar Şeffaf: Raspbian’ın Son Güncellemesinde, Sisteminize Gizlice Microsoft Deposu Yüklenmiş Olabilir"
date: 2021-02-07 16:08:18 +0300
categories: ['genel', 'pi', 'linux']
image: "2021-02-07-raspberry-pi-guncellemesi.jpg"
image_hash: "7e197b5e67942d892d1c3e41da5e1735"
---



Son Raspbian Güncellemesinin Ardından Raspbian’ın Güvenilirliği Sorgulanıyor

Raspberry Pi; Birleşik Krallık’ta, Rasberry Pi Foundation tarafından geliştirilen, ARM işlemcili bir tek kart bilgisayar. Raspbian(ya da yeni değişen ismiyle Raspberry Pi OS) adı verilen Debian Linux tabanlı işletim sistemi de bu tek kart bilgisayarlar için resmi olarak desteklenen işletim sistemidir. Ayrıca firmware uyumluluğu ve topluluk desteği sebebi ile Raspbian, Raspberry Pi’de en yaygın olarak yüklenen işletim sistemidir. Olayı anlatmadan önce bu bilgileri vermek istedim. Konuya hakim olmayan kişiler için. Çünkü bu yazının ilk kısmı haber, ikinci kısmı bir zihin fırtınası, üçüncü kısım ise bu olayla alakalı benim ürettiğim bir çözümü içeriyor.

# Olayın Haber Kısmı


Yakın zamanda yapılan bir güncellemede, Raspberry Pi OS, kişinin veya yöneticinin bilgisi olmadan Raspberry Pi OS çalıştıran tüm makinelere bir Microsoft apt deposu kurdu. Bu apt deposunun görünürde tek bir amacı var. Microsoft tarafından geliştirilen ve Electron motoru üzerine geliştirilmiş bir metin editörü ve geliştirme ortamı olan Visual Studio Code’yi yüklemek için bir depo eklemek. Nitekim bunun eklenmesini Raspberry Pi Forumunda konu hakkında açılan gönderide Mühendis ve Moderatör rütbeli kişiler açıkladı.

Şimdi gelelim işin sıkıntılı bulunan kısmına. Bildiğiniz gibi Microsoft, Linux topluluğunda kötü bir üne sahiptir. Daha öncesinde bu tip depolar üzerinde telemetri değerleri ve kullanıcı verilerini (en azından kullanım istatistikleri ve IP adresleri) sızdırmaya çalıştığı çokça kez iddia edildi. Şimdi Raspbian’a bu depo eklenince, Raspbian bu depoya sahip olarak her güncellendiğinde, bir Microsoft sunucusuna ping atıyor. Ve bu durum Microsoft sunucuna telemetri verisi girilmesine sebebiyet veriyor.

İşin bu noktasından pek çok kişi rahatsız. Ve bu konuda rahatsızlıklarını da dile getirdiler. Ancak işin daha kötü olan kısmı şu ki, bu konuda açılan forum postu moderatörler tarafından “Microsoft karşıtlığı” olarak yaftalandı ve silindi. Kendi açılarından onlara da hak veriyorum. Sırf Microsoft geliştirdi diye açık kaynak kodlu (bakınız) olan bir geliştirme ortamını diğer özelliklerine bakmaksızın kötülemek bence hiç adil değil. Ancak diğer bir yandan kullanıcılara önceden haber verilmeksizin ve onların onayı alınmaksızın yapılan bu depo eklemesi de hiç adil değil maalesef.

Özellikle bu son dönemde Microsoft cephesinden GNU ve diğer açık kaynak kod topluluklara doğru esen ılıman rüzgar pek çok özgür yazılımcıyı rahatsız etti. Neden etmesin ki. Sürekli olarak bir şeylerinizi izlemeye, sizden veriler devşirmeye yönelen bir şirket bir anda “biz sizi seviyoruz” derse tabi ki herkes biraz korkar ve altında bir sebep arar. En azından bu olayın bu kadar abartılmasındaki durum bu.

# Olayı Biraz İrdelemek ve Yorumlarım


Hepsini bir yana itersek şunu sorgulamamız lazım. Kullandığımız işletim sistemleri bizlere ne kadar şeffaf, ne kadar bizlerin doğrultusunda işler yapıyor ve ne kadar bizlerin özgürlüğünü ve güvenliğini gözetiyor diye bir sorgulamamız lazım bence. Raspbian özelinde yaşanan bu durum maalesef başka bir debian tabanlı işletim sisteminde de yaşanabilirdi. Nitekim benzeri durumlar yakın dönemde de yaşandı da. Ancak pek insanlar umursamadı desem yeridir. Şimdi bir olaya örnek vereyim ve şöyle zihninizi biraz geriye götüreyim. Ve bu anlatacağım hatta olayın içinde Canonical var diyeyim.

Ubuntu, Canonical tarafından üretilen ve Debian’ının paket sistemini kullanan bir dağıtım (Debian tabanlı demiyorum dikkatinizi çekerim).Bu linux dağıtımı yakın zamanda Amazon şirketine kullanıcılarından habersiz veri sağlamakla itham edildi nitekim bu doğru da çıktı. Ubuntu, sekiz yıl boyunca küçücük bir Amazon market başlatıcısı ile dağıtıldı, bu küçük “başlatıcı”, başlatıcı hızlı listesi ile özel bir pencerede çalışan iyi entegre edilmiş bir web uygulaması idi. Zamanla, bildirim desteği, mağaza desteği ve hatta arama çubuğunuzdaki son aramalara erişebilme desteği dahil olmak üzere bir dizi değişikliğe uğradı. Evet işte bu son aramalara erişebilme desteği yüzünden kıyamet koptu. Siz arama çubuğunuza bir şey yazınca Amazon Market önerilerini de getiriyordu ve ilk başta bunu kapatmanın bir çaresi de maalesef yoktu. Zaman ilerledi. Canonical dayanamadı ve bu yazılımı Ubuntu’dan kaldırdı.

Bu arada hakkını yemeyeyim. Canonical, yani Ubuntu’yu geliştiren ve dağıtan şirket son yıllarda birçok başarılı projeye imza attı ve bunlardan birisi snap yazılımı. Snap, sisteminizin ana paketlerine dokunmadan ve bağımlılık ağacınızı kırmadan paket yükleyebilmeye yarayan bir paket yöneticisi. Mantığı biraz daha AppImage formunda paketler üretelim ancak bunların sistemle bağlantısını otomatize edelim. Kağıt üzerinde her şey iyi hoş. Ardından 2019 ve sonrasında çıkartılan isolarda iso içerisinde önyüklü getirmeye başladılar snap paket yöneticisini. Bu konuda bazıları bloatware diye eleştirmeye başlasa da Ubuntu’yu hakkını vermem lazım ki amaçlarının sadece kullanıcı deneyimini iyileştirmek olduğunu söylediler ve nitekim Ubuntu Core isminde bloat(yani gereksiz paketler) içermeyen bir başka sürümünü daha çıkarttı. Ama son sürümlerden itibaren isolara bazı önyüklü snap uygulamaları da ekledi. Ve bunu silmek demek bazı işletim sistemi özelliklerine erişiminizi sıkıntıya düşürüyordu.

Şimdi ben de Ubuntu’yu taşlamış olmayayım. Çünkü elimizde Deepin örneğinde olduğu gibi direk kullanıcıların verilerini kendi sunucularına aktarmakla itham edilen dağıtımlar varken Ubuntu’nun yaptığı çok hafif kalıyor. Ancak Ubuntu’nun sebep olduğu olaylar veya Raspbian’ın son yaptığı gibi şeyleri maalesef pek çok dağıtım geliştiricisi son zamanlarda yapıyor. Sizin istemediğiniz ve belki de istemeyeceğiniz şeyleri özellik diye ekliyor. Eski donanımlar için veya uyumsuz donanımlar için sorun teşkil edebilecek bazı yazılımları ekliyorlar, bloat dediğimiz gereksiz yazılımlarla kurulum medyalarını doldurabiliyorlar ve hatta bazen entegrasyon bahanesi ile sizden veri almak istiyorlar (Mac ve Windows’un aksine en azından nazikçe istiyorlar).

Bütün bu yaşananlar sadece bana bir kaç soruya mal oldu. Gerçekten ne kadar özgürüz? Özgür yazılımlar ve özgür dağıtılan yazılımlar bize ne kadar özgürlük vaadediyor ve ne kadar özgürlük sağlıyor.

# Çözüm

Raspbian olayı özelinde iki çözüm var. Bunlardan bahsedip yazımı bitireyim.

Bunlardan ilk’i Raspbian’a alternatif bazı dağıtımlar denemek. Bunlardan ilk aklıma gelenler OpenSUSE ARM, Armbian, ArchLinux (veya Manjaro) ARM. Ha bir de Gentoo ARM var, eğer kaynaktan inşaa edilen bir dağıtımla mücadele ederim veya güncelleme yapmadan elimdeki sürümleri ile idare ederim diyorsanız Sakaki’nin Github deposunu buraya bırakıyorum. Ön derlenmiş imajlar ve ben derlerimciler için derleme talimatları var.

İkinci çözüm ise VSCode için eklenen depoyu silmek, `/etc/hosts` dosyasına aşağıdaki satırı eklemek,

```
0.0.0.0 packages.microsoft.com
```

ve aşağıdaki komut ile GPG anahtarını silip boş bir dosya açıp dosyaya yazma yetkisini kaldırmak.

```bash
sudo rm -vf /etc/apt/trusted.gpg.d/microsoft.gpg
sudo touch /etc/apt/trusted.gpg.d/microsoft.gpg
sudo chattr +i /etc/apt/trusted.gpg.d/microsoft.gpg
lsattr /etc/apt/trusted.gpg.d/microsoft.gpg
```

# Sonuç

Her olayın altından bir sonuç çıkartmak istiyorum. Bundan da çıkartacağım. Bence olaylar özelinde bir çıkarımda bulunmak her zaman yanlıştır. Olaya genel penceren bir bakıp, olayı o pencerenin özelinde değerlendirmemiz lazım. Ve bu olayı değerlendirdiğinde şu kanıya varıyorum. Herkesin hırsızlık yaptığı yerde hırsızlık yapanları cezalandırmak, hırsızlığın sebebini anlayıp ona çare bulmaktan daha zor olmalı.