const score = getInitializedScore();

showScoreElement();

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

function getComputerMove() {
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

function showScore() {
  return `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function printResultInPopup(myMove, computerMove, result) {
  alert(`You picked ${myMove}, Computer picked ${computerMove}. ${result}
${showScore()}`);
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
  const computerMove = getComputerMove();
  const result = getResult(myMove, computerMove);
  updateScore(result);
  showScoreElement();
  showResultElement(result);
  showMovesElement(myMove, computerMove);
}