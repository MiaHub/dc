---
title: Back to Obsidian
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: Tools
sidebar:
   nav: tool-en
---

I moved my notes to OneNote for a while. I have moved them back to Obsidian. The reason is
short: **AI speaks Markdown, and OneNote does not.**

<!--more-->

### What changed

Nothing about OneNote got worse. What changed is how much of my day now involves text that
arrives as Markdown.

Every assistant I use outputs it. Headings, lists, tables, fenced code blocks — that is the
default format, not an option I chose. And the amount of that text going into my notes has
gone from occasional to constant.

OneNote stores its pages in its own format and has no native concept of Markdown. So every
paste is a small loss:

- either the structure is flattened into OneNote's own styling, or
- the asterisks and backticks land as literal characters and I clean them up by hand

Neither is expensive once. Both are expensive fifty times a week. That is the entire
argument — not a missing feature, just a format mismatch that compounds.

### Why Obsidian instead

It is plain Markdown files in a folder on disk. Which means:

- Markdown in, Markdown out, nothing lost in between
- The notes are greppable, diffable, and survive the application
- **Git works on them** — the same version control I use for everything else, rather than a
  proprietary sync I have to trust
- No vendor decides when the format changes

The last point matters more at 2026 than it did at 2020. Keeping notes in a format any tool
can read is the same instinct as keeping source in Git instead of library members.

### The thing that settled it

This website *is* the vault.

The Obsidian folder and the Jekyll source are the same directory. I write a note, and
publishing is a commit — there is no export step and no second copy to keep in sync. That is
not something OneNote could ever have done, and having built it once I was not going to give
it up.

### My setup

Deliberately minimal — the point is the text, not the tool.

| | |
|---|---|
| Theme | **Minimal** |
| Plugin | **Minimal Theme Settings** (the companion plugin) |
| Snippet | one custom CSS file for headings |
| Accent | `#8919be` |

That is the whole list. Every plugin is something that can break on an update, and a note
system that breaks is worse than no note system.

### The heading snippet

Default Markdown headings all look like the same thing at different sizes, which makes
scanning a long note harder than it needs to be. I gave each level a distinct shape instead
of just a distinct size:

```css
/* H1 - uppercase, with a faint rule under it */
.markdown-preview-view h1, .cm-header-1 {
  font-size: 1.55em !important;
  font-weight: 800 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-normal) !important;
  border-bottom: 1px solid var(--background-modifier-border) !important;
  padding-bottom: 6px;
  margin-top: 1.6em !important;
}

/* H2 - a muted vertical bar on the left */
.markdown-preview-view h2, .cm-header-2 {
  font-size: 1.35em !important;
  font-weight: 700 !important;
  color: var(--text-normal) !important;
  border-left: 3px solid var(--background-modifier-border) !important;
  padding-left: 8px !important;
  margin-top: 1.4em !important;
}

/* H3 - flat, italic, muted */
.markdown-preview-view h3, .cm-header-3 {
  font-size: 1.15em !important;
  font-weight: 500 !important;
  font-style: italic;
  color: var(--text-muted) !important;
  padding-left: 0px !important;
  margin-top: 1.2em !important;
}
```

Three levels, three visually different things: a rule, a bar, and plain italic text. I can
now see the structure of a note without reading it.

Two details worth copying if you write your own: the selectors cover both
`.markdown-preview-view` (reading mode) and `.cm-header-*` (live preview), so the headings
look the same while editing and while reading. And the colours come from
`var(--text-normal)`, `var(--text-muted)` and `var(--background-modifier-border)` rather than
fixed values, so the snippet follows the theme instead of fighting it.

Drop it in `.obsidian/snippets/` and enable it under Appearance → CSS snippets.

### Would I go back again

Only if I stopped working with AI-generated text, which is not the direction this is going.

The lesson I am taking is smaller than "Obsidian is better than OneNote" — it is that the
right notes tool is whichever one speaks the same format as everything else you work with.
For me, for now, that format is Markdown.

---

*Related: [Obsidian]({{ site.baseurl }}/2023/01/12/obsidian.html) ·
[Tools]({{ site.baseurl }}/2023/01/12/tools.html)*
