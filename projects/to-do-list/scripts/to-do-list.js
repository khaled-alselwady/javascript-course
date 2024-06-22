const toDoList = [];

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');

  if (!inputElement) {
    return;
  }

  const name = inputElement.value;
  toDoList.push(name);

  console.log(toDoList);

  inputElement.value = '';
}