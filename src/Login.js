import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";

class Login extends Component {
  state = {};

  render() {
    return (
      <Paper className="login">
        <div className="">
          <h1>Admin Login</h1>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="email"
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between"></Grid>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Link to="/Navbar">
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: "none" }}
              >
                Login
              </Button>
            </Link>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default Login;
