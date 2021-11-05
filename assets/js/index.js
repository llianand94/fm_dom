'use strict';

const promiseObj = fetch('./assets/js/fruits.json').then((response)=>response.json()).then((data)=> {
  data.forEach((obj)=>{console.log('Fruit name =', obj.fruit)});
  console.log('');
  data.filter((fruit)=>fruit.color==='Red').forEach((obj)=>{console.log('Only Red fruit - ', obj.fruit)});  
  console.log('');
  data.filter((fruit)=>fruit.size==='Large').forEach((obj)=>{console.log('Only Large fruit - ', obj.fruit)});
  
  console.log('');
  data.filter((fruit)=>fruit.size==='Large'&&fruit.color==='Red').forEach((result)=>{console.log('Both filter:', result.fruit)})
});