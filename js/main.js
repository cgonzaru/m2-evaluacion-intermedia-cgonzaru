'use strict';

// Elementos del HTML
const button = document.querySelector('.btn');
const check = document.querySelector('.check__input');
let solutionText = document.querySelector('.solution__text');
const counter = document.querySelector('.counter');

// Función
function guess () {
    console.log('ok');
    
    const write = check.value;
    
    console.log('el valor del campo es:', write);
    
    // si el número introducido es mayor que el random (suponemos 10)
    if (write > 10) { 
        solutionText.innerHTML = `Demasiado alto`;
        console.log('Demasiado alto');
    } else if (write < 10) {
        solutionText.innerHTML = `Demasiado bajo`;
        console.log('Demasiado bajo');
    } else {
        solutionText.innerHTML = `¡Has ganado campeona!`;
    }
}

// Eventos
button.addEventListener('click', guess);