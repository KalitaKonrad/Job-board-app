import React, { Component } from 'react';
import { changeExperienceLevel } from '../actions/jobForm/changeExpLevel';
import { connect } from 'react-redux';
import axios from '../api/api_config';
import { JOBS_ENDPOINT } from '../api/endpoints';
import FormJobBasicInfo from './FormJobBasicInfo';
import FormJobLocation from './FormJobLocation';
import FormJobSkills from './FormJobSkills';
import Confirm from './Confirm';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      position: '',
      description: '',
      experienceLevel: 'INTERN',
      location: '',
      minimumSalary: 0,
      maximumSalary: 0,
      city: '',
      country: '',
      locationState: '',
      street: '',
      zip: '',
      skills: [],
      // errors: {},
    };
  }

  // Handle fields change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Go to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Go back the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleKeyDown = (e) => {
    const { skills } = this.state;

    const inputSkill = document.getElementById('skill-input').value;

    if (e.key === 'Enter' && inputSkill !== '' && this.state.skills.indexOf(inputSkill) === -1) {
      skills.push(inputSkill);
      this.setState({ skills: skills });
      document.getElementById('skill-input').value = '';
    }
  };

  deleteSkill = (name) => {
    this.setState({ skills: this.state.skills.filter((skill) => skill !== name) });
  };

  render() {
    const {
      step,
      position,
      description,
      experienceLevel,
      location,
      minimumSalary,
      maximumSalary,
      city,
      country,
      locationState,
      street,
      zip,
      skills,
    } = this.state;

    const values = {
      step,
      position,
      description,
      experienceLevel,
      location,
      minimumSalary,
      maximumSalary,
      city,
      country,
      locationState,
      street,
      zip,
      skills,
    };

    switch (step) {
      case 1:
        return (
          <div>
            <FormJobBasicInfo nextStep={this.nextStep} handleChange={this.handleChange} />
            <FormJobSkills
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              skills={skills}
              handleKeyDown={this.handleKeyDown}
              deleteSkill={this.deleteSkill}
            />
          </div>
        );
      case 2:
        return <FormJobLocation nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />;
      case 3:
        return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
      default:
        return <h1>Something went wrong</h1>;
    }
  }

  onSubmit = async (e) => {
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
        experienceLevel: this.props.experienceLevel,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('Successfully added job job!');
        }
      })
      .catch((err) => {
        console.err(err);
        alert('Something went wrong!');
      });
    // TODO
  };
}

export default JobForm;
