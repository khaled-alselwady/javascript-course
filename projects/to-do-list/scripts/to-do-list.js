const toDoList = [];

function generateHTMLParagraphs() {
  let htmlParagraphs = '';

  for (let i = 0; i < toDoList.length; i++) {
    htmlParagraphs += `<p>${toDoList[i]}</p>`
  }

  return htmlParagraphs;
}

function renderToDoList() {
  const containerElement = document.querySelector('.js-to-do-list-container');

  if (!containerElement) {
    return;
  }

  containerElement.innerHTML = generateHTMLParagraphs();
}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');

  if (!inputElement) {
    return;
  }

  const name = inputElement.value;
  toDoList.push(name);
  inputElement.value = '';

  renderToDoList();
}

function handleKeyDownInput(event) {
  if (event && event.key == 'Enter') {
    addToDo();
  }
}