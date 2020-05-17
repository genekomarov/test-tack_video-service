import React from "react";
import style from './Novelty.module.css'
import fireEmoji from '../../../../assets/fire.png'

const Novelty = () => {
    return (
        <section className={style.wrapper}>
            <h2><img className={style.headerImg} src={fireEmoji} alt=""/>Новинки</h2>
            <div className={style.movies}>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div className={style.description}>Описание фильма</div>
                    </div>
                    <div className={style.filmName}>Название фильма</div>
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div className={style.description}>Описание фильма</div>
                    </div>
                    <div className={style.filmName}>Название фильма</div>
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div className={style.description}>Описание фильма</div>
                    </div>
                    <div className={style.filmName}>Название фильма</div>
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div className={style.description}>Описание фильма</div>
                    </div>
                    <div className={style.filmName}>Название фильма</div>
                </div>



            </div>
        </section>
    )
};

export default Novelty;


