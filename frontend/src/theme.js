import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue, lightBlue, lightGreen } from '@material-ui/core/colors';

export const styles = (theme) => ({
  textFieldForm: {
    color: '#fff',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

let theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightBlue,
    text: {
      primary: '#fff',
      secondary: green,
    },
  },
  status: {
    danger: 'red',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
