'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 28/02/2025
// 72. PROJECT #1: Guess My Number!
console.log(document.querySelector('.message').textContent);



/////////////////////////////////////////////////////
// 73. What's the DOM and DOM Manipulation
// DOM (Document Object Model):
// Structured Representation of HTML documents.
// Allows JS to access HTML elements and styles to manipulate them.

// DOM Methods and Properties for DOM Manipulation ARE NOT a part of JS
// DOM Methods and Properties are part of WEB APIs (Application Programming Interfaces),
// libraries that are written in JS and are ready to use



/////////////////////////////////////////////////////
// 74. Selecting and Manipulating Elements
'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 14;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);



/////////////////////////////////////////////////////
*/
// 75. Handling Click Events
// 76. Implementing the Game Logic
// 77. Manipulating CSS 
// 78. CHALLENGE #1: Play the game again
// 79. Implementing Highscores
'use strict';

// 1 -> 20
// let number = Math.trunc(Math.random()*20) + 1;
// 0 -> 20
let secretNumber = Math.trunc(Math.random() * 21);

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Debugging: display the secret number
console.log(`Number: ${secretNumber}`);

// When you do 'click' on guess, the function is performed
document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('.guess').value);
    // console.log(document.querySelector('.message').textContent = '🎉 Correct Number!');

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When the input is not a number
    if (typeof guess !== 'number') {
        // document.querySelector('.message').textContent = '⛔ Not a valid number!';
        displayMessage('⛔ Not a valid number!');

    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        // CSS: background-color changes to camelCase: backgroundColor
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.backgroundColor = 'black';
        document.querySelector('.number').style.color = 'white';

        // Highscore update:
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score -= 1;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            score = 0;
        }
    }

    // Number too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score -= 1;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         score = 0;
    //     }

    // Number too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score -= 1;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         score = 0;
    //     }
    // }

    document.querySelector('.score').textContent = String(score);

    console.log(score);
});



/////////////////////////////////////////////////////
// 78. CHALLENGE #1: Play the game again

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK!! 😀
*/

// When you do 'click' on guess, the function is performed
document.querySelector('.again').addEventListener('click', function () {
    // necessary to reset the number each go:
    secretNumber = Math.trunc(Math.random() * 21);
    // Debugging: display the secret number
    console.log(`Number: ${secretNumber}`);

    score = 20;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
});