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