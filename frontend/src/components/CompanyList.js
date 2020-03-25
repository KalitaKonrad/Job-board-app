import React, { Component } from 'react';
import CompanyCard from './CompanyCard';

class CompanyList extends Component {
  render() {
    return (
      <div className='flex justify-around mx-auto p-2 border-2 border-red-500 shadow-xl bg-white h-64'>
        <CompanyCard img='monitor' />
      </div>
    );
  }
}

export default CompanyList;
