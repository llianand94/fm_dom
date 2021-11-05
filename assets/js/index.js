'use strict';

const promiseObj = fetch('./assets/js/fruits.json').then((response)=>response.json()).then((data)=> {
  data.forEach((obj)=>{console.log(obj.fruit)});
  
  const onlyRed = data.filter((fruit)=>fruit.color==='Red');
  console.log('Array only Red fruits', onlyRed);

  const onlyLarge = data.filter((fruit)=>fruit.size==='Large');
  console.log('Array only', onlyLarge);
});

