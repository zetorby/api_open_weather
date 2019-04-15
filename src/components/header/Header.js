import React from 'react';

import style from './header.module.css';

const Header = () => {
    return (
        <header className={style.main}>
            <h1>Current weather in your city</h1>
        </header>
    );
}

export default Header;
