import React, { useEffect, Component } from 'react';
import axios from './api/api_config';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Offers from './components/Offers';
import { useSelector, useDispatch, connect } from 'react-redux';
import allActions from './actions/index';
import { fetchOffers } from './actions/fetchOffers';
import Login from './components/Login';
import JobForm from './components/JobForm';

const mapStateToProps = state => {
  return {
    offers: state.offers,
    isLogged: state.isLogged
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
  componentDidMount() {
    this.props.fetchOffers();
  }

  render() {
    return (
      <div className='container flex flex-col max-h-full max-w-full w-screen h-screen'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Offers />
            </Route>
            <Route exact path='/signup'>
              <Navbar />
              <SignUp />
            </Route>
            <Route exact path='/login'>
              <Navbar />
              <Login />
            </Route>
            <Route exact path='/job'>
              <Navbar />
              <JobForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
