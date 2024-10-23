var mano_obra = 10;
var delivery = 5;

var costo_ingredientes = 5;
var pizza = []
pizza['pequeña'] = 10
pizza['mediana'] = 14
pizza['grande'] = 16
 
function calcularArea(numero){
    area = Math.PI * ( (numero/2) ** 2)
    return area;
}
function costoPizza(pizza, tamaño){
    area = calcularArea(pizza[tamaño])
    costo = area * 0.03;
    return costo;
}
function costoTotal(pizza, tamaño){
    var costo_Total = costoPizza(pizza, tamaño) + mano_obra + delivery + obtenerCostoIngredientes()
    return costo_Total
}
function obtenerCostoIngredientes(){
    var ingredientes = document.getElementsByClassName('ingredientes');
    var count = 0;
    for (i = 0; i < ingredientes.length; i++){
        if(ingredientes[i].checked){
            count++
        }
    }
    return count * costo_ingredientes
}
var button = document.getElementById('boton');
button.addEventListener('click', function(e){
    e.preventDefault();
    var tamañoPizza = document.getElementById('pizza').value;
    var tipo = document.getElementsByClassName('tipo');

    var costo_Total = costoTotal(pizza, tamañoPizza).toFixed(2)
    alert(costo_Total);
})