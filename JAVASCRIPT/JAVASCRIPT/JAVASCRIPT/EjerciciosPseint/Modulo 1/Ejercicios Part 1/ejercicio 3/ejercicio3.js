function convertir() {
    let segundos = document.getElementById("segundos").value;

    if(segundos >= 0){
        let minutos = segundos / 60;
        let horas = segundos / 3600;

        document.getElementById("resultado").textContent = `El número que ingresó en segundos es ${segundos}, en minutos es ${minutos} y su equivalencia en hora es: ${horas}`;     
    } else{
        document.getElementById("resultado").textContent = "El dato que ingreso es inválido";
        }
}