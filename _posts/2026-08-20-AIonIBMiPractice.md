---
title: AI on IBM i in practice
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: AI
sidebar:
   nav: code-en
---

Notes from being responsible for AI adoption at a company that runs its business on IBM i.
Not a product roundup — the other entries cover those. This is what I have actually
concluded after three years of it.

<!--more-->

### The constraint nobody mentions in the demos

Every AI demo assumes the data is already somewhere an AI can reach it. On IBM i it is not.
It is in Db2 for i, inside a system that has been running the business for decades and is
not going to be rearchitected because a new category of tool arrived.

So the question is never "is the model good enough". It is:

1. May this data leave the building?
2. If not, what can run inside it?
3. What breaks if the tool is wrong?

Most of the decisions follow from question 1, and for a German mid-sized company the answer
is usually no. That single fact eliminates most of the market and explains why IBM's whole
strategy — [Granite under Apache 2.0]({{ site.baseurl }}/2026/08/28/GraniteModels.html),
[Spyre in the same chassis]({{ site.baseurl }}/2026/09/05/SpyreAccelerator.html), on-prem
deployment for [watsonx Code Assistant]({{ site.baseurl }}/2026/09/14/WatsonxCodeAssistantForI.html) —
points the same direction.

### Start where being wrong is cheap

The ranking I use when a department asks for "something with AI":

| Task | Cost of a wrong answer | Verdict |
|---|---|---|
| Explaining existing code | Low — you read it anyway | Start here |
| Drafting documentation | Low — a human edits it | Yes |
| Classifying / extracting from documents | Medium — verifiable against source | Yes, with review |
| Generating code for production | High | Only with full review |
| Anything touching invoices or money | Very high | Deterministic code, not a model |

This is not caution for its own sake. It is that the failure mode of a language model is
*confident plausibility*, and the tasks where that is survivable are exactly the tasks where
a human was going to check the output anyway.

### Tooling beats model choice

The single biggest productivity change we made had nothing to do with which model we used.
It was removing the context switch: letting compile commands run
[from the editor or the assistant]({{ site.baseurl }}/projects.html) instead of from a 5250
session.

A mediocre model with access to your actual build loop beats an excellent model that can only
talk about it. That is the whole premise of
[MCP]({{ site.baseurl }}/2026/09/10/MCPonIBMi.html), and it is why I spent the effort there
first.

### The part that is about people, not technology

Two things I did not expect:

**The scepticism is well-founded and worth listening to.** The developer who has maintained
a program for fifteen years and does not trust a generated suggestion is usually right about
*why*. That instinct is an asset, not resistance to manage.

**Adoption fails on trust, not capability.** People stop using a tool the first time it
confidently produces something wrong and nobody warned them it could. Saying plainly what a
tool is bad at buys more adoption than any demo of what it is good at.

### Where I have landed

Version control and a modern editor were prerequisites, not side quests. We would have got
nothing out of any of this while source still lived in library members with no history.
The unglamorous work came first and it was the work that mattered.

Everything since has been incremental: small, verifiable tasks, tools that reach real systems,
and being honest about the boundary.

---

*Related: [watsonx Code Assistant for i]({{ site.baseurl }}/2026/09/14/WatsonxCodeAssistantForI.html) ·
[MCP on IBM i]({{ site.baseurl }}/2026/09/10/MCPonIBMi.html) ·
[Spyre Accelerator]({{ site.baseurl }}/2026/09/05/SpyreAccelerator.html) ·
[Granite models]({{ site.baseurl }}/2026/08/28/GraniteModels.html)*
