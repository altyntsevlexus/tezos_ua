import propTypes from 'prop-types';

import styled from './Input.module.scss';

const inputStatus = (validation) => {
  switch (validation) {
    case true:
      return `${styled.input} ${styled['input--status--resolved']}`;
    case false:
      return `${styled.input} ${styled['input--status--error']}`;
    default:
      return styled.input;
  }
};

const Input = ({
  labelText,
  name,
  value,
  handleChange,
  validation,
  handleValidate,
  type,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        required
        onChange={handleChange}
        onBlur={handleValidate}
        className={inputStatus(validation)}
      />
      <label htmlFor={name} className={styled.input__label}>
        {labelText}
      </label>
    </>
  );
};

Input.propTypes = {
  labelText: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  handleValidate: propTypes.func.isRequired,
  validation: propTypes.bool,
  type: propTypes.string,
};

Input.defaultProps = {
  labelText: null,
  validation: null,
  type: 'text',
};

export default Input;
