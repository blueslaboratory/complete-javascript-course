'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 12/03/2025
// 133. Default Parameters

console.log('\n133. Default Parameters');

const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers) {
    
    // Default Parameters before ES6: undefined are falsy values
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 444);
createBooking('LH123', 2)

// Skipping a parameter:
createBooking('LH123', undefined, 1000);



/////////////////////////////////////////////////////
// 134. How Passing Arguments Works: Value vs. Reference

console.log('\n134. How Passing Arguments Works: Value vs. Reference');

const flight = 'LH234';
const blue = {
    name: 'Blues\'s Laboratory',
    passport: 5555
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    // passenger object and blue object are the same object
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 5555) {
        // alert('Checked in');
        console.log('Checked in');
    } else {
        // alert('Wrong passport!');
        console.log('Wrong passport!');
    }
};

checkIn(flight, blue);
console.log(flight);
console.log(blue);

console.log('\n- Is the same as doing...');
console.log('(we are really copying the reference!):');
const flightNum = flight;
const passenger = blue;
console.log(flightNum, passenger);

console.log('\n- blue and person reference the same object:');
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000);
}

newPassport(blue);
console.log(blue);
checkIn(flight, blue);

// JS does not have passing by reference, only passing by value

// Primitive types (like numbers, strings, booleans, etc.) are passed by value.
// Objects (including arrays and functions) are also passed by value—but the value is a reference to the object.
console.log('\n- Example 1:');
function changeValue(a) {
    a = 10;
}
  
let a = 5;
changeValue(a);
// Output: 5 (unchanged):
console.log(a); 


console.log('\n- Example 2:');
function changeObject(obj) {
    obj.name = "Alice";
}
  
let bob = {
    name: "Bob"
};
changeObject(bob);
// Output: "Alice" (changed!):
console.log(bob.name); 


console.log('\n- Example 3:');
function reassignObject(obj) {
    // Assigning a new object:
    obj = { 
        name: "Charlie" 
    }; 
}
  
let spencer = { 
    name: "Spencer" 
};
reassignObject(spencer);
// Output: "Spencer" (unchanged):
console.log(spencer.name);



/////////////////////////////////////////////////////
// 135. First-Class and Higher-Order Functions

console.log('\n135. First-Class and Higher-Order Functions');

// First class Functions:
// - JS treats functions as first-class citizens:
//      --> They can be assigned to variables
//      --> Be passed as arguments to other functions
//      --> Be returned from other functions
//      --> Be stored in arrays or objects
// - This means that functions are simply values, just like numbers, strings or objects
// - Functions are just another "type" of object

console.log('\nStore functions in variables or properties:');
const add = (a, b) => a + b;
const counter = {
    value: 23,
    inc: function(){ this.value ++;}
}

console.log('\nPass functions as arguments to OTHER functions');
const greet = () => console.log('Hey Blue');

const btnClose = document.createElement('button');
btnClose.textContent = 'Click Me';
document.body.append(btnClose);

btnClose.addEventListener('click', greet);


// Higher-order functions:
// - A function that receives another function as an argument, that returns a new function, or both
// - This is only possible because of first-class functions

console.log('\nHigher-order functions:');
console.log('1) Function that receives another function');
// addEventListener is higher-order function because it receives a callback function as input, greet
// Callback function: it will be called later by the higher-order function
btnClose.addEventListener('click', greet);

console.log('2) Function that returns new function');
// count: higher-order function
function count() {
    let counter = 0;
    // returned function:
    return function() {
        counter++;
    };
}



/////////////////////////////////////////////////////
// 136. Functions Accepting Callback Functions

console.log('\n136. Functions Accepting Callback Functions');

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const[first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function: (to create another level of abstraction)
const transformer = function(str, fn) {
    const totalLength = 30;
    const paddedText = fn.name
        // Pad the left side:    
        .padStart((totalLength + fn.name.length) / 2, '+') 
        // Pad the right side:
        .padEnd(totalLength, '+'); 

    console.log(`Transformed by: ${paddedText}`);
    console.log(`Original string: ${str}`);
    // Calling the callback function:
    console.log(`Transformed string: ${fn(str)}`);
}

transformer('JavaScript is okey!', upperFirstWord)
transformer('JavaScript is okey!', oneWord)


// JS uses callbacks ALL THE TIME
const high5 = function() {
    console.log('🫸🫷');
}

// JS will call the high5 function as soon as we click on the body:
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);



/////////////////////////////////////////////////////
// 137. Functions Returning Functions

console.log('\n137. Functions Returning Functions');

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Blue');

// Challenge
const greetArrow = (greeting) => nameArrow => console.log(`${greeting} ${nameArrow}`);

greetArrow('Hi')('Blue spArrow');



/////////////////////////////////////////////////////
// 138. The call and apply Methods

console.log('\n138. The call and apply Methods');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // Older syntax
    // book: function(){}
    // Newer syntax
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`, 
            name
        })
    },
};

lufthansa.book(233, 'Blue\'s Laboratory');
lufthansa.book(666, 'Agent Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


console.log('\nCall method: setting the this keyword');

const book = lufthansa.book;

// This function here is a regular function call and in a regular function call the this keyword points to undefined, at least in strict mode
// The book function is now a copy of the lufthansa.book method, it's not a method anymore, it's a regular function call
// that is why the this keyword inside of it will point to undefined
// The this keyword depends on how the function is actually called
// Q: How do we tell JS that we want to create a booking?
// A: If we want to book lufthansa, the this keyword should point to lufthansa, for eurowings, the this keyword should point to eurowings
//    There are 3 functions to do this: call, apply and bind.

// DOES NOT WORK
// book(23, 'Sarah Williams');

// WORKS
// This call method has the 1st parameter, the this keyword, pointing to eurowings
// The rest of the arguments are the parameters of the book original function
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// We can do the same for lufthansa:
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 888, 'Mary Cooper');
console.log(swiss);


console.log('\nApply method: ');
// The apply method does basically the same as the call method, the main difference is that it does not receive
// a list of arguments after the this keyword, instead it is going to take an array of the arguments

const flightData = [987, 'Sheldon Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// In modern JS, ES6, the spread operator is used:
book.call(swiss, ...flightData);
console.log(swiss);



/////////////////////////////////////////////////////
// 139. The bind Method

console.log('\n139. The bind method');
// The bind method, just like the call method also allows us to set the this keyword for any function call,
// the difference is that bind does not immediately call the function, instead it returns a new function where the 
// this keyword is bound 

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // Older syntax
    // book: function(){}
    // Newer syntax
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`, 
            name
        })
    },
};

lufthansa.book(233, 'Blue\'s Laboratory');
lufthansa.book(666, 'Agent Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}


console.log('\nBind method');

const book = lufthansa.book;

// Call method: eurowings is the this keyword
book.call(eurowings, 23, 'Sarah Williams');
book.bind(eurowings);

// Bind method: eurowings, lufthansa and swiss are the this keyword here
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);


console.log('\nBinding with more than \'this\'');
// But with bind we can even bind and pass more arguments than the this keyword
// This is common pattern called: partial application
// Partial application: a part of the arguments of the original function are already applied, already set
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Pepito Gonzalez');
bookEW23('Juanito Perez');
console.log(eurowings);


console.log('\nBinding With Event Listeners');
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++
    console.log(this.planes);
}

// The this keyword points to the handler to which it is attached the buy button: <button class="buy">Buy new plane 🛩</button>
// Proof that the this keyword is really set up dynamically
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// If we call the buyPlane() function from lufthansa, the this keyword will point to lufthansa, 
lufthansa.buyPlane()

// We need to manually define the this keyword: we will use bind
// REMEMBER: bind assigns the this keyword by parameter
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


console.log('\nPartial application: presetting parameters');
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

// Let's say there is a function we use all the time, so let's create a function for that:
// Because there is no this keyword here, we set it to: null
// REMEMBER: the order of the arguments is important
const addVAT23 = addTax.bind(null, 0.23);

// This is essentially: 
// const addVAT23 = value => value + value * 0.23

console.log(addVAT23(100));
console.log(addVAT23(23));


console.log('\nChallenge (solution):');
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

console.log(addTaxRate(0.23)(100));
console.log(addTaxRate(0.23)(23));

const addVAT_addTaxRate = addTaxRate(0.23);
console.log(addVAT_addTaxRate(100));
console.log(addVAT_addTaxRate(23));



/////////////////////////////////////////////////////
// 140. CHALLENGE #1

console.log('\n140. CHALLENGE #1');

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
       What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value 
       AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense 
       (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
   which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
   This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
       Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

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

    registerNewAnswer: function registerNewAnswer(){
        let userAnswer = -1;
        while(userAnswer <0 || userAnswer >3 || isNaN(userAnswer)){
            // Number() siempre devuelve un Number, hasta para NaN
            // CAREFUL: prompt --> cancel devuelve un 0
            userAnswer = Number(prompt(
                `${this.question}\n\n${this.options.join('\n')})`
            ));

            console.log(userAnswer);
            console.log(typeof(userAnswer));

            if (userAnswer <0 || userAnswer >3 || isNaN(userAnswer)){
                alert('Please introduce a valid number (0-3)');
            } else {
                this.answers[userAnswer]++;
                console.log(this.answers);
            }
        }

        // Short-circuiting: 
        //   X) this.answers[answer]++; --> only gets executed if the previous conditions are true:
        // typeof answer === 'number' &&
        // answer < this.answers.length &&
        // this.answers[answer]++;

        this.displayResults();
        // this.displayResults('string');
    },

    // por defecto es un array
    displayResults: function displayResults(type = 'array'){
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

// this keyword in this case will point to the .poll element:
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);

document
    .querySelector('.poll')
    // bindeamos a poll.registerNewAnswer() el objeto poll que sera aqui el objeto this
    .addEventListener('click', poll.registerNewAnswer.bind(poll));


// poll.displayResults()

// BONUS
console.log('\nBONUS: ');
// call: this keyword is the 1st parameter, the object: { answers: [5, 2, 3] }
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// este funciona porque por defecto es array:
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
*/



/////////////////////////////////////////////////////
// 141. Immediately Invoked Function Expressions (IIFE)
/*
console.log('\n141. Immediately Invoked Function Expressions (IIFE)');
// Sometimes in JS we need a function that is executed once and then never again
// We will need this technique later for async/await

const runOnce = function(){
    console.log('This will never run again');
}
runOnce();

// It is done through parentheses:
(function(){
    console.log('This will never run again');
})();

console.log('\nIIFE with an arrow function:');
(() => console.log('This will ALSO never run again'))();


// Q: Why was this pattern invented?
// A: Functions create scopes. And one scope does not have access to variables from an inner scope

(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();

// We CANNOT access it like this:
// console.log(isPrivate);

{
    const isPrivate = 33;
    // var variables completely ignore the block
    var notPrivate = 69;
}

// The outside cannot access isPrivate
// console.log(isPrivate);
console.log(notPrivate);



/////////////////////////////////////////////////////
// 142. Closures
*/
console.log('\n142. Closures');

// Q: What is the hardest topic to understand in JS?
// A (many people): Closures

const secureBooking = function() {
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// The booker function exists out here in the global scope/environment
// The booker function will still have access to the values of secureBooking once the function secureBooking has finished
const booker = secureBooking();

// Q: How is it possible that the booker function has access to the passengerCount variable?
//    Shouldn't it have exited memory once the function is executed, since the execution context is not on the call stack anymore?
// A: Closure, it makes a function remember all the variables that existed at the function's birthplace.
booker();
booker();
booker();