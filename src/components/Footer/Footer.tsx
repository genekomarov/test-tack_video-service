import React from "react";
import style from './Footer.module.css'
import htcLogo from '../../assets/htcLogo.png'

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}><img src={htcLogo} alt=""/></div>
            <address>
                <div>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</div>
                <div className={style.telephones}><a href="tel:+73412938861">+7 (3412) 938861</a>, <a href="tel:+73412432929">43-29-29</a></div>
                <div><a href="https://htc-cs.ru/">htc-cs.ru</a></div>
            </address>
        </div>
    )
};

export default Footer;


