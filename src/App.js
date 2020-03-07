import React, { Component } from 'react';
import axios from './api/api_config';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Offer from './components/Offer';
import Offers from './components/Offers';

class App extends Component {
  render() {
    return (
      <div className='container max-h-full max-w-full w-screen h-screen'>
        <Navbar />
        <Router>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/internship'>
            <Offer />
            <Offers />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
