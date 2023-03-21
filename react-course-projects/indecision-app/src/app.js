import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Santhosh';
//         this.getGreeting = this.getGreeting.bind(this);
//     };

//     getGreeting() {
//         return `Hi, My name is ${this.name}.`
//     }
// }

// class NewSyntax {
//     name = 'Jen';

//     getGreeting = () => {
//         return `Hi, My name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());