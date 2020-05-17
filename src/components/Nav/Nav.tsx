import React from "react";
import style from './Nav.module.css';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={style.wrapper}>
            <NavLink to={'/movies'} activeClassName={style.active} className={style.tab}>
                <div>Фильмы</div>
            </NavLink>

            <NavLink to={'/channels'} activeClassName={style.active} className={style.tab}>
                <div>Телеканалы</div>
            </NavLink>
        </nav>
    )
};

export default Nav;


