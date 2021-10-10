import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img className={style.logo} src="./../images/logo.png" alt="logo"/>
            </header>
        </>
    );
};

export default Header;