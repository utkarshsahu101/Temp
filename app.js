let form = document.getElementById('form');
let inputValue = document.getElementById('inputValue');
let temp = document.getElementById('temp');
let btn = document.getElementById('btn');

function check() {
    if(isNaN(inputValue.value)) {
        inputValue.value = '';
    }
    
}

function myfunction(e) {
    console.log(e);
    e.preventDefault();
    let value = inputValue.value;
    
    let unit = temp.value;
    let answer = (unit == 'fahrenheit') ? (5*(value-32)/9) : ((9*value/5)+32);
    console.log('check');
    inputValue.value = answer;
}
