'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 26/02/2025
// 32. Activating Strict Mode

// Strict Mode:
// - 'use strict';
// - it has to be at the beginning of the code
// - forbids us to do certain things
// - creates visible errors

// prueba a comentarlo y descomentarlo
'use strict';

let hasDriversLicense = false;
const passTest = true;

// an 's' is missing:
// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// reserved word: interface, if, private
// const interface = 'Audio';
// const if = 3;
// const private = 532;



/////////////////////////////////////////////////////
// 33. Functions
// dry code: code that doesn't repeat itself
function logger() {
    console.log('My name is Alex');
}

// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



/////////////////////////////////////////////////////
// 34. Function Declarations vs. Expressions


// Function declaration:
// - We can call them before they are defined
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return (2037 - birthYear);
}


// Function expression:
// - You assign to a variable an anonymous function
// - Cannot be called b4 they are defined
// console.log(calcAge2(1991));

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);


console.log(age1, age2);



/////////////////////////////////////////////////////
// 35. Arrow Functions (ECMAScript 6 - 2015)
// - Great for quick one-line functions (has no this keyword)

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Years until retirement
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1993, 'Alex'));
console.log(yearsUntilRetirement(1955, 'Bob'));



/////////////////////////////////////////////////////
// 36. Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



/////////////////////////////////////////////////////
// 37. Reviewing Functions
'use strict';

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// Years until retirement
const yearsUntilRetirement = function (birthYear, firstname) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if (retirement > 0) {
        // return immediately exits the function
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired 🎉`)
        return -1;
    }

    // return `${firstname} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1993, 'Alex'));
console.log(yearsUntilRetirement(1970, 'Mike'));



/////////////////////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀!!
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(55, 11);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



/////////////////////////////////////////////////////
// 39. Introduction to Arrays
// The 2 most important structures in JS are: arrays and objects
'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// const: only primitive values are immutable
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // Peter

// friends is const: an array is not a primitive value so it can me modified
friends[2] = 'Jay';

// we cannot do:
// friends = ['Bob', 'Alice'];
console.log(friends);

const firstName = "Blue's";
const blueslaboratory = [firstName, 'Laboratory', 2027 - 1993, 'teacher', friends];
console.log(blueslaboratory)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

// starts with 0
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
// last element: length - 1
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

console.log(calcAge(years2));
console.log(years2 + 10);

const ages = [
    calcAge(years2[0]),
    calcAge(years2[1]),
    calcAge(years2[years2.length - 1])
];
console.log(ages);



/////////////////////////////////////////////////////
// 40. Basic Array Operations (Methods)
'use strict';

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// pushing at the end:
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//pushing at the beginning:
friends.unshift('John');
console.log(friends);

// Remove elements
// remove the last element: pop
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove the first element: shift
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



/////////////////////////////////////////////////////
*/
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
'use strict';

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(bills);
console.log(tips);
console.log(totals);

console.log(bills, tips, totals);



/////////////////////////////////////////////////////

// 42. Introduction to Objects
// 43. Dot vs. Bracket Notation

'use strict';

// arrays: []
// - square brackets
// - structured data
const blueslaboratory = [
    "Blue's",
    "Laboratory",
    2037 - 1993,
    "programmer",
    ["Nico", "Bea", "Iria"]
];

// objects: {}
// - curly braces
// - unstructured data
const b = {
    firstName: "Blue's",
    lastName: "Laboratory",
    age: 2037 - 1993,
    job: "programmer",
    friends: ["Nico", "Bea", "Iria"]
};

// Get a property: dot notation
console.log(b);
console.log(b.lastName);
console.log(b['lastName']);

// this works:
const nameKey = "Name";
console.log(b['first' + nameKey]);
console.log(b['last' + nameKey]);

// this doesn't work:
// console.log(b.'last' + nameKey);

console.log('\nInterested in:')

const interestedIn = prompt("What do you want to know about Blue? \
                             Choose between firstName, lastName, age, job and friends");

// this doesn't work: undefined
console.log(b.interestedIn);

// this works:
if (b[interestedIn]) {
    console.log(b[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

b.location = "Spain";
b['twitter'] = "@blueslaboratory";
console.log(b);


// Challenge: non hard-coded values: BLUE, 3 and NICO
// BLUE has 3 friends and his best friend is called NICO

const challenge = `${b.firstName} has ${b.friends.length} friends and his best friend is called ${b.friends[0]}.`;
console.log(challenge);



/////////////////////////////////////////////////////
// 44. Object Methods
'use strict';

const b = {
    firstName: "Blue's",
    lastName: "Laboratory",
    birthYear: 1993,
    job: "programmer",
    friends: ["Nico", "Bea", "Iria"],
    hasDriversLicense: true,

    // Now calcAge is not a regular variable but a property of the b object
    // Any function that is attached to an object is called a method
    calcAge1: function (birthYear) {
        return 2037 - birthYear;
    },
    // This doesn't work: function declaration
    // function calcAge (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge2: function () {
        // this keyword points to the object preceding the '.', in this case: b
        console.log(this);
        return 2037 - this.birthYear;
    },

    calcAge3: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge3()} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
};

const calcAge1 = function (birthYear) {
    return 2037 - birthYear;
};

// method:
console.log(b.calcAge1(1993));
console.log(b['calcAge1'](1993));

// this:
console.log(b.calcAge2());

// retrieving a property you have calculated b4
console.log(b.calcAge3());
console.log(b.age);

// Challenge:
// "Blueslaboratory is a 44 year old teacher, and he has a/no driver's license"
let challenge;

challenge = `${b.firstName} is a ${b.calcAge3} year old teacher, and he has ${b.hasDriversLicense ? "a" : "no"} driver's license`;
console.log(challenge);

challenge = `${b.firstName} is a ${b.calcAge3()} year old ${b.job}, and he has ${b.hasDriversLicense ? "a" : "no"} driver's license`;
console.log(challenge);

console.log(b.getSummary());



/////////////////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
'use strict';

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

function calcBMI(mass, height) {
    return (mass / (height * height));
}

// It is necessary to do this to set the values:
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else if (john.bmi < mark.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log("Both BMI's are equal!");
}



/////////////////////////////////////////////////////
// 46. Iteration: The for Loop
'use strict';

console.log('Lifting weights repetition X🏋️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}



/////////////////////////////////////////////////////
// 47. Looping Arrays, Breaking and Continuing
'use strict';

const blueslaboratory = [
    "Blue's",
    "Laboratory",
    2037 - 1993,
    "programmer",
    ["Nico", "Bea", "Iria"]
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])

for (let i = 0; i < blueslaboratory.length; i++) {
    // Reading
    console.log(blueslaboratory[i], typeof blueslaboratory[i]);

    // Filling types array:
    types[i] = typeof blueslaboratory[i];
    // types.push(typeof blueslaboratory[i]);
}

console.log('\nFilling types array: ')
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


// continue and break

console.log('\n--- ONLY STRINGS ---');
for (let i = 0; i < blueslaboratory.length; i++) {
    // only logging strings:
    if (typeof blueslaboratory[i] !== 'string') continue;

    console.log(blueslaboratory[i], typeof blueslaboratory[i]);
}

console.log('\n--- BREAK WITH NUMBER ---');
for (let i = 0; i < blueslaboratory.length; i++) {
    // terminating a loop with a number:
    if (typeof blueslaboratory[i] === 'number') break;

    console.log(blueslaboratory[i], typeof blueslaboratory[i]);
}



/////////////////////////////////////////////////////
// 48. Looping Backwards and Loops in Loops
'use strict';

const blueslaboratory = [
    "Blue's",
    "Laboratory",
    2037 - 1993,
    "programmer",
    ["Nico", "Bea", "Iria"]
];

// Going backwards
// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = blueslaboratory.length - 1; i >= 0; i--) {
    console.log(i, blueslaboratory[i]);
}

// A loop within a loop
for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise} ---------`)

    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Ex${exercise}: Lifting weight repetition ${rep} 🏋️`)
    }
}



/////////////////////////////////////////////////////
// 49. The while Loop
'use strict';

console.log('\nFor Loop');
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

console.log('\nWhile Loop');
let rep = 1;
while (rep <= 5) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

console.log('\nRolling the dice');
// Math.random gives us a number between 0-1
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}



/////////////////////////////////////////////////////
*/
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
/*
'use strict';

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function (arr) {
    let avg = 0;

    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }

    return avg / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/