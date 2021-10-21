import React from 'react';

import Nav from './Nav';

const Footer = () => {
  return (
    <footer>
      <Nav />
      <div className="footer">
        <div className="wrapper">
          <div className="footer__flexbox">
            <div className="footer__links">
              <ul className="footer__list">
                <li>
                  <a href="#skills" className="link">
                    Testing skills
                  </a>
                </li>
                <li>
                  <a href="#description" className="link">
                    General description of the assignment
                  </a>
                </li>
                <li>
                  <a href="#team" className="link">
                    Our team
                  </a>
                </li>
              </ul>
              <ul className="footer__list">
                <li>
                  <a href="#top" className="link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#top" className="link">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#top" className="link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <p>Copyright (c)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
