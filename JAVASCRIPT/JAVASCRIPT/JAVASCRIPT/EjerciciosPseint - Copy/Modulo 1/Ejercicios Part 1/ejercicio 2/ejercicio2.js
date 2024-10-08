function calcularDescuento(){
    const precioInput = document.getElementById("precio");
    const precio = precioInput.value;

    const descuento = precio * 0.25;
    const total = precio - descuento;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Usted tiene que pagar ${total}, y se ahorro ${descuento}`;
}