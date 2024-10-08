function calcular() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    let n5 = parseFloat(document.getElementById("n5").value);
    let n6 = parseFloat(document.getElementById("n6").value);
    let n7 = ((n1 - n2)**2 / n3**2) + ((n4 - n5)**2 / n6**2);

    document.getElementById("resultado").textContent = "El resultado de la operación es: " + n7;
}