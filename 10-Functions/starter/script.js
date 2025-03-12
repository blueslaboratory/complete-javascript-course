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
*/
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
