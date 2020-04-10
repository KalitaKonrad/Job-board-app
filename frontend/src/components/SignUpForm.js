import React, { Component } from 'react';
import axios from '../api/api_config';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const USERTYPE = 'EMPLOYEE';
export const SIGNUP_ENDPOINT = '/signup';
export const LOGIN_ENDPOINT = '/login';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 5) {
      alert('Username has to be 5 characters or longer!');
      return;
    }
    if (password.length < 5) {
      alert('Password has to be 5 characters or longer!');
      return;
    }
    if (!this.validateEmail(email)) {
      alert('Invalid email!');
      return;
    }

    // const hashedPassword = bcrypt.hashSync(password);
    // // todo: IMPLEMENT JWT
    // await axios
    //   .post(SIGNUP_ENDPOINT, {
    //     email: email,
    //     username: username,
    //     password: hashedPassword,
    //     usertype: USERTYPE
    //   })
    //   .then(res => {
    //     alert('Congratulations! You have successfully created account!');
    //     this.setState({ redirect: LOGIN_ENDPOINT });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     alert('User with this email or username already exists!');
    //   });
  };

  validateEmail = (email) => {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className='container flex font-bold justify-center mx-auto p-4 m-4'>
        <form
          className='w-full flex flex-col items-center flex-shrink-0 max-w-xs shadow-md border-2 border-darker-2 bg-white rounded-lg px-8 pt-6 pb-8 mb-4'
          onSubmit={(e) => this.onSubmit(e)}
        >
          <div className='py-3 m-3 text-bold text-2xl'>Get started for free</div>
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

          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-bold mb-2'>
              Username
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              placeholder='Username'
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
            />
          </div>
          <button
            className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
