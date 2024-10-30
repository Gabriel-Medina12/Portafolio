function calcular(){
    let num2 = document.getElementById("vaX").value;
    let num3 = document.getElementById("vaA").value;
    let num4 = document.getElementById("vaY").value;
    let num5 = document.getElementById("vaB").value;

    let num1 = (((num2 - num3))^2 + ((num4 - num5) ^2))^1/2
    document.getElementById("resultado").textContent = "El resultado de la operación matematica es: " + num1
}