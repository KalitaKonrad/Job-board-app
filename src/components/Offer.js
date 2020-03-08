import React, { Component } from 'react';

class Offer extends Component {
  render() {
    const { description, name, location } = this.props; //add salary and techstack

    return (
      <div className='flex flex-row text-black p-3 m-3'>
        <img src={require('../img/monitor.png')} className='object-left' />
        <div className='flex flex-col justify-between'>
          <div className='flex flex-row justify-between'>
            {/* Description + salary */}
            <span>{description}</span>
            <span>Salary</span>
          </div>
          <div className='flex flex-row'>
            <span>{name}</span>
            <span>{location == '' ? 'yes' : `${location}`} </span>
            <span>Tech Stack</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
