import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError, formValueSelector } from "redux-form";
import { RenderField } from "./RenderField";


class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            couponCodeError: '',
            isFormHidden: true
        }
    }
    componentDidMount (){
        window.$('.cancelBut').click(function(){
            window.$('.mainModal').removeClass('active')
        })
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
        if (!this.state.isChecked) {
            throw new SubmissionError({userConsent: 'Необходимо разрешение на обработку персональных данных', _error: 'Login failed!'})
        }
        this.props.handleUpdateUser(this.props.userToken, values.userName, values.userLastName, values.userEmail, values.userBirthDate)
    }

    onConsentChange = e => {
        this.setState({
            isChecked: e.target.value === 'false' ? true : false
        })
    }

    onCouponSend = () => {
        const { userName, userLastName, userBirthDate, userEmail, couponCode, handleAddBarcode, userToken } = this.props
        let differenceInYears = ((new Date()).getTime() - (new Date(userBirthDate)).getTime()) / (1000 * 3600 * 24) / 365
        if (!userName || !userLastName || !userEmail || !userBirthDate)
            this.setState({
                couponError: 'Заполните все поля!'
            })
        else if (!couponCode)
            this.setState({
                couponError: 'Введите номер купона!'
            })
        else if (differenceInYears < 18) {
            this.setState({
                couponError: 'Ваш возраст <18'
            })
        }
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
        const { handleSubmit, submitting, userPrizes, userData, codeError} = this.props
        const { userName, userLastName, userBirthDate, userEmail } = userData
        const { couponError, isFormHidden } = this.state
        const resultIsFormHidden = isFormHidden && userName && userLastName && userEmail && userBirthDate
        
        return (
            <div className='userForm'>
                <form className="regForm" onSubmit={handleSubmit(this.onHandleSubmit)}>
                    <div className="cancelBut"></div>
                    { resultIsFormHidden && <h3 className='label-reg ' onClick={() => this.setState({isFormHidden: false})}>Нажмите для редактирования личных данных</h3>}
                    { !resultIsFormHidden &&
                        <>
                            <h2 className="label-reg ">{ !userName || !userLastName || !userEmail || !userBirthDate ? 'Заполните форму регистрации' : 'Привет, ' + userName + '!'}</h2>
                            <Field name="userName" component={RenderField} placeholder='Имя' title="Язык ввода - русский" pattern="^[А-Яа-яЁё]+$" index="nameField"/>
                            <Field name="userLastName" component={RenderField} placeholder='Фамилия' index="nameField"/>
                            <Field name="userEmail" component={RenderField} type='email' placeholder='E-mail' index="nameField"/>
                            <Field name="userBirthDate" component={RenderField} type='date' placeholder='Дата рождения' index="nameField"/>
                            <Field name="userConsent" component={RenderField} type='checkbox' label="Я согласен на обработку персональных данных" index="reg" onChange={e => this.onConsentChange(e)} additionalLabelClass={this.state.isChecked ? 'checked' : ''}/>
                            <div className="subBut saveUnder">
                                <button type="submit" disabled={submitting} value="Сохранить">Сохранить</button>
                            </div>
                        </>
                    }
                    {/* <div className='addCouponDiv'>
                        <Field name='couponCode' component={RenderField} couponError={couponError || codeError}/>
                        <div className='subBut addCoup'>
                            <div className='divButton ' onClick={this.onCouponSend}>ДОБАВИТЬ КУПОН</div>
                        </div>
                    </div> */}
                    <h2 className="label-reg secHeading">Мои купоны</h2>
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
