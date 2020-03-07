import React, { Component } from 'react';
import axios from '../api/api_config';
import Offer from './Offer';
import { useSelector, useDispatch } from 'react-redux';

class Offers extends Component {
  renderOffers = () => {
    this.state.offersList.forEach(item => {
      return <Offer description={item.description} companyName={item.companyName} location={item.companyName} />;
    });
  };
  render() {
    return <div></div>;
  }
}

export default Offers;
