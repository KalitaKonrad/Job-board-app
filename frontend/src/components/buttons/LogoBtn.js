import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogoBtn extends Component {
  render() {
    return (
      <div className='flex items-center flex-shrink-0 cursor-pointer mr-6'>
        <button className=''>
          <Link to='/' className='flex items-center cursor-pointer font-bold p-4 mx-3 rounded-lg focus:outline-none'>
            <p className='font-bold  hover:text-orange-500 text-white px-4 uppercase text-2xl'>Internship For You</p>
            <img className='w-16 h-16' src={require('../../img/monitor.png')} alt='logo' />
          </Link>
        </button>
      </div>
    );
  }
}

export default LogoBtn;
