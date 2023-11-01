import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const setStateToPropsForRedirect = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export const withAuthRedirect = Component => {
	class RedirectComponent extends React.Component {
		render() {
      //if there is no authentication, go to 'login'
			if (!this.props.isAuth) {
				return <Navigate to='/login' />
			}
			return <Component {...this.props} />
		}
	}

	const ConnectAuthRedirectComponent = connect(setStateToPropsForRedirect)(RedirectComponent)
	return ConnectAuthRedirectComponent
}
