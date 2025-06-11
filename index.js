let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== '' && !/[+\-*/]$/.test(currentInput)) {
    currentInput += operator;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (e) {
    display.innerText = 'Error';
    currentInput = '';
  }
}
