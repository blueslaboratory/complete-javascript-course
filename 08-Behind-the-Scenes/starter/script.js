'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 05/03/2025
// 91. An High-Level Overview of JavaScript

// JavaScript is a: high-level, object-oriented, multi-paradigm programming language

// JS is a:
// 1) High-level
//   --> C: developer has to manage resources manually (malloc), programs are very fast/optimized
//   --> JS: developer doesn't worry, everything is auto, programs are not fast/optimized
// 2) Garbage-collected
//   --> Removes old unused objects from the computer memory auto
// 3) Interpreted or just-in-time compiled
//   --> A computer's processor only understands 0's and 1's, ultimately every single program needs to be 0's and 1's (machine code)
//   --> The code we write is an abstraction over machine-code, but it needs to be translated: compiling or interpreting
// 4) Multi-paradigm: with JS we can choose whatever paradigm we want
//   --> Paradigm: an approach and mindset of structuring code which will direct your coding style and technique
//   --> Popular paradigms: procedural, OOP (Object-oriented programming), FP (Functional programming)
//   --> Paradigms can be: imperative or declarative
// 5) Prototype-based Object-oriented
//   --> Almost everything in JS is an object, except for primitive values such as numbers, strings...
//   --> Arrays are objects, we can use the push-method in them because of prototypal inheritance, we create arrays from a 
//       template (prototype) and when we declare them, we inherit the methods from the template/prototype/blueprint
// 6) With first-class functions
//   --> First-class functions: functions that are treated simply as variables, we can pass them into other functions
//       and return them from functions
// 7) Dynamic(ally) typed language:
//   --> No data type definitions, type can be automatically changed, if you want types: C, TypeScript, Java
// 8) Single-threaded:
//   --> Concurrency model: how the JS engine handles multiple tasks happening at the same time
//       JS only uses 1 thread, so it can only do 1 thing at a time 
//   --> Thread: set of instructions computed on the CPU
// 9) With non-blocking event loop concurrency model:
//   --> What if there is a long thread (blocking task): event loop
//   --> Event loop: takes long running tasks, executes them in the BG and puts them back in the main thread once they are finished



/////////////////////////////////////////////////////
// 92. The JavaScript Engine and Runtime

// JavaScript engine: a computer program that executes JS code, every browser has it's own JS engine, the most famous is Google's V8
// Every JS engine has:
// --> Call Stack: where our code is executed, contains the execution context
// --> Heap: mempool where objects are stored

// How is the code compiled into machine code so that it can be executed afterwards?
// Machines only understand 0's and 1's, to arrive to those: compilation or interpretation
// --> Compilation: the entire code is converted into machine code at once, and written to a binary file that can be executed 
//                  on any a computer. 
//                  Source Code --Compilation--> Portable file: machine code --Execution--> Program Running
//                  Compiled languages: FAST
// --> Interpretation: interpreter runs through the source code and executes it line by line
//                     Source Code --Execution Line By Line--> Program running
//                     Interpreted languages: SLOW
// --> JIT Just-In-Time compilation: The entire code is converted into machine code at once, then executed immediately (Current JS)
//                                   Source Code --Compilation--> Machine Code --Execution--> Program Running

// Modern JIT Compilation of JS:
// 1) PARSING. JS code enters the engine and then parsing, reading the code, occurs, the code is parsed into AST (Abstract Syntax Tree)
//             AST saves the code, it translates it, into an structured form, this step also checks if there are any syntax errors
//             The resulting tree will also be used to generate the machine code. This tree, AST, has nothing to do with the DOM tree
// 2) COMPILATION. Takes the generated AST and compiles it into machine code
// 3) EXECUTION. This machine code then gets executed right away, bc modern JS Engine uses JIT compilation,
//               Execution happens in the Call Stack. 
//               A very unoptimized version of the JS code is created so it can run as fast as possible
// 4) OPTIMIZATION. The unoptimized version enters a loop, optimizing during execution:
//                  Compilation --> Execution --> Optimization --> Compilation
//                  This happens in special threads that to which we can't access from code

// RUNTIME:
// Definition: we can imagine the runtime as a container including all the things that we need to use JS (in this case in the browser)

// [RUNTIME IN THE BROWSER [
//      JS ENGINE {
//          [HEAP], 
//          [CALL STACK]
//      }, 
//      WEB APIs {
//          [DOM],
//          [Timers],
//          ...
//      },
//      CALLBACK QUEUE {
//          [click],
//          [timer],
//          [data]
//          ...
//      }
// ]]

// Web APIS: functionalities provided to the engine, accessible on window object
// Callback queue: contains all the functions that are ready to be called, e.g. callback function from DOM event listener
// Event loop: takes functions from the callback queue and puts them in the call stack so they can be executed,
//             the event loop is essential for the non-blocking concurrency model



/////////////////////////////////////////////////////
// 06/03/2025
// 93. Execution Contexts and The Call Stack

// 0) Let's start by supposing that our code has just finished compiling 
// 1) Creation of a global execution context (for top-level code, top-level code is immediately executed)

// const name = 'Jonas'; --> top level code

// const first (){ --> the function is only executed when called (not top level code)
//     let a = 1
//     ...
// }

// 1) What is an execution context? 
//    Environment in which a piece of JS is executed, stores all the necessary info for some code to be executed,
//    such as local variables or arguments passed into a function. JS always runs inside an execution context, it's like a box
//    that contains the JS code and the rest of the necessary elements to "consume" that JS code.
//    There is exactly 1 global execution context (EC): Default context created for code that is not inside any function, 
//    (only top-level code)

// 2) Execution of top-level code (inside global EC)

// 3) Execution of functions and waiting for callbacks (functions from the event loop)
//    There is 1 execution context per function: for each function call, a new execution context is created.

// 4) All these execution context (EC) together make the call stack
//    Each time a function is executed, a new execution context (EC) is pushed onto the stack, and when the function finishes, 
//    its EC is popped off the stack.

// 5) What's inside the execution context?
//    a) Variable Environment
//      --> let, const and var declarations
//      --> Functions
//      --> arguments object (Not in arrow funtions)
//    b) Scope chain
//    c) this keyword (Not in arrow functions)

// CODE:
// const name = 'Jonas'; --> top level code
//
// const first = () => { --> arrow function
//     let a = 1
//     ...
// }
//
// const second (){ --> 
//     let a = 1
//     ...
// }
// const x = first();

// Global Execution Context contains:
// name = 'Jonas'
// first = <function>
// second = <function>
// x = <unknown> --> needs to run first() first

// The other functions: first() and second() have their own execution context

// 6) The call stack:
//    [JS ENGINE {
//      [CALL STACK]
//      ...
//    }]
// 
// The call stack is the place where the execution contexts get stacked on top of each other
// to keep track of where we are in the execution, the 1st EC loaded into the call stack is the global EC.
// When a function is called, it gets it's own execution context and it is added to the call stack.
// Remember that JS is single-threaded, only 1 EC at a time, if a EC1 calls a function in EC2, EC1 is paused and EC2 is executed.
// The call stack is like a map for the JS engine, it ensures that the execution doesn't get lost.



/////////////////////////////////////////////////////
// 94. Scope and The Scope Chain
// We learned previously that each EC has it's own: variable environment, scope chain and this keyword

// Scoping: how our program's variables are organized and accessed. 
//          Where do variables live? 
//          Where can we access a certain variable and where not?
// Lexical scoping: scoping is controlled by placement of functions and blocks in the code.
// Scope: space or environment in which a certain variable is declared. 
//        Variable environment in case of functions.
//        There is global scope, function scope and block scope.
// Scope of a variable: region of our code where a certain variable can be accessed.

// 1) GLOBAL SCOPE
//     --> Outside of any function or block
//     --> Variables declared in global scope are accessible everywhere
// 2) FUNCTION SCOPE
//     --> Variables are accessible only inside the function, NOT outside
//     --> Also called local scope
// 3) BLOCK SCOPE (ES6): if, for/while... 
//     --> ONLY ES6 variables are block scoped: let and const variables ONLY
//     --> var is not scoped (NOT ES6)
//     --> Variables are only accesible inside the block
//     --> HOWEVER, this only applies to let and const variables
//     --> Functions are also block scoped (only in strict mode)

// Every scope always has access to all the variables from all its outer scopes, the parent scopes (variables lookup in scope chain)
// This does not work the other way around, a certain scope will never ever have access to the variables of an inner scope

// KEEP IN MIND: The order of function calls is not relevant to the scope chain at all

// LEXICAL SCOPING:
// The rules of where we can access variables are based on exactly where the code functions and blocks are written.

// SCOPE CHAIN:
// Every scope always has access to all the variables from all its outer scopes.
// Variable lookup: When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable
//                  it's looking for.
// The scope chain is a one-way street: a scope will never have access to the variables of an inner scope.
// The scope chain in a certain scope is equal to adding together all the variable environments fo all parent scopes.
// It has nothing to do with the order in which functions were called. It does not affect the scope chain at all.



/////////////////////////////////////////////////////
// 95. Scoping in Practice

// Function Scope
function calcAge(birthYear){
    const age = 2037 - birthYear;
    // Can access global scope: firstname
    console.log(firstName);

    // Cannot access inner scope: output (reference error)
    // console.log(output);

    // Inner function scope
    function printAge() {
        // Can access outer scopes: firstname, age, birthYear
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        // Block scope
        if(birthYear >= 1981 && birthYear <= 1996) {
            // Current scope overrides outer scope:
            const firstName = 'Steven';
            
            // str is an ES6 variable: let and const
            const str = `Oh, you're a millenial ${firstName}`;
            console.log(str);

            // var is function scoped not block scoped!
            var  millenial = true;

            // In ES6: functions are also block scoped 
            function add(a, b) {
                return a + b;
            }
            
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';
        }

        // Cannot access ES6 vars from block scopes: reference error
        // console.log(str);
        
        // But we can access var variables because they are NOT blocked scoped
        console.log(millenial);
        
        // ES6: But we cannot access functions inside the block scope
        // this is only true for strict mode: 'use strict';
        // without strict mode the function can be accessed.
        // console.log(add(2, 3));

        // Because the scope block got executed we get to access the 'new' output variable:
        // This wouldn't work for a declaration, but yes for reassigning
        console.log(output);

    }

    printAge();

    return age;
}

// Global Scope
const firstName = 'Jonas';
calcAge(1991);

// Cannot access inner scopes
// console.log(age);



/////////////////////////////////////////////////////
// 96. Variable Environment: Hoisting and The TDZ (Temporal Dead Zone)

// HOISTING: 
// Makes some types of variables accessible/usable in the code before they are actually declared.
// "Variables are lifted to the top of their scope."
// Behind the scenes: the code is scanned for variable declarations, for each variable, 
//                    a new property is created in the variable environment object.
// Hoisting doesn't look the same for all the variable types:
//                                        HOISTED?                  INITIAL VALUE               SCOPE
// function declarations                    YES                     Actual function             Block (only in strict mode)
// var variables                            YES                     undefined                   Function
// let and const variable                   NO                      <uninitialized>, TDZ        Block
// function expressions and arrows                      It depends if using var or let / const


const myName = "Jonas";

if (myName === 'Jonas') {
    ////////////// TDZ: TEMPORAL DEAD ZONE for job VARIABLE //////////////
    // ReferenceError: Cannot access 'job' b4 initialization:
    const age = 2037 - 1989;
    console.log(age);
    ////////////// TDZ: TEMPORAL DEAD ZONE for job VARIABLE //////////////

    const job = 'teacher';
    // ReferenceError: x is not defined
    console.log(x);
}


// TDZ RECAP: TEMPORAL DEAD ZONE 
// Each and every let and const variable get their own TDZ that starts at the beginning of the scope until the line where it is defined
// The variable is only safe to use after the TDZ

// Why was the TDZ introduced in ES6?
// It makes it easies to avoid and catch errors:  accessing variables b4 declaration is a bad practice and should be avoided.
// Makes const variables actually work.


// Why hoisting?
// --> Using functions before actual declaration
// --> var hoisting is just a byproduct



/////////////////////////////////////////////////////
// 97. Hoisting and TDZ in Practice


// HOISTING WITH VARIABLES

// undefined:
console.log(me);

// It is in the TDZ until the declaration below:
// console.log(job);

// It is in the TDZ until the declaration below:
// console.log(year);

var me = 'Blueslaboratory';
let job = 'teacher';
const year = 1991;


// HOISTING WITH FUNCTIONS

// It works:
console.log(addDeclaration(2,3));

// TDZ: because the function is defined with a const variable
// console.log(addExpressionConst(2,3));

// Only the var variable declaration is hoisted, not the assignment: 
// undefined:
// console.log(addExpressionVar);
// addExpressionVar is not a function:
// console.log(addExpressionVar(2,3)); 

// TDZ: cannot access 'addArrowFunction' b4 initialization
// console.log(addArrowFunction(2,3));

function addDeclaration(a, b){
    return a + b;
}

const addExpressionConst = function (a, b){
    return a + b;
}

var addExpressionVar = function (a, b){
    return a + b;
}

const addArrowFunction = (a, b) => a + b;



// Example: HARD TO FIND BUG
// This will delete all the products in the shopping cart bc of hoisting!

// numProducts here is undefined!
console.log(Boolean(undefined));
if (!numProducts) deleteShoppingCart();

var numProducts = 10

function deleteShoppingCart(){
    console.log('All products deleted!');
}

// Conclusion: 
// Don't use var to declare the variables if you can afford to do so! Use let or const.
// Declare the variables at the beginning of the scope.
// Declare all your functions 1st and use them only after the declaration.

var x = 1;
let y = 2;
const z = 3;

// Check out the window object in the browser Console:
// > window

// window property: 
// x: 1
// However we cannot find y or z, let or const do not create properties on the window object

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);



/////////////////////////////////////////////////////
// 98. The this Keyword

// this keyword/variable: 
//   --> Special variable that is created for every execution context (every function).
//   --> Takes the value of (points to) the owner of the function in which the this keyword is used.
//   --> The value is NOT static, it depends on how the function is called, 
//       and its value is only assigned when the function is actually called. 
//       There are 4 different ways in which a function can be called:

//          1) As a method: this = points to the <Object that is calling the method>

//             const me = {
//                 name: 'Blueslaboratory',
//                 year: 1999
//                 calcAge: function() {
//                    // this points to: me
//                    // way better than using me.year
//                    return 2037 - this.year
//                 }
//              };
//              me.calcAge; 

//          2) Simple function call: this = undefined --> only valid for strict mode, otherwise it will point to the window object

//          3) Arrow functions: this = <this keyword points to the surrounding function of the arrow function (lexical this)>.
//                              Arrow function DO NOT GET their own this keyword

//          4) Event listener: this = <DOM element that the handler is attached to>

//          5) new, call, apply, bind: <later in the course...>

//          !) this does NOT point to the function itself, and also NOT to the variable environment of the function



/////////////////////////////////////////////////////
99. The this Keyword in Practice

// window object:
console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    // undefined because of: 'use strict';
    // otherwise: window object
    console.log(this);
}

calcAge(1991);


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // this of the surrounding function/parent scope: window object
    console.log(this);
}

calcAgeArrow(1991);


const me = {
    year: 1999,
    calcAge: function () {
        // this points to the me object
        // me is the owner of the method calcAge
        // this keyword will point to the object that is calling the method
        console.log(this);
        console.log(2037 - this.year);
    }
};

// the reason why calcAge points to the me object is bc it is me the one who is calling the method, 
// not because it is inside the me object
me.calcAge();

const matilda = {
    year: 2017,
};

// method borrowing:
matilda.calcAge = me.calcAge;
console.log(matilda);
// this keyword will point in this case to Matilda
matilda.calcAge();

const f = me.calcAge;
console.log(f);
// undefined:
// f(); 



/////////////////////////////////////////////////////
100. Regular Functions vs. Arrow Functions

// Defines the firstName as a window object: another reason not to use var
// var firstName = 'Matilda;'

const blueslaboratory = {
    firstName: "Blue's Laboratory",
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // Solution 1: 
        // To preserve the this keyword inside the isMillenial function
        const self = this;

        const isMillenial = function() {
            console.log('\nSolution 1');
            // inside a regular function call the this keyword must be undefined (strict mode)
            console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1996);
            
            // Local variable, not related to this
            const year = 1969;
            // console.log(this.year);

            
            // using self:
            // inside a regular function call the this keyword must be undefined (strict mode)
            console.log(self);
            console.log(self.year);
            console.log(self.year >= 1981 && self.year <= 1996);
        };

        // Solution 2: 
        // Arrow function to inherit the this keyword from the parents scope:
        const isMillenial2 = () => {
            console.log('\nSolution 2');
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
        isMillenial2();
    },

    // As a good practice, you should never ever use an arrow function as a method:
    greet: () => {
        // this keyword here: window object
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },

    nonArrowGreet: function(){
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    }
};

// undefined: the arrow function will use the this keyword from it's surroundings, the global scope (window object)
blueslaboratory.greet();
// undefined:
console.log(this.firstName);

blueslaboratory.nonArrowGreet();
blueslaboratory.calcAge();


console.log('\nArguments keyword');
// it only exists in regular functions
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(1, 4);
addExpr(1, 4, 2, 3);

var addArrow = (a, b) => {
    // arguments keyword does not exist in arrow functions
    console.log(arguments);
    return a + b;
};

addArrow(2, 5, 8);



/////////////////////////////////////////////////////
101. Memory Management: Primitives vs. Objects

// This lecture will try to answer the question: 
// How and where are variables created in JS?

// Memory is automatically managed by JS behind the scenes.
// Every value we create in JS goes through a memory lifecycle.

// 1) Allocate memory
// 2) Use memory: read, write, update
// 3) Release memory

// Values in JS are either a primitive type or an object:
// --> Primitives: number, string, boolean, undefined, null, symbol, BigInt
// --> Objects: object literals, arrays, functions, sets, maps...

// JS Engine has 2 components: 
// 1) Call Stack: Where functions are executed and primitives are stored.
//                Primitive values are actually stored in the EC(Execution Context) in which they were created.
//                References to objects are actually stored in the Call Stack, memaddress.
//                The reference to the object location below is stored in the Global EC of the Call Stack:
//
//                const location = {
//                   city: 'Faro' --> Heap
//                   country: 'Portugal' --> Heap
//                }
//
//                // copies the reference to the object, it points to the object stored in the Heap:
//                const newLocation = location; 
//                // Changes both location and newLocation
//                newLocation.city = 'Lisbon'; 

// 2) Heap: Where memory is allocated for objects
// Sometimes there are exceptions and a really long string could be stored in the heap



/////////////////////////////////////////////////////
// 102. Object References in Practice (Shallow vs. Deep Copies)

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
};

const marriedJessica = marryPerson(jessica, 'Davis')

// Points out to the same object as jessica from the Heap:
// const marriedJessica = jessica;
// We cannot change the values of a constant, but we can change the property values of a constant:
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);

jessica.age = 23;


console.log('\nSHALLOW COPY');
// Spread operator: {...object}
// If we want to really copy the object itself: create a new object in the heap

const sofia = {
    firstName: 'Sofia',
    lastName: 'Laia',
    age: 137,
    family: ['Alice', 'Bob']
};

// Spread operator copies all the properties from the old object into the new object:
// It will only copy the 1st level of the object: the family object is not copied, only the memory reference
const sofiaCopy = {...sofia};
sofiaCopy.lastName = 'Rodriguez';

console.log(sofia.lastName, sofiaCopy.lastName);

// Family holds an object, so when you copy it with the spread operator, only the memory reference is copied out:
sofiaCopy.family.push('Mary');
sofiaCopy.family.push('Joe');

// This means, sofia and sofiaCopy will both hold as family: ['Alice', 'Bob', 'Mary', 'Joe']
console.log('Before:', sofia);
console.log('After:', sofiaCopy);



console.log('\nDEEP COPY/CLONE');
const sofiaClone = structuredClone(sofia)

// Family holds an object, so when you copy it with the spread operator, only the memory reference is copied out:
sofiaClone.family.push('Mary');
sofiaClone.family.push('Joe');

// This means, sofia and sofiaCopy will both hold as family: ['Alice', 'Bob', 'Mary', 'Joe']
console.log('Original:', sofia);
console.log('Clone:', sofiaClone);



/////////////////////////////////////////////////////
// 103. Memory Management: Garbage Collection

// 1) Allocate memory
// 2) Use memory: read, write, update
// 3) RELEASE MEMORY

// We are going to answer the question: 
// How is memory freed up after we no longer need a value?
// --> Call Stack: variable environment is simply deleted when the EC pops off stack; global variables will never be deleted
// --> Heap: Garbage collection (central memory management tool)

// Garbage collection: Mark-and-Sweep algorithm
// 1) Mark: Mark all objects that are reachable from root (Global Execution Context and other ECs) as 'alive'.
//          Objects can also be reached from active event listeners or timers; or closure. So these are also roots.
// 2) Sweep: delete un-marked (unreachable) objects and reclaim memory for future allocations.

// There is no way to control or trigger garbage collection from our code, we will also do not know when or how often it happens.
// Objects from the CALL STACK (Global EC) will never disappear, so they will stay in the heap 4ever.
// Globally defined objects will never be garbage collected.

// Memory leak: An object which is no longer needed by our application is incorrectly still reachable by the garbage collector from 
//              one of the memory roots. (It won't be deleted bc the object is marked as alive).
//              This usually happens from active event listeners and timers, so deactivate them when they are no longer needed.
//              Avoid declaring large objects as global objects.
// Roots: starting point to search for alive objects

// All this was an oversimplification, there are multiple heaps, multiple types of garbage collection algorithms for each heap, etc.
*/