import React, { Component } from 'react';

class Offer extends Component {
  loadTechnologies = () => {
    return (
      <ul className='flex flex-row overflow-hidden'>
        {this.props.technologies.map(technology => {
          return (
            <li
              key={technology.id}
              className='px-2 mx-2 font-semibold text-gray-600 border-2 rounded-full uppercase border-pink-500'
            >
              {technology.name}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { description, position, location } = this.props;
    return (
      <div className='flex flex-row w-full bg-white text-black shadow-xl border-2 border-darken-3 rounded-lg'>
        <img src={require('../img/monitor.png')} className='object-left p-3 m-3' alt='company logo' width='92px' />
        <div className='flex flex-col justify-around w-full'>
          <div className='flex flex-row justify-between items-center'>
            <span className='m-2 p-2 text-xl'>{position}</span>
            <span className='m-2 p-2 text-green-400'>Salary</span>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex p-2 mx-2'>
              <img src={require('../img/building_icon.png')} className='pr-2' alt='building icon' />
              <span>Company Name</span>
              <img src={require('../img/pin.png')} className='px-1 mx-1' alt='pin icon' />
              <span>{location}</span>
            </div>
            <div className='flex items-center'>{this.loadTechnologies()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
