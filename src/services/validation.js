let re;

const validate = (key, value) => {
  switch (key) {
    case 'email':
      re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return value === '' ? null : re.test(value);
    case 'password':
      re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return value === '' ? null : re.test(value);
    default:
      return null;
  }
};

const validatePassword2 = (password, password2) => {
  return password2 === '' ? null : password2 === password;
};

export { validate, validatePassword2 };
