// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB28DdSBn33A-nThgwyqkNFl6rqKx84rPg",
  authDomain: "chat-app-446f2.firebaseapp.com",
  projectId: "chat-app-446f2",
  storageBucket: "chat-app-446f2.appspot.com",
  messagingSenderId: "270519034030",
  appId: "1:270519034030:web:9b1aa3f9b36cfb26e48d3f",
  measurementId: "G-HSDRNM6WH2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
