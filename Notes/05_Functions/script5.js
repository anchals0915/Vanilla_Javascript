// Functions 
'use strict' ; 
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default parameters 
/*
// Default parameters allow you to specify default values for function parameters if 
// the caller does not provide a value or passes undefined for that parameter.

// In this code, the numPassengers and price parameters have default values defined using the 
// equal sign (=) in the function declaration. 
// If these parameters are not provided when calling the function, the default values will be used.

// some parameters are set from before itself 
const bookings = [] ;
const createBooking = function(flightNum , numPassengers = 1 , price = 199*numPassengers ) {
    // ES5
    // numPassengers  = numPassengers || 1 ; // when ever it is a falsy value , 1 is assigned 
    // price = price || 199 ;


    const booking = {
        flightNum , 
        numPassengers , 
        price
    } ;

    console.log(booking);
    bookings.push(booking) ;    // push() method ----> used to add one or more elements to the end of an array and returns the new length of the array.
    
}
createBooking('LH123') ;
createBooking('LH123' , 2 ,800 ) ;
createBooking('LH123', 2 ) ;
createBooking('LH123' , 5 ) ; 
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
// How Passing Arguements Works Value vs Reference 
/*
const flight = 'LH123' ;
const anchal = {
    name : 'Anchal Singh' ,
    passport : 24739479284 
}

const checkIn = function(flightNum,passenger) {
    flightNum = 'LH999' ;
    passenger.name = 'Ms. '+ passenger.name ;

    if(passenger.passport === 24739479284) {
        alert('Checked in') ; 
    } else {
        alert('Wront passport!') ; 
    }
}
checkIn(flight, anchal ) ;
console.log( flight );
// primitive values (such as strings) are passed to functions by value.
// When a function is called with a primitive value as an argument, 
//     a copy of that value is created within the function's local scope. 
// Any changes made to this copy do not affect the original variable 
// declared outside the function.

console.log( anchal );
// objects are passed to functions by reference. 
// When an object is passed as an argument to a function, 
//     a reference to that object's memory location is passed. 
// This means that the function parameter and the original object both 
// point to the same memory location. Any modifications made to the object
//  inside the function will directly affect the original object outside the
//   function since they are essentially the same object.


const  flightNum = flight ;
const passenger = anchal ;

const newPassport = function( person) {
    person.passport = Math.trunc(Math.random()*10000000000000000) ; 
}
newPassport(anchal) ;
checkIn(flight, anchal) ;
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// First Class Funtions 
/*
// javascript treats function as first-class citizens 
// This means that function are simply vales 
// Functions arre just another "type" of object 

// functions are considered "first-class citizens" or "first-class functions."
// This means that functions in JavaScript are treated as regular values, just like any other data 
// type such as numbers, strings, or objects. 

// They can be assigned to variables, passed as arguments to other functions, returned from functions, 
// and stored in data structures like arrays and objects.



// Store functions in variables or properties 

// Pass functions as arguements to OTHER functions 

// return functions from functions 
// Call methods on functions 




// Higher - order functions 

// higher-order functions are functions that either take other functions as arguments,
//  return functions as their output, or both. 
 
//  They enable powerful functional programming techniques and are a fundamental 
//  concept in modern JavaScript development. Higher-order functions add a level
//   of abstraction that allows for more flexible and reusable code. 


*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions accepting Callback Functions 
/*
// / /g: This is a regular expression pattern. 
// The / at the beginning and end of the pattern denotes that it is a regular expression. 
// The g flag stands for "global," which means the replacement should be applied to all 
// occurrences of the pattern in the string.

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
  
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
  
  // Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
  
    console.log(`Transformed by: ${fn.name}`);
};
  
transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord


// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
  */
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions Returing Functions 
/*
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
// ƒ (name) {
    // console.log(`${greeting} ${name}`);
// }


greeterHey('Jonas'); // Output: 'Hey Jonas'
greeterHey('Steven'); // Output: 'Hey Steven'

greet('Hello')('Jonas'); // Output: 'Hello Jonas'

// the function greet is a higher-order function that takes a greeting parameter 
// and returns another function. 

// This returned function is an inner function that captures the value of the greeting parameter 
// even after the greet function has finished executing. 

// This behavior is possible due to the concept of closures in JavaScript.

// When greet('Hello')('Jonas') is called, 
    // it effectively becomes the same as calling the returned function with 'Jonas' as an argument.

// The inner function then uses the captured greeting value, 
    // which is 'Hello', 
        // and combines it with the name 'Jonas'.

// The result of this combination is 'Hello Jonas'.
// Therefore, 
    // the output of the expression greet('Hello')('Jonas') will be 'Hello Jonas'.


    // Challenge 
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas') ;

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The call and apply Methods 
  
/*
// Create an object representing the Lufthansa airline
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [], // An empty array to store flight bookings
    
    // Method for making flight bookings
    book(flightNum, name) 
    {
      // Log a message with the passenger's name and booking details
      console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
      
      // Add the booking information to the `bookings` array
      this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    },

};

lufthansa.book(239, 'Anchal Singh'); // Output: "Anchal Singh booked a seat on Lufthansa flight LH239"
lufthansa.book(635, 'John Smith');  // Output: "John Smith booked a seat on Lufthansa flight LH635"

const eurowings = {
    name : 'Eurowings' ,
    iataCode : 'EW' , 
    bookings : []
} ;

const book = lufthansa.book ;

// regular function 
// Does not Work 
// book( 23, 'Sarah Williams ') ; //Sarah Williams booked a seat on undefined 23

// indicates that the this.airline and this.iataCode within the book method are undefined since the 
// method was called without any context. 

// As a result, this.airline becomes undefined, 
// and '23' (from book(23, 'Sarah Williams')) is appended to undefined in the message.

// When book(23, 'Sarah Williams') is called, 
// the this.airline and this.iataCode are undefined.

// The message "Sarah Williams booked a seat on undefined23" is logged, 
// where undefined comes from this.airline, 
// and 23 comes from the flightNum parameter passed as 23 in the function call.





// Call method

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
  
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
  
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
} ;
 

// The call method is used to call the book method from the eurowings object.
// The first argument of call specifies the value of this inside the book method,
//  which is set to eurowings.
// The subsequent arguments (23 and 'Sarah Williams') are passed as the flightNum and 
// name parameters to the book method, respectively.
// When the book method is called with these arguments, it logs the booking message 
// for Eurowings and adds the booking information to the bookings array of the eurowings object.


book.call(swiss, 583 , 'Mary Copper') ;
console.log( swiss );

// Apply Method 
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// same as book.apply( swiss, flightData) ; 
book.call(swiss, ...flightData);
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The bind method 

/*
// the bind method is used to create a new function with a specific this context and,
// optionally, preset arguments. 

// It allows you to control the value of this when calling the function, 
// regardless of how the function is actually called.

// Bind method 
// book.call( eurowings, 23, 'Sarah Williams') ;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application 
const addTax = (rate, value) => value + value* rate ;
console.log( addTax(0.10, 200)  );

const addVAT = addTax.bind(null, 0.23 ) ;
// addVAT = value => value+value*0.23 ;

console.log( addVAT(100) );
console.log( addVAT(23) );


const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate ;
    }
}
const addVAT2 = addTaxRate(0.23) ;
console.log( addVAT2(100) );
console.log( addVAT2(23) );
*/

////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 
 /* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
  The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, 
    increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number
    and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string 
as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', 
simply display the results array as it is, using console.log(). This should be the default option. 
If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);
        typeof answer==='number' && answer<this.answers.length && this.answers[answer]++ ;
        console.log(answer );

        this.displayResults() ;
        this.displayResults('string') ;

    } ,

    displayResults(type='array') {
        if(type === 'array') {
            console.log( this.answers );
        }
        else if ( type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ') } `) ;
        }
    }
};

document.querySelector('.poll').addEventListener( 'click' , poll.registerNewAnswer.bind(poll) ) ;
  
// BONUS TEST DATA 1: [5, 2, 3]
poll.displayResults.call( { answers: [5, 2, 3] } , 'string' ) ;


// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call( { answers: [1, 5, 3, 9, 6, 1] } , 'string' ) ;

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Immediately invoked Functions 

/*
(function () {
    console.log('This will never run again.........');
}) () ; 

( () => console.log('This will never run again!') ) () ;


{
    const isPrivate  = 23 ;
    var notPrivate = 46; 
}
// console.log( isPrivate); error 
console.log( notPrivate);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Closures
/*
const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
};
  
const booker = secureBooking();
  
booker();
booker();
booker();
  
console.dir(booker);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// More Closure Examples
 /*
let f ;
const g = function() {
    const a= 23 ;
    f = function() {
        console.log(a*2);
    }
} ;

const h = function() {
    const b = 777 ;
    f = function() {
        console.log( b*2 );
    } ;
}
g() ;
f() ; 
console.dir( f );
// Re-assigning f function 
h() ;
f() ;

console.dir( f );
// ƒ () {
//     console.log( b*2 );
// }

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2 
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
( function() {
    const header = document.querySelector('h1') ;
    header.style.color = 'red' ;
    
    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue' ;
    })
}) () ; 

// it sets the initial color of the <h1> element to red. 
// However, when you click anywhere on the page (inside the <body> element), 
// the event listener function is triggered, and it changes the text color of the <h1> element to blue. 

*/


////////////////////////////////////////////////////////////////////////////////////////



// Simple Array Methods 
