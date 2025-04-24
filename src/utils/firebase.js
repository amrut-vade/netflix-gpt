// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ5Cr74s9K5IeUg_5UHN3Ijr7pY6HNSPg",
  authDomain: "netflixgpt-20515.firebaseapp.com",
  projectId: "netflixgpt-20515",
  storageBucket: "netflixgpt-20515.firebasestorage.app",
  messagingSenderId: "878133808766",
  appId: "1:878133808766:web:1ebb9a30bfa2bc536c922f",
  measurementId: "G-9GM9CTJC6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();