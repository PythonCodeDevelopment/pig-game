'use strict';
const score = 0;
//storing in variables
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
console.log(document.querySelector('img'));

//console.log(rollDice);
// click event:roll dice ,hold,new game
//if roll dice display picture of dice
const secretNumber = Math.trunc(Math.random() * 6) + 1;
console.log(secretNumber);
//if hold add roll dice value into current player score

//display :player 1 score,player 2 score,dice picture,player1 and 2 current score

//background color change when player turn comes

//winner background stops and not click event occurs other than new game refresh button
