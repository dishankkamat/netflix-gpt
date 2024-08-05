// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8LOVtNCFyGs-lpe9UjjJa1f6G5W_fzCU",
  authDomain: "netflixgpt-de6ad.firebaseapp.com",
  projectId: "netflixgpt-de6ad",
  storageBucket: "netflixgpt-de6ad.appspot.com",
  messagingSenderId: "939282354178",
  appId: "1:939282354178:web:1e7f19843742949902171b",
  measurementId: "G-CTQ29N7JJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
