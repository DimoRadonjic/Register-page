import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import './App.css';

const url = 'https://jsonblob.com/api/jsonBlob';
const validPasswordRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

const validMailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

class App extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    inputClasses: {
      usernameClass: 'regular',
      firstNameClass: 'regular',
      lastNameClass: 'regular',
      emailClass: 'regular',
      passwordClass: 'regular',
      confirmPasswordClass: 'regular',
    },
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

  showError = (name) => {};

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username.length < 6 || this.state.username.length > 12) {
      this.setState({
        ...this.state,
        inputClasses: {
          usernameClass: 'error',
          firstNameClass: 'regular',
          lastNameClass: 'regular',
          emailClass: 'regular',
          passwordClass: 'regular',
          confirmPasswordClass: 'regular',
        },
      });
      NotificationManager.error(
        'Username must be minimum 6 characters long and max is 12',
        'Username Error',
        5000
      );
    } else if (!validMailRegex.test(this.state.email)) {
      this.setState({
        ...this.state,
        inputClasses: {
          usernameClass: 'regular',
          firstNameClass: 'regular',
          lastNameClass: 'regular',
          emailClass: 'error',
          passwordClass: 'regular',
          confirmPasswordClass: 'regular',
        },
      });
      NotificationManager.error(
        'Email you entered is not valid',
        'Email Error',
        5000
      );
    } else if (!validPasswordRegex.test(this.state.password)) {
      this.setState({
        ...this.state,
        inputClasses: {
          usernameClass: 'regular',
          firstNameClass: 'regular',
          lastNameClass: 'regular',
          emailClass: 'regular',
          passwordClass: 'error',
          confirmPasswordClass: 'regular',
        },
      });
      NotificationManager.error(
        'Password must be 8 characters long or more, must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character and at least 1 special character.',
        'Password Error',
        5000
      );
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        ...this.state,
        inputClasses: {
          usernameClass: 'regular',
          firstNameClass: 'regular',
          lastNameClass: 'regular',
          emailClass: 'regular',
          passwordClass: 'regular',
          confirmPasswordClass: 'error',
        },
      });
      NotificationManager.error(
        'Password and confirm password don"t match',
        'Please confirm your password',
        5000
      );
    } else {
      this.setState({
        ...this.state,
        inputClasses: {
          usernameClass: 'regular',
          firstNameClass: 'regular',
          lastNameClass: 'regular',
          emailClass: 'regular',
          passwordClass: 'regular',
          confirmPasswordClass: 'regular',
        },
      });
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
        .then(() =>
          NotificationManager.success('Data sent!', 'Successful', 5000)
        )
        .catch(() =>
          NotificationManager.error('Data failed to send', 'Unsuccessful', 5000)
        );
    }
  };

  render() {
    return (
      <section className='login-register-content'>
        <div className='card-content'>
          <div className='card-header'>
            <h2>Login & Register</h2>
            <p>Login & Register Description</p>
          </div>
          <NotificationContainer />
          <div className='card-body'>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <input
                className={this.state.inputClasses.usernameClass}
                type='text'
                autoComplete='off'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <input
                className={this.state.inputClasses.firstNameClass}
                required
                type='text'
                name='firstName'
                placeholder='Enter you First Name'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                className={this.state.inputClasses.lastNameClass}
                required
                type='text'
                name='lastName'
                placeholder='Enter you Last Name'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                className={this.state.inputClasses.emailClass}
                required
                type='email'
                name='email'
                placeholder='Enter you email'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                className={this.state.inputClasses.passwordClass}
                type='password'
                name='password'
                placeholder='Password'
                autoComplete='off'
                onChange={this.handleChange}
              />
              <input
                className={this.state.inputClasses.confirmPasswordClass}
                type='password'
                name='confirmPassword'
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
