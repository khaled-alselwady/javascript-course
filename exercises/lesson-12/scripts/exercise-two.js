function changeTextOfButtonWithDelay() {
  const buttonElement = document.querySelector('.js-start-button');

  if (!buttonElement) {
    return;
  }

  const name = buttonElement.innerText;

  if (name === 'Start') {
    buttonElement.innerHTML = 'Loading...'
    setTimeout(() => {
      buttonElement.innerHTML = 'Finished!';
    }, 1000);
  }
  else {
    buttonElement.innerHTML = 'Start';
  }
}

document.querySelector('.js-start-button')
  ?.addEventListener('click', changeTextOfButtonWithDelay);