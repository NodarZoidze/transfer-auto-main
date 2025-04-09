// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD42zdGGHtmP03z0xH6pODIdHCfHTGeWCU",
  authDomain: "transfer-auto-georgia.firebaseapp.com",
  projectId: "transfer-auto-georgia",
  storageBucket: "transfer-auto-georgia.firebasestorage.app",
  messagingSenderId: "290309036136",
  appId: "1:290309036136:web:58ba078b22766688e483dd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
