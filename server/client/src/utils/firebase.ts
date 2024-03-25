// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2d779.firebaseapp.com",
  projectId: "mern-blog-2d779",
  storageBucket: "mern-blog-2d779.appspot.com",
  messagingSenderId: "598509201570",
  appId: "1:598509201570:web:2e0aaff9fd3226946dcffb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);