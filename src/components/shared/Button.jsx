import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ className, onClick, linkTo, children }) => {
  return linkTo ? (
    <Link to={linkTo} className={`button ${className}`}>
      {children}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: propTypes.string.isRequired,
  linkTo: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node,
};

Button.defaultProps = {
  linkTo: null,
  onClick: () => null,
  children: null,
};

export default Button;
