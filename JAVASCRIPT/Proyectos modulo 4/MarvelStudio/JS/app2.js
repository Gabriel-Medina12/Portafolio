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


const back = document.getElementById('back');
const next = document.getElementById('next');
back.addEventListener('click', ()=>{
    if(offset > 0){
        offset -=20;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });
})
next.addEventListener('click', ()=>{
    offset += 20;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });
})
getData('https://gateway.marvel.com/v1/public/characters', offset)
    .then(data => {
        //console.log(data.data.results)
        addData(data.data.results)
    });


//tarea arrglar los estilos de la pagina de marvel
//barra de navegacion: personajes, comics, creadores, eventos, series, historias
//

// const buttonComics = document.getElementById('bbp')
// button.onclick = getData('https://gateway.marvel.com/v1/public/comics')

// const buttonSeries = document.getElementById('bbc')
// button.onclick = getData('https://gateway.marvel.com/v1/public/series')