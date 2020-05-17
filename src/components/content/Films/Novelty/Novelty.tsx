import React from "react";
import style from './Novelty.module.css'

const Novelty = () => {
    return (
        <section className={style.wrapper}>
            <h2>Новинки</h2>
            <div className={style.movies}>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div>Описание фильма</div>
                    </div>
                    Название фильма
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div>Описание фильма</div>
                    </div>
                    Название фильма
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div>Описание фильма</div>
                    </div>
                    Название фильма
                </div>

                <div className={style.movieItem}>
                    <div className={style.filmImage}>
                        <div>Описание фильма</div>
                    </div>
                    Название фильма
                </div>

            </div>
        </section>
    )
};

export default Novelty;


