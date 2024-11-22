---
title: FireUnity
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar:
   nav: code-en
---

### Link Firebase Project with Unity:
<div>{%- include extensions/youtube.html id='A6du3DUTIPI' -%}</div>
### Android debug:
    keytool -genkeypair -v -keystore C:\Users\<YourUsername>\.android\debug.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias androiddebugkey

    keytool -list -v -alias androiddebugkey -keystore "C:\Users\diete\.android\debug.keystore"

### Adding Firestore to your Unity game:
<div>{%- include extensions/youtube.html id='b5h1bVGhuRk' -%}</div>
#### Building firestore for an ios on a windows pc Warning:
Firebase iOS builds are not supported on Windows. Please build on a OSX machine instead.
UnityEngine.Debug:LogWarning (object)

The error message you're encountering, _"Firebase iOS builds are not supported on Windows. Please build on a OSX machine instead,"_ is essentially a **warning** rather than a critical error in your case. Here's what it means and why your game might still work:

- **Firebase SDK's iOS Build Requirements**:

    - Firebase's iOS SDK relies on Xcode to finalize iOS-specific configurations during the build process (e.g., adding Firebase frameworks to the Xcode project or updating `Info.plist`).
    - These steps are not supported natively on Windows because Windows cannot run Xcode.

- **Unity Cloud Build Works Around This**:

    - Since you're using Unity Cloud Build, the actual build process for iOS (and any required Xcode operations) happens on Unity's macOS servers, not on your Windows machine. This is why the game can be built and deployed despite the warning.
    - The warning appears because the Firebase SDK cannot detect that Unity Cloud Build will handle the macOS-specific steps.



