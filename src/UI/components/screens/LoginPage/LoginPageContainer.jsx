import React from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { getLoginToSystem } from '../../../../BLL/reducers/auth-reducer'

class LoginPageContainer extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<LoginPage
				login={this.props.getLoginToSystem}
				isAuth={this.props.isAuth}
				captchaUrl={this.props.captchaUrl}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl,
	}
}

export default connect(mapStateToProps, { getLoginToSystem })(LoginPageContainer)
