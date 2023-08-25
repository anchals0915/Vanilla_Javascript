'use strict;'
 
// Scooping Pratice
/*
function calcAge(birthYear) {
    const age= 2037 - birthYear ;
    console.log(firstName); //Anchal 

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}` ;
        console.log( output );

        if(birthYear>=1981 && birthYear<=1996) {
            var millenial =true ;
            const firstName = 'Anchal' ;
            const str = `Oh, and you're a millenial, ${firstName}` ;
            console.log( str );


        }


    }
    return age;
}

const firstName = 'Anchal' ;
calcAge(2003) ;

// console.log(age);




*/




// The this keyword 

// How the this keyword works 

// Special variable that is created for every execution context(every funtion) 
// Takes the value (points to) the "owner" of the funtion in which the this keywird is used 


// this is NOT static. It depends on how the function is called , and its value is only assigned when the funtion is actually called


/*


console.log(this);  //--> is window object Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const calcAge = function (birthYear) {
    console.log( 2037 - birthYear);    //14
    console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
calcAge(2023) ;


// arrow funtion does not have this of their own 
// they take lexical this or parents this 
const calacAgeArrow = birthYear => {
    console.log( 2037 - birthYear);    //34
    console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}

calacAgeArrow(2003) ; 



const jonas = {
    year: 1991 ,
    calcAge: function() {
        console.log(this);  //{year: 1991, calcAge: ƒ}
        console.log(2037-this.year); //46
    }
} ;
jonas.calcAge() 
// {year: 1991, calcAge: ƒ}
// 46

// this keyword will point to the object that is calling the obejct 



const matilda = {
    year: 2017 ,
};

matilda.calcAge = jonas.calcAge ;

// So here matilda it calling
matilda.calcAge();  
// {year: 2017, calcAge: ƒ}
// 20

const f =jonas.calcAge ;
f() ;
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// NaN
*/


/*
// Regular Functions vs Arrow Functions 

const jonas = { 
    firstName : 'Anchal' ,
    year : 1991,
    calcAge: function() {
        // console.log(this);
        console.log( 2037- this.year);
        

        
        // Promblem 
        // const isMillenial = funtion () {    
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year<=1996);
        // };
        

        // Solution 1
        // const self = this ; //self or that
        // const isMillenial = function()  {
        //     console.log(this); //undefined
        //     console.log(this.year >= 1981 && this.year<=1996);
        // }

        // Solution 2
        const isMillenial = () => {    
            console.log(this);
            console.log(this.year >= 1981 && this.year<=1996);
        };

        isMillenial() ;
    } ,
    greet : () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`) 
    },
}


// arrow funtion doesnot get its own this keyword   

jonas.greet() ; 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//Hey undefined


// when we access a property that is not defined 
// console.log(this.firstName) ; //undefined



//  **NOTE:Not to use var , and best pratice never use arrow funtion instead noraml funtions  

jonas.calcAge();

const addExpr = function(a,b) {
    console.log(arguments); 
    return a+b ;
}
addExpr( 2,5) ; //Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
addExpr( 2,5,8,12 ) ;   //Arguments(4) [2, 5, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ]

var addArrow = (a,b) => {
    // argument keyword exist but only in regular functions 
    // console.log(arguments);  // Error ; arguments is not defined
    return a+b ;
}
addArrow( 2,5,8) ;


*/

/*
// Primitives vs Objects (Primitve vs Reference Types)
let age = 30 ;
let oldAge = age ;
age =31 ;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Anchal' ,
    age : 30,
} ;
const friend = me ;
friend.age = 27 ;

console.log('Friend : ',friend); //Friend :  {name: 'Anchal', age: 27}
console.log('Me : ', me);   //Me :  {name: 'Anchal', age: 27}

 
// Primitves stored in call stack --> excution context 

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt


// Objects stored in Heap
// Object Literal 
// Arrays 
// Functions
// Many more..
*/


// Primtive types
let lastName = 'Williams' ;
let oldLastName = lastName ;
lastName = 'Davis' ;
console.log(lastName, oldLastName);

// Reference types 
const jessica = {
    firstName : 'Jessica' ,
    lastName:'Williams' ,
    age : 27 ,
} ;

const marriedJessica = jessica ; 
marriedJessica.lastName = 'Davis' ;

console.log('Before Marriage :' , jessica);
console.log('After Marriage : ', marriedJessica);

// marriedJessica = {} ; //Assignment to constant variable.

// Copying Objects 
const jessica2 = {
    firstName : 'Jessica' ,
    lastName:'Williams' ,
    age : 27 ,
    family : ['Alice', 'Bob' ] , 
} ;


// a function called object.assign ---> will essentailly merge two objects and then return a new one 
 
const jessicaCopy = Object.assign( {}, jessica2 ) ;
jessicaCopy.lastName = 'Davis' ;

console.log('Before Marriage :' , jessica2);    // Before Marriage : {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(2)}
console.log('After Marriage : ', jessicaCopy ); // After Marriage :  {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(2)}


jessicaCopy.family.push('Mary') ;
jessicaCopy.family.push('John') ;


console.log('Before Marriage :' , jessica2);    // Before Marriage : {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}
console.log('After Marriage : ', jessicaCopy ); // After Marriage :  {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}


