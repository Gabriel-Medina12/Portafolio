//declarar los selecotres
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
//estructura para almacenar los tweets
let tweets = [];

//eventos
eventListener();
function eventListener(){
    formulario.addEventListener('submit',agregarTweet)
}

function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;
    var numTweet = 240
    //validacion
    if(tweet === ''){
        mostrarError('El tweet no puede estar vacio')
        return
    }else if(tweet.length > 240){
        mostrarError('El tweet no puede superar los 240 caracteres');
    }
    else{
        const tweetObj = {
            tweet: tweet,
            id: Date.now()
        }
    
        tweets = [...tweets,tweetObj]
        //console.log(tweets)
        crearHTML();
        formulario.reset()
    }
    if(tweet > numTweet){
        mostrarLimiteCaracter('El tweet excede el número de caracteres');
            return
    }

}
function contadorDeCaracteres(event){
    var cantidad = document.getElementById('tweet').value.length;
    document.getElementById('contador').value = cantidad;
    if(event.target.value.length >= 240){
        return false
    }
}

//va a mostrar un error en la pantalla al usurio
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    //insertar el mensaje de error
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    //eliminar la alerta despues de 3 seg
    setTimeout(()=>{
        mensajeError.remove()
    },3000)
}

function crearHTML(){
    //console.log('ingrese a este llamado')
    limpiarHTML();
    //mostrar todo la informacion que esta guardada en los arreglos de tweets
    if(tweets.length > 0){
        tweets.forEach(tweets =>{
            const li = document.createElement('li');
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X';
            btnEliminar.onclick = ()=>{
                borrarTweet(tweets.id);
            }

            li.innerText = tweets.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        })
    }
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function borrarTweet(id){

    tweets = tweets.filter(tweets => tweets.id !== id)
    //console.log(tweets)
    crearHTML();
}