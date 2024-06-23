let messages = 2;

function changeTitle() {
  setInterval(() => {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    }
    else {
      document.title = 'App';
    }
  }, 1000);
};

function addMessage() {
  messages++;
}

function removeMessage() {
  messages--;
}

changeTitle();