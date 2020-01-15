import React from 'react'
import { Field, reduxForm, SubmissionError, change, stopSubmit } from "redux-form";
import { RenderField } from "./RenderField";
import Countdown from 'react-countdown';


class PhoneForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            timer: false
        }
    }
    onHandleSubmit = values => {
        // console.log('submit')
        this.setState((prevState) => {
          return { timer: !prevState.timer}
        })
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Укажите корректный номер', _error: 'Login failed!' })
        }
       
        if (!this.props.codeSent || !values.userCode)
            this.props.handleSendCode('+7' + values.userPhone)
        else
            this.props.handleCheckCode('+7' + values.userPhone, values.userCode)
    }
    resetTimer = () => {
        this.setState({
            timer: true
        })
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
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a complete state
              return <Completionist/>;
            } else {
              // Render a countdown
              return (<span className="formCodeAgain">
                {this.state.timer ? 'Код успешно отправлен. \n Повторная отправка возможна через ' + seconds + ' сек.' :
                'Код был отправлен повторно.'}
              </span>)

            }
          };
        const Completionist = () => (
            <button type='submit' disabled={submitting} className="formCodeAgain"> Отправить код повторно </button>
            );
        
        return (
            <>
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <div className="cancelBut"></div>
                <h2>Введите номер телефона</h2>
                <Field name="userPhone" component={RenderField} type="tel" placeholder='9990000000' index='1' pattern="[0-9]{10}"/>
                {codeSent && <p className="formCodeEnt">Введите код из смс:</p>}
                {codeSent && <Field name='userCode' component={RenderField} placeholder=" " />}
                {codeSent && <Countdown date={Date.now() + 59000}  intervalDelay={1000} precision={.3} renderer={renderer}>
                  <Completionist/>
                </Countdown>}
                {sendError && <div className='error'>{sendError}</div>}
                <div className="centerBut">
                    <button type="submit" disabled={submitting}>{!codeSent ? 'Получить код' : 'Подтвердить код'}</button>
                </div>
            </form>
            </>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
