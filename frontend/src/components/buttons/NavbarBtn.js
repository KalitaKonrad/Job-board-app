import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarBtn extends Component {
  render() {
    const { endpoint, text, img } = this.props;

    return (
      <div className=''>
        <Link
          to={endpoint}
          className='flex justify-around items-center font-bold mx-2 hover:text-orange-500 rounded-lg focus:outline-none'
        >
          <img src={require(`../../img/${img}.png`)} alt={img} className='w-4 h-auto mx-3' />
          {text}
        </Link>
      </div>
    );
  }
}

export default NavbarBtn;
