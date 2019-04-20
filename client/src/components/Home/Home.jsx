import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Signup from '../Signup/Signup.jsx';
import Login from '../Login/Login.jsx';
import styles from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      authResponse: '',
      display: 'signup',
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggleForm() {
    this.setState((prevState) => {
      return { display: !prevState.display, authResponse: '' };
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
          localStorage.setItem('email', email);
          this.props.authenticate();
        }
      })
      .catch((err) => {
        const errMsg = err.response.data;
        if (errMsg.username) {
          this.setState({
            authResponse: errMsg.username,
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
          localStorage.setItem('email', email);
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
          });
        }
      });
  }

  render() {
    if (this.props.authenticated === true) {
      return <Redirect to='/results'/>
    }
    return (
      <div className={styles.container1}>
        <div className={styles.container2}>
          <form className={styles.login}>
            <button
              type='button'
              className={styles.button}
              onClick={this.toggleForm}
            >
              {this.state.display ? 'Already have an account? Log in here!' : 'New to the site? Create an account!'}
            </button>
            {this.state.display
              ? <Signup handleSignup={this.handleSignup} handleChange={this.handleChange} {...this.state} />
              : <Login handleLogin={this.handleLogin} {...this.state} />
            }
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
