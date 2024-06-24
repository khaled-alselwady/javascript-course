let messages = 2;
let IntervalID = null;
let isDisplayingNotification = false;

displayNotification();

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  IntervalID = setInterval(() => {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    }
    else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotificatoin() {
  isDisplayingNotification = false;
  clearInterval(IntervalID);
  document.title = 'App';
}

function addMessage() {
  messages++;
  displayNotification();
}

function removeMessage() {
  if (messages > 0) {
    messages--;

    if (messages === 0) {
      stopNotificatoin();
    }
  }
}

document.querySelector('.js-add-message-button')
  ?.addEventListener('click', addMessage);

document.querySelector('.js-remove-message-button')
  ?.addEventListener('click', removeMessage);