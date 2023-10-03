const calculator = {
  operator: null,
};

const keys = document.querySelector(".keys");
const display = document.querySelector(".screen");

keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
  }

  if (target.classList.contains("num")) {
    handleInput(target.value);
  }

  if (target.classList.contains("clear")) {
    clearAll();
  }

  if (target.classList.contains("equal-sign")) {
    compute();
  }
});

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
      alert(`Error ${string} contains an invalid operation.`);
      return;
  }
}
