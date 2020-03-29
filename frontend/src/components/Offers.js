import React, { Component } from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';
import { fetchOffers } from '../actions/fetchOffers';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMoreOffers from './NoMoreOffers';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Offers extends Component {
  componentDidMount() {
    const { offset, fetchOffers, keywords, location } = this.props;
    fetchOffers(offset, keywords, location);
  }

  render() {
    const { offers, offset, fetchOffers, keywords, location, hasMoreItems } = this.props;

    return (
      <div className='flex flex-col w-3/4 mx-auto container'>
        <InfiniteScroll
          className='flex flex-col items-center'
          dataLength={offers.offers.length}
          next={() => fetchOffers(offset, keywords, location)}
          hasMore={hasMoreItems}
          endMessage={<NoMoreOffers />}
          loader={
            <span className='p-2 m-2'>
              <FontAwesomeIcon icon={faCog} className='fa-spin' size='5x' />
            </span>
          }
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
    keywords: state.offers.keywords,
    location: state.offers.location,
    hasMoreItems: state.offers.hasMoreItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOffers: (offset, keywords, location) => dispatch(fetchOffers(offset, keywords, location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
