//crear los selectores
const tematica = document.querySelector('#tematica');
const titulo = document.querySelector('#titulo');
const año = document.querySelector('#año');
const autor = document.querySelector('#autor');

//datos para la busqueda
const datosBusqueda = {
    tematica: '',
    titulo: '',
    años: '',
    autor: '',
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarLibros(libros);
})

tematica.addEventListener('input', e =>{
    datosBusqueda.tematica = e.target.value;
    filtrarLibro()
})

titulo.addEventListener('input', e =>{
    datosBusqueda.titulo = e.target.value;
    filtrarLibro()
})

año.addEventListener('input', e =>{
    datosBusqueda.año = Number(e.target.value);
    filtrarLibro()
})

autor.addEventListener('input', e =>{
    datosBusqueda.autor = e.target.value;
    filtrarLibro()
})

function mostrarLibros(libros){
    limpiarHTML();
    const contenedor = document.querySelector('#resultado')

    libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `
        <p>${libro.tematica} - ${libro.titulo} - ${libro.año} - ${libro.autor}</p>
        `;
        contenedor.appendChild(libroHTML);
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarLibro(){
    const resultado = libros.filter(filtrarTematica).filter(filtrarTitulo).filter(filtrarAño).filter(filtrarAutor);

    if(resultado.length){
        mostrarLibros(resultado)
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div');
    noResultado.classList.add('alert', 'error')
    noResultado.appendChild(document.createTextNode('No hay libros para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)
}

function filtrarTematica(libro){
    if(datosBusqueda.tematica){
        return libro.tematica === datosBusqueda.tematica
    }else{
        return libro;
    }
}

function filtrarTitulo(libro){
    if(datosBusqueda.titulo){
        return libro.titulo === datosBusqueda.titulo
    }else{
        return libro;
    }
}

function filtrarAño(libro){
    if(datosBusqueda.año){
        return libro.año === datosBusqueda.año
    }else{
        return libro;
    }
}

function filtrarAutor(libro){
    if(datosBusqueda.autor){
        return libro.autor === datosBusqueda.autor
    }else{
        return libro;
    }
}