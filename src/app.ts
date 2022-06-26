const allButtons = document.querySelectorAll('.shown')! as NodeListOf<HTMLButtonElement>;
const clearBtn = document.querySelector('.clear')! as HTMLButtonElement;
const evaluateBtn = document.querySelector('.evaluate')! as HTMLButtonElement;
let display = document.querySelector('.screen')! as HTMLDivElement;

// displaying values on screen
let screenValue: string = '';
let valueTyped: string = ''
allButtons.forEach((button) => {
	button.addEventListener('click', () => {
        valueTyped += button.innerText;
        screenValue = valueTyped
		display.innerText = screenValue;
	});
});

// clearing screen
clearBtn.addEventListener('click', ()=>{
    screenValue = ''
    display.innerText = screenValue;
    valueTyped = ''
})

// calculating 
evaluateBtn.addEventListener('click', ()=> {
    // check sothat users do not enter invalid expression 
    if (!screenValue || screenValue.endsWith('*') || screenValue.endsWith('+') || screenValue.endsWith('/') || screenValue.endsWith('-')) {
        screenValue = 'SYNTAX ERROR'
        display.innerText = screenValue;
        valueTyped = ''
    } else {
        const result = eval(screenValue)
        screenValue = result
        display.innerText = screenValue;
        valueTyped = ''
    }
    
})

