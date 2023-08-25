
let js = 'amazing' ;
if(js === 'amazing') {
    alert('JavaScript is FUN !') ;
} 
 
console.log( 40 + 8 +23 -10) ;

// Values and Variables 

console.log('Anchal') ;
console.log(23) ;

let firstName = "Anchal" ;
console.log(firstName)


// 7 Primitve Data type  
/*
n   Number
n   Null
b   Boolean
b   Big Int
s   String
s   Symbol
u   Undefined
*/

/* 
console.log(true);
let javascriptIsFun = true ;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jones');

javascriptIsFun = 'YES!' ;
console.log(typeof javascriptIsFun);

let year ;
console.log(year);
console.log(typeof year);

year = 1991 ;
console.log(typeof year);

console.log(typeof null) ; //object
// this is bug 
*/

/*
let age= 19 ;
age =20 ;
 
const birthYear = 2003 
// birthYear = 2004 
// const job ; 

var job = 'programmer' ;
job = "Senior Developer" ;

lastName = 'Singh'
console.log(lastName);
*/

/*
const now = 2037 ;
const ageJonas = now -1991 ;
const ageSarah = now -2018 ;
console.log(ageJonas,ageSarah);

console.log( ageJonas*2 , ageJonas/10 , 2**3);


const firstName = 'Anchal' ;
const lastName = 'Singh' ;
console.log(firstName+ " " +lastName);

let x = 10 + 5 ;
x += 10 ;

console.log(x);
*/



/*
// Type Conversion  
const inputYear = '1991' ;
console.log(Number(inputYear) , inputYear)
console.log( Number(inputYear) +18)

console.log(Number('Anchal')) //NaN 
// when any number operation fails to get new number 


console.log(typeof NaN) //number
// NaN is not Not a Number it basically means invalid number

console.log( String(23) ,23 );

// In Js 
// only three type can be converted  
// to number 
// to string 
// to a boolean

// Type Coercion

console.log('I am '+ 20 + " years old .");//I am 20 years old .

console.log('23' - '10' - 3 );//10
// Js is automatically converting the string to a number 
// So, thats why 23-10-3 = 10



console.log('23' + '10' + 3 ); //23103
// in this strings are concated first 2310 and then
// 3 is also converted to string and concetenated 

// Again the string is converted to numbers 
console.log('23' * '2'); //46
console.log('23' / '2');//11.5


12 + ""    //Output is "12" as number 12 is converted to string "12"
"15" * 2    //Output is 30 as string 15 is converted to number 15
"15" - "11" //Output is 4 as both the strings are converted to number
undefined + 6 //Output is NaN as undefined could not be converted to number
"Hello" + null  //Output is "Hellonull" as null is converted to string "null"
null + 25     //Output is 25 as null is converted to 0.
true + true //Output is 2 as true is converted to number 1.
false + 10 //Output is 10 as false is converted to number 0.
10 * [6] //Output is 60 as [6] is converted to number 6.
10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number
[1] + [1,2] //Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the two are concatenated to give the result "11,2"


let n = '1' + 1 ; //'11'
n = n-1 ; // '11' - 1 =10
console.log(n); //10


console.log(2+3+4+'5') //'95'

console.log( '10'- '4' - '3'- 2 +'5'); //15

*/

/*
// Truthy and Falsy Values
// 5 falsy value : false ,0, '', undefined , null, NaN
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false

console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('singh')); //true
console.log(Boolean({})); //empty object -----> true


// const money = 0 ;//0 means false;You should get a job !
const money = 100 ;//0 means true Don't spend it all
if(money) {
    console.log("Don't spend it all");
}   else {
    console.log("You should get a job !");
}

let height ; //by default variable is undefined 
if(height) {
    console.log(`defined Height`);
}   else {
    console.log(`Height is UNDEFINED`);
}
*/


/*
// Equality Operators == vs ===
const age= '18' ;
if (age===18) 
    console.log(`You just became an adult (strict) `);
// true ; both side should have same data type and same value 

if (age==18) 
    console.log(`You just became an adult (loose)`);

// === does not do type coresion 

// == dos type corecion 

    // 18 === 18   true
    // 18=='18'    true it does type Coercion
    // 18==='18'   false


const fav = Number(prompt("What's your favorite number :"));
console.log(fav);

// console.log(typeof fav); //string

// prompt("What's your favorite number :")  '23' == 23 
if(fav ==23) { //this one will do type Coercion     
    // 23 == 23 
    console.log(`Cool!`);
}
if(fav ===23) {  // 23===23
    console.log(`Cool Number !Strict!!`);
}


if(fav !== 23  ){
    console.log(`Why not 23 ?   Not Equal strict`);
} else if(fav !=23) {
    console.log(`Not Equal loose`);
}
*/

/*
const hasDriversLicense = true ;
const hasGoodVision = true ;

console.log(hasDriversLicense && hasGoodVision ) ;
console.log(hasDriversLicense || hasGoodVision ) ;
console.log( !hasDriversLicense  ) ;



const shouldDrive = hasDriversLicense && hasGoodVision ;
// if(shouldDrive) {
//     console.log("Sarah is able to drive !");
// }   else {
//     console.log("Someone lese should drive .....");
// }



const isTired = false ;
console.log(hasDriversLicense || hasGoodVision || isTired ) ;
console.log(hasDriversLicense && hasGoodVision && isTired ) ;


if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive !");
}   else {
    console.log("Someone lese should drive .....");
}

*/

/*

// Switch Statements 

const day = 'monday' ;

switch (day) {
    case 'monday': console.log("Plan sourse structure");
    console.log("Go to coding meet up ");
        break;

    case 'tuesday' :
        console.log("Go to GYM ");

    case 'wednesday' :
        console.log("Write Lab recors ");

    case 'thursday' :
        console.log("Ugh !! Thursday");
    default:
        console.log("Not a valid day ");
        break;
}
*/


/*

3+4 
1991
true && false && false 

if( 23 > 10) {
    const str = '23 is bigger' ;
}

const me ='Anchal' ;
console.log(`I'm ${2037-2003} years old ${me} `);

*/


/*
const age = 23 ;
age>=18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age>=18 ? 'wine' : 'water' ;


console.log( `I like to drink ${age>=18 ? 'wine' : 'water'} . `);
*/


