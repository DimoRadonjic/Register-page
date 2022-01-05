import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    return (
      <section className='login-register-content'>
        <div className='card-content'>
          <div className='card-header'>
            <h2>Login & Register</h2>
            <p>Login & Register Description</p>
          </div>

          <div className='card-body'>
            <form autoComplete='off' method='post'>
              <input
                type='text'
                autoComplete='off'
                name='username'
                placeholder='Username'
              />
              <input
                required
                type='text'
                name='firstName'
                placeholder='Enter you First Name'
                autoComplete='off'
              />
              <input
                required
                type='text'
                name='lastName'
                placeholder='Enter you Last Name'
                autoComplete='off'
              />
              <input
                required
                type='email'
                name='email'
                placeholder='Enter you email'
                autoComplete='off'
              />
              <input
                required
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='off'
              />
              <button type='submit'>Login & Register</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
