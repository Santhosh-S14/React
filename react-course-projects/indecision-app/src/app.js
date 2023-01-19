// Features of React and React DOM
// JSX - JavaScript XML

console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Santhosh Santhanam',
    age: 25,
    location: 'Montreal'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    reactCounterApp();
};
const minusOne = () => {
    console.log('minusOne');
    count--;
    reactCounterApp();
};
const reset = () => {
    console.log('reset');
    count = 0;
    reactCounterApp();
};

const appRoot = document.getElementById('app');

const reactCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};

reactCounterApp();

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);