import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

import WithHeader from '../components/Header/WithHeader';

const Login = () => {
  return (
    <WithHeader>
      <LoginForm />
    </WithHeader>
  );
};

export default Login;
