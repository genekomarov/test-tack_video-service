// @ts-ignore
import {get_cookie} from "../helpers/cookie";

const SET_USER_NAME = 'profile/SET_USER_NAME';

type initialState = {
    userName: string | null
}

const initialState: initialState = {
    userName: null
};

const profileReducer = (state = initialState, action: any): initialState => {
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

type setUserNameActionType = {
    type: typeof SET_USER_NAME,
    userName: string
}

export const setUserName = (userName: string): setUserNameActionType => ({
    type: SET_USER_NAME,
    userName
});



export const getUserName = () => (dispatch: any) => {
    let userNameCookie = get_cookie('username');

    userNameCookie === null
        ? dispatch(setUserName("---"))
        : dispatch(setUserName(userNameCookie));
};

export const saveUserName = (userName: string) => (dispatch: Function) => {

    document.cookie = `username=${userName}`;
    dispatch(getUserName());

};

export default profileReducer;