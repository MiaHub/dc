---
title: UiToolboxUnity
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar:
   nav: code-en
---

1. Hierachy -> Create UI Toolkit ->  Ui Document
2. Assets -> Ui Toolkit -> Create Visual Tree Document -> double click it
3. Create Visual Element
4. Create Label
5. Create Style Sheet USS (Unity Style Sheet) under Assets / Ui Toolkit
6. Create Selectors (eg .header)
7. Add Selectors -> Inspector -> Style class List -> type .header
8. Create Buttons -> apply to Visual Element -> Create .button Selector
9. Align .button -> Add Spacing -> Add Sprite -> Add Round Corners
10. Add Background Sprite to Visual Element
11. Create hover event .button:hover -> up size -> add delay to .button -> can preview
12. Add Button Script ( need Audio Source - no need for resource )

```csharp
using System.Collections;
using System.Collections.Generic;
using UIToolkitDemo;
using UnityEngine;
using UnityEngine.UIElements;
using Virtence.VText.Demo;

public class MainMenuEvents : MonoBehaviour
{
    private UIDocument _document;

    private Button _startButton;
    private Button _settingButton;

    [SerializeField] private AudioSource audioSource; // Reference to an AudioSource
    [SerializeField] private AudioClip buttonClickSound;

    private void Awake()
    {
        // Get the UIDocument component
        _document = GetComponent<UIDocument>();
        if (_document == null)
        {
            Debug.LogError("UIDocument component not found!");
            return;
        }

        // Check if AudioSource is assigned
        if (audioSource == null)
        {
            Debug.LogError("AudioSource is not assigned!");
            return;
        }

        // Get the StartButton and register its callback
        _startButton = _document.rootVisualElement.Q("StartButton") as Button;
        if (_startButton == null)
        {
            Debug.LogError("Button with name 'StartButton' not found in UIDocument!");
        }
        else
        {
            _startButton.RegisterCallback<ClickEvent>(OnPlayGameClick);
        }

        // Get the SettingButton and register its callback
        _settingButton = _document.rootVisualElement.Q("SettingButton") as Button;
        if (_settingButton == null)
        {
            Debug.LogError("Button with name 'SettingButton' not found in UIDocument!");
        }
        else
        {
            _settingButton.RegisterCallback<ClickEvent>(OnSettingsClick);
        }
    }

    private void OnDisable()
    {
        if (_startButton != null)
        {
            _startButton.UnregisterCallback<ClickEvent>(OnPlayGameClick);
        }

        if (_settingButton != null)
        {
            _settingButton.UnregisterCallback<ClickEvent>(OnSettingsClick);
        }
    }

    private void OnPlayGameClick(ClickEvent evt)
    {
        PlaySound();
        Debug.Log("You pressed the Start Button");
    }

    private void OnSettingsClick(ClickEvent evt)
    {
        PlaySound();
        Debug.Log("You pressed the Settings Button");
    }

    private void PlaySound()
    {
        if (audioSource != null && buttonClickSound != null)
        {
            audioSource.PlayOneShot(buttonClickSound);
        }
        else
        {
            Debug.LogError("AudioSource or ButtonClickSound is missing!");
        }
    }
}

```

### UI Toolkit Getting started
<div>{%- include extensions/youtube.html id='_jtj73lu2Ko' -%}</div>
