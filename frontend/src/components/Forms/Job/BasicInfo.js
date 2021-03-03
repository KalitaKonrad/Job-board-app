import React, { Component } from "react";
import { Container, MenuItem, TextField } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../../theme";

class BasicInfo extends Component {
  render() {
    const { values, handleChange, experienceLevel } = this.props;
    const skills = ["INTERN", "JUNIOR", "MID", "SENIOR"];

    return (
      <Container maxWidth="xs">
        <div className="rounded-lg text-white font-bold mt-24">
          <form className="w-full flex flex-col items-center">
            <TextField
              variant="filled"
              margin="normal"
              id="position"
              label="Position"
              name="position"
              onChange={handleChange}
              // error={error}
              // helperText={errorMsg}
              defaultValue={values.position}
              fullWidth
              required
              autoFocus
              autoComplete="Position..."
            />
            <TextField
              variant="filled"
              margin="normal"
              id="description"
              label="Description"
              name="description"
              multiline
              rows={6}
              rowsMax={10}
              onChange={handleChange}
              defaultValue={values.description}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete="Description..."
            />
            <FormControl fullWidth>
              <Select
                id="experience-level"
                name="experienceLevel"
                variant="filled"
                label="Choose experience level"
                // SelectDisplayProps={{color: 'red'}}
                onChange={handleChange}
                defaultValue={experienceLevel}
                fullWidth
                required
                autoFocus
              >
                {skills.map((skill) => (
                  <MenuItem key={skill} value={skill}>
                    {skill}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Choose experience level</FormHelperText>
            </FormControl>
            <TextField
              type="number"
              variant="filled"
              margin="normal"
              id="minimum-salary"
              label="Minimum salary"
              name="minimumSalary"
              onChange={handleChange}
              defaultValue={values.minimumSalary}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete="Minimum salary..."
            />
            <TextField
              type="number"
              variant="filled"
              margin="normal"
              id="maximum-salary"
              label="Maximum salary"
              name="maximumSalary"
              onChange={handleChange}
              defaultValue={values.maximumSalary}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete="Maximum salary..."
            />
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(BasicInfo);
