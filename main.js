const send = document.getElementById('send');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const mensaje = document.getElementById('msg');

send.addEventListener('click', () => {
    console.log(nombre.value);
    console.log(email.value);
    console.log(mensaje.value);
    alert('Mensaje enviado');
});


