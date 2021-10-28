'use strict';

const buttons = document.querySelectorAll('button');

const handler = (e)=>{
 e.capture= true;
 console.dir(e.target);
 console.dir(e.currentTarget);
}
// const btnHandler =({target:{
//   dataset:{color},
//   parentNode: parentRoot,
//   }
// })=> parentRoot.style.backgroundColor=color;


for (const btn of buttons) {  
  btn.addEventListener('click', handler);
} 

document.getElementById('root').addEventListener('click', handler);
document.body.addEventListener('click', handler);
document.addEventListener('click', handler);
window.addEventListener('click', handler, true);