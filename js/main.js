'use strict';

// Elementos del HTML
const button = document.querySelector('.btn');
const check = document.querySelector('.check__input');
let solutionText = document.querySelector('.solution__text');
let counter = document.querySelector('.counter');
let count = 0;



// Función
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

function guess () {
    const write = check.value;

    // si el número introducido es mayor que el random (suponemos 10)
    if (write > myRandomNumber) { 
        solutionText.innerHTML = `Demasiado alto`;
    } else if (write < myRandomNumber) {
        solutionText.innerHTML = `Demasiado bajo`;
    } else {
        solutionText.innerHTML = `¡Has ganado campeona!`;
    }
  
    count = count + 1;
    counter.innerHTML = count;

}

// Eventos
button.addEventListener('click', guess);