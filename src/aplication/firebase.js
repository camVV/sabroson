// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMGAtzhQqpilmtASNG1AkkuqcNYEkT74",
  authDomain: "bd-sabroson.firebaseapp.com",
  projectId: "bd-sabroson",
  storageBucket: "bd-sabroson.appspot.com",
  messagingSenderId: "185115963631",
  appId: "1:185115963631:web:94095f1be0984e59862b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
