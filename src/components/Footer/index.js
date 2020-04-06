import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <div className="github footer-icon">
      <a href="https://github.com/JulieAllix">
        <Icon name="github" size="big" color="white" className="icon-link" />
      </a>
    </div>
    <div className="contact footer-icon">
      <Link to="/contact">
        <Icon name="mail" size="big" color="white" className="icon-link" />
      </Link>
    </div>
    <div className="linkedIn footer-icon">
      <a href="https://www.linkedin.com/in/julieallix">
        <Icon name="linkedin" size="big" color="white" className="icon-link" />
      </a>
    </div>
    <div className="wordPress footer-icon">
      <a href="https://julieallix.wordpress.com/">
        <Icon name="wordpress" size="big" color="white" className="icon-link" />
      </a>
    </div>
  </FooterStyled>
);

// == Export
export default Footer;
