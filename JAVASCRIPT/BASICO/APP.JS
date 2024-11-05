var nombre = "Gabriel";
let nombre2 = "Eduardo"
const apellido = "Medina"

if(nombre == nombre2){
    nombre = nombre + " " + apellido;
}else{
    nombre2 = nombre2 + " " + apellido;
}

var numero = 0;
while (numero < 10) {
    console.log(numero);
    numero += 1;
}
for (var i = 0; i < 50; i += 2){
    console.log(i)
}
function imprimirNombre(nombre){
    console.log(nombre)
}