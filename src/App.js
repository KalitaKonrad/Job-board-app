import React, { Component } from 'react';
import axios from './api/api_config';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container max-h-full max-w-full w-screen h-screen text-white '>
        <Navbar />
        <Router>
          <Route path='/login' component={Login} />
        </Router>
        <div className='container mx-auto p-4 m-4'>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
