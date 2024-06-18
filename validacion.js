document.getElementById('contactForm').addEventListener('input', function() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const submitButton = document.getElementById('submitButton');
    const formError = document.getElementById('formError');

    formError.innerHTML = ''; // Limpiar mensajes de error

    let isValid = true;

    if (nombre === '' || nombre.length > 50) {
        formError.innerHTML += 'Campo Nombre no debe estar en blanco o vacío, y debe contener máximo 50 caracteres.<br>';
        isValid = false;
    }
    
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formError.innerHTML += 'E-mail no debe estar vacío, debe contener el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.).<br>';
        isValid = false;
    }

    if (asunto === '' || asunto.length > 50) {
        formError.innerHTML += 'El asunto no debe estar vacío, y debe contener máximo 50 caracteres.<br>';
        isValid = false;
    }

    if (mensaje === '' || mensaje.length > 300) {
        formError.innerHTML += 'El mensaje no debe estar vacío, y debe contener máximo 300 caracteres.<br>';
        isValid = false;
    }

    submitButton.disabled = !isValid;
});

//Mensaje de enviado
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const formError = document.getElementById('formError');
    
    if (!document.getElementById('submitButton').disabled) {
        formError.innerHTML = 'Formulario enviado correctamente.';
    }
});

//Limpiar
document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('contactForm');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });