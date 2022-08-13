'use strict';
// Selecting DOM elements
const body = document.querySelector('body');
const messageDOM = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const guessDOM = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
const scoreDOM = document.querySelector('.score');
const numberDOM = document.querySelector('.number');
const highScoreDOM = document.querySelector('.highscore');

// Generating a number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = message => (messageDOM.textContent = message);

const checkHandler = () => {
  const predictedNum = Number(guessDOM.value);

  // When there is no input
  if (!predictedNum) displayMessage('⛔️No number! ');

  // When player wins
  if (predictedNum === secretNumber) {
    displayMessage('🎉 Correct number!');
    numberDOM.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberDOM.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreDOM.textContent = score;
    }
  }

  // When guess is wrong
  if (predictedNum !== secretNumber) {
    if (score > 1) {
      displayMessage(
        predictedNum > secretNumber ? 'Too high! 🔺' : 'Too low! 🔻'
      );
      score--;
      scoreDOM.textContent = score;
    } else {
      displayMessage('You lost the game :(');
      scoreDOM.textContent = 0;
    }
  }
};

checkBtn.addEventListener('click', checkHandler);

body.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') checkHandler();
});

// Again button and initializing the game
const againHandler = () => {
  score = 20;
  scoreDOM.textContent = score;
  displayMessage('Start guessing . . .');
  body.style.backgroundColor = '#222';
  numberDOM.style.width = '15rem';
  numberDOM.textContent = '?';
  guessDOM.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

againBtn.addEventListener('click', againHandler);
