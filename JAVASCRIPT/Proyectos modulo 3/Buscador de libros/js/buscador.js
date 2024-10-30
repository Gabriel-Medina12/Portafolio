//crear los selectores
const categoria = document.querySelector('#categoria');
const titulo = document.querySelector('#titulo');
const isbn = document.querySelector('#isbn');
const autor = document.querySelector('#autor');
const edicion = document.querySelector('#edicion')

//datos para la busqueda
const datosBusqueda = {
    categoria: '',
    titulo: '',
    isbn: '',
    autor: '',
    edicion:''
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarLibros(libros);
})

categoria.addEventListener('input', e =>{
    datosBusqueda.categoria = e.target.value;
    filtrarLibro()
})

titulo.addEventListener('input', e =>{
    datosBusqueda.titulo = e.target.value;
    filtrarLibro()
})

isbn.addEventListener('input', e =>{
    datosBusqueda.isbn = Number(e.target.value);
    filtrarLibro()
})

autor.addEventListener('input', e =>{
    datosBusqueda.autor = e.target.value;
    filtrarLibro()
})
edicion.addEventListener('input', e =>{
    datosBusqueda.edicion = e.target.value;
    filtrarLibro()
})

function mostrarLibros(libros){
    limpiarHTML();
    const contenedor = document.querySelector('#resultado')

    libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `
        <p>${libro.categoria} - ${libro.titulo} - ISBN: ${libro.isbn} - ${libro.autor} - Edicion: ${libro.edicion}</p>
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
    const resultado = libros.filter(filtrarCategoria).filter(filtrarTitulo).filter(filtrarIsbn).filter(filtrarAutor).filter(filtrarEdicion);

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

function filtrarCategoria(libro){
    if(datosBusqueda.categoria){
        return libro.categoria === datosBusqueda.categoria
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

function filtrarIsbn(libro){
    if(datosBusqueda.isbn){
        return libro.isbn === datosBusqueda.isbn
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

function filtrarEdicion(libro){
    if(datosBusqueda.edicion){
        return libro.edicion === datosBusqueda.edicion
    }else{
        return libro;
    }
}