import React, { Component } from 'react';
import { changeExperienceLevel, CHOOSE_JUNIOR, CHOOSE_SENIOR, CHOOSE_MID } from '../actions/jobForm/changeExpLevel';
import { addTechnology } from '../actions/jobForm/addTechnology';
import { selectTechnology } from '../actions/jobForm/selectTechnology';
import { deleteTechnology } from '../actions/jobForm/deleteTechnology';
import { connect } from 'react-redux';

class JobForm extends Component {
  injectTechnologiesIntoForm = technologies => {
    return (
      <ul className='flex flex-wrap py-2 px-4'>
        {technologies.map(technology => {
          return (
            <li
              className='p-2 m-2 bg-blue-500 rounded-lg font-bold text-white focus:outline-none hover:bg-red-700 cursor-pointer uppercase'
              key={technology}
              onClick={e => {
                e.preventDefault();
                this.props.onTechnologyClickDelete(e.target.textContent);
              }}
            >
              {technology}
            </li>
          );
        })}
      </ul>
    );
  };

  validateForm = e => {
    e.preventDefault();
    const title = document.getElementById('grid-job-title').value;
    const location = document.getElementById('grid-job-location').value;
    const description = document.getElementById('grid-job-description').value;
    // TODO!!
  };

  render() {
    return (
      <div className='mx-auto p-4 m-4 shadow-md border-2 border-darker-2'>
        <form className='w-full max-w-lg flex flex-col' onSubmit={this.validateForm} noValidate>
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
                className='appearance-none block w-full bg-gray-200 text-black-700 rounded-lg py-3 px-4 mb-3 focus:outline-none'
                placeholder='Job title..'
                required
              />
            </div>
            <div className='w-full w-1/2 px-3 mb-6 md:mb-0'>
              <label htmlFor='grid-job-location' className='block uppercase text-gray-700 font-bold py-3 px-4 mb-3'>
                Job Location
              </label>
              <input
                id='grid-job-location'
                type='text'
                className='block w-full bg-gray-200 text-black rounded-lg py-3 px-4 mb-3 focus:outline-none'
                placeholder='Location...'
                required
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
                className='bg-gray-200 text-black rounded-lg py-3 px-4 mb-3 focus:outline-none resize-none'
                required
              />
            </div>
          </div>
          <span className='font-bold block tracking-wide text-gray-700 uppercase py-3 px-4 mb-3'>
            Select experience level
          </span>
          <div className='flex w-full justify-center'>
            <button
              className='focus:outline-none uppercase bg-green-500 hover:bg-green-300 focus:bg-blue-500 text-white font-bold mx-2 py-2 px-4 rounded-lg'
              onClick={e => {
                e.preventDefault();
                this.props.onExperienceClick(CHOOSE_JUNIOR);
              }}
            >
              JUNIOR
            </button>
            <button
              className='focus:outline-none uppercase bg-green-500 focus:bg-blue-500 hover:bg-green-300 text-white font-bold mx-2 py-2 px-4 rounded-lg'
              onClick={e => {
                e.preventDefault();
                this.props.onExperienceClick(CHOOSE_MID);
              }}
            >
              MID
            </button>
            <button
              className='focus:outline-none focus:bg-blue-500 uppercase bg-green-500 hover:bg-green-300 text-white font-bold mx-2 py-2 px-4 rounded-lg'
              onClick={e => {
                e.preventDefault();
                this.props.onExperienceClick(CHOOSE_SENIOR);
              }}
            >
              SENIOR
            </button>
          </div>
          <div className='flex justify-between items-baseline w-full py-3'>
            <label
              htmlFor='technology-search'
              className='font-bold  tracking-wide text-gray-700 uppercase py-2 px-4 mb-3 mt-3'
            >
              Technologies
            </label>
            <input
              type='text'
              id='technology-search'
              className=' py-2 px-3 mb-3 rounded-lg bg-gray-200 focus:outline-none'
              placeholder='Search for technology..'
              onChange={e => {
                this.props.onTechnologyChange(e.target.value);
              }}
            />
            <button
              className='rounded-lg bg-green-500 py-2 px-3 m-2 hover:bg-green-300 text-white font-bold text-center focus:outline-none'
              onClick={e => {
                e.preventDefault();
                if (
                  this.props.selectedTechnology !== '' &&
                  this.props.technologies.indexOf(this.props.selectedTechnology) == -1
                ) {
                  this.props.onAddTechnologyClick(this.props.selectedTechnology);
                }
                document.getElementById('technology-search').value = '';
              }}
            >
              Add
            </button>
          </div>
          <div className=''>{this.injectTechnologiesIntoForm(this.props.technologies)}</div>
          <button
            type='submit'
            className='bg-green-500 py-2 px-3 m-2 hover:bg-green-300 text-white font-bold rounded-lg text-center focus:outline-none'
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { experienceLevel, technologies, selectedTechnology } = state.postJobForm;

  return {
    experienceLevel,
    technologies,
    selectedTechnology
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onExperienceClick: exp => {
      dispatch(changeExperienceLevel(exp));
    },

    onAddTechnologyClick: technologyName => {
      dispatch(addTechnology(technologyName));
    },

    onTechnologyChange: selectedTechnology => {
      dispatch(selectTechnology(selectedTechnology));
    },

    onTechnologyClickDelete: techName => {
      dispatch(deleteTechnology(techName));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
