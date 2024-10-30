function verificarCaracter() {
    const caracter = document.getElementById("caracter").value;

    const caracterMinuscula = caracter.toLowerCase();

    if ((caracterMinuscula >= 'a' && caracterMinuscula <= 'z')) {

        if (caracterMinuscula === 'a' || caracterMinuscula === 'e' || caracterMinuscula === 'i' || caracterMinuscula === 'o' || caracterMinuscula === 'u'){
            document.getElementById("resultado").textContent = "El caracter que ingreso es una vocal";
        } else{
            document.getElementById("resultado").textContent = "El caracter que ingreso es una consonante";
        }

    } else if (caracter >= '0' && caracter <= '9'){
        document.getElementById("resultado").textContent = "El caracter que ingreso es un digito";
    } else{
        document.getElementById("resultado").textContent = "El caracter que ingreso no es ni letra, ni un digito";
    }
}

