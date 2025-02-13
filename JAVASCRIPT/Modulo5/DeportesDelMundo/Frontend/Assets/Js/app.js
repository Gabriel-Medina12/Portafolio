document.addEventListener('DOMContentLoaded', function () {
    const formNoticia = document.getElementById('form-noticia');

    formNoticia.addEventListener('submit', async function (event) {
        event.preventDefault(); 

        const titulo = document.getElementById('titulo').value;
        const contenido = document.getElementById('contenido').value;

        const nuevaNoticia = {
            titulo: titulo,
            contenido: contenido,
            fecha: new Date() 
        };

        try {
            const response = await fetch('http://localhost:3000/api/noticias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevaNoticia)
            });

            if (response.ok) {
                alert('Noticia creada correctamente');
                formNoticia.reset(); 
            } else {
                alert('Error al crear la noticia');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    cargarNoticias();
});

async function cargarNoticias() {
    try {
        const response = await fetch('http://localhost:3000/api/noticias');
        const noticias = await response.json();
        mostrarNoticias(noticias);
    } catch (error) {
        console.error('Error al cargar las noticias:', error);
    }
}
function mostrarNoticias(noticias) {
    const contenedorNoticias = document.getElementById('noticias-container');
    contenedorNoticias.innerHTML = '';

    noticias.forEach(noticia => {
        const noticiaElemento = document.createElement('div');
        noticiaElemento.className = 'noticia';
        noticiaElemento.innerHTML = `
            <div class='container-noticias'>
                <h2>${noticia.titulo}</h2>
                <h4>${noticia.periodista}</h4>
                <p>${noticia.contenido}</p>
                <small>${new Date(noticia.fecha).toLocaleDateString()}</small>
            </div>
        `;
        contenedorNoticias.appendChild(noticiaElemento);
    });
}