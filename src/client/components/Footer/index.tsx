import React from 'react';
import logoFlow from '../../media/images/logo-flow.png';
import './styles.scss';

const Footer: React.FunctionComponent = ({},{}) => (
  <footer className="Footer">
    <p>Sitio experimental desarrollado por <a href="https://github.com/dantovbein">@dan.tovbein</a></p>
    <img className="Footer__logo-flow" src={logoFlow}/>
  </footer>
)

export default Footer;