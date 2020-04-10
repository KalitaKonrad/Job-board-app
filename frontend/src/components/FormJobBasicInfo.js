import React, { Component } from 'react';
import { Container, TextField, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { styles } from '../theme';

class FormJobBasicInfo extends Component {
  render() {
    const { classes, handleChange, experienceLevel } = this.props;
    const skills = ['INTERN', 'JUNIOR', 'MID', 'SENIOR'];

    return (
      <Container maxWidth='xs'>
        <div className='rounded-lg text-white font-bold mt-24'>
          <form className='w-full flex flex-col items-center'>
            <TextField
              variant='filled'
              margin='normal'
              id='position'
              label='Position'
              name='position'
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              onChange={handleChange}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete='Position...'
            />
            <TextField
              variant='filled'
              margin='normal'
              id='description'
              label='Description'
              name='description'
              multiline
              rows={6}
              rowsMax={10}
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              onChange={handleChange}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete='Description...'
            />

            <TextField
              id='experience-level'
              name='experienceLevel'
              margin='normal'
              variant='filled'
              select
              label='Choose experience level'
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
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
            </TextField>
            <TextField
              type='number'
              variant='filled'
              margin='normal'
              id='minimum-salary'
              label='Minimum salary'
              name='minimumSalary'
              onChange={handleChange}
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete='Minimum salary...'
            />
            <TextField
              type='number'
              variant='filled'
              margin='normal'
              id='maximum-salary'
              label='Maximum salary'
              name='maximumSalary'
              onChange={handleChange}
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
              autoComplete='Maximum salary...'
            />
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(FormJobBasicInfo);
