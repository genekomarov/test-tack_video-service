// @ts-ignore
import {get_cookie} from "../helpers/cookie";

const SET_USER_NAME = 'profile/SET_USER_NAME';

const initialState = {
    userName: "---"
};

const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.userName
            };
        default:
            return state;

    }
};

export const setUserName = (userName: string) => ({
    type: SET_USER_NAME,
    userName
});



export const getUserName = () => (dispatch: Function) => {
    let userNameCookie = get_cookie('username');

    userNameCookie === null
        ? dispatch(setUserName("---"))
        : dispatch(setUserName(userNameCookie));
};

export const saveUserName = (userName: string) => (dispatch: Function) => {

    document.cookie = `username=${userName}`;
    dispatch(getUserName());

    /*let userNameCookie = get_cookie('username');

    userNameCookie === null
        ? dispatch(setUserName("---"))
        : dispatch(setUserName(userNameCookie));*/
};

export default profileReducer;