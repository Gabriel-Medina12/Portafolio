const public_key = '8b8d851ec59faa7d12f13053b80c796b' 
const private_key = 'ef540c945aede8060eb82070484f9d08db43dbf5'
const UrlPersonajes = 'https://gateway.marvel.com/v1/public/characters';
const UrlComics = 'https://gateway.marvel.com/v1/public/comics';
const UrlCreators = 'https://gateway.marvel.com/v1/public/creators';
const UrlEvents = 'https://gateway.marvel.com/v1/public/events';
const UrlSeries = 'https://gateway.marvel.com/v1/public/series';
const UrlStories = 'https://gateway.marvel.com/v1/public/stories';
let offset = 0;


const getData = async (url, offset = 0) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const hash = md5(timestamp +  private_key + public_key)

    const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`); 
    const data = response.json()
    return data;
}

function addData( data, type ){
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML = "";
    if(type === 'UrlPersonajes'){

        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="card-item">
                    <h2>${item.name}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.description}</p>
                </div>
            `
        })
    }
    else if(type === 'UrlComics'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="card-item">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.variantDescription}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    }
    else if(type === 'UrlCreators'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="card-item">
                    <h2>${item.firstName}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.suffix}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    }
    else if(type === 'UrlEvents'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="card-item">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.description}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    }
    else if(type === 'UrlSeries'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="card-item">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.description}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    }
    else if(type === 'UrlStories'){
        data.forEach(item =>{
            dataContainer.innerHTML +=`
            <div class="card-item">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.id}</p>
            </div>
            `
        })
    }
};

const prevBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');

getData(UrlPersonajes)
    .then(data => {
        console.log(data.data.results)
        addData(data.data.results)
    });

const personajes = document.getElementById('character');
personajes.addEventListener('click', ()=>{
    getData(UrlPersonajes)
    .then(data =>{

        addData(data.data.results, 'UrlPersonajes')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlPersonajes, offset)
            .then(data =>{

                addData(data.data.results, 'UrlPersonajes')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlPersonajes, offset)
            .then(data =>{
                addData(data.data.results, 'UrlPersonajes')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

const comics = document.getElementById('comics');
comics.addEventListener('click', ()=>{
    getData(UrlComics)
    .then(data =>{

        addData(data.data.results, 'UrlComics')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlComics, offset)
            .then(data =>{

                addData(data.data.results, 'UrlComics')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlComics, offset)
            .then(data =>{
                addData(data.data.results, 'UrlComics')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })

})

const creadores = document.getElementById('creadores');
creadores.addEventListener('click', ()=>{
    getData(UrlCreators)
    .then(data =>{

        addData(data.data.results, 'UrlCreators')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlCreators, offset)
            .then(data =>{

                addData(data.data.results, 'UrlCreators')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlCreators, offset)
            .then(data =>{
                addData(data.data.results, 'UrlCreators')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

const eventos = document.getElementById('eventos');
eventos.addEventListener('click', ()=>{
    getData(UrlEvents)
    .then(data =>{

        addData(data.data.results, 'UrlEvents')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlEvents, offset)
            .then(data =>{

                addData(data.data.results, 'UrlEvents')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlEvents, offset)
            .then(data =>{
                addData(data.data.results, 'UrlEvents')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

const series = document.getElementById('series');
series.addEventListener('click', ()=>{
    
    getData(UrlSeries)
    .then(data =>{

        addData(data.data.results, 'UrlSeries')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlSeries, offset)
            .then(data =>{

                addData(data.data.results, 'UrlSeries')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlSeries, offset)
            .then(data =>{
                addData(data.data.results, 'UrlSeries')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
})

const historias = document.getElementById('historias');
historias.addEventListener('click', ()=>{
    
    getData(UrlStories)
    .then(data =>{

        addData(data.data.results, 'UrlPersonajes')
        prevBtn.addEventListener('click', ()=>{
            if(offset > 0){
                offset -=20;
            }
            getData(UrlPersonajes, offset)
            .then(data =>{

                addData(data.data.results, 'UrlPersonajes')
            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        nextBtn.addEventListener('click', ()=>{
            offset += 20;
            getData(UrlPersonajes, offset)
            .then(data =>{
                addData(data.data.results, 'UrlPersonajes')

            })
                window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })
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


