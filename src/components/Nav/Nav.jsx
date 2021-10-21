import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Button from '../shared/Button';
import Logo from '../Logo/Logo';

import gamb from '../../images/gamb.svg';

import styled from './Nav.module.scss';

const Nav = () => {
  const [dropped, setDropped] = useState(false);

  const handleDropped = () => {
    setDropped(!dropped);
  };

  const location = useLocation().pathname;
  const isMobile = useMediaQuery({ query: `(max-width: 870px)` });

  return (
    <div className={styled.nav}>
      <div className="wrapper">
        <div className={styled.nav__flexbox}>
          <Logo />
          {isMobile ? (
            <>
              <Button
                className="button--type--transparent"
                onClick={handleDropped}
              >
                <img src={gamb} alt="gamb" />
              </Button>
              {dropped && (
                <div className={styled.nav__dropdown}>
                  <Button linkTo="/tezos_ua" className="button--type--filled">
                    Home
                  </Button>
                  <Button linkTo="/login" className="button--type--filled">
                    Login
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div>
              <Button linkTo="/tezos_ua" className="button--type--transparent">
                Home
              </Button>
              <Button
                linkTo="/login"
                className={
                  location === '/login'
                    ? 'button--type--border'
                    : 'button--type--filled'
                }
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
