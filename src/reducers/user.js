import {
    CODE_REQUEST_SUCCESS,
    CODE_REQUEST_FAIL,
    VERIFY_CODE_SUCCESS,
    VERIFY_CODE_FAIL,
    SET_TOKEN_TO_REDUX_SUCCESS,
    SET_TOKEN_TO_REDUX_FAIL,
    GET_MY_PRIZES_SUCCESS,
    UPDATE_USER_SUCCESS,
    CODE_ERROR
} from "../actions/UserActions";

export const initialState = {
    userPrizes: [],
    codeSent: false,
    codeVerified: false,
    error: '',
    verifyCodeError: '',
    userToken: null,
    userName: null,
    userLastName: null,
    userEmail: null,
    userBirthDate: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CODE_REQUEST_SUCCESS:
            return { ...state, codeError: '', codeSent: true, error: '' }
        case CODE_REQUEST_FAIL:
            return { ...state, codeError: '', error: action.payload}
        case VERIFY_CODE_SUCCESS:
            const { userToken, userName, userLastName, userEmail, userBirthDate } = action.payload
            return { ...state, codeError: '', codeVerified: true, userToken: userToken, userName: userName, userLastName: userLastName, userEmail: userEmail, userBirthDate: userBirthDate}
        case VERIFY_CODE_FAIL:
            return { ...state, verifyCodeError: action.payload}
        case SET_TOKEN_TO_REDUX_SUCCESS:
            return { ...state, codeError: '', userToken: action.payload}
        case GET_MY_PRIZES_SUCCESS:
            return { ...state, userPrizes: action.payload}
        case UPDATE_USER_SUCCESS:
            return  { ...state, codeError: '', userName: action.payload.userName, userLastName: action.payload.userLastName, userEmail: action.payload.userEmail, userBirthDate: action.payload.userBirthDate}
        case CODE_ERROR:
            return { ...state, codeError: action.payload }
        default:
            return state
    }
}