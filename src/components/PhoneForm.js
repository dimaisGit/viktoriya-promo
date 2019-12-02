import React from 'react'
import { Field, reduxForm } from "redux-form";
import { RenderField } from "./RenderField";

class PhoneForm extends React.Component {

    onHandleSubmit = values => {
        console.log(values)
        this.props.handleSendCode(values.userPhone)
    }

    render() {
        const { handleSubmit, submitting, handleSendCode } = this.props
        console.log(this.props)
        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <Field name="userPhone" component={RenderField} type="phone" placeholder='Телефон'/>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                </div>
            </form>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
