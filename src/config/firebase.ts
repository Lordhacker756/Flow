// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0i3lXZEkD40Hsmd18ydCViqhKmnql5ZU",
    authDomain: "flow-hypermind.firebaseapp.com",
    projectId: "flow-hypermind",
    storageBucket: "flow-hypermind.appspot.com",
    messagingSenderId: "818977373117",
    appId: "1:818977373117:web:8e4a806f894c8f426030d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebaseConfig, app, db }