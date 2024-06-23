function changeTextOfButtonWithDelay() {
  const buttonElement = document.querySelector('.js-start-button');

  if (!buttonElement) {
    return;
  }

  const name = buttonElement.innerText;

  if (name === 'Start') {
    setTimeout(function () {
      buttonElement.innerHTML = 'Finished!';
    }, 1000);
  }
  else {
    buttonElement.innerHTML = 'Start';
  }
}