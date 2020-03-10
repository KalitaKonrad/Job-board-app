import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  routeChange = () => {
    let path = '/newPath';
    let history = useHistory();
    history.push(path);
  };

  render() {
    return (
      <div className='text-white'>
        <nav className='flex items-center justify-between flex-wrap px-4 py-3 bg-orange-400'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <img className='w-16 h-16' src={require('../img/monitor.png')} alt='logo' />
          </div>
          <div>
            <Link to='/' className='text-white-500 font-bold p-2 m-2 hover:text-blue-400 focus:outline-none'>
              Home
            </Link>
            <Link to='/developer' className='text-white-500 font-bold p-2 m-2 hover:text-blue-400 focus:outline-none'>
              For Developers
            </Link>
            <Link to='/employer' className='text-white-500 font-bold p-2 m-2 hover:text-blue-400 focus:outline-none'>
              For Employers
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
