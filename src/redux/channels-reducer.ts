import perviyChannel from '../assets/perviy.png';
import x2Channel from '../assets/2x2.png';
import fill21Channel from '../assets/Fill21.png';
import amediaChannel from '../assets/amedia.png';

export type ChannelsType = Array<{
    name: string
    logo: string,
    programs: Array<{
        time: string,
        program: string
    }>
}>

const initialState = {
    channels: [
        {
            name: "Первый канал",
            logo: perviyChannel,
            programs: [
                {
                    time: "13:00",
                    program: "Новости (с субтитрами)"
                },
                {
                    time: "14:00",
                    program: "Давай поженимся"
                },
                {
                    time: "15:00",
                    program: "Другие новости"
                },
            ]
        },
        {
            name: "2x2",
            logo: x2Channel,
            programs: [
                {
                    time: "13:00",
                    program: "МУЛЬТ ТВ. Сезон 4, 7 серия"
                },
                {
                    time: "14:00",
                    program: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
                },
                {
                    time: "15:00",
                    program: "БУРДАШЕВ. Сезон 1, 20 серия"
                },
            ]
        },
        {
            name: "РБК",
            logo: fill21Channel,
            programs: [
                {
                    time: "13:00",
                    program: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
                },
                {
                    time: "14:00",
                    program: "ДЕНЬ. Главные темы"
                },
                {
                    time: "15:00",
                    program: "Главные новости"
                },
            ]
        },
        {
            name: "AMEDIA PREMIUM",
            logo: amediaChannel,
            programs: [
                {
                    time: "13:00",
                    program: "Клиент всегда мёртв"
                },
                {
                    time: "14:00",
                    program: "Голодные игры: Сойка-пересмешница. Часть I"
                },
                {
                    time: "15:00",
                    program: "Секс в большом городе"
                },
            ]
        }
    ]
}

export type  InitialState = typeof initialState

const channelsReducer = (state = initialState): InitialState => {
    return state
}

export default channelsReducer