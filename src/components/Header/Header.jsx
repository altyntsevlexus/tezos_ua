import Table from '../Table/Table';
import WithHeader from './WithHeader';
import logo from '../../images/logo-big.svg';

import styled from './Header.module.scss';

const Header = () => {
  return (
    <WithHeader>
      <div className={styled.header__info}>
        <img alt="Tezos" src={logo} className={styled.header__logo} />
        <h1 className={styled.header__title}>Tezos Ukraine</h1>
        <p className={styled.header__description}>
          Front-end development test assignment
        </p>
      </div>
      <Table />
    </WithHeader>
  );
};

export default Header;
