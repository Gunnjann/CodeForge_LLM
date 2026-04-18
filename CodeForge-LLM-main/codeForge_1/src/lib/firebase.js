// src/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Paste your config here 👇
const firebaseConfig = {
  apiKey: "AIzaSyBkMKamS_kNEYH_bV6Tlr1dRgcBITr6yRk",
  authDomain: "codeforge-llm.firebaseapp.com",
  projectId: "codeforge-llm",
  storageBucket: "codeforge-llm.firebasestorage.app",
  messagingSenderId: "365014432051",
  appId: "1:365014432051:web:65b0b95c1dcee55ac7a646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);