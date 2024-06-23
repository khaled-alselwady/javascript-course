function changeTitle() {
  setInterval(() => {
    if (document.title === 'App') {
      document.title = '(2) New messages';
    }
    else {
      document.title = 'App';
    }
  }, 1000);
};

changeTitle();