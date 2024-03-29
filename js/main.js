'use strict';

// Elementos del HTML
const button = document.querySelector('.btn');
const buttonReset = document.querySelector('.btn-reset');
let checkNumber = document.querySelector('.check__input-number');
let solutionText = document.querySelector('.solution__text');

let counter = document.querySelector('.counter');
let count = 0;

// Funciones 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let myRandomNumber = getRandomNumber(100);

function enterKey () {
    if (event.keyCode === 13) {
        guess();
    }
}

function guess () {
    const str = checkNumber.value;
    const number = parseInt(str);

    if (str === '') {
        solutionText.innerHTML = `El campo tiene que ser un número entre 0 y 100`;
    }else if (number < 0 || number >100){
        solutionText.innerHTML = `El número introducido tiene que ser mayor que 0 y menor que 100`;
    }else if (number > myRandomNumber) { 
        solutionText.innerHTML = `El número introducido es más alto que el que buscamos`;
        count = count + 1;
    } else if (number < myRandomNumber) {
        solutionText.innerHTML = `El número introducido es más bajo que el que buscamos`;
        count = count + 1;
    } else {
        solutionText.innerHTML = `¡Has ganado!`;
    }
     
    counter.innerHTML = count;
}

function reset () {
    count = 0;
    counter.innerHTML = count;

    solutionText.innerHTML = `Escribe un número y dale a prueba`;

    checkNumber.value = '';

    myRandomNumber = getRandomNumber(100);
}

// Eventos
button.addEventListener('click', guess);
buttonReset.addEventListener('click', reset);
checkNumber.addEventListener('keyup', enterKey);