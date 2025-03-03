'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 03/03/2025
// 84. PROJECT #3: Pig Game
// 85. Rolling the Dice
// 86. Switching the Active Player
// 87. Holding Current Score
// 88. Resetting the Game
*/

// There are 2 ways to get an element by it's id:
// - A bit slower: querySelector
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0'); 
// - A bit faster: getElementById
const score1Element = document.getElementById('score--1'); 
const currentScore0Element = document.getElementById('current--0');
const currentScore1Element = document.getElementById('current--1');
// Getting the element by class:
const diceElement = document.querySelector('.dice');
// Botones:
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Global scope:
let scores, currentScore, activePlayer, playing;

// Functions
const switchPlayer = function () {
    // 1st reset the current active player score
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Reset the currentScore variable (not bound to any player)
    currentScore = 0;

    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    // toggle: add the class if it's not there and if it's there remove it
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

// Restart the game
const gameStart = function () {
    // console.log('Reset Game');

    // Scores, current score and active player:
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    currentScore0Element.textContent = 0;
    currentScore1Element.textContent = 0;

    // Hidding the dices
    diceElement.classList.add('hidden');

    
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    // player 0 starts:
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
}


// Starting the game: init
gameStart();


// New game
btnNew.addEventListener('click', gameStart);



// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. Generating a random dice roll: 1-6
        const diceValue = Math.trunc(Math.random() * 6) + 1;
        // console.log(diceValue);

        // 2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${diceValue}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if(diceValue !== 1) {
            // Add dice to current score
            currentScore += diceValue;

            // Testing:
            // currentScore0Element.textContent = currentScore; 

            // Selecting it dynamically:
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else { 
            switchPlayer();
        }
    }
});



btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // DEBUGGING:
        // console.log(currentScore);
        // console.log(`scores: ${scores}`);

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});