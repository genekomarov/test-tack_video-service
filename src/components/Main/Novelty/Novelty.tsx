import React from "react";
import style from './Novelty.module.css'

const Novelty = () => {
    return (
        <section>
            <h2>Новинки</h2>
            <div className={style.movies}>
                <div className={style.movieItem}>Фильм</div>
                <div className={style.movieItem}>Фильм</div>
                <div className={style.movieItem}>Фильм</div>
                <div className={style.movieItem}>Фильм</div>
            </div>
        </section>
    )
};

export default Novelty;


