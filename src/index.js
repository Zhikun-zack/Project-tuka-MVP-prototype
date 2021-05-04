import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const reducer = (state, action) => {
    if(action.type = "keywords"){
        console.log("delivered keys" + action.keyWordsList);
        console.log(action.keyWordsList)
        return {keyWordsList: action.keyWordsList};
        //return "the action dispatched on is try";
    }
    else{
        return {keyWordsList: ["Trending Now","Pop","Hip-Hop / R&B","Rock","Country Western"]};
    }
    
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root')
);

