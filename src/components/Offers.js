import React, { Component } from 'react';
import axios from '../api/api_config';
import Offer from './Offer';

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      offersList: []
    };
  }

  componentDidMount() {
    this.fetchOffers();
  }

  fetchOffers = () => {
    axios
      .get('/employers')
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ ...this.state, isFetching: true, offersList: data });
      })
      .catch(err => console.log(err));
  };
  renderOffers = () => {
    this.state.offersList.forEach(item => {
      return <Offer description={item.description} companyName={item.companyName} location={item.companyName} />;
    });
  };
  render() {
    return <div>{this.state.isFetchin ? 'Fetching users...' : ''}</div>;
  }
}

export default Offers;
