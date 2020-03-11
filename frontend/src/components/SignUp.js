import React, { Component } from 'react';
import axios from '../api/api_config';

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  };

  onSignInClick = e => {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    }); // TODO
  };

  onSignUpClick = e => {
    e.preventDefault();

    // TODO
  };

  onUserChange = async username => {
    await this.setState({ username: username });
    console.log(this.state.username);
  };

  onPasswordChange = async password => {
    await this.setState({ password: password });
    console.log(this.state.password);
  };

  render() {
    return (
      <div className='container flex justify-center mx-auto p-4 m-4'>
        <form className='w-full flex flex-col items-center flex-shrink-0 max-w-xs bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
          <div className='p-3 m-3 text-bold text-2xl'>Get started for free</div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-bold mb-2'>
              Email
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              placeholder='Email-address'
              onChange={e => this.onUserChange(e.target.value)}
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
              onChange={e => this.onUserChange(e.target.value)}
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
              onChange={e => this.onPasswordChange(e.target.value)}
            />
          </div>
          <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
