import React, { Component } from 'react';
import InfoCard from './InfoCard';

class UsageData extends Component {
  render() {
    return (
      <div className='container mx-auto flex justify-around p-4 pt-10'>
        <InfoCard text='Active Workers' count='432 565' icon='person' />
        <InfoCard text='Companies' count='85 450' icon='company' />
        <InfoCard text='Countries' count='45' icon='world' />
      </div>
    );
  }
}

export default UsageData;
