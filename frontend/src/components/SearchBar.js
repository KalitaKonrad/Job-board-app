import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/fetchJobs';
import { Link, Redirect } from 'react-router-dom';
import { updateKeywords, updateLocation } from '../actions/fetchJobs';
import { JOBS_ENDPOINT } from '../api/endpoints';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  onFindJobsClick = () => {
    const keywords = document.getElementById('job-keywords').value;
    const location = document.getElementById('job-location').value;
    const { updateKeywords, updateLocation } = this.props;

    updateKeywords(keywords);
    updateLocation(location);
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.onFindJobsClick();
      this.setState({ submitted: true });
    }
  };

  render() {
    if (this.state.submitted === true) {
      return <Redirect to={JOBS_ENDPOINT} />;
    }

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
            onKeyDown={e => this.handleKeyDown(e)}
          />
          <input
            type='text'
            id='job-location'
            name='job-location'
            placeholder='Location'
            className='rounded-sm px-4 focus:outline-none text-gray-700 w-1/5 h-12'
            onKeyDown={e => this.handleKeyDown(e)}
          />
          <Link
            to={JOBS_ENDPOINT}
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
    page: state.jobs.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: (page, keywords, location) => dispatch(fetchJobs(page, keywords, location)),
    updateKeywords: keywords => dispatch(updateKeywords(keywords)),
    updateLocation: location => dispatch(updateLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
