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
    isLoading: false,
    error: null,
    posts: []
};

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_POSTS_BEGIN':
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case 'GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.posts,
                isLoading: false
            };
        case 'GET_POSTS_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.error
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

