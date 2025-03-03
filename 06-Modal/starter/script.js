'use strict';
/*
Multi-Line comment



/////////////////////////////////////////////////////
// 28/02/2025
// 81. PROJECT #2: Modal Window
// 82. Working With Classes
// 83. Handling an "Esc" Keypress Event
*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// whenever you use querySelector for multiple elements, only the 1st one will get selected
// that's why we use querySelectorAll
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

// open pop-up (modal)
const openModal =  function() {
    console.log('Button clicked');
    // here we pass the name of the class, it's not the selector: .hidden
    modal.classList.remove('hidden', 'name-of-the-class');
    overlay.classList.remove('hidden');

    // You can do it for individual properties but it is better to do it for a class
    // modal.style.display = 'block';
};

// close pop-up (modal)
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i=0; i<btnsShowModal.length; i++) {
    // console.log(btnsShowModal[i].textContent);
    btnsShowModal[i].addEventListener('click', openModal);
}

// This:
// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// Is equivalent to this:
btnCloseModal.addEventListener('click', closeModal);

// This doesn't work because it will immediately call the function:
// btnCloseModal.addEventListener('click', closeModal());
overlay.addEventListener('click', closeModal);


// pressing the ESC key to exit:
// keydown: pressing the key
// keyup: lifting the finger from the key
// keypress: pressing continuously the key

// event
document.addEventListener('keydown', function(event) {
    console.log(`A key was pressed: ${event.key}`);
    // console.log(event);
    // console.log(event.key);

    if (event.key === 'Escape') {
        console.log('Escape was pressed');

        // if the modal does not contain the hidden class
        if (!modal.classList.contains('hidden')){
            closeModal();
        }
    }
});