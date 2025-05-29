import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoIHQ8OPcPJIuttFrJaLPShnZuAOlZRe0",
  authDomain: "swconst-55387.firebaseapp.com",
  projectId: "swconst-55387",
  storageBucket: "swconst-55387.firebasestorage.app",
  messagingSenderId: "702353141435",
  appId: "1:702353141435:web:28497d537e0e400055039e",
  measurementId: "G-7F889EWNYL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db: Firestore = getFirestore(app); // Explicitly type db as Firestore

export { app, db };