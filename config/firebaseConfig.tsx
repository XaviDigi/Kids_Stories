// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  databaseURL:"https://ai-kids-story-generator-8ae90-default-rtdb.firebaseio.com",
  authDomain: "ai-kids-story-generator-8ae90.firebaseapp.com",
  projectId: "ai-kids-story-generator-8ae90",
  storageBucket: "ai-kids-story-generator-8ae90.appspot.com",
  messagingSenderId: "819795945111",
  appId: "1:819795945111:web:92b828bdee790b0cc5abd2",
  measurementId: "G-S1L7CV344G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
