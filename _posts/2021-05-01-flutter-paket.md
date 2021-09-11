---
layout: post
title: "Flutter: Linux için Uygulama Paketi Oluşturmak"
date: 2021-05-01 13:23:33 +0300
categories: [genel, linux, programlama]
image: "2021-05-01-flutter-paket.jpeg"
image_hash: "00b9dcc6362a4b02b5674158dd557a8f"
---

AppImage, Flatpak ve Snap Linuxta en çok generic paket tipleridirFlutter'in masaüstü uygulama desteğinin gelmesi ile beraber artık Linux için de kolaylıkla uygulamalar oluşturmamız mümkün. Ancak Windows ve MacOS X'ten farklı olarak Linux'ta paket yönetimi için ortaya çıkmış ve her birisi farklı amaçlar için hizmet eden farklı farklı paket yöneticileri var. Bu hemen bir eleştiri olarak algılanmasın. Olayın özü Linux'ta herkes tarafından tam manası ile benimsenmiş bir paket yönetim sistemi olmayışı oluşturduğumuz paketleri dağıtırken bazen bizlere çeşitli zorluklar çıkartmakta.
İşte bu zorluklarla uğraşmamak adına bazı developerler yeni paket yönetim sistemleri ve formatları geliştirmiş. (Şaka gibi ama gerçek.) Bunların avantajı distro bağımsız olarak bütün bağımlılıkları içerisinde getirerek sadece libc 'yi çalışılan bilgisayardan sürdürerek programları çalıştırmaya olanak sağlamakta.
Bu yazımızda son dönemlerde sıkça kullanılan generic paket yönetim sistemleri için uygulama paketleri çıkartmayı göstereceğim.

## AppImage

AppImage, uygulamayı yüklemek için süper kullanıcı izinlerine ihtiyaç duymadan taşınabilir bir Linux paket dağıtım formatıdır. Ayrıca, yukarı akış paketleme olarak da adlandırılan, paketleri geliştiricileri için Linux dağıtımından bağımsız ikili yazılım dağıtımına izin verir. Böylece dağıtım bağımsız olarak yazılımlarımızı paketleyebilir ve çalıştırabiliriz.

### Ön Hazırlık

İlk olarak AppImage paketlerken kullanacağımız appimagetool'u şuradan indirelim.
Github appimagetool sayfasıVe tabi ki çalıştırabilmek için çalıştırılabilir yetkisi verelim:

```bash
$ chmod +x appimagetool-x86_64.AppImage
```

Bu dosyayı indirdiğimiz dizin bizim ana çalışma dizinimiz olacak.

### Flutter uygulaması

Ardından bir flutter uygulaması oluşturalım.

```bash
$ flutter create --platforms=linux appimage_flutter
```

Ben her seferinde projeyi açtığımda null-safety özelliğini de aktifleştiriyorum. Şimdi bu ritüeli bir daha yapalım.

```bash
$ cd appimage_flutter
$ dart migrate --apply-changes
```

Ve bu deneme projemizi inşaa edelim.

```bash
$ flutter build linux --release
```

Oluşan derlenmiş dosyaları içeren klasörümüzü Uygulamamızın adı ile uygun yeni bir klasöre kopyalamanız gerekecek. Bu klasör örneğin appimage_flutter.AppDir olmalı. Ben bu dizini proje dizinin bir üstüne açacağım:

```bash
$ cd ..
$ mkdir appimage_flutter.AppDir
$ ls 
appimage_flutter  appimage_flutter.AppDir  appimagetool-x86_64.AppImage
```

Şimdi build dizinimizin içerisindekileri AppDir'e taşıyalım

```bash
$ cp appimage_flutter/build/linux/x64/release/bundle/* appimage_flutter.AppDir -R
```

Şimdi de `appimage_flutter.AppDir` içerisine girelim ve AppRun isminde bir dosya oluşturalım. İçerisine şu satırları yazalım.

**AppRun:**

<script src="https://gist.github.com/Zaryob/85d89d0232c6462d90ca00d6e53b4bf5.js"></script>

Ve ardından bunun için de çalıştırılabilir yetkisi verelim.

```bash
$ chmod +x AppRun
```

Eğer isteseniz uygulamamız için bir ikon belirleyelim. Ben öntanımlı Flutter ikonunu kullanacağım. Şimdi de bir .desktop dosyası yazarak uygulamanın nasıl çalıştıracağını girmiş olalım.

**appimage_flutter.AppDir/appimage_flutter.desktop:**

<script src="https://gist.github.com/Zaryob/e36104974ab32797fdfba1dd855279c4.js"></script>

Bu işlemlerin ardından appimage_flutter.AppDir dizini şu şekilde görünmelidir.

```bash
$ ls
appimage_flutter appimage_flutter.desktop appimage_flutter.png data lib AppRun
```

Ve artık çalışma dizinimize dönüp AppImage paketimizi oluşturabiliriz.

```bash
$ ./appimagetool-x86_64.AppImage appimage_flutter.AppDir/ appimage_flutter.AppImage
```
![İşlem](/assets/img/posts/2021-05-01-flutter-paket.png)
İşlemlerin yapılması biraz sürecektir.Artık hazırız AppImage paketini kullanabiliriz.

Çalışma demosu:
![İşlem](/assets/img/posts/2021-05-01-flutter-paket.gif)


## Snap
Flutter kendi dokumantasyonunda öntanımlı olarak snap paketi oluşturmayı göstermiş ve bunu önerdiğini belirtmiş. Şimdi snap paketi oluşturmak ile uğraşalım.

[Snapcraft](https://snapcraft.io/snapcraft)

Snap'i kendi distronuza nasıl kuracağımızı yukarıdaki sayfadan bakarak kurabilirsiniz. Ben aşağıdaki gibi RHEL için nasıl kurulacağını esas alacağım.

[Install Snap on RHEL](https://snapcraft.io/install/snapcraft/rhel)

### Ön Hazırlık

Başlangıçta snapd için EPEL deposunu kuralım.

```bash
$ sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
$ sudo dnf upgrade
```

Ardından bağımlılıklar için ek depoları aktive edelim.

```bash
$ sudo subscription-manager repos --enable "rhel-*-optional-rpms" --enable "rhel-*-extras-rpms"
$ sudo yum update
```

snapd paketini kuralım

```bash
$ sudo yum install snapd
```

snap servisini aktifleştirelim.

```bash
$ sudo systemctl enable --now snapd.socket
Created symlink /etc/systemd/system/sockets.target.wants/snapd.socket → /usr/lib/systemd/system/snapd.socket.
```

snap için gerekli olan dizini sembolik link ile /snap yoluna linkleyelim

```bash
$ sudo ln -s /var/lib/snapd/snap /snap
```

Artık snap'i kullanmaya hazırız. Snap ile snapcraft paket konteynerini kuralım

```bash
$ sudo snap install snapcraft --classic
```

Bu aşamadan sonra bazı paketler için selinux modülleri gerekmektedir. Bunun için aşağıdaki komutları root yetkisi alarak işletelim.

```bash
# ausearch -c 'systemd' --raw | audit2allow -M my-systemd 
# semodule -X 300 -i my-systemd.pp
```

Bu adımlar bizim bazı paketleri kurarken yaşayacağımız sorunlara önlem amacı ile yaptık. Çünkü bazı paket servisleri için selinux ile yetkilendirme gerekebilmekte. Bu yetkilendirme özellikle paketin güvenlik profillerini yönetmek için ihtiyaç duyulur. Bu yetkilerin olmaması, paketin servisinin çakılmasına neden olabilir.

Şimdi diğer bağımlılıkları kuralım. Bu bağımlılıkları bizim paketi nası inşaa edeceğimiz belirleyecek. Ya multipass paketini kurarak VM ile bu paketi oluşturacağız. Veya LXD kurarak paketi konteyner olarak oluşturacağız. Ben ikisini de göstereceğim.
İnşaa bağımlılıklarından olan lxd'yi kuralım. LXD, linux container sistemi olarak geçmektedir. Temel olarak linux içerisinde konteynerler açarak kök dizinden izole bir şekilde uygulama veya servis çalıştırmayı ve hatta chroot gibi bir ortamı yönetmeyi sağlar.

```bash
$ sudo snap install lxd
```

Bunu kurduktan hemen sonra lxd servisini init etmemiz gerekmekte.

```bash
$ sudo /snap/bin/lxd init
```

Her şeyi gönül rahatlığı ile öntanımlı olarak bırakabilirsiniz. Şimdi de kullanıcımızı lxd grubuna ekleyelim.

```bash
$ sudo usermod -a -G lxd <kullanici_adi>
```

Eğer multipass ile beraber paket derlemek gibi bir fikrimiz varsa multipass paketini kuralım. Multipass, hafif kullanılması kolay bir VM yöneticisidir. HyperV CPU sanallaştırma özelliğine ihtiyaç duyar

```bash
$ sudo snap install multipass
```

### Flutter uygulaması

Ardından bir flutter uygulaması oluşturalım.

```bash
$ flutter create --platforms=linux snap_flutter
```

Bir daha null safet açacağımı belirtmeme gerek yok sanırım.

```bash
$ cd snap_flutter
$ dart migrate --apply-changes
```

Şimdi snapcraft.yaml dosyasını oluşturacağız. Bu dosya bizim proje klasörümüzde snap/ dizini altında yer alacak ve bu dosya sayesinde snap uygulamamızı oluşturacağız. Şimdi parça parça snapcraft dosyasının içeriğine bakalım.
İlk olarak bizim bu uygulamamıza verdiğimiz ad ve diğer detayları girmemiz gerekmektedir. Bu bizim paketimizin metadata kısmıdır

<script src="https://gist.github.com/Zaryob/d531b735319161c382f5e06ad42cc598.js"></script>

Sonrasında ise bizim bu paketi nasıl inşaa edeceğimize dair detayları build kısmına gireceğiz.

<script src="https://gist.github.com/Zaryob/c58fa94cb3bc2712b0512b25fc89f6db.js"></script>

Bu uygulamamız için bir çalıştırma slotu oluşturmamız gerekmektedir. Bunu da şu şekilde yapacağız.

<script src="https://gist.github.com/Zaryob/d84e16e601e573b73043050fa7c73d67.js"></script>

Şimdi de uygulamamızın tanımlasını yapalım.

<script src="https://gist.github.com/Zaryob/81d96bd419c74332ca27f5e592c5993f.js"></script>

Ve build için kullanacağımız plugini ve main.dart yolunu belirteceğimiz parts kısmını da yazalım.

<script src="https://gist.github.com/Zaryob/a5a24858d8883a03d06e03477f29b7a8.js"></script>

Sonuç olarak şöyle bir snapcraft dosyası oluşturmuş olacağız.

<script src="https://gist.github.com/Zaryob/b3a27f8dea46b766bc220c1cd7e96169.js"></script>

Diğer gui bazlı gereksinimler için snap/gui yoluna bir dizin açalım.

```bash
$ mkdir snap/gui
```

AppImage için kullandığımız gibi bir ikonu buraya atalım. Ayrıca bir de .desktop dosyası oluşturmamız gerekmektedir. Bunun için:

<script src="https://gist.github.com/Zaryob/f99cfe915522e9025ffe1e988eed6913.js"></script>

Artık hazırız. Projemizin ana dizinine gelerek şu komutu çalıştıralım.
İnşaa esnasında Multipass kullanmak için:

```bash
$ /snap/bin/snapcraft
```

İnşaa esnasında LXD kullanmak için

```bash
$ /snap/bin/snapcraft --use-lxd
```

Bu komut bize bütün detayları ile inşaayı gösterecektir. İnşaa uzun sürerse endişelenmeyin çünkü tamaman en baştan bir build işlemi yapılacağı için uzun sürecektir.

![İşlem](/assets/img/posts/2021-05-01-flutter-paket-2.png)

İşlemin bitmesi ile `snap-flutter_0.1.0_amd64.snap` isminde bir dosya çalışma dizinimizde yer alacaktır. Bu snap dosyasını sistemimize kurabilir veya snapcraft üzerine yükleyebiliriz.

Sistemimize kurmak için şu komutu kullanacağız:

```bash
$ snap install snap-flutter_0.1.0_amd64.snap  --dangerous
```
Uygulamalarınızı yayınlamak için bakınız:
[Releasing to the Snap Store | Snapcraft documentation](https://snapcraft.io/docs/releasing-to-the-snap-store)

## Kaynak Kod:

[Kişisel Github depom](https://github.com/Zaryob/FlutterGarbage)

Tamamen deneysel ve öğrenme amaçlı çöp kodlardan mürekkep bir depodur. - Zaryob/FlutterGarbagegithub.com

# Kaynakça:

* [Flutter Desktop:](https://flutter.dev/desktop)

* [AppImage Packaging Guide: ](https://docs.appimage.org/packaging-guide/index.html)

* [AppImage Packaging Guide 2:](https://discourse.appimage.org/t/how-to-create-an-appimage/155)

* [Flutter Desktop Linux Deployment:](https://flutter.dev/docs/deployment/linux)

* [Snapcraft:](https://snapcraft.io/snapcraft)

* [Flatpak:](https://docs.flatpak.org/en/latest/first-build.html)
