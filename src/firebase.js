// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC107kbUVk-CsgLgEPf-fulcgzPd_AwyW8",
  authDomain: "todo-app-ec7e6.firebaseapp.com",
  projectId: "todo-app-ec7e6",
  storageBucket: "todo-app-ec7e6.appspot.com",
  messagingSenderId: "218078400338",
  appId: "1:218078400338:web:f22150832db555ebf6348b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
