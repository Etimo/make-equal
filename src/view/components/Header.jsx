import React from 'react';
import '../style/header.css';
import headerImage from '../images/logo-skarpning.svg';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={headerImage} alt="logga" />{' '}
      </a>
    </div>
  );
};
export default Header;
