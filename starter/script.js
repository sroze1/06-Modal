'use strict';


function showOrHide(state) { 
    document.querySelector('.hidden').style.display = state;
}

document.querySelector('.show-modal').addEventListener('click', function () {
  showOrHide("block");
});

document.querySelector('.close-modal').addEventListener('click', function () { 
    showOrHide("none");
});

