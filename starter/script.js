'use strict';

document.querySelector('.show-modal').textContent = "changeMane";
document.querySelector('button').style.backgroundColor = 'yellow';

function showOrHide(state) { 
    document.querySelector('.hidden').style.display = state;
}

function overlayState(state) { 
    document.querySelector('.overlay').style.display = state;
}




document.querySelector('.show-modal').addEventListener('click', function () {
  showOrHide("block");
  overlayState("block");
});

document.querySelector('.close-modal').addEventListener('click', function () { 
    showOrHide("none");
    overlayState("none");
});

