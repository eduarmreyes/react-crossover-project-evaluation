import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

export default (
  <Route component={ App }>
    <Route path='/' component={ Login } />
    <Route path='/home' component={ Home } />
  </Route>
);