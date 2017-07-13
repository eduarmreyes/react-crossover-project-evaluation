import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import VideoDetail from './components/VideoDetail';

export default (
  <Route component={ App }>
    <Route path='/' component={ Login } />
    <Route path='/logout' component={ Logout } />
    <Route path='/home' component={ Home } />
    <Route path='/video/:videoId' component={ VideoDetail } />
  </Route>
);