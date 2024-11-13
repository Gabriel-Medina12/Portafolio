// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

import {
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbnIuXxL1riPX7_cvLcnk3AGHe6C_Y0yM",
  authDomain: "marvelstudio-4f146.firebaseapp.com",
  projectId: "marvelstudio-4f146",
  storageBucket: "marvelstudio-4f146.firebasestorage.app",
  messagingSenderId: "224193863775",
  appId: "1:224193863775:web:bc5243592eb676fc86fbea",
  measurementId: "G-VBPL3SY50T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado', user);
    })
    .catch((error) => {
        console.error('No ha sido posible registrarse: ', error)
    })
})
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('El usuario ha iniciado sesion:', user);
    })
    .catch((error) => {
        console.error('No ha sido posible iniciar sesion: ', error)
    })
});

const logoutButton = document.getElementById('cerrarSesion');
logoutButton.addEventListener('click', ()=>{
    signOut(auth)
    .then(()=>{
        console.log("El usuario ha cerrado sesion")
    })
    .catch((error)=>{
        console.log("No ha sido posible cerrar sesion", error)
    })
});
onAuthStateChanged(auth, (user)=>{
    if (user){
        new Notification("Bienvenido a Marvel")
        document.getElementById('auth').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else{
        new Notification("Inicia sesion para no perderte de nada")
        document.getElementById('auth').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }
})