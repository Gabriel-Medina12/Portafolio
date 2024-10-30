function calcular(){
    let seg = document.getElementById("seg").value;
    const valido = false

    do {
        valido == true
        if (seg >= 0){

            let min = seg / 60;
            let horas = seg / 3600;
            let dias = seg / 86400;

            document.getElementById("resultado").textContent = `El numero que ingreso en segundos es ${seg}, es minutos es ${min}, en horas es ${horas}, y su equivalencia en dias es ${dias}.`
        } else{
            document.getElementById("resultado").textContent = "El número que ingreso es invalido"
        }
    } while (valido == true);
}