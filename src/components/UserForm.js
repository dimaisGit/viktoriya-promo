import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError, formValueSelector } from "redux-form";
import { RenderField } from "./RenderField";

class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            couponCodeError: ''
        }
    }

    componentDidUpdate() {
        const { userToken, handleGetMyPrizes } = this.props
        if (userToken)
            handleGetMyPrizes(userToken)
    }

    onHandleSubmit = values => {
        if (!values.userName) {
            throw new SubmissionError({ userName: 'Укажите имя', _error: 'Login failed!' })
        }
        if (!values.userLastName) {
            throw new SubmissionError({ userLastName: 'Укажите фамилию', _error: 'Login failed!'})
        }
        if (!values.userEmail) {
            throw new SubmissionError({ userEmail: 'Укажите Email', _error: 'Login failed!'})
        }
        if (!values.userBirthDate) {
            throw new SubmissionError({ userBirthDate: 'Укажите дату рождения', _error: 'Login failed!'})
        }
        if (!values.userConsent) {
            throw new SubmissionError({userConsent: 'Необходимо разрешение на обработку персональных данных', _error: 'Login failed!'})
        }
        console.log()
        this.props.handleUpdateUser(this.props.userToken, values.userName, values.userLastName, values.userEmail, values.userBirthDate)
    }

    onConsentChange = e => {
        console.log(e.target.value)
        this.setState({
            isChecked: e.target.value === 'false' ? true : false
        })
    }

    onCouponSend = () => {
        const { userName, userLastName, userBirthDate, userEmail, couponCode, handleAddBarcode, userToken } = this.props
        console.log(couponCode)
        if (!userName || !userLastName || !userEmail)
            this.setState({
                couponError: 'Заполните все поля!'
            })
        else if (!couponCode)
            this.setState({
                couponError: 'Введите номер купона!'
            })
        else {
            handleAddBarcode(userToken, couponCode)
            this.setState({
                couponError: ''
            })
        }
    }

    getPrizesComponent = userPrizes => {
        if (!userPrizes.length)
            return (
                <div className='haveNoPrizesDiv'>
                    К сожалению, у вас пока что нет купонов
                </div>
            )
        else
            return (
                <div className='couponDiv'>
                 {
                     userPrizes.map((item, index) => {
                         return (
                             <div className='coupon' key={index}>
                                 <span>{(index + 1) + '. '}Купон № </span>{ ' ' + item.barcode}
                             </div>
                         )
                     })
                 }
                </div>
            )
    }

    render() {
        const { handleSubmit, submitting, userPrizes } = this.props
        console.log(userPrizes)
        const { couponError } = this.state
        console.log(this.state.isChecked)
        return (
            <div className='userForm'>
                <form className="regForm" onSubmit={handleSubmit(this.onHandleSubmit)}>
                    <h2 className="label-reg">Заполните форму регистрации</h2>
                    <div className="cancelBut"></div>
                    <Field name="userName" component={RenderField} placeholder='Имя' index="nameField"/>
                    <Field name="userLastName" component={RenderField} placeholder='Фамилия' index="nameField"/>
                    <Field name="userEmail" component={RenderField} type='email' placeholder='E-mail' index="nameField"/>
                    <Field name="userBirthDate" component={RenderField} type='date' placeholder='дд.мм.гггг' index="nameField"/>
                    <Field name="userConsent" component={RenderField} type='checkbox' label="Я согласен на обработку персональных данных" index="reg" onChange={e => this.onConsentChange(e)} additionalLabelClass={this.state.isChecked ? 'checked' : ''}/>
                    <div className="subBut">
                        <button type="submit" disabled={submitting} value="Сохранить">Сохранить</button>
                    </div>
                    <Field name='couponCode' component={RenderField} couponError={couponError}/>
                    <div className='subBut'>
                        <div className='divButton' onClick={this.onCouponSend}>Добавить купон</div>
                    </div>
                    <h2 className="label-reg">Ваши купоны</h2>
                    {this.getPrizesComponent(userPrizes)}
                </form>
            </div>
        )
    }
}

UserForm = reduxForm({
    form: 'user',
    enableReinitialize: true
})(UserForm)
const selector = formValueSelector('user')
UserForm = connect(state => {
    const { userName, userLastName, userEmail, userBirthDate, couponCode } = selector(state, 'userName', 'userLastName', 'userEmail', 'userBirthDate', 'couponCode')
    return {
        userName,
        userLastName,
        userEmail,
        userBirthDate,
        couponCode
    }
})(UserForm)
export default UserForm
