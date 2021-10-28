'use strict';

const [openBtn, closeBtn] = document.querySelectorAll('button');

const switchInnerText = ({target}) =>{  
  const openElem= target===closeBtn? openBtn :closeBtn;
  const closeElem= target===closeBtn? closeBtn :openBtn;

  const buffer = openElem.innerText;
  openElem.innerText = closeElem.innerText;
  closeElem.innerText = buffer;

  closeElem.removeEventListener('mouseenter',switchInnerText);
  openElem.addEventListener('mouseenter',switchInnerText);
};

closeBtn.addEventListener('mouseenter',switchInnerText);


const clickHandler= ({target})=>{  
    console.log(target);  
  
};
openBtn.addEventListener('click', clickHandler);
closeBtn.addEventListener('click', clickHandler);