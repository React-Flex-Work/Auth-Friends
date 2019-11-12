import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Friends</h1>
        <Route path='/login' component={Login} />
        <Route path='/protected' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
