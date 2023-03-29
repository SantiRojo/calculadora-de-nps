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

const animar = () => {
    frontContainer.classList.toggle('front-rotate');
    backContainer.classList.toggle('back-rotate');
    calcButton.classList.toggle('cerrar');
    calcular.classList.toggle('inactive');
    cerrar.classList.toggle('inactive');
}



inputPromotores.addEventListener('input', () => {
    promotores = parseInt(inputPromotores.value);
    isButtonOn()
    console.log(promotores)
});

inputNeutros.addEventListener('input', () => {
    neutros = parseInt(inputNeutros.value); 
    isButtonOn()
    console.log(neutros)
});

inputDetractores.addEventListener('input', () => {
    detractores = parseInt(inputDetractores.value);
    isButtonOn()
    console.log(detractores)
});


calcButton.addEventListener('click', () => {
    animar();
});
