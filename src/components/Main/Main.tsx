import React from "react";
import style from './Main.module.css'
import Novelty from "./Novelty/Novelty";
import Genre from "./Genre/Genre";

const Main = () => {
    return (
        <div className={style.wrapper}>
            <Novelty />
            <Genre />
        </div>
    )
};

export default Main;


