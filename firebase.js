// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjGBso0rOnk_oX_3OYeW4rzFaIh1C343o",
  authDomain: "react-notes-e3345.firebaseapp.com",
  projectId: "react-notes-e3345",
  storageBucket: "react-notes-e3345.appspot.com",
  messagingSenderId: "377053765451",
  appId: "1:377053765451:web:7d857df115d960de75d2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")