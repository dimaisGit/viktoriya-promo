import React from 'react'
import { connect } from 'react-redux'
import { handleCheckToken, handleGetTokenFromLocalStorage } from "../actions/UserActions";
import MainModal from "../components/MainModal";

class MainModalContainer extends React.Component {
    render() {
        const { handleCheckToken, handleGetTokenFromLocalStorage, codeVerified, userToken } = this.props
        return (
            <>
                <MainModal
                    codeVerified={codeVerified}
                    handleCheckToken={handleCheckToken}
                    handleGetTokenFromLocalStorage={handleGetTokenFromLocalStorage}
                    userToken={userToken}
                />
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        codeVerified: store.user.codeVerified,
        userToken: store.user.userToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCheckToken: userToken => dispatch(handleCheckToken(userToken)),
        handleGetTokenFromLocalStorage: () => dispatch(handleGetTokenFromLocalStorage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModalContainer)