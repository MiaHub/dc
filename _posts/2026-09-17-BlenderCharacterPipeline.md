---
title: Blender to Unity, one character at a time
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 0%, rgba(30,44,56,1) 45%, rgba(27,122,75,1) 100%)'
tags: Unity
sidebar:
   nav: code-en
---

I pushed one generated character all the way through: optimise the mesh, rig in Mixamo,
animate in Blender, export to Unity. The mesh work went as expected. What I did not expect to
write down is how often a number I trusted was simply wrong.

<!--more-->

### The model was worse than it looked

It rendered fine. 15,248 triangles, one material, clean normals. Then I counted what Unity
would actually upload:

| | |
|---|---|
| Real vertex positions | **7,651** |
| Vertices Unity uploads | **22,546** |
| UV islands | **4,022** |

Four thousand UV islands, median size one triangle — the fingerprint of an auto-generated
atlas. It costs twice: every seam duplicates a vertex, and four thousand islands have no room
for mip padding, so the character goes muddy at distance.

### Weld before you unwrap

My first fix made it worse — a fresh unwrap gave **25,567** vertices and 2.8% coverage.

The mesh was not just UV-shattered, it was *topologically* shattered: ~4,000 fragments whose
triangles shared no vertices. No unwrap produces large islands from geometry that is not
welded. Merging by distance dropped 22,536 vertices to 7,651 without touching the silhouette,
and custom split normals survived, so shading did not change. *Then* the unwrap worked.

| | Before | After |
|---|---|---|
| Unity vertices | 22,546 | **16,608** |
| UV coverage | 22.9% | **32.9%** |

Coverage went *up* — the original atlas only packed at 22.9%, so this is better texel density
as well as fewer vertices. In Blender, `pack_islands` with **shape method Concave** nearly
doubled coverage over the default.

### Three things that nearly shipped broken

**File size is not runtime cost.** My export was 7.97 MB against the original 2.15 MB, which
looked like failure. Mesh data had gone *down* (0.83 → 0.54 MB); the increase was JPG textures
becoming PNG. Unity re-compresses to ASTC at build time, so source format affects the repo and
nothing else.

**The pivot was at the model's centre**, not its feet — the character would have sunk to the
waist through the Unity floor, and Mixamo would have rigged it that way.

**It was 1 m tall.** Mixamo and Humanoid retargeting both assume real-world height.

None of the three were visible while looking at the model.

### Mixamo and export

Mixamo *is* the rig, so arriving with no armature is correct. Which makes ordering the whole
game: all mesh work happens in Blender **first**, because after rigging the mesh carries skin
weights. And download **with skin once, without skin for every animation** — otherwise each
clip contains its own copy of the mesh.

On export, one setting decides everything. Unity has no idea what a Blender IK constraint is,
so **Bake Animation** is what walks every frame, evaluates constraints, and writes plain bone
rotations. Leave it off and you get a file that imports fine and plays nothing. Also: export
uses the *scene* frame range, not the action's, so a 60-frame clip exported with the timeline
on 48 is silently truncated.

### The part actually worth writing down

Every number I trusted without checking it against something known was wrong at least once.
Not approximately wrong — backwards, or measuring a different thing than I thought.

**A metric can be inverted and look perfect.** I computed a hand's palm normal as
`(along fingers) × (across palm)` and assumed it pointed out of the palm. It points out of the
*back*. So "palm faces the chest, +0.62" meant the palm faced away, and I called it verified
twice while the pose visibly looked wrong. One check catches it: clear all rotations to reach
the rest T-pose, where Mixamo palms face **down**. Mine read +0.98 *up*.

**Coordinate frames stop meaning what you think.** I spent rounds optimising a hand position
in armature space — while the character was mid-way through a 360° spin. "x" had stopped
meaning left-or-right of the body.

**Joint distance is not mesh distance.** 45 mm of clearance between a fist and the chest,
solved. The fist is 4 cm of geometry; surface to surface it was **2 mm**, fully intersecting.

**Search bounds silently delete the right answer.** Twice I concluded a pose was anatomically
impossible. Both times a parameter sweep had capped an axis just below the value it needed. An
exhaustive search reports "impossible" with the same confidence whether the answer is absent
or merely out of range.

**Library conventions lie in specific ways.** Quaternion `.angle` covers 0–360°, so a smooth
3.4° step reads as 356°/frame and looks catastrophic. Euler XYZ means a "twist" axis applied
before a bend is not a twist — it swings the whole limb.

None were hard to fix. All were invisible until something independent disagreed with the
number, usually a screenshot. A plausible measurement and a correct one feel identical from
the inside, and the only defence is a ground truth you did not derive from the same
assumption.

The mesh optimisation was arithmetic. The verification was the work.

---

*Related: [Animations]({{ site.baseurl }}/2023/12/22/animations.html) ·
[Tools]({{ site.baseurl }}/2023/01/12/tools.html)*
