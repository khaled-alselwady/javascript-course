let TimeoutID = null;

function displaySaveMessage() {
  const messageElement = document.querySelector('.js-message');

  if (!messageElement) {
    return;
  }

  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(TimeoutID);

  TimeoutID = setTimeout(() => {
    messageElement.innerHTML = '';
  }, 2000)
}

document.querySelector('.js-add-to-cart-button')
  ?.addEventListener('click', displaySaveMessage);