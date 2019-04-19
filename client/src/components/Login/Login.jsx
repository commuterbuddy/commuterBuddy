import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      authResponse: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignup(e) {
    e.preventDefault();
    const { email, username, password } = this.state;
    axios
      .post('/api/signup', { email, username, password })
      .then((res) => {
        if (res.data === email) {
          localStorage.setItem('user', username);
          this.props.authenticate();
        }
      })
      .catch((err) => {
        const errMsg = err.response.data;
        if (errMsg.username) {
          this.setState({
            authResponse: errMsg.email,
          });
        } else if (errMsg.email) {
          this.setState({
            authResponse: errMsg.email,
          });
        } else if (errMsg.password) {
          this.setState({
            authResponse: errMsg.password,
          });
        }
      });
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post('/api/login', { email, password })
      .then((res) => {
        if (res.data.email) {
          localStorage.setItem('user', res.data.username);
          this.props.authenticate();
        }
      })
      .catch((err) => {
        const errMsg = err.response.data;
        if (errMsg.email) {
          this.setState({
            authResponse: errMsg.email,
          })
        } else if (errMsg.password) {
          this.setState({
            authResponse: errMsg.password,
          })
        }
      })
  }

  render() {
    const { email, username, password, authResponse } = this.state;

    if (this.props.authenticated === true) {
      return <Redirect to='/results'/>
    }
    return (
      <div className={styles.container1}>
        <div className={styles.container2}>
          <form className={styles.login}>
            <h2>Log in or sign up</h2>
            <label className={styles.label}>
              <input
                className={styles.input}
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
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
              {authResponse}
            </div>
            <button
              type="submit"
              className={styles.button}
              onClick={this.handleSignup}
            >
              Sign up
            </button>
            <button
              type="submit"
              className={styles.button}
              onClick={this.handleLogin}
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
