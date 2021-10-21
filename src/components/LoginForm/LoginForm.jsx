import React, { useState } from 'react';
import {
  validateEmail,
  validatePassword,
  validatePassword2,
} from '../../services/validation';

import Input from '../Input/Input';

import styled from './LoginForm.module.scss';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const [validation, setValidation] = useState({
    email: null,
    password: null,
    password2: null,
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation.email && validation.password && validation.password2) {
      // eslint-disable-next-line no-alert
      alert('Welcome to Tezos!');
    }
  };

  const { email, password, password2 } = credentials;

  const handleValidateEmail = () => {
    setValidation({
      ...validation,
      email: validateEmail(email),
    });
  };

  const handleValidatePassword = () => {
    return password2
      ? setValidation({
          ...validation,
          password: validatePassword(password),
          password2: validatePassword2(password, password2),
        })
      : setValidation({
          ...validation,
          password: validatePassword(password),
        });
  };

  const handleValidatePassword2 = () => {
    setValidation({
      ...validation,
      password2: validatePassword2(password, password2),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styled.login}>
      <p className={styled.login__title}>Login</p>

      <div className={styled.login__group}>
        <Input
          labelText="Email"
          name="email"
          value={credentials.email}
          handleChange={handleChange}
          handleValidate={handleValidateEmail}
          validation={validation.email}
          type="text"
        />

        {validation.email || validation.email === null ? (
          ''
        ) : (
          <p className={styled.login__notification}>Email is Invalid</p>
        )}
      </div>

      <div className={styled.login__group}>
        <Input
          labelText="Password"
          name="password"
          value={password}
          handleChange={handleChange}
          handleValidate={handleValidatePassword}
          validation={validation.password}
          type="password"
        />

        {validation.password || validation.password === null ? (
          <p
            className={`${styled.login__notification} ${styled['login__notification--c--gray']}`}
          >
            Password must contain only latin letters, 1 upper-case character, 1
            lower-case character, one number and one special character
          </p>
        ) : (
          <p className={styled.login__notification}>
            Password must contain only latin letters, 1 upper-case character, 1
            lower-case character, one number and one special character
          </p>
        )}
      </div>

      <div className={styled.login__group}>
        <Input
          labelText="Confirm password"
          name="password2"
          value={password2}
          handleChange={handleChange}
          handleValidate={handleValidatePassword2}
          validation={validation.password2}
          type="password"
        />

        {validation.password2 || validation.password2 === null ? (
          ''
        ) : (
          <p className={styled.login__notification}>
            Passwords don`&#39;`t match
          </p>
        )}
      </div>

      <input
        type="submit"
        value="Login"
        className="button button--type--filled"
      />
    </form>
  );
};

export default LoginForm;
