import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavbarBtn extends Component {
  render() {
    const { endpoint, text, img } = this.props;

    return (
      <div className=''>
        <Link
          to={endpoint}
          className='flex justify-around items-center font-bold mx-2 hover:text-orange-500 rounded-lg focus:outline-none'
        >
          <span className='px-3'>
            <FontAwesomeIcon icon={faUser} />
          </span>
          {text}
        </Link>
      </div>
    );
  }
}

export default NavbarBtn;
