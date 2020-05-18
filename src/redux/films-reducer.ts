import missiyaNevypolnimaPosledstviya from '../assets/missiya-nevypolnima-posledstviya.jpg'
import velikiyUravnitel2 from '../assets/velikiy-uravnitel-2.jpg'
import poisk from '../assets/poisk.jpg'
import supersemeyka2 from '../assets/supersemeyka-2.jpg'

export type MoviesType = Array<{
    name: string
    description: string,
    image: string
}>

const initialState = {
    movies: [
        {
            name: 'Миссия невыполнима: Последствия',
            description: 'Итан Хант и его команда, а также недавно примкнувшие к ним союзники, вынуждены действовать наперегонки со временем, когда новая миссия идет не по плану.',
            image: missiyaNevypolnimaPosledstviya
        },
        {
            name: 'Великий уравнитель 2',
            description: 'Продолжение истории Роберта Маккола, бывшего агента ЦРУ, который самостоятельно вершит правосудие.',
            image: velikiyUravnitel2
        },
        {
            name: 'Поиск',
            description: '16-летняя дочь Дэвида Кима пропадает без следа, полиция разводит руками. Отчаявшийся отец взламывает компьютер девочки, чтобы понять, что он ничего не знает про дочь…',
            image: poisk
        },
        {
            name: 'Суперсемейка 2',
            description: 'После событий первой части суперсемейка пользуется повышенным вниманием со стороны журналистов.',
            image: supersemeyka2
        },
    ]
}

export type  InitialState = typeof initialState

const filmsReducer = (state = initialState): InitialState => {
    return state
}

export default filmsReducer