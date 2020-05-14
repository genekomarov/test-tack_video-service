import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.wrapper}>
            <div>logo</div>
            <div>search</div>
            <div>login</div>
        </header>
    )
};

export default Header;


