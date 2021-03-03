import React, { Component } from "react";

import SignUpForm from "./components/SignUpForm";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Jobs from "./components/Job/Jobs";
import { connect } from "react-redux";
import { fetchJobs, clearJobs } from "./actions/fetchJobs";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import UsageData from "./components/UsageData";
import CompanyList from "./components/CompanyList";
import {
  JOBS_ENDPOINT,
  HOME_ENDPOINT,
  LOGIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  JOBFORM_ENDPOINT,
} from "./api/endpoints";
import JobFormTut from "./components/Forms/Job/JobFormTut";

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Router>
          <Switch>
            <Route exact path={HOME_ENDPOINT}>
              <Navbar />

              {/*<SearchBar />*/}
              {/*<UsageData />*/}
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
              <JobFormTut />
            </Route>
            <Route exact path={JOBS_ENDPOINT}>
              <div className="bg-blue-500 w-full min-h-screen">
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

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    isLogged: state.isLogged,
    page: state.jobs.page,
    hasMoreItems: state.jobs.hasMoreItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (page) => dispatch(fetchJobs(page)),
    clearJobs: () => dispatch(clearJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
