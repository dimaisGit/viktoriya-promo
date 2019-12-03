import React from 'react'
import { Field, reduxForm, SubmissionError } from "redux-form";
import { RenderField } from "./RenderField";



class PhoneForm extends React.Component {

    onHandleSubmit = values => {
        if (!values.phoneRegion){
            throw new SubmissionError({ userPhone: 'Phone code is required', _error: "Login failed"})
        }
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Phone is required', _error: 'Login failed!' })
        }
        if (this.props.codeSent && !values.userCode) {
            throw new SubmissionError({ userCode: 'Code is required', _error: 'Login failed!'})
        }
        console.log(values.phoneRegion + values.userPhone)
        if (!this.props.codeSent)
            this.props.handleSendCode(values.userPhone)
        else
            this.props.handleCheckCode(values.userPhone, values.userCode)
    }

    render() {
        const { handleSubmit, submitting, codeSent, sendError } = this.props
        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <Field name="phoneRegion" component="select">
                    <option></option>
                    <option value="+7">+7</option>
                    <option value="+380">+380</option>
                    <option value="+375">+375</option>
                </Field>
                <Field name="userPhone" component={RenderField} placeholder='Телефон'/>
                {codeSent && <Field name='userCode' component={RenderField} placeholder="Код" />}
                {sendError && <div className='error'>{sendError}</div> }
                <div>
                    <button type="submit" disabled={submitting}>Send</button>
                </div>
            </form>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
