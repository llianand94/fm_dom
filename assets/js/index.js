'use strict';

const messageArray = [];
const list = document.getElementById('list');
const form = document.getElementById('root-form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target: { textInput }} = e;
  //после нажатия на кнопку добавлять значение инпута в массив, если оно не пустое
  const inputValue = textInput.value.trim();    
  if(inputValue){    
    messageArray.push(inputValue); 
    list.append(createElement('li', inputValue));       
    //после добавления - очищать форму
    form.reset();
  }  
  //рендерить на странице то, что добавилось в массив
  
})
 function createElement(type, text){
   const elem = document.createElement(type);
   elem.append(document.createTextNode(text));
   return elem;
 }


//  const dateValidator= /^([12][09]\d{2})\/([01]\d)\/([0-3]\d)$/;
//  // осталось ограничить в $1 между 1941-2021..

const fileNameValidator = /^([^\\\/:*?"<>|])+\.((jpg)|(png))$/;


function start(counter){
  if(counter < 10){
    setTimeout(function(){
      counter++;
      console.log(counter);
      start(counter);
    }, 1000);
  }
}
