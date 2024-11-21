const public_key = '8b8d851ec59faa7d12f13053b80c796b' 
const private_key = 'ef540c945aede8060eb82070484f9d08db43dbf5'
var offset = 0;
const UrlPersonajes = 'https://gateway.marvel.com/v1/public/characters';
const UrlComics = 'https://gateway.marvel.com/v1/public/comics';
const UrlCreators = 'https://gateway.marvel.com/v1/public/creators';
const UrlEvents = 'https://gateway.marvel.com/v1/public/events';
const UrlSeries = 'https://gateway.marvel.com/v1/public/series';
const UrlStories = 'https://gateway.marvel.com/v1/public/stories';

const getData = async (url, offset = 0) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp +  private_key + public_key)

    const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`);
    const data = response.json()
    return data;
}

function addData(data){
    const dataContainer = document.getElementById('personajes');
    dataContainer.innerHTML = "";

    data.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.name || item.title || item.firstName || "No hay titutlo"}</h2>
            <p>${item.description || item.variantDescription || "No hay descripción"}</p>
        </div>
        `
    })
}
const personajes = document.getElementById('character');
personajes.addEventListener('click', ()=>{
    getData(UrlPersonajes, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const comics = document.getElementById('comics');
comics.addEventListener('click', ()=>{
    getData(UrlComics, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const creadores = document.getElementById('creadores');
creadores.addEventListener('click', ()=>{
    getData(UrlCreators, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const eventos = document.getElementById('eventos');
eventos.addEventListener('click', ()=>{
    getData(UrlEvents, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const series = document.getElementById('series');
series.addEventListener('click', ()=>{
    
    getData(UrlSeries, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const historias = document.getElementById('historias');
historias.addEventListener('click', ()=>{
    
    getData(UrlStories, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})


const back = document.getElementById('back');
const next = document.getElementById('next');
back.addEventListener('click', ()=>{
    if(offset > 0){
        offset -=20;
    }
    getData(UrlPersonajes, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})
next.addEventListener('click', ()=>{
    offset += 20;
    getData(UrlPersonajes, offset)
    .then(data =>addData(data.data.results))
        window.scrollTo({ top: 0, behavior: 'smooth' });
})

const nav = document.getElementById('navBar');
const abrir = document.getElementById('abrir-menu');
const cerrar = document.getElementById('cerrar-menu');

abrir.addEventListener('click', ()=>{
    nav.classList.add('visible');
})
cerrar.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})
getData(UrlPersonajes, offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });

