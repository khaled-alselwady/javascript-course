function subscribe() {
  const subscribeButtonElement = document.querySelector('.js-subscribe-button');

  // innerHTML => take all the text including the white spaces in the beginning and ending.
  // innerText => take only the text without the white spaces.
  if (subscribeButtonElement.innerText === 'Subscribe') {
    subscribeButtonElement.innerHTML = 'Subscriber';
    subscribeButtonElement.classList.add('is-subscribed');
  }
  else {
    subscribeButtonElement.innerHTML = 'Subscribe';
    subscribeButtonElement.classList.remove('is-subscribed');
  }
}