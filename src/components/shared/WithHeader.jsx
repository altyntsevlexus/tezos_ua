import propTypes from 'prop-types';

const WithHeader = ({ children }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__flexbox">{children}</div>
      </div>
    </header>
  );
};

WithHeader.propTypes = {
  children: propTypes.node.isRequired,
};

export default WithHeader;
