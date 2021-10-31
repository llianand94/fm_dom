'use strict';

const arrSrc = ['https://klike.net/uploads/posts/2019-12/1577611603_6.jpg','https://fishki.net/picsw/072011/15/bonus/peyzazhi/tn.jpg'];

const btn = document.querySelector('button');
const img = document.querySelector('.img-wrapper>img');
const counter = oneFromTwo();


const imgHandler = function(){  
   
  img.setAttribute('src', arrSrc[counter()]);    
};

btn.addEventListener('click', imgHandler);


function oneFromTwo(){
  let count = 0; 
  const innerCounter =()=>(count += 1)%2;   
  return innerCounter;
}
  