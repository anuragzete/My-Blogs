// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoHb5SWOBRHpCMEQj8Xxtro3tV73h8Kj4",
    authDomain: "my-blogging-website-1e155.firebaseapp.com",
    projectId: "my-blogging-website-1e155",
    storageBucket: "my-blogging-website-1e155.firebasestorage.app",
    messagingSenderId: "797173340952",
    appId: "1:797173340952:web:afad478056a2716b801c6d",
    measurementId: "G-SV7XPPGCBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
