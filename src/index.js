import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

//Redux Set default state
const initialState = {keyWordsList:["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]};

const reducer = (state = initialState, action) => {
    switch (action.type){
        //when action is addKeywords, replace old state
        case "addKeywords":
            return {keyWordsList: action.keyWordsList};
        default:
            return state
    } 
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root')
);

