---
title: AudioUnity
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar: 
   nav: code-en   
--- 

Problem adding audio SFX to GameObject.

solved by:
1. adding AudioSource to GameObject 
2. adding Audio to that AudioSource 
3. triggering the AudioSource by Script:
   using System.Collections;
using UnityEngine;

public class CollectCoin : MonoBehaviour
{
    private AudioSource coinFx;

    private void Start()
    {
        coinFx = GetComponent<AudioSource>(); 
    }

    private void OnTriggerEnter(Collider other)
    {
        if (coinFx != null && coinFx.clip != null)
        {
            coinFx.Play();
            StartCoroutine(DeactivateAfterSound());
        }
        else
        {
            Debug.Log("AudioSource or AudioClip missing!");
        }
    }

    private IEnumerator DeactivateAfterSound()
    {
        yield return new WaitForSeconds(coinFx.clip.length); // Wait for audio to finish
        this.gameObject.SetActive(false); // Deactivate coin
    }
}

4. add is triggered to GameObject
5. add RigidBody to Player 


