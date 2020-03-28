import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOffers, updateKeywords, updateLocation } from '../actions/fetchOffers';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  onFindJobsClick = () => {
    const keywords = document.getElementById('job-keywords').value;
    const location = document.getElementById('job-location').value;

    updateKeywords(keywords);
    updateLocation(location);
    // const { offset, fetchOffers } = this.props;

    // fetchOffers(offset, keywords, location);
  };

  render() {
    return (
      <div className='flex flex-col items-center justify-center w-full pt-24 pb-12'>
        <h1 className='text-white font-bold text-5xl'>Find Your Career. You Deserve it.</h1>
        <div className='flex container mx-auto justify-center w-full my-16 pt-16'>
          <input
            type='text'
            className='rounded-sm px-4 focus:outline-none text-gray-700 w-1/4 h-12 '
            id='job-keywords'
            name='job-keywords'
            placeholder='Job Title or Keywords'
            required
          />
          <input
            type='text'
            id='job-location'
            name='job-location'
            placeholder='Location'
            className='rounded-sm px-4 focus:outline-none text-gray-700 w-1/5 h-12'
          />
          <Link
            to='/offers'
            className='bg-pink-500 p-3 text-white font-bold rounded-sm text-center uppercase shadow-2xl focus:outline-none hover:bg-pink-600 cursor-pointer'
            onClick={() => this.onFindJobsClick()}
          >
            Find jobs
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offset: state.offers.offset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffers: (offset, keywords, location) => dispatch(fetchOffers(offset, keywords, location)),
    updateKeywords: keywords => dispatch(updateKeywords(keywords)),
    updateLocation: location => dispatch(updateLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
