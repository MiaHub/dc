---
title: FireStore
layout: article
header:
  theme: dark
  background: 'linear-gradient(67deg, rgba(17,26,34,1) 25%, rgba(102,102,102,1) 43%, rgba(255,255,255,1) 80%)'
tags: Unity
sidebar: 
   nav: code-en   
--- 
### Upload files:
 
1. npm install firebase-admin

2. Create firebaseUploade.js 
   with:
    - /serviceAccountKey.json from Firebase Project Settings -> Service Accounts -> Generate private key 
    - /yourFile.json being your file you want to upload
```java
const admin = require("firebase-admin");
const fs = require("fs");

// Initialize Firebase Admin
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Load JSON file
const data = JSON.parse(fs.readFileSync("./yourFile.json", "utf8"));

// Upload Data
async function uploadData() {
  for (const [collectionName, documents] of Object.entries(data)) {
    const collectionRef = db.collection(collectionName);
    for (const [docId, docData] of Object.entries(documents)) {
      await collectionRef.doc(docId).set(docData);
      console.log(`Document ${docId} uploaded to collection ${collectionName}`);
    }
  }
  console.log("Upload complete!");
}

uploadData().catch(console.error);
```

3. Create firebaseUploadAll.js
```java
const admin = require("firebase-admin");

const fs = require("fs");

const path = require("path");

  

// Initialize Firebase Admin SDK

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

});

  

const db = admin.firestore();

  

// Directory containing JSON files

const jsonDirectory = "./TablesToUpload"; // Replace with the path to your directory

  

async function uploadJSONFiles(directory) {

  const files = fs.readdirSync(directory); // Read all files in the directory

  

  for (const file of files) {

    const filePath = path.join(directory, file);

  

    // Check if the file is a JSON file

    if (path.extname(file) === ".json") {

      console.log(`Uploading file: ${file}`);

  

      // Read the JSON file

      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  

      // Iterate through collections in the JSON file

      for (const [collectionName, documents] of Object.entries(data)) {

        const collectionRef = db.collection(collectionName);

  

        for (const [docId, docData] of Object.entries(documents)) {

          await collectionRef.doc(docId).set(docData);

          console.log(`Document ${docId} uploaded to collection ${collectionName}`);

        }

      }

    }

  }

  

  console.log("All files uploaded successfully!");

}

uploadJSONFiles(jsonDirectory).catch(console.error);
```
4. node uploadFirestore.js
