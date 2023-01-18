// Features of React and React DOM
// JSX - JavaScript XML

console.log('App.js is running!');

// var template = <p>This is JSX from app.js!</p>;

var template = React.createElement("h1", {
    id: ""
  }, "Something new!!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);