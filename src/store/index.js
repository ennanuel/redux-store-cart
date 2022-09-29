import { legacy_createStore as createStore } from 'redux';

const reducerFunc = (state = { counter: 0 }, action) => {

    //Must be Synchronous Function
    //Must not mutate the original state, main state must always be updated

    if(action.type === 'INC') {
        state = { counter: state.counter + 1 };
    }
    if(action.type === 'DEC') {
        state = { counter: state.counter - 1 };
    }
    if(action.type === 'ADD') {
        state = {counter: state.counter + action.payload};
    }

    return state;
}

const store = createStore(reducerFunc);

export default store;