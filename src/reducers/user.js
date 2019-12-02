import {
    CODE_REQUEST_SUCCESS
} from "../actions/UserActions";

export const initialState = {
    userToken: null,
    userName: null,
    userLastName: null,
    userEmail: null,
    userBirthDate: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CODE_REQUEST_SUCCESS:
            return { ...state }
        default:
            return state
    }
}