import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { userReducer } from "./user";


export const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer
})