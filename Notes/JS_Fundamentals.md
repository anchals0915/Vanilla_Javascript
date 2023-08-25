# JavaScript Fundamentals – Part 1

## Hello World!

## A Brief Introduction to JavaScript

## Linking a JavaScript File
    
    let js = "amazing";
    console.log(40 + 8 + 23 - 10);


## Values and Variables

    console.log("Jonas");
    console.log(23);
    
    let firstName = "Matilda";
    
    console.log(firstName);
    console.log(firstName);
    console.log(firstName);
    
Variable name conventions
    
    let jonas_matilda = "JM";
    let $function = 27;
    
    let person = "jonas";
    let PI = 3.1415;
    
    let myFirstJob = "Coder";
    let myCurrentJob = "Teacher";
    
    let job1 = "programmer";
    let job2 = "teacher";
    console.log(myFirstJob);
    
    
## Practice Assignments

## Data Types
| Data Type      | typeof return value | Object wrapper |
|-----------|---------------------|----------------|
| Null      | "object"            | N/A            |
| Number    | "number"            | Number         |
| Boolean   | "boolean"           | Boolean        |
| BigInt    | "bigint"            | BigInt         |
| String    | "string"            | String         |
| Symbol    | "symbol"            | Symbol         |
| Undefined | "undefined"         | N/A            |


    let javascriptIsFun = true;
    console.log(javascriptIsFun);  // Output: true
    
    console.log(typeof true);  // Output: boolean
    console.log(typeof javascriptIsFun);  // Output: boolean
    console.log(typeof 23);  // Output: number
    
    console.log(typeof 'Jonas');  // Output: string
    
    javascriptIsFun = 'YES!';
    console.log(typeof javascriptIsFun);  // Output: string
    
    let year;
    console.log(year);  // Output: undefined
    console.log(typeof year);  // Output: undefined
    
    year = 1991;
    console.log(typeof year);  // Output: number
    
    console.log(typeof null);  // Output: object
    
    


## let, const and var
| Feature   | `var`                  | `let`                       | `const`                        |
|-----------|------------------------|-----------------------------|--------------------------------|
| Scope     | Function or Global     | Block                       | Block                          |
| Hoisting  | Yes                    | No                          | No                             |
| Reassign  | Yes                    | Yes                         | No (Value is immutable)        |
| Re-declare| Yes                    | No                          | No                             |
| Example   | var x = 10;        | let y = 10;             | const z = 10;              |


    let age = 30;
    age = 31;
    
    const birthYear = 1991;
    // birthYear = 1990;
    // const job;
    
    var job = 'programmer';
    job = 'teacher'
    
    lastName = 'Schmedtmann';
    console.log(lastName);

## Basic Operators

Math operators

    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;
    console.log(ageJonas, ageSarah);
    
    console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
    // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
    
    const firstName = 'Jonas';
    const lastName = 'Schmedtmann';
    console.log(firstName + ' ' + lastName);
    
    // Assignment operators
    let x = 10 + 5; // 15
    x += 10; // x = x + 10 = 25
    x *= 4; // x = x * 4 = 100
    x++; // x = x + 1
    x--;
    x--;
    console.log(x);
    
    // Comparison operators
    console.log(ageJonas > ageSarah); // >, <, >=, <=
    console.log(ageSarah >= 18);
    
    const isFullAge = ageSarah >= 18;
    
    console.log(now - 1991 > now - 2018);




## Operator Precedence

    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;
    
    console.log(now - 1991 > now - 2018);
    
    let x, y;
    x = y = 25 - 10 - 5; // x = y = 10, x = 10
    console.log(x, y);
    
    const averageAge = (ageJonas + ageSarah) / 2;
    console.log(ageJonas, ageSarah, averageAge);

| Precedence | Operator type | Associativity | Individual operators        |
|------------|---------------|---------------|----------------------------|
| 18         | Grouping      | n/a           | ( ... )                    |
| 17         | Member Access | left-to-right | ... . ...                  |
|            | Optional chaining |              | ... ?. ...                 |
|            | Computed Member Access | n/a     | ... [ ... ]                |
|            | new (with argument list) |        | new ... ( ... )            |
|            | Function Call |              | ... ( ... )                |
| 16         | new (without argument list) | n/a | new ...                    |
| 15         | Postfix Increment | n/a         | ... ++                     |
|            | Postfix Decrement |            | ... --                     |
| 14         | Logical NOT (!) |              | ! ...                      |
|            | Bitwise NOT (~) |               | ~ ...                      |
|            | Unary plus (+)  |              | + ...                      |
|            | Unary negation (-) |          | - ...                      |
|            | Prefix Increment |             | ++ ...                     |
|            | Prefix Decrement |             | -- ...                     |
|            | typeof          |              | typeof ...                 |
|            | void            |              | void ...                   |
|            | delete          |              | delete ...                 |
|            | await           |              | await ...                  |
| 13         | Exponentiation (**) | right-to-left | ... ** ...             |
| 12         | Multiplication (*) | left-to-right | ... * ...                |
|            | Division (/)    |              | ... / ...                  |
|            | Remainder (%)   |              | ... % ...                  |
| 11         | Addition (+)    | left-to-right | ... + ...                  |
|            | Subtraction (-) |              | ... - ...                  |
| 10         | Bitwise Left Shift (<<) | left-to-right | ... << ...           |
|            | Bitwise Right Shift (>>) |        | ... >> ...                 |
|            | Bitwise Unsigned Right Shift (>>>) | | ... >>> ...             |
| 9          | Less Than (<)   | left-to-right | ... < ...                  |
|            | Less Than Or Equal (<=) |         | ... <= ...                 |
|            | Greater Than (>) |              | ... > ...                  |
|            | Greater Than Or Equal (>=) |     | ... >= ...                 |
|            | in              |              | ... in ...                 |
|            | instanceof      |              | ... instanceof ...         |
| 8          | Equality (==)   | left-to-right | ... == ...                 |
|            | Inequality (!=) |              | ... != ...                 |
|            | Strict Equality (===) |          | ... === ...                |
|            | Strict Inequality (!==) |       | ... !== ...                |
| 7          | Bitwise AND (&) | left-to-right | ... & ...                  |
| 6          | Bitwise XOR (^) |              | ... ^ ...                  |
| 5          | Bitwise OR (|)  |              | ... | ...                  |
| 4          | Logical AND (&&) | left-to-right | ... && ...                 |
| 3          | Logical OR (||)  |              | ... || ...                 |
|            | Nullish coalescing operator (??) | | ... ?? ...              |
| 2          | Assignment     | right-to-left | ... = ...                  |
|            |                |              | ... += ...                 |
|            |                |              | ... -= ...                 |
|            |                |              | ... **= ...                |
|            |                |              | ... *= ...                 |
|            |                |              | ... /= ...                 |
|            |                |              | ... %= ...                 |
|            |                |              | ... <<= ...                |
|            |                |              | ... >>= ...                |
|            |                |              | ... >>>= ...               |
|            |                |              | ... &= ...                 |
|            |                |              | ... ^= ...                 |
|            |                |              | ... |= ...                 |
|            |                |              | ... &&= ...                |
|            |                |              | ... ||= ...                |
|            |                |              | ... ??= ...                |
|            | Conditional (ternary) operator | right-to-left | ... ? ... : ... |
|            | Arrow (=>)     | right-to-left | ... => ...                 |
|            | yield          | n/a          | yield ...                  |
|            | yield*         |              | yield*

   



## A Note Challenges

### CHALLENGE #1
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1.  Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

+ TEST DATA 1: 

Marks weights 78 kg and is 1.69 m tall. 

John weights 92 kg and is 1.95 m tall.

+ TEST DATA 2: 

Marks weights 95 kg and is 1.88 m tall. 

John weights 85 kg and is 1.76 m tall.


    // const massMark = 78;
    // const heightMark = 1.69;
    // const massJohn = 92;
    // const heightJohn = 1.95;
    
    /*
    const massMark = 95;
    const heightMark = 1.88;
    const massJohn = 85;
    const heightJohn = 1.76;
    
    const BMIMark = massMark / heightMark ** 2;
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    const markHigherBMI = BMIMark > BMIJohn;
    
    console.log(BMIMark, BMIJohn, markHigherBMI);



## Strings and Template Literals
### Strings

    const firstName = 'Jonas';
    const job = 'teacher';
    const birthYear = 1991;
    const year = 2037;
    
    const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
    console.log(jonas);
    
    const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
    console.log(jonasNew);
    
    console.log(`Just a regular string...`);
    
    console.log('String with \n\
    multiple \n\
    lines');
    
    console.log(`String
    multiple
    lines`);
        
| Aspect         | Explanation                                             | Example                              |
|----------------|---------------------------------------------------------|--------------------------------------|
| Definition     | Strings are sequences of characters enclosed in quotes. | `'Hello, World!'` or `"Greetings!"`  |
| Escape Sequences | Special characters can be included using escape sequences. | `'This is a newline: \nSecond line.'` |

## Template Literals

| Aspect         | Explanation                                             | Example                              |
|----------------|---------------------------------------------------------|--------------------------------------|
| Definition     | Template literals use backticks (\``) to create strings. | `` `Hello, ${name}!` ``              |
| Variable Interpolation | Variables and expressions can be embedded using `${}`. | `` `Hello, ${name}!` ``              |
| Multiline      | Multiline strings are supported without newline characters. | `` `Line 1\nLine 2\nLine 3` ``    |
| Expression Evaluation | JavaScript expressions can be included within template literals. | `` `Sum: ${5 + 3}` ``           |
| Escaping Backticks | Backticks can be escaped using `${'``'}`. | `` `This is a backtick: \`${'`'}` `` |

## Advantages of Template Literals

1. **Variable Interpolation:** Embed variables easily within strings without concatenation.
2. **Multiline Strings:** Create multiline strings in a more readable manner.
3. **Expression Evaluation:** Include JavaScript expressions directly within strings.


## Taking Decisions: if / else Statements
### Overview
| Aspect      | Explanation                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------|
| Definition  | `if` and `else` statements are control structures used to make decisions in JavaScript.         |
| Purpose     | They allow the execution of different code blocks based on certain conditions.    |

### Syntax

| Statement   | Description                                                                                        | Example                           |
|-------------|----------------------------------------------------------------------------------------------------|-----------------------------------|
| `if`        | Executes a block of code if the specified condition is true.                                     | ```if (condition) { // code to execute }``` |
| `else`      | Executes a block of code if the preceding `if` condition is false.                               | ```if (condition) { // code to execute } else { // code to execute }``` |
| `else if`   | Used to check multiple conditions after an `if`.                                                  | ```if (condition1) { // code to execute } else if (condition2) { // code to execute }``` |



    const age = 15;
    
    if (age >= 18) {
      console.log('Sarah can start driving license 🚗');
    } else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    }


    const birthYear = 2012;
    let century;
    if (birthYear <= 2000) {
      century = 20;
    } else {
      century = 21;
    }
    console.log(century);



### CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Solution : 

    const massMark = 78;
    const heightMark = 1.69;
    const massJohn = 92;
    const heightJohn = 1.95;
    
    // const massMark = 95;
    // const heightMark = 1.88;
    // const massJohn = 85;
    // const heightJohn = 1.76;
    
    const BMIMark = massMark / heightMark ** 2;
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    console.log(BMIMark, BMIJohn);
    
    if (BMIMark > BMIJohn) 
    {
        console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
    } 
    else 
    {
        console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
    }

## Type Conversion and Coercion

### Overview

| Aspect      | Explanation                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------|
| Definition  | Type conversion and coercion are processes in JavaScript for converting data from one type to another or for performing operations with different types.   |

### Type Conversion
+ Type conversion (or typecasting) means transfer of data from one data type to another
+ Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. 
+ The source code can also explicitly require a conversion to take place.


| Conversion   | Explanation                                                                                        | Example                           |
|--------------|----------------------------------------------------------------------------------------------------|-----------------------------------|
| String       | Converts a value to a string data type.                                                         | ``` String(42)```       |
| Number       | Converts a value to a number data type.                                                         | ``` Number('5')```      |
| Boolean      | Converts a value to a boolean data type.                                                        | ``` Boolean(0)```       |

Type conversion

    const inputYear = '1991';
    console.log(Number(inputYear), inputYear);
    console.log(Number(inputYear) + 18);
    
    console.log(Number('Jonas'));
    console.log(typeof NaN);
    
    console.log(String(23), 23);
    
    const num = 42;
    const strNum = String(num);   // Converts to string '42'
    const boolNum = Boolean(num); // Converts to true (since non-zero)

### Type Coercion
+ Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
+ Type conversion is similar to type coercion because they both convert values from one data type to another 
+ one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

| Coercion     | Explanation                                                                                        | Example                           |
|--------------|----------------------------------------------------------------------------------------------------|-----------------------------------|
| Implicit     | JavaScript automatically converts data types when needed.                                        | ``` 5 + '5'```          |
| Explicit     | You manually convert data types using functions or operators.                                  | ``` Number('5') + 5```  |



Type coercion

    console.log('I am ' + 23 + ' years old');
    console.log('23' - '10' - 3);
    console.log('23' / '2');
    
    let n = '1' + 1; // '11'
    n = n - 1;
    console.log(n);


## Truthy and Falsy Values

### 5 Falsy values : 
|No.|Value | Description |
|--|---|---|
|1.| `0` | The number 0. |
|2.|  `''` | The empty string. |
|3.|  `undefined` | A variable that has not been assigned a value. |
|4.|  `null` | A special value that indicates that a value is not present. |
|5.|  `NaN` | A special value that indicates that a number is not a number. |


    console.log(Boolean(0));
    console.log(Boolean(undefined));
    console.log(Boolean('Jonas'));
    console.log(Boolean({}));
    console.log(Boolean(''));
    
    const money = 100;
    if (money) {
      console.log("Don't spend it all ;)");
    } else {
      console.log('You should get a job!');
    }
    
    let height = 0;
    if (height) {
      console.log('YAY! Height is defined');
    } else {
      console.log('Height is UNDEFINED');
    }



## Equality Operators: == vs. ===

### Equality Operators
| Operator | Description                                                                                          | Example                   |
|----------|------------------------------------------------------------------------------------------------------|---------------------------|
| `==`     | Loose equality operator. Compares values after performing type coercion.                            | `5 == '5'`                |
| `===`    | Strict equality operator. Compares values and types without type coercion.                          | `5 === '5'`               |

#### Explanation

- The **loose equality (`==`) operator** compares values after converting them to the same type. It performs type coercion, which can sometimes lead to unexpected results.

- The **strict equality (`===`) operator** compares values and types without type coercion. It provides a safer and more predictable way to check equality.

### Inequality Operators
| Operator | Description                                                                                          | Example                   |
|----------|------------------------------------------------------------------------------------------------------|---------------------------|
| `!=`     | Inequality counterpart of `==`. Checks if values are not equal after type coercion.                 | `'hello' != 42`           |
| `!==`    | Strict inequality counterpart of `===`. Checks if values or types are not equal without coercion.   | `true !== 1`              |

#### Explanation

- The **inequality operator (`!=`)** is the counterpart of `==`. It checks whether values are not equal after type coercion.

- The **strict inequality operator (`!==`)** is the counterpart of `===`. It checks whether values or types are not equal without coercion.


Remember that using the strict equality and inequality operators (`===` and `!==`) is generally preferred, as they avoid potential pitfalls associated with type coercion and lead to more reliable code comparisons.




    const age = '18';
    if (age === 18) {
        console.log('You just became an adult :D (strict)');
    }
    if (age == 18) {
        console.log('You just became an adult :D (loose)');
    }
    const favourite = Number(prompt("What's your favourite number?"));
    console.log(favourite);
    console.log(typeof favourite);

    if (favourite === 23) { // 22 === 23 -> FALSE
      console.log('Cool! 23 is an amzaing number!')
    } else if (favourite === 7) {
      console.log('7 is also a cool number')
    } else if (favourite === 9) {
      console.log('9 is also a cool number')
    } else {
      console.log('Number is not 23 or 7 or 9')
    }

    if (favourite !== 23) {
        console.log('Why not 23?');
    }





## Boolean Logic

## Logical Operators
    const hasDriversLicense = true; // A
    const hasGoodVision = true; // B
    
    console.log(hasDriversLicense && hasGoodVision);
    console.log(hasDriversLicense || hasGoodVision);
    console.log(!hasDriversLicense);
    
    if (hasDriversLicense && hasGoodVision) {
      console.log('Sarah is able to drive!');
    } else {
      console.log('Someone else should drive...');
    }
    
    const isTired = false; // C
    console.log(hasDriversLicense && hasGoodVision && isTired);
    
    if (hasDriversLicense && hasGoodVision && !isTired) {
      console.log('Sarah is able to drive!');
    } else {
      console.log('Someone else should drive...');
    }


### CHALLENGE #3

> There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
>
>1. Calculate the average score for each team, using the test data below
>2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
>
>3. BONUS 1: 
>
> Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
>> HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
>
>4. BONUS 2: 
>
>Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
>
>* TEST DATA:  
>
>>  Dolphins score 96, 108 and 89. 
>>  
>>  Koalas score 88, 91 and 110
>
>* TEST DATA BONUS 1: 
>
>>  Dolphins score 97, 112 and 101. 
>>  
>>  Koalas score 109, 95 and 123
>
>* TEST DATA BONUS 2: 
>
>>  Dolphins score 97, 112 and 101. 
>>  
>>  Koalas score 109, 95 and 106

    const scoreDolphins = (96 + 108 + 89) / 3;
    const scoreKoalas = (88 + 91 + 110) / 3;
    console.log(scoreDolphins, scoreKoalas);    
    if (scoreDolphins > scoreKoalas) {
            console.log('Dolphins win the trophy 🏆');
    } else if (scoreKoalas > scoreDolphins) {
            console.log('Koalas win the trophy 🏆');
    } else if (scoreDolphins === scoreKoalas) {
            console.log('Both win the trophy!');
    }

BONUS 1


    const scoreDolphins = (97 + 112 + 80) / 3;
    const scoreKoalas = (109 + 95 + 50) / 3;
    console.log(scoreDolphins, scoreKoalas);
    
    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
      console.log('Dolphins win the trophy 🏆');
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
      console.log('Koalas win the trophy 🏆');
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)     {
      console.log('Both win the trophy!');
    } else {
      console.log('No one wins the trophy 😭');
    }


## The switch Statement
    const day = 'friday';
    
    switch (day) {
      case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
      case 'tuesday':
        console.log('Prepare theory videos');
        break;
      case 'wednesday':
      case 'thursday':
        console.log('Write code examples');
        break;
      case 'friday':
        console.log('Record videos');
        break;
      case 'saturday':
      case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
      default:
        console.log('Not a valid day!');
    }
    
    if (day === 'monday') {
      console.log('Plan course structure');
      console.log('Go to coding meetup');
    } else if (day === 'tuesday') {
      console.log('Prepare theory videos');
    } else if (day === 'wednesday' || day === 'thursday') {
      console.log('Write code examples');
    } else if (day === 'friday') {
      console.log('Record videos');
    } else if (day === 'saturday' || day === 'sunday') {
      console.log('Enjoy the weekend :D');
    } else {
      console.log('Not a valid day!');
    }



## Statements and Expressions
    3 + 4
    1991
    true && false && !false
Eg.1 

    if (23 > 10) {
      const str = '23 is bigger';
    }

Eg.2 
    
    Eg.2 const me = 'Jonas';
    console.log(`I'm ${2037 - 1991} years old ${me}`);



## The Conditional (Ternary) Operator

### Overview

| Aspect      | Explanation                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------|
| Definition  | The conditional operator (also known as the ternary operator) is a shorthand way to write a simple if/else statement in a single line.         |
| Syntax      | `condition ? expression_if_true : expression_if_false`                                           |

### Usage

| Usage       | Explanation                                                                                        | Example                           |
|-------------|----------------------------------------------------------------------------------------------------|-----------------------------------|
| Basic       | Evaluates the condition; if true, returns the first expression; otherwise, returns the second expression. | ``` const result = age >= 18 ? 'Adult' : 'Minor'; ``` |
| Nested      | The ternary operator can also be nested for more complex conditions.                                | ``` const message = score > 90 ? 'Excellent' : (score > 70 ? 'Good' : 'Average'); ``` |


## Example
    const age = 23;
    age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

    const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
    console.log(drink);
    
    let drink2;
    if (age >= 18) {
      drink2 = 'wine 🍷';
    } else {
      drink2 = 'water 💧';
    }
    console.log(drink2);
    
    console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);



### CHALLENGE #4

>   Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
>
>1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
>
>   + TEST DATA: 
>   
>   Test for bill values 275, 40 and 430
>   
>   + HINT: 
>   
>   To calculate 20% of a value, simply multiply it by 20/100 = 0.2
>   + HINT: 
>
>Value X is between 50 and 300, if it's >= 50 && <= 300 😉

    const bill = 430;
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




## JavaScript Releases: ES5, ES6+ and ESNext

<!--  -->

# JavaScript Fundamentals – Part 2

## Activating Strict Mode

    'use strict';
    let hasDriversLicense = false;
    const passTest = true;
    
    if (passTest) hasDriversLicense = true;
    if (hasDriversLicense) console.log('I can drive :D');
    
    // const interface = 'Audio';
    // const private = 534;

## Functions
Functions

    'use strict';
    function logger() {
      console.log('My name is Jonas');
    }
    
    // calling / running / invoking function
    logger();
    logger();
    logger();
    
    function fruitProcessor(apples, oranges) {
      const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
      return juice;
    }
    
    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);
    
    const appleOrangeJuice = fruitProcessor(2, 4);
    console.log(appleOrangeJuice);
    
    const num = Number('23');


## Function Declarations vs. Expressions


Function declaration
    
    function calcAge1(birthYeah) {
      return 2037 - birthYeah;
    }
    const age1 = calcAge1(1991);

Function expression
    
    const calcAge2 = function (birthYeah) {
      return 2037 - birthYeah;
    }
    const age2 = calcAge2(1991);
    
    console.log(age1, age2);

## Arrow Functions

    const calcAge3 = birthYeah => 2037 - birthYeah;
    const age3 = calcAge3(1991);
    console.log(age3);
    
    const yearsUntilRetirement = (birthYeah, firstName) => {
      const age = 2037 - birthYeah;
      const retirement = 65 - age;
      
      // return retirement;
      return `${firstName} retires in ${retirement} years`;
    }
    
    console.log(yearsUntilRetirement(1991, 'Jonas')); 
    console.log(yearsUntilRetirement(1980 , 'Bob'));


| Feature               | Function Declaration             | Function Expression             | Arrow Function              |
|-----------------------|----------------------------------|--------------------------------|-----------------------------|
| Syntax                | `function functionName() { ... }` | `const functionName = function() { ... }` | `const functionName = () => { ... }` |
| Hoisting              | Yes                              | No                             | No (hoisted differently)   |
| Named Function        | Yes (has a name)                 | Yes (name optional)            | No (anonymous)             |
| Anonymous Function   | No (always has a name)            | Yes (name optional)            | Yes (no name allowed)      |
| Access to 'this'      | Yes (binds its own 'this')        | Yes (depends on how it's called) | No (inherits 'this' lexically) |
| Arguments Object      | Yes                              | No                             | No                         |
| Short Syntax          | No                               | No                             | Yes                        |
| Use Cases             | General functions                | Callbacks, Closures            | Concise one-liners         |





## Functions Calling Other Functions
    
    function cutFruitPieces(fruit) {
      return fruit * 4;
    }
    
    function fruitProcessor(apples, oranges) {
      const applePieces = cutFruitPieces(apples);
      const orangePieces = cutFruitPieces(oranges);
    
      const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
      return juice;
    }
    console.log(fruitProcessor(2, 3));

## Reviewing Functions
    
    const calcAge = function (birthYeah) {
      return 2037 - birthYeah;
    }
    
    const yearsUntilRetirement = function (birthYeah, firstName) {
      const age = calcAge(birthYeah);
      const retirement = 65 - age;
    
      if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
      } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
      }
    }
    
    console.log(yearsUntilRetirement(1991, 'Jonas'));
    console.log(yearsUntilRetirement(1950, 'Mike'));
    

### CHALLENGE #1
Coding Challenge #1


Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: 

Dolphins score 44, 23 and 71. 

Koalas score 65, 54 and 49

TEST DATA 2: 

Dolphins score 85, 54 and 41. 

Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

    
    const calcAverage = (a, b, c) => (a + b + c) / 3;
    console.log(calcAverage(3, 4, 5));
    
    // Test 1
    let scoreDolphins = calcAverage(44, 23, 71);
    let scoreKoalas = calcAverage(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);
    
    const checkWinner = function (avgDolphins, avgKoalas) {
      if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
      } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
      } else {
        console.log('No team wins...');
      }
    }
    checkWinner(scoreDolphins, scoreKoalas);
    
    checkWinner(576, 111);
    
    // Test 2
    scoreDolphins = calcAverage(85, 54, 41);
    scoreKoalas = calcAverage(23, 34, 27);
    console.log(scoreDolphins, scoreKoalas);
    checkWinner(scoreDolphins, scoreKoalas);
    
    
## Basic Array Operations (Methods)
### Introduction to Arrays


    const friend1 = 'Michael';
    const friend2 = 'Steven';
    const friend3 = 'Peter';
    
    const friends = ['Michael', 'Steven', 'Peter'];
    console.log(friends);
    
    const y = new Array(1991, 1984, 2008, 2020);
    
    console.log(friends[0]);
    console.log(friends[2]);
    
    console.log(friends.length);
    console.log(friends[friends.length - 1]);
    
    friends[2] = 'Jay';
    console.log(friends);
    // friends = ['Bob', 'Alice']
    
    const firstName = 'Jonas';
    const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
    console.log(jonas);
    console.log(jonas.length);

#### Creating Arrays in JavaScript

| Method                  | Description                                                    | Example                            |
|-------------------------|----------------------------------------------------------------|------------------------------------|
| **Array Literal**       | Creating an array using square brackets and adding elements.  | `const numbers = [1, 2, 3];`       |
| **Array Constructor**   | Creating an array using the `Array` constructor.              | `const colors = new Array('red', 'green', 'blue');` |
| **`Array.from()`**      | Creating an array from an iterable object (e.g., string, set). | `const arr = Array.from('hello');` |
| **`Array.of()`**        | Creating an array from individual arguments.                 | `const arr = Array.of(1, 2, 3);`   |
| **`Array()` Constructor** | Creating an array with a specified length.                   | `const arr = Array(5);`            |


__Exercise__
    
    const calcAge = function (birthYeah) {
      return 2037 - birthYeah;
    }
    const years = [1990, 1967, 2002, 2010, 2018];
    
    const age1 = calcAge(years[0]);
    const age2 = calcAge(years[1]);
    const age3 = calcAge(years[years.length - 1]);
    console.log(age1, age2, age3);
    
    const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
    console.log(ages);


### Basic Array Operations (Methods)
    const friends = ['Michael', 'Steven', 'Peter'];

#### Add Elements
| Function  | Description                                                                                                   | Parameters                   | Return Value          | Example Usage                   |
|-----------|---------------------------------------------------------------------------------------------------------------|------------------------------|-----------------------|--------------------------------|
| `push`    | Adds one or more elements to the end of an array and returns the new length of the array.                 | Elements to be added        | New length of array   | `arr.push(4);`                |
| `unshift` | Adds one or more elements to the beginning of an array and shifts the existing elements to higher indices.| Elements to be added        | New length of array   | `arr.unshift(0);`             |


    const newLength = friends.push('Jay');
    console.log(friends);
    console.log(newLength);
    
    friends.unshift('John');
    console.log(friends);

#### Remove Elements
| Function  | Description                                                                                                   | Parameters                   | Return Value          | Example Usage                   |
|-----------|---------------------------------------------------------------------------------------------------------------|------------------------------|-----------------------|--------------------------------|
| `pop`     | Removes the last element from an array and returns that element.                                           | None                         | The popped element    | `const popped = arr.pop();`   |
| `shift`   | Removes the first element from an array and shifts the remaining elements to lower indices.                | None                         | The shifted element   | `const arr = [1, 2, 3]; arr.shift();` |


    friends.pop(); // Last
    const popped = friends.pop();
    console.log(popped);
    console.log(friends);
    
    friends.shift(); // First
    console.log(friends);
    
    console.log(friends.indexOf('Steven'));
    console.log(friends.indexOf('Bob'));
    
    friends.push(23);

#### Includes 
| Function  | Description                                                                                                   | Parameters                   | Return Value          | Example Usage                   |
|-----------|---------------------------------------------------------------------------------------------------------------|------------------------------|-----------------------|--------------------------------|
| `includes`| Checks if an array includes a certain element and returns `true` if found, `false` otherwise.             | Element to be checked       | Boolean               | `const includesElement = arr.includes(3);` |

    console.log(friends.includes('Steven'));
    console.log(friends.includes('Bob'));
    console.log(friends.includes(23));

    if (friends.includes('Steven')) {
        console.log('You have a friend called Steven');
    }
    




### CHALLENGE #2
Coding Challenge #2

> Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
>
> 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
>
>> TEST DATA: 125, 555 and 44
>>
>> HINT:
>>
>> Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

    
    const calcTip = function (bill) {
      return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    }
    // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    
    console.log(bills, tips, totals);



## Introduction to Objects

    const jonasArray = [
      'Jonas',
      'Schmedtmann',
      2037 - 1991,
      'teacher',
      ['Michael', 'Peter', 'Steven']
    ];
    
    const jonas = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      age: 2037 - 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven']
    };


## Dot vs. Bracket Notation


    const jonas = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      age: 2037 - 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven']
    };
    console.log(jonas);
    
    console.log(jonas.lastName);
    console.log(jonas['lastName']);
    
    const nameKey = 'Name';
    console.log(jonas['first' + nameKey]);
    console.log(jonas['last' + nameKey]);
    
    // console.log(jonas.'last' + nameKey)
    
    const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

    if (jonas[interestedIn]) {
      console.log(jonas[interestedIn]);
    } else {
      console.log('Wrong request! Choose between firstName, lastName, age, job, and     friends');
    }
    
    jonas.location = 'Portugal';
    jonas['twitter'] = '@jonasschmedtman';
    console.log(jonas);




#### Challenge
    // "Jonas has 3 friends, and his best friend is called Michael"
    
    console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


## Object Methods

#### Object Methods

    const jonas = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      birthYeah: 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven'],
      hasDriversLicense: true,
    
      // calcAge: function (birthYeah) {
      //   return 2037 - birthYeah;
      // }
    
      // calcAge: function () {
      //   // console.log(this);
      //   return 2037 - this.birthYeah;
      // }
    
    
     calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
     },
    
     getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
        }
    };
    
    console.log(jonas.calcAge());
    
    console.log(jonas.age);
    console.log(jonas.age);
    console.log(jonas.age);




### Challenge

    // "Jonas is a 46-year old teacher, and he has a driver's license"
    console.log(jonas.getSummary());


### CHALLENGE #3

#### Coding Challenge #3

>   Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
>   
>1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2.  Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
>
>>  TEST DATA:
>>
>>  Marks weights 78 kg and is 1.69 m tall. 
>>
>>  John weights 92 kg and is 1.95 m tall.
>
    const mark = {
      fullName: 'Mark Miller',
      mass: 78,
      height: 1.69,
      calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
      }
    };
    
    const john = {
      fullName: 'John Smith',
      mass: 92,
      height: 1.95,
      calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
      }
    };
    
    mark.calcBMI();
    john.calcBMI();
    
    console.log(mark.bmi, john.bmi);
    
    // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
    
    if (mark.bmi > john.bmi) {
      console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
    } else if (john.bmi > mark.bmi) {
      console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
    }


## Iteration: The for Loop

    console.log('Lifting weights repetition 1 🏋️‍♀️');
    console.log('Lifting weights repetition 2 🏋️‍♀️');
    console.log('Lifting weights repetition 3 🏋️‍♀️');
    console.log('Lifting weights repetition 4 🏋️‍♀️');
    console.log('Lifting weights repetition 5 🏋️‍♀️');
    console.log('Lifting weights repetition 6 🏋️‍♀️');
    console.log('Lifting weights repetition 7 🏋️‍♀️');
    console.log('Lifting weights repetition 8 🏋️‍♀️');
    console.log('Lifting weights repetition 9 🏋️‍♀️');
    console.log('Lifting weights repetition 10 🏋️‍♀️');
    
+ for loop keeps running while condition is TRUE

        for (let rep = 1; rep <= 30; rep++) {
          console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
        }


## Looping Arrays, Breaking and Continuing

    const jonas = [
      'Jonas',
      'Schmedtmann',
      2037 - 1991,
      'teacher',
      ['Michael', 'Peter', 'Steven'],
      true
    ];
    const types = [];
    
    // console.log(jonas[0])
    // console.log(jonas[1])
    // ...
    // console.log(jonas[4])
    // jonas[5] does NOT exist
    
    for (let i = 0; i < jonas.length; i++) {
      // Reading from jonas array
      console.log(jonas[i], typeof jonas[i]);
    
      // Filling types array
      // types[i] = typeof jonas[i];
      types.push(typeof jonas[i]);
    }
    
    console.log(types);
    
    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    
    for (let i = 0; i < years.length; i++) {
      ages.push(2037 - years[i]);
    }
    console.log(ages);
    
    
Continue and break
    
    console.log('--- ONLY STRINGS ---')
    for (let i = 0; i < jonas.length; i++) {
      if (typeof jonas[i] !== 'string') continue;
    
      console.log(jonas[i], typeof jonas[i]);
    }
    
BREAK WITH NUMBER

    console.log('--- BREAK WITH NUMBER ---')
    for (let i = 0; i < jonas.length; i++) {
      if (typeof jonas[i] === 'number') break;
    
      console.log(jonas[i], typeof jonas[i]);
    }


## Looping Backwards and Loops in Loops

    const jonas = [
      'Jonas',
      'Schmedtmann',
      2037 - 1991,
      'teacher',
      ['Michael', 'Peter', 'Steven'],
      true
    ];
    
    // 0, 1, ..., 4
    // 4, 3, ..., 0
    
    for (let i = jonas.length - 1; i >= 0; i--) {
      console.log(i, jonas[i]);
    }
    
    for (let exercise = 1; exercise < 4; exercise++) {
      console.log(`-------- Starting exercise ${exercise}`);
    
      for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
      }
    }


## The while Loop

    for (let rep = 1; rep <= 10; rep++) {
      console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
    
    let rep = 1;
    while (rep <= 10) {
      // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
      rep++;
    }
    
    let dice = Math.trunc(Math.random() * 6) + 1;
    
    while (dice !== 6) {
      console.log(`You rolled a ${dice}`);
      dice = Math.trunc(Math.random() * 6) + 1;
      if (dice === 6) console.log('Loop is about to end...');
    }



### CHALLENGE #4


>Let's improve Steven's tip calculator even more, this time using loops!
>
>1. Create an array 'bills' containing all 10 test bill values
>
>2. Create empty arrays for the tips and the totals ('tips' and 'totals')
>3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and >total values (bill + tip) for every bill value in the bills array. Use a for loop to >perform the 10 calculations!
>
>>TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
>>
>>HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
>
>4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an >argument. This function calculates the average of all numbers in the given array. This >is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
>    
>    4.1. First, you will need to add up all values in the array. To do the addition, >start by creating a variable 'sum' that starts at 0. Then loop over the array using a >for loop. In each iteration, add the current value to the 'sum' variable. This way, by >the end of the loop, you have all values added together
>    
>    4.2. To calculate the average, divide the sum you calculated before by the length >of the array (because that's the number of elements)
>    
>    4.3. Call the function with the 'totals' array


    
        const calcTip = function (bill) {
          return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
        }
        
        const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
        const tips = [];
        const totals = [];
        
        
        for (let i = 0; i < bills.length; i++) {
          const tip = calcTip(bills[i]);
          tips.push(tip);
          totals.push(tip + bills[i]);
        }
        console.log(bills, tips, totals);
        
        
        const calcAverage = function (arr) {
          let sum = 0;
          for (let i = 0; i < arr.length; i++) {
            // sum = sum + arr[i];
            sum += arr[i];
          }
          return sum / arr.length;
        }
        
        console.log(calcAverage([2, 3, 7]));
        console.log(calcAverage(totals));
        console.log(calcAverage(tips));
    





<!--  -->
# JavaScript in the Browser DOM and Events Fundamentals


# PROJECT #1: Guess My Number!

## What's the DOM and DOM Manipulation

## Selecting and Manipulating Elements

## Handling Click Events

## Implementing the Game Logic

## Manipulating CSS Styles

### Coding Challenge #1

## Implementing Highscores

## Refactoring Our Code: The DRY Principle

# PROJECT #2: Modal Window

## Working With Classes

## Handling an "Esc" Keypress Event

# Project #3 Pig Game

## Rolling the Dice

## Switching the Active Player

## Holding Current Score

## Resetting the Game


<!--  -->

# How JavaScript Works Behind the Scenes

## An High-Level Overview of JavaScript

## The JavaScript Engine and Runtime

## Execution Contexts and The Call Stack

## Preview

## Scoping in Practice

## Variable Environment: Hoisting and The TDZ

## Hoisting and TDZ in Practice

## The this Keyword

## The this Keyword in Practice

## Regular Functions vs. Arrow Functions

## Primitives vs. Objects (Primitive vs. Reference Types)


<!--  -->
# Data Structures, Modern Operators


## Destructuring Arrays
## Destructuring Objects
## The Spread Operator (...)
## Rest Pattern and Parameters
## Short Circuiting (&& and ||)
## The Nullish Coalescing Operator (??)
## Logical Assignment Operators
## Coding Challenge #1
## Looping Arrays: The for-of Loop
## Enhanced Object Literals
## Optional Chaining (?.)
## Looping Objects: Object Keys, Values, and Entries
## Coding Challenge #2
## Sets
## Maps: Fundamentals
## Maps: Iteration
## Summary: Which Data Structure to Use?
## Coding Challenge #3
## Working With Strings - Part 1
## Working With Strings - Part 2
## Working With Strings - Part 3
## Coding Challenge #4
## String Methods Practice


<!--  -->
# Functions 
## Section Intro
## Section Roadmap
## Default Parameters
## How Passing Arguments Works: Value vs. Reference
## First-Class and Higher-Order Functions
## Functions Accepting Callback Functions
## Functions Returning Functions
## The call and apply Methods
## The bind Method
## Coding Challenge #1
## Immediately Invoked Function Expressions (IIFE)
## Preview
## More Closure Examples
## Coding Challenge #2

This question is intended as an introduction to JavaScript functions. This editorial will cover their syntax and topics like closures and higher-order functions.

If you are new to JavaScript, it is recommended you follow along with the code examples. You can do this by pasting code into the LeetCode playground.

An awesome thing about JavaScript is your browser has a built-in execution environment. You can read more on how to execute code within your browser (and view a website's code) here.

Function Syntax
In JavaScript, there are two main ways to declare a function. One of which is to use the function keyword.

Basic Syntax
The syntax is:

function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7

In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.

Anonymous Function
You can optionally exclude the name of the function after the function keyword.

var f = function(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7

Immediately Invoked Function Expression (IIFE)
You can create a function and immediately execute it in Javascript.

const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7
Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body.

Functions Within Functions
A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
In this example, createFunction() returns a new function. Then that function can be used as normal.

Function Hoisting
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax.

function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7
In this example, the function is returned before it is initialized. Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability.

Closures
An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior.

Arrow Syntax
The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax.

Basic Syntax
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
In this example, f is the name of the function. (a, b) are the arguments. You can write any logic in the body and finally return a result. You are allowed to return nothing, and it will instead implicitly return undefined.

Omit Return
If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
Differences
There are 3 major differences between arrow syntax and function syntax.

1.  More minimalistic syntax. This is especially true for anonymous functions and single-line functions. For this reason, this way is generally preferred when passing short anonymous functions to other functions.
2.  No automatic hoisting. You are only allowed to use the function after it was declared. This is generally considered a good thing for readability.
3.  Can't be bound to this, super, and arguments or be used as a constructor. These are all complex topics in themselves but the basic takeaway should be that arrow functions are simpler in their feature set. You can read more about these differences here.
The choice of arrow syntax versus function syntax is primarily down to preference and your project's stylistic standards.

Rest Arguments
You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems. You can read more about ... syntax here.

Basic Syntax
The syntax is:

function f(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(f(3, 4)); // 7
In this example the variable args is [3, 4].

Why
It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.

The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.

By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.

For example, you can create a logged function factory:

function log(inputFunction) {
  return function(...args) {
     console.log("Input", args);
     const result = inputFunction(...args);
     console.log("Output", result);
     return result;
  }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3

Solutions to Problem
Now let's apply these different ways of writing JavaScript functions to solve this problem.

Function Syntax
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};


Arrow Syntax
var createHelloWorld = function() {
    return () => "Hello World";
};


Arrow Syntax + Rest Arguments
var createHelloWorld = function() {
    return (...args) => "Hello World";
};



Introduction to closures. 

In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. 
These scopes are known as the function's lexical environment. The combination of the function and it's environment is known as a closure.

Closure Example
In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  }
}
const addTo2 = createAdder(2);
addTo2(5); // 7

The inner function add has access to a. 
This allows the outer function to serve as a factory of new functions, each with different behavior.

Closures VS Classes
You may notice that in the above example createAdder is very similar to a class constructor.

class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

One key difference is that closures allow for true encapsulation. In the class example, there is nothing stopping you from writing addTo2.a = 3; and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access a. Note that as of 2022, true encapsulation is achievable in classes with # prefix syntax.

Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods.

Unlike in languages like Java, you will tend to see code written with functions rather than with classes. But since JavaScript is a multi-paradigm language, it will depend on the particular project you are working on.

Approach 1: Increment Then Return
We declare a variable currentCount and set it equal to n - 1. Then inside the counter function, increment currentCount and return the value. Note that since currentCount is modified, it should be declared with let rather than const.

Implementation
var createCounter = function(n) {
  let currentCount = n - 1;
  return function() {
    currentCount += 1;
    return currentCount;      
  };
};



Approach 2: Postfix Increment Syntax
JavaScript provides convenient syntax that returns a value and then increments it. This allows us to avoid having to initially set a variable to n - 1.

Implementation
var createCounter = function(n) {
  return function() {
    return n++;      
  };
};


Approach 3: Prefix Decrement and Increment Syntax
JavaScript also has syntax that allows you to increment a value and then return it. Because the increment happens before the value is returned, we must first decrement the value initially similar to Approach 1.

Implementation
var createCounter = function(n) {
  return function() {
    return n++;      
  };
};


Approach 4: Postfix Increment Syntax With Arrow Function
We can reduce the amount of code in Approach 2 by using an arrow function with an implicit return.

Implementation
var createCounter = function(n) {
  return () => n++;
};



Day3=O(1)>Solving it in 3 different ways and which one is the best way??
Cosmic_Phantom
May LeetCoding Challenge
4055
19709
May 07, 2023
JavaScript
From the question we can decipher that we need to have three functions increment(), decrement() and reset(). Now let's think which one will be appropriate method to solve this question.

1. Using Traditional Function
A traditional function is defined using the function keyword. It can be a named function or an anonymous function assigned to a variable.
In the following code we have created three functions increment(), decrement() and reset() using the function keyword. Inside this function we need to do the appropriate operation that was instructed in the question i.e. for increment() we need to return the currentvalue+1, similarly in decrement() we need to return the currentvalue-1 and in reset() we need to assign originalvalue to the currentvalue.
var createCounter = function(init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
      return --presentCount;
  }

  function reset() {
      return (presentCount = init);
  }

  return { increment, decrement, reset };
};
Time and Space: O(1)

2. Using Arrow Function
An arrow function is a shorter syntax for defining functions, introduced in ES6.
It uses the => syntax instead of the function keyword, and has some differences in behavior compared to traditional functions, such as inheriting the this value from the surrounding context
For better understanding please read this posts : Arrow function(6min read) by @Jatin and Closure on Counter-1(8min read) problem by @Jatin
var createCounter = function(init) {
    let presentCount = init
    return {
        increment:()=> ++presentCount,
        decrement:()=> --presentCount,
        reset:()=> presentCount = init,
    }
};
Time and Space: O(1)

3. Using Class
A class is a template for creating objects with a set of properties and methods.

In ES6, classes were introduced as syntactic sugar over the prototype-based inheritance model but shortly after that It provided a way to support inheritance and can have static methods and properties, getters and setters, and more. Thus they provided a way to write object-oriented code in a more concise and organized way.

In the following example the Couter is the name of the class.

The constructor method is a special method that is called when an object is created based on the class.
It initializes the object with properties init and presentCount. The increment(), decrement()and reset() method are regular methods that can be called on an instance of the Counter class to get the output
To create an object based on a class we use the new operator i.e. we create an object called createCounter based on the Counter class, passing in the init value as arguments to the constructor.
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter = function(init) {
  return new Counter(init);
};
Time and Space: O(1)

In conclusion which one is the better way??
Classes are useful for creating objects with shared behavior.
Traditional functions are useful for reusable chunks of code
Arrow functions are useful for short, concise functions or when preserving the value of this is important.
Thus, I believe that classes are the best way to implement this types of problems in real life as they give flexibility of scaling with the shared behaviour properties.





<!-- Wroking wuth Arrays  -->
# PROJECT Bankist App
## Simple Array Methods
## Array Methods in JavaScript

### Methods Creating a New Array:

| Method            | Description                                                                                              | Example                                                       | Returns                                    |
|-------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------|
| **`concat()`**    | Combines two or more arrays and returns a new array.                                                  | `const newArray = array.concat(otherArray);`                | New array with combined elements            |
| **`slice()`**     | Creates a new array by extracting elements from an existing array based on start and end indices.     | `const newArray = array.slice(1, 3);`                       | New array with extracted elements           |

### Methods Modifying the Original Array:

| Method            | Description                                                                                              | Example                                                       | Returns                                    |
|-------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------|
| **`push()`**      | Adds one or more elements to the end of an array and returns the new length.                           | `array.push('apple', 'banana');`                             | New length of the array                    |
| **`pop()`**       | Removes the last element from the end of an array and returns the removed element.                     | `const removed = array.pop();`                              | Removed element                           |
| **`shift()`**     | Removes the first element from the beginning of an array and returns the removed element.               | `const removed = array.shift();`                            | Removed element                           |
| **`unshift()`**   | Adds one or more elements to the beginning of an array and returns the new length.                     | `array.unshift('orange', 'grape');`                         | New length of the array                    |
| **`splice()`**    | Adds or removes elements at a specific index and returns an array of removed elements.                 | `array.splice(2, 1, 'pear');`                               | Array of removed elements                  |

### Methods Checking Array Elements:

| Method            | Description                                                                                              | Example                                                       | Returns                                    |
|-------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------|
| **`indexOf()`**   | Returns the first index at which a specified element is found in an array, or -1 if not found.         | `const index = array.indexOf('banana');`                    | Index of the found element or -1            |
| **`forEach()`**   | Executes a provided function once for each array element.                                            | `array.forEach(function(item) { console.log(item); });`     | `undefined` (does not create a new array) |

## The new at Method
## Looping Arrays: forEach
## forEach With Maps and Sets
## Preview
## Creating DOM Elements
## Coding Challenge #1
## Data Transformations: map, filter, reduce
## The map Method
## Computing Usernames
## The filter Method
## The reduce Method
## Coding Challenge #2
## The Magic of Chaining Methods
## Coding Challenge #3
## The find Method
## Implementing Login
## Implementing Transfers
## The findIndex Method
## some and every
## flat and flatMap
## Sorting Arrays
## More Ways of Creating and Filling Arrays
## Summary: Which Array Method to Use?
## Array Methods Practice
## Coding Challenge #4


# 

Section Intro
Section Roadmap
Converting and Checking Numbers
Math and Rounding
The Remainder Operator
Numeric Separators
Working with BigInt
Creating Dates
Adding Dates to "Bankist" App
Operations With Dates
Internationalizing Dates (Intl)
Internationalizing Numbers (Intl)
Timers: setTimeout and setInterval
Implementing a Countdown Timer


# 
Section Roadmap
Preview
How the DOM Really Works
Selecting, Creating, and Deleting Elements
Styles, Attributes and Classes
Implementing Smooth Scrolling
Types of Events and Event Handlers
Event Propagation: Bubbling and Capturing
Event Propagation in Practice
Event Delegation: Implementing Page Navigation
DOM Traversing
Building a Tabbed Component
Passing Arguments to Event Handlers
Implementing a Sticky Navigation: The Scroll Event
A Better Way: The Intersection Observer API
24:00
Revealing Elements on Scroll
12:39
Lazy Loading Images
18:30
Building a Slider Component: Part 1
23:16
Building a Slider Component: Part 2
19:35
Lifecycle DOM Events
09:26
Efficient Script Loading: defer and async
13:30

