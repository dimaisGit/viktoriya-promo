export const CODE_REQUEST_REQUEST = 'CODE_REQUEST_REQUEST'
export const CODE_REQUEST_SUCCESS = 'CODE_REQUEST_SUCCESS'

const headers = {
    'Content-Type' : 'application/json'
}

export const handleSendCode = userPhone => {
    return async dispatch => {
        console.log(userPhone)
        let response = await fetch('http://mandarin.mywfc.ru/api/getCode', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                user_phone: userPhone
            })
        })
        let jsR = await response.json();
        console.log(jsR)
    }
}