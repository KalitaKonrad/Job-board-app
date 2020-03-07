import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOffers, getOffersPending, getOffersError } from '../reducers/offerReducer';
import { fetchOffers } from '../actions/fetchOffers';
import Offers from './Offers';

// PARENT COMPONENT WHICH WRAPS UP EVERYTHING SERVED TO THE USER

class OffersView extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) {
      return false;
    }
    return true;
  }

  render() {
    const { offers, error, pending } = this.props;

    if (!this.shouldComponentRender()) {
      return 'Loading...';
    }

    return (
      <div className='flex flex-col p-2 m-2'>
        <Offers />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offers: getOffers(state),
  pending: getOffersPending(state),
  error: getOffersError(state)
});

const mapDistpatchToProps = dispatch =>
  bindActionCreators({
    fetchOffers: fetchOffers
  });
export default connect(mapStateToProps, mapDistpatchToProps)(OffersView);
