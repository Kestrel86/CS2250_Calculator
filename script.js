const calculator = {
  num1: null,
  num2: null,
  operator: null,
};

//can use stack, lifo

const keys = document.querySelector(".keys");
const display = document.querySelector(".screen");

function handleInput(val) {
  display.value += val;
}
//Think of different way to do this, maybe use eventListener

function handleOperator(operand) {
  calculator.operator = operand;
  display.value += operand;
}

function compute() {
  calculate(calculator.operator);
}

function clearAll() {
  display.value = "";
}

function calculate(operator) {
  var numArr = 0;
  var ans = 0;
  switch (operator) {
    case "+":
      numArr = display.split("+");
      ans = Number(numArr[0]) + Number(numArr[1]);
      break;
    case "-":
      numArr = display.split("-");
      ans = Number(numArr[0]) - Number(numArr[1]);
      break;
    case "*":
      numArr = display.split("*");
      ans = Number(numArr[0]) * Number(numArr[1]);
      break;
    case "/":
      numArr = display.split("/");
      ans = Number(numArr[0]) - Number(numArr[1]);
      break;
    default:
      val = "Error!!!";
  }
  return val;
}

/*
May Change format, found breakthrough with switch statement, revert to old javascript calculator
*/

/*
ex: 
const equation = "3+5-6*5";

equation.split("+");
*/
