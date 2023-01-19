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