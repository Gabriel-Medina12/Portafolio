var correo = document.getElementById("email-2");
var mensaje = document.getElementById("mensaje-2");
var enviar = document.getElementById("enviar-2");
var Email = document.getElementById("email-1");
var Tel = document.getElementById("tel")
var Mensaje = document.getElementById("mensaje-1");
var Enviar = document.getElementById("enviar-1");
var foto = document.getElementById("foto-perfil");
var video = document.getElementById("video");
var cancion = document.getElementById('cancion');
var estado = 0;

enviar.addEventListener('click' , (e) =>{
    e.preventDefault();
    console.log(correo.value);
    console.log(mensaje.value);
    correo.value = "";
    mensaje.value = "";
});
Enviar.addEventListener('click' , (e) =>{
    e.preventDefault();
    console.log(Email.value);
    console.log(Tel.value);
    console.log(Mensaje.value);
    Email.value = "";
    Tel.value = "";
    Mensaje.value = "";
});
function playMusic(){
    if (estado == 0){
        cancion.play();
        estado += 1;
    }else{
        cancion.pause();
        estado -= 1;
    }
};
function playVideo(){
    if(estado == 0){
        video.play();
        estado += 1;
    }else{
        video.pause();
        estado -= 1;
    }
}
foto.addEventListener('click', playMusic);
video.addEventListener('click' , playVideo);

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    if(leftPosition < (trackWidth -listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`
    }else if (leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`
    }
}