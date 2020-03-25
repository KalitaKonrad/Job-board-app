import React, { Component } from 'react';

class InfoCard extends Component {
  render() {
    const { icon, count, text } = this.props;

    return (
      <div className='flex text-white items-center rounded-lg'>
        <img src={require(`../img/${icon}.ico`)} className='h-16 w-20 px-2' alt={icon} />
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-lg text-white p-2'>{count}</p>
          <p className='font-bold text-lg text-white p-2'>{text}</p>
        </div>
      </div>
    );
  }
}

export default InfoCard;
