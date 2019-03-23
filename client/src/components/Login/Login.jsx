import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignup(e) {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post('/api/signup', { username, password })
      .then(res => {
        if (res.data === 'ok') {
          // window.location.href="/#/results";
          console.log(this.props.history);
        }
      })
      .catch(err => console.log(err))
    }

  validateForm() {
    const { username, password } = this.state;
    return (
      username.length > 0
      && password.length > 0
    );
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className={styles.container1}>
        <div className={styles.container2}>
          <form className={styles.login}>
            <h2>Log in or sign up</h2>
            <label className={styles.label}>
              <input
                className={styles.input}
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label}>
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <div className={styles.auth}>
              {this.props.authenticated === 'failed' ? 'Please enter the correct email/password combination' : ''}
            </div>
            <br />
            <button
              type="submit"
              // disabled={!this.validateForm()}
              className={styles.button}
              onClick={this.handleSignup}
            >
              Sign up
            </button>
            <button
              type="submit"
              // disabled={!this.validateForm()}
              className={styles.button}
              onClick={this.handleSignup}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
