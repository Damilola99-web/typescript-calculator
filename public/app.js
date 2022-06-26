"use strict";
const allButtons = document.querySelectorAll('.shown');
const clearBtn = document.querySelector('.clear');
const evaluateBtn = document.querySelector('.evaluate');
let display = document.querySelector('.screen');
// displaying values on screen
let screenValue = '';
let valueTyped = '';
allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        valueTyped += button.innerText;
        screenValue = valueTyped;
        display.innerText = screenValue;
    });
});
// clearing screen
clearBtn.addEventListener('click', () => {
    screenValue = '';
    display.innerText = screenValue;
    valueTyped = '';
});
// calculating 
evaluateBtn.addEventListener('click', () => {
    // check sothat users do not enter invalid expression 
    if (!screenValue || screenValue.endsWith('*') || screenValue.endsWith('+') || screenValue.endsWith('/') || screenValue.endsWith('-')) {
        screenValue = 'SYNTAX ERROR';
        display.innerText = screenValue;
        valueTyped = '';
    }
    else {
        const result = eval(screenValue);
        screenValue = result;
        display.innerText = screenValue;
        valueTyped = '';
    }
});
