import React, { Component } from "react";
import axios from "../api/api_config";
import { LOGIN_ENDPOINT } from "./SignUpForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  LOGIN,
  LOGOUT,
  loginOrLogout,
  setUsertype,
  SET_EMPLOYEE,
  SET_EMPLOYER,
  setToken,
} from "../actions/login";
import { HOME_ENDPOINT, EMPLOYEE } from "../api/endpoints";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  textFieldForm: {
    color: "#fff",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    underline: "hover",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      errorMsg: "",
      error: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const { setToken } = this.props;
    axios
      .post(LOGIN_ENDPOINT, {
        username,
        password,
      })
      .then((res) => {
        setToken(res.headers.authorization);
      })
      .catch((err) => {
        this.setState({
          errorMsg: "Incorrect username or password!",
          error: true,
        });
        setTimeout(() => {
          this.setState({ errorMsg: "", error: false });
        }, 2000);
        console.log(err);
      });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { error, errorMsg } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <div className="flex flex-col items-center rounded-lg text-white font-bold mt-24">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="w-full">
            <TextField
              variant="filled"
              margin="normal"
              id="username"
              label="Username"
              name="username"
              error={error}
              helperText={errorMsg}
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              className={classes.submit}
              fullWidth
              required
              autoFocus
              autoComplete="Username"
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              InputProps={{ className: classes.textFieldForm }}
              InputLabelProps={{ className: classes.textFieldForm }}
              error={error}
              helperText={errorMsg}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              onClick={this.onSubmit}
              fullWidth
              variant="contained"
              color="primary"
            >
              <span className="text-white focus:outline-none font-bold">
                {" "}
                Sign In
              </span>
            </Button>

            <Grid container className="mt-4">
              <Grid item xs>
                <Link href="#" variant="body2" color="initial">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" color="initial">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(loginOrLogout(LOGIN)),
    logout: () => dispatch(loginOrLogout(LOGOUT)),
    setUsertype: (usertype) => dispatch(setUsertype(usertype)),
    setToken: (token) => dispatch(setToken(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
