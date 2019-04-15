// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Components
import Reddit from './Reddit';

// CSS
import './index.css';

// Initial State
const initialState = {
    posts: []
};

// Reducer
function reducer(state = initialState, action) {
    return state;
};

// Store
const store = createStore(reducer);

ReactDOM.render(
    <Provider>
        <Reddit />
    </Provider>, 
    document.querySelector('#root')
);

