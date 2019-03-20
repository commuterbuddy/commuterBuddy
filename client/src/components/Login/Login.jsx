import React, { Component } from 'react';
import styles from './Login.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      .post('/api/auth', { params: { username, password }})
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  handleLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .get('/api/auth', { params: { username, password }})
      .then(data => console.log(data))
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
      <div className={styles.bg}>
        <div className={styles.container}>
          <form className={styles.login} >
          <h2>Log in or sign up</h2>
            <label className={styles.label} >
              <input
                className={styles.input}
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} >
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button
              type="submit"
              onClick={this.handleSignup}
              disabled={!this.validateForm()}
              className={styles.button}
            >
              Sign up
            </button>
            <button
              type="submit"
              onClick={this.handleLogin}
              disabled={!this.validateForm()}
              className={styles.button}
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
