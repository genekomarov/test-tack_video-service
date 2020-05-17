import React from "react";
import style from './Novelty.module.css'
import fireEmoji from '../../../../assets/fire.png'
import missiyaNevypolnimaPosledstviya from '../../../../assets/missiya-nevypolnima-posledstviya.jpg'
import velikiyUravnitel2 from '../../../../assets/velikiy-uravnitel-2.jpg'
import poisk from '../../../../assets/poisk.jpg'
import supersemeyka2 from '../../../../assets/supersemeyka-2.jpg'

const Novelty = () => {
    return (
        <section className={style.wrapper}>
            <h2><img className={style.headerImg} src={fireEmoji} alt=""/>Новинки</h2>
            <div className={style.movies}>

                <div className={style.movieItem}>
                    <div style={{backgroundImage: `url(${missiyaNevypolnimaPosledstviya})`}} className={style.filmImage}>
                        <div className={style.description}>Итан Хант и его команда, а также недавно примкнувшие к ним союзники, вынуждены действовать наперегонки со временем, когда новая миссия идет не по плану.</div>
                    </div>
                    <div className={style.filmName}>Миссия невыполнима: Последствия</div>
                </div>

                <div className={style.movieItem}>
                    <div style={{backgroundImage: `url(${velikiyUravnitel2})`}} className={style.filmImage}>
                        <div className={style.description}>Продолжение истории Роберта Маккола, бывшего агента ЦРУ, который самостоятельно вершит правосудие.</div>
                    </div>
                    <div className={style.filmName}>Великий уравнитель 2</div>
                </div>

                <div className={style.movieItem}>
                    <div style={{backgroundImage: `url(${poisk})`}} className={style.filmImage}>
                        <div className={style.description}>16-летняя дочь Дэвида Кима пропадает без следа, полиция разводит руками. Отчаявшийся отец взламывает компьютер девочки, чтобы понять, что он ничего не знает про дочь…</div>
                    </div>
                    <div className={style.filmName}>Поиск</div>
                </div>

                <div className={style.movieItem}>
                    <div style={{backgroundImage: `url(${supersemeyka2})`}} className={style.filmImage}>
                        <div className={style.description}>После событий первой части суперсемейка пользуется повышенным вниманием со стороны журналистов.</div>
                    </div>
                    <div className={style.filmName}>Суперсемейка 2</div>
                </div>



            </div>
        </section>
    )
};

export default Novelty;


