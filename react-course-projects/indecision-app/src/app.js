import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log('app.js is running!!!');

//named exports
console.log(square(4));
console.log(add(100, 23));

//default export
console.log(subtract(100, 23));

//another example to test
console.log(isAdult(18));
console.log(canDrink(21));
console.log(isSenior(64));