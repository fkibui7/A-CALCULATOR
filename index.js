const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue =  "";
let isFirstValue = false;
let secondValue = "";
let sign = "";
let resultValue = 0;

for(let i = 0; i< numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue=== false) {
            getFirstValue(atr)
        }
        if(isSecondValue == false){
            getSecondValue(atr);
        } 
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue +=el;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}

function getSecondValue(el) {
    if(firstValue != "" && sign != "") {
        secondValue+=el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {

}