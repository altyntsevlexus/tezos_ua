import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../images/logo.svg';

import styled from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/tezos_ua">
      <div className={styled.logo}>
        <Icon className={styled.logo__icon} />
        <p className={styled.logo__text}>Tezos4all</p>
      </div>
    </Link>
  );
};

export default Logo;
