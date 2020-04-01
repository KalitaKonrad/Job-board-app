import React, { Component } from 'react';
import {
  changeExperienceLevel,
  CHOOSE_JUNIOR,
  CHOOSE_SENIOR,
  CHOOSE_MID,
  CHOOSE_INTERN
} from '../actions/jobForm/changeExpLevel';
import { addSkill } from '../actions/jobForm/addSkill';
import { selectSkill } from '../actions/jobForm/selectSkill';
import { deleteSkill } from '../actions/jobForm/deleteSkill';
import { connect } from 'react-redux';
import axios from '../api/api_config';
import { JOBS_ENDPOINT } from '../api/endpoints';

class JobForm extends Component {
  injectSkillsIntoForm = skills => {
    return (
      <ul className='flex flex-wrap py-2 px-4'>
        {skills.map(skill => {
          return (
            <li
              className='p-2 m-2 bg-blue-500 rounded-lg font-bold text-white focus:outline-none hover:bg-red-700 cursor-pointer uppercase'
              key={skill}
              onClick={e => {
                e.preventDefault();
                this.props.onSkillClickDelete(e.target.textContent);
              }}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    );
  };

  handleKeyDown = e => {
    if (e.key === 'Enter' && e.target.value !== '' && this.props.skills.indexOf(this.props.selectedSkill) === -1) {
      this.props.onAddSkillClick(e.target.value);
      document.getElementById('skill-search').value = '';
    }
  };

  onSubmit = async e => {
    e.preventDefault();
    const position = document.getElementById('grid-job-title').value;
    const location = document.getElementById('grid-job-location').value;
    const description = document.getElementById('grid-job-description').value;
    let minimum_salary = document.getElementById('minimum-salary').value;
    let maximum_salary = document.getElementById('maximum-salary').value;
    if (minimum_salary < maximum_salary) {
      let temp = minimum_salary;
      minimum_salary = maximum_salary;
      maximum_salary = temp;
    }

    await axios
      .post(JOBS_ENDPOINT, {
        position: position,
        location: location,
        description: description,
        skills: this.props.skills,
        experienceLevel: this.props.experienceLevel
      })
      .then(res => {
        if (res.status === 200) {
          alert('Successfully added job job!');
        }
      })
      .catch(err => {
        console.err(err);
        alert('Something went wrong!');
      });
    // TODO
  };

  render() {
    return (
      <div className='flex justify-center p-4 m-4'>
        <form
          className='w-full max-w-lg bg-white flex-shrink-0 shadow-md border-2 px-8 pt-6 pb-8 mb-4 border-darker-2 rounded-lg flex flex-col'
          onSubmit={this.onSubmit}
        >
          <span className='block w-full font-bold text-black text-2xl mb-6 p-4 text-center'>Post a job</span>
          <div className='flex'>
            <div className='w-full w-1/2 px-3 mb-6 md:mb-0'>
              <label
                htmlFor='grid-job-title'
                className='block uppercase tracking-wide text-gray-700 font-bold py-3 px-4 mb-3'
              >
                Job position
              </label>
              <input
                id='grid-job-title'
                name='grid-job-title'
                type='text'
                className='appearance-none block w-full bg-gray-200 text-black-700 rounded-lg py-3 px-4 mb-3 focus:outline-none'
                placeholder='Job position..'
                required
              />
            </div>
            <div className='w-full w-1/2 px-3 mb-6 md:mb-0'>
              <label htmlFor='grid-job-location' className='block uppercase text-gray-700 font-bold py-3 px-4 mb-3'>
                Job Location
              </label>
              <input
                id='grid-job-location'
                name='grid-job-location'
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
                Job description
              </label>
              <textarea
                id='grid-job-description'
                name='job-description'
                cols='40'
                rows='5'
                placeholder='Job description...'
                className='bg-gray-200 text-black rounded-lg py-3 px-4 mb-3 focus:outline-none resize-none'
                required
              />
            </div>
          </div>
          <span className='font-bold block tracking-wide py-3 px-4 mb-3 text-gray-700 uppercase'>Salary</span>
          <div className='flex w-full justify-around text-gray-700 uppercase py-2 px-4'>
            <input
              type='number'
              min='0'
              step='100'
              id='minimum-salary'
              name='minimum-salary'
              className='py-2 px-3 mb-3 rounded-lg bg-gray-200 focus:outline-none'
              required
            />
            <span className='py-2 px-3 mb-3 text-gray-700 font-bold block tracking-wide uppercase focus:outline-none'>
              -
            </span>
            <input
              type='number'
              min='0'
              step='100'
              id='maximum-salary'
              name='maximum-salary'
              className='py-2 px-3 mb-3 rounded-lg bg-gray-200 focus:outline-none'
              required
            />
          </div>
          <div className='font-bold block tracking-wide text-gray-700 uppercase py-3 px-4 mb-3'>
            Select experience level
          </div>
          <div className='flex w-full justify-center'>
            <button
              className='focus:outline-none uppercase bg-green-500 hover:bg-green-300 focus:bg-blue-500 text-white font-bold mx-2 py-2 px-4 rounded-lg'
              onClick={e => {
                e.preventDefault();
                this.props.onExperienceClick(CHOOSE_INTERN);
              }}
            >
              INTERN
            </button>
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
              htmlFor='skill-search'
              className='font-bold  tracking-wide text-gray-700 uppercase py-2 px-4 mb-3 mt-3'
            >
              Skills
            </label>
            <input
              type='text'
              id='skill-search'
              name='skill-search'
              className=' py-2 px-3 mb-3 rounded-lg bg-gray-200 focus:outline-none'
              placeholder='Search for skill..'
              onChange={e => {
                this.props.onSkillChange(e.target.value);
              }}
              onKeyDown={e => this.handleKeyDown(e)}
            />
            <button
              className='rounded-lg bg-green-500 py-2 px-3 m-2 hover:bg-green-300 text-white font-bold text-center focus:outline-none'
              onClick={e => {
                e.preventDefault();
                if (this.props.selectedSkill !== '' && this.props.skills.indexOf(this.props.selectedSkill) === -1) {
                  this.props.onAddSkillClick(this.props.selectedSkill);
                }
                document.getElementById('skill-search').value = '';
              }}
            >
              Add
            </button>
          </div>
          <div className=''>{this.injectSkillsIntoForm(this.props.skills)}</div>
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
  const { experienceLevel, skills, selectedSkill } = state.jobForm;
  return {
    experienceLevel,
    skills,
    selectedSkill
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onExperienceClick: exp => {
      dispatch(changeExperienceLevel(exp));
    },

    onAddSkillClick: name => {
      dispatch(addSkill(name));
    },

    onSkillChange: selectedSkill => {
      dispatch(selectSkill(selectedSkill));
    },

    onSkillDelete: name => {
      dispatch(deleteSkill(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
