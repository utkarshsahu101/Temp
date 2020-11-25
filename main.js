let form = document.getElementById('form');
let celsiusValue = document.getElementById('celsiusValue');
let fahrenheitValue = document.getElementById('fahrenheitValue');
let temp = document.getElementById('temp');
let btn = document.getElementById('btn');

function checkCelsius() {
    if(isNaN(celsiusValue.value)) {
        celsiusValue.value = '';
    } else {
        fahrenheitValue.value = (9*celsiusValue.value/5)+32;
    }
}

function checkFahrenheit() {
    if(isNaN(fahrenheitValue.value)) {
        // fahrenheitValue.value = '';
    } else {
        celsiusValue.value = 5*(fahrenheitValue.value-32)/9;
    }
}

// function myfunction(e) {
//     console.log(e);
//     e.preventDefault();
//     let value = inputValue.value;
    
//     let unit = temp.value;
//     let answer = (unit == 'fahrenheit') ? (5*(value-32)/9) : ((9*value/5)+32);
//     console.log('check');
//     inputValue.value = answer;
// }
