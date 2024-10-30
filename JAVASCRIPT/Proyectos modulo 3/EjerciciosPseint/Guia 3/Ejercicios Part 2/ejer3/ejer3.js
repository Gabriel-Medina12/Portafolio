function Calcular(){
    let n1 = parseFloat(document.getElementById("vaX").value);
    let n2 = parseFloat(document.getElementById("vaC").value);
    let n3 = parseFloat(document.getElementById("vaY").value);

    let n4 = (((n1 + n2)**2 + (n3 - 0)**2 )**(1/2) + ((n1 - n2)**2 + (n3 - 0)**2 )**(1/2))/2;

    document.getElementById('resultado').textContent = "El resultado de la operación es: " + n4;
}