const score = getInitializedScore();
let isAutoPlaying = false;
let intervalID = null;

showScoreElement();
initializeEventListeners();

function showScore() {
  return `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function showScoreElement() {
  document.querySelector('.js-score').innerHTML = showScore();
}

function removeAllClassesForResultStyling(resultElement) {
  resultElement.classList.remove('tie-result');
  resultElement.classList.remove('win-result');
  resultElement.classList.remove('lose-result');
}

function getNewClassNameForResultStyling(result) {
  switch (result) {
    case 'Tie.':
      {
        return 'tie-result';
      }

    case 'You win.':
      {
        return 'win-result';
      }

    case 'You lose.':
      {
        return 'lose-result';
      }
  }
}

function showResultElement(result) {
  const resultElement = document.querySelector('.js-result');

  resultElement.innerHTML = result;

  removeAllClassesForResultStyling(resultElement);

  resultElement.classList.add(getNewClassNameForResultStyling(result));
}

function showMovesElement(myMove, computerMove) {
  document.querySelector('.js-moves').innerHTML =
    `You
    <img class="move-icon" src="images/${myMove}-emoji.png">
    <img class="move-icon" src="images/${computerMove}-emoji.png">
    Computer`;
}

function getRandomMove() {
  // Math.random() => gets random numbers between 0 and 1. (>= 0 && < 1)
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function getResult(myMove, computerMove) {

  if (myMove === computerMove) {
    return 'Tie.';
  }

  if ((myMove === 'rock' && computerMove === 'scissors') ||
    (myMove === 'paper' && computerMove === 'rock') ||
    (myMove === 'scissors' && computerMove === 'paper')) {
    return 'You win.';
  }
  else {
    return 'You lose.';
  }
}

function updateScore(result) {
  switch (result) {
    case 'Tie.':
      {
        score.ties++;
        break;
      }

    case 'You win.':
      {
        score.wins++;
        break;
      }

    case 'You lose.':
      {
        score.loses++;
        break;
      }
  }

  // localStorage [only supports strings in the parameters]
  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;

  localStorage.removeItem('score');

  showScoreElement();
}

function getInitializedScore() {
  const storedScore = localStorage.getItem('score');
  let score = null;

  // score = storedScore !== '' ? JSON.parse(storedScore) : null;
  score = storedScore ? JSON.parse(storedScore) : null;

  score = score ?? {
    wins: 0,
    loses: 0,
    ties: 0
  };

  return score;
}

function playGame(myMove) {
  const computerMove = getRandomMove();
  const result = getResult(myMove, computerMove);
  updateScore(result);
  showScoreElement();
  showResultElement(result);
  showMovesElement(myMove, computerMove);
}

function changeNameOfAutoPlayButton() {
  const buttonElement = document.querySelector('.js-auto-play-button');

  if (!buttonElement) {
    return;
  }

  const name = buttonElement.innerText;

  if (name === 'Auto Play') {
    buttonElement.innerHTML = 'Stop Playing';
  }
  else {
    buttonElement.innerHTML = 'Auto Play';
  }
}

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const myRandomMove = getRandomMove();
      playGame(myRandomMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

function changeContentOfConfirmationMessageContainer(content) {
  const confirmationMessageContainerElement = document.querySelector('.js-confirmation-message');

  if (!confirmationMessageContainerElement) {
    return;
  }

  confirmationMessageContainerElement.innerHTML = content;
}

function generateConfirmationMessageHTML() {
  return `
    <p>Are you sure you want to reset the score?</p>
    <button class="js-yes-button yes-button">Yes</button>
    <button class="js-no-button no-button">No</button>
  `;
}

function hideConfirmationMessage() {
  changeContentOfConfirmationMessageContainer('');
}

function showConfirmationMessage() {
  changeContentOfConfirmationMessageContainer(generateConfirmationMessageHTML());

  document.querySelector('.js-yes-button')
    ?.addEventListener('click', () => {
      resetScore();
      hideConfirmationMessage();
    });

  document.querySelector('.js-no-button')
    ?.addEventListener('click', () => {
      hideConfirmationMessage();
    });
}

function handleKeydownEvent(event) {
  const keyPress = event.key.toLowerCase();
  switch (keyPress) {
    case 'r': {
      playGame('rock');
      break;
    }
    case 'p': {
      playGame('paper');
      break;
    }
    case 's': {
      playGame('scissors');
      break;
    }
    case 'a': {
      changeNameOfAutoPlayButton();
      autoPlay();
      break;
    }
    case 'backspace': {
      showConfirmationMessage();
      break;
    }
  }
}

function initializeEventListeners() {
  document.querySelector('.js-rock-button')
    ?.addEventListener('click', () => {
      playGame('rock');
    });

  document.querySelector('.js-paper-button')
    ?.addEventListener('click', () => {
      playGame('paper');
    });

  document.querySelector('.js-scissors-button')
    ?.addEventListener('click', () => {
      playGame('scissors');
    });

  document.querySelector('.js-reset-score-button')
    ?.addEventListener('click', showConfirmationMessage);

  document.querySelector('.js-auto-play-button')
    ?.addEventListener('click', () => {
      changeNameOfAutoPlayButton();
      autoPlay();
    });

  // we chose `body` because we want to apply that on the page level.
  document.body.addEventListener('keydown', (event) => {
    handleKeydownEvent(event);
  });
}