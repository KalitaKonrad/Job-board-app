import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';

class Offers extends Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  render() {
    return (
      <div className='flex flex-col mx-auto px-4 m-3 container'>
        {this.props.offers.offers.map(offer => (
          <Offer
            key={offer.id}
            position={offer.position}
            description={offer.description}
            location={offer.location}
            technologies={offer.technologies}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.offers);
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
