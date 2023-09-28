// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB_964kvN0NDPlk5SELHASeJOBIjCgXSM",
  authDomain: "ceo-s-note.firebaseapp.com",
  projectId: "ceo-s-note",
  storageBucket: "ceo-s-note.appspot.com",
  messagingSenderId: "885054756566",
  appId: "1:885054756566:web:4aed6e040db27de4cc9b77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
