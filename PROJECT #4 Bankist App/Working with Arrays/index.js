"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Project Bankist App
// Creating DOM Elements 

const displayMovements = function (movements, sort=false) {

    containerMovements.innerHTML = ``;
    // .textContent = 0 

    const movs = sort ? movements.slice().sort( (a,b) => a-b ) : movements ; 

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? `deposit` : `withdrawal`;
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value"> ${mov} € </div>
        </div>
        ` ;

        // insertAdjacentHTML
        // beforebegin 
        // <div>
        //     afterbegin 
        //     -- text --
        //      beforeend 
        // </div>
        // afterend 

        containerMovements.insertAdjacentHTML('afterbegin', html);

    });
}
// displayMovements(account1.movements);

// console.log( containerMovements.innerHTML );




/////////////////////////////////////////////////////
// The Reduce 
// Calculate and print balance
const calculate_PrintBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
}
// calcualte_PrintBalance(account1.movements);


///////////////////////////////////////////////
// The Magic of Chaining
const calcDisplaySummary = function ( acc ) {

    // const labelSumIn = document.querySelector(".summary__value--in");
    // const labelSumOut = document.querySelector(".summary__value--out");
    // const labelSumInterest = document.querySelector(".summary__value--interest");

    const income = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, sum) => sum + acc, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((int, i, arr) => {
        console.log(arr);
        return int > 1;
    }).reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${interest}€`;
}
// calcDisplaySummary(account1.movements)

/////////////////////////////////////////////////
// Computing Usernames 
// "Steven Thomas Williams" ; //stw

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(" ").map(word => word[0]).join('');
    });
}
// console.log( createUsernames("Steven Thomas Williams"));
createUsernames(accounts);
console.log(accounts);



const updateUI = function(account) {
    // Display movements
    displayMovements(account.movements) ;   
    // Display balance
    calculate_PrintBalance( account) ;
    // Display summary 
    calcDisplaySummary( account) ;

}
/////////////////////////////////////////////////
// Implementing login 


// Event Handlers

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    /*
    // Display movements
    displayMovements(currentAccount.movements) ;   
    // Display balance
    calculate_PrintBalance( currentAccount) ;
    // Display summary 
    calcDisplaySummary( currentAccount) ;
    */

    // Update UI
   updateUI(currentAccount) ;

  }

});



/////////////////////////////////////////////////
// Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    // console.log( amount, receiverAcc);
    
    // Cleaning the input box 
    inputTransferAmount.value = inputTransferTo.value = '' ; 

    if( amount>0  && receiverAcc && currentAccount.balance>= amount && receiverAcc?.username !== currentAccount.username ) 
    {
        // Doing the transfer 
        // Add negative movement to current user 
        currentAccount.movements.push(-amount) ;
        console.log( currentAccount.movements );

        // Add positive movement to recipient 
        receiverAcc.movements.push(amount) ;
        console.log( receiverAcc.movements );
    }

    // Update UI 
    updateUI(currentAccount) ;


});
  
  

/////////////////////////////////////////////////
// The findindex Method 
// Close Account 


// User Closes Account 
btnClose.addEventListener('click' , function(e) {
    e.preventDefault() ;
    /*
    const btnClose = document.querySelector(".form__btn--close");
    const inputCloseUsername = document.querySelector(".form__input--user");
    const inputClosePin = document.querySelector(".form__input--pin");
    */

    // Correct Credentials 
    if( inputCloseUsername.value=== currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) 
    {
        const index = accounts.findIndex( acc => acc.username=== currentAccount.username) ;
        console.log( index ); 
        
        // Delete user from data 
        accounts.splice(index , 1 ) ;
        console.log( accounts );

        // Log user out (hide UI) 
        containerApp.style.opacity = 0 ; 
    }
    inputCloseUsername.value = inputClosePin.value = '' ; 
})



/////////////////////////////////////////////////
// some and every 
// User requests loan 
btnLoan.addEventListener('click' , function(e) {
    e.preventDefault() ;

    const amount = Number( inputLoanAmount.value ) ;
    
    // Clearing the input 
    inputLoanAmount.value = '' ;


    // any deposit > 10% of request 
    if( amount> 0 && currentAccount.movements.some(mov => mov>= amount * 0.1)  ) {
        // Yes then ,
        // Add Positive movements to current user 
        currentAccount.movements.push(amount) ;
        // Update UI 
        updateUI(currentAccount) ; 
    }

})


/////////////////////////////////////////////////
// Sorting Arrays 
let sorted = false ; 
btnSort.addEventListener('click' ,function(e) {
    e.preventDefault() ;

    displayMovements( currentAccount.movements , !sorted ) ;
    sorted = !sorted ; 
})


















/////////////////////////////////////////////////
// Simple Array Methods 
/*
let arr = ['a', 'b', 'c', 'd', 'e'] ;

// SLICE 
console.log( arr.slice(2));
console.log( arr.slice(2, 4) );
console.log( arr.slice(-2) );
console.log( arr.slice(-1) );
console.log( arr.slice(1,-2) );

// Copy of an array 
console.log( arr.slice() );
console.log( [...arr] );


// SPLICE 
// console.log( arr.splice(2) );
arr.splice(-1) ;
console.log( arr );
arr.splice(1,2) ;
console.log( arr );

// REVERSE
arr= ['a', 'b', 'c', 'd', 'e'] ;
const arr2 = ['j', 'i', 'h', 'g', 'f'] ;
console.log( arr2.reverse() );
console.log( arr2 );

// CONCAT 
const letters = arr.concat(arr2) ;
console.log( letters );
console.log( [...arr, ...arr2 ] );

// JOIN
console.log( letters.join('-'));
*/

/////////////////////////////////////////////////
// The new at method 
/*
const arr = [23,11,64] ;
console.log( arr[0] );  //23
console.log( arr.at(0) );   //23

// Getting the last element 
console.log( arr[arr.length-1] ); //64
console.log( arr.slice(-1)[0] ); //64
console.log( arr.at(-1) ); //64

console.log( 'Anchal'.at(0));
console.log( 'Anchal'.at(-1));
*/



/////////////////////////////////////////////////
// The Looping Arrays forEach 
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of  movements ) 
{
    if (movement>0 ) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

for (const [i,movement] of movements.entries()) {
    if( movement> 0) {
        console.log(`Movement ${i+1}: You deposited ${movement} `);
    }   else {
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement) } `);
    }
}
    
movements.forEach( function(movement, index, array) {
    if( movement> 0) {
        console.log(`Movement ${index+1}: You deposited ${movement} `);
    }   else {
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement) } `);
    }
}   ) ;


//  0: anymous function(200)
//  1: function(450)
//  2: function(400)
*/

/*
1. Syntax:
   - `for...of` loop:
     - It uses the `for...of` keyword followed by parentheses and a code block.
     - It directly iterates over the elements of an iterable object (e.g., an array).

   - `forEach` method:
     - It is a built-in method of arrays in JavaScript.
     - It takes a callback function as an argument, which will be executed for each element of the array.

2. Use Cases:
   - `for...of` loop:
     - Suitable for iterating over all elements of an iterable (like arrays or strings) when you 
     need to perform a simple action on each element.
     - When you don't need to access the index of the element, and you want a more straightforward 
     way to loop through the elements.

   - `forEach` method:
     - Primarily used for iterating through array elements.
     - Suitable when you want to perform more complex actions or transformations on each element of the array.
     - Provides a more concise and readable way to iterate through an array when you need to work with its elements.

3. Accessing Index:
   - `for...of` loop:
     - Does not provide direct access to the index of the element within the loop.
     - If you need the index, you would need to use other approaches like `for` loop or track the index manually.

   - `forEach` method:
     - It automatically provides access to the index of the current element being processed
      through the callback function's second argument.

4. Breaking out of the Loop:
   - `for...of` loop:
     - You can use `break` or `return` statements to terminate the loop prematurely.

   - `forEach` method:
     - Does not support an easy way to break out of the loop before iterating through all elements.
     - If you need to stop the iteration early, you would need to use a regular `for` loop or other loop constructs.

5. Return Value:
   - `for...of` loop:
     - It does not return anything by itself; 
     it is solely used for iteration.

   - `forEach` method:
     - It does not return anything as well.
     - The return value of the `forEach` method is always `undefined`.

In summary, 
    the `for...of` loop is a general-purpose loop for iterating over any iterable object 
    (like arrays, strings) without direct access to the index. 

    On the other hand, 
    the `forEach` method is specifically designed for arrays, 
    provides direct access to the index, and offers a more concise
    way to work with array elements.
    */


/////////////////////////////////////////////////
// forEach With Maps and Sets

// Map 
/*
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach( function(value, key, map ) {
    console.log(`${key}: ${value}`);
})

// Set
const currenciesUnique = new Set( ['USD' , 'GBP', 'USD', 'EUR', 'EUR']) ; //Creating a Set
console.log( currenciesUnique );
// forEach on Set
currenciesUnique.forEach( function (value , key, map ) 
{
    console.log(`${key}: ${value}`); //Printing the Set
})
*/
/*
1.  Creating a Set:
    * We have a set called currenciesUnique that stores unique currency codes.
    * The Set ensures that each currency code appears only once, even if duplicates are provided.

2.  Printing the Set:
    * We use console.log(currenciesUnique) to display the contents of the currenciesUnique Set.
    * The output will be Set { 'USD', 'GBP', 'EUR' }, which shows the unique currencies.

3.  forEach on Set (Optional):
    * We attempt to use forEach on the Set, but this part contains a mistake:
    * Sets don't have keys like Map objects, so the parameters key and map are not valid in this context.
    * The correct way to use forEach on a Set is to provide only one parameter (the value).
*/



/////////////////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
/*
const checkDogs = function( dogsJulia , dogsKate ) {
    
    // 1. 
    const dogsJuliaCorrected = dogsJulia.slice() ; 
    dogsJuliaCorrected.splice( 0,1 ) ;  //  [5, 2, 12, 7]      [16, 6, 8, 3]
    dogsJuliaCorrected.splice( -2 ) ;    //   [5, 2]         [16, 6]
    // console.log( dogsJuliaCorrected ); 
    
    // 2.
    const dogs = dogsJuliaCorrected.concat(dogsKate) ;
    console.log( dogs );

    // 3.
    dogs.forEach( function(dog , index ) {
        if( dog >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
        }
        else {
            console.log( `Dog number ${index + 1} is still a puppy 🐶` );
        }
    })
}

// 4. Run the function for both test datasets
// TEST DATA 1: 
checkDogs( [3, 5, 2, 12, 7] , [4, 1, 15, 8, 3] ) ;

// TEST DATA 2: 
checkDogs(  [9, 16, 6, 8, 3] , [10, 5, 6, 1, 4] ) ; 
*/


/////////////////////////////////////////////////
// Data Transformatiopn : Map , Filter , Reduce 

// map will give a brand new aray 


// Map
// The map() method takes an array and 
// applies a function to each element of the array, 
// returning a new array with the results of the function. 

// The function is called once for each element of the array, 
// and the result of the function is the corresponding element in the new array.

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1 ;

const movementsUSD = movements.map(function(mov) {
    return mov * eurToUSD ;
}) 
const movementsUSD_Arrow = movements.map(mov => mov * eurToUSD ) ; 
console.log( movements);
console.log( movementsUSD );



const movementsUSDfor = [] ;
for (const mov of movements) {
    movementsUSDfor.push( mov * eurToUSD ) ;
}
console.log( movementsUSDfor);


const movementsDescription = movements.map( (mov,i) =>      `Movement ${i +1}: You ${mov>0 ? `withdrew`: `deposited`} ${Math.abs(mov) }` ) ;
console.log( movementsDescription );

*/



/////////////////////////////////////////////////
// The Filter Method 

// Filter
// The filter() method takes an array and returns a new array with the elements
// that meet a certain condition. 

// The condition is specified as a function, which is called once for each element of 
// the array. 
// If the function returns true, the element is included in the new array. 
// If the function returns false, the element is not included in the new array.

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log( movements);

const deposits = movements.filter( function(mov) {
    return mov>0 ;
});
console.log( deposits );


const depositsfor = [] ;
for (const mov of movements) {
    if(mov>0) 
        depositsfor.push(mov) ;
}
console.log(depositsfor);


const withdrawals = movements.filter( mov => mov<0) ;
console.log( withdrawals );
*/

/////////////////////////////////////////////////
// The reduce method 

/*
Reduce
The reduce() method takes an array and applies a function to
 the elements of the array, reducing them to a single value. 
The function is called repeatedly, with the result of the previous call passed as 
the first argument to the next call. 
The function must return a value, which is the final result of the reduction.
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator --> is like a snow ball
// const balance = movements.reduce(function( accumalator, current , index , arr) {
//     console.log(`Iteration ${index}: ${accumalator}`);
//     return accumalator + current ;    
// },0);
const balance = movements.reduce((accumalator, current) => accumalator + current, 0);
console.log(balance);


let balance2 = 0;
for (const mov of movements) {
    balance2 += mov;
}
console.log(balance2);
*/

// Maximum Value 











/////////////////////////////////////////////////
// Coding Challenge #2 
/*
const calcAverageHumanAge = function (ages) {

    // 1.
    const humanAge = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
    console.log(humanAge);
    // 2.  
    const adultDogs = humanAge.filter(age => age >= 18);
    console.log(adultDogs);
    // 3.   
    const average = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

    return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/
/////////////////////////////////////////////////
// The Magic of Chaining Methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);


const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * eurToUsd;
    })
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
/////////////////////////////////////////////////
// Coding Challege #3
/*
const calcAverageHumanAge_2 = ages => { 
    const average = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4).filter(age => age >= 18).reduce((acc, age) => acc + age, 0) / adultDogs.length;
    return average;
};
  */
/////////////////////////////////////////////////
// The find method 
// The find() method in JavaScript is used to find the first element in an array that satisfies a given condition. It is a part of the Array.prototype object and was introduced in ES6.
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// array.find(callbackFn[, thisArg]);

// The callbackFn parameter is a function that takes three arguments:
// 1. The current element of the array.
// 2. The index of the current element in the array.
// 3. The array itself.

const firstWithdrawal = movements.find( mov=> mov<0) ;

// The callbackFn function must return a boolean value.
// If the callbackFn function never returns true, the find() method will return undefined.
console.log( firstWithdrawal);
console.log(movements );

const account = accounts.find( acc => acc.owner ==='Jessica Davis')
console.log( account);
*/

/*
* The find() and filter() methods in JavaScript are both used to find elements in an array that satisfy a given condition. 
* However, there are some key differences between the two methods:
 
* The find() method returns the first element that satisfies the condition, while 
* the filter() method returns an array of all the elements that satisfy the condition.

* The find() method stops iterating through the array as soon as it finds an element that satisfies the condition,while 
* the filter() method continues iterating through the array until it has found all the elements that satisfy the condition.
 
* The find() method can only be used to find a single element in an array, 
* while the filter() method can be used to find multiple elements in an array.


Feature	---- find() ---- 	filter()
Returns	---- The first element that satisfies the condition.---- 	An array of all the elements that satisfy the condition.
Stops iterating	---- Yes.---- 	No.
Can only be used to find ---- 	A single element in an array.---- 	Multiple elements in an array.
*/



/////////////////////////////////////////////////
// The findindex Method 
// findIndex Method 

// Difference between indexOf() and findIndex()

// find and findIndex



/////////////////////////////////////////////////
// some and every 
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

///here checks for equality 
console.log( movements.includes(-130));      //true

//SOME :  condition 
console.log( movements.some( mov => mov === -130)); //true

const anyDeposits = movements.some( mov => mov>1500) ;  // true
console.log( anyDeposits );

// EVERY : if all elements in array passes the test 

console.log( movements.every(mov=> mov > 0));
console.log( account4.movements.every(mov=> mov > 0));

// Separate Callback 
const deposit = mov => mov > 0 ;
console.log( movements.some(deposit));
console.log( movements.every(deposit));
console.log( movements.filter(deposit));

/////////////////////////////////////////////////
// flat and flatMap
/*
    Method	 :  flat                      
    Description	: Flattens an array to a single level.
    Equivalent to : array.map().flat() 	        
    Takes a function as an argument	: No 
    Returns an array : Yes    

    * The flat method takes an array and 
    * returns a new array that contains all of the elements of the 
    original array, flattened to a single level. 
    
    * For example, if the original array contains nested arrays, 
    the flat method will flatten them out so that the new array
    contains only the top-level elements.          
*/

/*
    Method	 :  flatMap                      
    Description	: Flattens an array and then applies a function to each element.
    Equivalent to : array.map(function(element) { return [element]; }).flat()  
    Takes a function as an argument	: Yes
    Returns an array : Yes       
    
    * The flatMap method takes an array and a function as arguments, and
    * returns a new array that contains the results of calling 
    the function on each element of the original array. 

    * The function that is passed to flatMap can return any value, but it 
    is most commonly used to return an array. 

    * If the function returns an array, the flatMap method will flatten the array before adding it to the new array.

*/
 
const arr = [ [1,2,3] , [4,5,6] , 7,8] ;
console.log( arr.flat() );  //  (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [ [ [1,2] ,3] , [[4,5] ,6] ,7,8]
console.log( arrDeep.flat(1) );//   (6) [Array(2), 3, Array(2), 6, 7, 8]

console.log( arrDeep.flat(2) ); //  (8) [1, 2, 3, 4, 5, 6, 7, 8]


const overallBalance  = accounts.map(acc => acc.movements).flat().reduce( (acc,mov) => acc+mov,0 ) ;
console.log(overallBalance );

const overallBalance_FlatMap  = accounts.flatMap(acc => acc.movements).reduce( (acc,mov) => acc+mov,0 ) ;
console.log( overallBalance_FlatMap );


/////////////////////////////////////////////////
// Sorting Arrays 

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

const owners = ['Jonas' , 'Zach' , 'Adam' ,'Martha'] ;
console.log( owners.sort()); 
// mutates the original array 
console.log(owners);

// Number 
console.log( movements)  ;
console.log( movements.sort() );    //[-130, -400, -650, 1300, 200, 3000, 450, 70]

// sort(compareFn)
// A function that defines the sort order. 
// The return value should be a number whose sign indicates the relative order of the two elements: 
// negative if a is less than b, 
// positive if a is greater than b, 
// and zero if they are equal. 
// NaN is treated as 0. 

// The function is called with the following arguments:
// a : The first element for comparison. Will never be undefined.
// b : The second element for comparison. Will never be undefined.
// If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.


// return < 0 ,  A,B (keep order )
// return >0,    B,A (switch order)
// Ascending 
/*
movements.sort( (a,b) => {
    if(a>b) 
        return 1 ;
    if(b>a) 
        return -1;
})
*/
movements.sort( (a,b) => a-b ) ;
console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]


// Descending 
/*
movements.sort( (a,b) => {
    if(a>b) 
        return -1 ;
    if(b>a) 
        return 1;
})*/
movements.sort( (a,b) => b-a )
console.log(movements); //  (8) [3000, 1300, 450, 200, 70, -130, -400, -650]


/////////////////////////////////////////////////
// More ways of Creating and Filtering 

const a = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});


/////////////////////////////////////////////////
// Sumary which array method

/////////////////////////////////////////////////
// Array Methods and Pratice 

// 1.
const bankDepositSum = accounts.map( acc => acc.movements).flat().filter( mov => mov > 0).reduce( (acc,mov) => acc+mov ,0 ) ;
console.log( bankDepositSum );



// 2. 
// const numDeposists1000=  accounts.flatMap( acc => acc.movements).filter( mov => mov >= 1000).length ;
// const numDeposists1000=  accounts.flatMap( acc => acc.movements).reduce( (count,cur) => (cur >=1000 ? count+1 : count) , 0) ;
const numDeposists1000=  accounts.flatMap( acc => acc.movements).reduce( (count,cur) => (cur >=1000 ? ++count : count) , 0) ;

console.log( numDeposists1000);


// 3.
const sums = accounts.flatMap( acc => acc.movements).reduce( (sums,cur) => {
    // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals +=cur) ;
    sums[cur > 0 ? `deposits` : `withdrawals`] += cur ; 
    return sums 
}, {deposits: 0 , withdrawals:0 } ) ;
console.log(sums );


// 4.
// this is a nice title  -> This Is a Nice Title 
const convertTitleCase = function(title) {
    const capitzalize = str => str[0].toUpperCase() + str.slice(1) ;

    const exceptions = ['a','an', 'the', 'but','or','on','in','with','and']
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map( word => exceptions.includes(word) ? word : capitzalize(word) )
    .join(" ") ;
    return capitzalize(titleCase);
}

console.log( convertTitleCase('this is a nice title'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

//   1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28.

dogs.forEach( doggy => {
    doggy.recommended = Math.trunc(doggy.weight ** 0.75 * 28) ;
});
console.log(dogs);


//   2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array,
const SarahDog =dogs.find( dog => dog.owners.includes('Sarah')) ;
console.log(`Sarah's dog is eating too ${SarahDog.curFood>SarahDog.recommended ? 'much': 'little'}` );

//   3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs.filter(dog => dog.curFood> dog.recommended ).flatMap(dog => dog.owners) ;
console.log( ownersEatTooMuch);

const ownersEatTooLittle  = dogs.filter(dog => dog.curFood< dog.recommended ).flatMap(dog => dog.owners) ;
console.log(ownersEatTooLittle);

//   4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too much!`)


//   5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log( dogs.some( dog => dog.curFood===dog.recommended ));


//   6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const checkEatingOkay = dog => dog.curFood> dog.recommended*0.9 && dog.curFood< dog.recommended*1.1 ;
console.log( dogs.some(checkEatingOkay));

//   7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay) );

//   8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
  
const dogsSorted  =dogs.slice().sort( (a,b) => a.recommended-b.recommended ) ;
console.log( dogsSorted);

/////////////////////////////////////////////////
// Converting and Checking Num,

/////////////////////////////////////////////////
// Math and ROunding 

/////////////////////////////////////////////////
// The Remainder Operator 

/////////////////////////////////////////////////
// Numeric Separators 

/////////////////////////////////////////////////
// Working with BigInt 

/////////////////////////////////////////////////
// Creating Dates 

/////////////////////////////////////////////////
// Adding DAtes to Bankist App 

/////////////////////////////////////////////////
// Opertions wuth Dates 

/////////////////////////////////////////////////
// Internationalizing Dates(Int)

/////////////////////////////////////////////////
// Internationalizing Numbers(Int)

/////////////////////////////////////////////////
// Timers setTimeout and setInterval

/////////////////////////////////////////////////
// Implementing a Countdown Timer 









