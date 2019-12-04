import React from 'react';
import './Header.scss';
import Logo from "./Logo";

const Header = () => {
    return (
        <div className='header'>
            <Logo className="header__logo" color="#582775"/>
        </div>
    )
}

export default Header;