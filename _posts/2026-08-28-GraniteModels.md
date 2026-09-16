---
title: IBM Granite models
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: AI
sidebar:
   nav: code-en
---

Granite is IBM's open model family, and the reason it belongs on this list is the licence:
**Apache 2.0**, weights included. That makes it one of the few serious enterprise model
families you can run entirely on your own hardware without asking anyone's permission.

<!--more-->

### Granite 4.1 — 29 April 2026

| | |
|---|---|
| Language models | 3B, 8B, 30B (dense, decoder-only) |
| Context window | up to 512K tokens |
| Training | ~15 trillion tokens, multi-phase |
| Licence | Apache 2.0 |

Also in the family: speech models at 2B, an embedding model at 97M, plus vision and
Guardian (safety) variants.

The benchmark result worth noting: **Granite 4.1 8B instruct matches or outperforms the
previous Granite 4.0 32B mixture-of-experts model** — a dense 8B replacing a 32B MoE. Smaller
and simpler, same or better output. That is the direction that decides whether any of this
is deployable on hardware a mid-sized company actually owns.

### Granite 4.2 — 25 August 2026

The follow-up adds **native reasoning**: step-by-step chain-of-thought before the final
answer, switchable rather than always-on. Same three sizes, same Apache 2.0 licence, same
512K context.

The 8B and 30B models were additionally post-trained with reinforcement learning on
**agentic trajectories** — tool use, coding, multi-step work in sandboxed terminal and
coding environments. IBM describes the family as built for agentic workflows, which lines
up with where [MCP]({{ site.baseurl }}/2026/09/10/MCPonIBMi.html) is heading.

### Running them

Supported on vLLM, SGLang and llama.cpp, and available through Ollama, Hugging Face,
LM Studio, Replicate, OpenRouter and watsonx.

That list is the actual point. A 3B or 8B model under Apache 2.0, running on llama.cpp on
hardware you own, is a different risk conversation than an API — no data leaves, no per-token
cost, no vendor able to deprecate the model under you. You trade away peak capability for
control.

### Where this fits with the rest

Granite is the thread connecting the other pieces. The
[watsonx Code Assistant for i]({{ site.baseurl }}/2026/09/14/WatsonxCodeAssistantForI.html)
is built on a Granite code model fine-tuned for RPG. The
[Spyre accelerator]({{ site.baseurl }}/2026/09/05/SpyreAccelerator.html) is the hardware for
running models like these on-premises.

Same strategy from three directions: keep the inference — and the data — inside the customer's
own systems.

### Honest assessment

These are not frontier models and IBM is not pretending otherwise. For summarising a
document, classifying a record, extracting fields from an invoice or driving a tool loop,
an 8B Granite running locally is sufficient and the economics are hard to argue with.

For the hard reasoning work, it is not close. Knowing which category a task falls into is
most of the job.

---

**Sources**

- [Introducing the IBM Granite 4.1 family of models](https://research.ibm.com/blog/granite-4-1-ai-foundation-models) — IBM Research
- [Granite 4.2 brings native reasoning to enterprise agents](https://research.ibm.com/blog/introducing-granite-4-2) — IBM Research
- [Granite 4.2 model documentation](https://www.ibm.com/granite/docs/models/granite4-2) — IBM
