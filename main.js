const send = document.getElementById('send');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const mensaje = document.getElementById('msg');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log('Nombre ' + nombre.value);
    console.log('Email ' + email.value);
    console.log('Mensaje ' + mensaje.value);
});

send.addEventListener('click', () => {
    
    alert('Mensaje enviado');
});


//Creacionde seccion de skills
const skills = document.getElementById('Skills');

const skillset = [
    {
        'name': 'Python',
        'progreso': '70%'
    },
    {
        'name': 'Java',
        'progreso': '65%'
    },
    {
        'name': 'JavaScript',
        'progreso': '50%'
    },
    {
        'name': 'HTML',
        'progreso': '60%'
    },
    {
        'name': 'CSS',
        'progreso': '55%'
    },
    {
        'name': 'Angular',
        'progreso': '20%'
    },
    {
        'name': 'Figma',
        'progreso': '40%'
    }
];


let textos = [];
let progress = [];

for(let i = 0; i < skillset.length; i++) {
    let texto = '';
    let porcentaje = '';
    texto = skillset[i]['name'];
    textos.push(texto);
    porcentaje = skillset[i]['progreso'];
    progress.push(porcentaje);
};

let hijos = [];
const destrezas = document.getElementById('Skills');

for(let i = 0; i < textos.length; i++) {
    const parrafo = document.createElement('p');
    const bold = document.createElement('strong');
    parrafo.setAttribute('class', 'contenido')
    let text = document.createTextNode(textos[i]);
    let porcentaje = document.createTextNode(progress[i]);
    bold.appendChild(porcentaje);
    parrafo.appendChild(text);
    parrafo.appendChild(bold);
    destrezas.appendChild(parrafo);
};

const divider = document.createElement('hr');
divider.setAttribute('class', 'divider');