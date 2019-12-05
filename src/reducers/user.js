import {
    CODE_REQUEST_SUCCESS,
    CODE_REQUEST_FAIL,
    VERIFY_CODE_SUCCESS,
    VERIFY_CODE_FAIL,
    SET_TOKEN_TO_REDUX_SUCCESS,
    SET_TOKEN_TO_REDUX_FAIL,
    GET_MY_PRIZES_SUCCESS
} from "../actions/UserActions";

export const initialState = {
    userPrizes: [],
    codeSent: false,
    codeVerified: false,
    error: '',
    userToken: null,
    userName: null,
    userLastName: null,
    userEmail: null,
    userBirthDate: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CODE_REQUEST_SUCCESS:
            return { ...state, codeSent: true, error: '' }
        case CODE_REQUEST_FAIL:
            return { ...state, error: action.payload}
        case VERIFY_CODE_SUCCESS:
            const { userToken, userName, userLastName, userEmail, userBirthDate } = action.payload
            return { ...state, codeVerified: true, userToken: userToken, userName: userName, userLastName: userLastName, userEmail: userEmail, userBirthDate: userBirthDate}
        case SET_TOKEN_TO_REDUX_SUCCESS:
            return { ...state, userToken: action.payload}
        case GET_MY_PRIZES_SUCCESS:
            return { ...state, userPrizes: action.payload}
        default:
            return state
    }
}