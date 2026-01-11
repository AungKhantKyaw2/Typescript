
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 import { getAuth,GoogleAuthProvider } from "firebase/auth";



 const firebaseConfig = {
   apiKey: "AIzaSyC_MbFFAnrfHhaUI95NoBr3ZmWslReCyL4",
   authDomain: "my-es6-2-project.firebaseapp.com",
   projectId: "my-es6-2-project",
   storageBucket: "my-es6-2-project.firebasestorage.app",
   messagingSenderId: "449768085897",
   appId: "1:449768085897:web:b5340b87da0bbe8c7d2958"
 };

 const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();
 
