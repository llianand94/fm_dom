'use strict';

const createAdder = (n) => (m) => (n += m); 

const adder = createAdder(10);


adder(3);
adder(4);
console.log(adder(5));