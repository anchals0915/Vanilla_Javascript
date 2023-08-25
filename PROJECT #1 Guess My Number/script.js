
'use strict';
/*
// console.log( document.querySelector('.textMessage')  ); //<p class="textMessage">Start guessing...</p>
console.log( document.querySelector('.textMessage').textContent  ); //Start guessing...

document.querySelector('.textMessage').textContent = `Correct Number ! ` ;

document.querySelector('.correctNumber').textContent = '20';
document.querySelector('.score').textContent = '10' ;

console.log( document.querySelector('.guess').value );
document.querySelector('.guess').value = 23;
*/

/*
const x = function() {
    console.log(23);
}
*/

// Handling Click Events 


let score = 20; //state variable
let correctNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0 ;
// document.querySelector(".correctNumber").textContent = correctNumber;


const displayMessage = function(message) {
    document.querySelector('.textMessage').textContent = message ;
}


document.querySelector(".checkbtn").addEventListener("click", function () {
        //input from the user is a string
        // console.log( document.querySelector('.guess').value); 

        //input is of String type inorder to be used ; it used to converted in number
        const guess = Number(document.querySelector(".guess").value); 
        console.log( guess , typeof  guess );
    
        // when there is no input
    if (!guess) {
        // document.querySelector(".textMessage").textContent = "No Number!";
        displayMessage('No Number!') ;
    } 
    else if (correctNumber === guess) {
            //when the guess is equal to correctNumber
        // document.querySelector(".textMessage").textContent = "Correct Number!";
        displayMessage("Correct Number!") ;

        document.querySelector(".correctNumber").textContent = correctNumber;

            // Manipulating Styles 
        // On getting correct guess ; changing background color and width 
        // when we are changing it is getting changed intside html file 
        document.querySelector("body").style.backgroundColor = '#60b347';//camel case when we have two words 
        document.querySelector(".correctNumber").style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    else {
        if (score > 1) { 
            // document.querySelector(".textMessage").textContent = guess < correctNumber ? "Too Low!" : "Too High!";
            displayMessage(guess < correctNumber ? "Too Low!" : "Too High!") ;

            score--;
            document.querySelector(".score").textContent = score;

        } else {
            // when score is 0
            document.querySelector(".score").textContent = "0";
            
            // document.querySelector(".textMessage").textContent = "You Lose the Game!";
            displayMessage("You Lose the Game!") ;
        }   
    }
});



//////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

// Implement a game rest functionality,so that the player can make a new guess! Here is how:
// 1.  Select the element with the 'again' class and attach a click event handler
// 2.  In the handler function,restore inital values of the score and number variables
// 3.  Restore the initial conditions of the message number, score and guess input field
// 4.  Also restore the original background color(#222) and number width (15rem)

//////////////////////////////////////////////////////////////////////////////////


document.querySelector('.againbtn').addEventListener('click', function(){
    score =  20 ;
    correctNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.textMessage').textContent = 'Start guessing...' ;
    document.querySelector('.score').textContent= score ;
    
    document.querySelector('.correctNumber').textContent = '?' ;
    document.querySelector('.guess').value = '' ;
    document.querySelector('body').style.backgroundColor = '#222' ;

    document.querySelector('.correctNumber').style.width = '15rem' ;
    
}) ;