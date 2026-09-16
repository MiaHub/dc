---
title: Spyre Accelerator on Power11
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: AI
sidebar:
   nav: code-en
---

IBM's answer to "where does the inference run" is a PCIe card that goes in the same box as
the business data. For shops that cannot send that data anywhere, this is the interesting
part of the AI hardware story.

<!--more-->

### The chip

| | |
|---|---|
| Accelerator cores | 32 |
| Transistors | 25.6 billion |
| Process | 5 nm |
| Form factor | 75 W PCIe card |
| Peak throughput | 315 TOPS at INT8 |
| Efficiency | 4.2 TOPS/W |

For comparison, IBM Research puts that at roughly 2–3× better power/performance than GPUs
on encoder-class models. The design target is explicitly **inference**, not training —
which is the right bet for enterprise workloads, where you run a model against your data
far more often than you build one.

### Availability

- **28 October 2025** — IBM z17 and LinuxONE 5
- **Early December 2025** — Power11 servers

Scaling: up to **48 cards** in a Z or LinuxONE system, up to **16 cards** in a Power system.

### Ensemble AI

The part I find most interesting architecturally: the Power11 CPU and the Spyre accelerator
work together to decide *where* a given inference should run, balancing performance, latency
and efficiency. IBM calls this ensemble AI.

In practice that means not every request has to pay the cost of crossing to the accelerator.
Small models stay on the CPU; the card earns its keep on the work that needs it.

### Why this matters on Power

The stated use cases are generative and agentic AI, fraud detection, retail automation, and
document knowledge bases — all with **on-premises processing**.

Strip the marketing and the proposition is narrow but real: run inference next to the
database, inside the same security and resilience envelope as the core workload, without
the data leaving the system it lives on.

That is not a performance argument. It is a compliance and data-gravity argument, and for a
lot of European businesses it is the only argument that matters. The question is never
"is the model good enough" — it is "may this data leave the building", and the answer is
frequently no.

### What I am watching

Cards per system is a useful sanity check on ambition. Sixteen in a Power system is real
capacity, but it is also a reminder of scale: this is for running your models against your
transactions, not for competing with a GPU fleet.

The number that will decide adoption is not TOPS. It is the price of the card against the
cost of a year of API calls — and how much of your data your legal team will let you put
through the latter.

---

**Sources**

- [IBM Introduces the Spyre Accelerator for Commercial Availability](https://newsroom.ibm.com/2025-10-07-ibm-introduces-the-spyre-accelerator-for-commercial-availability) — IBM Newsroom
- [Lifting the cover on the IBM Spyre Accelerator](https://research.ibm.com/blog/lifting-the-cover-on-the-ibm-spyre-accelerator) — IBM Research
- [A Bit More Insight Into IBM's "Spyre" AI Accelerator For Power](https://www.itjungle.com/2025/10/20/a-bit-more-insight-into-ibms-spyre-ai-accelerator-for-power/) — IT Jungle
