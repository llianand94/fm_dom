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
    const item = document.createElement('li');
    item.innerText= inputValue;
    list.append(item);
    //после добавления - очищать форму
    form.reset();
  }
  
  //рендерить на странице то, что добавилось в массив
  console.dir(messageArray);
})
