/*
Multi-Line comment



/////////////////////////////////////////////////////
// 24/02/2025
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";

// $ and _ are not illegal chars
let $function = 27;
let _function = 27;

// Constants: UPPERCASE
let PI = 3.1415



/////////////////////////////////////////////////////
// let, const and var
// Declaring variables: let
let myFirstJob = "Coder"
let myCurrentJob = "Teacher";

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// Boolean values:
true;
let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);



/////////////////////////////////////////////////////
// Declaring variables
let age = 30;
age = 31;

// Variables that we don't want to change: const
const birthYear = 1991;
// birthYear = 1990;

// this is not legal, it needs to be initiated:
// const job;

// Keyword var: for legacy code (Prior to ES6)
// you should never use var
var job = 'programmer';
job = 'teacher';

// JS will declare a var on the global object (NOT RECOMMENDED)
lastName = 'Schmedtmann';
console.log(lastName);



/////////////////////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schemdtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1
x--;
console.log(x);

// Comparison operators: >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// This works fine:
console.log(now - 1991 > now - 2019);



/////////////////////////////////////////////////////
// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991, now - 2018);

let x, y;
x = y = 25 - 10 - 5;
// right-to-left: x = y = 10, x = 10
// otherwise x = y and y is undefined
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



/////////////////////////////////////////////////////
// CHALLENGE #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK!!
*/

/*
let massMark = 78, heightMark = 1.69, massJohn = 92, heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn ** 2);
let markHigherBMI = BMIMark > BMIJohn;

console.log('Mark:', BMIMark);
console.log('John:', BMIJohn);
console.log('Mark > John:', markHigherBMI);



/////////////////////////////////////////////////////
// Strings and template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// Legacy
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// ECM6: Template literals ``
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// backticks: some people use them always
console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines 2`);



/////////////////////////////////////////////////////
// Taking Decisions: if/else Statements
const age = 14;
const isOldEnough = age >= 18;

// add an emoji on Windows: Windows key + .
// if-else control structure
if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :D`)
}

if (age == 14) {
    console.log('Sarah is in the age of love 💗');
}


const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Century: ${century}`);



/////////////////////////////////////////////////////
// CHALLENGE #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK!
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck!

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!"`);
} else if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
    console.log(`Mark's BMI (${BMIMark}) == John's BMI (${BMIJohn})`);
}



/////////////////////////////////////////////////////
// 25/02/2025
// Type conversion and coercion
// - Type conversion: to manually convert from one type to another
// - Type coercion: when javascript automatically converts types behind the scenes

// string
const inputYear = '1991';


// type conversion
// number, string
console.log(Number(inputYear), inputYear);
// string concatenation
console.log(inputYear + 18);
// number concatenation
console.log(Number(inputYear) + 18);
// NaN: Not a Number (truly: invalid number)
console.log(Number('Jonas'));
console.log(typeof NaN);
// number, string
console.log(23, String(23));


// type coercion
console.log('I am ' + 23 + ' years old');
// idem to
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');
// math minus (-, *, /) operators trigger an inverse coercion
console.log('23' - '10' - 3);
// math plus (+) operator triggers string concatenation
console.log('23' + '10' + 3);


let n = '1' + 1;  // 11
n = n - 1;        // 11-1
console.log(n);   // 10
console.log(2 + 3 + 4 + '5'); // 9 + '5'
console.log('10' - '4' - '3' - 2 + '5'); // 1 + '5'



/////////////////////////////////////////////////////
// Truthy and Falsy Values
// There are 5 falsy values: 0, '', undefined, null, NaN
// Conversion to Boolean is always implicit: type coercion

console.log("Falsy Values:")
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("\nTruthy values")
console.log(Boolean('Jonas'));
console.log(Boolean({}));


// Falsy coercion:
const money = 30;
if (money) {
    console.log("Don't spend it all D:");
} else {
    console.log('You should get a job!');
}


// bug, when height = 0 it is still defined:
let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}



/////////////////////////////////////////////////////
// Equality Operators: == vs ===

// === strict equality operator: it does not perform type coercion
if (18 === 18) console.log("(Strict Operator), Congratulations! You just became an adult 👌")

// == loose equality operator: it performs type coercion
// Avoid using the loose equality operator (==) as much as you can, pretend it doesn't even exist
if ('18' == 18) console.log("(Loose Operator), type coercion :(")


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 are the sins');
} else if (favourite === 99) {
    console.log('99 is a heavenly number');
} else {
    console.log("Number not kool");
}

if (favourite !== 13) console.log('Why not 13?');



/////////////////////////////////////////////////////
// Boolean logic & Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasGoodVision && hasGoodVision);
console.log(hasGoodVision || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; // C
console.log(hasGoodVision && hasGoodVision && isTired);

if (hasGoodVision && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}



/////////////////////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀!!

*/
/*

let scoreDolphins = (97 + 112 + 81) / 3;
let scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy 😭");
}



/////////////////////////////////////////////////////
// 26. The Switch Statement

let day = prompt('1. Day of the week: ');

// case does a strict comparison (===)
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
        console.log('NOT A VALID DAY!')
}


// same thing done b4 but with if-else

day = prompt('2. Day of the week: ');

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesdaty' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('NOT A VALID DAY!')
}



/////////////////////////////////////////////////////
// 27. Statements and Expressions

// Expression: words that make up the sentences
// 3 + 4
// 1991
// true && false && !false

// Declaration: complete sentences

// We write our programs as a sequence of actions: Statements,
// for example the if/else statement, switch statement
if (23 > 10) {
    const str = '23 is bigger';
    // this string here is an expression: '23 is bigger'
    // this whole line of code is an statement: const str = '23 is bigger';
    // usually when sthing ends with a semicolon, it is an statement: a complete sentence
}

// in a template literal (``) you can only introduce expressions but not statements
const expression = 'Me'
console.log(`I'm ${2037 - 1991} years old ${expression}`);



/////////////////////////////////////////////////////
*/
// 28. The conditional (ternary) operator

const age = 17;
age >= 18 ? console.log('I like to drink beer 🍻') : console.log('I like to drink water 🌊💧');

// an expression that produces a value:
const drink = age >= 18 ? 'beer 🍻' : 'water 🌊💧';
console.log(drink);

// equivalent to:
let drink2;
if (age >= 18) {
    drink2 = 'beer 🍻';
} else {
    drink2 = 'water 🌊💧';
}

console.log(drink2);

// using the ternary operator, which produces a value, we can have conditionals inside of a template literal
console.log(`I like to drink ${age >= 18 ? 'beer 🍻' : 'water 🌊💧'}`)



/////////////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 275;

/* Write your code below. Good luck! 🙂 */
let tip = ((bill >= 50 && bill <= 300) ? bill * 15 / 100 : bill * 20 / 100);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



/////////////////////////////////////////////////////
// 30. JavaScript Releases: ES5, ES6+ and ESNext
// Teoria e historia de JavaScript, es backwards compatible para no romper la web, pero no es forwards compatible

// https://compat-table.github.io/compat-table/es6/