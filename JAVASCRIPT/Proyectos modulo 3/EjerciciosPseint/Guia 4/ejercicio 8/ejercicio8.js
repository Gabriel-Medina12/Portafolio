function descomposicionNum(){
    const number = document.getElementById("number");
    const resultado = document.getElementById("resultado");
    
    let num = parseInt(number.value);

    if(num >= 1000 && num <= 9999){
        let aux = Math.trunc(num / 10);
        let unidad = num % 10;
        let decena = Math.trunc(aux) % 10;
        aux = Math.trunc(aux / 10);
        let centena = Math.trunc(aux) % 10;
        let unidad_de_mil = Math.trunc(aux / 10);

        resultado.textContent = `El número que ingresó descompuesto en decenas, unidades, centenas y unidad de mil es, unidad= ${unidad}, decena= ${decena}, centena= ${centena}, unidad de mil= ${unidad_de_mil}`
    } else {
        resultado.textContent = "El numero que ingreso no tuvo cuatro digitos"
    }
}