import React from "react";
import { ErrorMessage, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NEXT_STEP, updateFields } from "../../../actions/jobFormActions";

const BasicInfoTut = (props) => {
  const fields = useSelector((state) => state.jobForm);

  const { register, errors, handleSubmit } = useForm({
    defaultValues: fields,
  });

  const onSubmit = (data) => {
    dispatch(updateFields(data));
    dispatch({ type: NEXT_STEP });
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            placeholder="Position..."
            ref={register({ required: "This field is required!" })}
            className="form-control"
            autoComplete="off"
            id="position"
          />
          <ErrorMessage
            className="text-danger"
            errors={errors}
            name="position"
            as="p"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            rows="7"
            cols="15"
            placeholder="Description..."
            name="description"
            ref={register({ required: true })}
          />
          {errors.description && (
            <p className="text-danger">This field is required!</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="experienceLevel">Experience level</label>
          <select
            name="experienceLevel"
            id="experienceLevel"
            autoComplete="off"
            className="form-control cursor-pointer"
            ref={register({ required: true })}
          >
            <option value="INTERN">INTERN</option>
            <option value="JUNIOR">JUNIOR</option>
            <option value="MID">MID</option>
            <option value="SENIOR">SENIOR</option>
          </select>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label htmlFor="minimumSalary">Minimum Salary</label>
              <input
                type="number"
                name="minimumSalary"
                placeholder="0"
                autoComplete="off"
                className="form-control"
                id="minimumSalary"
                ref={register}
              />
            </div>
            <div className="col-6">
              <label htmlFor="maximumSalary">Maximum Salary</label>
              <input
                type="number"
                name="maximumSalary"
                placeholder="0"
                autoComplete="off"
                className="form-control"
                id="maximumSalary"
                ref={register}
              />
            </div>
          </div>
        </div>

        <button className="form-control btn-outline-info" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default BasicInfoTut;
