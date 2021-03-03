import React, { Component } from "react";
import JobFormBasicInfo from "./BasicInfo";
import Location from "./Location";
import JobFormSkills from "./Skills";
import { JOBS_ENDPOINT } from "../../../api/endpoints";
import axios from "../../../api/api_config";
import { connect } from "react-redux";

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      position: "",
      description: "",
      experienceLevel: "INTERN",
      minimumSalary: 0,
      maximumSalary: 0,
      city: "",
      country: "",
      state: "",
      street: "",
      zip: "",
      skills: [],
      errors: {},
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

    const inputSkill = document.getElementById("skill-input").value;

    if (
      e.key === "Enter" &&
      inputSkill !== "" &&
      this.state.skills.indexOf(inputSkill) === -1
    ) {
      skills.push(inputSkill);
      this.setState({ skills: skills });
      document.getElementById("skill-input").value = "";
    }
  };

  deleteSkill = (name) => {
    this.setState({
      skills: this.state.skills.filter((skill) => skill !== name),
    });
  };

  render() {
    const {
      step,
      position,
      description,
      experienceLevel,
      minimumSalary,
      maximumSalary,
      city,
      country,
      state,
      street,
      zip,
      skills,
    } = this.state;

    const values = {
      position,
      description,
      experienceLevel,
      minimumSalary,
      maximumSalary,
      city,
      country,
      state,
      street,
      zip,
      skills,
    };

    switch (step) {
      case 1:
        return (
          <div>
            <JobFormBasicInfo
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            <JobFormSkills
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              skills={skills}
              handleKeyDown={this.handleKeyDown}
              deleteSkill={this.deleteSkill}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <Location
            onSubmit={this.onSubmit}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <div>empty</div>;
      default:
        return <h1>Something went wrong</h1>;
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      position,
      description,
      experienceLevel,
      minimumSalary,
      maximumSalary,
      city,
      country,
      locationState,
      street,
      zip,
      skills,
    } = this.state;
    // const {errors} = this.state;
    // const values = Object.keys(this.state).filter(fieldName => { //TODO: validate input
    //   return !(fieldName === 'step' || fieldName === 'errors');
    // });
    await axios
      .post(JOBS_ENDPOINT, {
        position: position,
        description: description,
        experienceLevel: experienceLevel,
        minimumSalary: minimumSalary,
        maximumSalary: maximumSalary,
        skills: skills,
        jobLocation: {
          city: city,
          country: country,
          state: locationState,
          street: street,
          zip: zip,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Success!");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  // await axios
  //     .post(JOBS_ENDPOINT, {
  //       position: position,
  //       location: location,
  //       description: description,
  //       skills: this.props.skills,
  //       experienceLevel: this.props.experienceLevel,
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert('Successfully added Job!');
  //       }
  //     })
  //     .catch((err) => {
  //       console.err(err);
  //       alert('Something went wrong!');
  //     });
  // TODO
}

const mapStateToProps = (state) => {
  return {
    token: state.isLogged.token,
  };
};

export default connect(mapStateToProps, null)(JobForm);
