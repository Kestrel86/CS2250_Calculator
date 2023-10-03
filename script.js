const calculator = {
  num1: null,
  num2: null,
  operator: null,
};

const keys = document.querySelector(".keys");
const display = document.querySelector(".screen");

function handleOperator(operand) {
  calculator.operator = operand;
  display.value += "";
}

function compute() {
  calculate(calculator.operator);
}

function clearAll() {
  display.value = "";
}

function calculate(operator) {
  switch (operator) {
    case "+":
      var numArr = display.split("+");
      var ans = Number(numArr[0]) + Number(numArr[1]);
      break;
    case "-":
      val = num1 - num2;
      break;
    case "*":
      val = num1 * num2;
      break;
    case "/":
      val = num1 / num2;
      break;
    default:
      val = "Error!!!";
  }
  return val;
}

/*
May Change format, found breakthrough with switch statement, revert to old javascript calculator
*/
