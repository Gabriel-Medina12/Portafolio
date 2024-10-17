//definir variables o selectores
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

//Definir los eventos o Listeners

cargarEventListener();
function cargarEventListener(){
    //click al boton de agregar al carito
    listaCursos.addEventListener('click', agregarCurso);

    //elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];
        vaciarCarrito();
    });

}

//definir las funciones a utilizar

function agregarCurso(e){
    e.preventDefault();
    // console.log("ingrese")
    //console.log(e.target.classList.contains('agregar-carrito'))
    if(e.target.classList.contains('agregar-carrito')){
        //console.log(e.target.parentElement)
        const curso = e.target.parentElement;
        //console.log(curso)
        leerDatosCurso(curso);

    }

}

function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        const existe = articulosCarrito.some(cursos => cursos.id === cursoId);

        if(existe){
            const curso = articulosCarrito.map(curso =>{
                if(curso.id === cursoId){
                    // primero verifico el id para asegurar que haya encontrado el producto a eliminar
                    if(curso.cantidad > 1){
                        curso.cantidad--;
                        return curso;
                    }else{
                        //caso base: cantidad = 1
                        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
                        return curso;
                    }
                }
            })
        }

        carritoHTML();
    }
}

function vaciarCarrito(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    //forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function leerDatosCurso(curso){
    //console.log(curso)
    const infoCurso ={
        imagen: curso.querySelector('img.imagen-curso').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    if(articulosCarrito.some(curso => curso.id === infoCurso.id)){
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return curso;
            } else{
                return curso;
            }
        })

        articulosCarrito = [...cursos]
    }else{
        articulosCarrito = [...articulosCarrito,infoCurso]
    }
    //console.log(articulosCarrito)
    
    carritoHTML();

}

function carritoHTML(){
    vaciarCarrito();
    articulosCarrito.forEach(cursos => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${cursos.imagen}" width=100>
            </td>
            <td>${cursos.titulo}</td>
            <td>${cursos.precio}</td>
            <td>${cursos.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${cursos.id}">X</a>
            </td>
        `

        contenedorCarrito.appendChild(row);
    })
}