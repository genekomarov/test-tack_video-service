import React from "react";
import style from './Genre.module.css'
import comedyEmoji from '../../../../assets/comedy.png'
import dramaEmoji from '../../../../assets/drama.png'
import fantasyEmoji from '../../../../assets/fantasy.png'
import horrorEmoji from '../../../../assets/horror.png'

const Genre = () => {
    return (
        <section>
            <h2>Жанры</h2>
            <div className={style.genre}>

                <div className={style.genreItem}>
                    <img src={comedyEmoji} alt=""/>
                    <div>Комедия</div>
                </div>

                <div className={style.genreItem}>
                    <img src={dramaEmoji} alt=""/>
                    <div>Драма</div>
                </div>

                <div className={style.genreItem}>
                    <img src={fantasyEmoji} alt=""/>
                    <div>Фонтастика</div>
                </div>

                <div className={style.genreItem}>
                    <img src={horrorEmoji} alt=""/>
                    <div>Ужасы</div>
                </div>
                
                
            </div>
        </section>
    )
};

export default Genre;


