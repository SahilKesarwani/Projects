let input;
let inputValue = '';
let result;
let buttons;
let buttonInput;
let memory = 0;
let sideButtons;
let mainButtons;
let digit = '';
let ind;
let subResult;

let mainScreen = document.getElementById('main-screen');
let sideScreen = document.getElementById('side-screen');

input = document.getElementById('input');
result = document.getElementById('result');

let sin = document.getElementById('sin');
let cos = document.getElementById('cos');
let tan = document.getElementById('tan');

function getIndexOfSubStr(str, subStr, preIndex, output) {
    let temp = str.match(subStr);
    if(temp) {
        output.push(temp.index + preIndex);
        preIndex += temp.index + subStr.length;
        str = str.substring(temp.index + subStr.length);
        getIndexOfSubStr(str, subStr, preIndex, output);
    }
    return output;
}

function evalpi() {
    let indeces = getIndexOfSubStr(result.innerHTML, '\u03C0', 0, []);
    indeces.forEach((item, index, arr) => {
        if((result.innerHTML[item + index - 1] >= 1) || (result.innerHTML[item + index - 1] <= 9)) {
            result.innerHTML = result.innerHTML.slice(0, item + index) + '*' + result.innerHTML.slice(item + index);
        }
    });
    indeces = getIndexOfSubStr(result.innerHTML, '\u03C0', 0, []);
    indeces.forEach((item, index, arr) => {
        if((result.innerHTML[item + index + 1] >= 1) || (result.innerHTML[item + index + 1] <= 9)) {
            result.innerHTML = result.innerHTML.slice(0, item + index + 1) + '*' + result.innerHTML.slice(item + index + 1);
        }
    });
    let str = result.innerHTML;
    str = str.replaceAll('\u03C0', Math.PI + '');
    result.innerHTML = str;
    result.innerHTML = eval(result.innerHTML) + '';
}

buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', function(event) {
        buttonInput = event.target.innerHTML;
        input.innerHTML = '';
        document.getElementById('memory').innerHTML = '';
        console.log(buttonInput);

        if(result.innerHTML == "Error") {
            result.innerHTML = '';
        }
        
        switch(buttonInput) {

            case 'C':
                inputValue = '';
                input.innerHTML = '';
                result.innerHTML = '';
            break;

            case 'x':
                inputValue += '*';
                result.innerHTML += '*';
            break;
                
            case '=':
                if(inputValue != '') {
                    inputValue = eval(inputValue) + '';
                    if(result.innerHTML != inputValue) {
                        input.innerHTML = result.innerHTML + "=";
                        if(result.innerHTML.includes('\u03C0')) {
                            evalpi();
                        }
                        else {
                            result.innerHTML = eval(result.innerHTML) + '';
                        }
                        inputValue = result.innerHTML;
                    }
                }
            break;

            case '\u232B':
                inputValue = inputValue.substring(0, inputValue.length - 1);
                result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
            break;

            case 'mc':
                memory = 0;
            break;

            case 'm+':
                memory += Number(eval(inputValue));
                document.getElementById('memory').innerHTML = 'm+';
            break;

            case 'm-':
                memory -= Number(eval(inputValue));
                document.getElementById('memory').innerHTML = 'm-';
            break;

            case 'mr':
                result.innerHTML = memory;
                document.getElementById('memory').innerHTML = 'mr';
            break;

            case '%':
                inputValue += '/(100)';
                result.innerHTML += '/(100)';
            break;

            case '1/x':
                input.innerHTML = '1/(' + result.innerHTML + ')=';
                result.innerHTML = eval(1/eval(result.innerHTML));
                inputValue = result.innerHTML;
            break;

            case 'x\u00B2':
                input.innerHTML = result.innerHTML + '^(2)=';
                result.innerHTML = Math.pow(eval(result.innerHTML), 2);
                inputValue = result.innerHTML;
            break;

            case 'x\u00B3':
                input.innerHTML = result.innerHTML + '^(3)=';
                result.innerHTML = Math.pow(eval(result.innerHTML), 3);
                inputValue = result.innerHTML;
            break;

            case 'x\u2074':
                input.innerHTML = result.innerHTML + '^(4)=';
                result.innerHTML = Math.pow(eval(result.innerHTML), 4);
                inputValue = result.innerHTML;
            break;

            case 'x!':
                input.innerHTML = result.innerHTML + '!=';
                let calc = eval(result.innerHTML);
                let fact = 1;
                if(calc == 0 || calc == 1) {
                    fact = 1;
                }else {
                    for (let i = 1; i <= calc; i++) {
                        fact = fact * i;
                    }
                }
                result.innerHTML = fact;
                inputValue = result.innerHTML;
            break;

            case '\u221A':
                input.innerHTML = '&#8730;(' + result.innerHTML + ')=';
                result.innerHTML = Math.sqrt(eval(result.innerHTML));
                inputValue = result.innerHTML;
            break;

            case '\u221Bx':
                input.innerHTML = '&#8731;(' + result.innerHTML + ')=';
                result.innerHTML = Math.cbrt(eval(result.innerHTML));
                inputValue = result.innerHTML;
            break;

            case 'e':
                input.innerHTML = result.innerHTML + 'e=';
                if(result.innerHTML == '') {
                    result.innerHTML = Math.E;
                }else {
                    result.innerHTML = (Math.E) * (eval(result.innerHTML));
                }
                inputValue = result.innerHTML;
            break;

            case 'ln':
                input.innerHTML = 'ln(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.log(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }                
            break;

            case 'log':
                input.innerHTML = 'log(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.log10(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }                
            break;

            case 'sin':
                input.innerHTML = 'sin(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.sin(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'cos':
                input.innerHTML = 'cos(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.cos(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'tan':
                input.innerHTML = 'tan(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.tan(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }         
            break;

            case 'Inv':
                if((sin.innerHTML === 'sin') || (cos.innerHTML === 'cos') || (tan.innerHTML === 'tan')) {
                    sin.innerHTML = 'sin&#8315;&#185;';
                    cos.innerHTML = 'cos&#8315;&#185;';
                    tan.innerHTML = 'tan&#8315;&#185;';
                }else if((sin.innerHTML === 'sin\u207B\u00B9') || (cos.innerHTML === 'cos\u207B\u00B9') || (tan.innerHTML === 'tan\u207B\u00B9')) {
                    sin.innerHTML = 'sin';
                    cos.innerHTML = 'cos';
                    tan.innerHTML = 'tan';
                }else if((sin.innerHTML === 'sinh') || (cos.innerHTML === 'cosh') || (tan.innerHTML === 'tanh')) {
                    sin.innerHTML = 'sinh&#8315;&#185;';
                    cos.innerHTML = 'cosh&#8315;&#185;';
                    tan.innerHTML = 'tanh&#8315;&#185;';
                }else if((sin.innerHTML === 'sinh\u207B\u00B9') || (cos.innerHTML === 'cosh\u207B\u00B9') || (tan.innerHTML === 'tanh\u207B\u00B9')) {
                    sin.innerHTML = 'sinh';
                    cos.innerHTML = 'cosh';
                    tan.innerHTML = 'tanh';
                }
            break;

            case 'hyp':
                if((sin.innerHTML == 'sin') || (cos.innerHTML == 'cos') || (tan.innerHTML == 'tan')) {
                    sin.innerHTML = 'sinh';
                    cos.innerHTML = 'cosh';
                    tan.innerHTML = 'tanh';
                }else if((sin.innerHTML == 'sinh') || (cos.innerHTML == 'cosh') || (tan.innerHTML == 'tanh')) {
                    sin.innerHTML = 'sin';
                    cos.innerHTML = 'cos';
                    tan.innerHTML = 'tan';
                }else if((sin.innerHTML == 'sin\u207B\u00B9') || (cos.innerHTML == 'cos\u207B\u00B9') || (tan.innerHTML == 'tan\u207B\u00B9')) {
                    sin.innerHTML = 'sinh&#8315;&#185;';
                    cos.innerHTML = 'cosh&#8315;&#185;';
                    tan.innerHTML = 'tanh&#8315;&#185;';
                }else if((sin.innerHTML == 'sinh\u207B\u00B9') || (cos.innerHTML == 'cosh\u207B\u00B9') || (tan.innerHTML == '\u207B\u00B9')) {
                    sin.innerHTML = 'sin&#8315;&#185;';
                    cos.innerHTML = 'cos&#8315;&#185;';
                    tan.innerHTML = 'tan&#8315;&#185;';
                }
            break;

            case '\u03C0':
                result.innerHTML += '&#960;';
                inputValue += Math.PI;
            break;

            case 'sin\u207B\u00B9':
                input.innerHTML = 'sin&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.asin(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'cos\u207B\u00B9':
                input.innerHTML = 'cos&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.acos(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'tan\u207B\u00B9':
                input.innerHTML = 'tan&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.atan(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'sinh':
                input.innerHTML = 'sinh(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.sinh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'cosh':
                input.innerHTML = 'cosh(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.cosh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'tanh':
                input.innerHTML = 'tanh(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.tanh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }         
            break;

            case 'sinh\u207B\u00B9':
                input.innerHTML = 'sinh&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.asinh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'cosh\u207B\u00B9':
                input.innerHTML = 'cosh&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.acosh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;

            case 'tanh\u207B\u00B9':
                input.innerHTML = 'tanh&#8315;&#185;(' + result.innerHTML + ')=';
                if(result.innerHTML == '') {
                    alert("Enter some number first.");
                }else {
                    if(result.innerHTML.includes('\u03C0')) {
                        evalpi();
                    }
                    result.innerHTML = Math.atanh(eval(result.innerHTML));
                    inputValue = result.innerHTML;
                }
            break;
            
            default :
            inputValue += buttonInput;
            result.innerHTML += buttonInput;
        }

        if(result.innerHTML == "NaN") {
            result.innerHTML = "Error";
        }
    });
}

mainScreen.addEventListener('click', function() {
    mainScreen.style.color = "blue";
    sideScreen.style.color = "black";
    mainScreen.style.backgroundColor = "#d9d9d9c4";
    sideScreen.style.backgroundColor = "#ffffff";
    sideButtons = document.getElementsByClassName('side-buttons');
    for (item of sideButtons) {
        item.style.display = "none";
    }
    mainButtons = document.getElementsByClassName('main-buttons');
    for (item of mainButtons) {
        item.style.display = "table-cell";
    }
});

sideScreen.addEventListener('click', function() {
    mainScreen.style.color = "black";
    sideScreen.style.color = "blue";
    mainScreen.style.backgroundColor = "#ffffff";
    sideScreen.style.backgroundColor = "#d9d9d9c4";
    sideButtons = document.getElementsByClassName('side-buttons');
    for (item of sideButtons) {
        item.style.display = "table-cell";
    }
    mainButtons = document.getElementsByClassName('main-buttons');
    for (item of mainButtons) {
        item.style.display = "none";
    }
});