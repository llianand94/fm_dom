'use strict';

const slider = new Slider(imagesDB);
const img = document.querySelector('.slide>img');
const btn = document.querySelector('.btn')


function updateView(){
  img.setAttribute('src',slider.currendSlide);
}
updateView();


btn.addEventListener('click', (e)=>{
  console.log(e.target);
  slider.currendIndex= slider.nextIndex
  updateView();
});

