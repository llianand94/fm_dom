'use strict';
const imagesDB = ['https://oir.mobi/uploads/posts/2021-05/1622262892_61-oir_mobi-p-krasivie-vidi-prirodi-priroda-krasivo-foto-65.jpg', 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/47/c328965713368880.jpg', 'https://i.pinimg.com/474x/83/58/37/835837bfbf098d0826756eceecbefdd5.jpg'];

const slider = new Slider(imagesDB);
const img = document.querySelector('.slide>img');

const [btnPrev,btnNext] = document.querySelectorAll('.slider-container>button');

function updateView(){
  img.setAttribute('src',slider.currendSlide);
}
updateView();

img.addEventListener('wheel', ()=>{
  slider.currendIndex= slider.nextIndex
  updateView();});

  const btnSliderHandler = (direction = 'next') => () => {
    slider.currendIndex = slider[direction==='next'? 'nextIndex' : 'prevIndex'];
    updateView();
  }

btnNext.addEventListener('click', ()=>{
  slider.currendIndex= slider.nextIndex
  updateView();
});
btnPrev.addEventListener('click', ()=>{
  slider.currendIndex= slider.prevIndex
  updateView();
});

