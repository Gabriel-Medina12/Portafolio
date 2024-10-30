function verificarDigito() {
    let num = document.getElementById("num").value;

    if (num % 2 == 0){
        document.getElementById("resultado").textContent = "El numero que ingreso es par"
    } else {
        document.getElementById("resultado").textContent = "El numero que ingreso es impar"
    }
}