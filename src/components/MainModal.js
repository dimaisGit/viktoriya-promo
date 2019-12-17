import React from 'react'
import PhoneFormContainer from "../containers/PhoneFormContainer";
import UserFormContainer from "../containers/UserFormContainer";

export default class MainModal extends React.Component {
    componentDidMount() {
        this.props.handleGetTokenFromLocalStorage()
    }

    componentDidUpdate() {
        if (this.props.userToken) {
            this.props.handleCheckToken(this.props.userToken)
        }
    }

    render() {
        const { codeVerified } = this.props
        return (
            <div className='mainModal'>
                { !codeVerified ?
                    <PhoneFormContainer/>
                :
                    <UserFormContainer />}
            </div>
        )
    }
}