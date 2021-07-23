---
layout: post
title: "CloudLinux şirketi AlmaLinux için ticari destek verecek"
date: 2021-05-03 12:23:43 +0300
categories: [genel, linux, programlama]
image: "2021-05-03-almalinux.jpg"
image_hash: "330649b2a058944e95e231d9fa888fdb"
---

RedHat şirketinin CentOS’un 8.3 sürümü sonrası için RedHat Enterprise Linux sürümlerini taban almayacağını, bunun yerine **upstream** olarak geliştireceklerini duyurunca herkes IBM artık bunun fişini çekiyor demişti. İşin özünde CentOS, RHEL paketlerini esas alarak dağıtılıyorken bunun duyurulmasının ardından CentOS aslında daha güncel Fedora Server projesinden daha kararlı ve daha yavaş özellik güncellemesi alan bir hale gelirken RHEL’i artık takip etmek yerine bir nevi RHEL için bir test alanı olacak. Başta bütün güncellemeler CentOS’a gelecek ve test edildikten sonra da RHEL’e uygun şekilde yeniden derlenecek.

Bu kararın alınmasında IBM her ne kadar karını düşünerek hareket etmiş olsa da topluluk pek mutlu oldu denemez. Yıllar boyunca, CentOS Linux, Linux meraklısı sistem yöneticileri tarafından sevildi çünkü gerçekten, gerçekten yardıma ihtiyaç duymadıkları sürece destek için para ödemeden onu kullanabilir ve RHEL’e ait pek çok özellik ve kararlı bir dağıtım kullanabilirlerdi ama CentOS Stream ile bu kullanıcılara resmen yok öyle bedavaya bunu kullanmak denmiş gibi oldu. IBM burda CentOS kullanıcıları için iki seçenek sunuyor. Ya RHEL lisansı alın veya CentOS Stream’e geçin. CentOS Stream’e geçmek pek çok sunucu için kanserojen bir durum çünkü kimse kendisinin bir test ortamı gibi kullanılmasını istemiyor. Bu yüzden eski CentOS güvenli bir liman gibi görünüyorken bu kararın alınması özellikle CentOS kullanarak hizmet veren herkesi aşırı sinirlendirildi.

Tabi kısa dönemde RHEL’i taban alacak şekilde geliştirilecek yeni projeler de ortaya çıkmadı değil. AlmaLinux ve RockyLinux da bunlardan sadece birkaçı.

Şimdi konumuza dönelim

AlmaLinux 30 Mart itibariyle lanse edilen bir proje. Temel olarak yine RHEL 8.x sürümlerini kullanacak ve Oracle Linux 8.x, RHEL 8.x ve CentOS 8.x’den AlmaLinux üzerine imkan sağlayan bir yapı ile gelecek. Yani mevcutta elinizdekiler kaybetmeden direk geçiş sağlayabileceksiniz.

AlmaLinux topluluğu, yine CentOS’ta olduğu gibi Linux çekirdeği ve çekirdek paket yamaları ve güncellemeleri gibi bu unsurlardan bazılarını zaten sunmakta. Ancak işletmeler için, bir topluluğun nezaketine güvenmek ile sağlam bir destek sözleşmesine güvenmek arasında kritik bir fark vardır. İşte burada da olayın içerisine CloudLinux dahil oldu.

Aynı Oracle Linux’ta olduğu gibi CloudLinux şirketi de kendi isimlerindeki bir işletim sistemine sahip ve taban olarak yine RHEL'i takip ediyor. Bu işletim sistemi için bir abonelik sistemi satıyorlar ve ücretli danışmanlık veriyorlar. CloudLinux, yakın zamanda AlmaLinux İşletim Sistemi için de çok katmanlı destek sunmaya başlayacak. Bu destek RHEL Bugzilla ve Subscription Center’dan aşina olduğumuz, Linux çekirdeği ve çekirdek paketleri için düzenli yamaları ve güncellemeleri, yama teslimi hizmet düzeyi sözleşmelerini (SLA) ve 24/7 olay desteğini içermekte. Şimdi aynı abonelik sisteminin uzaktan destek kısmını AlmaLinux için de getirmeyi planluyor

AlmaLinux topluluğu, Linux çekirdeği ve çekirdek paket yamaları ve güncellemeleri gibi bu unsurlardan bazılarını zaten sunuyor. CloudLinux ise işletmeler için uygun bir abonelik sistemi sunarak isteyen kişilerin belli ücretler karşılığında kurumsal sorunlarına çözüm odaklı güncellemeler ve destek getirecekler. Örneğin, AlmaLinux’u veri merkeziniz için CentOS yerine kullandınız diyelim ama karşılaştığınız bir sorunla ilgili desteğe ihtiyacınız var. Bu durumda topluluktan medet ummak yerine CloudLinux ile etkileşime geçerek ücretli destek alabileceksiniz. Ek olarak, AlmaLinux’a dayalı ticari ürünler ve hizmetler oluşturmak istiyorsanız, CloudLinux size mentorluk ve yama desteği vermek için hazır bekliyor olacak.

CloudLinux yukarı yönlü olarak, ana rakibi RHEL gibi, AlmaLinux için on yıllık destek ve yamalar sunacak. Eski CentOS müşterilerinin çoğu uzun vadeli istikrarla ilgilendiğinden, bu AlmaLinux’u çok çekici kılıyor.

Lansmanından bu yana 21.000'den fazla iso indirmesi ve sayısı yüzbine ulaştığı ifade edilen kullanıcı kitlesine ulaşmış gibi duruyor. AlmaLinux yakın zamanda kararlı olarak sunacakları RHEL 8.4 tabanlı olacak AlmaLinux 8.4 Beta sürümü ve kararlı olarak sundukları 8.3 sürümü ile kullanıcılarını beklemekte.

[**AlmaLinux OS - Forever-Free Enterprise-Grade Operating System**  
_LEARN MORE Welcome to AlmaLinux OS, a new RHEL fork from the team at CloudLinux. A free Linux OS for the community…_almalinux.org](https://almalinux.org/ "https://almalinux.org/")
