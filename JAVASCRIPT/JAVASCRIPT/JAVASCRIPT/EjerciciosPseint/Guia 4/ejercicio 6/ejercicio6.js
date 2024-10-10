function calcularValorAbsoluto(){
    let numero = document.getElementById("numero").value;
    numero = parseFloat(numero);

    if (numero < 0){
        numero = -numero;
    }
    document.getElementById("resultado").textContent = "El valor absoluto de: " + numero + " es " + numero
}