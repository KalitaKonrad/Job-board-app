import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  HOME_ENDPOINT,
  JOBFORM_ENDPOINT,
  LOGIN_ENDPOINT,
} from "../../api/endpoints";
import { clearJobs } from "../../actions/fetchJobs";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark w-100">
        <Link to={HOME_ENDPOINT} className="navbar-brand">
          <img
            className="w-16 h-16"
            src={require("../../img/monitor.png")}
            alt="logo"
          />
          <p className="">Internship For You</p>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={JOBFORM_ENDPOINT}>
                Post a job
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={LOGIN_ENDPOINT}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogged: state.isLogged, usertype: state.usertype };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearJobs: () => dispatch(clearJobs()),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
