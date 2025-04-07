// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnWkx3xHc1ADbLmPFlAil6CtA-CWX92g4",
    authDomain: "dermascan-a6d3a.firebaseapp.com",
    projectId: "dermascan-a6d3a",
    storageBucket: "dermascan-a6d3a.firebasestorage.app",
    messagingSenderId: "718573605544",
    appId: "1:718573605544:web:a8cad9e3e269e41df1e89d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
