function calcular() {
    // Obtener los valores de los inputs
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    // Realizar el cálculo
    let A = ((n1*1) + (n1*2) /2) *n2;

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = "El resultado de la operación es: " + A;
}