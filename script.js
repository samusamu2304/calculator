let operand1;
let operand2;
let operation;
let numberFlag = false;
const screen = document.querySelector("#screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");


const add = function (n1, n2) {
    return (parseFloat(n1) + parseFloat(n2)).toString();
}
const subtract = function (n1, n2) {
    return (parseFloat(n1) - parseFloat(n2)).toString();
}

const multiply = function (n1, n2) {
    return (parseFloat(n1) * parseFloat(n2)).toString();
}

const divide = function (n1, n2) {
    if (n2 === 0) {
        return "Syntax error";
    }else {
        return (parseFloat(n1) / parseFloat(n2)).toString();
    }
}

const operate = function (operand1, operand2, operation) {
    if (operand1 !== undefined && operand2 !== undefined) {
        switch (operation) {
            case "+":
                return add(operand1, operand2);
            case "-":
                return subtract(operand1, operand2);
            case "*":
                return multiply(operand1, operand2);
            case "/":
                return divide(operand1, operand2);
            default:
                return "";
        }
    }else {
        return "";
    }

}

const addNumber = function (event) {
    if (numberFlag) {screen.textContent = ""}
    numberFlag = false;
    screen.textContent += event.target.textContent;
}

const addOperator = function (event) {
    if (operand1 === undefined){
        operand1 = screen.textContent;
        numberFlag = true;
    } else if (operand2 === undefined && !numberFlag) {
        operand2 = screen.textContent;
        operand1 = operate(operand1, operand2, operation);
        operand2 = undefined;
        operation = undefined;
        screen.textContent = operand1;
        numberFlag = true;
    }
    operation = event.target.textContent;
}

const clearDisplay = function () {
    screen.textContent = "";
    operand1 = undefined;
    operand2 = undefined;
    operation = undefined;
}

const doOperation = function () {
    operand2 = screen.textContent;
    operand1 = operate(operand1, operand2, operation);
    operand2 = undefined;
    operation = undefined;
    if (!numberFlag) {
        screen.textContent = operand1;
        operand1 = undefined;
    }
    numberFlag = true;
}

numbers.forEach((number) => {
    number.addEventListener("click", addNumber);
})

operators.forEach((number) => {
    number.addEventListener("click", addOperator);
})

clear.addEventListener("click", clearDisplay);

equal.addEventListener("click", doOperation)