import React from 'react'

import {Link, useLocation} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'

import Button from './shared/Button'

const Nav = () => {

    const [dropped, setDropped] = useState(false);

    const handleDropped = () => {    
        setDropped(!dropped);
      };

    const location = useLocation().pathname
    const isMobile = useMediaQuery({ query: `(max-width: 870px)` });

        return(
            <div className="nav__background">
                <div className="wrapper">
                    <div className="nav__flexbox">
                        <Link to='./home'>
                            <div className="logo-box">
                            <img alt="Tezos" src="/tezos_ua/images/vector.png" className="logo-box__logo"/>
                            <p>Tezos4all</p>
                            </div>
                        </Link>
                        {isMobile 
                        ? 
                        <>
                        {dropped ? 
                        <div className='nav__dropdown'>
                            <Link to='./home'><Button className="button_home" name="Home"/></Link>
                            <Link to='./login'><Button className="button_home" name="Login"/></Link>
                        </div>
                        : ''}
                        <Button className="button_home" onClick={handleDropped}><img src='/tezos_ua/images/gamb.png' alt="gamb"></img></Button>
                        </>
                        : 
                        <div className="nav__box">
                            <Link to="/home"><Button className="button_home" name="Home"/></Link>
                            <Link to="/login">
                                <Button className={location === '/login' ? "button_submit_disabled" : "button_submit_enabled"} name="Login"/>
                            </Link>
                        </div>}
                        
                    </div>
                </div>
            </div>
        )
    }

    export default Nav