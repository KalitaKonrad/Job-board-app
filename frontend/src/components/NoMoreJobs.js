import React, { Component } from 'react';

class NoMoreJobs extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <button className='p-3 m-3 bg-pink-500 font-bold rounded-lg focus:outline-none' onClick={this.scrollToTop}>
        No more jobs! Click to go back.
      </button>
    );
  }
}

export default NoMoreJobs;
