---
title: MCP on IBM i
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: AI
sidebar:
   nav: code-en
---

The Model Context Protocol is how an AI assistant reaches systems it was never trained on.
IBM now ships an MCP server for IBM i — which makes this the topic on this list I have the
most direct opinion about, because we built our own first.

<!--more-->

### The problem MCP solves

A language model knows about IBM i in the abstract. It cannot *do* anything on one.
It cannot run a query, submit a job, or compile a program. Every one of those actions
means a human leaving the editor and switching to a 5250 session.

MCP is an open protocol that closes that gap: a server exposes a set of typed tools,
and any compatible client can call them. Released by Anthropic in November 2024, it has
since become the de facto standard for this kind of integration, with native support
across major AI vendors and a large public server ecosystem.

### IBM's MCP server for IBM i

Released quietly as an early version during **TechXchange in October 2025**, built by
IBM's open source team under business architect Jesse Gorzinski.

What it is, concretely:

- Exposes **IBM i database operations as YAML-configured SQL tools**
- Uses the **Mapepire** client for Db2 for i
- Apache 2.0 licensed, mostly TypeScript with some Python
- OpenTelemetry support for tracing and monitoring
- Works with Claude Code, VS Code, Cursor and other MCP clients

IBM has stated an intent to deliver **500 tools in 2026**. No general availability date.

### Where the protocol itself is going

The specification finalised on **2026-07-28** is a significant revision:

- a **stateless protocol core** — the earlier design assumed a long-lived session, which
  was awkward for exactly the kind of request/response tooling most servers actually are
- an **Extensions** framework
- **Tasks** for longer-running work
- **MCP Apps**
- authorization hardening and a formal deprecation policy

The move away from statefulness is the one to read carefully if you have written a server
against the old spec. We have.

### What we built, and why it is different

Our in-house tooling came out of a narrower need: **issue compile commands on the IBM i
directly from VS Code, or from the assistant.** IBM's server is database-first — SQL tools
over Db2 for i. Ours is build-first.

Those are complementary, not competing. The database side is the broader and more reusable
surface, and I would rather run IBM's than maintain my own. The compile loop is the part
that was blocking my developers every single day, which is why it got built first.

If IBM's 500 tools land and include the build path, I will happily delete code.

### Practical note

Read the October 2025 release for what it is: an early version with no GA date. Useful to
prototype against and to shape expectations internally. Not something to put in front of
production change management yet.

---

**Sources**

- [Beta Of MCP Server Opens Up IBM i For Agentic AI](https://www.itjungle.com/2025/10/27/beta-of-mcp-server-opens-up-ibm-i-for-agentic-ai/) — IT Jungle
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — Model Context Protocol
- [Model Context Protocol prepares to break with its stateful past](https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/5276722) — The Register
- [What is Model Context Protocol (MCP)?](https://www.ibm.com/think/topics/model-context-protocol) — IBM
