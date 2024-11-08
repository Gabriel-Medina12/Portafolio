let contenedor = document.getElementById("contenedor");
let next = document.getElementById('next');
let back = document.getElementById('back');
let paginas = document.getElementById('paginas');
let currentPage = 1;

function fetchCharacters(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = "";
            data.results.forEach(personaje => {
                contenedor.innerHTML += `
                    <div class="card-item">
                        <img src="${personaje.image}">
                        <h2>${personaje.name}</h2>
                        <p>Genero: ${personaje.gender}</p>
                        <p>Status: ${personaje.status}</p>
                        <p>Especie: ${personaje.species}</p>
                    </div>
                `;
            });
            currentPage = getPageNumber(url)
            paginas.innerHTML =`Página ${currentPage}`

            next.onclick = () => {
                fetchCharacters(data.info.next);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            back.onclick = () => {
                fetchCharacters(data.info.prev);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error)
        });
}
function getPageNumber(url) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    return urlParams.get('page') ? parseInt(urlParams.get('page')) : 1;
}
fetchCharacters('https://rickandmortyapi.com/api/character')