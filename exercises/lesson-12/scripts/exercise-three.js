function displaySaveMessage() {
  const messageElement = document.querySelector('.js-message');

  if (!messageElement) {
    return;
  }

  messageElement.innerHTML = 'Added';

  setTimeout(function () {
    messageElement.innerHTML = '';
  }, 2000)
}