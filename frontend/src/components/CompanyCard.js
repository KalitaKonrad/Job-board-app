import React, { Component } from 'react';

class CompanyCard extends Component {
  render() {
    const { img } = this.props;

    return (
      <div className='flex flex-col border-2 border-red-500'>
        <div className='h-32 w-32 flex flex-col justify-center items-center border-2 border-green-200'>
          <img src={require(`../img/${img}.png`)} width='92px' alt={this.props.img} />
        </div>
        <div className='h-8'>balblalabla</div>
      </div>
    );
  }
}

export default CompanyCard;
