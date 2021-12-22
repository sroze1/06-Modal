'use strict';

// Variables have been added for all of the main classes which require manipulation
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');

// Functions to change the state of the 'modal' and also the 'overlay'
// This function allows both of the states to change at the same time, as
// they will always be in syncronisation with each other and never seperate.
// function showOrHide(state) {
//   modal.style.display = state;
//   overlay.style.display = state;
// }

// To select all of the other buttons to be affected,
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

////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
// NEW CODE

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Class lists have been used to open and close the modals.
// This is apparently better than changing the state of the display class using the CSS manipulation as used earlier
// (lol) and apparently saves repeating this step if there are many other classes without the hidden classes which we may need to hide
// Either way it's more knowledge so I shouldn't let my ego get in the way of me learning.. I just learn something new again

// Anyways, once you click the modal a function is performed

// The function performed can be seen above, (openModal, closeModal)
// This basically removes or adds the 'hidden' class from the classes we have selected
// We do not need to use the ('.') dot when selecting the class.. as we are specifically only
// highlighting a class list, there is no need for further specificty -- i.e we are using "classList" (duh?!)

// This is then followed by the syntax of adding or removing depending on the function

// To implement this function in our code what we have to do is basically add it to where the function would
// Normally be after the eventListener we are using (in this example it's a click)
// HOWEVER, we must not use the brackets as we normally do with anonymous functions (e.g addEventListener('click', function () {     }        ))
// This is because otherwise the code will be immediately executed, and we only want to execute it when the click event is performed.. not just at all times!

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
