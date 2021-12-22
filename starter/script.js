'use strict';

// Functions to change the state of the modal and the overlay
function showOrHide(state) { 
    document.querySelector('.hidden').style.display = state;
    document.querySelector('.overlay').style.display = state;
}





// Event listeners for the click function once the modal's have been clicked or unclicked.
document.querySelector('.show-modal').addEventListener('click', function () {
  showOrHide("block");
  
});

document.querySelector('.close-modal').addEventListener('click', function () { 
    showOrHide("none");
});




const state = document.querySelector('.show-modal').addEventListener('click')