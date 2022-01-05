import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';

const url = 'http://jsonblob.com/928305936616144896';

class App extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    signedIn: false,
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case 'username':
        this.setState({ username: e.target.value });
        break;
      case 'firstName':
        this.setState({ firstName: e.target.value });

        break;
      case 'lastName':
        this.setState({ lastName: e.target.value });

        break;
      case 'email':
        this.setState({ email: e.target.value });

        break;
      case 'password':
        this.setState({ password: e.target.value });

        break;
      case 'confirmPassword':
        this.setState({ confirmPassword: e.target.value });

        break;

      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted: ', this.state);
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
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <input
                type='text'
                autoComplete='off'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='firstName'
                placeholder='Enter you First Name'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                type='text'
                name='lastName'
                placeholder='Enter you Last Name'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                type='email'
                name='email'
                placeholder='Enter you email'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='off'
                onChange={this.handleChange}
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
