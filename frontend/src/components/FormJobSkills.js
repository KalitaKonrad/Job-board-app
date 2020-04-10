import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Container, TextField, Button, FormControl } from '@material-ui/core';
import { styles } from '../theme';
import { Skills } from './Skills';

class FormJobSkills extends Component {
  render() {
    const { skills, classes, nextStep, handleKeyDown, deleteSkill } = this.props;

    return (
      <Container maxWidth='xs'>
        <div className='flex flex-col items-center'>
          <FormControl fullWidth>
            <TextField
              id='skill-input'
              label='Enter required skills'
              name='skill'
              variant='filled'
              inputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              onKeyDown={(e) => handleKeyDown(e)}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
          </FormControl>

          <Skills skills={skills} deleteSkill={deleteSkill} />

          <Button type='submit' size='large' variant='contained' color='primary' name='continue' onClick={nextStep}>
            <span className='text-white focus:outline-none font-bold'> Continue </span>
          </Button>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(FormJobSkills);
