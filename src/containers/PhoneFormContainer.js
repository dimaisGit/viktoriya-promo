import React from 'react'
import { connect } from 'react-redux'
import { handleSendCode } from "../actions/UserActions";
import PhoneForm from "../components/PhoneForm";

class PhoneFormContainer extends React.Component {
    render() {
        const { handleSendCode } = this.props
        return (
            <>
                <PhoneForm
                    handleSendCode={handleSendCode}
                />
            </>
        )
    }
}

// const mapStateToProps = store => {
//     return {
//
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        handleSendCode: (userPhone) => dispatch(handleSendCode(userPhone))
    }
}

export default connect(null, mapDispatchToProps)(PhoneFormContainer)