---
title: FirebaseAuth
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar: 
   nav: code-en   
--- 

<div>{%- include extensions/youtube.html id='52yUcKLMKX0' -%}</div>

1. install packacks -> custom package -> install firebase sdk package -> auth


#### **1. Download Firebase KeyInfo**:

1. Go to the Firebase Console.
2. Select your project.
3. Navigate to **Project Settings** → **General**.
4. In the **Your apps** section:
    - For Android, download `google-services.json`.
    - For iOS, download `GoogleService-Info.plist`.

### **2. Add Configuration Files to Your Project**

1. Place the files in your Unity project:
    
    - `google-services.json` → `Assets/StreamingAssets/`.
    - `GoogleService-Info.plist` → `Assets/StreamingAssets/`.
2. Ensure the file names are correct:
    
    - `google-services.json` for Android.
    - `GoogleService-Info.plist` for iOS.
    - If using Unity for Desktop testing, you also need `google-services-desktop.json`. You can copy `google-services.json` and rename it for testing.