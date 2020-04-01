import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarBtn from './buttons/NavbarBtn';
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from '../api/endpoints';
import LogoBtn from './buttons/LogoBtn';

class Navbar extends Component {
  render() {
    return (
      <div className='flex justify-center text-lg w-full text-white'>
        <nav className='flex container items-center justify-around flex-wrap px-4 py-3'>
          <LogoBtn />
          <div className='flex items-center justify-around'>
            <NavbarBtn endpoint={LOGIN_ENDPOINT} text='Login' />
            <NavbarBtn endpoint={SIGNUP_ENDPOINT} text='Sign up' />
            <Link to='/job' className='rounded-lg focus:outline bg-pink-500 p-4 mx-3 hover:bg-pink-600 font-bold'>
              Post a job
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLogged: state.isLogged, usertype: state.usertype };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(null, mapDispatchToProps)(Navbar);
