import React from "react";
import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.wrapper}>
            <div className={style.tab}>Фильмы</div>
            <div className={style.tab}>Телеканалы</div>
        </nav>
    )
};

export default Nav;


