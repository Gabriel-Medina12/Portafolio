function calcularPromedio() {
    const temp1 = document.getElementById("temp1").value;
    const temp2 = document.getElementById("temp2").value;
    const temp3 = document.getElementById("temp3").value;
    const temp4 = document.getElementById("temp4").value;

    const suma = temp1 + temp2 + temp3 + temp4;
    const promC = suma / 4;

    const promF = (1.8 * promC) + 32;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `El promedio en Celsius es: ${promC}. El promedio en Fahrenheit es: ${promF}`;
}
