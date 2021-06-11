import React from 'react'

import Nav from './Nav'

const Footer = () => {

    return(
        <footer>
            <Nav/>
            <div className="footer__background">
                <div className="wrapper">
                    <div className="footer__flexbox">
                        <div className="footer__links">
                            <div className="footer__links__blocks">
                                <ul className="footer__links__list">
                                        <li>Testing Skills</li>
                                        <li>General description of the assignment</li>
                                        <li>Our team</li>
                                    </ul>
                                    <ul className="footer__links__list">
                                        <li>About us</li>
                                        <li>Carrier</li>
                                        <li>Blog</li>
                                    </ul>
                            </div>
                            <p>Copyright (c)</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer