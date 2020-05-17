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


        </div>
    )
}

export default Channels;