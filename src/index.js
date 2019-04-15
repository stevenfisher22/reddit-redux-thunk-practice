// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Components
import Reddit from './Reddit';
import { getPosts } from './actions';

// CSS
import './index.css';

// Initial State
const initialState = {
    posts: []
};

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_POSTS_SUCCESS':
            return {
                posts: action.posts
            };
        default:
            return state;
    };
        
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getPosts())

ReactDOM.render(
    <Provider store={store}>
        <Reddit />
    </Provider>, 
    document.querySelector('#root')
);

