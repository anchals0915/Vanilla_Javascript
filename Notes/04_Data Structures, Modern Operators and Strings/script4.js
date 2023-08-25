'use strict' ;


// Destructuring Arrays
/*
const restaurent = {
    name: 'Classico Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','CAprese Salad'] ,
    mainMenu: ['Pizza','Pasta','Risotto'] ,

    openingHours: {
        thu: {
            open: 12,
            close:12 ,
        },
        fri : {
            open:11 ,
            close : 23 ,
        },
        sat: {
            open : 0 ,
            close : 24 ,
        },
    },
    order: function( starterIndex , mainIndex ) {
        return [ this.starterMenu[starterIndex]  ,   this.mainMenu[ mainIndex ]     ] ;
    }
} ;  

const arr = [2,3,4] ;
const a =arr[0] ;
const b = arr[1] ;
const c = arr[2] ;

const [ x, y, z ] = arr ;
console.log( x, y, z);
console.log( arr );

const [first, second] = restaurent.categories 
console.log( first, second ) ;

let [main, , secondary ] = restaurent.categories ;
console.log( main, secondary );

// Switching variables 
// const temp = main ;
// main = secondary ;
// secondary = temp ;

[main,secondary] = [secondary, main]
console.log( main, secondary );


// Receive 2 return values from a function 
const [starter, mainCourse ] = restaurent.order(2, 0)  ;
console.log( starter, mainCourse );

const nested = [2 ,4 , [5,6] ] ;
const [i , , j] = nested ;
console.log(i,j);   //2 (2) [5, 6]


const [ l , , [m,n] ] = nested ;
console.log( l, m ,n );     //2 5 6

// Default values 
// const [p,q,r] =  [8,9] ;
// console.log( p , q ,r );    //8 9 undefined


const [p =1 ,q= 1,r=1] =  [8,9] ;
console.log( p , q ,r );    //8 9 1
*/



// Destructuring Objects
/*
const restaurent = {
    
    // Properties of the restaurant object
    name: 'Classico Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','CAprese Salad'] ,
    mainMenu: ['Pizza','Pasta','Risotto'] ,

    // Nested object with opening hours for specific days
    openingHours: {
        thu: {
            open: 12,
            close:12 ,
        },
        fri : {
            open:11 ,
            close : 23 ,
        },
        sat: {
            open : 0 ,  //Open 24 hours 
            close : 24 ,
        },
    },

    // Method for taking orders with indices for starter and main menu items
    order: function( starterIndex , mainIndex ) {
        return [ this.starterMenu[ starterIndex ] , this.mainMenu[ mainIndex ] ] ;
    } , 

    // Newly added method for order delivery using destructured parameters
    orderDelivery: function(  {starterIndex = 1 ,mainIndex = 0 ,time = '20:00' ,address} ) {
        console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` ) ;
    } , 
} ;  

//  Calling orderDelivery method with custom parameters
restaurent.orderDelivery ( {
    time: '22:30' ,
    address: 'Via del Sole , 21' ,
    mainIndex : 2 ,
    starterIndex : 2 ,
})
// Order received ! Garlic Bread and Risotto will be delivered to Via del Sole , 21 at 22:30



//  Calling orderDelivery method with only some parameters
restaurent.orderDelivery ( {
    address : 'Via del Sole ,21', 
    starterIndex : 1 ,
}) ;
// we call the orderDelivery method again, but this time we only provide values for address and starterIndex. The time and mainIndex will take their default values specified in the method definition.

// The time defaults to '20:00', 
// and the mainIndex defaults to 0, 
// which corresponds to the first item in the mainMenu array, i.e., 'Pizza'.







// Destructuring Assignment:
// Destructuring assignment is a way to extract specific properties 
// from an object and assign them to variables. 
const { name , openingHours , categories} = restaurent ;
console.log(name, openingHours ,categories);

// This code extracts the properties name, openingHours, 
// and categories from the restaurent object and assigns 
// them to variables with the same names. 


// especially when we deal with api call 



// Destructuring with Custom Variable Names:
// You can use destructuring with custom variable names, 
// allowing you to assign properties to variables with names of your choice.
const {
    name: restaurentName , 
    openingHours: hours , 
    categories:tags
} = restaurent ;
console.log( restaurentName, hours , tags); 
// Here, the properties name, openingHours, and categories are 
// extracted from the restaurent object and assigned to variables 
// with names restaurentName, hours, and tags, respectively.




// Default Values in Destructuring:
const { menu=[], starterMenu: starters = [] } = restaurent ;
console.log( menu, starters );
// If the menu property is not present in the restaurent object, 
// it will default to an empty array []. 

// If the starterMenu property is not present, 
// it will default to an empty array as well. 

// This way, you ensure that these variables have some value even if the corresponding 
// properties are not defined in the restaurent object.





// Mutating Variables using Destructuring:
let a = 11 ;
let b = 999 ;
const obj = { a: 23 , b:7, c: 14} ;

( {a, b}  = obj );
//  the a and b variables are reassigned new values from the obj object using destructuring.
console.log( a, b );


// Nested Objects Destructuring:
const {
    fri: { open : o, close: c }
} = restaurent.openingHours ;
console.log( open , close ) ;
console.log( o , c ) ;

 */


/*
// The Spread Operator 
// allows you to expand elements from an array (or properties from an object) into a new array (or object). 

//  It is denoted by three dots (...) followed by the iterable name.

// It provides a concise way to copy the elements from one array into another or to combine multiple arrays into a new one.



const restaurent = {
    
    // Properties of the restaurant object
    name: 'Classico Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','CAprese Salad'] ,
    mainMenu: ['Pizza','Pasta','Risotto'] ,

    // Nested object with opening hours for specific days
    openingHours: {
        thu: {
            open: 12,
            close:12 ,
        },
        fri : {
            open:11 ,
            close : 23 ,
        },
        sat: {
            open : 0 ,  //Open 24 hours 
            close : 24 ,
        },
    },

    // Method for taking orders with indices for starter and main menu items
    order: function( starterIndex , mainIndex ) {
        return [ this.starterMenu[ starterIndex ] , this.mainMenu[ mainIndex ] ] ;
    } , 

    // Newly added method for order delivery using destructured parameters
    orderDelivery: function(  {starterIndex = 1 ,mainIndex = 0 ,time = '20:00' ,address} ) {
        console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` ) ;
    } , 


    orderPasta : function(img1 ,img2 ,img3) {
        console.log(`Here is your declicious pasta with ${img1}, ${img2} , ${img3} ` );
    }

} ;  


const arr = [7,8,9] ;
const badNewArr = [ 1 , 2 , arr[0] , arr[1] , arr[2]] ;
console.log( badNewArr );

// const newArr = [1,2, arr] ;
// [ 1 ,2 , [7, 8, 9] ] 


const newArr = [1,2, ...arr] ;  //  allows you to spread the contents of an array into another array.
console.log( newArr ) ;
// Instead of manually copying each element from arr, 
// we use the spread operator (...arr) to include all elements from the arr array into newArr.


console.log( ...newArr) ; // 1 2 7 8 9 


const newMenu = [...restaurent.mainMenu, 'Gnocci' ] ;
console.log( newMenu );
// (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array ------> You can even use the spread operator to clone an array or object:
const mainMenuCopy = [ ...restaurent.mainMenu];
console.log(mainMenuCopy);  //(3) ['Pizza', 'Pasta', 'Risotto']


// join 2 arrays ------>The spread operator can also be used to combine multiple arrays:
const menu = [...restaurent.starterMenu , ...restaurent.mainMenu] ; 
console.log(menu); //(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'CAprese Salad', 'Pizza', 'Pasta', 'Risotto']


// Iterables; arrays,strings,maps,sets. Not objects
const str= 'Jonas' ;
const letters = [...str, ' ', 'S.'] ;
console.log( letters );     //(7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log( ...str);   //J o n a s
// console.log(`${...str} Singh `); error literal doesnot takes multiple values at the same literal 


// ***NOTE :  spread operator only performs a shallow copy. 
// That means if the array (or object) contains nested objects, 
// the new array (or object) will still reference the same nested objects, 
// and changes made to the nested objects in one array will affect the other.





const ingredients = [ prompt(`Let's make pasta! Ingredient 1 ? `) ,  prompt(`Ingredient 2 ? `) ,  prompt(`Ingredient 3 ? `)] ;
console.log( ingredients );


restaurent.orderPasta( ingredients[0] , ingredients[1] , ingredients[2] );
restaurent.orderPasta( ...ingredients ) ; 


*/



/*

// Rest Pattern and Parameters 

const restaurent = {
    
    // Properties of the restaurant object
    name: 'Classico Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','CAprese Salad'] ,
    mainMenu: ['Pizza','Pasta','Risotto'] ,

    // Nested object with opening hours for specific days
    openingHours: {
        thu: {
            open: 12,
            close:12 ,
        },
        fri : {
            open:11 ,
            close : 23 ,
        },
        sat: {
            open : 0 ,  //Open 24 hours 
            close : 24 ,
        },
    },

    // Method for taking orders with indices for starter and main menu items
    order: function( starterIndex , mainIndex ) {
        return [ this.starterMenu[ starterIndex ] , this.mainMenu[ mainIndex ] ] ;
    } , 

    // Newly added method for order delivery using destructured parameters
    orderDelivery: function(  {starterIndex = 1 ,mainIndex = 0 ,time = '20:00' ,address} ) {
        console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` ) ;
    } , 


    orderPasta : function(img1 ,img2 ,img3) {
        console.log(`Here is your declicious pasta with ${img1}, ${img2} , ${img3} ` );
    } ,

    orderPizza : function ( mainIngredient, ...otherIngredients) {
        console.log( mainIngredient );
        console.log( otherIngredients );
    }, 

} ;  



// SPREAD, becausee on RIGHT isde of = 
const arr= [1,2, ...[3,4] ] ;

// The spread syntax (...) is used on the right side of the = to spread 
// the elements of an array into another array or function arguments.





// REST, because on LEFT side of =
const [a, b, ...others] = [ 1,2,3,4,5] ;
console.log( a, b, others );
// 1 2 (3) [3, 4, 5]

// The rest parameter (...) is used on the left side of the = within array 
// destructuring to collect the remaining elements of an array into a new array.





// uses array destructuring to assign the first two elements of the array [1, 2, 3, 4, 5] 
// to the variables a and b. 

// The rest parameter ...others collects the remaining elements of the array 
// (starting from the third element) into a new array called others.



// REst element should be the last element 

const [pizza, , risotto, ...otherFood ] = [...restaurent.mainMenu , ...restaurent.starterMenu] 
console.log( pizza, risotto, otherFood );
// Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'CAprese Salad']


const { sat, ...weekdays } = restaurent.openingHours ;
console.log( weekdays);
//  {thu: {…}, fri: {…}}


// 2) Functions 
const add= function(...numbers) {
    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(numbers,sum);
};

add( 2, 3 ) ;   // (2) [2, 3]
add( 5, 3, 7, 2 ) ;     // (4) [5, 3, 7, 2]
add( 8, 2, 5, 3, 2, 1, 4) ; // (7) [8, 2, 5, 3, 2, 1, 4]

const x = [23, 5, 7] ;
add( ...x ) ;


restaurent.orderPizza('mushrooms', 'onion' , 'olives' , 'spinach')
// mushrooms
// (3) ['onion', 'olives', 'spinach']   0: "onion"1: "olives"2: "spinach"length: 3[[Prototype]]: Array(0)

restaurent.orderPizza('mushrooms')
// mushrooms
// [] 

*/




// const restaurent = {
    
//     // Properties of the restaurant object
//     name: 'Classico Italiano' ,
//     location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
//     categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
//     starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','Caprese Salad'] ,
//     mainMenu: ['Pizza','Pasta','Risotto'] ,

//     // Nested object with opening hours for specific days
//     openingHours: {
//         thu: {
//             open: 12,
//             close:12 ,
//         },
//         fri : {
//             open:11 ,
//             close : 23 ,
//         },
//         sat: {
//             open : 0 ,  //Open 24 hours 
//             close : 24 ,
//         },
//     },

//     // Method for taking orders with indices for starter and main menu items
//     order: function( starterIndex , mainIndex ) {
//         return [ this.starterMenu[ starterIndex ] , this.mainMenu[ mainIndex ] ] ;
//     } , 

//     // Newly added method for order delivery using destructured parameters
//     orderDelivery: function(  {starterIndex = 1 ,mainIndex = 0 ,time = '20:00' ,address} ) {
//         console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` ) ;
//     } , 


//     orderPasta : function(img1 ,img2 ,img3) {
//         console.log(`Here is your declicious pasta with ${img1}, ${img2} , ${img3} ` );
//     } ,

//     orderPizza : function ( mainIngredient, ...otherIngredients) {
//         console.log( mainIngredient );
//         console.log( otherIngredients );
//     }, 

// } ;  


/*
//////////////////////////////////////////////////////////////////////////////////////////
// Short Circuiting && 

console.log('----- OR -----');
// USE any data type, return any data type short-circuiting 
console.log(  3 || 'Jonas' );  //3
console.log( '' || 'Jonas' );   //Jonas
console.log( true || 0);    //true
console.log( undefined || null );   //null

console.log( undefined || 0 || '' ||'Hello' || 23 || null);     //  Hello 

restaurent.numGuests = 0 ;
const guest1 = restaurent.numGuests ? restaurent.numGuests : 10 ;
console.log( guest1 );

const guests2 = restaurent.numGuests || 10 ;

console.log('----- AND -----');

// first false value or last truthy value
console.log( 0 && 'Jonas' );    //0
console.log( 7 && 'Jonas' );    //Jonas

console.log( 'Hello' && 23 && null && 'jonas'); //null


//  if this exists
if( restaurent.orderPizza) {
    restaurent.orderPizza( 'mushroooms', 'spinach') ;
}

restaurent.orderPizza &&  restaurent.orderPizza( 'mushroooms', 'spinach') ;
*/


/*
///////////////////////////////////////////////////////////////////////////////////////////////////////
// THE Nullish Coalescing Operator 

restaurent.numGuests = 0 ;
const guest = restaurent.numGuests ? restaurent.numGuests : 10 ;
console.log( guest );   //10

// Nullish : null and undefined (NOT 0 or '') only then it will go to next one 
const guestCorrect = restaurent.numGuests ?? 10 ;
console.log(guestCorrect ); //0
*/

/*
/////////////////////////////////////////////////////

// Logical Assignment Operator 
const rest1 = {
    name:'Capri' ,
    // numGuests : 20 ,
    numGuests : 0 ,
} ;

const rest2 = {
    name : 'La Piazza',
    owner : 'Giovanni Rossi' ,
} ;

// The first truthy value is returened 
// OR assign
// rest1.numGuests = rest1.numGuests || 10 ;
// rest2.numGuests = rest2.numGuests || 10 ;

// rest1.numGuests ||= 10 ;
// rest2.numGuests ||= 10 ;

// console.log( rest1 );
// {name: 'Capri', numGuests: 20}
// {name: 'Capri', numGuests: 10}   ---------> since    numGuests : 0 ,


// console.log( rest2 );
// {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
// {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}  ----------> since  numGuests : 0 ,




// Nullish Assignment Operator ( null or undefined )
rest1.numGuests ??= 10 ;
rest2.numGuests ??= 10 ;

// AND assignment operator 
// rest1.owner = rest1.owner && '<ANONYMOUS>' ;     // {name: 'Capri', numGuests: 0, owner: undefined}
// rest2.owner = rest2.owner && '<ANONYMOUS>' ;     // {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

rest1.owner &&= '<ANONYMOUS>' ;
rest2.owner &&= '<ANONYMOUS>' ; 


console.log( rest1 );  
console.log( rest2 );   
*/


/////////////////////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};
*/

/*
// Arrat Destructuring 
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [ players1 , players2 ] = game.players ;
console.log( players1 , players2 );
// (11) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'] (11) ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']






// 2. The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = players1 ; 
console.log( gk, fieldPlayers );
// Neuer (10) ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']






// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2 ] ;
console.log( allPlayers );
// (22) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']




// 4. During the game, Bayern Munich (team 1) used 3 substitute players. 
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic'] ;
console.log( players1Final );
// (14) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Perisic']




// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: { team1 , x:draw , team2 } } = game ;
console.log( team1 , draw ,team2 ); 
// 1.33 3.25 6.5


// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function ( ...players) {
    console.log(`${players.length} goals were scored`);
}
// printGoals( 'Davies' , 'Muller' , 'Lewandowski' , 'kimmmich') ; //4 goals were scored
// printGoals( 'Davies' , 'Muller') ;//2 goals were scored
printGoals(...game.scored)  //4 goals were scored



// 7. The team with the lower odd is more likely to win. 
// Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.


team1 < team2 && console.log('Team 1 is more likely to win ') //Team 1 is more likely to win 
team2 < team1 && console.log('Team 2 is more likely to win ') //Team 2 is more likely to win 


*/








/*
/////////////////////////////////////////////////////////////////////////////////////////
// Looping Arrays The for-of Loop 

const menu = [...restaurent.starterMenu , ...restaurent.mainMenu] ;

for (const item of menu) {
    console.log( item );
}
// Focaccia
// Bruschetta
// Garlic Bread
// CAprese Salad
// Pizza
// Pasta
// Risotto

for (const item of menu.entries() ) {
    console.log( item );
}

// (2) [0, 'Focaccia']
// (2) [1, 'Bruschetta']
// (2) [2, 'Garlic Bread']
// (2) [3, 'Caprese Salad']
// (2) [4, 'Pizza']
// (2) [5, 'Pasta']
// (2) [6, 'Risotto']



console.log( menu.entries() );

// Array Iterator {}
// [[Prototype]]   :   Array Iterator




console.log( [...menu.entries()] );
// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0 : (2) [0, 'Focaccia']
// 1 : (2) [1, 'Bruschetta']
// 2 : (2) [2, 'Garlic Bread']
// 3 : (2) [3, 'Caprese Salad']
// 4 : (2) [4, 'Pizza']
// 5 : (2) [5, 'Pasta']
// 6 : (2) [6, 'Risotto']
// length : 7


for (const [i,el] of menu.entries() ) {
    console.log( `${i+ 1} : ${el}` );
}
// 1 : Focaccia
// 2 : Bruschetta
// 3 : Garlic Bread
// 4 : Caprese Salad
// 5 : Pizza
// 6 : Pasta
// 7 : Risotto

*/




/*
/////////////////////////////////////////////////////////////////////////////////////////
// Enhanced Object Literals 
*/


const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'] ;
const openingHours= {
    // ES6 Enhances
    [weekdays[3]]  :  {
            open: 12,
            close:12 ,
    },
    [weekdays[4]]  :  {
            open:11 ,
            close : 23 ,
    },
    [weekdays[5]]  :  {
            open : 0 ,  //Open 24 hours 
            close : 24 ,
    },
};

const restaurent = {
    
    // Properties of the restaurant object
    name: 'Classico Italiano' ,
    location: 'Via Angelo Tavanti 23, Firenze, Italy' ,
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] ,
    starterMenu : ['Focaccia', 'Bruschetta','Garlic Bread','Caprese Salad'] ,
    mainMenu: ['Pizza','Pasta','Risotto'] ,


    // openingHours : openingHours ,
    
    // ES6 Enhances object literals
    openingHours  ,

    // ES6 Enhances 
    order( starterIndex , mainIndex ) {
        return [ this.starterMenu[ starterIndex ] , this.mainMenu[ mainIndex ] ] ;
    } , 

    orderDelivery( {starterIndex = 1 ,mainIndex = 0 ,time = '20:00' ,address} ) {
        console.log(`Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}` ) ;
    } , 

    orderPasta(img1 ,img2 ,img3) {
        console.log(`Here is your declicious pasta with ${img1}, ${img2} , ${img3} ` );
    } ,

    orderPizza( mainIngredient, ...otherIngredients) {
        console.log( mainIngredient );
        console.log( otherIngredients );
    }, 
} ;  


if( restaurent.openingHours &&  restaurent.openingHours.mon) {
    console.log(restaurent.openingHours.mon.open );
}


// The optional chaining syntax uses the ?. operator, which you place between the object and the property you want to access. 
// If the property on the left side of ?. is null or undefined, the expression evaluates to undefined, and the chain stops executing further.

//  WITHOUT  Optional Chaining 
// console.log( restaurent.openingHours.mon.open );

//  WITH Optional Chaining 
console.log( restaurent.openingHours.mon?.open );   // undefined
console.log( restaurent.openingHours?.mon?.open );  // undefined


// It helps to avoid "TypeError: Cannot read property '...' of undefined" errors that can 
// occur when trying to access properties of nested objects when some 
// intermediate properties are null or undefined.


// Optional chaining works with both dot notation and square bracket notation, 




// Example 
const days  =  ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'] ;
for (const day of days) {
    
    // restaurant.openingHours[day]?.open uses optional chaining to access the open property of the openingHours object for the current day in the loop. 
    // If openingHours[day] is undefined (e.g., for 'sun' which is not present in the object), it will return undefined.


    // restaurant.openingHours[day]?.open || 'closed' ensures that if restaurant.openingHours[day]?.open evaluates to undefined, the value 'closed' will be assigned to the open variable.

    const open = restaurent.openingHours[day]?.open || 'closed' ;
    console.log(`On ${day}, we open at ${open}`);
}





// Methods 

console.log( restaurent.order?.(0,1) ?? 'Methods does not exist');  //(2) ['Focaccia', 'Pasta']

// restaurant.order?.(0, 1) uses optional chaining to check if the order 
// method exists in the restaurant object. 
// If the order method exists and is callable (i.e., it's a function), 
// it will be executed with the arguments (0, 1). 
// If the method doesn't exist or is not callable, the entire expression evaluates to undefined.

// ?? 'Method does not exist' checks if the result of the optional chaining expression is undefined. 
// If it is undefined, the nullish coalescing operator returns the default value 'Method does not exist'.


console.log( restaurent.orderRisotto?.(0,1) ?? 'Methods does not exist');   // Methods does not exist






// Arrays 
const users = [ {name:'Anchal', email:'anchals@gmail.com'}]
// const users =[] ;
console.log( users[0]?.name ?? 'User array empty' );

// If users[0] exists and has a name property, 
//          the expression evaluates to the value of users[0].name. 
// If users[0] is not defined or doesn't have a name property, 
//          the expression evaluates to undefined.

// ?? checks 
// if the result of the users[0]?.name expression is undefined. 
//          If it is undefined, the nullish coalescing operator returns the default value 'User array empty'.
// else 
//          Otherwise, it will log the name property of the first element in the users ---> array.users[0]?.name



//////////////////////////////////////////////////////////////////////////////////////////
// Looping Objects: Objects Keys ,Values and Enteries 
console.log(' --------------- Looping Objects: Objects Keys , Values and Enteries -------------------- ');


// Property NAMES
// Object.keys() method is used to extract the property names (keys) from the openingHours object and store them in the properties array.
const properties = Object.keys(openingHours);
console.log(properties);


let openStr = `We are open on ${properties.length} days: `;
// for...of loop iterates over each element (day) in the properties array
for (const day of properties) {
    openStr += `${day}, `;       // For each day, the loop adds it to the openStr string 
}
console.log(openStr);



// Property VALUES
// Object.values() method extracts the property values from the openingHours object and stores them in the values array.
const values = Object.values(openingHours);
console.log(values);



// Entire object
// Object.entries() method converts the openingHours object into an array of arrays, 
// where each inner array contains two elements: 
        // the key (day of the week) and 
        // the value (an object with open and close properties).
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
// destructuring to extract the day (key) and the object containing open and close times from each entry in the entries array.
for (const [day, { open, close }] of entries) 
{
    console.log(`On ${day} we open at ${open} and close at ${close}`);        
    //For each entry, it extracts the day (key) and the object containing open and close times using destructuring.
}


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

/*
 * game.scored array ------> contains the names of players who scored goals in the football game.
 * for...of loop ---> to iterate over the elements of game.scored array
 * entries() method 
    ----------> returns an iterator with both the index and the value of each element in the array. 
 * destructuring to extract the index and player from each entry.
 * log player's name along with the goal number to the console
*/



// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

/*
 * the code extracts the values of the game.odds object and 
 * stores them in the odds array using Object.values(game.odds).
 * Then, it initializes a variable average to 0, 
        which will be used to calculate the sum of all the odds.
 * The code uses a for...of loop to iterate through each odd in the odds array 
        and adds each odd to the average.
 * After summing up all the odds, 
        it divides the average by the number of odds in the odds array 
            to calculate the average.
 * Finally, 
        it logs the calculated average to the console. 
*/


// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
    //   Odd of victory Bayern Munich: 1.33
    //   Odd of draw: 3.25
    //   Odd of victory Borrussia Dortmund: 6.5
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}


// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
} 