import React, { useEffect, Component } from 'react';
import axios from './api/api_config';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Offers from './components/Offers';
import { useSelector, useDispatch, connect } from 'react-redux';
import allActions from './actions/index';
import { fetchOffers } from './actions/fetchOffers';

const mapStateToProps = state => {
  return {
    offers: state.offers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffers: () => dispatch(fetchOffers())
  };
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container flex flex-col max-h-full max-w-full w-screen h-screen'>
        <Router>
          <Navbar />
          <button
            className='container block mx-auto bg-blue-500 font-bold m-4 p-4 rounded-lg focus:outline-none'
            onClick={() => this.props.fetchOffers()}
          >
            Click
          </button>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/internship'>
            <div className='container flex flex-col'>
              <Offers />
            </div>
          </Route>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
