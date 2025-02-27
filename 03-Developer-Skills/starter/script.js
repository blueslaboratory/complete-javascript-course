'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 27/02/2025
// 55. Setting up Prettier and VS Code
// https://prettier.io/docs/options.html

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// File -> Preferences -> Configure Snippets -> New Global Snippets File
// - cl for console.log();
console.log(x);

// Extension: TODO Highlight: NEW, FIX, IMPORTANT, BUG, TODO
// File --> Preferences --> Settings: Open Settings (JSON)



/////////////////////////////////////////////////////
// 56. Installing Node.js and Setting Up a Dev Environment
// Extension: Live Server



/////////////////////////////////////////////////////
// 57. Learning to Code (See: 57. Pit of despair.png)



/////////////////////////////////////////////////////
// 58. How to Think Like a Developer: Become a Problem Solver!

// Step 1:
// Make sure you 100% understand the problem. Ask the right questions, get a clear view of the problem
// Step 2:
// Divide an conquer: break big problems into smaller sub-problems
// Step 3:
// Don't be afraid to do as much research as you have to
// Step 4:
// For big problems: Write pseudo-code before writing the actual code



/////////////////////////////////////////////////////
// 59. Using Google, StackOverflow and MDN
// (Skipped because they are outdated with LLMs?)
// MDN: https://developer.mozilla.org/en-US/
// You can read the final script.js for this section



/////////////////////////////////////////////////////
// 60. Debugging (Fixing Errors)
// Shows how to use the browser debugger 8:00
// a) IDENTIFY THE BUG
// b) FIND THE BUG
*/
/*
'use strict';


const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) FIX
        // value: Number(prompt('Degrees celsius')),
        value: 10
    };

    // B) FIND THE BUG
    console.log(measurement);
    
    //ct
    console.table(measurement);
    // cl
    // console.log(measurement.value);
    // cw
    // console.warn(measurement.value);
    // ce
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) IDENTIFY THE BUG
console.log(measureKelvin());



const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      debugger;
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
  // A) IDENTIFY
  console.log(amplitudeBug);



/////////////////////////////////////////////////////
// 62. CHALLENGE #1
*/
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
"use strict";

const test_data_1 = [17, 21, 23];
const test_data_2 = [12, 5, -5, 0, 4];

const printForecast = function (array) {

  let sentence = '';

  for (let i = 0; i < array.length; i++) {
    sentence += ` ... ${array[i]}ºC in ${i+1} ${i+1 === 1 ? "day" : "days"}`;
    if (i === array.length - 1) sentence += '...';
  }

  console.log(sentence);

}

printForecast(test_data_1);
printForecast(test_data_2)



/////////////////////////////////////////////////////
// 63. The Rise of AI Tools (ChatGPT, Copilot, Cursor AI, etc.)

// 1. Make sure you 100% understand the problem. Ask questions
// 2. Choose the AI and give it an specific prompt and enough context
// 3. AI generates the solution code
// 4. Review and test the output solution
// 5. Integrate the solution into your app

// B4 YOU USE AI:
// 1. Fundamental coding skills are 100% essential
// 2. You are able to solve problems on your own
// 3. You are a very critical thinker
// 4. You have curiosity and joy while coding

// Blablabla...
// AI will help us, not replace us!



/////////////////////////////////////////////////////
// 64. Solving CHALLENGE #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours (round to one decimal place)
3. The day with the most hours worked (assume monday is day 0 in the array)
4. Number of days worked (days with more than 0 hours)
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// Written by ChatGPT: Copied from the solutions
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  // Calculate total hours worked
  let totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  // Equivalent:
  // totalHours = 0;
  // for (let hours of dailyHours) {
  //     totalHours += hours;
  // }
  // console.log(totalHours); 

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours); // ✅ Correct
  // ... spread operator
  // const dailyHours = [5, 6, 4, 7, 3];
  // const maxHours = Math.max(dailyHours); // ❌ Incorrect: NaN (Math.max() expects numbers, not an array)

  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  // Gets the array and filters it to another array.length
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5, 3, 3];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);