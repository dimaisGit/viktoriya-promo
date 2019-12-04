import React from 'react'
import { Field, reduxForm, SubmissionError } from "redux-form";
import { RenderField } from "./RenderField";

class UserForm extends React.Component {

    onHandleSubmit = values => {
        if (!values.userName) {
            throw new SubmissionError({ userName: 'Name is required', _error: 'Login failed!' })
        }
        if (!values.userLastName) {
            throw new SubmissionError({ userLastName: 'Last name is required', _error: 'Login failed!'})
        }
        if (!values.userEmail) {
            throw new SubmissionError({ userEmail: 'Email is required', _error: 'Login failed!'})
        }
        if (!values.userBirthDate) {
            throw new SubmissionError({ userBirthDate: 'Birth date is required', _error: 'Login failed!'})
        }
        if (!values.userConsent) {
            throw new SubmissionError({userConsent: 'Consent is required', _error: 'Login failed!'})
        }
        this.props.handleUpdateUser(this.props.userToken, values.userName, values.userLastName, values.userEmail, values.userBirthDate)
    }

    render() {
        const { handleSubmit, submitting, initialValues } = this.props
        // console.log(initialValues)
        return (
            <form className="regForm" onSubmit={handleSubmit(this.onHandleSubmit)}>
                <h2 className="label-reg">Заполните форму регистрации</h2>
                <div className="cancelBut"></div>
                <Field name="userName" component={RenderField} placeholder='Имя' index="nameField"/>
                <Field name="userLastName" component={RenderField} placeholder='Фамилия' index="nameField"/>
                <Field name="userEmail" component={RenderField} type='email' placeholder='E-mail' index="nameField"/>
                <Field name="userBirthDate" component={RenderField} type='date' placeholder='дд.мм.гггг' index="nameField"/>
                 <Field name="userConsent" component={RenderField} type='checkbox' label="Я согласен на обработку персональных данных" index="reg" />
                <div className="subBut">
                    <button type="submit" disabled={submitting} value="Сохранить">Сохранить</button>
                </div>
            </form>
        )
    }
}

export default UserForm = reduxForm({
    form: 'user',
    enableReinitialize: true
})(UserForm)
