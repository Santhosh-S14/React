import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type:'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1} = {}) => {
    return {
        type:'DECREMENT',
        decrementBy
    }
};

const setCount = ({ count: set_count } = {}) => {
    return {
        type:'SET',
        set_count
    }
}

const resetCount = () => (
    {
        type:'RESET'
    }
);

const store = createStore((state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.set_count
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
