'use strict';

// Variables have been added for all of the main classes which require manipulation
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');

// Functions to change the state of the 'modal' and also the 'overlay'
// This function allows both of the states to change at the same time, as
// they will always be in syncronisation with each other and never seperate.
function showOrHide(state) {
  modal.style.display = state;
  overlay.style.display = state;
}

// To select all of gthe other buttons to be affected,
// We must therefore have a for loop.. This brings us to the first limitation
// of using the document.querySelector.. in that it can only select a single element
// at any given time.

// If for example we have multiple buttons with the same class we must therefore use
// a for loop to cycle through each of them as we would with an array
// *This is not however to be confused with an array*

// We first select the class which has multiple elements.. in this case it's the show modal class.. which
// If viewed in the index.html, this class has 3 of the same elements.

// When selecting this using the DOM, we must type *querySelectorAll*
// Next, once we have declared the variable, we must then loop through with a for loop

//FOR LOOP
//the syntax of the code should include the length of the class we wish to cycle through in order to access all of the elements
// To do this.. we use *class.length*
// To then make sure that the same action is performed from a click for example, we then add an event listener
// To the variable we have created.
// *Variable(class turned into a variable which selects ALL).addEventListener('click', function () { +code you wish to be performed on all of the code. });

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonCloseModal.addEventListener('click', function () {
    showOrHide('none');
  });
  buttonOpenModal[i].addEventListener('click', function () {
    showOrHide('block');
  });
}

// Event listeners for the click function once the modal's have been clicked or unclicked.
// document.querySelector('.show-modal').addEventListener('click', function () {
//   showOrHide('block');
// });

// document.querySelector('.close-modal').addEventListener('click', function () {
//   showOrHide('none');
// });
