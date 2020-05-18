import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";
import filmsReducer from "./films-reducer";
import channelsReducer from "./channels-reducer";

const reducers = combineReducers({
     profile: profileReducer,
     films: filmsReducer,
     channels: channelsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;