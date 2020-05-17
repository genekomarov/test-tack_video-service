// @ts-ignore
const SET_USER_NAME = 'profile/SET_USER_NAME';

const initialState = {
    userName: "Александр К."
};

const profileReducer = (state = initialState, action: any) => {
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
    userName: ''
});

export const getUserName: Function = () => (dispatch: any) => {

};

export const saveUserName: Function = () => (dispatch: any) => {

};

export default profileReducer;