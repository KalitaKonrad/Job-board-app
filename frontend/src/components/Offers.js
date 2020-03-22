import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';

class Offers extends Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  render() {
    // return <div>{console.log(this.props.offers)}</div>;
    return (
      <div className='flex flex-col px-4 m-3 container'>
        {this.props.offers.offers.map(offer => (
          <Offer key={offer.id} description={offer.description} name={offer.name} location={offer.location} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffers: () => dispatch(fetchOffers(''))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
