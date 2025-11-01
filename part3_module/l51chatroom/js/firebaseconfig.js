// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChTt1NeUUJR30ET5PpsHb3480L-TS_dSY",
    authDomain: "es6-chatroom-project.firebaseapp.com",
    projectId: "es6-chatroom-project",
    storageBucket: "es6-chatroom-project.firebasestorage.app",
    messagingSenderId: "811549271849",
    appId: "1:811549271849:web:1650bc0f87ee106ac83938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
