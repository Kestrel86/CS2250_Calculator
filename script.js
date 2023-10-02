const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
const keys = document.querySelector(".keys");
const display = document.querySelector(".screen");

const updateDisplay = () => {
  display.value = calculator.displayValue;
};
updateDisplay();

keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  //   if (target.classList.contains("decimal")) {
  //     inputDecimal(target.value);
  //     updateDisplay();
  //     return;
  //   }

  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

// function inputDecimal(dot) {
//   if (calculator.waitingForSecondOperand === true) {
//     calculator.displayValue = "0.";
//     calculator.waitingForSecondOperand = false;
//     return;
//   }
//   if (!calculator.displayValue.includes(dot)) {
//     calculator.displayValue += dot;
//   }
// }

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(100))}`; //contemplated limit
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
  return num2;
}

function resetCalculator() {
  calculator.waitingForSecondOperand = false;
  calculator.firstOperand = null;
  calculator.displayValue = "0";
  calculator.operator = null;
}
