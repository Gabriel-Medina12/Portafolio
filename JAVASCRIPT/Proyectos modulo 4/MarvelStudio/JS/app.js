const loginForm = document.getElementById('loginForm')
const registroForm = document.getElementById('registerForm')
const auth = firebase.auth();

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault

    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    
});
registroForm.addEventListener('submit', (e) =>{
    e.preventDefault

    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;

    
});