let container = document.getElementById("container");
let next = document.getElementById('next');
let back = document.getElementById('back');
let paginas = document.getElementById('paginas');
let currentPage = 1;

function fetchCharacters(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            data.results.forEach(personaje => {
                container.innerHTML += `
                    <div class="card-item">
                        <h2>${personaje.name}</h2>
                        <p>Air Date: ${personaje.air_date}</p>
                        <p>Episode: ${personaje.episode}</p>
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
fetchCharacters('https://rickandmortyapi.com/api/episode')