fillGridWithRandomNumber();
addEvents();
setRandomNumberForNumberToSearch();

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateHTML() {
  let html = '';

  for (let i = 1; i <= 36; i++) {
    const randomNumber = getRandomNumber();

    html += `
      <div class="random-number js-position-${i}">${randomNumber}</div>
    `
  }

  return html;
}

function fillGridWithRandomNumber() {
  const randomNumbersGridElement = document.querySelector('.js-random-numbers-grid');

  if (!randomNumbersGridElement) {
    return;
  }

  randomNumbersGridElement.innerHTML = generateHTML();
}

function getNumberForSearchElement() {
  return document.querySelector('.js-random-number-for-search');
}

function getInputAnswerElement() {
  return document.querySelector('.js-answer-input');
}

function getResultElement() {
  return document.querySelector('.js-result');
}

function contItemInArray(array, number) {
  if (!array) {
    return 0;
  }

  let counter = 0;
  array.forEach(randomNumberElement => {
    if (randomNumberElement.innerText == number) {
      counter++;
    }
  });

  return counter;
}

function getCorrectAnswer(array, number) {
  return contItemInArray(array, number);
}

function CheckAnswer() {
  const numberForSearch = getNumberForSearchElement()?.innerText;
  const inputAnswer = getInputAnswerElement()?.value;

  if (!numberForSearch || !inputAnswer) {
    return false;
  }

  const randomNumbersElements = document.querySelectorAll('.random-number');

  return getCorrectAnswer(randomNumbersElements, numberForSearch) === Number(inputAnswer);
}

function addEventToElement(classNameWithoutDot, functionToExecute, eventType) {
  document.querySelector(`.${classNameWithoutDot}`)
    ?.addEventListener(eventType, functionToExecute);
}

function getResult() {
  if (CheckAnswer()) {
    return 'Correct :)';
  }
  else {
    return 'Wrong :(';
  }
}

function removeAllClassesInResultElement(resultElement) {
  if (!resultElement) {
    return;
  }

  resultElement.classList.remove('js-correct-result');
  resultElement.classList.remove('js-wrong-result');
}

function addResultClassesToResultElement(resultElement) {
  if (!resultElement) {
    return;
  }

  if (resultElement.innerText === 'Correct :)') {
    resultElement.classList.add('js-correct-result');
  }
  else {
    resultElement.classList.add('js-wrong-result');
  }
}

function displayResult() {
  const resultElement = getResultElement();

  if (!resultElement) {
    return;
  }

  resultElement.innerHTML = getResult();

  removeAllClassesInResultElement(resultElement);

  addResultClassesToResultElement(resultElement);
}

function addClickEventToCheckButtonElement() {
  const resultElement = getResultElement();

  if (!resultElement) {
    return;
  }

  addEventToElement('js-check-button', displayResult, 'click');
}

function setRandomNumberForNumberToSearch() {
  const numberForSearchElement = getNumberForSearchElement();

  if (!numberForSearchElement) {
    return;
  }

  numberForSearchElement.innerHTML = getRandomNumber();
}

function reset() {
  const resultElement = getResultElement();
  const inputElement = getInputAnswerElement();

  if (resultElement) {
    resultElement.innerHTML = '';
  }

  if (inputElement) {
    inputElement.value = '';
  }
}

function addClickEventToSetButtonElement() {
  addEventToElement('js-set-button', () => {
    fillGridWithRandomNumber();
    setRandomNumberForNumberToSearch();
    reset();
  }, 'click');
}

function addKeydownEventToCheckButtonElement() {
  const resultElement = getResultElement();

  if (!resultElement) {
    return;
  }

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      displayResult();
    }
  });
}

function addEvents() {
  addClickEventToSetButtonElement();
  addClickEventToCheckButtonElement();
  addKeydownEventToCheckButtonElement();
}
