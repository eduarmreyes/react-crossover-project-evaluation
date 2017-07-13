import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer } from 'react-router-redux'
import Root from './routes';

const store = createStore(
  combineReducers({
    routing: routerReducer
  });
);

ReactDOM.render(
  <Provider store={ store }>
    { /* Tell the Router to use our enhanced history */ }
    { Root }
  </Provider>,
	document.getElementById('app')
);