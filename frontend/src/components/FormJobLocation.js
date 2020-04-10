import React, { Component } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { styles } from '../theme';

class FormJobLocation extends Component {
  render() {
    const { classes, prevStep, nextStep } = this.props;

    return (
      <Container maxWidth='xs'>
        <div className='rounded-lg text-white font-bold mt-24'>
          <form className='w-full flex flex-col'>
            <TextField
              variant='filled'
              margin='normal'
              id='city'
              label='City'
              name='city'
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant='filled'
              margin='normal'
              id='country'
              label='Country'
              name='country'
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <TextField
              variant='filled'
              margin='normal'
              id='state'
              label='State'
              name='state'
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              // error={error}
              // helperText={errorMsg}
              fullWidth
              required
              autoFocus
            />
            <div className='flex justify-around'>
              <Button size='large' variant='contained' color='primary' name='back' onClick={prevStep}>
                <span className='w-20 text-white focus:outline-none font-bold'> Back </span>
              </Button>
              <Button size='large' variant='contained' color='primary' name='continue' onClick={nextStep}>
                <span className='w-20 text-white focus:outline-none font-bold'> Continue </span>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(FormJobLocation);
