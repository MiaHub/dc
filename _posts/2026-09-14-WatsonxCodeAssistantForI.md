---
title: watsonx Code Assistant for i
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: AI
sidebar:
   nav: code-en
---

IBM is building a coding assistant specifically for RPG and IBM i. For a platform where
"the AI story" has mostly meant *send your data somewhere else*, this is the first tool
aimed squarely at the code we actually maintain.

<!--more-->

### What it is

A coding assistant purpose-built to accelerate modernization of IBM i applications,
working inside the IDE rather than in a separate chat window.

The important detail is the model underneath: it is built on a flagship **IBM Granite code
model fine-tuned for RPG and IBM i**. Not a general model prompted to guess at RPG — a model
trained on it. Anyone who has watched a general-purpose assistant confidently invent
an opcode understands why that matters.

### What it does today, and what comes later

The private preview is deliberately narrow:

| Now | Later |
|-----|-------|
| Context-aware RPG code explanation | Code generation |
| | Unit test case creation |
| | Code transformation |

Explanation first is the right call. The hard problem in a 30-year-old codebase is not
writing new code, it is understanding what the existing program does before you touch it.
That is where the hours actually go, and it is the task where a wrong answer is cheapest —
you are going to read the code anyway.

Generation is the opposite: highest risk, and the place where an assistant that does not
truly know the language causes real damage.

### Deployment

On-cloud, on-premises and hybrid. For a lot of IBM i shops the on-prem option is not a
preference, it is the only version of this conversation that can happen at all. Source code
is business logic, and plenty of it cannot leave the building.

### Status

Currently in **private preview**, with a waitlist. No general availability date announced.

### My take

The thing I want most is not in the first release. Explanation helps onboarding — and having
trained two developers onto this platform, I know exactly how steep that first month is. But
the daily friction is not *understanding* code, it is the loop around it: edit, compile,
test, repeat.

That loop is what we solved in-house with [our own MCP tooling]({{ site.baseurl }}/projects.html),
and it is why I am watching the IBM i MCP server just as closely as this.

Worth joining the waitlist for. Not worth restructuring a modernization plan around yet.

---

**Sources**

- [Introducing the upcoming IBM watsonx Code Assistant for i](https://www.ibm.com/new/announcements/introducing-the-upcoming-ibm-watsonx-code-assistant-for-i) — IBM
- [IBM watsonx Code Assistant for i — the Journey Begins](https://techchannel.com/you-and-i-blog/watsonx-code-assistant-for-i/) — TechChannel
