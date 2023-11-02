import React from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { getLoginToSystem } from '../../../../BLL/reducers/auth-reducer'

class LoginPageContainer extends React.Component {
	componentDidMount() {}

	render() {
		return <LoginPage login={this.props.getLoginToSystem} isAuth={this.props.isAuth} />
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export default connect(mapStateToProps, { getLoginToSystem })(LoginPageContainer)
