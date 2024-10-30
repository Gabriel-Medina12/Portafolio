function calcularNota(){
    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;
    const nota5 = document.getElementById('nota5').value;
    const nota6 = document.getElementById('nota6').value;
    const resultado = document.getElementById('resultado');

    let n1f = 25 * nota1 / 100;
	let n2f = 25 * nota2 / 100;
	let n3f = 15 * nota3 / 100;
	let n4f = 15 * nota4 / 100;
	let n5f = 10 * nota5 / 100;
	let n6f = 10 * nota6 / 100;
	let notafi = n1f + n2f + n3f + n4f + n5f + n6f;

    if (notafi >= 9 && notafi < 9.5){
        resultado.textContent = "Debe asistir a actividades de recuperación sacó " + notafi
    } else if(notafi >= 9){
        resultado.textContent = "El alumno " + nombre + " aprobo la materia con " + notafi
    } else{
        resultado.textContent = "El alumno" + nombre + " reprobo la materia con " + notafi
    }
}