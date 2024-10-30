function calcular(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    let maximo = (n1 > n2) ? n1 : n2;
    document.getElementById("resultado").textContent = "El número máximo es " + maximo
}