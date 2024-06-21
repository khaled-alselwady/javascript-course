function toggleStatusOfButton(className) {
  const buttonElement = document.querySelector(`.${className}`);

  if (!buttonElement) {
    return;
  }

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  }
  else {
    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();
    buttonElement.classList.add('is-toggled');
  }

}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');

  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}