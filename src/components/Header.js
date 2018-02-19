import React from 'react';
import '../css/header.css';
import headerImage from '../images/logo-skarpning.svg';

const Header = () => {
    return (
            <label className="header">
                <a href='/'>
                  <img src={headerImage} alt="logga"/>
                </a>
              </label>
            );
}
export default Header;
