import React, { Component } from 'react';

class NoMoreOffers extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <button className='p-3 m-3 bg-pink-500 font-bold rounded-lg focus:outline-none' onClick={this.scrollToTop}>
        No more offers! Click to go back.
      </button>
    );
  }
}

export default NoMoreOffers;
