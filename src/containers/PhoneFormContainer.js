import React from 'react'
import { connect } from 'react-redux'
import { handleSendCode, handleCheckCode } from "../actions/UserActions";
import PhoneForm from "../components/PhoneForm";

class PhoneFormContainer extends React.Component {
    render() {
        const { handleSendCode, handleCheckCode, codeSent, error, verifyCodeError } = this.props
        console.log(error)
        return (
            <>
                <PhoneForm
                    handleSendCode={handleSendCode}
                    handleCheckCode={handleCheckCode}
                    codeSent={codeSent}
                    sendError={error}
                    verifyCodeError={verifyCodeError}
                />
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        codeSent: store.user.codeSent,
        error: store.user.error,
        verifyCodeError: store.user.verifyCodeError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSendCode: (userPhone) => dispatch(handleSendCode(userPhone)),
        handleCheckCode: (userPhone, userCode) => dispatch(handleCheckCode(userPhone, userCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFormContainer)