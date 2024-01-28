/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(add1, add2);
}

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2){
    return number1 - number2;
}

let SubtractNumbers = function (){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => {return number1 * number2};

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
let getTotal = ()=>{
    let numeric = Number(document.querySelector("#subtotal").value);
    let clubMember = document.querySelector("#member").checked;
    if (clubMember){
        numeric -= numeric*0.2;
    }
    document.querySelector("#total").textContent = `$${numeric.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter((number)=> number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter((number)=> number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, currentNumber)=> sum + currentNumber);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map((currentNumber)=> currentNumber * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map((currentNumber)=> currentNumber * 2).reduce((sum, currentNumber)=> sum + currentNumber);