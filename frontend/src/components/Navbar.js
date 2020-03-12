import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <div className='text-white'>
        <nav className='flex items-center justify-between flex-wrap px-4 py-3 bg-orange-400'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <img className='w-16 h-16' src={require('../img/monitor.png')} alt='logo' />
          </div>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search by company...'
                className='rounded-lg focus:outline-none p-3 mx-2 text-black'
                // add onChange
              />
              <button className='rounded-lg'>
                <img src={require('../img/search.png')} width='32px' height='32px' className='mx-2' />
              </button>
            </div>

            <Link to='/' className='text-white-500 font-bold p-4 mx-3 rounded-lg hover:bg-blue-400 focus:outline-none'>
              Home
            </Link>
            <Link
              to='/login'
              className='text-white-500 font-bold p-4 mx-3 hover:bg-blue-400 rounded-lg focus:outline-none'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='text-white-500 font-bold hover:bg-blue-400 p-4 mx-3 mr-12 rounded-lg focus:outline-none'
            >
              Sign Up
            </Link>
            <Link className='rounded-lg focus:outline bg-pink-500 p-4 mx-3 hover:bg-pink-600 text-white-500 font-bold'>
              Post a job
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLogged: state.isLogged };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
