import React from 'react'
import { connect } from 'react-redux'
import MainModal from "../components/MainModal";

class MainModalContainer extends React.Component {
    render() {
        const { codeVerified } = this.props
        return (
            <>
                <MainModal
                    codeVerified={codeVerified}
                />
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        codeVerified: store.user.codeVerified
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModalContainer)