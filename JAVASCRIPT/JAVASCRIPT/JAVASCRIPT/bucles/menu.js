/*
Realiza una calculadora que tenga las opciones
1. SUMAR
2. RESTAR
3. MULTIPLICACIÓN
4. DIVIDIR
5. SALIR

tenga en cuenta que el menu se va a repetir hasta que el usuario
indique la opcion de salir
*/

var op;
var rep = true;
var num1, num2
var resultado
var final

do{
    op = parseInt(prompt('Calculadora: \n 1. Suma \n 2. Resta \n 3.Multiplicar \n 4. Dividir \n 5. Salir'))
    //console.log(op);


    switch(op){
        case 1:
            //suma
            //console.log("opcion suma")
            num1 = parseInt(prompt("Ingrese el valor 1"))
            num2 = parseInt(prompt("Ingrese el valor 2"))
            resultado = num1 + num2
            alert("El resultado de la suma es: " + resultado)
            break;
        case 2:
            //resta
            //console.log("opcion resta")
            num1 = parseInt(prompt("Ingrese el valor 1"))
    num2 = parseInt(prompt("Ingrese el valor 2"))
            resultado = num1 - num2
            alert("El resultado de la resta es: " + resultado)
            break;
        case 3:
            //multiplicacion
            //console.log("opcion multiplicacion")
            num1 = parseInt(prompt("Ingrese el valor 1"))
    num2 = parseInt(prompt("Ingrese el valor 2"))
            resultado = num1 * num2
            alert("El resultado de la multiplicacion es: " + resultado)
            break;
        case 4:
            //dividir
            //console.log("opcion dividir")
            num1 = parseInt(prompt("Ingrese el valor 1"))
    num2 = parseInt(prompt("Ingrese el valor 2"))
            if( num2 === 0){
                alert("No se puede dividir entre cero (0)")
            } else{
                resultado = num1 / num2
                alert("El resultado de la division es: " + resultado)
            }
            break;
        case 5:
            //salir
            //console.log("opcion salir")
            rep=false;
            break;
        default:
            prompt("Opción inválida. Por favor, elige entre 1 y 5.")
            break;
    }
} while (rep)