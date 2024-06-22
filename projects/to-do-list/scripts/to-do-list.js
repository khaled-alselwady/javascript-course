const toDoList = getToDoListFromLocalStorage();

// To show to do lists that stored in Local Storage.
renderToDoList();

function getToDoListFromLocalStorage() {
  const storedToDoList = localStorage.getItem('to-do-list');
  let toDoList = null;

  toDoList = storedToDoList ? JSON.parse(storedToDoList) : null;

  toDoList = toDoList || [];

  return toDoList;
}

function saveToDoListIntoLocalStorage() {
  localStorage.setItem('to-do-list', JSON.stringify(toDoList));
}

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
  saveToDoListIntoLocalStorage();
}

function handleKeyDownInput(event) {
  if (event && event.key == 'Enter') {
    addToDo();
  }
}