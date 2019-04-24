import React from 'react';
import styles from '../Home/Home.css';

const Login = ({ handleLogin, handleChange, email, password, username, authResponse }) => {
  return (
    <>
      <label htmlFor='email' className={styles.label}>
        <input
          className={styles.input}
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor='password' className={styles.label}>
        <input
          className={styles.input}
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => handleChange(e)}
        />
      </label>
      <div className={styles.auth}>
        {authResponse}
      </div>
      <button
        type='submit'
        className={styles.button}
        onClick={e => handleLogin(e)}
      >
        Log in
      </button>
    </>
  );
}

export default Login;
