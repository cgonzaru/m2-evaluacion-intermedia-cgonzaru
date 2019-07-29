'use strict';

// Elementos del HTML
const button = document.querySelector('.btn');
const check = document.querySelector('.check__input');
const solution = document.querySelector('.solution__text');
const counter = document.querySelector('.counter');

// Función
function guess () {
    console.log('ok');
    
    const write = check.value;
    console.log('el valor del campo es:', write);
}

// Eventos
button.addEventListener('click', guess);