---
layout: default
title: Öğrenme rotaları
description: Kılavuzlar, Execmap, Syscall, Wire ve Pin Atlas arasında bir konuyu okumadan uygulamaya taşıyan rotalar.
lang: tr
translation_key: learning-routes
permalink: /ogrenme-rotalari/
---

{% assign suite = site.suite_url | default: 'https://zaryob.github.io' %}

Bir konu seçin. Her rota, önce neyi okuyacağınızı, ardından hangi gözlemle öğrendiğinizi sınayabileceğinizi gösterir.

- [C çağrısından Linux sistem çağrısına](#abi)
- [Yavaş bir Linux programını inceleme](#runtime)
- [CAN çerçevesinden kayda ve donanıma](#can)

## C çağrısından Linux sistem çağrısına {#abi}

**Ön bilgi:** Temel C, işaretçiler ve derleme. Uygulama için C derleyicisi ve Linux gerekir. ABI çizelgesini tarayıcıda da inceleyebilirsiniz.

1. **Kılavuzlar** · [GCC ve Clang geçiş rehberinde]({{ suite }}/kilavuzlar/cpp/gcc-clang-gecis-problemleri/) derleyici ve kitaplık farklarını belirleyin.
2. **Execmap** · [İşlev ABI’leri rehberinde]({{ suite }}/execmap/tr/rehberler/abi.html) aynı C işlevinin x86-64 ve AArch64 argüman konumlarını karşılaştırın. [Sistem çağrısı deneyinde]({{ suite }}/execmap/tr/rehberler/syscall-boundary.html) `pread` çağrısını libc üzerinden çekirdeğe kadar izleyin.
3. **Syscall** · [`pread64` kaydından]({{ suite }}/syscall/tr/call/pread64/) mimariye özgü numara ve argümanları bulun.

**Sonuç:** Linux x86-64’te aynı ofsetin işlev girişinde `rcx`, sistem çağrısı girişinde `r10` yazmacında olmasını açıklayabilin.

## Yavaş bir Linux programını inceleme {#runtime}

**Ön bilgi:** Temel C ve kabuk kullanımı. Çekirdek ölçümleri için uygun Linux, araçlar ve izinler gerekir.

1. **Kılavuzlar** · Ortam kurmanız gerekiyorsa [Apple Silicon üzerinde ARM64 Linux rehberinden]({{ suite }}/kilavuzlar/sanallastirma/apple-silicon-arm64-linux/) başlayın.
2. **Execmap** · [Performans analizine girişte]({{ suite }}/execmap/tr/rehberler/performans-analizine-giris.html) CPU’da geçen süre ile beklemeyi ayırın. Ardından [zamanlama laboratuvarında]({{ suite }}/execmap/tr/laboratuvarlar/zamanlama-ve-bekleme.html) geçen süreyi ve iş parçacığı CPU süresini ham kayıtlardan hesaplayın.
3. **Execmap ve Syscall** · [CPU kullanmayan yavaş programı]({{ suite }}/execmap/tr/laboratuvarlar/yavas-program-teshisi.html) izleyin ve gördüğünüz [futex çağrısını]({{ suite }}/syscall/tr/call/futex/) mimari kaydıyla karşılaştırın.

**Sonuç:** Yavaşlığın CPU çalışmasından mı beklemeden mi kaynaklandığını hangi ölçümün desteklediğini söyleyebilin.

## CAN çerçevesinden kayda ve donanıma {#can}

**Ön bilgi:** Çerçeve ve örnek kayıt incelemesi için tarayıcı yeterli. `vcan` aşaması uyumlu Linux, fiziksel aşama ayrı bir masaüstü düzeneği gerektirir. Wire’ın bağlı teknik sayfaları İngilizcedir.

1. **Wire** · [CAN ve CAN FD başvurusunda]({{ suite }}/wire/tr/buses/can/) kimlikleri ve veri uzunluğunu inceleyin. [Kayıt analiz aracında]({{ suite }}/wire/tr/buses/can/analyzer/) örnek kaydı açıp bir kimliğin gözlenen aralıklarını karşılaştırın.
2. **Wire** · [Sanal CAN deneyinde]({{ suite }}/wire/tr/buses/can/labs/#virtual-can) Linux üzerinde kayıt alın. Bu aşamada gözlemler SocketCAN ve sanal arayüzle sınırlıdır.
3. **Pin Atlas ve Wire** · Fiziksel aşamaya geçerseniz [Raspberry Pi 4 pin eşlemesini]({{ suite }}/pin-atlas/tr/boards/raspberry-pi-4/) ve [MCP2515 deneyinin]({{ suite }}/wire/tr/buses/can/labs/#raspberry-pi-mcp2515) modül, gerilim ve bağlantı koşullarını birlikte kontrol edin.

**Sonuç:** Bir CAN kaydından hesapladığınız aralığı ve fiziksel hat üzerinde ayrıca ölçülmesi gereken özellikleri açıklayabilin.

## Hangi site hangi soruyu yanıtlar? {#sites}

- **Ana site** · Teknik yazılar, proje tanıtımları ve öğrenme rotaları.
- **Kılavuzlar** · Ortam kurma, araç kullanma ve Linux, C++, Docker veya sanallaştırma iş akışları.
- **Execmap** · Derlenmiş program davranışı, ELF yükleme, işlev ABI’leri ve çalışma zamanı deneyleri.
- **Syscall** · Mimari ve çekirdek sürümüne göre Linux sistem çağrısı numaraları, argümanlar ve çekirdek ABI’si.
- **Wire** · Ağ protokolü başlıkları, veri yolu çerçeveleri, kayıt analizi ve SocketCAN deneyleri.
- **Pin Atlas** · Kart ve paket pinleri, pin işlevleri, elektriksel koşullar ve bağlantı planlama.
