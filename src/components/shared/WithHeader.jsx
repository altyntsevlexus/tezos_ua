import propTypes from 'prop-types';

import styled from '../Header/Header.module.scss';

const WithHeader = ({ children }) => {
  return (
    <header className={styled.header}>
      <div className="wrapper">
        <div className={styled.header__flexbox}>{children}</div>
      </div>
    </header>
  );
};

WithHeader.propTypes = {
  children: propTypes.node.isRequired,
};

export default WithHeader;
