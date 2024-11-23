const nav = document.getElementById('navBar');
const abrir = document.getElementById('abrir-menu');
const cerrar = document.getElementById('cerrar-menu');

abrir.addEventListener('click', ()=>{
    nav.classList.add('visible');
})
cerrar.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})