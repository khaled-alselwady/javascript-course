let calculation = localStorage.getItem('calculation') || '';

displayCalculation(calculation);

function displayCalculation(calculation) {
  document.querySelector('.js-result').innerHTML = calculation;
}

function updateCalculation(value) {
  calculation += value;
  displayCalculation(calculation);
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function calculateResult() {
  // Note: eval() takes a string and runs it as code.
  // Avoid using eval() in real world projects since
  // it can potentially be given harmful code to run.
  // Only use eval() for learning purposes.
  calculation = eval(calculation);

  saveCalculation();
  displayCalculation(calculation);
}

function clearCalculation() {
  calculation = '';
  localStorage.removeItem('calculation');
  displayCalculation(calculation);
}
