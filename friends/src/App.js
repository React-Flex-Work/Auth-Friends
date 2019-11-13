import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Friends</h1>
        <PrivateRoute exact path='/' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </div>
    </Router>
  );
}

export default App;
