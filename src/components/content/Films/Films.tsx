import React from "react";
import style from './Films.module.css'
import Novelty from "./Novelty/Novelty";
import Genre from "./Genre/Genre";

const Films = () => {
    return (
        <div className={style.wrapper}>
            <div><Novelty /></div>
            <div><Genre /></div>
        </div>
    )
};

export default Films;


