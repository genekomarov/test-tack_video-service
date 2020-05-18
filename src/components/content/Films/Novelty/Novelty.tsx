import React from "react";
import style from './Novelty.module.css'
import fireEmoji from '../../../../assets/fire.png'
import {MoviesType} from "../../../../redux/films-reducer";

type FilmsProps = {
    movies: MoviesType
}

const Novelty = ({movies}: FilmsProps) => {

    let moviesElements = movies.map (m => {
        return (
            <div className={style.movieItem}>
                <div style={{backgroundImage: `url(${m.image})`}} className={style.filmImage}>
                    <div className={style.description}>{m.description}</div>
                </div>
                <div className={style.filmName}>{m.name}</div>
            </div>
        )
    })

    return (
        <section className={style.wrapper}>
            <h2><img className={style.headerImg} src={fireEmoji} alt=""/>Новинки</h2>
            <div className={style.movies}>
                {moviesElements}
            </div>
        </section>
    )
};

export default Novelty;


