'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

dice.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;

score1.textContent = 0;
score2.textContent = 0;

let totalScore1 = 0;
let totalScore2 = 0;

let currentScore = 0;

let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');

    const score = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${score}.png`;

    if (score !== 1) {
      currentScore += score;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
  /** 
  if (activePlayer === 0) {
    if (score !== 1) {
      totalScore1 += score;
      currentScore1.textContent = totalScore1;
    } else {
      scores[activePlayer] += totalScore1;
      score1.textContent = scores[activePlayer];
      activePlayer = 1;
      currentScore1.textContent = 0;
      totalScore1 = 0;
      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
    }
  } else if (activePlayer === 1) {
    if (score != 1) {
      totalScore2 += score;
      currentScore2.textContent = totalScore2;
    } else {
      scores[activePlayer] += totalScore2;
      score2.textContent = scores[activePlayer];
      activePlayer = 0;
      currentScore2.textContent = 0;
      totalScore2 = 0;
      player2.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
  */
});

holdDice.addEventListener('click', function () {
  if (playing) {
    console.log('hold');
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function () {
  scores[1] = 0;
  scores[2] = 0;
  currentScore = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.add('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--active');
  player2.classList.remove('player--winner');
});
