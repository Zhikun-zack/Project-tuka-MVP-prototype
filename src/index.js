import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const reducer = () => {
    
    return {keyWordsList: []};
}
const store = createStore(reducer);
console.log("In index.js" + store.getState().keyWordsList);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root')
);

