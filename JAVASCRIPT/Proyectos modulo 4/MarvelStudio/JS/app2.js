const public_key = '8b8d851ec59faa7d12f13053b80c796b' 
const private_key = 'ef540c945aede8060eb82070484f9d08db43dbf5'
var offset = 0;

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
            <h2>${item.name}</h2>
            <p>${item.description ? item.description : "No hay descripcion"}</p>

        </div>
        `
    })
}
const personajes = document.getElementById('character');
personajes.addEventListener('click', ()=>{
    getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data =>{
        console.log(data)
        addData(data.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


function addData(data2){
    const dataContainer = document.getElementById('comic');
    dataContainer.innerHTML = "";

    data2.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.title ? item.title : "No se encontró titulo"}</h2>
            <p>${item.issueNumber ? item.issueNumber : "No se encontro numero de comic"}</p>
            <p>${item.variantDescription ? item.variantDescription : "No hay descripcion"}</p>
        </div>
        `
    })
}
const comics = document.getElementById('comics');
comics.addEventListener('click', ()=>{
    getData('https://gateway.marvel.com/v1/public/comics', offset)
    .then(data2 =>{
        console.log(data2)
        addData(data2.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


function addData(data3){
    const dataContainer = document.getElementById('creador');
    dataContainer.innerHTML = "";

    data3.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.firstName ? item.firstName : "No se encontró titulo"}</h2>
        </div>
        `
    })
}
const creadores = document.getElementById('creadores');
creadores.addEventListener('click', ()=>{
    getData('https://gateway.marvel.com/v1/public/creators', offset)
    .then(data3 =>{
        console.log(data3)
        addData(data3.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


function addData(data4){
    const dataContainer = document.getElementById('evento');
    dataContainer.innerHTML = "";

    data4.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.title ? item.title : "No se encontró titulo"}</h2>
            <p>${item.description ? item.description : "No hay descripcion"}</p>
        </div>
        `
    })
}
const eventos = document.getElementById('eventos');
eventos.addEventListener('click', ()=>{
    getData('https://gateway.marvel.com/v1/public/events', offset)
    .then(data4 =>{
        console.log(data4)
        addData(data4.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


function addData(data5){
    const dataContainer = document.getElementById('serie');
    dataContainer.innerHTML = "";

    data5.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.title ? item.title : "No se encontró titulo"}</h2>
            <p>${item.description ? item.description : "No hay descripcion"}</p>
        </div>
        `
    })
}
const series = document.getElementById('series');
series.addEventListener('click', ()=>{
    
    getData('https://gateway.marvel.com/v1/public/series', offset)
    .then(data5 =>{
        console.log(data5)
        addData(data5.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


function addData(data6){
    const dataContainer = document.getElementById('historia');
    dataContainer.innerHTML = "";

    data6.forEach(item =>{
        dataContainer.innerHTML +=`
        <div class="card-item">
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}">
            <h2>${item.title ? item.title : "No se encontró titulo"}</h2>
            <p>${item.description ? item.description : "No hay descripcion"}</p>
        </div>
        `
    })
}
const historias = document.getElementById('historias');
historias.addEventListener('click', ()=>{
    
    getData('https://gateway.marvel.com/v1/public/stories', offset)
    .then(data6 =>{
        console.log(data6)
        addData(data6.data.results)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


const back = document.getElementById('back');
const next = document.getElementById('next');
back.addEventListener('click', ()=>{
    if(offset > 0){
        offset -=20;
    }
    getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
next.addEventListener('click', ()=>{
    offset += 20;
    getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });

function mostrar(){
    if(data, data2, data3, data4, data5, data6){

    }
}
//tarea arrglar los estilos de la pagina de marvel
//barra de navegacion: personajes, comics, creadores, eventos, series, historias
//

// const buttonComics = document.getElementById('bbp')
// button.onclick = getData('https://gateway.marvel.com/v1/public/comics')

// const buttonSeries = document.getElementById('bbc')
// button.onclick = getData('https://gateway.marvel.com/v1/public/series')