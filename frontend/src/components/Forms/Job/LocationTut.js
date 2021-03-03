import React from "react";
import { useForm } from "react-hook-form";
import {
  NEXT_STEP,
  PREV_STEP,
  updateFields,
} from "../../../actions/jobFormActions";
import { useDispatch, useSelector } from "react-redux";

const LocationTut = (props) => {
  const fields = useSelector((state) => state.jobForm);

  const { register, errors, handleSubmit, getValues } = useForm({
    defaultValues: fields,
  });

  const onSubmit = (data) => {
    dispatch(updateFields(data));
    dispatch({ type: NEXT_STEP });
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          placeholder="City..."
          className="form-control"
          name="city"
          autoComplete="off"
          ref={register({ required: true })}
        />
        {errors.city && <p className="text-danger">This field is required!</p>}
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          autoComplete="off"
          placeholder="Country..."
          className="form-control"
          name="country"
          ref={register({ required: true })}
        />
        {errors.country && (
          <p className="text-danger">This field is required!</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          autoComplete="off"
          placeholder="State..."
          className="form-control"
          name="state"
          ref={register({ required: true })}
        />
        {errors.state && <p className="text-danger">This field is required!</p>}
      </div>
      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          autoComplete="off"
          placeholder="Street..."
          className="form-control"
          name="street"
          ref={register({ required: true })}
        />
        {errors.street && (
          <p className="text-danger">This field is required!</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          id="zip"
          autoComplete="off"
          placeholder="Zip..."
          className="form-control"
          name="zip"
          ref={register({ required: true })}
        />
        {errors.zip && <p className="text-danger">This field is required!</p>}
      </div>

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
            <button className="form-control btn-outline-info" type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationTut;
