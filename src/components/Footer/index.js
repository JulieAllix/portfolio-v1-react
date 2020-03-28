import React from 'react';
import { Icon } from 'semantic-ui-react';

import FooterStyled from './FooterStyled';

const Footer = () => (
  <FooterStyled>
    <div className="github footer-icon">
      <Icon name="github" size="big" color="grey" />
    </div>
    <div className="contact footer-icon">
      <Icon name="mail" size="big" color="grey" />
    </div>
    <div className="linkedIn footer-icon">
      <Icon name="linkedin" size="big" color="grey" />
    </div>
    <div className="wordPress footer-icon">
      <Icon name="wordpress" size="big" color="grey" />
    </div>
  </FooterStyled>
);

// == Export
export default Footer;
