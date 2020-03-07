import React, { useEffect, Component } from 'react';
import axios from './api/api_config';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Offers from './components/Offers';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions/index';
import ReduxThunk from 'redux-thunk';

function App() {
  const offers = useSelector(state => state.offers);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(allActions.fetchOffers());
  // }, []);

  return (
    //onLoad={() => dispatch(fetchOffers())}
    <div className='container max-h-full max-w-full w-screen h-screen'>
      <Navbar />
      <button onClick={() => dispatch(allActions.fetchOffers())}>click</button>
      <Router>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/internship'>
          <Offers />
        </Route>
      </Router>
    </div>
  );
}

export default App;
