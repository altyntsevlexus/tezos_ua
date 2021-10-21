import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link to="/tezos_ua">
      <div className="logo">
        <Icon className="logo__icon" />
        <p className="logo__text">Tezos4all</p>
      </div>
    </Link>
  );
};

export default Logo;
