import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

//Redux Set default state
//index store the order of each genre
//flag represent whether that genre's order has been changed
const initialState = {keyWordsList:[{index: 0, name: "Rock", flag: true},
                                    {index: 1, name: "Hip-Hop / Rap", flag: true},
                                    {index: 2, name: "Pop", flag : true},
                                    {index: 3, name: "Country", flag: true}, 
                                    {index: 4, name: "Latin", flag: true}, 
                                    {index: 5, name: "Jazz", flag: true}, 
                                    {index: 6, name: "Classical", flag: true}],
                        selectedKeywords: []
                    };

const reducer = (state = initialState, action) => {
    switch (action.type){
        //when action type is addKeywords, replace old state
        case "addKeywords":
            return {keyWordsList: action.keyWordsList, ...state};
        case "addSelectedKeywords":
            //change selectedkeywords while not change the other
            return {...state, selectedKeywords: action.selectedkeys};
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

