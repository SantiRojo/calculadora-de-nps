const frontContainer = document.querySelector('.front-container');
const backContainer = document.querySelector('.back-container');

/*Inputs de calificaciones*/
const inputPromotores = document.querySelector('#input-promotores');
const inputNeutros = document.querySelector('#input-neutros');
const inputDetractores = document.querySelector('#input-detractores');


const containerTituloDesempenio = document.querySelector('.container-titulo-card');
const tituloCard = document.querySelector('.titulo-card');
const containerPorcentaje = document.querySelector('.container-porcentaje');
const porcentaje = document.querySelector('.porcentaje');

const mensaje = document.querySelector('#mensaje');
const mensajeObjetivo = document.querySelector('#mensaje-objetivo');

const calcButton = document.querySelector('#calc-button');
const calcular = document.querySelector('#calcular');
const cerrar = document.querySelector('#cerrado');

const objetivo = 60;

let promotores;
let neutros;
let detractores;
let cumplimientoObjetivo;
let desempenio;
let promotoresASumar;
let resultadoMetrica;

const resultados = [
    {
        resultado: 'SOBRESALIENTE',
        estilos: 'sobresaliente',
        mensaje: '¡Excelente! 👏🏼',
        compararDesempenio: () => {
            return desempenio > 115;
        }
    },
    {
        resultado: 'ADECUADO',
        estilos: 'adecuado',
        mensaje: '¡A seguir así! 🙌🏼',
        compararDesempenio: () => {
            return desempenio >= 100 && desempenio <= 115;
        }
    },
    {
        resultado: 'A MEJORAR',
        estilos: 'a-mejorar',
        mensaje: 'Podés lograrlo 💪🏼',
        compararDesempenio: () => {
            return desempenio >= 70 && desempenio < 100;
        }
    },
    {
        resultado: 'INADECUADO',
        estilos: 'inadecuado',
        mensaje: '¡Manos a la obra!',
        compararDesempenio: () => {
            return desempenio < 70;
        }
    }
];


const calcularCumplimientoObjetivo = (prom,neu,det) => {
    let totalEncuestas = prom + neu + det;
    return Math.floor(((prom - det) / totalEncuestas) * 100);
}
const calcularDesempenio = () => {
    return Math.floor((cumplimientoObjetivo / objetivo) * 100);
}

const calcularPromotoresASumar = () => {
    let promotoresIniciales = promotores;
    let cumplimientoObjetivoInicial = cumplimientoObjetivo;
    let acumulacionDePromotores;

    for(let i = 0; !(cumplimientoObjetivoInicial >= objetivo) ; i++){
    
        cumplimientoObjetivoInicial = calcularCumplimientoObjetivo(promotoresIniciales, neutros, detractores);
        
        promotoresIniciales++;
        
        acumulacionDePromotores = i;
        
      }
      
      return acumulacionDePromotores; 
 
}

const filtrarResultadoMetrica = () => {
    return resultados.filter(result => result.compararDesempenio());
}

const animar = () => {
    frontContainer.classList.toggle('front-rotate');
    backContainer.classList.toggle('back-rotate');
    calcButton.classList.toggle('cerrar');
    calcular.classList.toggle('inactive');
    cerrar.classList.toggle('inactive');
}



inputPromotores.addEventListener('input', () => {
    promotores = parseInt(inputPromotores.value);
    /* isButtonOn() */
    console.log(promotores)
});

inputNeutros.addEventListener('input', () => {
    neutros = parseInt(inputNeutros.value); 
    /* isButtonOn() */
    console.log(neutros)
});

inputDetractores.addEventListener('input', () => {
    detractores = parseInt(inputDetractores.value);
    /* isButtonOn() */
    console.log(detractores)
});


calcButton.addEventListener('click', () => {

    cumplimientoObjetivo = calcularCumplimientoObjetivo(promotores,neutros,detractores);

    desempenio = calcularDesempenio();

    if(cumplimientoObjetivo < objetivo){
        promotoresASumar = calcularPromotoresASumar();

        mensajeObjetivo.innerText = `Sumá ${promotoresASumar} promotores para alcanzar el objetivo`;
    } else {
        mensajeObjetivo.innerText = 'Estás en objetivo';
    }

    resultadoMetrica = filtrarResultadoMetrica();

    

    containerTituloDesempenio.classList.toggle(resultadoMetrica[0].estilos);
    tituloCard.innerText = resultadoMetrica[0].resultado;
    containerPorcentaje.classList.toggle(resultadoMetrica[0].estilos);
    porcentaje.innerText = `${cumplimientoObjetivo}%`;
    mensaje.innerText = resultadoMetrica[0].mensaje;

    animar();
    
});
