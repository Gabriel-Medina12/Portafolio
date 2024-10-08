function Calcular() {
    let nu1 = parseFloat(document.getElementById('vaX').value);
    let nu2 = parseFloat(document.getElementById('vaY').value);
    let nu3 = parseFloat(document.getElementById('vaA').value);
    let nu4 = parseFloat(document.getElementById('vaB').value);
    let nu5 = parseFloat(document.getElementById('vaR').value);
    
    let nu6 = (nu1^2) + (nu2^2) - (2*nu3*nu1) + (nu3^2) + (nu4^2) - (nu5^2)
    
    document.getElementById("resultado").textContent = "El resultado de la operación matematica es: " + nu6
}