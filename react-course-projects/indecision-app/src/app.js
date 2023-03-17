import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running!!!');

//named exports
console.log(square(4));
console.log(add(100, 23));

//default export
console.log(subtract(100, 23));

//another example to test
console.log("Is Adult: ", isAdult(18));
console.log("Can Drink: ", canDrink(21));
console.log("Is Senior: ", isSenior(64));

console.log("Verify email: ", validator.isEmail('test@gmail.com'));

const template = <p>THIS IS JSX FROM WEBPACK</p>
ReactDOM.render(template, document.getElementById('app'));