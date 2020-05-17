import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
     profile: profileReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;