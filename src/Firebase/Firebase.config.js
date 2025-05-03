// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqVawX0GV5YH2zA3B49_uAZudv3_7dv9o",
  authDomain: "dragon-news-dac2a.firebaseapp.com",
  projectId: "dragon-news-dac2a",
  storageBucket: "dragon-news-dac2a.firebasestorage.app",
  messagingSenderId: "714084049388",
  appId: "1:714084049388:web:baf9dd7718ef1420ef20c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);