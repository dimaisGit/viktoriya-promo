export const CODE_REQUEST_SUCCESS = 'CODE_REQUEST_SUCCESS'
export const CODE_REQUEST_FAIL = 'CODE_REQUEST_FAIL'

export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS'
export const VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL'

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const SET_TOKEN_TO_REDUX_SUCCESS = 'SET_TOKEN_TO_REDUX'
export const SET_TOKEN_TO_REDUX_FAIL = 'SET_TOKEN_TO_REDUX_FAIL'

export const GET_MY_PRIZES_SUCCESS = 'GET_MY_PRIZES_SUCCESS'

export const ADD_BARCODE_SUCCESS = 'ADD_BARCODE_SUCCESS'

export const handleAddBarcode = (userToken, barcode) => {
    return async dispatch => {
        console.log(userToken, barcode)
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/addBarcode', {
            method: 'POST',
            body: JSON.stringify({
                user_token: userToken,
                barcode: barcode
            })
        })
        let jsR = await response.json()
        console.log(jsR)
        if (jsR.status === 'ok') {
            dispatch(handleGetMyPrizes(userToken))
        }
    }
}

export const handleGetMyPrizes = userToken => {
    return async dispatch => {
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/getBarcodes', {
            method: 'POST',
            body: JSON.stringify({
                user_token: userToken
            })
        })
        let jsR = await response.json()
        console.log(jsR)
        if (jsR.status === 'ok') {
            dispatch({
                type: GET_MY_PRIZES_SUCCESS,
                payload: jsR.list
            })
        }
    }
}

export const handleCheckToken = userToken => {
    return async dispatch => {
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/checkToken', {
            method: 'POST',
            body: JSON.stringify({
                user_token: userToken
            })
        })
        let jsR = await response.json();
        console.log(jsR)
        if (jsR.status === 'ok') {
            const { user_name, user_last_name, user_email, user_birth_date } = jsR
            dispatch({
                type: VERIFY_CODE_SUCCESS,
                payload: {
                    userToken: userToken,
                    userName: user_name,
                    userLastName: user_last_name,
                    userEmail: user_email,
                    userBirthDate: user_birth_date
                }
            })
        }
    }
}

export const handleGetTokenFromLocalStorage = () => {
    let userToken = window.localStorage.getItem('userToken')
    if (userToken)
        return {
            type: SET_TOKEN_TO_REDUX_SUCCESS,
            payload: userToken
        }
    else
        return {
            type: SET_TOKEN_TO_REDUX_FAIL
        }
}

export const handleSendCode = userPhone => {
    return async dispatch => {
        console.log(userPhone)
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/getCode', {
            method: 'POST',
            body: JSON.stringify({
                user_phone: userPhone
            })
        })
        let jsR = await response.json();
        console.log(jsR)
        if (jsR.status === 'ok') {
            dispatch({
                type: CODE_REQUEST_SUCCESS
            })
        }
    }
}

export const handleCheckCode = (userPhone, userCode) => {
    return async dispatch => {
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/verifyCode', {
            method: 'POST',
            body: JSON.stringify({
                user_phone: userPhone,
                user_code: userCode
            })
        })
        let jsR = await response.json()
        console.log(jsR)
        if (jsR.status === 'ok') {
            const { user_token, user_name, user_last_name, user_email, user_birth_date } = jsR
            window.localStorage.setItem('userToken', user_token)
            dispatch({
                type: VERIFY_CODE_SUCCESS,
                payload: {
                    userToken: user_token,
                    userName: user_name,
                    userLastName: user_last_name,
                    userEmail: user_email,
                    userBirthDate: user_birth_date
                }
            })
        }
    }
}

export const handleUpdateUser = (userToken, userName, userLastName, userEmail, userBirthDate) => {
    return async dispatch => {
        console.log(userToken)
        let response = await fetch('http://mandarin-victoria.mywfc.ru/api/updateUser', {
            method: 'POST',
            body: JSON.stringify({
                user_token: userToken,
                user_name: userName,
                user_last_name: userLastName,
                user_email: userEmail,
                user_birth_date: userBirthDate
            })
        })
        let jsR = await response.json();
        console.log(jsR)
        if (jsR.status === 'ok') {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {
                    userName: userName,
                    userLastName: userLastName,
                    userEmail: userEmail,
                    userBirthDate: userBirthDate
                }
            })
        }
    }
}