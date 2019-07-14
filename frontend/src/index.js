import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";


let initState = {
    opened: 0,
    rate: 0,
    data: []
};

function reducer(state = initState, action) {
    switch(action.type) {
        case 'SET_OPENED':
            return {
                ...state,
                opened: action.opened,
            };
        case 'SET_RATE':
            return {
                ...state,
                rate: action.rate
            };
        case 'SET_DATA':
            return {
                opened: 0,
                rate: 0,
                data: action.data
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
