import React, { Component } from 'react';

import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './components/Jobs';
import { connect } from 'react-redux';
import { fetchJobs, clearJobs } from './actions/fetchJobs';
import Login from './components/Login';
import JobForm from './components/JobForm';
import SearchBar from './components/SearchBar';
import UsageData from './components/UsageData';
import CompanyList from './components/CompanyList';
import { JOBS_ENDPOINT, HOME_ENDPOINT, LOGIN_ENDPOINT, SIGNUP_ENDPOINT, JOBFORM_ENDPOINT } from './api/endpoints';

class App extends Component {
  render() {
    return (
      <div
        className='w-screen h-screen'
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')`,
          // backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg')`,
          // background: 'linear-gradient(to bottom, #1e5799 0%,#207cca 1%,#1e5799 94%,#2989d8 100%,#7db9e8 100%)',
          backgroundBlendMode: 'darken',
          backgroundImage: `url('https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')`,
          backgroundPosition: 'center center',
          backgroundColor: `rgba(0,0,0,0.4)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
          transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
          opacity: 1
        }}
        // style={{ backgroundImage: `require('./img/background.jpg')`, backgroundSize: 'contain' }}
      >
        <Router>
          <Switch>
            <Route exact path={HOME_ENDPOINT}>
              <Navbar />
              <SearchBar />
              <UsageData />
            </Route>
            <Route exact path={SIGNUP_ENDPOINT}>
              <Navbar />
              <SignUpForm />
            </Route>
            <Route exact path={LOGIN_ENDPOINT}>
              <Navbar />
              <Login />
            </Route>
            <Route exact path={JOBFORM_ENDPOINT}>
              <Navbar />
              <JobForm />
            </Route>
            <Route exact path={JOBS_ENDPOINT}>
              <div className='bg-green-400 w-full min-h-screen'>
                <Navbar />
                <Jobs />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    isLogged: state.isLogged,
    page: state.jobs.page,
    hasMoreItems: state.jobs.hasMoreItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: page => dispatch(fetchJobs(page)),
    clearJobs: () => dispatch(clearJobs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
