import React, { Component } from 'react';
import axios from '../api/api_config';

class Login extends Component {
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

    //
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
      <form className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label htmlFor='username' className='block tex-gray-700 text-sm font-bold mb-2'>
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
            <label
              htmlFor='password'
              placeholder='Password'
              className='block text-gray-700 text-sm font-bold mb-2'
            ></label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
              onChange={e => this.onPasswordChange(e.target.value)}
            />
          </div>
          <div className='flex flex-row justify-between items-center'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
              onClick={this.onSignInClick}
            >
              Sign in
            </button>
            <a className='inline-block text-blue-500 font-bold text-sm hover:text-blue-700 cursor-pointer px-2 mx-2'>
              Forgot password?
            </a>
          </div>
          <div className='flex flex-row justify-between items-center bg-white text-sm mt-5 text-blue-500 font-bold'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
              Sign Up
            </button>
            <a className='inline-block text-blue-500 font-bold text-sm hover:text-blue-700 cursor-pointer px-2 mx-2'>
              Dont have an account?
            </a>
          </div>
        </form>
      </form>
    );
  }
}

export default Login;
