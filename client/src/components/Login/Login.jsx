import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authResponse: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
      .then((res) => {
        if (res.data === username) {
          // window.location.href="/#/results";
          localStorage.setItem('user', username);
          // this.setState({
          //   auth: true
          // })
          this.props.authenticate();
        } else if (res.data === 'Name not available') {
          this.setState({
            authResponse: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  handleLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post('/api/login', { username, password })
      .then((res) => {
        if (res.data === username) {
          localStorage.setItem('user', username);
          // this.setState({
          //   auth: true
          // })
          this.props.authenticate();
        } else if (res.data === 'Incorrect password') {
          this.setState({
            authResponse: res.data
          })
        } else if (res.data === 'Username doesn\'t exist') {
          this.setState({
            authResponse: res.data
          })
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
    const { username, password, authResponse } = this.state;

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
              {authResponse === 'Name not available' ? 'Name already taken' : ''}
              {authResponse === 'Incorrect password' ? 'Incorrect password' : ''}
              {authResponse === 'Username doesn\'t exist' ? 'Username doesn\'t exist' : ''}
            </div>
            <button
              type="submit"
              disabled={!this.validateForm()}
              className={styles.button}
              onClick={this.handleSignup}
            >
              Sign up
            </button>
            <button
              type="submit"
              disabled={!this.validateForm()}
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
