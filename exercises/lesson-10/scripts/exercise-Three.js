function toggleStatusOfButton() {
  const buttonElement = document.querySelector('.js-gaming-button');

  if (!buttonElement) {
    return;
  }

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  }
  else {
    buttonElement.classList.add('is-toggled');
  }
}