// 20/03/2025

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



/////////////////////////////////////////////////
// 20/03/2025
// 147. Simple Array Methods
/*
console.log('\n147. Simple Array Methods');
// Arrays have methods because they are objects, they have access to them because of prototypal inheritance

let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE
console.log('\nSlice:');
console.log(arr.slice(2)); // [2, end]
console.log(arr.slice(2, 4)); // [2, 3]
console.log(arr.slice(-2)); // [-2, end]
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2)); // [1, -2) --> [1, -3]

console.log('\nSlice: creating a shallow copy');
console.log(arr.slice());
console.log([...arr]); // Previously


// SPLICE
console.log('\nSplice');
// Google: mdn array splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Splice method changes the original array, it deletes >=1 elements from the array
console.log('deleted:', arr.splice(2)); 
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log('deleted:', arr.splice(-1));
console.log(arr);

console.log('deleted:', arr.splice(1, 2));
console.log(arr);


// REVERSE
console.log('\nReverse');
// Reverse method mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'm'];

console.log(arr2.reverse());
console.log(arr2);


// CONCAT
console.log('\nConcat');
// Concatenating 2 arrays, does not mutate them
const letters = arr.concat(arr2);
console.log(letters);
// Another way: spread operator
console.log([...arr, ...arr2]);
console.log(arr);
console.log(arr2);


// JOIN
console.log('\nJoin');
// Joining an array into a string
console.log(letters.join(' - '));



/////////////////////////////////////////////////
// 148. The New at Method

console.log('\n148. The New at Method');

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));


console.log('\nQ: What\'s the big deal?');
console.log('A: Getting the last element');

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('blueslaboratory'.at(0));
console.log('blueslaboratory'.at(-1));



/////////////////////////////////////////////////
// 149. Looping Arrays: forEach

console.log('\n149. Looping Arrays: forEach');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if(movement > 0) {
    console.log(`You deposited: ${movement}`);
  } else {
    console.log(`You withdrew: ${Math.abs(movement)}`);
  }
}


console.log('\n---- for of with entries ----');
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`${i} - You deposited: ${movement}`);
  } else {
    console.log(`${i} - You withdrew: ${Math.abs(movement)}`);
  }
}


console.log('\n---- 1. forEach() method: ----');

movements.forEach(function(movement){
  // During each forEach iteration, this callback function is executed
  if(movement > 0) {
    console.log(`You deposited: ${movement}`);
  } else {
    console.log(`You withdrew: ${Math.abs(movement)}`);
  }
});

// It will call it:
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...


console.log('\n---- 2. forEach() method: ----');

// The names do not matter, but the order matters: function(movement, index, array)
movements.forEach(function(movement, index, array){
  // During each forEach iteration, this callback function is executed
  if(movement > 0) {
    console.log(`${index} - You deposited: ${movement}`);
  } else {
    console.log(`${index} - You withdrew: ${Math.abs(movement)}`);
  }
});


// Q: When should we use forEach and when should we use for of?
// A: You cannot break; in a forEach loop, it will always loop through the entire array, if you need to break, use for of



/////////////////////////////////////////////////
// 150. forEach With Maps and Sets
// JUMPED



/////////////////////////////////////////////////
// 151. PROJECT: "Bankist" App
// JUMPED (for now): 
// Starts here, seems interesting but too time consuming



/////////////////////////////////////////////////
// 152. Creating DOM Elements
// JUMPED



/////////////////////////////////////////////////
// 153. CHALLENGE #1
// JUMPED



/////////////////////////////////////////////////
// 154. Data Transformations: map, filter, reduce

console.log('\n154. Data Transformations: map, filter, reduce');

// 1. MAP
// Map is similar to the forEach method we saw b4, but map creates a brand new array based on the original array.
// It map's the values of the original array to a new array.
// Map returns a new array containing the results of applying an operation on all the original arrray elements.

// 2. FILTER
// Filter returns a new array containing the array elements that passed a specified test condition.

// 3. REDUCE
// Reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together).



/////////////////////////////////////////////////
// 26/03/2025
// 155. The map Method

console.log('\n155. The map Method');
// Map returns a new array containing the results of applying an operation on all the original arrray elements.

// Exercise: Converting this movements from dollars to euros
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

console.log('\nMap method (functional programming):');

console.log(movements);

const movementsUSD = movements.map(function(value, index, movements){
  // One way to modify the original array
  // movements[index] = value*euroToUsd;
  
  // Returning the element * 1.1:
  return value * euroToUsd;
  
  // An array of several 23 elements:
  // return 23;
})

// One way to modify the original array
// console.log(movements);

console.log(movementsUSD);


// The same thing as before but using a for/of loop:
console.log('\nFor of loop:');

const movementsUSDfor = [];

for(const value of movements) 
  movementsUSDfor.push(value * euroToUsd);

console.log(movementsUSDfor);


console.log('\nMap method: arrow function challenge:');

console.log(movements);

const movementsUSDarrow = movements.map((value, index, movements) => {
  // One way to modify the original array
  // movements[index] = value*euroToUsd;
  
  // Returning the element * 1.1:
  return value * euroToUsd;
});

// One way to modify the original array
// console.log(movements);

console.log(movementsUSDarrow);


console.log('\nMap method: arrow function compressed:');

const movementsUSD_arrowCompressed = movements.map(value => value * euroToUsd);

console.log(movementsUSD_arrowCompressed);


console.log('\nExploring the Map method');

const movementsDescriptions = movements.map((value, index, array) => {
  return `Movement ${index + 1}: You ${value>0 ? 'deposited': 'withdrew'} ${Math.abs(value)}`;
});

console.log(movementsDescriptions);



/////////////////////////////////////////////////
// 157. The filter Method

console.log('\n157. The filter Method');

// It is used to filter elements that satisfy a certain condition (callback function)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(value, index, array) {
  // we return a boolean value, only values that pass the filter will be included in the array
  return value > 0;
});

console.log(movements);
console.log(deposits);


// The same thing as before but using a for/of loop:
console.log('\nFor of loop:');

const depositsFilterFor = [];

for(const value of movements) 
  if (value > 0)
    depositsFilterFor.push(value);

console.log(depositsFilterFor);


// Withdrawls challenge:
const withdrawls = movements.filter(function(value, index, array){
  return value < 0;
});

const withdrawlsArrow = movements.filter(value => value < 0)

console.log(withdrawls);
console.log(withdrawlsArrow);



/////////////////////////////////////////////////
// 158. The reduce Method

console.log('\n158. The reduce Method');
// "It is by far the most powerful array method that there is" - Instructor

// We use the reduce method to boil down the elements of an array to a single value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator --> snowball
const balance = movements.reduce(function(accumulator, current, index, array){
  console.log(`Iteration ${index} - Current: ${current}\t - Accumulator: ${accumulator}`);
  return accumulator + current;
}, 0);
// 0 is the value of the accumulator in the 1st iteration

console.log(balance);


// The same thing as before but using a for/of loop:
console.log('\nFor of loop:');

let balanceFor = 0;
for(const value of movements) balanceFor += value;
console.log(balanceFor);


console.log('\nCompressed arrow fuction:');

const balanceArrow = movements.reduce((accumulator, current) => accumulator + current);
console.log(balanceArrow);


// Maximum value
console.log('\nMaximum value of the movements array:');
const max = movements.reduce(function(accumulator, current){
  return current > accumulator ? current : accumulator;
}, movements[0]);

console.log(`Max: ${max}`);



/////////////////////////////////////////////////

// Coding Challenge #2
console.log('\nCoding Challenge #2');

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(dogAges) {
  // 1
  console.log('\nDog to Human');
  let dogToHuman = dogAges.map(function(value, index, array){
    return value <= 2 ? 2* value : 16 + value*4
  });
  console.log(dogToHuman);

  // 2
  console.log('\nAdult Dogs');
  let adultDogs = dogToHuman.filter(function(value, index, array) {
    return value >= 18
  });
  console.log(adultDogs);

  // 3
  console.log('\nAverage human age of all adult dogs');
  let averageAgeAdultDog = adultDogs.reduce(function(accumulator, value, index, array){
    return accumulator + value/array.length;
  }, 0);
  console.log(averageAgeAdultDog);

}

calcAverageHumanAge(testData1);
// calcAverageHumanAge(testData2);



/////////////////////////////////////////////////
*/
// 160. The Magic of Chaining Methods
console.log('\n160. The Magic of Chaining Methods');

// We can chain the map, filter and reduce methods one after another

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const euroToUsd = 1.1;

// PIPELINE: can be inspected using the array parameter
const totalDepositsUSD = movements
  .filter((value, index, array) => value > 0)
  .map((value, index, array) => {
    // console.log(array);
    return value*euroToUsd;
  })
    .reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);

console.log(totalDepositsUSD);