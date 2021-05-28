import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

//Redux Set default state
const initialState = {keyWordsList:[{index: 0, name: "Rock", flag: true},
                                    {index: 1, name: "Hip-Hop / Rap", flag: true},
                                    {index: 2, name: "Pop", flag : true},
                                    {index: 3, name: "Country", flag: true}, 
                                    {index: 4, name: "Latin", flag: true}, 
                                    {index: 5, name: "Jazz", flag: true}, 
                                    {index: 6, name: "Classical", flag: true}]};

const reducer = (state = initialState, action) => {
    switch (action.type){
        //when action type is addKeywords, replace old state
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

