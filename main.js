//form
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
    alert('Su solicitud ha sido enviada');
});


//Creacion de seccion de skills
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
destrezas.appendChild(divider);
divider.setAttribute('class', 'divider');

//Hero

const carrusel = document.getElementById('hero-img');
const img = document.getElementById('imagen');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const cambiarImg = (n) => {
    if(n === 0) {
        img.src = './imagenes/programacion.jpg';
    } else if(n === 1) {
        img.src = './imagenes/avila.png';
    } else if(n === 2) {
        img.src = '.imagenes/radcliffe camera.jpg';
    } else {
        n = 0;
    }
}

let i = 0;

prev.addEventListener('click', () => {
    if(i === 0) {
        img.src = './imagenes/programacion.jpg';
        i += 1;
    } else if(i === 1) {
        img.src = './imagenes/avila.png';
        i += 1;
    } else if(i === 2) {
        img.src = './imagenes/radcliffe camera.jpg';
        i += 1;
    } else {
        i = 0;
    }
});

next.addEventListener('click', () => {
    if(i === 2) {
        img.src = './imagenes/programacion.jpg';
        i -= 1;
    } else if(i === 1) {
        img.src = './imagenes/radcliffe camera.jpg';
        i -= 1;
    } else if(i === 0) {
        img.src = './imagenes/avila.png';
        i -= 1;
    } else {
        i = 2;
    }
});