import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_EMPLOYER } from '../actions/login';
import { DEVELOPER, EMPLOYER } from './Login';
import NavbarBtn from './buttons/NavbarBtn';
import { HOME_ENDPOINT, LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from '../api/endpoints';
import LogoBtn from './buttons/LogoBtn';

class Navbar extends Component {
  render() {
    return (
      <div className='flex justify-center text-lg w-full text-white'>
        <nav className='flex container items-center justify-around flex-wrap px-4 py-3'>
          <LogoBtn />
          {/* <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search by company...'
                className='rounded-lg focus:outline-none p-3 mx-2'
              />
              <button className='rounded-lg'>
                <img src={require('../img/search.png')} width='32px' height='32px' className='mx-2' alt='search icon' />
              </button>
            </div> */}
          <div className='flex items-center justify-around'>
            <NavbarBtn endpoint={LOGIN_ENDPOINT} text='Login' img='user' />
            <NavbarBtn endpoint={SIGNUP_ENDPOINT} text='Sign up' img='user' />
            {this.props.isLogged && (
              <Link to='/job' className='rounded-lg focus:outline bg-pink-500 p-4 mx-3 hover:bg-pink-600 font-bold'>
                Post a job
              </Link>
            )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
