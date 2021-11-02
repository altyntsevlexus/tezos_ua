import Table from '../Table';
import WithHeader from '../WithHeader';
import { useBlocksState } from '../../context/blocksContext';

import logo from '../../images/logo-big.svg';

import styled from './Header.module.scss';

const HEADERS = [
  {
    name: 'Block Id',
    key: 'level',
  },
  {
    name: 'Baker',
    key: 'baker',
  },
  {
    name: 'Created',
    key: 'timestamp',
  },
  {
    name: '# of operations',
    key: 'numOfOperations',
  },
  {
    name: 'Volume',
    key: 'volume',
  },
  {
    name: 'Fees',
    key: 'fees',
  },
  {
    name: 'Endorsements',
    key: 'endorsements',
  },
];

const Header = () => {
  const { blocks } = useBlocksState();

  return (
    <WithHeader>
      <div className={styled.header__info}>
        <img alt="Tezos" src={logo} className={styled.header__logo} />
        <h1 className={styled.header__title}>Tezos Ukraine</h1>
        <p className={styled.header__description}>
          Front-end development test assignment
        </p>
      </div>
      <Table cols={HEADERS} rows={blocks} />
    </WithHeader>
  );
};

export default Header;
