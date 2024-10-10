function verificarAño() {
    const año = document.getElementById("año").value;

    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        document.getElementById("resultado").textContent = "El año ingresado es bisiesto";
    } else {
        document.getElementById("resultado").textContent = "El año ingresado no es bisiesto";
    }
}
