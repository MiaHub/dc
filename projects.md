---
title: Projects
layout: article
key: page-projects
permalink: /projects.html
show_title: false
show_date: false
show_edit_on_github: false
sharing: false
license: false
comment: false
pageview: false
aside: false
full_width: true
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
---

<div target="portfolio">

<section class="pf-hero">
  <p class="pf-hero__eyebrow">Dieter Cho &middot; Wertingen, Germany</p>
  <h1 class="pf-hero__title">Head of IT &amp; Software Developer</h1>
  <p class="pf-hero__lead">
    I build and maintain business software on the IBM Power platform &mdash; and I spend
    most of my energy making that platform feel modern: Git instead of source members,
    VS Code instead of a green screen, and AI assistants that can actually reach the system.
  </p>
  <ul class="pf-hero__facts">
    <li><strong>Since 2017</strong><span>at KAPS GmbH</span></li>
    <li><strong>Since 2022</strong><span>Head of IT, team of 4</span></li>
    <li><strong>IBM i &middot; RPG &middot; SQL</strong><span>core platform</span></li>
    <li><strong>MCP &middot; C# &middot; Python</strong><span>the rest of the toolbox</span></li>
  </ul>
  <p class="pf-hero__actions">
    <a class="pf-btn pf-btn--primary" href="mailto:dietercho@gmail.com">Get in touch</a>
    <a class="pf-btn" href="https://github.com/MiaHub" target="_blank" rel="noopener">GitHub</a>
    <a class="pf-btn" href="{{ site.baseurl }}/about.html">About me</a>
  </p>
</section>

<h2 class="pf-section-title">Work</h2>
<p class="pf-section-sub">Things I have built or led at KAPS GmbH.</p>

<div class="pf-grid">

  <article class="pf-card pf-card--feature">
    <p class="pf-card__kicker">In-house tooling &middot; since 2024</p>
    <h3 class="pf-card__title">MCP tools that reach into IBM i</h3>
    <p class="pf-card__body">
      On IBM i, compiling normally means leaving your editor for a 5250 terminal session.
      I built in-house <strong>Model Context Protocol</strong> tools that expose those compile
      commands directly to VS Code &mdash; and to an AI assistant. The green screen stops being
      a required step, and an assistant can finally act on a platform it otherwise cannot see.
    </p>
    <ul class="pf-card__points">
      <li>Compile commands issued on the IBM i straight from the editor or the assistant</li>
      <li>Removes the constant context switch into the 5250 environment</li>
      <li>Bridges a decades-old platform to a tooling ecosystem built for everything else</li>
    </ul>
    <p class="pf-tags"><span>MCP</span><span>IBM i</span><span>VS Code</span><span>RPG</span><span>CL</span></p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Engineering process &middot; since 2022</p>
    <h3 class="pf-card__title">SEU and RDi out, VS Code and Git in</h3>
    <p class="pf-card__body">
      IBM i source has traditionally lived in library members with no history and no branches.
      I replaced that established toolchain with VS Code plus Git version control, and brought
      the team along with it &mdash; branching, reviewable history and traceable development states
      on a platform where none of that was the norm.
    </p>
    <ul class="pf-card__points">
      <li>Introduced branching and a real commit history for production RPG code</li>
      <li>Trained and onboarded two of the four team members personally</li>
      <li>Documentation moved to Markdown alongside the source</li>
    </ul>
    <p class="pf-tags"><span>Git</span><span>VS Code</span><span>Developer experience</span><span>Team enablement</span></p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Company-wide programme &middot; since 2023</p>
    <h3 class="pf-card__title">AI integration across the company</h3>
    <p class="pf-card__body">
      I am responsible for how AI gets used at KAPS: choosing and rolling out the tools,
      assessing which use cases are actually worth automating, supporting the business
      departments that use them, and bringing AI assistance into our own development work.
    </p>
    <ul class="pf-card__points">
      <li>Tool selection, rollout and day-to-day support for non-technical departments</li>
      <li>Use-case assessment &mdash; deciding what AI should and should not touch</li>
      <li>AI-assisted development as part of the normal workflow, not a side experiment</li>
    </ul>
    <p class="pf-tags"><span>AI integration</span><span>Process design</span><span>Enablement</span></p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Platform &middot; ongoing</p>
    <h3 class="pf-card__title">IBM Power system landscape</h3>
    <p class="pf-card__body">
      Operation and ongoing development of the IBM Power landscape at KAPS, carried through
      to <strong>IBM Power 11</strong>. Backup strategy, system availability and IT security sit
      with me, together with the external service providers and software partners involved.
    </p>
    <ul class="pf-card__points">
      <li>Migration of the system landscape through to IBM Power 11</li>
      <li>Backup, recovery and availability ownership</li>
      <li>Vendor and software-partner management</li>
    </ul>
    <p class="pf-tags"><span>IBM Power 11</span><span>IBM i</span><span>Db2 for i</span><span>Backup &amp; recovery</span><span>IT security</span></p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Business application &middot; 2017&ndash;2022</p>
    <h3 class="pf-card__title">Electronic invoicing in XRechnung format</h3>
    <p class="pf-card__body">
      Implementation of electronic invoicing against the German <strong>XRechnung</strong> standard:
      generating conformant invoice XML out of the existing IBM i billing data and fitting it into
      the system landscape that was already there &mdash; a compliance requirement with no room to
      negotiate the output format.
    </p>
    <ul class="pf-card__points">
      <li>XML generation from Db2 for i data in RPG and SQL</li>
      <li>Integrated into the existing invoicing flow rather than bolted on beside it</li>
      <li>Defect analysis and resolution directly in live production systems</li>
    </ul>
    <p class="pf-tags"><span>RPG</span><span>SQL</span><span>XML</span><span>Db2 for i</span><span>XRechnung</span></p>
  </article>

</div>

<h2 class="pf-section-title">Built on my own time</h2>
<p class="pf-section-sub">Where I go to learn the stacks the day job does not cover.</p>

<div class="pf-grid">

  <article class="pf-card pf-card--feature">
    <p class="pf-card__kicker">Unity &middot; C# &middot; in progress</p>
    <h3 class="pf-card__title">WordMaster &mdash; a language-learning game</h3>
    <p class="pf-card__body">
      An endless runner built to answer a question I had about vocabulary drilling: instead of
      flashcards, you collect the words of a phrase out of the world around you, in the language
      you are learning. Each player carries a per-phrase <em>mastery</em> level, so the game knows
      what to stop highlighting and when to move on.
    </p>
    <ul class="pf-card__points">
      <li>Firestore data model: a ranked phrase list, per-language translations keyed to it, and per-user mastery rows</li>
      <li>Firebase Authentication with Google Sign-In, wired up for Android builds</li>
      <li>Animation, audio, UI Toolkit, and a Blender &rarr; Mixamo &rarr; Unity asset pipeline</li>
    </ul>
    <p class="pf-tags"><span>Unity</span><span>C#</span><span>Firebase Auth</span><span>Cloud Firestore</span><span>UI Toolkit</span><span>Blender</span><span>Android</span></p>
    <p class="pf-card__links">
      <span class="pf-card__links-label">Build notes</span>
      <a href="{{ site.baseurl }}/2024/11/01/Unity.html">Unity</a>
      <a href="{{ site.baseurl }}/2024/11/09/EndlessRunnerTest.html">Endless runner</a>
      <a href="{{ site.baseurl }}/2024/11/15/FireUnity.html">Firebase</a>
      <a href="{{ site.baseurl }}/2024/11/21/FireStore.html">Firestore</a>
      <a href="{{ site.baseurl }}/2024/11/24/FirebaseAuth.html">Auth</a>
      <a href="{{ site.baseurl }}/2024/12/16/UnityGoogleSignIn.html">Google Sign-In</a>
      <a href="{{ site.baseurl }}/2024/11/23/UiToolboxUnity.html">UI Toolkit</a>
    </p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Jekyll &middot; Obsidian &middot; this site</p>
    <h3 class="pf-card__title">A knowledge base that publishes itself</h3>
    <p class="pf-card__body">
      Everything under <a href="{{ site.baseurl }}/archive.html">Archive</a> is written in Obsidian
      as plain Markdown and published straight to GitHub Pages through Jekyll &mdash; no copy-paste
      step between writing and publishing. The landing page is a hand-written canvas animation
      sitting on top of it.
    </p>
    <ul class="pf-card__points">
      <li>Thirty-plus technical notes kept as a working reference, not as blog posts</li>
      <li>The Obsidian vault and the Jekyll source are the same directory</li>
      <li>Canvas and GSAP landing animation written from scratch</li>
    </ul>
    <p class="pf-tags"><span>Jekyll</span><span>Liquid</span><span>Sass</span><span>JavaScript</span><span>Canvas</span><span>GitHub Pages</span></p>
  </article>

  <article class="pf-card">
    <p class="pf-card__kicker">Python &middot; self-study</p>
    <h3 class="pf-card__title">Machine learning fundamentals</h3>
    <p class="pf-card__body">
      Worked through regression and classification from the ground up in Python, writing the notes
      as I went so the reasoning stays recoverable later. The same instinct that drives the rest of
      this site: understand it once, write it down properly, stop relearning it.
    </p>
    <p class="pf-card__links">
      <span class="pf-card__links-label">Notes</span>
      <a href="{{ site.baseurl }}/2024/07/06/python.html">Python</a>
      <a href="{{ site.baseurl }}/2024/07/06/machinelearning.html">Machine learning</a>
      <a href="{{ site.baseurl }}/2024/07/06/regression.html">Regression</a>
      <a href="{{ site.baseurl }}/2024/07/06/classification.html">Classification</a>
    </p>
    <p class="pf-tags"><span>Python</span><span>Regression</span><span>Classification</span></p>
  </article>

</div>

<section class="pf-cta">
  <h2>Interested in working together?</h2>
  <p>The fastest way to reach me is email.</p>
  <p class="pf-hero__actions">
    <a class="pf-btn pf-btn--primary" href="mailto:dietercho@gmail.com">dietercho@gmail.com</a>
    <a class="pf-btn" href="https://github.com/MiaHub" target="_blank" rel="noopener">github.com/MiaHub</a>
  </p>
</section>

</div>
