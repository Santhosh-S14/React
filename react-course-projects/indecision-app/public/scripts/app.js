'use strict';

// Features of React and React DOM
// JSX - JavaScript XML

console.log('App.js is running!');

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
