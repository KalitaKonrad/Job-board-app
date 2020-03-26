import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className='flex flex-col items-center justify-center w-full pt-24 pb-12'>
        <h1 className='text-white font-bold text-5xl'>Find Your Career. You Deserve it.</h1>
        <div className='flex container mx-auto justify-center w-full my-16 pt-16'>
          <input
            type='text'
            className='rounded-sm px-4 shadow-lg focus:outline-none text-gray-700 w-1/4 h-12 shadow-2xl'
            id='job-title-or-keyword'
            name='job-title-or-keyword'
            placeholder='Job Title or Keywords'
            required
          />
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Location'
            className='rounded-sm px-4 shadow-lg focus:outline-none text-gray-700 w-1/5 h-12 shadow-2xl'
          />
          <button className='bg-pink-500 p-3 text-white font-bold rounded-sm text-center uppercase shadow-2xl focus:outline-none hover:bg-pink-600 cursor-pointer'>
            Find jobs
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
