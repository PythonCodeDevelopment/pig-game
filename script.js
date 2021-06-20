'use strict';

//selecting elements //El:element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

//glabal variable declaration
let scores, currentScore, activePlayer, playing;

//start function
const init = function () {
  //starting conditions
  scores = [0, 0]; //player0,player1
  currentScore = 0;
  activePlayer = 0; //player 0 is active player when we start game
  playing = true;
  diceEl.classList.add('hidden'); // before this add hidden class in style.css
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active'); //making player0 as active player
  player1El.classList.remove('player--active');
};

init();

//switch player function
const switchPlayer = function () {
  //before switch player zeroed out current player score
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switch to next player

  activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice functionality

rollDice.addEventListener('click', function () {
  if (playing) {
    //1.generating random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    //2.remove hidden class so we can see image of dice roll
    diceEl.classList.remove('hidden');
    //3.display dice
    diceEl.src = `dice-${diceRoll}.png`;

    //4. check for rolled 1:if true,switch to next player
    if (diceRoll !== 1) {
      //add dice to current score
      currentScore += diceRoll;
      //currentScore0El.textContent = currentScore; //change later this will always select player0
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //dynamically assign current score to current player
    } else {
      switchPlayer();
    }
  }
});

//hold button functionality

hold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to active  player's score

    scores[activePlayer] += currentScore;
    //display
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check score is >= 100 then finish game
    if (scores[activePlayer] >= 100) {
      //finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
    //if not switch player
    else {
      switchPlayer();
    }
  }
});

//new game logic

newGame.addEventListener('click', init);
