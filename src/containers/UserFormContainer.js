import React from 'react'
import { connect } from 'react-redux'
import UserForm from "../components/UserForm";
import { handleUpdateUser } from "../actions/UserActions";

class UserFormContainer extends React.Component {
    render() {
        const { handleUpdateUser, userToken, userName, userLastName, userEmail, userBirthDate } = this.props
        return (
            <>
                <UserForm
                    userToken={userToken}
                    handleUpdateUser={handleUpdateUser}
                    initialValues={{
                        userName: userName,
                        userLastName: userLastName,
                        userEmail: userEmail,
                        userBirthDate: userBirthDate,
                        userConsent: false
                    }}
                />
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        userToken: store.user.userToken,
        userName: store.user.userName,
        userLastName: store.user.userLastName,
        userEmail: store.user.userEmail,
        userBirthDate: store.user.userBirthDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleUpdateUser: (userToken, userName, userLastName, userEmail, userBirthDate) => dispatch(handleUpdateUser(userToken, userName, userLastName, userEmail, userBirthDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer)