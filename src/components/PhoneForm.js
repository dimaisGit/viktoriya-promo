import React from 'react'
import { Field, reduxForm, SubmissionError, change, stopSubmit } from "redux-form";
import { RenderField } from "./RenderField";



class PhoneForm extends React.Component {

    onHandleSubmit = values => {
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Укажите корректный номер', _error: 'Login failed!' })
        }
        if (this.props.codeSent && !values.userCode) {
            throw new SubmissionError({ userCode: 'Введите полученный код', _error: 'Login failed!' })
        }
        if (!this.props.codeSent)
            this.props.handleSendCode('+7' + values.userPhone)
        else
            this.props.handleCheckCode('+7' + values.userPhone, values.userCode)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { verifyCodeError, dispatch } = this.props
        if (verifyCodeError != prevProps.verifyCodeError)
            dispatch(stopSubmit('phone', {
                userCode: 'Ошибка отправки кода'
            }))
    }

    render() {
        const { handleSubmit, submitting, codeSent, sendError } = this.props
        console.log(sendError)
        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <div className="cancelBut"></div>
                <h2>Введите номер телефона</h2>
                <Field name="userPhone" component={RenderField} type="tel" placeholder='9990000000' index='1' pattern="[0-9]{10}"/>
                <div>
                    <button type="submit" disabled={submitting}>{!codeSent ? 'Отправить код' : 'Подтвердить код'}</button>
                </div>
                {codeSent && <p className="formCodeEnt">Введите код</p>}
                {codeSent && <Field name='userCode' component={RenderField} placeholder=" " />}
                {codeSent && <p className="formCodeAgain">Отправить код повторно</p>}

            </form>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
