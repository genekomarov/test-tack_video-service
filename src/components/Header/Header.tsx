import React from "react";
import style from './Header.module.css'
import videoserviceLogo from '../../assets/videoserviceLogo.svg'
import Auth from "./Auth/Auth";

const Header = () => {
    return (
        <header className={style.wrapper}>
            <div className={style.logo}>
                <img src={videoserviceLogo} alt=""/>
                <span>Видеосервис</span>
            </div>
            <div className={style.search}>
                <input className={style.searchField} type="text" placeholder={"Поиск ..."}/>
                <span className={style.searchButton}>Найти</span>
            </div>

            <Auth />

        </header>
    )
};

export default Header;


