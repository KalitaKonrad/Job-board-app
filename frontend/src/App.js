import React, { useEffect, Component } from 'react';
import axios from './api/api_config';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Offers from './components/Offers';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchOffers } from './actions/fetchOffers';
import Login from './components/Login';
import JobForm from './components/JobForm';
import SearchBar from './components/SearchBar';
import UsageData from './components/UsageData';
import CompanyList from './components/CompanyList';

class App extends Component {
  render() {
    return (
      <div
        className='w-screen h-screen bg-gray-100'
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
          // backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg')`,
          // background: 'linear-gradient(to bottom, #1e5799 0%,#207cca 1%,#1e5799 94%,#2989d8 100%,#7db9e8 100%)',
          backgroundBlendMode: 'darken',
          backgroundImage: `url('https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')`,
          backgroundPosition: 'center center',
          backgroundColor: `rgba(0,0,0,0.4)`, // not working :/
          backgroundSize: '100%',
          backgroundRepeat: 'noRepeat',
          transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
          opacity: 1
        }}
        // style={{ backgroundImage: `require('./img/background.jpg')`, backgroundSize: 'contain' }}
      >
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <SearchBar />
              <UsageData />
              {/* <CompanyList /> */}
              <Offers />
            </Route>
            <Route exact path='/signup'>
              <Navbar />
              <SignUpForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
