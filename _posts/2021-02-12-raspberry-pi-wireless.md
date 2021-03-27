---
layout: post
title: "Raspberry Pi Zero USB Üzerinden Bağlantı Sağlamak"
date: 2021-02-08 09:08:18 +0300
categories: [pi, elektronik]
image: "2021-02-12-rasp5.jpg"
image_hash: "b655f6aceea6fb6b33e5dca01b4beab6"
---

Gün mütiş bir talihsizlikle başladı. Raspberry Pi Zero W kartımın Wifi Modülünü yaktım. Sonuç olarak ekransız bağlantı sağlayamıyorum. Ve benim gibi düzgün bir ikinci hatta üçüncü ekrana sahip birisi değilseniz veya sürekli yanınızda taşıyabileceğiniz minimal bir bilgisayar için koskoca bir ekranı taşımak istemiyorsanız, wifi kartınız yanar yanmaz hemen umutsuzluğa düşebilirsiniz (benim gibi).

Ancak biraz şanslı veya meraklıysanız Raspberry Pi Zero W ve Raspberry Pi Zero modellerine USB üzerinden bağlantı yapmanız mümkün. Ve bu da Linux'un bazı güzel özellikleri ile mümkün.

# Kurulum

İlk olarak mevcut SD Kartınızda veya yeni yazdırdığınız imajını yüklediğiniz SD Kartınızda bazı değişiklikler yapacağız. İlk olarak SD Kartınızı takınız ve diskin boot olarak işaretlenmiş kısmında `config.txt` dosyasında `dwc2` modülünü eklemeniz gerekmekte


![boot sector](/assets/img/posts/2021-02-12-rasp1.png)
```
dtoverlay=dwc2
```
![dtoverlay eklenmiş config](/assets/img/posts/2021-02-12-rasp2.png)

bunu yaptıktan sonra `cmdline.txt` dosyasında düzenleme yapmamız lazım. `rootwait` bayrağının ardından şunu  eklemeniz gerekmekte.

```
modules-load=dwc2,g_ether
```
![modules eklenmiş cmdline](/assets/img/posts/2021-02-12-rasp3.png)

bu moduller bizim `dwc2` olarak adlandırılan modu aktive edecektir.


## Windows'ta Kullanımı

![Raspberry pi](/assets/img/posts/2021-02-12-rasp5.jpg)

Bu adımda USB kablosunun ucunu güç ucundan değil 2. girişten yapacağız (fotoğraftak soldaki microUSB girişi). Bağladıktan kısa bir süre sonra Windows otomatik olarak Ethernet cihazı olarak Raspberry'i algılayacaktır.

Artık tek yapmamız gereken ssh üzerinden raspberry'e bağlanmak.

```bash
ssh pi@raspberry.local
```

Raspberry Pi üzerinde WiFi bağlantınızı (veya başka bir bağlantınızı) da paylaşmak için aşağıdaki adımı uygulamak.
![Raspberry pi](/assets/img/posts/2021-02-12-rasp4.png)

Bu bizim internetimizi raspberry'e aktarmamız için yönlendirme yapacaktır ve bu sayede Raspberry Pi ile internet bağlantısına da sahip olacağız.

## MacOS'ta Kullanımı

Mac'te kullanımı aslında Windows ile aynı. USB ile bağlanır bağlanmaz kullanıma hazır duruma gelecektir ve yine raspberry.local adresi ile bağlantı başarı ile yapılacaktır.

```bash
ssh pi@raspberry.local
```

Fazladan internet paylaşımı için ise ayarlar üzerinden internet paylaşımını aktifleştirip ağı ayarlamak gerekir.

![Raspberry pi](/assets/img/posts/2021-02-12-rasp9.png)


## Linux'ta Kullanımı

USB ile Pİ Zero'yu bağladıktan sonra maalesef anında ayarlama yapılmayacak. Bunun sebebi bizim ek bazı işlemlere ihtiyaç duymamız. İlk olarak SD Kartımızı yeniden bağlayıp `root` bölümünde bulunan `etc/network/interfaces` dosyasına şunu eklememiz gerekmekte

```
allow-hotplug wlan1
iface wlan1 inet manual
   wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf

allow-hotplug usb0
iface usb0 inet static
        address 192.168.7.2
        netmask 255.255.255.0
        network 192.168.7.0
        broadcast 192.168.7.255
        gateway 192.168.7.1
```

bu kod bizim raspberry pi cihazımızın ip adresini static tanımlamamızı sağlayacak. Şimdi de network manager üzerinden ayarlamalarımızı yapalım
Bağlantı ayarları üzerinden ağ adresini elle ayarlayalım.
![Raspberry pi](/assets/img/posts/2021-02-12-rasp6.jpg)
![Raspberry pi](/assets/img/posts/2021-02-12-rasp7.jpg)
Açılan pencerede ipv4 için elle seçeneğini seçelim ve aşağıdaki gibi IP Adreslerini girelim.

*IP Adresi*: 192.168.7.1
*Ağ Maskesi*: 255.255.255.0
*Ağ Adresi/Geçit Adresi*: 192.168.7.1

![Raspberry pi](/assets/img/posts/2021-02-12-rasp8.jpg)


Bu aşamadan itibaren Raspberry Pi cihazımıza sorunsuz bağlanabiliriz ancak bilgisayarımızdaki interneti raspberry üzerinden kullanmak için ip yönlendirmesi yapmamız lazım.


```bash
sudo ifconfig enp0s20f0u2 192.168.7.1
sudo sysctl net.ipv4.ip_forward=1
sudo iptables --table nat --append POSTROUTING --out-interface wlp2s0 -j MASQUERADE
sudo iptables --append FORWARD --in-interface enp0s20f0u2 -j ACCEP

```

Bu ayarlamaların ardından Linux'ta da Raspberry Pi Zero'yu rahatlıkla kullanabiliriz.
