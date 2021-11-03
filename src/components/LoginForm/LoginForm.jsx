import { useState } from 'react';
import { validate, validatePassword2 } from '../../services/validation';

import Input from '../Input';

import styled from './LoginForm.module.scss';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: {
      value: '',
      isValid: null,
    },
    password: {
      value: '',
      isValid: null,
    },
    password2: {
      value: '',
      isValid: null,
    },
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: {
        ...credentials[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.email.isValid &&
      credentials.password.isValid &&
      credentials.password2.isValid
    ) {
      // eslint-disable-next-line no-alert
      alert('Welcome to Tezos!');
    }
  };

  const handleValidateEmail = () => {
    setCredentials({
      ...credentials,
      email: {
        ...credentials.email,
        isValid: validate('email', credentials.email.value),
      },
    });
  };

  const handleValidatePassword = () => {
    return credentials.password2.value
      ? setCredentials({
          ...credentials,
          password: {
            ...credentials.password,
            isValid: validate('password', credentials.password.value),
          },
          password2: {
            ...credentials.password2,
            isValid: validatePassword2(
              credentials.password.value,
              credentials.password2.value,
            ),
          },
        })
      : setCredentials({
          ...credentials,
          password: {
            ...credentials.password,
            isValid: validate('password', credentials.password.value),
          },
        });
  };

  const handleValidatePassword2 = () => {
    setCredentials({
      ...credentials,
      password2: {
        ...credentials.password2,
        isValid: validatePassword2(
          credentials.password.value,
          credentials.password2.value,
        ),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styled.login}>
      <p className={styled.login__title}>Login</p>

      <div className={styled.login__group}>
        <Input
          labelText="Email"
          name="email"
          value={credentials.email.value}
          handleChange={handleChange}
          handleValidate={handleValidateEmail}
          validation={credentials.email.isValid}
          type="text"
        />

        {credentials.email.isValid || credentials.email.isValid === null ? (
          ''
        ) : (
          <p className={styled.login__notification}>Email is Invalid</p>
        )}
      </div>

      <div className={styled.login__group}>
        <Input
          labelText="Password"
          name="password"
          value={credentials.password.value}
          handleChange={handleChange}
          handleValidate={handleValidatePassword}
          validation={credentials.password.isValid}
          type="password"
        />

        <p
          className={
            credentials.password.isValid ||
            credentials.password.isValid === null
              ? `${styled.login__notification} ${styled['login__notification--c--gray']}`
              : styled.login__notification
          }
        >
          Password must contain only latin letters, 1 upper-case character, 1
          lower-case character, one number and one special character
        </p>
      </div>

      <div className={styled.login__group}>
        <Input
          labelText="Confirm password"
          name="password2"
          value={credentials.password2.value}
          handleChange={handleChange}
          handleValidate={handleValidatePassword2}
          validation={credentials.password2.isValid}
          type="password"
        />

        {credentials.password2.isValid ||
        credentials.password2.isValid === null ? (
          ''
        ) : (
          <p className={styled.login__notification}>
            Passwords don&#39;t match
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
