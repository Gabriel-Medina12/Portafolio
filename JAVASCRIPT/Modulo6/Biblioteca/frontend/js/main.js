document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLibro');
    const listaLibros = document.getElementById('listaLibros');


    cargarLibros();


    form.addEventListener('submit', async (e) => {
        e.preventDefault();
    
        const formData = new FormData(form); 
    console.log(formData)

        const libroId = document.getElementById('libroId').value;
        const url = libroId ? `/api/libros/${libroId}` : '/api/libros';
        const method = libroId ? 'PUT' : 'POST';
    
        const response = await fetch(url, {
            method,
            body: formData, 
        });
    
        if (response.ok) {
            cargarLibros();
            form.reset();
            document.querySelector('button[type="submit"]').textContent = 'Crear Libro';
        }
    });


    async function cargarLibros() {
        const response = await fetch('/api/libros');
        const libros = await response.json();
        listaLibros.innerHTML = libros.map(libro => `
            <div>
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
                <p>${libro.genero}</p>
                <img src="${libro.portada}" alt="Portada de ${libro.titulo}" style="max-width: 200px;">
                <button onclick="editarLibro(${libro.id})">Editar</button>
                <button onclick="eliminarLibro(${libro.id})">Eliminar</button>
            </div>
        `).join('');
    }
{/* <a href='${libro.archivo}' download >descargar</a> */}
    window.editarLibro = async (id) => {
        const response = await fetch(`/api/libros/${id}`);
        if (!response.ok) {
            alert('Error al obtener los datos del libro');
            return;
        }
        const libro = await response.json();
    
        document.getElementById('titulo').value = libro.titulo;
        document.getElementById('autor').value = libro.autor;
        document.getElementById('fecha_publicacion').value = libro.fecha_publicacion;
        document.getElementById('genero').value = libro.genero;
        document.getElementById('libroId').value = libro.id; 
        document.getElementById('portadaExistente').value = libro.portada || '';
 
        document.querySelector('button[type="submit"]').textContent = 'Actualizar Libro';
    };


    window.eliminarLibro = async (id) => {
        const response = await fetch(`/api/libros/${id}`, { method: 'DELETE' });
        if (response.ok) cargarLibros();
    };
});