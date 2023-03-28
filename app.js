const frontContainer = document.querySelector('.front-container');
const backContainer = document.querySelector('.back-container');

const inputPromotores = document.querySelector('#input-promotores');
const inputNeutros = document.querySelector('#input-neutros');
const inputDetractores = document.querySelector('#input-detractores');


let promotores;
let neutros;
let detractores;


inputPromotores.addEventListener('change', () => {
    promotores = inputPromotores.value;
});

inputNeutros.addEventListener('change', () => {
    neutros = inputNeutros.value;
});

inputDetractores.addEventListener('change', () => {
    detractores = inputDetractores.value;
});
