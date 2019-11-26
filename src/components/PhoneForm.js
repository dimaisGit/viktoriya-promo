import React from 'react'
import { Field, reduxForm } from "redux-form";
import { RenderField } from "./RenderField";

class PhoneForm extends React.Component {

    onHandleSubmit = values => {
        console.log(values)
    }

    render() {
        const { handleSubmit, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <Field name="firstName" component={RenderField} type="text" placeholder='First Name'/>
                <Field name="lastName" component={RenderField} type="text" placeholder="Last Name"/>
                <Field name="email" component={RenderField} type="email" placeholder="Email"/>
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
