document.addEventListener('keypress', (e) =>{
    if(e.key === ' '){
        alert('Estoy chambeando, funciona')
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    const loader = document.querySelector('.loader');
    setTimeout(()=>{
        loader.style.opacity = '0';
        // loader.style.display = 'none';
    },500);
})