function determinarSigno() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
    
    if (num1 > 0 && num2 > 0) {
        resultado.textContent = "La suma sera positiva";
    } else if (num1 < 0 && num2 < 0){
        resultado.textContent = "La suma sera negativa";
    } else {
        resultado.textContent = "Es dificil determinar el signo con certeza";
    }
}