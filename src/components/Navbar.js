import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className='flex items-center justify-between flex-wrap px-4 py-3 bg-orange-400'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <img className='w-16 h-16' src={require('../img/monitor.png')} alt='logo' />
          </div>
          <div>
            <button className='text-white-500 hover:text-white'>Login</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
