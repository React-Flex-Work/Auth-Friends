import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1 data-shadow='Hello Friends!'>Hello Friends!</h1>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
