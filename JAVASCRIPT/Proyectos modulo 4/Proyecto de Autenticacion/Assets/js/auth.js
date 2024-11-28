import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyClZ-4bR1lauKy4fF2I8YNZ1Q9zBEPKX8U",
    authDomain: "proyecto-auth-74eca.firebaseapp.com",
    projectId: "proyecto-auth-74eca",
    storageBucket: "proyecto-auth-74eca.firebasestorage.app",
    messagingSenderId: "98768480281",
    appId: "1:98768480281:web:99d40bbcefc6552e27a288",
    measurementId: "G-6YYJ5TYYPG"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);