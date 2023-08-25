
// Javascript Fundamental Part - 2

/*
//  Activating Strict mode

'use strict' ;          // it creates a visible to error for developer 

let hasDriversLicence = false ;
const passTest = true ;

if( passTest ) {
    hasDriversLicence = true ;
} 

if( hasDriversLicence) {
    console.log("I an drive :D") ;
}

// Errors 
// const interface  = 'Audio' ; 
// const private  = 534 ;
*/


/*
'use strict' ;
// Functions 
// a piece code which can be used multiple times 

function logger() {
    // Function body 
    console.log("My name is Anchal Singh.");
}

logger() ;  //Invoking the function / calling the function //running the function
logger() ;  
logger() ;  

function fruitProcessor( apple, oranges ) {
    console.log(apple , oranges );
    const juice = `Juice with ${apple} apples and ${oranges} oranges . ` ;
    return juice ;
}

const juice = fruitProcessor(5,7) ;
console.log( juice );


const appleOrangeJuice = fruitProcessor(2,6) ;
console.log(appleOrangeJuice);


Number('23') ; 
 */

/*
// 1. function declaration = Function that can be used before it's declared 
const age1 = calAge1(2003) ; //Hosting 
function calAge1(birthYear) {
    return  2037 - birthYear ;
}




// 2. Function expression - essentially a function value stored in a variable 
// const age2 = calAge2(1991) ; error reference error it is not initalisaed 

const calAge2 = function (birthYear) {
    return 2037 - birthYear ;
}
const age2 = calAge2(1991) ; 
console.log( age1 , age2 );




// 3. Arrow Function = great for a quick one -line functions 
// Has not his keyword 
const calAge3 = (birthYear) => 2037 - birthYear ;
// return happens here implicity in one line code only  
const age3 = calAge3(1991) ;
console.log(age3);





const yearsUntilRetirement = (birthYear, firstName) => {
    const age =2023 - birthYear ;
    const retirement = 65 - age ;
    // return retirement ;
    return `${firstName} retires in ${retirement} years` ;

}

console.log( yearsUntilRetirement(1991, 'Jonas') );
console.log( yearsUntilRetirement(1980, 'Bob') );

// fundamental between these functions

// Functions calling other function 
function cutFruitPieces(fruit) {
    return fruit * 4 ;
}

function fruitProcessor(Apples, oranges) {
    const applePieces = cutFruitPieces(Apples) ;
    const orangePieces = cutFruitPieces(oranges)  ;
    
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges .` ;
    return juice ;
}

console.log( fruitProcessor(2,3) );
// dont repeat yourself 
*/

/*
const calcAge = function(birthYear) {
    return 2023 - birthYear ;
}


const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear) ;
    const retirement = 65 - age ;
    if(retirement>0) {
        console.log( `${firstName} retires in ${retirement} years`  );
        return retirement ;
    }
    else {
        console.log(`${firstName} have already retired !!` ) ;
        return -1 ; 
    }
}

console.log( yearsUntilRetirement(2003,'Anchal')  );
console.log( yearsUntilRetirement(1970,'Mike')  );
*/







// Arrays 

/*
const friends  =['Damon' ,'Stefan' , 'Elena' ,'Caroline'] ;
console.log( vampireDiaries );

const yearsOriginal = new Array('Nikalus','ELijah','Rebacca','Koel') ;

console.log( friends[0]);
console.log( friends[2]);

console.log( friends.length );
console.log( friends[friends.length - 1] );

friends[2] = 'Tyler' ;
console.log(friends);

// only primiitves variables are immutable  in const 
// array is mutable in const 

// friends=['Bob','Alice'] ; //error we cannot do that 

const firstName = 'Anchal' ;

// variable name can be passed as an element to the array
// an expression can be passed as element 2023 -2003 
const owner = [ firstName,'Singh', 2023-2003, 'Software Develeoper', friends] ;

console.log( owner);





const calcAge = function (birthYear) {
    return 2023 - birthYear ;
}

const years = [1990,1967,2002,2010,2018] ;


const age1 = calcAge(years[0]) ;
const age2 = calcAge(years[1]) ;
const age3 = calcAge(years[years.length-1]) ;
console.log( age1 , age2 ,age3);


// function call can be element in array 
const ages = [ calcAge(years[0])  ,calcAge(years[1]) ,calcAge(years[years.length-1]) ] ;
console.log(ages);
*/


/*
// Basic Arrays Methods   
// push - adds elements to the end of the array 
const friends  =['Damon' ,'Stefan' , 'Elena' ,'Caroline'] ;
const newLength = friends.push('Katherine') ;

console.log(friends);
console.log(newLength);

// unshift - adds elements to the start of array 
friends.unshift('Anchal') ;
console.log(friends);

// Remove elements 

// pop returns the removed element 
friends.pop() ; //Last
const popped = friends.pop() ; //Last
console.log(popped);
console.log(friends);

// shift - removes elemetn from beginning and returns it 
friends.shift() ;
console.log(friends);

console.log( friends.indexOf('Anchal'));
console.log( friends.indexOf('Bob'));

// includes - returns true / false 
friends.push(23) ; 
console.log( friends.includes('Anchal'));
console.log( friends.includes('Bob'));
console.log( friends.includes('23')); //false ; strict equality 
console.log( friends.includes(23)); //true  

if( friends.includes('Stefan')) {P
    console.log('You have watched Vampire Diaries ');
}
*/



/*
// Introduction to Objects 
// Objects in key value pair

const jonasArray = [
    'Anchal',
    'Singh',
    2023-1991 ,
    'student',
    ["Keerthi" , "Palki", "Jyotsna"] 
] ;
// In array order amtters because of accessing through index 



const jonasObject = {
    firstName: 'Anchal' ,
    lastName: 'Singh' ,
    age : 2023 -2003 ,
    job : 'student' ,
    friends : ["Keerthi" , "Palki", "Jyotsna"] 
} ;
// Object of these values does not matters 
*/

/*
// Dot vs Bracket Notation 

const jonasObject = {
    firstName: 'Anchal' ,
    lastName: 'Singh' ,
    age : 2023 -2003 ,
    job : 'student' ,
    friends : ["Keerthi" , "Palki", "Jyotsna"] 
} ;

console.log(jonasObject);

console.log( jonasObject.lastName) ;
console.log( jonasObject['lastName']);

const nameKey = 'Name' ;
console.log( jonasObject['first' + nameKey]);
console.log( jonasObject['last' + nameKey]);


const interestedIn = prompt("What do you want to know about me ? ") ;
console.log(interestedIn);


// console.log(jonas.interestedIn) ; //undefined 
// it is because interestedIn is not a object property 


console.log(jonasObject[interestedIn]);

if(jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn]);
} else {
    console.log("Wrong request!");
}

jonasObject.location = "India" ;
jonasObject['twitter'] = '@anchalSingh' 
console.log( jonasObject );

// Challenge 
// Jonas has 3 friends, and his best fiend is called Michael

console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends , and his best friend is called ${jonasObject.friends[0]}`);
*/

/*
//  Object Methods 
const jonasObject = {
    firstName: 'Anchal' ,
    lastName: 'Singh' ,
    birthYear : 2003 ,
    job : 'student' ,
    friends : ["Keerthi" , "Palki", "Jyotsna"] ,
    hasDriversLicense: true ,
    // calcAge : function(birthYear) {
    //     return 2023 - birthYear ;       
    // }

    // calcAge : function() {
    //     // console.log( this.birthYear );
    //     return 2023 - this.birthYear ;       
    // }

    calcAge : function() {
        // we creating a new property age 
        this.age = 2023 -this.birthYear ;
        return this.age ;       
    } ,
    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},and she ${this.hasDriversLicense ? 'has a' : 'does not have'} driver's License`;
    }
} ;

// console.log( jonasObject.calcAge(jonasObject.calcAge) );
// console.log( jonasObject['calcAge'](jonasObject.calcAge) );


console.log( jonasObject.calcAge() );

// new property created 
console.log( jonasObject.age );



console.log( jonasObject.getSummary() );
*/

/*
// Iteration The for Loop 
for(let rep =1;rep<=10;rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/


/* Looping Arrays ,Breaking and Continuing 
const owner = [
    'Anchal',
    'Singh' ,
    2023-2003,
    'Developer',
    ['Abc','Def','Ghi'],
    true
];


const types = []
// console.log( owner[0] );
// console.log( owner[1] );
//...
// console.log( jonasArray[4] );


for (let i = 0; i < owner.length; i++) {
    // Reading from owner 
    console.log( owner[i], typeof owner[i]);
    
    // Filling types array
    // types[i] = typeof owner[i] ;
    types.push( typeof owner[i]) ;
}


console.log( types);

// Anchal string
// Singh string
// 20 'number'
// Developer string
// (3) ['Abc', 'Def', 'Ghi'] 'object'
// true 'boolean'


const years=[1991,2008,1969,2020] ;
const ages =[] ;
for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]) ;
}
console.log( ages );

// continue and break 
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < owner.length; i++) {
    if(typeof owner[i]!=='string' ) {
        continue ;
    }
    console.log(owner[i] , typeof owner[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < owner.length; i++) {
    if(typeof owner[i] ==='number' ) {
        break ;
    }
    console.log(owner[i] , typeof owner[i]);
}
*/

/*
// Looping Backwards and Loops in Loops 
const owner =[
    'Anchal',
    'Singh',
    2023 -2003 ,
    'Software Developer',
    ['Abc','Def','Ghi'],
    true
];

// 0, 1, ... , 4
// 4, 3, ..., 0
for (let i = owner.length-1; i>=0; i--) {
    console.log(i, owner[i] );
}

// Loop inside a Loop 
for (let exercise = 0; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}-----` );
    for (let reps = 1; reps <=5 ; reps++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${reps}`);
    }
}
*/


// While Loops 
for (let reps = 1; reps <=10; reps++) {
    // console.log(`For Loop : Lifting weight repetition ${reps}`);
}

let reps = 1
while (reps<=10) {
    // console.log(`While Loop : Lifting weight repetition ${reps}`);
    reps++;
}



let dice = Math.trunc(Math.random() * 6) +1 ;
console.log(dice); 

while(dice!=6) {
    console.log( `You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1 ;
    if(dice===6) {
        console.log( "You have rolled 6 ");
    }
}
 