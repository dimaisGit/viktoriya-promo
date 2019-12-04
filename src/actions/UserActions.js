export const CODE_REQUEST_SUCCESS = 'CODE_REQUEST_SUCCESS'
export const CODE_REQUEST_FAIL = 'CODE_REQUEST_FAIL'

export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS'
export const VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL'

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const handleCheckToken = userToken => {
    return async dispatch => {
        let response = await fetch('http://mandarin.mywfc.ru/api/checkToken', {
            method: 'POST',
            body: JSON.stringify({
                user_token: userToken
            })
        })
        let jsR = await response.json();
        console.log(jsR)
    }
}

export const handleSendCode = userPhone => {
    return async dispatch => {
        let response = await fetch('http://mandarin.mywfc.ru/api/getCode', {
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
        } else {
            dispatch({
                type: CODE_REQUEST_FAIL,
                payload: jsR.message_text
            })
        }
    }
}

export const handleCheckCode = (userPhone, userCode) => {
    return async dispatch => {
        let response = await fetch('http://mandarin.mywfc.ru/api/verifyCode', {
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
        let response = await fetch('http://mandarin.mywfc.ru/api/updateUser', {
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
                type: UPDATE_USER_SUCCESS
            })
        }
    }
}