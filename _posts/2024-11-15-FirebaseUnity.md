---
title: FirebaseUnity
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar: 
   nav: code-en   
--- 

# Link Firebase Project with Unity:
{%- include extensions/youtube.html id='A6du3DUTIPI' -%}

### Android debug:
keytool -genkeypair -v -keystore C:\Users\<YourUsername>\.android\debug.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias androiddebugkey

keytool -list -v -alias androiddebugkey -keystore "C:\Users\diete\.android\debug.keystore"

#### Building firestore for an ios on a windows pc is not supported.
Solution needed...