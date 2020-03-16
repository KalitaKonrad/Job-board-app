import React, { Component } from 'react';
import { changeExperienceLevel, CHOOSE_JUNIOR, CHOOSE_SENIOR, CHOOSE_MID } from '../actions/changeExpLevel';
import { connect } from 'react-redux';

class JobForm extends Component {
  render() {
    return (
      <div className='mx-auto p-4 m-4 shadow-sm'>
        <form className='w-full max-w-lg flex flex-col'>
          <span className='block w-full font-bold text-black text-2xl mb-6 p-4 text-center'>Post a job</span>
          <div className='flex'>
            <div className='w-full w-1/2 px-3 mb-6 md:mb-0'>
              <label
                htmlFor='grid-job-title'
                className='block uppercase tracking-wide text-gray-700 font-bold py-3 px-4 mb-3'
              >
                Job title
							</label>
              <input
                id='grid-job-title'
                type='text'
                className='appearance-none block w-full bg-gray-200 text-black-700 rounded py-3 px-4 mb-3 focus:outline-none'
                placeholder='Job title..'
              />
            </div>
            <div className='w-full w-1/2 px-3 mb-6 md:mb-0'>
              <label
                htmlFor='grid-job-city'
                className='block uppercase text-gray-700 font-bold py-3 px-4 mb-3'
              >
                Job Location
							</label>
              <input
                id='grid-job-city'
                type='text'
                className='block w-full bg-gray-200 text-black rounded py-3 px-4 mb-3 focus:outline-none'
                placeholder='Location...'
              />
            </div>
          </div>
          <div className='flex'>
            <div className='w-full px-3 mb-6 md:mb-0'>
              <label
                htmlFor='grid-job-description'
                className='block uppercase tracking-wide text-gray-700 font-bold py-3 px-4 mb-3'
              >
                Job description..
							</label>
              <textarea
                id='grid-job-description'
                cols='40'
                rows='5'
                className='bg-gray-200 text-black rounded py-3 px-4 mb-3 focus:outline-none'
              />
            </div>
          </div>
          <span className='font-bold block tracking-wide text-gray-700 uppercase py-3 px-4 mb-3'>
            Select experience level
					</span>
          <div className='flex w-full justify-center'>
            <button
              className='focus:outline-none uppercase bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-4 rounded'
              onClick={(e) => {
                e.preventDefault();
                this.props.onExperienceClick(CHOOSE_JUNIOR);
              }}
            >
              JUNIOR
						</button>
            <button className='focus:outline-none uppercase bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-4 rounded' onClick={(e) => {
              e.preventDefault();
              this.props.onExperienceClick(CHOOSE_MID);
            }}>
              MID
						</button>
            <button className='focus:outline-none uppercase bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-4 rounded' onClick={(e) => {
              e.preventDefault();
              this.props.onExperienceClick(CHOOSE_SENIOR);
            }}>
              SENIOR
						</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    experienceLevel: state.experienceLevel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onExperienceClick: (exp) => {
      dispatch(changeExperienceLevel(exp))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
