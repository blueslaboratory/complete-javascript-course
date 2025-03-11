'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 10/03/2025
// 106. Destructuring Arrays
console.log('\n106. Destructuring Arrays');

// Destructuring: 
// Is an ESX feature and it is a way of unpacking values from an array or an object into separate variables.
// We break a complex data structure down into a smaller data structure like a variable.


// Without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];


// With destructuring
console.log('\nWith destructuring:');
// this looks like an array but it is not
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


const restaurantOriginal = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};


// We can skip elements leaving a blank 
console.log('\nSkipping elements: blank space');
const [first, , third] = restaurantOriginal.categories;
console.log(first, third);


// Switching variables without destructuring
console.log('\nSwitching variables without destructuring');
let [main, , secondary] = restaurantOriginal.categories;
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


// Switching variables with destructuring
console.log('\nSwitching variables with destructuring');
[main, , secondary] = restaurantOriginal.categories;
[main, secondary] = [secondary, main]
console.log(main, secondary);


// Receive 2 return values from a function
// With destructuring we can return an array from a function and return multiple values
console.log('\nReceive 2 return values from a function');
console.log(restaurantOriginal.order(2, 0));
const [starter, mainCourse] = restaurantOriginal.order(2, 0);


// Destructuring a nested array
console.log('\nDestructuring a nested array');
const nested = [2, 4, [5, 6]];

const [m, , n] = nested;
console.log(m, n);

const [i, ,[j, k]] = nested;
console.log(i, j, k);


// Default values
console.log('\nDefault values');
let [p, q, r] = [8, 9];
console.log(p, q, r);

[p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);



/////////////////////////////////////////////////////
// ASSIGNMENTS
console.log('\n107. ASSIGNMENTS');

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];


console.log('1.1 Destructure the books array into two variables called firstBook and secondBook');
let [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

console.log('1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.');
let [ , , thirdBook] = books;
console.log(thirdBook);

console.log('1.3 Destructure the nested array, get the numerical values of rating and ratingCount');
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
let [[, rating], [ ,ratingCount]] = ratings
console.log(rating, ratingCount);

console.log('1.4 Destructure ratingStars into 3 variables. Assign the third variable a default value of 0');
const ratingStars = [63405, 1808];
let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);



/////////////////////////////////////////////////////
// 108. Destructuring Objects
console.log('\n108. Destructuring Objects');

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDeliveryOriginal: function (obj) {
    console.log(obj);
  },

  // function ({})
  // {} --> object
  // with default values:
  orderDeliveryDestructuring: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`);
  },
};


// Useful features for when dealing with 3rd party data: API's
console.log('\nDestructuring Objects');
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


console.log('\nDefault values');
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);


console.log('\nMutating variables');
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// The trick is to wrap it with parentheses
({a, b} = obj);
console.log(a, b);


// Nested objects
console.log('\nNested Objects');

const {fri} = openingHours;
console.log(fri);

const {fri: {open, close}} = openingHours;
console.log(open, close);

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


// orderDelivery
console.log('\norderDeliveryOriginal');
restaurant.orderDeliveryOriginal({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// orderDeliveryDestructuring
// names must be exactly the same as in the function:
console.log('\norderDeliveryDestructuring');
restaurant.orderDeliveryDestructuring({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliveryDestructuring({
  address: 'Via del Sole, 21',
  starterIndex: 1
});



/////////////////////////////////////////////////////
// 109. The Spread Operator (...)

console.log('\n109. The Spread Operator (...)');
// We can use the spread operator to basically expand an array into all of its elements: 
// unpacking all the elements at 1

console.log('\nAdding to an existing array new elements:');
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, arr];
console.log(newArr);

const newArrSpread = [1, 2, ...arr];
console.log(newArrSpread);

// The spread operator (unpacking) is algo useful when we pass arguments into functions:
console.log(...newArrSpread);


// A more complex/complete example:
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDeliveryOriginal: function (obj) {
    console.log(obj);
  },

  // function ({})
  // {} --> object
  // with default values:
  orderDeliveryDestructuring: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// The spread operator is also similar to destructuring: it helps us get elements out of arrays
// The big difference is that the spread operator takes all the elements out of the array and it also doesn't create new variables


// The spread operator can create shallow copies of arrays and/or merge 2 arrays together
console.log('\nShallow copy:');
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

console.log('\nJoin 2 arrays:');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Spread operator does not only work on arrays, it works on all iterables
// Iterables: arrays, strings, maps, sets. NOT OBJECTS
console.log('\nSpread operator and iterables:');

const str = 'Jonas';
console.log(...str);

const letters = [...str, ' ', 'S.'];
console.log(letters);

// This won't work:
// Spread operatos only works when building an 'array' or when we pass values into a function
// console.log(`${...str} Schmedtmann`);


// Real-world example:
console.log('\nOrdering pasta:');
const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1?'),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);


// Objects and the spread operator
console.log('\nObjects and the spread operator');
const newRestaurant = { 
  foundedIn: 1998, 
  ...restaurant,
  founder: 'Giuseppe'
}
console.log(newRestaurant);

console.log('\nRestaurant copy');
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);



/////////////////////////////////////////////////////
// 110. Rest Pattern and Parameters
// I'll eat 1 cookie and you can have the rest.

console.log('110. Rest Pattern and Parameters');
// The rest operator packs elements into an array

console.log('\n1) DESTRUCTURING');

// SPREAD, because on RIGHT side of =
console.log('\nSPREAD, because on RIGHT side of =');
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
// it is called REST because it will take the REST of the elements of the array
// and then put them into a new array, in this case, others
console.log('\nREST, because on LEFT side of =');
const [a, b, ...others] = [1,2,3,4,5];
console.log(a, b, others);


console.log('\nRestaurant REST and Spread operators');
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log('- Main ingredient:', mainIngredient);
    console.log('- Other ingredients:', otherIngredients);
  }
};

// otherFood (REST element) will not have skipped elements, it also must be the last element and there can only be 1
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
]

console.log(pizza, risotto, otherFood);

// Objects
console.log('\nObjects');
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat);
console.log(weekdays);


console.log('\n2) FUNCTIONS');

const add = function(...numbers) {
  console.log(numbers)
  
  let sum = 0;
  
  for (let i = 0; i<numbers.length; i++) {
    sum += numbers[i]
  }
  
  return sum
}

console.log(add(5, 5));
console.log(add(5, 4, 3, 2, 1));
console.log(add(10, 9, 8, 7, 6, 5, 4, 3, 2, 1));

const x = [23, 3, 7];
console.log(add(...x));


console.log('\nOrdering pizza');
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// SPREAD pattern: used where we will write VALUES separated by commas
// REST pattern: used where we will write VARIABLE NAMES separated by commas



/////////////////////////////////////////////////////
// 111. Short Circuiting (&& and ||)
// JUMPED



/////////////////////////////////////////////////////
// 112. The Nullish Coalescing Operator (??)
// JUMPED



/////////////////////////////////////////////////////
// 113. Logical Assignment Operators
// JUMPED



/////////////////////////////////////////////////////
// 114. CHALLENGE #1
// JUMPED



/////////////////////////////////////////////////////
// 115. Looping Arrays: The for-of Loop
console.log('115. Looping Arrays: The for-of Loop');

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log('- Main ingredient:', mainIngredient);
    console.log('- Other ingredients:', otherIngredients);
  }
};

const menu = [
  ...restaurant.starterMenu, 
  ...restaurant.mainMenu
];

for (const item of menu) console.log(item);

console.log('\nFor-of loop, getting the element and the index:');
for (const item of menu.entries()) console.log(item);

console.log('\n(+ELEGANT): For-of loop, getting the element and the index:');
for (const item of menu.entries()) {
  console.log(`${item[0] +1}: ${item[1]}`);
}

console.log('\nDestructuring: For-of loop, getting the element and the index:');
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}

console.log(menu.entries());
console.log([...menu.entries()]);



/////////////////////////////////////////////////////
// 116. Enhanced Object Literals

console.log('\n116. Enhanced Object Literals');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // we computed this object using a template literal
  [`day-${2+4+60}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // Before ES6
  openingHours: hours,

  // After ES6, enhanced object literals:
  hours,

  // ######## FUNCTIONS ########
  // Before ES6:
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },
  // After ES6:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Before ES6:
  // orderDeliveryOriginal: function (obj) {
  //   console.log(obj);
  // },
  // After ES6:
  orderDeliveryOriginal(obj) {
    console.log(obj);
  },

  // After ES6:
  orderDeliveryDestructuring({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`);
  },

  // After ES6:
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
}

console.log(restaurant);
restaurant.orderDeliveryDestructuring({address: 'Embajadores'});



/////////////////////////////////////////////////////
// 117. Optional Chaining (?.)
// JUMPED



/////////////////////////////////////////////////////
// 118. Looping Objects: Object Keys, Values, and Entries
// JUMPED



/////////////////////////////////////////////////////
// 119. CHALLENGE #2
// JUMPED



/////////////////////////////////////////////////////
// 120. Sets
// JUMPED



/////////////////////////////////////////////////////
// 121. New Operations to Make Sets Useful!
// JUMPED



/////////////////////////////////////////////////////
// 122. Maps: Fundamentals
// JUMPED



/////////////////////////////////////////////////////
// 123. Maps: Iteration
// JUMPED



/////////////////////////////////////////////////////
// 124. Summary: Which Data Structure to Use?
// JUMPED



/////////////////////////////////////////////////////
// 125. CHALLENGE #3
// JUMPED



/////////////////////////////////////////////////////
// 126. Working With Strings - Part 1

console.log('\n126. Working With Strings - Part 1');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log('\nLength, indexOf, lastIndexOf...');
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log('\nSlice:');
// slice: substrings [4, -1]
console.log(airline.slice(4));
console.log(airline.slice(4, -7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-7));
console.log(airline.slice(1, -1));


console.log('\nFunction checkMiddleSeat: ');
const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log(`${s}: You got the middle seat 😭`);
  else
    console.log(`${s}: You got lucky 🍀🤞`);
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Q: Strings are primitives, so why do they have methods? Shouldn't methods only be available on objects?
// A: True, JS uses boxing, transforming the string primitive into a string object, it puts it in a box, like my d*ck in a box video.
//    When the operation is done, the string is then transformed back into a primitive.
console.log('\nBoxing Strings');
console.log(new String('blue'));
console.log(typeof new String('blue'));
console.log(typeof new String('blue').slice(1));



/////////////////////////////////////////////////////
// 11/03/2025
// 127. Working With Strings - Part 2

console.log('\n127. Working With Strings - Part 2');

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('blueslaboratory'.toUpperCase());


// Fix Capitalization in name
console.log('\nFix Capitalization in name:');

const passenger = 'aLeJaNdRo';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


console.log('\nComparing emails: Just a matter of capitalization');

const email = 'blue@laboratory.com';
const loginEmail = '   BLue@LABoRATory.com \n';
console.log(email === loginEmail);

const treatedEmail = loginEmail.trim().toLowerCase();
console.log(email === treatedEmail);


console.log('\nReplacing:');
const priceGB = '288,96€';
const priceBTC = priceGB.replace('€', '₿').replace(',', '.');
console.log(priceBTC);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log('With regular exprssions:');
console.log(announcement.replace(/door/g, 'gate'));


console.log('\nBooleans');
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Ai'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the NeW AiRbUS familie');
}


console.log('\nPractice exercise');
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some Foood and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for potection');



/////////////////////////////////////////////////////
// 128. Working With Strings - Part 3

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('\n128. Working With Strings - Part 3');

console.log('\nSplit and join:');
console.log('a+very+nice+string'.split('+'));
console.log('Blue\'s Laboratory'.split(' '));

const [firstName, lastName] = 'Blue\'s Laboratory'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr', firstName, lastName.toUpperCase()].join('__');
console.log(newName);


console.log('\nCapitalize Name Function:');
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1))

    // Another way: complicating my life v2.0
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
}

capitalizeName('- jessica ann smith davis');
capitalizeName('- blue\'s laboratory');


console.log('\nPadding a string:');
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(23, '+'));;
console.log('lilb'.padStart(20, '+').padEnd(23, '+'));
console.log('++++++++++++++++lilb', );
console.log('++++++++++++++++lilb'.length);


console.log('\nMasking a credit card:');
const maskCreditCard = function(number) {
  const str = number + '';
  console.log(str);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(1651611441549848));
console.log(maskCreditCard('4564849845874112'));
// It doesn't work for very long numbers:
console.log(maskCreditCard(165161144154984855697));


console.log('\nRepeat Method');
const message2 = '\nBad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line: ${'✈️'.repeat(n)}`);
};

planesInLine(2);
planesInLine(7);
planesInLine(14);



/////////////////////////////////////////////////////
// 129. CHALLENGE #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// MY SOLUTION

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const underToCamel = function (underCase) {
  let camelCaseArray = underCase.toLowerCase().trim().split('_');

  for (let i=1; i<camelCaseArray.length; i++){
    camelCaseArray[i] = camelCaseArray[i].replace(camelCaseArray[i][0], camelCaseArray[i][0].toUpperCase());
  }

  return camelCaseArray.join('');

}

document.querySelector('button').addEventListener('click', function() {
  
  // es VALUE y no text:
  const textArea = document.querySelector('textarea').value;
  console.log(textArea);

  const arrayOriginal = textArea.split('\n');
  // const arrayTreated = [];

  for (let item of arrayOriginal.entries()){
    let treatedItem = '';
    // console.log(item);
    if (item !== ''){
      treatedItem = `${underToCamel(item[1]).padEnd(20)}${'✅'.repeat(item[0]+1)}`;
      // arrayTreated.push(treatedItem);
      console.log(treatedItem);
    }
  }
  // console.log(arrayTreated);
});


// SOLUTION
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/



/////////////////////////////////////////////////////
// 130. String Methods Practice
// JUMPED