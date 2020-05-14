import React from "react";
import style from './Genre.module.css'

const Genre = () => {
    return (
        <section>
            <h2>Жанры</h2>
            <div className={style.genre}>
                <div className={style.movieItem}>Жанр</div>
                <div className={style.movieItem}>Жанр</div>
                <div className={style.movieItem}>Жанр</div>
                <div className={style.movieItem}>Жанр</div>
            </div>
        </section>
    )
};

export default Genre;


