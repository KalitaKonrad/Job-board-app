import React, { Component } from "react";
import { Button, Container, TextField } from "@material-ui/core";

class Location extends Component {
  render() {
    const { prevStep, onSubmit, handleChange, values } = this.props;

    return (
      <Container maxWidth="xs">
        <div className="rounded-lg text-white font-bold mt-24">
          <form className="w-full flex flex-col">
            <TextField
              variant="filled"
              margin="normal"
              id="city"
              label="City"
              name="city"
              onChange={handleChange}
              defaultValue={values.city}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant="filled"
              margin="normal"
              id="country"
              label="Country"
              name="country"
              onChange={handleChange}
              defaultValue={values.country}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant="filled"
              margin="normal"
              id="state"
              label="State"
              name="state"
              onChange={handleChange}
              defaultValue={values.state}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant="filled"
              margin="normal"
              id="street"
              label="Street"
              name="street"
              defaultValue={values.street}
              onChange={handleChange}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant="filled"
              margin="normal"
              id="zip"
              label="Zip"
              name="zip"
              onChange={handleChange}
              defaultValue={values.zip}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <div className="flex justify-around">
              <Button
                size="large"
                variant="contained"
                color="primary"
                name="back"
                onClick={prevStep}
              >
                <span className="w-20 text-white focus:outline-none font-bold">
                  {" "}
                  Back{" "}
                </span>
              </Button>
              <Button
                size="large"
                variant="contained"
                color="primary"
                name="continue"
                onClick={onSubmit}
              >
                <span className="w-20 text-white focus:outline-none font-bold">
                  {" "}
                  Submit{" "}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Location;
