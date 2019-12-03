import React from 'react'
import { Field, reduxForm, SubmissionError, change } from "redux-form";
import { RenderField } from "./RenderField";



class PhoneForm extends React.Component {

    onHandleSubmit = values => {
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Phone is required', _error: 'Login failed!' })
        }
        if (this.props.codeSent && !values.userCode) {
            throw new SubmissionError({ userCode: 'Code is required', _error: 'Login failed!'})
        }
        if (!this.props.codeSent)
            this.props.handleSendCode('+7' + values.userPhone)
        else
            this.props.handleCheckCode('+7' + values.userPhone, values.userCode)
    }

    render() {
        const { handleSubmit, submitting, codeSent, sendError } = this.props
        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <h2>Введите номер телефона</h2>
                <div className="cancelBut"></div>
                <Field name="userPhone" component={RenderField} placeholder=''/>
                <div>
                    <button type="submit" disabled={submitting}>Отправить код</button>
                </div>
                {codeSent && <Field name='userCode' component={RenderField} placeholder="Код" />}
                {sendError && <div className='error'>{sendError}</div> }
                

            </form>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
