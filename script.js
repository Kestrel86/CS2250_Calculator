const calculator = {
  num1: null,
  num2: null,
  operator: null,
};

const keys = document.querySelector(".keys");
const display = document.querySelector(".screen");

function handleInput(val) {
  display.value += val;
}

function handleOperator(operand) {
  calculator.operator = operand;
  display.value += operand;
}

function compute() {
  display.value = calculate(display.value);
}

function clearAll() {
  display.value = "";
}

function calculate(string) {
  let numArr = string.split(/\b\s*([+\/*-])\s*/);
  const expression = numArr[1];
  switch (expression) {
    case "*":
      return parseInt(numArr[0]) * parseInt(numArr[2]);
      break;
    case "/":
      return parseInt(numArr[0]) / parseInt(numArr[2]);
      break;
    case "+":
      return parseInt(numArr[0]) + parseInt(numArr[2]);
      break;
    case "-":
      return parseInt(numArr[0]) - parseInt(numArr[2]);
      break;
    default:
      return `Error ${string} contains an invalid operation.`;
  }
}
