import propTypes from 'prop-types';

const Input = ({
  labelName,
  name,
  value,
  handleChange,
  errorTracker,
  type,
}) => {
  return (
    <>
      <label htmlFor={name} className="login__label">
        {labelName}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        required
        className={
          errorTracker ? 'login__input' : 'login__input login__input_error'
        }
        onChange={handleChange}
      />
    </>
  );
};

Input.propTypes = {
  labelName: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  errorTracker: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
};

export default Input;
