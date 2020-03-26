import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMoreOffers from './NoMoreOffers';

class Offers extends Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  render() {
    const { offers, offset, fetchOffers, hasMoreItems } = this.props;
    console.log(offers);

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
    fetchOffers: offset => dispatch(fetchOffers(offset))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
