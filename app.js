const frontContainer = document.querySelector('.front-container');
const backContainer = document.querySelector('.back-container');

const inputPromotores = document.querySelector('#input-promotores');
const inputNeutros = document.querySelector('#input-neutros');
const inputDetractores = document.querySelector('#input-detractores');

const containerTituloDesempenio = document.querySelector('#container-titulo-card');
const tituloCard = document.querySelector('#titulo-card');
const containerPorcentaje = document.querySelector('#container-porcentaje');
const porcentaje = document.querySelector('#porcentaje');

const mensaje = document.querySelector('#mensaje');
const mensajeObjetivo = document.querySelector('#mensaje-objetivo');

const calcButton = document.querySelector('#calc-button');
const calcular = document.querySelector('#calcular');
const cerrar = document.querySelector('#cerrado');

let promotores;
let neutros;
let detractores;


inputPromotores.addEventListener('change', () => {
    promotores = parseInt(inputPromotores.value);
    console.log(promotores)
});

inputNeutros.addEventListener('change', () => {
    neutros = parseInt(inputNeutros.value); 
    console.log(neutros)
});

inputDetractores.addEventListener('change', () => {
    detractores = parseInt(inputDetractores.value);
    console.log(detractores)
});


calcButton.addEventListener('click', () => {
    frontContainer.classList.toggle('front-rotate');
    backContainer.classList.toggle('back-rotate');
    calcButton.classList.toggle('cerrar');
    calcular.classList.toggle('inactive');
    cerrar.classList.toggle('inactive');
});