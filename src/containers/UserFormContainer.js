import React from 'react'
import { connect } from 'react-redux'
import UserForm from "../components/UserForm";
import { handleUpdateUser, handleGetMyPrizes, handleAddBarcode } from "../actions/UserActions";

class UserFormContainer extends React.Component {
    render() {
        const { handleUpdateUser, handleAddBarcode, userToken, userName, userLastName, userEmail, userBirthDate, handleGetMyPrizes, userPrizes, codeError } = this.props
        console.log(userToken)
        return (
            <>
                <UserForm
                    userToken={userToken}
                    handleUpdateUser={handleUpdateUser}
                    handleAddBarcode={handleAddBarcode}
                    handleGetMyPrizes={handleGetMyPrizes}
                    userPrizes={userPrizes}
                    userData = {{
                        userName: userName,
                        userLastName: userLastName,
                        userEmail: userEmail,
                        userBirthDate: userBirthDate
                    }}
                    codeError={codeError}
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
        userBirthDate: store.user.userBirthDate,
        userPrizes: store.user.userPrizes,
        codeError: store.user.codeError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleUpdateUser: (userToken, userName, userLastName, userEmail, userBirthDate) => dispatch(handleUpdateUser(userToken, userName, userLastName, userEmail, userBirthDate)),
        handleGetMyPrizes: userToken => dispatch(handleGetMyPrizes(userToken)),
        handleAddBarcode: (userToken, barcode) => dispatch(handleAddBarcode(userToken, barcode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer)