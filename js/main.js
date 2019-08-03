'use strict';

// Elementos del HTML
const button = document.querySelector('.btn');
const checkNumber = document.querySelector('.check__input-number');
let solutionText = document.querySelector('.solution__text');
let counter = document.querySelector('.counter');
let count = 0;

// Funciones 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);

function guess () {
    const write = parseInt(checkNumber.value);

    if (write > myRandomNumber) { 
        solutionText.innerHTML = `El número introducido es más alto que el que buscamos`;
    } else if (write < myRandomNumber) {
        solutionText.innerHTML = `El número introducido es más bajo que el que buscamos`;
    } else {
        solutionText.innerHTML = `¡Has ganado campeona!`;
    }
  
    count = count + 1;
    counter.innerHTML = count;
}

// Eventos
button.addEventListener('click', guess);