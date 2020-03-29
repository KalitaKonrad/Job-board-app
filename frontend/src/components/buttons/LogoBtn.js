import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { clearOffers } from '../../actions/fetchOffers';
import { connect } from 'react-redux';

class LogoBtn extends Component {
  render() {
    const { clearOffers } = this.props;

    return (
      <div className='flex items-center flex-shrink-0 cursor-pointer mr-6'>
        <button className='focus:outline' onClick={() => clearOffers()}>
          <Link to='/' className='flex items-center cursor-pointer font-bold p-4 mx-3 rounded-lg focus:outline-none'>
            <p className='font-bold  hover:text-orange-500 text-white px-4 uppercase text-2xl'>Internship For You</p>
            <img className='w-16 h-16' src={require('../../img/monitor.png')} alt='logo' />
          </Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    clearOffers: () => dispatch(clearOffers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoBtn);
