import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  deleteSkill,
  PREV_STEP,
  updateFields,
  POST_JOB_PENDING,
  POST_JOB_SUCCESS,
  POST_JOB_ERROR,
} from "../../../actions/jobFormActions";
import { HOME_ENDPOINT, JOBS_ENDPOINT } from "../../../api/endpoints";
import axios from "../../../api/api_config";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import AlertInformation from "./AlertInformation";

const SkillsTut = () => {
  const { getValues } = useForm();
  const formData = useSelector((state) => state.jobForm);
  let history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const data = [
    { name: "Java", checked: false },
    { name: "Javascript", checked: false },
    { name: "SQL", checked: false },
    { name: "Spring", checked: false },
    { name: "Hibernate", checked: false },
    { name: "React", checked: false },
  ];

  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch({ type: POST_JOB_PENDING });
    const {
      position,
      experienceLevel,
      description,
      minimumSalary,
      maximumSalary,
      city,
      country,
      street,
      zip,
      state,
      skills,
    } = formData;

    const request = await axios.post(`${JOBS_ENDPOINT}`, {
      params: {
        position,
        experienceLevel,
        description,
        minimumSalary,
        maximumSalary,
        jobLocation: {
          city,
          country,
          street,
          zip,
          state,
        },
        skills,
      },
    });

    const res = request.json();

    console.log(res);
    // request
    //   .then((res) => {
    //     dispatch({ type: POST_JOB_SUCCESS });
    //     setAlertData({
    //       variant: "success",
    //       heading: "Success!",
    //       body: "Job posted successfully.",
    //     });
    //     setShowAlert(true);
    //     history.push(HOME_ENDPOINT);
    //     handleCloseModal();
    //   })
    //   .catch((err) => {
    //     dispatch({ type: POST_JOB_ERROR });
    //     setAlertData({
    //       variant: "danger",
    //       heading: "Error!",
    //       body: "Something went wrong.",
    //     });
    //     setShowAlert(true);
    //     handleCloseModal();
    //   });
  };

  // FIX HERE
  const handleCheckbox = (name) => {
    const skill = data.filter((skill) => skill.name === name)[0];

    skill.checked === false
      ? dispatch(addSkill(name))
      : dispatch(deleteSkill(name));

    skill.checked = !skill.checked;
  };

  return (
    <div>
      <Button onClick={() => setShowAlert(true)}>Show</Button>
      {showAlert && <AlertInformation {...alertData} />}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" onClick={onSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <form>
        <div className="pb-6">Required skills:</div>
        {data.map((skill, index) => {
          const { name } = skill;

          return (
            <div className="input-group mb-3" key={index}>
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    defaultChecked={formData.skills.includes(name)}
                    onClick={() => handleCheckbox(name)}
                  />
                </div>
              </div>
              <span className="form-control">{name}</span>
            </div>
          );
        })}
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <button
                className="form-control btn-outline-info"
                type="button"
                onClick={async () => {
                  dispatch(updateFields(getValues()));
                  dispatch({ type: PREV_STEP });
                }}
              >
                Back
              </button>
            </div>
            <div className="col-6">
              <button
                className="form-control btn-outline-success"
                type="button"
                onClick={handleShowModal}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkillsTut;
