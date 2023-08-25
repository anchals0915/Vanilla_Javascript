# Simple Array Methods 
let arr = ['a', 'b', 'c', 'd', 'e'] ;

### SLICE 
    console.log( arr.slice(2));
    console.log( arr.slice(2, 4) );
    console.log( arr.slice(-2) );
    console.log( arr.slice(-1) );
    console.log( arr.slice(1,-2) );

>#### Copy of an array 
    console.log( arr.slice() );
    console.log( [...arr] );


### SPLICE 

    console.log( arr.splice(2) );
    arr.splice(-1) ;
    console.log( arr );
    
    arr.splice(1,2) ;
    console.log( arr );

### REVERSE

    arr= ['a', 'b', 'c', 'd', 'e'] ;
    const arr2 = ['j', 'i', 'h', 'g', 'f'] ;
    console.log( arr2.reverse() );
    console.log( arr2 );

### CONCAT 
    const letters = arr.concat(arr2) ;
    console.log( letters );
    console.log( [...arr, ...arr2 ] );

### JOIN
    console.log( letters.join('-'));

# The new at method 

    const arr = [23,11,64] ;
    console.log( arr[0] );  //23
    console.log( arr.at(0) );   //23

### Getting the last element 
    console.log( arr[arr.length-1] ); //64
    console.log( arr.slice(-1)[0] ); //64
    console.log( arr.at(-1) ); //64
    
    console.log( 'Anchal'.at(0));
    console.log( 'Anchal'.at(-1));



# The Looping Arrays forEach 

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
        
    movements.forEach( function(movement, index, array) 
    {
        if( movement> 0) 
        {
            console.log(`Movement ${index+1}: You deposited ${movement} `);
        }   else 
        {
            console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement) } `);
        }
    } ) ;


        //  0: anymous function(200)
        //  1: function(450)
        //  2: function(400)



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

    
  

In summary, the `for...of` loop is a general-purpose loop for iterating over any iterable object (like arrays, strings) without direct access to the index. 

On the other hand, the `forEach` method is specifically designed for arrays, provides direct access to the index, and offers a more concise way to work with array elements.


# forEach With Maps and Sets
## forEach on Map

    const currencies = new Map([
        ["USD", "United States dollar"],
        ["EUR", "Euro"],
        ["GBP", "Pound sterling"],
    ]);
    
    currencies.forEach( function(value, key, map ) {
        console.log(`${key}: ${value}`);
    })

## forEach on Set
    const currenciesUnique = new Set( ['USD' , 'GBP', 'USD', 'EUR', 'EUR']) ; //Creating a Set
    console.log( currenciesUnique );


    currenciesUnique.forEach( function (value , key, map ) 
    {
        console.log(`${key}: ${value}`); //Printing the Set
    })


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




# Coding Challenge #1


Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

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


    // Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
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




## Data Transformation : Map , Filter , Reduce 

 
## Map
// map will give a brand new aray
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



## The Filter Method 

+ The filter() method takes an array and returns a new array with the elements that meet a certain condition. 

+ The condition is specified as a function, which is called once for each element of 
the array. 
    + If the function returns true, 
       + the element is included in the new array. 
    * If the function returns false, the element is not included in the new array.
    
    
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
    


## The reduce method 

* The reduce() method takes an array and applies a function to the elements of the array, reducing them to a single value. 
* The function is called repeatedly, with the result of the previous call passed as 
the first argument to the next call. 
* The function must return a value, which is the final result of the reduction.


        const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300];
        console.log( movements );
    
        // accumulator --> is like a snow ball
        // const balance = movements.reduce(function( accumalator, current , index , arr) {
        //     console.log(`Iteration ${index}: ${accumalator}`);
        //     return accumalator + current ;    
        // },0);
        
        const balance = movements.reduce( (accumalator, current) => accumalator + current ,0);
        console.log( balance );
        
        
        let balance2 = 0 ; 
        for(const mov of movements) {
            balance2 += mov ;
        }
        console.log( balance2 );


// Maximum Value 







#  Coding Challenge #2 

# The Magic of Chaining Methods

# Coding Challege #3

# The find method 


# flat and flatMap
Method	Description	Equivalent to	Takes a function as an argument	Returns an array
flat	Flattens an array to a single level.	array.map().flat()	No	Yes
flatMap	Flattens an array and then applies a function to each element.	array.map(function(element) { return [element]; }).flat()	Yes	Yes
