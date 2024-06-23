const toDoList = getToDoListFromLocalStorage();

// To show to do lists that stored in Local Storage.
renderToDoList();

function removeElementInToDoListFromLocalStorage(indexToDelete) {
  const storedToDoList = localStorage.getItem('to-do-list');

  if (!storedToDoList) {
    return;
  }

  const array = JSON.parse(storedToDoList);

  if (!array || indexToDelete >= array.length) {
    return;
  }

  array.splice(indexToDelete, 1);
  localStorage.setItem('to-do-list', JSON.stringify(array));
}

function getToDoListFromLocalStorage() {
  const storedToDoList = localStorage.getItem('to-do-list');
  let toDoList = null;

  toDoList = storedToDoList ? JSON.parse(storedToDoList) : null;

  toDoList = toDoList || [{ name: '', dueDate: null }];

  return toDoList;
}

function saveToDoListIntoLocalStorage() {
  localStorage.setItem('to-do-list', JSON.stringify(toDoList));
}

function removeItemFromArray(index) {
  return toDoList.splice(index, 1);
}

function generateHTML() {
  let html = '';

  toDoList.forEach(function (toDoListObject, index) {
    // const name = toDoListObject.name;
    // const dueDate = toDoListObject.dueDate;
    // if the property and the variable have the same name, we can use this syntax, this is called [Destructuring].
    const { name, dueDate } = toDoListObject;

    if (!name || !dueDate) {
      return;
    }

    html += `
    <div>${name}</div>

    <div>${dueDate}</div>

    <button onclick="
      removeItemFromArray(${index});
      removeElementInToDoListFromLocalStorage(${index});
      renderToDoList();
    " class="delete-button"> Delete 
    </button>`
  });

  return html;
}

function renderToDoList() {
  const containerElement = document.querySelector('.js-to-do-list-container');

  if (!containerElement) {
    return;
  }

  containerElement.innerHTML = generateHTML();
}

function addToDo() {
  const inputNameElement = document.querySelector('.js-name-input');
  const inputDueDateElement = document.querySelector('.js-due-date-input');

  if (!inputNameElement || !inputDueDateElement) {
    return;
  }

  const name = inputNameElement.value;
  const dueDate = inputDueDateElement.value;

  if (!name) {
    alert('You should enter the name!');
    return;
  }

  if (!dueDate) {
    alert('You should enter the due date!');
    return;
  }

  toDoList.push({
    // name: name,
    // dueDate: dueDate
    // if the property and the variable have the same name, we can just use one of them, this is called [Shorthand Property].
    name,
    dueDate
  });

  inputNameElement.value = '';
  inputDueDateElement.value = '';

  renderToDoList();
  saveToDoListIntoLocalStorage();
}

function handleKeyDownInput(event) {
  if (event && event.key == 'Enter') {
    addToDo();
  }
}