import React, { Component } from 'react';

class Offer extends Component {
  loadTechnologies = () => {
    return 'technology ';
  };

  render() {
    const { description, name, location } = this.props; //add salary and techstack

    return (
      <div className='flex flex-row text-black p-3 m-3 shadow-2xl border-l-2 rounded-lg'>
        <img src={require('../img/monitor.png')} className='object-left p-3 m-3' />
        <div className='flex flex-col justify-around w-full'>
          <div className='flex flex-row justify-between items-center'>
            {/* title + salary */}
            <span className='m-2 p-2 text-bold text-2xl'>{name}</span>
            <span className='m-2 p-2 text-green-400'>Salary</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='flex px-2 mx-2'>
              <img className='px-2 ' src={require('../img/building_icon.png')} />
              <span>Company name</span>
              <img src={require('../img/pin.png')} className='px-1 mx-1' />
              {location == '' ? 'yes' : `${location}`}
            </span>
            <span>{this.loadTechnologies()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
