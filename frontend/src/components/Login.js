import React, { Component } from 'react';
import axios from '../api/api_config';
import { LOGIN_ENDPOINT } from './SignUpForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN, LOGOUT, loginOrLogout, setUsertype, SET_DEVELOPER, SET_EMPLOYER } from '../actions/login';

export const DEVELOPER = 'DEVELOPER';
export const EMPLOYER = 'EMPLOYER';
export const HOME_ENDPOINT = '/';
const bcrypt = require('bcryptjs');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const hashedPassword = bcrypt.hashSync(password);

    axios
      .post(LOGIN_ENDPOINT, {
        email: email,
        password: hashedPassword
      })
      .then(res => res.data)
      .then(data => {
        if (bcrypt.compareSync(password, data.password)) {
          this.setState({ redirect: HOME_ENDPOINT });
          this.props.login();
          this.props.setUsertype(data.usertype === String(DEVELOPER) ? SET_DEVELOPER : SET_EMPLOYER);
          return;
        }
        alert('Wrong email or password!');
      })
      .catch(err => {
        alert('User with this email does not exist!');
        console.log(err);
      });
  };

  handleEnterClick = e => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className='container flex justify-center mx-auto p-4 m-4'>
        <form
          className='flex flex-col items-center w-full max-w-xs bg-white shadow-md border-2 border-darken-2 rounded-lg px-8 pt-6 pb-8 mb-4'
          onSubmit={e => this.onSubmit(e)}
        >
          <div className='p-3 m-3 text-bold text-2xl'>Please sign in</div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-bold mb-2'>
              Email
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              placeholder='Email-address'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' placeholder='Password' className='block  text-sm font-bold mb-2'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
              required
              onKeyDown={e => this.handleEnterClick(e)}
            />
          </div>
          <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginOrLogout(LOGIN)),
    logout: () => dispatch(loginOrLogout(LOGOUT)),
    setUsertype: usertype => dispatch(setUsertype(usertype))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
