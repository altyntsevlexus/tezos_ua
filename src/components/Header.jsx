import React from 'react';
import Table from './Table';
import WithHeader from './shared/WithHeader';
import logo from '../images/logo-big.svg';

const Header = () => {
  return (
    <WithHeader>
      <div className="header__info">
        <img alt="Tezos" src={logo} className="header__logo" />
        <h1 className="header__title">Tezos Ukraine</h1>
        <p className="header__description">
          Front-end development test assignment
        </p>
      </div>
      <Table />
    </WithHeader>
  );
};

export default Header;
