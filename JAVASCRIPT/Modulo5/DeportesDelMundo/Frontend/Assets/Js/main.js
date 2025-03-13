document.addEventListener('DOMContentLoaded', (e) => {
    const nombreContacto = document.getElementById('nombreContacto');
    const emailContacto = document.getElementById('emailContacto');
    const mensajeContacto = document.getElementById('mensajeContacto');
    const enviarFormulario = document.getElementById('enviar-formulario');

    enviarFormulario.addEventListener('click', (e) => {
        e.preventDefault();

        // Acceder a los valores solo cuando se hace clic en el botón
        console.log(nombreContacto.value);
        console.log(emailContacto.value);
        console.log(mensajeContacto.value);

        // Limpiar los campos después de enviar
        mensajeContacto.value = "";
        emailContacto.value = "";
        nombreContacto.value = "";
    });
});
