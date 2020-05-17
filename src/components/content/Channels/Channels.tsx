import React from "react";
import style from "./Channels.module.css"
import perviyChannel from '../../../assets/perviy.png';
import x2Channel from '../../../assets/2x2.png';
import fill21Channel from '../../../assets/Fill21.png';
import amediaChannel from '../../../assets/amedia.png';
import cn from 'classnames';

const Channels = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.channel}>
                <div className={style.channelLogo}><img src={perviyChannel} alt=""/></div>
                <div className={style.schedule}>
                    <h3>Первый канал</h3>
                    <div className={cn(style.program, style.activeProgram)}>
                        <div className={style.time}>13:00</div>
                        <div>Новости (с субтитрами)</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>14:00</div>
                        <div>Давай поженимся</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>15:00</div>
                        <div>Другие новости</div>
                    </div>
                </div>
            </div>

            <div className={style.channel}>
                <div className={style.channelLogo}><img src={x2Channel} alt=""/></div>
                <div className={style.schedule}>
                    <h3>2x2</h3>
                    <div className={cn(style.program, style.activeProgram)}>
                        <div className={style.time}>13:00</div>
                        <div>МУЛЬТ ТВ. Сезон 4, 7 серия</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>14:00</div>
                        <div>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>15:00</div>
                        <div>БУРДАШЕВ. Сезон 1, 20 серия</div>
                    </div>
                </div>
            </div>

            <div className={style.channel}>
                <div className={style.channelLogo}><img src={fill21Channel} alt=""/></div>
                <div className={style.schedule}>
                    <h3>РБК</h3>
                    <div className={cn(style.program, style.activeProgram)}>
                        <div className={style.time}>13:00</div>
                        <div>ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>14:00</div>
                        <div>ДЕНЬ. Главные темы</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>15:00</div>
                        <div>Главные новости</div>
                    </div>
                </div>
            </div>

            <div className={style.channel}>
                <div className={style.channelLogo}><img src={amediaChannel} alt=""/></div>
                <div className={style.schedule}>
                    <h3>AMEDIA PREMIUM</h3>
                    <div className={cn(style.program, style.activeProgram)}>
                        <div className={style.time}>13:00</div>
                        <div>Клиент всегда мёртв</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>14:00</div>
                        <div>Голодные игры: Сойка-пересмешница. Часть I</div>
                    </div>
                    <div className={style.program}>
                        <div className={style.time}>15:00</div>
                        <div>Секс в большом городе</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Channels;