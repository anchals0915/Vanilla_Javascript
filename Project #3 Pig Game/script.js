"use strict";

// Selecting elements
const player0_Element = document.querySelector(".player-0");
const player1_Element = document.querySelector(".player-1");

const score0_Element = document.querySelector("#score-0");
const score1_Element = document.getElementById("score-1");

const current0_Element = document.getElementById("current-0");
const current1_Element = document.getElementById("current-1");


const diceElement = document.querySelector(".dice");


const newGameButton = document.querySelector(".btn-new");
const rolldiceButton = document.querySelector(".btn-roll");
const holdButton = document.querySelector(".btn-hold");


// let and const are both block-scoped, which means their visibility is limited to the block where they are defined
let scores, currentScore, activePlayer, playing;

// Starting conditions 
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0_Element.textContent = 0;
    score1_Element.textContent = 0;
    current0_Element.textContent = 0;
    current1_Element.textContent = 0;

    diceElement.classList.add('hidden');

    // method allows you to remove one or more classes from an element's class list
    player0_Element.classList.remove('.player-winner');
    player1_Element.classList.remove('.player-winner');

    // Adds one or more classes to the element's class list.
    player0_Element.classList.add('.player-active');
    player1_Element.classList.remove('.player-active');
};

init();

// const keyword is used to declare a variable that cannot be reassigned after initialization. 
const switchPlayer = function () {
    document.getElementById(`current-${activePlayer}`).textContent = 0;   //This line updates the text content of an element with an ID dynamically generated based on the activePlayer variable. It sets the text content to 0.
    currentScore = 0; //It resets current score for the active player.
    activePlayer = activePlayer === 0 ? 1 : 0;

    //   Toggles the presence of a class. 
    // If the class is present, it is removed, 
    // and if it is absent, it is added. 
    player0_Element.classList.toggle("player-active");
    player1_Element.classList.toggle("player-active");
};

// Rolling dice functionality
rolldiceButton.addEventListener("click", function () {
    if (playing) {
        // 1. Generating a random dice roll

        // Math.trunc --> is used to truncate a number to its integer part by removing any decimal places.
        const diceNumber = Math.trunc(Math.random() * 6) + 1;   //Finally, we add 1 to the truncated value. This adjustment shifts the range of numbers from [0, 5] to [1, 6]. The expression will generate a random integer between 1 (inclusive) and 6 (inclusive).

        // 2. Display dice
        diceElement.classList.remove("hidden");
        diceElement.src = `images/dice-${diceNumber}.png`;

        // 3. Check for rolled 1
        if (diceNumber !== 1) {
            // Add dice to current score
            currentScore += diceNumber;
            document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

holdButton.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // if yes , Finish the game
            playing = false;
            diceElement.classList.add("hidden");

            const playerElement = document.querySelector(`.player-${activePlayer}`);
            playerElement.classList.add("player-winner");
            playerElement.classList.remove("player-active");
        } else {
            // if no, Switch to the next player
            switchPlayer();
        }
    }
});


newGameButton.addEventListener("click", init);
