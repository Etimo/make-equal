import React from 'react';
import '../css/header.css';
import headerImage from '../resources/images/logo-skarpning.svg';

const Header = () => {
    return (
            <div className="header"><img src={headerImage} alt="logga"/></div>
            );
}
export default Header;
