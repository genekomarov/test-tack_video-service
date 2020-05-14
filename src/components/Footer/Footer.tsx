import React from "react";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.wrapper}>footer
            <div className={"testDiv"}>logo</div>
            <div className={"testDiv"}>address
                <div className={"testDiv"}>Адрес</div>
                <div className={"testDiv"}>Телефон</div>
                <div className={"testDiv"}>Сайт</div>
            </div>
        </div>
    )
};

export default Footer;


