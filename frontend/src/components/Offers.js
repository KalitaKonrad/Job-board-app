import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMoreOffers from './NoMoreOffers';

class Offers extends Component {
  componentDidMount() {
    const { offset, fetchOffers, keywords, location } = this.props;
    fetchOffers(offset, keywords, location);
  }

  render() {
    const { offers, offset, fetchOffers, hasMoreItems } = this.props;

    return (
      <div className='flex flex-col w-3/4 mx-auto container'>
        <InfiniteScroll
          dataLength={offers.offers.length}
          next={() => fetchOffers(offset)}
          hasMore={hasMoreItems}
          endMessage={<NoMoreOffers />}
          loader={<h3>Loading...</h3>}
        >
          {offers.offers.map(offer => (
            <Offer
              key={offer.id}
              position={offer.position}
              description={offer.description}
              location={offer.location}
              technologies={offer.technologies}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offers,
    offset: state.offers.offset,
    hasMoreItems: state.offers.hasMoreItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffers: (offset, keywords, location) => dispatch(fetchOffers(offset, keywords, location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
