'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



/////////////////////////////////////////////////////
// 27/03/2025
// 195. How the DOM Really Works
/*
console.log('\n195. How the DOM Really Works');

// The DOM is the interface between our JS and the browser (HTML documents that are rendered in and by the browser)

// The DOM:
// - Allows us to make JS interact with the browser
// - We can write JS to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events
// - DOM tree is generated from an HTML document, which we can then interact with
// - DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree



/////////////////////////////////////////////////////
// 196. Selecting, Creating, and Deleting Elements

console.log('\n196. Selecting, Creating, and Deleting Elements');


console.log('*** SELECTING ELEMENTS ***');

console.log('Selecting the entire HTML:');
console.log(document.documentElement);

console.log('Selecting the head:');
console.log(document.head);

console.log('Selecting the body:');
console.log(document.body);


console.log('\nReturning the 1st element that matches the selector:');
const header = document.querySelector('.header');
console.log(header);

console.log('Selecting multiple elements:');
// NodeList: is not a live collection, if the DOM changes it does not update
const allSections = document.querySelectorAll('.section')
console.log(allSections);

console.log('\nGet element by Id:');
console.log(document.getElementById('section--1'));

console.log('\nGet elements by TagName:');
// HTMLCollection: is a live collection, it updates, if the DOM changes, so does the collection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log('\nGet elements by ClassName:');
// HTMLCollection: is a live collection, it updates, if the DOM changes, so does the collection
console.log(document.getElementsByClassName('btn'));


console.log('\n*** CREATING AND INSERTING ELEMENTS ***');
// insertAdjacentHTML

const myDiv = document.getElementById("myDiv");

// Add a paragraph before the div
myDiv.insertAdjacentHTML("beforebegin", "<p>👋 Before the div</p>");
// Add content at the beginning of the div
myDiv.insertAdjacentHTML("afterbegin", "<strong>Start - </strong>");
// Add content at the end of the div
myDiv.insertAdjacentHTML("beforeend", " - <em>End</em>");
// Add a paragraph after the div
myDiv.insertAdjacentHTML("afterend", "<p>✅ After the div</p>");

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies 🍪 ÑAM ÑAM';
message.innerHTML = 'Cookie MONSTER 🍪 <button class="btn btn--close-cookie">Got it!</button>';


// prepend and append: the message element cannot be in 2 multiple places at the same time, 
// so you can use prepend and append to not only insert elements but to move them
// Appending to the header as the 1st child of the header element
// header.prepend(message);

// Appending to the header as the last child of the header element
header.append(message);

// Before the header
// header.before(message);
// After the header
// header.after(message);

// inserting multiple elements:
// header.prepend(message.cloneNode(true));


console.log('\n*** DELETING ELEMENTS ***');

// Removing the element when you click in the GOT IT button
document.querySelector('.btn--close-cookie').
addEventListener('click', function(){
  message.remove();

  // legacy way of removing an element
  message.parentElement.removeChild(message);
})



/////////////////////////////////////////////////////
// 197. Styles, Attributes and Classes

console.log('\n197. Styles, Attributes and Classes');

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies 🍪 ÑAM ÑAM';
message.innerHTML = 'Cookie MONSTER 🍪 <button class="btn btn--close-cookie">Got it!</button>';

// Appending to the header as the last child of the header element
header.append(message);

console.log('\nStyles');
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// not getting anything
console.log(message.style.height);
console.log(message.style.color);

// getting sthing
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
// we didn't define the height but we of course get sthing bc of the browser:
console.log(getComputedStyle(message).height);

console.log('\nIncreasing the height');
message.style.height = Number.parseFloat(getComputedStyle(message)).height + 40 + 'px';
console.log(getComputedStyle(message).height);


// The CSS root element is in JS the document element
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes: src, alt, class, id...
console.log('\nAttributes');
// <img>
//    src=
//    alt=
//    class=
//    id=
// </img>

const logo = document.querySelector('.nav__logo');

// Standard
console.log('\nStandard:');
console.log(logo.alt);
console.log(logo.className);

console.log('\nChanging an attribute:');
logo.alt = 'Beautiful and pretty'
console.log(logo.alt);

// Non-standard
console.log('\nNon-standard:');
console.log(logo.designer);
console.log(logo.getAttribute('designer'));


console.log('\nImage: Absolute vs Relative:');
console.log(logo.src); // Absolute
console.log(logo.getAttribute('src')); // Relative


console.log('\nLinks: Absolute vs Relative:');
const link = document.querySelector('.nav__link--btn');

console.log(link.href); // Absolute
console.log(link.getAttribute('href')); // Relative


console.log('\nData attributes');
// data-version-number="3.0" --> versionNumber must be transformed into camelCase:
console.log(logo.dataset.versionNumber);


console.log('\nClasses');
logo.classList.add('c');
logo.classList.remove('c', 'j')
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// don't use
logo.className = 'blue';



/////////////////////////////////////////////////////
// 200. Event Propagation: Bubbling and Capturing

console.log('\n200. Event Propagation: Bubbling and Capturing');

// JS events have 2 phases: bubbling and capturing
// See video and image: 3. Bubbling and capturing



/////////////////////////////////////////////////////
// 201. Event Propagation in Practice

console.log('\n201. Event Propagation in Practice');

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('.nav__link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stopping the propagation 
  // --> they don't propagate to the parent elements: .nav__links or .nav
  // --> in general it is not a good idea to stop the propagation of events
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('.nav__links', e.target, e.currentTarget);
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('.nav', e.target, e.currentTarget);
}, true)
// true parameter here captures the event as it travels down from the DOM, so it's the 1st one in 'capture' it!
// REMEMBER: 1st the event travels down to the target and then it bubbles up



/////////////////////////////////////////////////////
// 202. Event Delegation: Implementing Page Navigation

console.log('\n202. Event Delegation: Implementing Page Navigation');

// So that when we click a link in the nav it scrolls smoothly downward

// Dirty solution, inefficient for high loads of work:
// document.querySelectorAll('.nav__link').forEach(function(e) {
//   e.addEventListener('click', function(e){
//     // preventing the default action: jumping to the section
//     e.preventDefault();
//     // console.log('.nav__link');

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// Event delegation:
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
  // Preventing the default behaviour:
  e.preventDefault();
  
  // Getting to know the event that the click triggered:
  console.log(e.target);

  // Matching strategy
  if(e.target.classList.contains('nav__link')){
      // console.log('nav__link');

      const id = e.target.getAttribute('href');
      console.log(id);

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
  }
});



/////////////////////////////////////////////////////
// 28/03/2025
// 203. DOM Traversing

console.log('\n203. DOM Traversing');

// DOM traversing is basically walking through the DOM, which means we can select an element based on another element
const h1 = document.querySelector('h1');


// Going downwards: child
console.log('\nGoing downwards: child');
// This selects all the elements with the .highlight class that are children of the h1 element (NodeList)
console.log(h1.querySelectorAll('.highlight'));
// childNodes: Every single node of every single type that exists as child of h1 (NodeList)
console.log(h1.childNodes);
// children: Only for direct children (HTMLCollection)
console.log(h1.children);

h1.firstElementChild.style.color = 'blue'; // banking
h1.lastElementChild.style.color = 'red'; // minimalist


// Going upwards: parents
console.log('\nGoing upwards: parents');
console.log(h1.parentNode);
console.log(h1.parentElement);

// From CSS
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // orange
h1.closest('h1').style.background = 'var(--gradient-primary)'; // green


// Going sideways: siblings
console.log('\nGoing sideways: siblings');
// because h1 is the 1st child, it does not have a previous sibling:
console.log(h1.previousElementSibling); 
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// HTMLCollection
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(element){
  if (element !== h1){
    element.style.transform = 'scale(0.5)';
  }
});



/////////////////////////////////////////////////////
// 204. Building a Tabbed Component
*/
console.log('\n204. Building a Tabbed Component');

// Get familiar 1st with the HTML structure and the CSS: 
// <div class="operations__tab-container">

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Selecting the tabs quickly: inefficient
// tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB')));


// We are going to use event delegation:
console.log('\nEvent delegation:');

tabsContainer.addEventListener('click', function(e){
  // If we click the number, we get span, but we want the button to be 'clicked'
  // const clicked = e.target;
  // 1st way:
  // const clicked = e.target.parentElement;
  // 2nd way: Most used
  const clicked = e.target.closest('.operations__tab');
  
  // Guard clause
  // Clicking in the tabs container renders null, this is problematic, this can be solved:
  if(!clicked)
    return;

  // Remove active classes
  // Removing the "operations__tab--active" and adding it only to the clicked tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  console.log(clicked);
  tabsContent.forEach(contentArea => contentArea.classList.remove('operations__content--active'))
  
  // Activate tab
  clicked.classList.add('operations__tab--active');


  // Activate the content area
  // accesing the data-tab="2" element
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});