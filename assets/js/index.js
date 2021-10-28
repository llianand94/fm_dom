'use strict';

const buttons = document.querySelectorAll('button');


const btnHandler =({target:{
  dataset:{color},
  parentNode: parentRoot,
  }
})=> parentRoot.style.backgroundColor=color;


for (const btn of buttons) {
  btn.addEventListener('click', btnHandler);
} 