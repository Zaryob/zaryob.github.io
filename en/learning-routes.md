---
layout: default
title: Learning routes
description: Follow a topic from reading to practice across Guides, Execmap, Syscall, Wire, and Pin Atlas.
lang: en
translation_key: learning-routes
translation_of: /ogrenme-rotalari/
permalink: /en/learning-routes/
---

{% assign suite = site.suite_url | default: 'https://zaryob.github.io' %}

Choose a topic. Each route starts with a reading and gives you an observation you can use to check what you learned.

- [From a C call to a Linux system call](#abi)
- [Investigate a slow Linux program](#runtime)
- [From a CAN frame to a capture and a bench](#can)

## From a C call to a Linux system call {#abi}

**Prerequisites:** Basic C, pointers, and compilation. Use Linux and a C compiler for the experiment. The ABI explorer also works in the browser.

1. **Guides** · Use the [GCC and Clang migration guide]({{ suite }}/kilavuzlar/en/cpp/gcc-clang-gecis-problemleri/) to identify compiler and library differences.
2. **Execmap** · Compare x86-64 and AArch64 argument locations for one C function in the [function ABI guide]({{ suite }}/execmap/rehberler/abi.html). Follow `pread` through libc and into the kernel in the [system call walkthrough]({{ suite }}/execmap/rehberler/syscall-boundary.html).
3. **Syscall** · Look up the architecture-specific number and arguments in the [`pread64` reference]({{ suite }}/syscall/call/pread64/).

**Outcome:** Explain why the same offset appears in `rcx` at function entry and `r10` at system call entry on Linux x86-64.

## Investigate a slow Linux program {#runtime}

**Prerequisites:** Basic C and shell use. Kernel measurements require a suitable Linux host, tools, and permissions.

1. **Guides** · If you need a test environment, start with [ARM64 Linux on Apple Silicon]({{ suite }}/kilavuzlar/en/sanallastirma/apple-silicon-arm64-linux/).
2. **Execmap** · Use the [performance analysis introduction]({{ suite }}/execmap/rehberler/performans-analizine-giris.html) to distinguish on-CPU time from waiting. Calculate elapsed and thread CPU time from raw records in the [timing lab]({{ suite }}/execmap/laboratuvarlar/zamanlama-ve-bekleme.html).
3. **Execmap and Syscall** · Trace the [slow program that barely uses the CPU]({{ suite }}/execmap/laboratuvarlar/yavas-program-teshisi.html) and look up the observed [`futex` call]({{ suite }}/syscall/call/futex/) for your architecture.

**Outcome:** Identify which measurement supports an explanation based on CPU work or waiting.

## From a CAN frame to a capture and a bench {#can}

**Prerequisites:** A browser suffices for frame and sample capture inspection. The `vcan` step uses a compatible Linux host, and the hardware step uses a separate bench setup.

1. **Wire** · Read identifiers and data lengths in the [CAN and CAN FD reference]({{ suite }}/wire/buses/can/). Open an example in the [capture analyzer]({{ suite }}/wire/buses/can/analyzer/) and compare observed intervals for one identifier.
2. **Wire** · [Run the virtual CAN experiment]({{ suite }}/wire/buses/can/labs/#virtual-can) to collect a log on Linux. This step observes SocketCAN and a virtual interface.
3. **Pin Atlas and Wire** · For the hardware step, cross-check the [Raspberry Pi 4 pin map]({{ suite }}/pin-atlas/boards/raspberry-pi-4/) against the module, voltage, and wiring requirements of the [MCP2515 lab]({{ suite }}/wire/buses/can/labs/#raspberry-pi-mcp2515).

**Outcome:** Explain the interval you measured from a capture and which properties require a physical bus measurement.

## What each site covers {#sites}

- **Main site** · Technical articles, projects, and learning routes.
- **Guides** · Environment setup, tools, and workflows for Linux, C++, Docker, and virtualization.
- **Execmap** · Compiled program behavior, ELF loading, function ABIs, and runtime experiments.
- **Syscall** · System call numbers, arguments, and the Linux kernel ABI by architecture and release.
- **Wire** · Network protocol headers, bus frames, capture analysis, and SocketCAN experiments.
- **Pin Atlas** · Board and package pin maps, pin functions, electrical conditions, and wiring plans.
