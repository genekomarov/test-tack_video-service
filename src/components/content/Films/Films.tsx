import React from "react";
import style from './Films.module.css'
import Novelty from "./Novelty/Novelty";
import Genre from "./Genre/Genre";
import {connect} from "react-redux";
import {MoviesType} from "../../../redux/films-reducer";

type FilmsProps = {
    movies: MoviesType
}

const Films = ({movies}: FilmsProps) => {
    return (
        <div className={style.wrapper}>
            <div><Novelty movies={movies}/></div>
            <div><Genre /></div>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        movies: state.films.movies
    }
}

export default connect(mapStateToProps)(Films);


