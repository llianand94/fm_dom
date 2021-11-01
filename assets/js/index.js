'use strict';

const buttons = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');


const flexHandler = ({target:{dataset:{flexDirection}}})=>{ 
  wrapper.style.flexDirection=flexDirection;     
};

for (const button of buttons) {
  button.addEventListener('click', flexHandler);  
}