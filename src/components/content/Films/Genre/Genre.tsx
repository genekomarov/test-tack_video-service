import React from "react";
import style from './Genre.module.css'

const Genre = () => {
    return (
        <section>
            <h2>Жанры</h2>
            <div className={style.genre}>

                <div className={style.genreItem}>
                    <img src="https://w7.pngwing.com/pngs/1002/722/png-transparent-emoji-smiley-drawing-emoticon-smiley-miscellaneous-english-nose.png" alt=""/>
                    <div>Название Жанра</div>
                </div>

                <div className={style.genreItem}>
                    <img src="https://w7.pngwing.com/pngs/1002/722/png-transparent-emoji-smiley-drawing-emoticon-smiley-miscellaneous-english-nose.png" alt=""/>
                    <div>Название Жанра</div>
                </div>

                <div className={style.genreItem}>
                    <img src="https://w7.pngwing.com/pngs/1002/722/png-transparent-emoji-smiley-drawing-emoticon-smiley-miscellaneous-english-nose.png" alt=""/>
                    <div>Название Жанра</div>
                </div>

                <div className={style.genreItem}>
                    <img src="https://w7.pngwing.com/pngs/1002/722/png-transparent-emoji-smiley-drawing-emoticon-smiley-miscellaneous-english-nose.png" alt=""/>
                    <div>Название Жанра</div>
                </div>
                
                
            </div>
        </section>
    )
};

export default Genre;


